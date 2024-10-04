"use strict";(self["webpackChunknginxconfig_io"]=self["webpackChunknginxconfig_io"]||[]).push([[589],{5589:(e,o,n)=>{n.d(o,{default:()=>U});const t={back:"戻る",next:"次へ",enable:"有効にする",php:"PHP",ssl:"SSL",nginx:"NGINX",http:"HTTP",https:"HTTPS",letsEncrypt:"Let's Encrypt",python:"Python",wordPress:"WordPress",drupal:"Drupal",magento:"Magento",joomla:"Joomla",django:"Django",logging:"ログ",reverseProxy:"リバースプロキシ",reverseProxyLower:"リバースプロキシ",restrict:"制限",path:"パス"};var r=n(4184);const i={title:`${t.nginx}設定`,description:`パフォーマンス、安全性、安定性に優れた ${t.nginx} サーバーを簡単に構成できます。`,singleColumnMode:"シングルカラムモード",splitColumnMode:"並列表示モード",perWebsiteConfig:"Webサイトごとの設定",addSite:"サイトを追加する",globalConfig:"グローバル設定",setup:"セットアップ",configFiles:"設定ファイル",copied:"コピーしました"},s={downloadConfig:"設定をダウンロードする",copyBase64:"Base64でコピーする"},l={backToTop:"TOPへ戻る",thisToolIs:"このツールは",openSourceOnGitHub:"オープンソースとしてGitHub上に",underThe:"",mit:"MIT",license:"ライセンスで公開されています。",weWelcomeFeedbackAndContributions:"リードバックやコントリビュートは大歓迎です。",originallyCreatedBy:"オリジナル開発者: ",balintSzekeres:"Bálint Szekeres",maintainedBy:"メンテナンス: ",digitalOcean:"DigitalOcean"},a={enableEncryptedSslConnection:`暗号化された ${t.ssl} 接続を${t.enable}`,http2:`${t.http}/2`,enableHttp2Connections:`${t.http}/2 接続を${t.enable}`,http3:`${t.http}/3`,enableHttp3Connections:`${t.http}/3 接続を${t.enable}`,forceHttps:`${t.https}を強制する`,hsts:"HSTS",enableStrictTransportSecurity:`Strict Transport Security を${t.enable}, HTTPS接続が必要`,enableIncludeSubDomains:`includeSubDomains ディレクティブを${t.enable}, 全てのサブドメインでHTTPS接続が必要`,enablePreload:`プリロードディレクティブを${t.enable}, HTTPS接続のみを常に行うようブラウザに指示します`,certificationType:"証明書",customCertificate:"カスタム証明書",letsEncryptEmail:`${t.letsEncrypt} Eメールアドレス`,http3IsANonStandardModule:"HTTP/3 は NGINX の標準モジュールではありません, くわしくは ",http3NginxQuicReadme:"NGINX QUIC readme",http3OrThe:" もしくは ",http3CloudflareQuicheProject:"Cloudflare quicheプロジェクト",http3ForBuildingNginxWithHttp3:" のHTTP/3を使ったNGINXの構築方法を確認してください!"},p={byDomain:"(ドメインごと)",enableForThisDomain:`このドメインで${t.enable}`,arguments:"arguments",level:"logging level",forRedirects:"for redirects"},c={phpIsDisabled:`${t.php} は無効です。`,phpCannotBeEnabledWithReverseProxy:`リバースプロキシが有効な場合は、${t.php} を有効にすることはできません。`,phpCannotBeEnabledWithPython:`${t.python} が有効な場合は、 ${t.php} を有効にすることはできません。`,enablePhp:`${t.php} を${t.enable}`,wordPressRules:`${t.wordPress} ルール`,enableWordPressRules:`${t.wordPress} 用ルールを${t.enable}`,drupalRules:`${t.drupal} ルール`,enableDrupalRules:`${t.drupal} 用ルールを${t.enable}`,magentoRules:`${t.magento} ルール`,enableMagentoRules:`${t.magento} 用ルールを${t.enable}`,joomlaRules:`${t.joomla} ルール`,enableJoomlaRules:`${t.joomla} 用ルールを${t.enable}`,phpServer:`${t.php} サーバ`,phpBackupServer:`${t.php} バックアップサーバ`,tcp:"TCP",hhvmSocket:"HHVM socket",php70Socket:"7.0 socket",php71Socket:"7.1 socket",php72Socket:"7.2 socket",php73Socket:"7.3 socket",php74Socket:"7.4 socket",php80Socket:"8.0 socket",php81Socket:"8.1 socket",php82Socket:"8.2 socket",phpSocket:"PHP socket",custom:"カスタム",disabled:"無効"},d={presets:"プリセット",itLooksLikeYouCustomisedTheConfig:"このドメインの設定をカスタマイズしているようです。新しいプリセットを選択すると、カスタマイズした設定の一部がリセットまたは変更される場合があります。",frontend:"フロントエンド",nodeJs:"Node.js",singlePageApplication:"シングルページアプリケーション(SPA)"},g={pythonIsDisabled:`${t.python} は無効です。`,pythonCannotBeEnabledWithReverseProxy:`リバースプロキシが有効な場合は、${t.python} を有効にすることはできません。`,pythonCannotBeEnabledWithPhp:`${t.php} が有効な場合は、 ${t.python} を有効にすることはできません。`,enablePython:`${t.python}を${t.enable}`,djangoRules:`${t.django} ルール`,enableDjangoRules:`${t.django} 用ルールを${t.enable}`},u={reverseProxyIsDisabled:`${t.reverseProxy} は無効です。`,reverseProxyCannotBeEnabledWithPhp:`${t.php} が有効な場合は、 ${t.reverseProxy} を有効にすることはできません。`,reverseProxyCannotBeEnabledWithPython:`${t.python} が有効な場合は、 ${t.reverseProxy} を有効にすることはできません。`,enableReverseProxy:`${t.reverseProxyLower}を${t.enable}`,proxyHostHeader:"Proxy Host header"},b={fallbackRouting:"フォールバックルーティング",fallbackRoutingPhpPath:`フォールバックルーティング ${t.php} パス`,legacyPhpRouting:`レガシーな ${t.php} ルーティング`,enableLegacyRouting:`レガシーなルーティングを${t.enable}`,routing:"ルーティング"},h={domain:"ドメイン",documentRoot:"ドキュメントルート",oneOrMoreOtherDomainsAreAlsoNamed:"このドメインは別の設定で利用されています",thisWillCauseIssuesWithConfigGeneration:"これは、設定ファイル生成で問題を引き起こします。",wwwSubdomain:"www サブドメイン",cdnSubdomain:"CDN サブドメイン",redirectSubdomains:"リダイレクトサブドメイン",server:"サーバ",listen:"リッスン"},$={disableForThisDomain:"このドメインで無効にする",responseCode:"レスポンスコード"},m="Onion",y={onion:m,onionLocation:`${m} location`,provideAnOnionLocationToSetOnionLocationHeader:"サイトのOnion-Locationヘッダを設定するために、Onion locationアドレスを提供する。",letsVisitorsKnownOnionServicesIsAvailable:"これにより、あなたのサイトのオニオンサービス版がTorブラウザで利用可能であることをサイト訪問者に知らせます。",learnMoreAboutOnionServices:"Onion サービスについて詳しくはこちら",onionLocationExpectedToEndWithOnion:"Onion location アドレスは通常 `.onion` で終わります。"},C={https:a,logging:p,php:c,presets:d,python:g,reverseProxy:u,routing:b,server:h,restrict:$,onion:y},f="Mozilla",v="IPv4",S="IPv6",P={sslProfile:`${t.ssl} プロファイル`,httpsMustBeEnabledOnOneSite:`グローバルな ${t.https} の設定を行うには、少なくとも1つのサイトで ${t.https} が有効になっている必要があります。`,portReuse:"Reuseport",enableReuseOfPort:`ワーカーごとにリスニングソケットを生成するために reuseport を${t.enable}`,ocspDnsResolvers:"OCSP DNS Resolvers",cloudflareResolver:"Cloudflare Resolver",googlePublicDns:"Google Public DNS",openDns:"OpenDNS",quad9:"Quad9",verisign:"Verisign",letsEncryptWebroot:`${t.letsEncrypt} webrootディレクトリ`,letsEncryptCertRoot:`${t.letsEncrypt} 証明書ディレクトリ`,mozillaModern:`${f} Modern`,mozillaIntermediate:`${f} Intermediate`,mozillaOld:`${f} Old`,ipv4Only:`${v} のみ`,ipv6Only:`${S} のみ`,ipv4AndIpv6:`${v} と ${S}`},x={enableFileNotFoundErrorLogging:`FILE NOT FOUND エラーのロギングを${t.enable}`,logformat:"log_format",level:"logging level",enableCloudflare:"デフォルトのログフォーマットに Cloudflare のリクエストヘッダを追加する",cfRay:"CF-Ray",cfConnectingIp:"CF-Connecting-IP",xForwardedFor:"X-Forwarded-For",xForwardedProto:"X-Forwarded-Proto",trueClientIp:"True-Client-IP",cfIpCountry:"CF-IPCountry",cfVisitor:"CF-Visitor",cdnLoop:"CDN-Loop"},T={nginxConfigDirectory:`${t.nginx} 設定ディレクトリ`,mb:"MB"},k={disableHtmlCaching:"HTML キャッシュの無効化",enableDisableHtmlCaching:"HTML キャッシュを無効にする",gzipCompression:"Gzip 圧縮",enableGzipCompression:`gzip 圧縮を${t.enable}`,brotliCompression:"Brotli 圧縮",enableBrotliCompression:`brotli 圧縮を${t.enable}`,brotliIsANonStandardModule:"Brotli はNGINXの標準モジュールではありません, くわしくは ",brotliGoogleNgxBrotliProject:"Google ngx_brotli プロジェクト",brotliForBuildingNginxWithBrotli:" のBrotliを使ったNGINXの構築方法を確認してください!",expirationForAssets:"アセットの有効期限",expirationForMedia:"メディアの有効期限",expirationForSvgs:"SVG の有効期限",expirationForFonts:"フォントの有効期限",performance:"パフォーマンス"},D={pythonServer:`${t.python} サーバ`,pythonMustBeEnabledOnOneSite:`グローバルな ${t.python} の設定を行うには、少なくとも1つのサイトで ${t.python} が有効になっている必要があります。`},O="Legacy X-Forwarded-* headers",w={reverseProxyMustBeEnabledOnOneSite:`グローバルな ${t.reverseProxyLower} の設定を行うには、少なくとも1つのサイトで ${t.reverseProxy} が有効になっている必要があります。`,seconds:"秒",passOn:`${O} が渡されます`,remove:`${O} は積極的に削除されます`},N={whenUsingWordPressUnsafeEvalIsOftenRequiredToAllowFunctionality:`${t.wordPress} を利用している場合、 <code class="slim">script-src 'self' 'unsafe-inline' 'unsafe-eval';</code> は、管理画面を正しく機能させるために、コンテンツセキュリティポリシーで要求されることが多いようです。`,security:"セキュリティ"},I={modularizedStructure:"モジュール化された構造",enableModularizedConfigFiles:`モジュール化された設定ファイルを${t.enable}`,symlinkVhost:"Symlink vhost",enableSymLinksFrom:`シンボリックリンク を${t.enable} from`,to:"to",shareConfiguration:"設定を共有する",resetConfiguration:"設定をリセットする",resetGlobalConfig:"グローバル設定をリセットする",resetAllDomains:"全てのドメインをリセットする",removeAllDomains:"全てのドメインを削除する",resetAllDomainsConfig:"全てのドメインの設定をリセットする",resetDomainConfig:"ドメインの設定をリセットする",removeDomain:"ドメインを削除する",yesImSure:"はい、大丈夫です",noCancel:"いいえ、キャンセルします",tools:"ツール",resetGlobalConfigBody:"グローバル設定の全ての設定をリセットします、よろしいですか?",resetAllDomainsConfigBody:"全てのドメインの設定をリセットします、よろしいですか?",removeAllDomainsBody:"全てのドメインを削除します、よろしいですか?",areYouSureYouWantToResetAllConfigurationOptionsForThe:"次のドメインの設定をリセットします、よろしいですか?",domain:"",areYouSureYouWantToRemoveThe:"次のドメインの設定を削除します、よろしいですか?",domainConfiguration:""},F="Docker",R="Dockerfile",E={docker:F,dockerfile:R,dockerCompose:`${F} Compose`,applyDockerTweaks:`${F} の調整を適用する`,applyDockerTweaksForNginx:`${t.nginx} を ${F} 上で動作させるため、設定の微調整を適用します。`,applyDockerTweaksExplainer:`${t.nginx} ユーザを <code class="slim">nginx</code> に、 pid を <code class="slim">/var/run/nginx.pid</code> に変更してください。`,includeDockerfile:`${t.nginx} を ${F} 上で動作させるための ${R} を含む`,includeDockerCompose:`${t.nginx} with docker-compose で動作させるための docker-compose.yaml を含む`},B={https:P,logging:x,nginx:T,performance:k,python:D,reverseProxy:w,security:N,tools:I,docker:E},H="Certbot",L={commentOutSslDirectivesInConfiguration:`設定中の ${t.ssl} 関連ディレクティブをコメントアウトします:`,sslOffDeprecationWarning:`This command will add a temporary <code class="slim">ssl off</code> directive to ensure that ${t.ssl} directives are not active. This may cause ${t.nginx} to emit a warning, which is safe to ignore. The directive will be removed once ${H} is configured.`,reloadYourNginxServer:`${t.nginx} サーバをリロードします:`,obtainSslCertificatesFromLetsEncrypt:`${H} を利用して、 ${t.ssl} 証明書を ${t.letsEncrypt} から取得します:`,uncommentSslDirectivesInConfiguration:`設定中の ${t.ssl} 関連ディレクティブのコメントアウトを外します:`,configureCertbotToReloadNginxOnCertificateRenewal:`証明書の更新に成功したら ${H} が ${t.nginx} をリロードするように設定します:`,certbotDoesNotNeedToBeSetupForYourConfiguration:`${H} は、${t.nginx}の設定に合わせて設定する必要はありません。`,certbot:H},A={downloadTheGeneratedConfig:"生成された設定ファイルを<b>ダウンロードします</b>:",andUploadItToYourServers:"そして、ご利用のサーバの以下のディレクトリに設定ファイルを <b>アップロードします</b>",directory:"。",or:"もしくは、",copyBase64StringOfCompressedConfig:"設定が圧縮されたbase64文字列をコピーし",pasteItInYourServersCommandLineAndExecute:"、 サーバのコマンドラインにペーストして実行します",navigateToYourNginxConfigurationDirectoryOnYourServer:`サーバの ${t.nginx} の<b>設定ディレクトリ</b>へ移動します:`,createABackupOfYourCurrentNginxConfiguration:`現在の ${t.nginx} の設定を<b>バックアップします</b>:`,extractTheNewCompressedConfigurationArchiveUsingTar:"tar を使って、新しい設定の入った圧縮ファイルを<b>展開します</b>:",download:"ダウンロード"},M={letsGoLive:"起動しよう!",reloadNginxToLoadInYourNewConfiguration:`${t.nginx} をリロードして新しい設定を反映します:`,goLive:"起動!"},G={generateDiffieHellmanKeysByRunningThisCommandOnYourServer:"サーバでこのコマンドを実行して <b>Diffie-Hellman keys</b> を生成します:",createACommonAcmeChallengeDirectoryForLetsEncrypt:`共通の <b>ACME-challenge</b> ディレクトリを作成します (<b>${t.letsEncrypt}</b> の場合):`,noAdditionalStepsAreNeededToSetUpSslForNginx:`${t.ssl} を ${t.nginx} の構成に設定するための追加の手順は必要ありません。`,sslInit:`${t.ssl} 初期設定`},W={certbot:L,download:A,goLive:M,ssl:G},Y={lookingForAPlaceToDeploy:"👋 この新しい設定のデプロイ先をお探しですか?",tryOutDigitalOceansDroplet:"DigitalOceanの NGINXを使ったLEMP Droplet を試してみましょう"},j={wantToContributeChanges:"👋 新機能や変更の提案や実装、翻訳をしてみませんか?",getInvolvedOnGitHub:"GitHub で参加しよう"},z={droplet:Y,contribute:j},X={app:i,setup:s,footer:l,domainSections:C,globalSections:B,setupSections:W,callouts:z},U={common:t,languages:r["default"],templates:X}}}]);