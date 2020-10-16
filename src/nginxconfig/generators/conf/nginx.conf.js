/*
Copyright 2020 DigitalOcean

This code is licensed under the MIT License.
You may obtain a copy of the License at
https://github.com/digitalocean/nginxconfig.io/blob/master/LICENSE or https://mit-license.org/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions :

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

import sslProfiles from '../../util/ssl_profiles';
import websiteConf from './website.conf';
import shareQuery from '../../util/share_query';

export default (domains, global) => {
    const config = {};

    // Source
    config['# Generated by nginxconfig.io'] = '';
    const query = shareQuery(domains.map((domain, index) => [domain, index]).filter(d => d[0] !== null), global);
    config[`# ${window.location.protocol}//${window.location.host}${window.location.pathname}${query}`] = '';

    // Basic nginx conf
    config.user = global.nginx.user.computed;
    if (global.nginx.pid.computed)
        config.pid = global.nginx.pid.computed;
    config.worker_processes = global.nginx.workerProcesses.computed;
    config.worker_rlimit_nofile = 65535;
    config.events = {
        multi_accept: 'on',
        worker_connections: 65535,
    };

    // HTTP (kv so we can use the same key multiple times)
    config.http = [];

    if (global.php.phpBackupServer.computed)
        config.http.push(['upstream php', {
            server: [
                `${global.php.phpServer.computed[0] === '/' ? 'unix:' : ''}${global.php.phpServer.computed}`,
                `${global.php.phpBackupServer.computed[0] === '/' ? 'unix:' : ''}${global.php.phpBackupServer.computed} backup`,
            ],
        }]);

    config.http.push(['charset', 'utf-8']);
    config.http.push(['sendfile', 'on']);
    config.http.push(['tcp_nopush', 'on']);
    config.http.push(['tcp_nodelay', 'on']);
    if (!global.security.serverTokens.computed)
        config.http.push(['server_tokens', 'off']);
    if (!global.logging.logNotFound.computed)
        config.http.push(['log_not_found', 'off']);
    config.http.push(['types_hash_max_size', 2048]);
    config.http.push(['client_max_body_size', `${global.nginx.clientMaxBodySize.computed}M`]);

    config.http.push(['# MIME', '']);
    config.http.push(['include', 'mime.types']);
    config.http.push(['default_type', 'application/octet-stream']);

    // Cloudflare
    if (global.logging.cloudflare.computed) {
        config.http.push(['# Log Format', '']);
        config.http.push(['log_format', `cloudflare '$remote_addr - $remote_user [$time_local] '
        '"$request" $status $body_bytes_sent '
        '"$http_referer" "$http_user_agent" '
        ${global.logging.cfRay.computed ? "'$http_cf_ray '" : ''}
        ${global.logging.cfConnectingIp.computed ? "'$http_cf_connecting_ip '" : ''}
        ${global.logging.xForwardedFor.computed ? "'$http_x_forwarded_for '" : ''}
        ${global.logging.xForwardedProto.computed ? "'$http_x_forwarded_proto '" : ''}
        ${global.logging.trueClientIp.computed ? "'$http_true_client_ip '" : ''}
        ${global.logging.cfIpCountry.computed ? "'$http_cf_ipcountry '" : ''}
        ${global.logging.cfVisitor.computed ? "'$http_cf_visitor '" : ''}
        ${global.logging.cdnLoop.computed ? "'$http_cdn_loop '" : ''}
        `]);
    }

    config.http.push(['# Logging', '']);
    config.http.push(['access_log', global.logging.accessLog.computed.trim() + `${global.logging.cloudflare.computed ? ' cloudflare' : ''}` || 'off']);
    config.http.push(['error_log', global.logging.errorLog.computed.trim() || '/dev/null']);

    if (global.security.limitReq.computed) {
        config.http.push(['# Limits', '']);
        config.http.push(['limit_req_log_level', 'warn']);
        config.http.push(['limit_req_zone', '$binary_remote_addr zone=login:10m rate=10r/m']);
    }

    // HTTPS
    let hasHttps = false;
    for (const domain of domains) {
        if (domain && domain.https && domain.https.https && domain.https.https.computed) {
            hasHttps = true;
            break;
        }
    }
    if (hasHttps) {
        config.http.push(['# SSL', '']);
        config.http.push(['ssl_session_timeout', '1d']);
        config.http.push(['ssl_session_cache', 'shared:SSL:10m']);
        config.http.push(['ssl_session_tickets', 'off']);

        const sslProfile = sslProfiles[global.https.sslProfile.computed];
        if (sslProfile) {
            if (sslProfile.dh_param_size) {
                config.http.push(['# Diffie-Hellman parameter for DHE ciphersuites', '']);
                config.http.push(['ssl_dhparam', `${global.nginx.nginxConfigDirectory.computed.replace(/\/+$/, '')}/dhparam.pem`]);
            }

            config.http.push([`# ${sslProfile.name} configuration`, '']);
            config.http.push(['ssl_protocols', sslProfile.protocols.join(' ')]);
            if (sslProfile.ciphers.length)
                config.http.push(['ssl_ciphers', sslProfile.ciphers.join(':')]);
            if (sslProfile.server_preferred_order)
                config.http.push(['ssl_prefer_server_ciphers', 'on']);
        }

        config.http.push(['# OCSP Stapling', '']);
        config.http.push(['ssl_stapling', 'on']);
        config.http.push(['ssl_stapling_verify', 'on']);

        const ips = [];
        if (global.https.ocspCloudflare.computed) {
            if (['ipv4', 'both'].includes(global.https.ocspCloudflareType.computed))
                ips.push('1.1.1.1', '1.0.0.1');
            if (['ipv6', 'both'].includes(global.https.ocspCloudflareType.computed))
                ips.push('[2606:4700:4700::1111]', '[2606:4700:4700::1001]');
        }
        if (global.https.ocspGoogle.computed) {
            if (['ipv4', 'both'].includes(global.https.ocspGoogleType.computed))
                ips.push('8.8.8.8', '8.8.4.4');
            if (['ipv6', 'both'].includes(global.https.ocspGoogleType.computed))
                ips.push('[2001:4860:4860::8888]', '[2001:4860:4860::8844]');
        }
        if (global.https.ocspOpenDns.computed) {
            if (['ipv4', 'both'].includes(global.https.ocspOpenDnsType.computed))
                ips.push('208.67.222.222', '208.67.220.220');
            if (['ipv6', 'both'].includes(global.https.ocspOpenDnsType.computed))
                ips.push('[2620:119:35::35]', '[2620:119:53::53]');
        }
        if (global.https.ocspQuad9.computed) {
            if (['ipv4', 'both'].includes(global.https.ocspQuad9Type.computed))
                ips.push('9.9.9.9', '149.112.112.112');
            if (['ipv6', 'both'].includes(global.https.ocspQuad9Type.computed))
                ips.push('[2620:fe::fe]', '[2620:fe::9]');
        }
        if (global.https.ocspVerisign.computed) {
            if (['ipv4', 'both'].includes(global.https.ocspVerisignType.computed))
                ips.push('64.6.64.6', '64.6.65.6');
            if (['ipv6', 'both'].includes(global.https.ocspVerisignType.computed))
                ips.push('[2620:74:1b::1:1]', '[2620:74:1c::2:2]');
        }

        if (ips.length) {
            config.http.push(['resolver', `${ips.join(' ')} valid=60s`]);
            config.http.push(['resolver_timeout', '2s']);
        }
    }

    // Configs!
    config.http.push(['# Load configs', '']);
    config.http.push(['include', [
        `${global.nginx.nginxConfigDirectory.computed.replace(/\/+$/, '')}/conf.d/*.conf`,
        global.tools.modularizedStructure.computed ? `${global.nginx.nginxConfigDirectory.computed.replace(/\/+$/, '')}/sites-enabled/*` : '',
    ].filter(x => x.length)]);

    // Single file configs
    if (!global.tools.modularizedStructure.computed) {
        for (const domain of domains) {
            config.http.push([`# ${domain.server.domain.computed}`, '']);
            config.http.push(...websiteConf(domain, domains, global));
        }
    }

    // Done!
    return config;
};
