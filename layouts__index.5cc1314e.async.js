(self.webpackChunk=self.webpackChunk||[]).push([[717],{74595:function(r,o,e){"use strict";e.d(o,{I:function(){return u}});var t=e(27424),n=e.n(t),i=e(62435),c=e(88305),a=e(36493),l=e(22537),u=(0,c.f)((function(){var r=(0,i.useState)(!1),o=n()(r,2),e=o[0],t=o[1],c=(0,i.useState)([]),u=n()(c,2),s=u[0],d=u[1],f=(0,i.useState)(!1),v=n()(f,2),p=v[0],g=v[1],h=(0,i.useState)(!1),m=n()(h,2),b=m[0],w=m[1],x=(0,i.useState)(/iPad/i.test(navigator.userAgent)),P=n()(x,2),T=P[0],B=(P[1],(0,i.useState)(l.t4.Binance)),E=n()(B,2),_=E[0],S=E[1];return(0,i.useEffect)((function(){w((0,a.tq)())}),[window]),{pendingTxns:s,walletVisible:e,isIpad:T,setWalletVisible:t,setPendingTxns:d,tableFlag:p,setTableFlag:g,isMobile:b,platform:_,setPlatform:S}}))},14391:function(r,o,e){"use strict";e.r(o),e.d(o,{default:function(){return p}});var t=e(3410),n=e(241),i=e(34713),c=e(58720),a=e(40782),l=e(4480),u=e(95591),s=e(74595),d={token:{colorBgElevated:"#121418"},components:{Tooltip:{colorBgDefault:"var(--color_30)"},Button:{colorPrimaryHover:"var(--color_200)",colorText:"var(--color_200)",colorBorder:"var(--color_70)",colorPrimaryActive:"var(--color_70)",colorBgContainer:"var(--color_40)",controlHeightLG:44},Form:{colorTextHeading:"#fff"},Slider:{handleSize:24,railSize:8,colorFillTertiary:"#0D0F12",colorPrimary:"var(--color_300)",colorBgElevated:"var(--color_300)",colorPrimaryBorder:"var(--color_300)",colorPrimaryBorderHover:"var(--color_300)"},Select:{controlHeightLG:44,colorBgContainer:"var(--color_30)",colorText:"#fff",colorBorder:"var(--color_30)",colorPrimaryHover:"var(--color_40)",colorBgElevated:"var(--color_30)",controlItemBgActive:"var(--color_40)",colorTextPlaceholder:"rgba(255,255,255,.6)"},DatePicker:{colorBorder:"var(--color_40)",colorTextDisabled:"var(--color_40)",colorIcon:"#fff",colorTextPlaceholder:"#fff",controlItemBgActive:"var(--color_40)",colorBgContainer:"#1E2126",colorTextSecondary:"var(--color_gold)",colorPrimary:"var(--color_gold)",colorText:"#fff",colorTextHeading:"#fff",colorPrimaryHover:"var(--color_gold)"},Input:{colorBgContainer:"#1E2126",colorBorder:"#1E2126",colorText:"#fff",controlHeight:44,controlHeightLG:48,colorPrimaryActive:"#5C72FF",colorPrimaryHover:"#5C72FF",colorTextPlaceholder:"var(--color_40)"},InputNumber:{colorBgContainer:"#1E2126",colorBorder:"#1E2126",colorText:"#fff",controlHeight:44,controlHeightLG:48,colorPrimaryActive:"#5C72FF",colorPrimaryHover:"#5C72FF",fontSize:16,colorTextPlaceholder:"var(--color_40)"},Table:{borderRadius:16,colorBgContainer:"#121418",borderRadiusLG:16,colorText:"#fff",colorTextHeading:"#78808E",fontWeightStrong:400,colorPrimary:"#78808E",colorBorderSecondary:"rgba(255,255,255,.0)"},Spin:{colorPrimary:"#d9c099",colorBgContainer:"rgba(13, 15, 18, 0.8)"}}},f=e(86074);function v(r){return new n.Q(r)}function p(){(0,a.vU)({enter:"zoomIn",exit:"zoomOut",appendPosition:!1,collapse:!0,collapseDuration:200});return(0,f.jsxs)(u.J$,{value:{refreshInterval:5e3},children:[(0,f.jsx)(a.Ix,{newestOnTop:!0,position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!1,draggable:!1,pauseOnHover:!0}),(0,f.jsx)(i.Ht,{getLibrary:v,children:(0,f.jsx)(s.I.Provider,{children:(0,f.jsx)(l.Wh,{children:(0,f.jsx)(c.ZP,{theme:d,children:(0,f.jsx)(t.j3,{})})})})})]})}},65334:function(r,o,e){"use strict";e.d(o,{Cs:function(){return s},HC:function(){return a},Wr:function(){return d},ZK:function(){return c},eQ:function(){return l},kX:function(){return u},pW:function(){return n},pd:function(){return i},py:function(){return v},rI:function(){return f}});function t(r){return"".concat(r||"").concat("V1")}var n=t("DEI_0001"),i=t("DEI_0002"),c=(t("depx-market-selection"),t("depx-swap-leverage-option")),a=(t("depx-swap-leverage-useinput-lev"),t("DEPX_SELECTED_NETWORK")),l=t("DEPX_walletconnect"),u=t("DEPX_-walletlink"),s=t("DEPX_eagerconnect"),d=t("DEPX_currentprovider");t("DEPX_UPDATE_NOTICE_KEY");var f=function(r,o,e){var t=window.localStorage.getItem(r);if(!t)return o;try{var n=JSON.parse(t),i=n.data,c=n.validTime;if(!c)return i;var a=Number(c);if(Number.isNaN(a))return;if(Date.now()>a)return;return console.log("Read ".concat(r," from local cache")),e?n:i}catch(r){console.error(r)}},v=function(r,o,e){try{var t=JSON.stringify({data:o,validTime:e?Date.now()+e:""});window.localStorage.setItem(r,t)}catch(r){console.error(r)}}},36493:function(r,o,e){"use strict";e.d(o,{$H:function(){return c},D4:function(){return a},Ij:function(){return d},R$:function(){return i},do:function(){return l},tq:function(){return s},yG:function(){return u}});var t=e(20238),n=(e(80129),e(65334)),i=(t.dE,function(){return(0,n.rI)(n.pW,Object.create({}))}),c=function(r){return-1!==window.location.href.indexOf("".concat(r,"="))};function a(r){return r?r.split("/")[0]:""}var l=function(r){var o="BTCUSDT";if(!r)return o;if("Test Market"===r)return o;var e=r.split("/");return"".concat(e[0],"USDT")};function u(){var r,o;return!(null!==(r=window.location.host)&&void 0!==r&&r.includes("gmx.io")||null!==(o=window.location.host)&&void 0!==o&&o.includes("ipfs.io"))}var s=function(){var r=navigator.userAgent.toLowerCase(),o=/iphone/.test(r)&&!/ipad/.test(r),e=/android/.test(r)&&/mobile/.test(r),t=/windows/.test(r)&&/phone/.test(r),n=window.innerWidth>window.innerHeight?window.innerHeight:window.innerWidth;return(o||e||t)&&n<768},d=function(){var r=window.navigator.userAgent.toLowerCase(),o={isMacOS:!1,isIOS:!1,isWindows:!1,isAndroid:!1};return/(macintosh|macintel|macppc|mac68k|macos)/i.test(r)?o.isMacOS=!0:/(iphone|ipad|ipod)/i.test(r)?o.isIOS=!0:/(win32|win64|windows|wince)/i.test(r)?o.isWindows=!0:/android/.test(r)&&(o.isAndroid=!0),o}},22537:function(r,o,e){"use strict";e.d(o,{$c:function(){return f},BA:function(){return d},Ew:function(){return t},OY:function(){return s},R7:function(){return l},SQ:function(){return c},WG:function(){return n},j$:function(){return u},qL:function(){return a},t4:function(){return i}});var t,n,i,c,a="https://blex.io",l="https://test.blex.io/#/trade",u="Blex.io",s="BLEX | Decentralized Perpetual Exchange";!function(r){r.GitbookFeeStructure="https://blex.gitbook.io/blex/whitepaper/fee-structure",r.AVAXNetworkTest="https://faucet.avax.network/",r.ETHNetworkTest="https://faucet.quicknode.com/arbitrum/goerli/",r.TokenEconomyUsdblp="https://blex.gitbook.io/blex/whitepaper/token-economy-v1.0/usdblp",r.WhitePaperReferrals="https://blex.gitbook.io/blex/whitepaper/referrals",r.WhitePaperMediaKit="https://blex.gitbook.io/blex/whitepaper/media-kit",r.BlexTermsAndConditions="https://blex.medium.com/blex-terms-and-conditions-9b61881c58ea",r.BugBounty="https://blex.gitbook.io/blex/bug-bounty",r.Desc="https://blex.gitbook.io/blex/"}(t||(t={})),function(r){r.Twitter="https://twitter.com/Blex_io",r.Medium="https://medium.com/@blex",r.Discord="https://discord.gg/DsnRrGAzVN",r.Telegram="https://t.me/bestblex",r.Github="https://github.com/dalveytech/blex-contract",r.Docs="https://blex.gitbook.io/blex"}(n||(n={})),function(r){r.Binance="binance",r.BinanceUS="binanceus",r.Bitmart="bitmart"}(i||(i={})),function(r){r.English="en-US",r.Japanese="ja-JP",r.French="fr-FR"}(c||(c={}));var d={Overview:"/overview",Competitions:"/more/competitions"},f={HiddenLimitDistrictModal:"hidden-limit-district-modal"}},46601:function(){},24654:function(){},88305:function(r,o,e){"use strict";e.d(o,{f:function(){return n}});var t=e(62435);function n(r){var o=t.createContext(null);return{Provider:function(e){var n=r(e.initialState);return t.createElement(o.Provider,{value:n},e.children)},useContainer:function(){var r=t.useContext(o);if(null===r)throw new Error("Component must be wrapped with <Container.Provider>");return r}}}}}]);