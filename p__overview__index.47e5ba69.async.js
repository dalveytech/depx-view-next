"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65],{74595:function(e,t,n){n.d(t,{I:function(){return c}});var r=n(27424),a=n.n(r),i=n(62435),s=n(88305),l=n(36493),o=n(22537),c=(0,s.f)((function(){var e=(0,i.useState)(!1),t=a()(e,2),n=t[0],r=t[1],s=(0,i.useState)([]),c=a()(s,2),d=c[0],u=c[1],m=(0,i.useState)(!1),f=a()(m,2),h=f[0],p=f[1],x=(0,i.useState)(!1),A=a()(x,2),g=A[0],v=A[1],b=(0,i.useState)(/iPad/i.test(navigator.userAgent)),j=a()(b,2),w=j[0],N=(j[1],(0,i.useState)(o.t4.Binance)),_=a()(N,2),k=_[0],y=_[1];return(0,i.useEffect)((function(){v((0,l.tq)())}),[window]),{pendingTxns:d,walletVisible:n,isIpad:w,setWalletVisible:r,setPendingTxns:u,tableFlag:h,setTableFlag:p,isMobile:g,platform:k,setPlatform:y}}))},77438:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(42122),a=n.n(r),i=n(38416),s=n.n(i),l=n(70215),o=n.n(l),c=n(94184),d=n.n(c),u=n(62435),m=n(3410),f={"dei-button":"dei-button___j8sPT","dei-button-middle":"dei-button-middle___KSv19","dei-button-large":"dei-button-large___BjyGb","dei-button-primary":"dei-button-primary___WVGbB","dei-button-c10":"dei-button-c10___dMjVB","dei-button-c20":"dei-button-c20___lmIsv","dei-button-c30":"dei-button-c30___ES6_O","dei-button-c40":"dei-button-c40___Ue8iQ","dei-button-ghost":"dei-button-ghost___wRX7G",w100:"w100___QntK3",disabled:"disabled___bsAvV"},h=n(86074),p=["htmlType","size","onClick","children","className","disabled","type","href","block"],x=function(e){var t=e.htmlType,n=e.size,r=void 0===n?"middle":n,i=e.onClick,l=e.children,c=e.className,x=e.disabled,A=e.type,g=void 0===A?"primary":A,v=e.href,b=void 0===v?"":v,j=e.block,w=o()(e,p),N=(0,u.useMemo)((function(){var e;return d()(f["dei-button"],f["dei-button-".concat(r)],f["dei-button-".concat(g)],c,(e={},s()(e,f.disabled,x),s()(e,f.link,Boolean(b)),s()(e,f.w100,j),e))}),[r,c,x,g,b,j]),_=(0,u.useMemo)((function(){return 0===b.indexOf("https://")||0===b.indexOf("http://")}),[b]);return b?_?(0,h.jsx)("a",a()(a()({className:N,href:b,target:"_blank"},w),{},{children:l})):(0,h.jsx)(m.rU,a()(a()({className:N,to:b},w),{},{children:l})):(0,h.jsx)("button",a()(a()({onClick:i,className:N,disabled:x},w),{},{type:t,children:l}))}},41019:function(e,t,n){n.r(t),n.d(t,{default:function(){return Pe}});var r=n(17061),a=n.n(r),i=n(17156),s=n.n(i),l=n(27424),o=n.n(l),c=n(94184),d=n.n(c),u=n(62435),m=n(4480),f=n(42122),h=n.n(f),p=n(15643),x=n(61895),A=n(24069),g=n(28722),v=function(){var e=(new Date).getTime(),t=(e-864e5).toString().substring(0,10);return{to:e.toString().substring(0,10),from:t}},b=function(){var e=s()(a()().mark((function e(t){var n,r,i,s,l,o,c,d,u;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v(),n.to,r=n.from,i='\n  query MyQuery {\n    summaries24h: summaries(where:{id_gte:"hourly:'.concat(r,'", period: "hourly"}){\n      openInterest\n      trades\n      tradingVolume\n      uniqueUsers\n      tradingLPVolume\n    }\n    summariesTotal: summaries(where:{period: "total"}){\n      openInterest\n      trades\n      tradingVolume\n      tradingLPVolume\n      uniqueUsers\n    }\n  }\n '),s=(0,g.x7)(t),e.next=5,(0,g.Dw)(s,i);case 5:return l=e.sent,o=l.summariesTotal,c=l.summaries24h,d=j(c||[]),u=j(o),e.abrupt("return",h()({openInterestTotal:null==u?void 0:u.openInterest,tradesTotal:null==u?void 0:u.trades,tradingVolumeTotal:null==u?void 0:u.tradingVolume,uniqueUsersTotal:null==u?void 0:u.uniqueUsers},d));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t,n=null==e?void 0:e.reduce((function(e,t){var n,r,a=t.tradingVolume,i=t.tradingLPVolume,s=null===(n=e.tradingVolume)||void 0===n?void 0:n.plus((0,x.Q6)((0,A.dN)((0,A._b)(a||"0"),18))).plus((0,x.Q6)((0,A.dN)((0,A._b)(i||"0"),6)));return e.openInterest=e.openInterest.add((0,A._b)(t.openInterest)),e.trades+=t.trades,e.tradingVolume=s,e.uniqueUsers+=null!==(r=null==t?void 0:t.uniqueUsers)&&void 0!==r?r:0,e}),{openInterest:(0,A._b)(0),trades:0,tradingVolume:(0,x.Q6)(0),uniqueUsers:0});return n?{openInterest:(0,A.dN)(null==n?void 0:n.openInterest,18),trades:null==n?void 0:n.trades,tradingVolume:(null===(t=n.tradingVolume)||void 0===t?void 0:t.toFixed(2,1))||"0",uniqueUsers:null==n?void 0:n.uniqueUsers}:n},w=function(){var e=s()(a()().mark((function e(t,n){var r,i,s,l,o,c,d,u,m,f,x,A,b;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=v(),r.to,i=r.from,s='marketInfos(where:{id_gte:"hourly:'.concat(i,'", period: "hourly"})\n  {\n    openInterest\n    period\n    trades\n    tradingVolume\n    market\n    id\n  }'),'totalOpenInterest: marketInfos(where:{period: "weekly"})\n      {\n      openInterest\n      market\n      }\n    ',l="query MyQuery {\n    ".concat(s,"\n    ").concat('totalOpenInterest: marketInfos(where:{period: "weekly"})\n      {\n      openInterest\n      market\n      }\n    ',"\n  }"),o=(0,g.x7)(n),e.next=7,(0,g.Dw)(o,l);case 7:return c=e.sent,d=c.marketInfos,u=c.totalOpenInterest,m=(0,p.Z)(d,"market"),f=(0,p.Z)(u,"market"),x={name:"ETH",key:"Ethereum",coinName:"ETH",logo:"ETH"},A={ETH:"Ethereum",BTC:"Bitcoin"},b=null==t?void 0:t.map((function(e){var t,n=e.name.split("/")[0]||"";return h()(h()(h()({},x),j(m[e.address.toLowerCase()])),{},{name:n,coinName:n,logo:e.name,marketName:A[n],openInterest:null===(t=j(f[e.address.toLowerCase()]))||void 0===t?void 0:t.openInterest})})),e.abrupt("return",b);case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N=n(28469),_=n(37432),k=n(98330),y=n(239),E=n(41519),B=(0,m.cn)({key:"marketInfosAtom",default:[],effects_UNSTABLE:[E.I]}),I=(0,m.cn)({key:"bannerInfoAtom",default:void 0,effects_UNSTABLE:[E.I]}),T="bg___btVzi",C="overview___Eeiei",V="header____Yrjj",O="subTitle___GaHN7",W="mb60___zFvxJ",P=n.p+"static/cell_icon.3a8458b7.png",X=n(48268),M="container___XgrV6",S="card___KCWUl",G="tradingVolumeImg___RQMY9",D=n(86074),R=function(e){var t=e.info,n=e.className,r=(0,k.Z)().t,a=[{title:r("Trading Volume"),text1:(0,x.dp)(null==t?void 0:t.tradingVolumeTotal).display({prefix:"$"}),text2:(0,x.dp)(null==t?void 0:t.tradingVolume).display({prefix:"+ $"}),extra:(0,D.jsx)("div",{className:G,children:(0,D.jsx)("img",{width:190,height:92,src:P})}),className:"df fl1",props:{}},{title:r("Trading Volume"),text1:(0,D.jsx)(X.Z,{value:null==t?void 0:t.tradesTotal,displayDecimals:0}),text2:(0,D.jsx)(X.Z,{value:null==t?void 0:t.trades,displayDecimals:0})},{title:r("Trading Volume"),text1:(0,D.jsx)(X.Z,{value:null==t?void 0:t.openInterestTotal}),text2:(0,D.jsx)(X.Z,{value:null==t?void 0:t.openInterest,prefix:"+ $"})}];return(0,D.jsx)("section",{className:n,children:(0,D.jsx)("ul",{className:d()(M,"w100"),children:a.map((function(e){return(0,D.jsxs)("li",h()(h()({className:d()(S,e.className,"df br8")},e.props),{},{children:[(0,D.jsxs)("div",{className:"df fdc c100",children:[(0,D.jsx)("span",{className:"c90",children:e.title}),(0,D.jsx)("span",{className:"fl1 c200 fw3 f28",children:e.text1}),(0,D.jsxs)("span",{className:"c300 fw3 f18",children:[e.text2," ",(0,D.jsx)("span",{className:"c90 fw1",children:"(24h)"})]})]}),e.extra]}))}))})})},L=n(91978),U=n.p+"static/banner.dfacbbaf.jpg",F="container___VxYR6",J="carouselDots___FlG10",Q=function(e){var t=e.className,n=((0,k.Z)().t,[{src:U,href:""}]);return(0,D.jsx)(L.Z,{dots:{className:J},className:d()(F,t,"br8 ovh"),afterChange:function(e){console.log(e)},children:n.map((function(e,t){return(0,D.jsx)("div",{className:"f0",children:(0,D.jsx)("img",{src:e.src,width:"100%",height:"100%"})},t)}))})},K=n(10581),H=n(74595),Z=n(98960),z=n(94320),Y=n(36493),q={coinNameBox:"coinNameBox___JnEK2",logo:"logo___Pr4kK",coinName:"coinName___uNh7p",title:"title___X3Idr",table:"table___PFkHZ"},$=function(e){var t=e.loading,n=e.className,r=e.marketInfo,a=H.I.useContainer().isMobile,i=(0,m.sJ)(y.O7),s=(0,k.Z)().t,l=[{title:s("Market"),dataIndex:"coinName",key:"coinName",render:function(e,t){return(0,D.jsxs)("div",{className:q.coinNameBox,children:[(0,D.jsx)(Z.Z,{symbol:(0,Y.D4)(t.logo)}),(0,D.jsxs)("span",{className:q.coinName,children:[t.coinName,"/USD"]})]})}},{title:s("indexPrice"),render:function(e,t){var n,r,a=null===(n=i[null===(r=(0,Y.do)(t.name))||void 0===r?void 0:r.toLowerCase()])||void 0===n?void 0:n.indexPrice;return(0,D.jsx)(X.Z,{value:a,prefix:"$"})}},{title:s("24h Change"),render:function(e,t){var n,r,a,s=null==i||null===(n=i[null===(a=(0,Y.do)(t.name))||void 0===a?void 0:a.toLowerCase()])||void 0===n||null===(r=n["24ChangeRate"])||void 0===r?void 0:r.toFixed(2);return s?+s>=0?(0,D.jsxs)("span",{className:q.up,children:["+",s,"%"]}):(0,D.jsxs)("span",{className:q.down,children:[s,"%"]}):"-"}},{title:s("24h Trades"),dataIndex:"trades",key:"trades",render:function(e){return(0,D.jsx)(D.Fragment,{children:null!=e?e:"-"})}},{title:s("24h Volume"),dataIndex:"tradingVolume",key:"tradingVolume",render:function(e){return(0,D.jsx)(X.Z,{value:e,prefix:"$"})}},{title:s("Open Interest"),dataIndex:"openInterest",key:"openInterest",render:function(e){return(0,D.jsx)(X.Z,{value:e,prefix:"$"})}}];return(0,D.jsxs)("section",{className:n,children:[(0,D.jsxs)("h2",{className:d()(q.title,"df fdc c200 f24"),children:[s("Perpetual Trading"),(0,D.jsx)("span",{className:"c90 f14 fw1",children:s("By staking, LPs can earn up to 70% of the trading fees and capture the value of the protocol.")})]}),(0,D.jsx)(z.Z,{emptyText:s("No data"),className:q.table,columns:a?l.slice(0,3):l,dataSource:r,pagination:!1,bordered:!1,loading:t,onRow:function(e){return{onClick:function(){return K.m.push("/trade?symbol=".concat(e.name))}}}})]})},ee=n(71230),te=n(15746),ne=n.p+"static/home_img4.ad65e92a.png",re=n(77438),ae=Object.defineProperty,ie=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,oe=(e,t,n)=>t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const ce=e=>u.createElement("svg",((e,t)=>{for(var n in t||(t={}))se.call(t,n)&&oe(e,n,t[n]);if(ie)for(var n of ie(t))le.call(t,n)&&oe(e,n,t[n]);return e})({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u.createElement("path",{d:"M14.55 4.875a9.11 9.11 0 0 0-.476.988 13.171 13.171 0 0 0-4.115 0 9.108 9.108 0 0 0-.476-.988c-1.284.22-2.533.612-3.71 1.168a15.57 15.57 0 0 0-2.696 10.413 14.913 14.913 0 0 0 4.555 2.327 11.58 11.58 0 0 0 .997-1.563 8.672 8.672 0 0 1-1.536-.746 3.04 3.04 0 0 0 .377-.297 10.476 10.476 0 0 0 9.093 0c.125.108.251.207.377.297a9.738 9.738 0 0 1-1.537.755c.279.559.603 1.094.97 1.599A14.772 14.772 0 0 0 20.92 16.5a15.471 15.471 0 0 0-2.695-10.413 14.456 14.456 0 0 0-3.675-1.213Zm-5.516 9.479a1.743 1.743 0 0 1-1.618-1.797 1.734 1.734 0 0 1 1.618-1.797 1.734 1.734 0 0 1 1.617 1.797 1.734 1.734 0 0 1-1.617 1.797Zm5.965 0a1.743 1.743 0 0 1-1.617-1.797 1.734 1.734 0 0 1 1.617-1.797 1.725 1.725 0 0 1 1.617 1.797A1.725 1.725 0 0 1 15 14.354Z",fill:"#78808E"}));var de=Object.defineProperty,ue=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,he=(e,t,n)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const pe=e=>u.createElement("svg",((e,t)=>{for(var n in t||(t={}))me.call(t,n)&&he(e,n,t[n]);if(ue)for(var n of ue(t))fe.call(t,n)&&he(e,n,t[n]);return e})({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u.createElement("path",{d:"M12.001 3A8.993 8.993 0 0 0 3 11.993c0 3.93 2.52 7.27 6.029 8.496.472.119.4-.217.4-.446v-1.559c-2.729.32-2.84-1.486-3.022-1.787-.37-.632-1.245-.793-.984-1.094.622-.32 1.255.08 1.989 1.164.53.786 1.567.654 2.091.523.115-.473.36-.895.698-1.223-2.827-.507-4.006-2.232-4.006-4.283 0-.996.328-1.91.972-2.649-.41-1.216.038-2.258.098-2.413 1.169-.104 2.383.837 2.478.911.663-.179 1.421-.273 2.27-.273.853 0 1.613.098 2.283.28.227-.174 1.353-.982 2.439-.884.058.155.497 1.173.11 2.373.652.74.984 1.663.984 2.66 0 2.056-1.187 3.784-4.022 4.282a2.564 2.564 0 0 1 .766 1.83v2.262c.016.181 0 .36.302.36C18.436 19.323 21 15.96 21 11.995 21 7.024 16.97 3 12.001 3Z",fill:"#78808E"}));var xe=Object.defineProperty,Ae=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,be=(e,t,n)=>t in e?xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const je=e=>u.createElement("svg",((e,t)=>{for(var n in t||(t={}))ge.call(t,n)&&be(e,n,t[n]);if(Ae)for(var n of Ae(t))ve.call(t,n)&&be(e,n,t[n]);return e})({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u.createElement("path",{d:"M5.456 4.005A1.463 1.463 0 0 0 4 5.481V18.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V5.515c0-.827-.663-1.498-1.49-1.5-3.036-.008-9.917-.023-13.054-.01ZM17.12 7.84l-.816.8a.245.245 0 0 0-.092.233v5.887c-.014.09.02.18.092.234l.8.8v.178h-4.016v-.17l.826-.82c.082-.085.082-.11.082-.234V9.983l-2.3 5.967h-.31L8.71 9.983v4a.553.553 0 0 0 .15.46l1.076 1.331v.178H6.879v-.178l1.077-1.332a.537.537 0 0 0 .14-.458V9.359a.402.402 0 0 0-.13-.342L7.009 7.84V7.66h2.97l2.293 5.146 2.018-5.142h2.83v.174Z",fill:"#78808E"}));var we=n(26438),Ne=n(4343),_e=n(22537),ke=function(e){var t=e.children,n=function(){return window.open(_e.WG.Twitter,"_blank")};return t?(0,D.jsx)("div",{onClick:n,children:t}):(0,D.jsx)(Ne.r,{onClick:n})},ye=function(e){var t=e.children,n=function(){return window.open(_e.WG.Telegram,"_blank")};return t?(0,D.jsx)("div",{className:"cp",onClick:n,children:t}):(0,D.jsx)(we.r,{className:"cp",onClick:n})},Ee=function(e){var t=e.children,n=function(){return window.open(_e.WG.Discord,"_blank")};return t?(0,D.jsx)("div",{className:"cp",onClick:n,children:t}):(0,D.jsx)(ce,{className:"cp",onClick:n})},Be=function(e){var t=e.children,n=function(){return window.open(_e.WG.Github,"_blank")};return t?(0,D.jsx)("div",{className:"cp",onClick:n,children:t}):(0,D.jsx)(pe,{className:"cp",onClick:n})},Ie=function(e){var t=e.children,n=function(){return window.open(_e.WG.Medium,"_blank")};return t?(0,D.jsx)("div",{className:"cp",onClick:n,children:t}):(0,D.jsx)(je,{className:"cp",onClick:n})},Te=n.p+"static/card_pic.4d9fd824.png",Ce={card:"card___HssFA",cardTopLeft:"cardTopLeft___UgHIp",nft:"nft___L8GMa",right:"right___Vete6",text:"text___jiosb",tag:"tag___FR9xP"},Ve=function(e){var t=e.children,n=e.headerRight;(0,k.Z)().t;return(0,D.jsxs)("div",{className:d()(Ce.card,Ce.nft,"df aic br8"),children:[(0,D.jsx)("img",{src:Te,width:"234px",height:"234px",alt:"nft-image"}),(0,D.jsxs)("div",{className:d()(Ce.right,"df fdc w100"),children:[(0,D.jsxs)("div",{className:d()(Ce.header,"df aic"),children:[(0,D.jsx)("span",{className:"c200 fw3 f24",children:"NFT"}),(0,D.jsx)("span",{className:Ce.tag,children:"Limited to 6,000"}),n?(0,D.jsx)("div",{className:"df fl1 jcfe",children:n}):null]}),(0,D.jsx)("div",{className:d()(Ce.content,"df fdc fl1"),children:t})]})]})},Oe={earnContainer:"earnContainer___b3aQR",earn:"earn___PObAg",explore:"explore___H7alM",text:"text___q8LJd",getStart:"getStart___Ovl0P",linksContainer:"linksContainer___d4oii",linkBtns:"linkBtns___rJgRA",icons:"icons___DGdPG",icon:"icon___yy8S4",header:"header___r48SW",card:"card___aD8hv",cardTopLeft:"cardTopLeft___nFxHN",border:"border___GYUeF",nftContent:"nftContent___HvLu9"},We=function(){var e=(0,k.Z)().t,t=(0,u.useMemo)((function(){return[{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA3lBMVEUAAAD/99//+uv//PD/99//3WX/8N//2mP//vn/+Ob/99//99//8N//99////3/3WX/3WX/3WX/9+P/9t//99///vz///7//vr/+d//9d//12D/66X/7Kb/7az/3mX//ff//PT/3Wb/9tn/22T/3GX/9d//+N//22P/8L7/3WX/99//7q//8LT/3mn/32j/7Kr/77f//PP//O7/8sj/9NP/3Wb/3WT/3WX/9t//9N//77n//PL/9NH/9NH/22T/3WT/5of/33H/5IX/3WX/66P/////5IT/43z/32v/6JWEzxlDAAAAQ3RSTlMAgKCvYN8QENCQIEAIcO/vv5+IeDjn999QLyD379/Px8CviIBgUEgwsJBo1clQIOfAuKegkIB/cFgYuLaYkEDv56eXgz48JgAAAyFJREFUWMPtl9d6okAUgOeoVMHeezeamJ5N3wYk7vu/0A6MODABhzFc+l944ae/Z04bRCdOpMZyWh6XSuVpJy1hySKUU/J1rB1FJR1h2fJ5SMWnFPfCYhq+nyWLUu58x6S4+RtTG1VeLpE4P/C3B6VfFos0lvDro7BvZh1GNEZF4ggHyEVfLNpJD8xjhj+VB0zLOCZAqTRg30FoAR5rQzSD0sYtuDIL/8omBztMmSucWgFW+7jL9M3txwtQWrLAkR+YKSQ6u489AsrLIs0VO4bbz3+23XsHhlxbTpTFGaIY8t/PD2zD3EEE5lNNf44rkV9VurJquArvNuEc4lnXIkOVaAN7yGtw6RJhHw5hyvHCEtrxBB49npAYjRghrYkOBJsnJNTiLxJll0DweOPmkNCKGWbahnnwOLd3nIFHJZPRooQ51reka18JCO+7vrB7Dy4Zx8kmEXYCkzKmwsmVvac3ERGurADjzk54j32UFxHhJrxtVkssvLvu2kHusG7YdJy6OspwhXhmGX7bDD24aTg+haHGKcojK/xghWeqE2TIEaIBR3g+cjWNAj5y3cFoPOHysLD71nDDqnhFqWQLzfgc0kMXpfFK+iLsX/Sv8IFv3czRKmt8IVLoZUCF3WtwmUAWC1VO20RzWQ4ILyZA8IRNYSFtISLsgQ82YVQtTtjiXoGfZCNQmo5L/Rih4gnJ+FK0grOj+aoBS577jL11MwhBtEBnq6yydvhO3UxXfy6uzyYQRrtp+sYGM8464lKFKG6xi0xzBYI884VmpNCtMjn7KwRBfOaxQgCV3Q5rxKcWL/THhvKE+OiMSs2GIxxBgDbiY4SrouE6ZDVPWBnR/UVrwicXDpAMShN7Gw57YhMloR0SjpwQ9VDXzBE64sxqYa9rjCCEjBKR/1LiG7WOgxveViJ2l3iI8U8OOkpIPplwjpJimEmEVZpB0eYmT18Vkc3FsgAuOSSCseb5TBkJITOV5lZYPI3sXSJMm+cTN/J84sYq57+EMHLk/VLV0dEYi4j+k9F3kOeMjoZ3vJKnE1fmTS93Cx2lhj5v6QY6cSJV/gPO8g8R4KopuQAAAABJRU5ErkJggg==",title:"BLE",link:"/rewards",value:"63.04%",label:"BLE Vault APR",text:"BLE is a utility and governance token. 30% of the accumulated platform fees."},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA1VBMVEUAAAD/99//99//9t//6t////3/99//8d//+Ob/9t//+N///fX/9N//99//9t//3WX/8b7/99//8sf/9+P/3WT/3WX/3WX/+un/9NL/9t//99z/12D///7/8Lj/3WX/66T/7Kf/7az//vr/77X/+/H/9tj/9t//22T/77H//vb//PP/3Wb/3mT/3GP/32j/1WD//vz//vn/++7/+uz/22T/3Gb/4HL/3mX/5Ij/8ML/883/3GP/2mX/66P/3WX/////32v/6p3/5YX/43z/5oz/6JT/4XX1mAK3AAAAPXRSTlMAgGBQCO9AEJB4SMAwcCi/sCCgiO/foJiQaDgg975g9+3f28ewiFhAz8e4r3BQIBDnz6iggFDfz8eomJAwuffHAgAAAplJREFUWMPtldlimkAUhueAiiIi7rvGaNXG2Kzdi8SY9P0fqSk0PcKZhVEu/a68+vz/mTkHduZMVtxsHtvrarV9vczENq5ukfXmVN91cxunNT5FN8B0SHtwtO8zxouFPNY43gpo/jouHxqI8ZiMg6ZY+PSl7xQKBcet5dILWyLZ/mXn+zP4R2/hWBoHSG2vfkQdEMM5MuDT885/ZwqHVJxjAu5RhxHTKqs0XlgWmUECw5JdsSgecgFJKq5YuEn6nn1CFwgFofCR+CjfQcPYJj6KBxrGKvFRRsA3qoV7X0MIfa5wffhefC1hyVKd4U4g9IBPj7v5ZQdIR0V9jEtSmPIBBJR4O+3/MnwhItwOOhHbNCA9Qp2ISxKQTp5exCpeMZcVSCgJr+W3yHfRBRk1RvkpbeyBFJtRbr6+CV8FvhnIqTAOn1p4x6rl2mlAnBzfKDjCaeJNF/NBvgMxXMY1fpP3RV8QXEp2DmKPJrRucoYb+YAKbb7QhO4qrpuMyAjfBn+5hxgmX2gAQNebTt5tqzrRwV3ou4I4C5Ew4kfd87w69y2XQ18ZEhhyIdJ4kPjUQpOT57IIyFXouwPCIp2wEbxx8OTuQ9+tavaQPk+IDTvD8A8a6b+mLiT4GBmj2sV86MMjIJNCsCDJfBhEteU+sBifEgCds5By9GNYVG4beiu0NtIBLqZI6EAErR0xBz6OSJjDzqQ2Xrf6s4fYgCRrD3GAVY2RGvB5KJfnDRBhMTEGaEED0oj6WEyGmVlAvGg9KiQgGWg9HKbCBg1wz2R00wZLQa4HaenlWIZG9KmNRrq+6FNSADU208GpgJxSjelhmfJ4WDcLpYHxNJUlXlkbdfq4ZvwwK2Ytx07Ecvv2wjAM0+67FjtzJmP+AEa5J219iiMQAAAAAElFTkSuQmCC",title:"BLP",link:"/rewards",value:"63.04%",label:"BLE Vault APR",text:"BLE is a utility and governance token. 30% of the accumulated platform fees."}]}),[e]),n=(0,u.useMemo)((function(){return function(e){return[{title:e("Asset Safety"),icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAJ1BMVEUAAAD/3WX/3GX/32b/3WX/3mX/3GT/22T/3WX/32j/12D/3GP/3WUgiCOHAAAADHRSTlMAn2BfgN8wQJAgIJB7zS7TAAABAUlEQVRIx+2UvQ3CMBCFTwSBKKGiSEH6FBkgRQZghBQMQMEANGzCAIxAk4TwIzEUPj8rknW+hkARKa+wztKnz86dHBozvMyXnJWtEy7XZx+4vDmVrWNbP3zgKoDKB+KfAG13yVIxZIRE2hENIbkGQAGBBFpWdIJSAlXKCieo4wAwYYUTbEIAWQUEJIDE9IAVd9qzwO5FWFHQlAXhGMXNrFsj0JIWZpnWpGZm1x31To8jcnvJhrRE7jMzVeAaBYVsddS1OuO9GBbGSBhqaJoYI2GoIQACgiIAtBA4RSkBzgZDVV8WBFBIAAIovnp6f3j+Tx84CuDlA4uT9xMzOdCYoeUDbff7ERuvft8AAAAASUVORK5CYII=",text:e("BLEX is an on-chain decentralized exchange for perpetual futures, ensuring secure funds and transparent data.")},{title:e("Trading Smooth"),icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAPFBMVEUAAAD/3GT/3WX/3WX/3GX/3GP/12T/3GT/22T/3WX/3GT/3WX/3WX/3WX/3mX/3WT/22T/32b/3WT/3WWFg33KAAAAE3RSTlMAIN+AYGAQMELPoJ+Q789wcG/vpouLdgAAARFJREFUWMPtltuygjAMAHOhN4pHPfn/f3UcCVQQsGb0qfuIs2uqpQCNRuMD8Gr0Sdjoi7DN14Ih8NUCOucibn4aHct+wckdGl40PJMU8FZgJONSlwVhPyAUoSCSLInbgfWQLCtOeBiQQa8OsqaDTUKn8+bHhayrOiN0x345ci780wVg9t/dMHnyKdyHU79iy43DJNTR1D/C/0lB8ro49SsK6mtB/eMCqU8IM6H61lNf+V0A5yX4T5bgk+1H9Mn2N2J63khUuZHCuP4eoNdCzVa+/k/+VBB+92bCM8nsFwXqQlkwHyjWI81bD1W3H+DFF2Bfc6yT6iU4UOmz9dFmvEHtvi3A1lcc+0uWqXCBRqPxmhtraCyppPC9pQAAAABJRU5ErkJggg==",extre:(0,D.jsx)(re.Z,{style:{width:"120px"},href:"/trade",className:Oe.getStart,children:e("Get Started")}),text:e("Traders can open positions with zero spread using the index price, while the LP vault provides exceptional depth.")},{title:e("Using Friendly"),icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAARVBMVEUAAAD/3WX/3GX/3WX/12X/32j/3WX/12D/22T/2mX/3GT/3WT/3Wb/3WX/3WX/3WX/3WT/32X/3WX/3mX/3GT/3WT/3WVCx2D7AAAAFnRSTlMA32CfECDvIEAwUF+Az6+QcDCAv79/wKzYxQAAAcdJREFUWMPtltt2gyAQRWeGS5CI13T+/1OrLUIQI5indq3stwTOcW6C8OHDP0A2hqxp5HtiI5A9Ttir8lurOQGbS0/vOWOGegxyDtbrv/gIUa0X7NGCRgkgRxKaH6pWv6WPg4SIvBq/HvLKUk0jrH/8FrCyxsvumrkttx95xXm9dT9utOp5pakrIKpdO1qvZ1sK4Df/oA90HFfKAQzeTfMeWv6dcb7BK/B55OhID27dIU9bQM/hoFL4rJe8Ys4y0MmvDmBz6GBFn421C4txJO/RoY1xHetlkgEYzhxCZY6L0OxmBTOHIdmUYYJ524mlVSPvHXRexbwJPntcHChx8IshzxyKe1449NuiPU9BZw7N4iC6qTAIoT4D7x1wv6nQxilzMGme8uRVEHDk0Cfz6cqj3EWHbrMtj3IchDvz5nDDZwmdnity3Tt7fQqlL/wr1EM/VK6PR9FQuGPSo6jjQJusqLqjnWDa67HukmtC1vSjcNbr3XZml5iYta/aaKxK7wy2UGakfNQGvaVTS3K3Dsi/9LXy28xaUCMXcUNCv/eVkNNCNcg5aKCeB2f0Ei4w7kLQk4KLWOFC7MK8+bU6GiIzSvjw4a/zDXnJR1jwtYepAAAAAElFTkSuQmCC",text:e("Trading is available on both the web and mobile app, with easy wallet integration. Joining in only requires one simple step.")}]}(e)}),[e]);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)("section",{className:Oe.earnContainer,children:[(0,D.jsxs)("div",{className:d()(Oe.header,"df fdc"),children:[(0,D.jsx)("span",{className:"f24 fw3 c200",children:e("Staking to Earn")}),(0,D.jsx)("span",{className:"c90",children:e("By staking, LPs can earn up to 70% of the trading fees and capture the value of the protocol.")})]}),(0,D.jsx)(ee.Z,{gutter:[16,24],children:t.map((function(e,t){return(0,D.jsx)(te.Z,{span:12,children:(0,D.jsxs)("div",{className:d()(Oe.card,Oe.earn,"df fdc br8"),children:[(0,D.jsxs)("div",{className:d()("df jcsb fl1 w100 br8"),children:[(0,D.jsxs)("div",{className:Oe.cardTopLeft,children:[(0,D.jsx)("img",{src:e.icon,width:40,height:40})," ",(0,D.jsx)("span",{className:"fw3 f24 c200",children:e.title})]}),(0,D.jsx)(re.Z,{href:e.link,children:"Earn Now"})]}),(0,D.jsxs)("div",{className:d()(Oe.content,"df aic"),children:[(0,D.jsxs)("div",{className:d()(Oe.border,"df fdc"),children:[(0,D.jsx)("span",{className:"c300 f24 fw3",children:e.value}),(0,D.jsx)("span",{className:"c300 f12",children:e.label})]}),(0,D.jsx)("span",{className:"c90",children:e.text})]})]})},t)}))}),(0,D.jsx)(Ve,{children:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("span",{className:d()(Oe.text,"c90"),children:"XXXX is the governance token of BLEX and is used for governance and voting, to purchase pre-deposited fees and as a source of income generated from the distribution of transaction fees for participation in the BLEX agreement."}),(0,D.jsx)("div",{className:Oe.nftContent,children:(0,D.jsx)(re.Z,{children:e("View more")})})]})})]}),(0,D.jsxs)("section",{className:Oe.exploreContainer,children:[(0,D.jsxs)("div",{className:d()(Oe.header),children:[(0,D.jsx)("span",{className:"f24 fw3 c200",children:e("Explore The Endless")}),(0,D.jsx)("br",{}),(0,D.jsx)("span",{className:"f24 fw3 c200",children:e("Possibilities With BLEX")})]}),(0,D.jsx)(ee.Z,{gutter:[16,24],children:n.map((function(e,t){return(0,D.jsx)(te.Z,{span:8,children:(0,D.jsxs)("div",{className:d()(Oe.card,Oe.explore,"df fdc br8"),children:[(0,D.jsx)("img",{src:e.icon,width:32,height:32}),(0,D.jsx)("span",{className:"fw3 f24 c200",children:e.title}),(0,D.jsx)("span",{className:d()(Oe.text,"c90"),children:e.text}),e.extre||null]})})}))})]}),(0,D.jsxs)("section",{className:d()(Oe.linksContainer,"df aic jcsb"),children:[(0,D.jsxs)("div",{className:d()(Oe.left,"df fdc"),children:[(0,D.jsxs)("div",{children:[(0,D.jsx)("span",{className:"f24 c200",children:e("Always at your side")}),(0,D.jsx)("br",{}),(0,D.jsx)("span",{className:"c120",children:e("Join the BLEX community now!")})]}),(0,D.jsxs)("div",{className:d()(Oe.linkBtns,"df"),children:[(0,D.jsx)(re.Z,{type:"c40",href:_e.WG.Twitter,children:(0,D.jsxs)("div",{className:"df jcc aic",children:[(0,D.jsx)(ke,{}),e("Twitter")]})}),(0,D.jsx)(re.Z,{type:"c40",href:_e.WG.Telegram,children:(0,D.jsxs)("div",{className:"df jcc aic",children:[(0,D.jsx)(ye,{}),e("Telegram")]})})]}),(0,D.jsx)("div",{className:d()(Oe.icons,"df"),children:[(0,D.jsx)(Ee,{}),(0,D.jsx)(Be,{}),(0,D.jsx)(Ie,{})].map((function(e,t){return(0,D.jsx)("div",{className:d()(Oe.icon,"df jcc aic"),children:e},t)}))})]}),(0,D.jsx)("div",{className:Oe.right,children:(0,D.jsx)("img",{src:ne,width:380,height:274})})]})]})},Pe=function(){var e=(0,k.Z)().t,t=(0,m.FV)(I),n=o()(t,2),r=n[0],i=n[1],l=(0,_.x)().chainId,c=(0,m.FV)(B),f=o()(c,2),h=f[0],p=f[1],x=(0,m.sJ)(y.tr),A=(0,u.useState)(!1),g=o()(A,2),v=g[0],j=g[1],E=function(){var e=s()(a()().mark((function e(){var t,n;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,b(l);case 4:return t=e.sent,e.next=7,w(x,l);case 7:n=e.sent,i(t),p(n),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:return e.prev=14,j(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,12,14,17]])})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){E();var e=setInterval(E,3e4);return function(){return clearInterval(e)}}),[l,x]),(0,D.jsx)("div",{className:T,children:(0,D.jsxs)("div",{className:C,children:[(0,D.jsxs)("div",{className:d()(V,"tc"),children:[(0,D.jsxs)("div",{className:"f40",children:[(0,D.jsx)("span",{className:"c300",children:e("Decentralized ")}),(0,D.jsx)("span",{className:"c200",children:e("Perpetual Exchange")})]}),(0,D.jsx)("span",{className:d()(O,"dib c120"),children:e("Trade BTC, ETH and other top cryptocurrencies with up to 100x leverage directly from your wallet.")})]}),(0,D.jsx)(R,{className:W,info:r}),(0,D.jsx)($,{className:W,marketInfo:h,markets:x,loading:v}),(0,D.jsx)(Q,{className:W}),(0,D.jsx)(We,{}),(0,D.jsx)(N.a,{})]})})}},22537:function(e,t,n){n.d(t,{$c:function(){return m},BA:function(){return u},Ew:function(){return r},OY:function(){return d},R7:function(){return o},SQ:function(){return s},WG:function(){return a},j$:function(){return c},qL:function(){return l},t4:function(){return i}});var r,a,i,s,l="https://blex.io",o="https://test.blex.io/#/trade",c="Blex.io",d="BLEX | Decentralized Perpetual Exchange";!function(e){e.GitbookFeeStructure="https://blex.gitbook.io/blex/whitepaper/fee-structure",e.AVAXNetworkTest="https://faucet.avax.network/",e.ETHNetworkTest="https://faucet.quicknode.com/arbitrum/goerli/",e.TokenEconomyUsdblp="https://blex.gitbook.io/blex/whitepaper/token-economy-v1.0/usdblp",e.WhitePaperReferrals="https://blex.gitbook.io/blex/whitepaper/referrals",e.WhitePaperMediaKit="https://blex.gitbook.io/blex/whitepaper/media-kit",e.BlexTermsAndConditions="https://blex.medium.com/blex-terms-and-conditions-9b61881c58ea",e.BugBounty="https://blex.gitbook.io/blex/bug-bounty",e.Desc="https://blex.gitbook.io/blex/"}(r||(r={})),function(e){e.Twitter="https://twitter.com/Blex_io",e.Medium="https://medium.com/@blex",e.Discord="https://discord.gg/DsnRrGAzVN",e.Telegram="https://t.me/bestblex",e.Github="https://github.com/dalveytech/blex-contract",e.Docs="https://blex.gitbook.io/blex"}(a||(a={})),function(e){e.Binance="binance",e.BinanceUS="binanceus",e.Bitmart="bitmart"}(i||(i={})),function(e){e.English="en-US",e.Japanese="ja-JP",e.French="fr-FR"}(s||(s={}));var u={Overview:"/overview",Competitions:"/more/competitions"},m={HiddenLimitDistrictModal:"hidden-limit-district-modal"}},26438:function(e,t,n){n.d(t,{r:function(){return c}});var r=n(62435),a=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const c=e=>r.createElement("svg",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&o(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&o(e,n,t[n]);return e})({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{d:"m20.39 5.874-2.547 11.933c-.192.843-.693 1.052-1.405.656l-3.88-2.842-1.873 1.79c-.207.206-.38.378-.78.378l.28-3.927 7.19-6.457c.314-.277-.067-.43-.485-.153L8 12.815l-3.828-1.191c-.832-.258-.847-.827.174-1.224l14.97-5.731c.693-.259 1.3.153 1.073 1.205Z",fill:"#78808E"}))},4343:function(e,t,n){n.d(t,{r:function(){return c}});var r=n(62435),a=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const c=e=>r.createElement("svg",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&o(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&o(e,n,t[n]);return e})({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{d:"M20.625 7.064a7.087 7.087 0 0 1-2.032.557 3.548 3.548 0 0 0 1.556-1.959 7.065 7.065 0 0 1-2.248.859 3.54 3.54 0 0 0-6.03 3.229A10.05 10.05 0 0 1 4.576 6.05a3.537 3.537 0 0 0-.06 3.45 3.54 3.54 0 0 0 1.156 1.276 3.53 3.53 0 0 1-1.603-.443v.045a3.54 3.54 0 0 0 2.839 3.47 3.566 3.566 0 0 1-1.599.062 3.54 3.54 0 0 0 3.306 2.457 7.102 7.102 0 0 1-5.24 1.466 10.01 10.01 0 0 0 5.424 1.59c6.511 0 10.07-5.393 10.07-10.07 0-.151-.003-.305-.01-.457.692-.5 1.29-1.12 1.764-1.83l.002-.003Z",fill:"#78808E"}))}}]);