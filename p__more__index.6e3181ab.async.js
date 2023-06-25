"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40],{43680:function(e,t,n){n.d(t,{x:function(){return x}});var a=n(62435),r=n(74855),i=n.n(r),s=n(90381),u=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const c=e=>a.createElement("svg",((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&d(e,n,t[n]);return e})({width:24,height:25,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{d:"M17.25 9h-7a1.75 1.75 0 0 0-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h7A1.75 1.75 0 0 0 19 17.75v-7A1.75 1.75 0 0 0 17.25 9Z",stroke:"#78808E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M15.5 9V7.25a1.75 1.75 0 0 0-1.75-1.75h-7A1.75 1.75 0 0 0 5 7.25v7A1.75 1.75 0 0 0 6.75 16H8.5",stroke:"#78808E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}));var y=n(88469),m=n(98330),f=n(86074),x=function(e){var t=e.account,n=e.isFull,r=void 0!==n&&n,u=e.isCopy,l=void 0===u||u,o=(0,m.Z)().t,p=(0,a.useMemo)((function(){return t?r?t:t.length>13?"".concat(t.slice(0,5),"...").concat(t.slice(t.length-4)):t:"-"}),[r,t]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{children:null!=p?p:"-"}),null!=l?l:(0,f.jsx)(i(),{text:null!=t?t:"",onCopy:function(){return y.U.success(o("Address copied to your clipboard"))},children:(0,f.jsx)(c,{className:s.Z.copy})})]})}},87798:function(e,t,n){n.d(t,{Fc:function(){return u},Fr:function(){return l},II:function(){return r},Pi:function(){return a},T$:function(){return s},ZF:function(){return i}});var a="wss://data-stream.binance.com/stream",r="https://data.binance.com/api/v3/",i="https://api.binance.us/api/v3",s="wss://stream.binance.us:9443/stream",u="https://api-cloud.bitmart.com/spot/v1",l="https://info.blex.io/api"},37432:function(e,t,n){n.d(t,{x:function(){return s}});var a=n(34713),r=n(58926),i=n(65334);function s(){var e=(0,a.Ge)().chainId;if(!e){var t=localStorage.getItem(i.HC);t&&((e=parseInt(t))||localStorage.removeItem(i.HC))}return e&&r.FQ.includes(e)||(e=r.rC),{chainId:e}}},28722:function(e,t,n){n.d(t,{Dw:function(){return x},eI:function(){return y},x7:function(){return f}});var a,r=n(17061),i=n.n(r),s=n(17156),u=n.n(s),l=n(38416),o=n.n(l),p=n(43671),d=n(46495),c=n(58926);function y(e){return new p.f({uri:e,cache:new d.h})}var m=(a={},o()(a,c.Qz,"avalanche-c-chain"),o()(a,c.PO,"arbitrum-one"),o()(a,c.N0,"arbitrum-nova"),o()(a,c.bx,"fujibeta"),o()(a,c.qF,"arbtest"),a),f=function(e){return"https://api.thegraph.com/subgraphs/name/dalveytech-adrew/"+m[e]},x=function(){var e=u()(i()().mark((function e(t,n){var a,r;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({query:n}),mode:"cors"}).catch((function(e){console.log("err",e)}));case 3:return a=e.sent,e.next=6,null==a?void 0:a.json();case 6:return r=e.sent,e.abrupt("return",(null==r?void 0:r.data)||{});case 10:e.prev=10,e.t0=e.catch(0),console.log("fetchGql error",e.t0);case 13:return e.abrupt("return",{});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}()},79536:function(e,t,n){n.d(t,{m:function(){return l}});var a=n(27424),r=n.n(a),i=n(62435),s=n(86074),u=function(e){var t=Math.floor(e/86400),n=Math.floor(e%86400/3600),a=Math.floor(e%3600/60),r=e%60,i="";return t>0&&(i+=t+"d "),n>0&&(i+=n+"h "),a>0&&(i+=a+"m "),r>0&&(i+=r+"s "),i.trim()},l=function(e){var t=e.className,n=e.startTime,a=e.endedTime,l=(0,i.useState)("Start At "),o=r()(l,2),p=o[0],d=o[1],c=(0,i.useState)("-"),y=r()(c,2),m=y[0],f=y[1];return(0,i.useEffect)((function(){if(n&&a){var e=setInterval((function(){var e=Math.round(Date.now()/1e3);n>e?(d("Start After "),f(u(Number(n)-e))):a<e?(d("Ended"),f("")):(d("Ending in "),f(u(Number(a)-e)))}),1e3);return function(){return clearInterval(e)}}}),[n,a]),(0,s.jsxs)("span",{className:"dib c100 ".concat(t),children:[p,(0,s.jsx)("span",{className:"c200",children:m})]})}},63695:function(e,t,n){n.r(t),n.d(t,{default:function(){return ze}});var a=n(42122),r=n.n(a),i=n(34713),s=n(94184),u=n.n(s),l=n(62435),o=n(4480),p=n(95591),d=n(3410),c=n(17061),y=n.n(c),m=n(17156),f=n.n(m),x=n(61895),j=n(24069),v=n(28722),h=function(){var e=f()(y()().mark((function e(t,n){var a,i,s,u,l,o,p;return y()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},i='query MyQuery {\n    users(where: {id: "'.concat(t.toLowerCase(),'"}) {\n      avgLoss\n      avgProfit\n      winRate\n      totalVolume\n      realizedPnl\n      trades\n      totalProfitCount\n    }\n  }'),s=(0,v.x7)(n),e.next=5,(0,v.Dw)(s,i);case 5:return u=e.sent,l=u.users,o=l[0],(p=r()(r()({},o),a)).avgProfit=o.avgProfit,p.avgLoss=o.avgLoss,e.abrupt("return",p);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=f()(y()().mark((function e(t,n){var a,i,s,u,l,o,p,d,c;return y()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u='query MyQuery {\n    users(where: {id: "'.concat(t.toLowerCase(),'"}){\n      avgLoss\n      avgProfit\n      winRate\n      totalVolume\n      realizedPnl\n      trades\n      totalProfit\n      totalLoss\n    }\n  }'),l=(0,v.x7)(n),e.next=4,(0,v.Dw)(l,u);case 4:return o=e.sent,p=o.users,d=null==p?void 0:p[0],console.log("---user---",d),c=null!==(a=(0,x.Q6)(null!==(i=d.totalProfit)&&void 0!==i?i:0).plus((0,x.Q6)(d.totalLoss)).toString())&&void 0!==a?a:"0",d.realizedPnl=null!==(s=(0,j.dN)(c,18))&&void 0!==s?s:"0",d.feesPaid=(0,j.dN)(d.feesPaid,18),d.totalVolume=(0,j.dN)(d.totalVolume,18),console.log("---user---after",d),e.abrupt("return",r()({},d));case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=n(56690),N=n.n(T),g=n(89728),_=n.n(g),M=n(61655),w=n.n(M),I=n(26389),k=n.n(I),O=JSON.parse('{"Mt":[{"inputs":[{"internalType":"address","name":"factory","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"market","type":"address"},{"indexed":false,"internalType":"int256[]","name":"fees","type":"int256[]"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"UpdateFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"market","type":"address"},{"indexed":false,"internalType":"uint8","name":"kind","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"oldFeeOrRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeOrRate","type":"uint256"}],"name":"UpdateFeeAndRates","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEE_RATE_PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"int256[]","name":"fees","type":"int256[]"}],"name":"collectFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"bool","name":"isLong","type":"bool"}],"name":"cumulativeFundingRates","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint8","name":"","type":"uint8"}],"name":"feeAndRates","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeVault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fundFee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"}],"name":"getExecFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"},{"internalType":"uint256","name":"_oraclePrice","type":"uint256"},{"internalType":"bool","name":"isOpen","type":"bool"},{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_sizeDelta","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_slippage","type":"uint256"},{"internalType":"bool","name":"_isExec","type":"bool"},{"internalType":"uint8","name":"liqState","type":"uint8"},{"internalType":"uint64","name":"_fromOrder","type":"uint64"},{"internalType":"bytes32","name":"_refCode","type":"bytes32"},{"internalType":"uint256","name":"collateralDelta","type":"uint256"},{"internalType":"uint8","name":"execNum","type":"uint8"},{"internalType":"uint256[]","name":"inputs","type":"uint256[]"}],"internalType":"struct MarketDataTypes.UpdatePositionInputs","name":"params","type":"tuple"},{"components":[{"internalType":"address","name":"market","type":"address"},{"internalType":"bool","name":"isLong","type":"bool"},{"internalType":"uint32","name":"lastTime","type":"uint32"},{"internalType":"uint216","name":"extra3","type":"uint216"},{"internalType":"uint256","name":"size","type":"uint256"},{"internalType":"uint256","name":"collateral","type":"uint256"},{"internalType":"uint256","name":"averagePrice","type":"uint256"},{"internalType":"int256","name":"entryFundingRate","type":"int256"},{"internalType":"int256","name":"realisedPnl","type":"int256"},{"internalType":"uint256","name":"extra0","type":"uint256"},{"internalType":"uint256","name":"extra1","type":"uint256"},{"internalType":"uint256","name":"extra2","type":"uint256"}],"internalType":"struct Position.Props","name":"position","type":"tuple"}],"name":"getFees","outputs":[{"internalType":"int256[]","name":"fees","type":"int256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"uint256","name":"longSize","type":"uint256"},{"internalType":"uint256","name":"shortSize","type":"uint256"},{"internalType":"bool","name":"isLong","type":"bool"}],"name":"getFundingRate","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getGlobalFees","outputs":[{"internalType":"int256","name":"total","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"},{"internalType":"uint256","name":"_oraclePrice","type":"uint256"},{"internalType":"bool","name":"isOpen","type":"bool"},{"internalType":"bool","name":"isCreate","type":"bool"},{"components":[{"internalType":"uint8","name":"version","type":"uint8"},{"internalType":"uint32","name":"updatedAtBlock","type":"uint32"},{"internalType":"uint8","name":"triggerAbove","type":"uint8"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint48","name":"extra3","type":"uint48"},{"internalType":"uint128","name":"collateral","type":"uint128"},{"internalType":"uint128","name":"size","type":"uint128"},{"internalType":"uint128","name":"price","type":"uint128"},{"internalType":"uint128","name":"extra1","type":"uint128"},{"internalType":"uint64","name":"orderID","type":"uint64"},{"internalType":"uint64","name":"extra2","type":"uint64"},{"internalType":"uint128","name":"extra0","type":"uint128"},{"internalType":"bytes32","name":"refCode","type":"bytes32"}],"internalType":"struct Order.Props","name":"_order","type":"tuple"},{"internalType":"uint256[]","name":"inputs","type":"uint256[]"}],"internalType":"struct MarketDataTypes.UpdateOrderInputs","name":"params","type":"tuple"}],"name":"getOrderFees","outputs":[{"internalType":"int256","name":"fees","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantAndRevoke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"vault","type":"address"},{"internalType":"address","name":"fundingFee","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"uint256[]","name":"rates","type":"uint256[]"}],"name":"setFeeAndRates","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"vault","type":"address"}],"name":"setFeeVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"fundingFee","type":"address"}],"name":"setFundFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"uint256","name":"longSize","type":"uint256"},{"internalType":"uint256","name":"shortSize","type":"uint256"}],"name":"updateCumulativeFundingRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),A=function(e){w()(a,e);var t,n=k()(a);function a(e,t){return N()(this,a),n.call(this,e,t,O.Mt)}return _()(a,[{key:"getClassName",value:function(){return"FeeRouter"}},{key:"getAccountFees",value:(t=f()(y()().mark((function e(t){var n;return y()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",void 0);case 2:return e.next=4,this.call("getAccountFees",t);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),a}(n(66457).k),L=function(){var e=f()(y()().mark((function e(t,n,a){var r,i;return y()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new A(t,n),e.next=3,r.getAccountFees(a);case 3:return i=e.sent,e.abrupt("return",(0,j.dN)(i,18));case 5:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),D=Object.defineProperty,Z=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,S=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const z=e=>l.createElement("svg",((e,t)=>{for(var n in t||(t={}))P.call(t,n)&&S(e,n,t[n]);if(Z)for(var n of Z(t))C.call(t,n)&&S(e,n,t[n]);return e})({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),l.createElement("path",{d:"m9 16.5 4.5-4.5L9 7.5",stroke:"#fff",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}));var F=n(58926),R=n(37432),Y=n(98330),E=n(22537),V="more___v_xdE",Q="card___ZViUB",G="tag___Ao9lP",B=n(38416),W=n.n(B),H=n(70215),U=n.n(H),J=n(27424),q=n.n(J),X=n(71230),$=n(15746),K=n(79536),ee=n(87004),te=n(77438),ne=n(36493),ae="card___oHb6E",re="titleText___J9yLo",ie="cardContent___NBZnP",se="xstr___dns5W",ue=n(86074),le=["value","label","xstr"],oe=function(){var e,t,n,a,s,l=(0,i.Ge)().account,o=(0,Y.Z)().t,c=(0,p.ZP)(["getCompetitionPageInfos",l],(function(e){var t=q()(e,2),n=(t[0],t[1]);return(0,ee.I)(n)})),y=c.data;return(0,ue.jsxs)("div",{className:"bgc10 br16 "+ae,children:[(0,ue.jsxs)("div",{className:"c200 f16 "+re,children:[(0,ue.jsx)("span",{children:(0,ue.jsx)(d._H,{id:"Competitions"})}),(0,ue.jsx)(K.m,{className:"f14",startTime:null==y?void 0:y.startAt,endedTime:null==y?void 0:y.endedAt})]}),(0,ue.jsxs)(X.Z,{children:[[{label:o("Profit Rank"),value:(null==y||null===(e=y.user)||void 0===e?void 0:e.yourRankProfit)||"-",span:5,xs:12,md:5},{label:o("Profit"),value:(0,x.dp)(null==y||null===(t=y.user)||void 0===t?void 0:t.yourProfit,2).display({prefix:"$"})||"-",xs:12,md:5,span:5,xstr:!0},{label:o("Trade ROI Rank"),value:(null==y||null===(n=y.user)||void 0===n?void 0:n.yourRankRoi)||"-",span:5,xs:8,md:5},r()({label:o("Trade ROI"),value:(0,x.dp)(null==y||null===(a=y.user)||void 0===a?void 0:a.yourRoi).display({prefix:"",suffix:"%"})||"-",span:5},(0,ne.tq)()?{xs:{span:5,offset:3}}:{span:5})].map((function(e,t){var n=e.value,a=e.label,i=e.xstr,s=U()(e,le);return(0,ue.jsx)($.Z,r()(r()({},s),{},{children:(0,ue.jsxs)("div",{className:u()("df fdc jcfe jcfs",ie,W()({},se,Boolean(i))),children:[(0,ue.jsx)("span",{className:"f18 c200 fw3",children:n}),(0,ue.jsx)("span",{className:"f14 c100",children:a})]})}),t)})),(0,ue.jsx)($.Z,{span:4,xs:8,md:4,children:(0,ue.jsxs)("div",{className:"df fdc jcfe jcfs tr "+ie,children:[(0,ue.jsx)("span",{className:"f18 cGreen fw3",children:(0,x.dp)(null==y||null===(s=y.user)||void 0===s?void 0:s.yourTotalPrize).display({prefix:"$"})}),(0,ue.jsx)("span",{className:"f14 c100",children:o("Prize")})]})})]}),(0,ue.jsx)("div",{children:(0,ue.jsx)(te.Z,{href:E.BA.Competitions,type:"primary",style:{width:"120px"},children:(0,ue.jsx)(d._H,{id:"View"})})})]})},pe=n(96963),de=n(38478),ce={item:"item___FRv2D",tooltip:"tooltip___bOFO9",btn:"btn___fp2oa",primary:"primary___h3mfF",head:"head___J_JkM",content:"content___EqeXD",cell:"cell___NTsu9",fieldValue:"fieldValue___cZGhB",fieldName:"fieldName___weocJ",footer:"footer___Ir88b",icon:"icon___qyyhH",fee:"fee___t82Et",fundFeeInfo:"fundFeeInfo___KmcYB"},ye=function(){return(0,ue.jsxs)("div",{className:ce.fundFeeInfo,children:[(0,ue.jsxs)("b",{children:[(0,ue.jsx)(d._H,{id:"Fund"}),(0,ue.jsx)(d._H,{id:"Fee"})]}),(0,ue.jsxs)("div",{children:[(0,ue.jsx)(d._H,{id:"fundFeeInfoP1"}),(0,ue.jsx)("br",{}),(0,ue.jsx)(d._H,{id:"fundFeeInfoP2"})]})]})},me=function(e){var t=e.tradingData,n=(0,Y.Z)().t,a=(0,R.x)().chainId===F.qF;return(0,ue.jsxs)(X.Z,{className:ce.tradingInfo,gutter:24,children:[(0,ue.jsx)($.Z,{xs:24,lg:12,children:(0,ue.jsxs)("div",{className:ce.item,children:[(0,ue.jsx)("div",{className:ce.head,children:n("Trading Data")}),(0,ue.jsxs)(X.Z,{className:ce.content,children:[(0,ue.jsxs)($.Z,{span:a?12:8,className:ce.cell,children:[(0,ue.jsx)("div",{className:ce.fieldValue,children:(0,x.dp)(null==t?void 0:t.totalVolume).display()}),(0,ue.jsx)("div",{className:ce.fieldName,children:n("Total volume")})]}),!a&&(0,ue.jsxs)($.Z,{span:8,className:ce.cell,children:[(0,ue.jsx)("div",{className:ce.fieldValue,children:(0,x.dp)(null==t?void 0:t.feesPaid).display()}),(0,ue.jsx)("div",{className:ce.fieldName,children:n("Fees Paid")})]}),(0,ue.jsxs)($.Z,{span:a?10:8,offset:a?2:0,className:ce.cell,children:[(0,ue.jsx)("div",{className:ce.fieldValue,children:(0,x.dp)(null==t?void 0:t.realizedPnl).display()}),(0,ue.jsx)("div",{className:ce.fieldName,children:n("PNL")})]})]}),(0,ue.jsx)(te.Z,{className:ce.footer,href:"/trade",children:n("Trade")})]})}),(0,ue.jsx)($.Z,{xs:24,lg:12,children:(0,ue.jsxs)("div",{className:ce.item,children:[(0,ue.jsx)("div",{className:ce.head,children:n("Trading Fees")}),(0,ue.jsxs)(X.Z,{className:ce.content,children:[(0,ue.jsxs)($.Z,{span:12,className:ce.cell,children:[(0,ue.jsx)("div",{className:ce.fieldValue,children:"0.1000%"}),(0,ue.jsx)("div",{className:ce.fieldName,children:n("Open/Close Fee")})]}),(0,ue.jsxs)($.Z,{span:10,offset:2,className:ce.cell,children:[(0,ue.jsx)("div",{className:ce.fieldValue,children:"0.0020% / 1h"}),(0,ue.jsx)(pe.Z,{overlayStyle:{maxWidth:420},placement:"topLeft",overlay:(0,ue.jsx)(ye,{}),children:(0,ue.jsxs)("div",{className:"".concat(ce.fieldName," ").concat(ce.fee),children:[n("Funding Fee")," ",(0,ue.jsx)(de.r,{className:ce.icon})]})})]})]}),(0,ue.jsx)(te.Z,{className:ce.footer,type:"c20",href:E.Ew.GitbookFeeStructure,children:n("Read More")})]})})]})},fe=n(610),xe=n.n(fe);Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var je=n(43680),ve=n(74595),he=n(82226),be=n(65334),Te=n(1403),Ne=n(16330),ge=n(70794),_e="content___oCbRs",Me="mainText___omv2g",we="pnlContainer____9bQB",Ie="pnl___A7Mzd",ke="winRate____2WVz",Oe="prices___xdV4Q",Ae="priceContainer___ioeHG",Le="priceTitle___RSAFh",De="priceValue___s4toj",Ze=function(e){var t=e.userInfo;return(0,ue.jsxs)("div",{className:_e,children:[(0,ue.jsx)("span",{className:Me,children:(0,ue.jsx)(d._H,{id:"IMakeTrades",values:{value:(0,ue.jsx)("b",{children:t.trades})}})}),(0,ue.jsxs)("div",{className:we,children:[(0,ue.jsx)("span",{className:Ie,children:(0,ue.jsx)(d._H,{id:"Winrate"})}),(0,ue.jsx)("span",{className:ke,children:null!=t&&t.winRate?(0,x.dp)((0,ge.O)(null==t?void 0:t.winRate).multipliedBy(100)).display({prefix:"",suffix:"%"}):"-"})]}),(0,ue.jsx)("div",{className:Oe,children:[{titleId:"profit",value:(0,x.dp)(null==t?void 0:t.avgProfit).display({prefix:"",suffix:"%"})},{titleId:"loss",value:(0,x.dp)(null==t?void 0:t.avgLoss).display({prefix:"",suffix:"%"})}].map((function(e){return(0,ue.jsxs)("div",{className:Ae,children:[(0,ue.jsxs)("span",{className:Le,children:[(0,ue.jsx)(d._H,{id:"Average"})," ",(0,ue.jsx)(d._H,{id:e.titleId})]}),(0,ue.jsx)("span",{className:De,children:e.value})]},e.titleId)}))})]})},Pe=n(90381),Ce=function(e){var t,n=e.userInfo,a=(0,Y.Z)().t,r=ve.I.useContainer().setWalletVisible,s=(0,i.Ge)(),u=s.deactivate,o=s.account,p=(0,Te.E3)(F.p4).provider,c=(0,l.useCallback)((function(){(0,Ne.VK)(),(0,Ne.hL)(),u()}),[u]);var y=[{name:a("Trades"),value:null!==(t=null==n?void 0:n.trades)&&void 0!==t?t:"-"},{name:a("Winrate"),value:null!=n&&n.winRate?(0,x.dp)((0,x.Q6)(null==n?void 0:n.winRate).multipliedBy(100)).display({prefix:"",suffix:"%"}):"-"},{name:a("Average profit"),value:(0,x.dp)(null==n?void 0:n.avgProfit).display({prefix:"",suffix:"%"}),xsValue:10},{name:a("Average loss"),value:(0,x.dp)(null==n?void 0:n.avgLoss).display({prefix:"",suffix:"%"})}];return(0,ue.jsxs)(X.Z,{className:Pe.Z.walletInfo,children:[(0,ue.jsx)($.Z,{xs:24,md:12,className:Pe.Z.left,children:(0,ue.jsxs)(X.Z,{style:{width:"100%"},children:[(0,ue.jsx)($.Z,{flex:"100px",style:{height:80},children:o?(0,ue.jsx)(xe(),{size:80,address:null!=o?o:"",provider:p}):(0,ue.jsx)("img",{className:Pe.Z.avatar,src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjU2MyA0MC41YzAgMjEuMjI4IDE3LjIwOSAzOC40MzggMzguNDM3IDM4LjQzOCAyMS4yMjggMCAzOC40MzgtMTcuMjEgMzguNDM4LTM4LjQzOFM2MS4yMjcgMi4wNjIgNDAgMi4wNjIgMS41NjIgMTkuMjczIDEuNTYyIDQwLjVaTTQwIC41QzE3LjkwOS41IDAgMTguNDA5IDAgNDAuNXMxNy45MDkgNDAgNDAgNDAgNDAtMTcuOTA5IDQwLTQwUzYyLjA5MS41IDQwIC41WiIgZmlsbD0iIzFFMjEyNiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjcuNTgyIDI4LjY4NEg0MGMwLTUuMzQtNC4wNi05LjY2OC05LjA2Ni05LjY2OEgxOC41MTZjMCA1LjMzOSA0LjA2IDkuNjY4IDkuMDY2IDkuNjY4Wk00MCAyOS43NThIMjcuNTgyYy01LjAwNiAwLTkuMDY2IDQuMzI5LTkuMDY2IDkuNjY4aDEyLjQxOGM1LjAwNiAwIDkuMDY2LTQuMzMgOS4wNjYtOS42NjhabTkuMDY2IDBoMTIuNDE4YzAgNS4zMzktNC4wNiA5LjY2OC05LjA2NiA5LjY2OEg0MGMwLTUuMzQgNC4wNi05LjY2OCA5LjA2Ni05LjY2OFptMC0xLjA3NGgxMi40MThjMC01LjM0LTQuMDYtOS42NjgtOS4wNjYtOS42NjhINDBjMCA1LjMzOSA0LjA2IDkuNjY4IDkuMDY2IDkuNjY4Wk0yNy41ODIgNTEuMjQySDQwYzAtNS4zMzktNC4wNi05LjY2OC05LjA2Ni05LjY2OEgxOC41MTZjMCA1LjM0IDQuMDYgOS42NjggOS4wNjYgOS42NjhaTTQwIDUyLjMxNkgyNy41ODJjLTUuMDA2IDAtOS4wNjYgNC4zMy05LjA2NiA5LjY2OGgxMi40MThjNS4wMDYgMCA5LjA2Ni00LjMyOSA5LjA2Ni05LjY2OFptOS4wNjYgMGgxMi40MThjMCA1LjM0LTQuMDYgOS42NjgtOS4wNjYgOS42NjhINDBjMC01LjMzOSA0LjA2LTkuNjY4IDkuMDY2LTkuNjY4Wm0wLTEuMDc0aDEyLjQxOGMwLTUuMzM5LTQuMDYtOS42NjgtOS4wNjYtOS42NjhINDBjMCA1LjM0IDQuMDYgOS42NjggOS4wNjYgOS42NjhaIiBmaWxsPSIjM0Y0NDRDIi8+PC9zdmc+"})}),(0,ue.jsx)($.Z,{className:Pe.Z.h5Address,children:(0,ue.jsx)(je.x,{isFull:!1,account:o})}),(0,ue.jsxs)($.Z,{className:Pe.Z.details,flex:"auto",children:[(0,ue.jsx)(X.Z,{className:Pe.Z.address,children:(0,ue.jsx)(je.x,{isFull:!1,account:o})}),(0,ue.jsx)(X.Z,{className:Pe.Z.cells,children:y.map((function(e,t){return(0,ue.jsxs)($.Z,{className:Pe.Z.cell,lg:6,xs:e.xsValue||7,children:[(0,ue.jsx)("span",{className:Pe.Z.fieldValue,children:e.value}),(0,ue.jsx)("span",{className:Pe.Z.fieldName,children:e.name})]},t)}))})]})]})}),(0,ue.jsxs)($.Z,{xs:24,md:8,className:Pe.Z.right,children:[o&&(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)(he.T,{title:a("Share"),downloadName:"".concat(E.j$,"_share"),content:(0,ue.jsx)(Ze,{userInfo:n}),children:(0,ue.jsx)(te.Z,{disabled:!n,className:"".concat(Pe.Z.shareBtn),children:(0,ue.jsx)(d._H,{id:"Share"})})}),(0,ue.jsx)(te.Z,{className:Pe.Z.btn,type:"c30",onClick:function(){return c(),localStorage.removeItem(be.Cs),void localStorage.removeItem(be.Wr)},children:(0,ue.jsx)(d._H,{id:"Disconnect"})})]}),!o&&(0,ue.jsx)(te.Z,{className:Pe.Z.btn,onClick:function(){return r(!0)},children:a("Connect wallet")})]})]})},Se=function(){var e=(0,i.Ge)(),t=e.account,n=e.library,a=(0,R.x)().chainId,s=(0,Y.Z)().t,o=(0,p.ZP)(t,(function(e){return h(t||"",a)})).data,c=(0,p.ZP)([t],(function(){return b(t||"",a)})).data,y=(0,p.ZP)("getAccountFees",(function(){return L(n,a,t)})).data,m=(0,l.useMemo)((function(){return y?r()(r()({},c),{},{feesPaid:y}):c}),[y,c]);return(0,ue.jsxs)("div",{className:V,children:[(0,ue.jsx)(Ce,{userInfo:o}),a!==F.qF&&(0,ue.jsx)(oe,{}),(0,ue.jsx)(me,{tradingData:m}),(0,ue.jsxs)("a",{href:E.Ew.BugBounty,target:"_blank",className:u()(Q,"df jcsb f14 lh20"),children:[(0,ue.jsxs)("span",{className:"df aic f16 c200",children:[s("Bug Bounty"),(0,ue.jsx)("i",{className:G+" f14",children:"New"})]}),(0,ue.jsxs)("div",{className:"df aic c100",children:[s("Submit a Bug"),(0,ue.jsx)(z,{className:"cp"})]})]}),(0,ue.jsxs)(d.rU,{to:"/more/analytics",className:u()(Q,"df jcsb f14 lh20 mt-24"),children:[(0,ue.jsx)("span",{className:"df aic c200",children:s("Analytics")}),(0,ue.jsx)(z,{className:"cp"})]})]})},ze=function(){return(0,ue.jsx)(o.Wh,{children:(0,ue.jsx)(Se,{})})}},52545:function(e,t,n){n.d(t,{z:function(){return y}});var a,r,i,s=n(17061),u=n.n(s),l=n(17156),o=n.n(l),p=n(8433),d=n(87798),c=p.Z.create({baseURL:d.Fr,timeout:5e3}),y={getLocaleInfo:(i=o()(u()().mark((function e(t){var n,a;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.post("/infomation/limitedregion",{account:t});case 2:return n=e.sent,a=n.data,e.abrupt("return",null==a?void 0:a.data);case 5:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)}),getCompetitionInfo:(r=o()(u()().mark((function e(t){var n,a;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.post("/competition/getcompetition",{account:t});case 2:return n=e.sent,a=n.data,e.abrupt("return",null==a?void 0:a.data);case 5:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)}),getCompetitionList:(a=o()(u()().mark((function e(t){var n,a,r,i,s;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.isroi,a=t.page,r=t.size,e.next=3,c.post("/competition/getcompetitiondetail",{isroi:n,page:a,size:r});case 3:return i=e.sent,s=i.data,e.abrupt("return",null==s?void 0:s.data);case 6:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})}},87004:function(e,t,n){n.d(t,{I:function(){return l},k:function(){return o}});var a=n(17061),r=n.n(a),i=n(17156),s=n.n(i),u=n(52545),l=function(){var e=s()(r()().mark((function e(t){var n;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.z.getCompetitionInfo(t);case 2:if(!(n=e.sent)){e.next=5;break}return e.abrupt("return",{endedAt:n.endedAt,prizePool:n.prizePool,startAt:n.startAt,trades:n.trades,totalVolume:Number(n.tradingVolume),user:{yourProfit:Number(n.yourProfit),yourRankTrade:Number(n.yourRankTrade),yourRankRoi:Number(n.yourRankRoi),yourTotalPrize:Number(n.yourRoiPrize)+Number(n.yourTradePrize),yourRoi:Number(n.yourRoi),yourRoiPrize:Number(n.yourRoiPrize),yourTradePrize:Number(n.yourTradePrize),yourTrades:Number(n.yourTrades),yourVolume:Number(n.yourVolume)}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=s()(r()().mark((function e(t){var n;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.z.getCompetitionList(t);case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:return e.abrupt("return",n.rows.map((function(e){return{id:e.CompetitionSetModelID,account:e.account,cumCollateral:e.cumCollateral,profit:e.grossProfit,rank:t.isroi?e.rank_roi:e.rank_profit,ROI:e.roi,trades:e.trades,prize:t.isroi?e.prize_roi:e.prize_profit,reward:e.reward,cumSize:e.volume}})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},90381:function(e,t){t.Z={walletInfo:"walletInfo___GORBE",avatar:"avatar___SFBQR",copy:"copy___lquiD",left:"left___J1Auj",right:"right___cW8mN",address:"address___WNk72",cells:"cells___ZDMOm",cell:"cell___Cu_Tk",fieldValue:"fieldValue___YJIFV",fieldName:"fieldName___E9D3z",btn:"btn___UEE1S",shareBtn:"shareBtn___KsWSb",primary:"primary___CrgyC",h5Address:"h5Address___F2MEi"}},15746:function(e,t,n){var a=n(21584);t.Z=a.Z},71230:function(e,t,n){var a=n(92820);t.Z=a.Z}}]);