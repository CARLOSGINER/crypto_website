(this.webpackJsonpcrypto_website=this.webpackJsonpcrypto_website||[]).push([[0],{11:function(e,t,c){e.exports={searchInputs:"searchBar_searchInputs__3Q0Fo",search:"searchBar_search__1dDsX",searchIcon:"searchBar_searchIcon__2fCvg",dataResult:"searchBar_dataResult__AlUbT",dataItem:"searchBar_dataItem__2XtkU",clearBtn:"searchBar_clearBtn__1TqQT"}},5:function(e,t,c){e.exports={page:"login_page__36RJw",loginDiv:"login_loginDiv__zjbY5",logo:"login_logo__39Wt8",title:"login_title__3va9B",subTitle:"login_subTitle__21pJk",fields:"login_fields__3uAkb",email:"login_email__1xNff",password:"login_password__31X-l",signinButton:"login_signinButton__3rkFn",loginButton:"login_loginButton__3JFMK",link:"login_link__1JGgw",inputError:"login_inputError__2YOAJ"}},69:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(18),o=c.n(s),i=c(4),r=c(17),l=c(3),d=c(5),u=c.n(d),j=c(1);function b(e){var t=e.getID,c=e.getToken,n=e.getFirstTimeUser,s=e.getDataBaseCoins,o=Object(a.useState)(""),r=Object(i.a)(o,2),d=r[0],b=r[1],h=Object(a.useState)(""),p=Object(i.a)(h,2),O=p[0],g=p[1],f=Object(a.useState)(!1),_=Object(i.a)(f,2),m=_[0],v=_[1],x=Object(a.useState)(!1),N=Object(i.a)(x,2),y=N[0],w=N[1],S=Object(a.useState)("Welcome!"),k=Object(i.a)(S,2),C=k[0],B=k[1],T=Object(a.useState)(!1),E=Object(i.a)(T,2),D=E[0],I=E[1],A=Object(a.useRef)(null),U=Object(l.f)();Object(a.useEffect)((function(){D&&U("/dashboard")}),[D,U]),Object(a.useEffect)((function(){null!==A.current&&A.current.focus()}),[]);var J=function(){fetch("https://todgerapp.herokuapp.com/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:d,password:O})}).then((function(e){if(401===e.status)return v(!0),w(!0),void B("Check again or Sign Up!");e.json().then((function(e){var a=e.data.token,o=e.data.user._id;t(o),c(a),B("Welcome back, come on in!"),fetch("https://todgerapp.herokuapp.com/getone/".concat(o),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:a}}).then((function(e){return e.json()})).then((function(e){null===e.data?(n(!0),console.log("new user detected")):null!==e.data&&(s(e.data.coins),n(!1))})),setTimeout((function(){I(!0)}),1e3)}))}))};return Object(j.jsx)("section",{className:u.a.page,children:Object(j.jsxs)("div",{className:u.a.loginDiv,children:[Object(j.jsx)("div",{className:u.a.logo}),Object(j.jsx)("div",{className:u.a.title,children:"Crypto App"}),Object(j.jsx)("div",{className:u.a.subTitle,children:C}),Object(j.jsxs)("div",{className:u.a.fields,children:[Object(j.jsxs)("div",{className:y?u.a.email+" "+u.a.inputError:u.a.email,children:[Object(j.jsx)("svg",{fill:"#999",className:"svg-icon",viewBox:"0 0 20 20",children:Object(j.jsx)("path",{d:"M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"})}),Object(j.jsx)("input",{ref:A,type:"email",className:u.a.userInput,placeholder:"username",onChange:function(e){b(e.target.value),w(!1)},value:d})]}),Object(j.jsxs)("div",{className:y?u.a.password+" "+u.a.inputError:u.a.password,children:[Object(j.jsx)("svg",{fill:"#999",className:"svg-icon",viewBox:"0 0 20 20",children:Object(j.jsx)("path",{d:"M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878"})}),Object(j.jsx)("input",{onKeyDown:function(e){return function(e){console.log(e.key),"Enter"===e.key&&J()}(e)},type:"password",className:u.a.passInput,placeholder:"password",onChange:function(e){g(e.target.value),w(!1)},value:O})]})]}),Object(j.jsx)("button",{className:u.a.loginButton,onClick:J,children:"Login"}),m&&Object(j.jsx)("button",{className:u.a.signinButton,onClick:function(e){fetch("https://todgerapp.herokuapp.com/signup",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:d,password:O})}).then((function(e){e.json().then((function(e){"user with that email exists"===e.message?(B("Email already exists!"),w(!1)):"user created successfully"===e.message?(B("Success! Now Login"),w(!1)):"Password must be non-empty."===e.message&&(B("\u274c Password is empty!"),w(!0))}))}))},children:"Sign Up"}),!m&&Object(j.jsxs)("div",{className:u.a.link,children:[Object(j.jsx)("a",{href:"/crypto_website",children:"Forgot password?"})," or"," ",Object(j.jsx)("span",{onClick:function(e){v(!0)},children:"Sign Up"})]})]})})}var h=c(13),p=c.n(h),O=c(21),g=c(38),f=c(34),_=c.n(f),m=(c(30),c(9)),v=c.n(m),x=c(37),N=c(19),y=c.n(N);function w(e){var t=e.handleCloseCard,c=e.coins,a=e.selectedCoins,n=e.coinCount,s=[];return c.forEach((function(e){return a.forEach((function(t){e.name===t&&s.push({imageURL:e.image,name:e.name,price:e.current_price,price_change:e.price_change_percentage_24h})}))})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h3",{className:"Dashboard_subtitle",children:["My Dashboard"," ",8===n?Object(j.jsx)(x.a,{style:{color:"rgb(81, 202, 70)"}}):""]}),Object(j.jsx)("div",{className:"coinCards",children:Object(j.jsx)("div",{className:"section_our_solution",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12",children:Object(j.jsx)("div",{className:"our_solution_category",children:Object(j.jsx)("div",{className:"solution_cards_box",children:s.map((function(e){return Object(j.jsxs)("div",{className:"solution_card",children:[Object(j.jsx)("div",{className:"hover_color_bubble"}),Object(j.jsx)("div",{"data-value":e.name,onClick:t,children:Object(j.jsx)(y.a,{style:{float:"right",color:"rgb(230, 230, 230)",cursor:"pointer"}})}),Object(j.jsx)("div",{className:"so_top_icon",children:Object(j.jsx)("img",{src:e.imageURL,alt:""})}),Object(j.jsx)("div",{className:"solu_title",children:Object(j.jsx)("h3",{children:e.name})}),Object(j.jsxs)("div",{className:"solu_description",children:[Object(j.jsxs)("p",{children:[e.price," $"]}),Object(j.jsxs)("p",{style:e.price_change<0?{color:"red"}:{color:"green"},children:[e.price_change.toFixed(2)," %"]})]})]},e.name)}))})})})})})})]})}var S=c(36),k=c.n(S),C=c(11),B=c.n(C);var T=function(e){var t=e.placeholder,c=e.data,n=e.handleCoinSelection,s=e.showDropdown,o=e.toogleShowDropdown,r=e.toogleRepeated,l=Object(a.useState)([]),d=Object(i.a)(l,2),u=d[0],b=d[1],h=Object(a.useState)(""),p=Object(i.a)(h,2),O=p[0],g=p[1];return Object(j.jsxs)("div",{className:B.a.search,children:[Object(j.jsxs)("div",{className:B.a.searchInputs,children:[Object(j.jsx)("input",{type:"text",placeholder:t,value:O,onChange:function(e){var t=e.target.value;g(t);var a=c.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));b(""===t?[]:a),o(),r()}}),Object(j.jsx)("div",{className:B.a.searchIcon,children:0===u.length?Object(j.jsx)(k.a,{}):Object(j.jsx)(y.a,{id:"clearBtn",onClick:function(){b([]),g("")}})})]}),0!==u.length&&s&&Object(j.jsx)("div",{className:B.a.dataResult,children:u.map((function(e,t){return Object(j.jsx)("div",{"data-value":e.name,className:B.a.dataItem,onClick:n,children:Object(j.jsxs)("p",{"data-value":e.name,children:[e.name," "]})},e.name)}))})]})};var E=function(e){var t=e.id,c=e.token,n=e.firstTimeUser,s=e.dataBaseCoins,o=Object(a.useState)([]),r=Object(i.a)(o,2),d=r[0],u=r[1],b=Object(a.useState)("Select up to eigth coins"),h=Object(i.a)(b,2),f=h[0],m=h[1],x=Object(a.useState)(s),N=Object(i.a)(x,2),y=N[0],S=N[1],k=Object(a.useState)({}),C=Object(i.a)(k,2),B=C[0],E=C[1],D=Object(a.useState)(!0),I=Object(i.a)(D,2),A=I[0],U=I[1],J=Object(a.useState)(0+s.length),M=Object(i.a)(J,2),F=M[0],L=M[1],R=Object(a.useState)({visibility:"hidden",opacity:0}),H=Object(i.a)(R,2),P=H[0],z=H[1],K=!1,W=Object(l.f)();Object(a.useEffect)((function(){X(),V()}),[]);var V=function(){setTimeout((function(){E({visibility:"hidden",opacity:0,width:0,height:0}),z({visibility:"visible",opacity:1})}),4e3)},X=function(){var e=Object(O.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");case 2:t=e.sent,u(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(O.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!n){e.next=6;break}return e.next=4,fetch("https://todgerapp.herokuapp.com/todos",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({_id:t,coins:y})});case 4:e.next=8;break;case 6:console.log("updating coins... "),fetch("https://todgerapp.herokuapp.com/getone/".concat(t),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:c},body:JSON.stringify({coins:y})});case 8:W("/crypto_website"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[console.log(y),Object(j.jsx)("div",{className:v.a.loaderBg,style:B,children:Object(j.jsx)("div",{className:v.a.loader,children:Object(j.jsxs)("div",{className:v.a["spinner-box"],children:[Object(j.jsx)("div",{className:v.a["configure-border-1"],children:Object(j.jsx)("div",{className:v.a["configure-core"]})}),Object(j.jsx)("div",{className:v.a["configure-border-2"],children:Object(j.jsx)("div",{className:v.a["configure-core"]})})]})})}),Object(j.jsxs)("div",{style:P,children:[Object(j.jsx)("button",{onClick:Y,className:v.a.logout,children:"Log Out"}),Object(j.jsx)(T,{data:d,handleCoinSelection:function(e){var t=e.target.dataset.value;if(console.log(t),y.forEach((function(e){e===t&&(K=!0)})),K)U(!1);else{if(8===F)return U(!1),void m("Search here");S((function(e){return[].concat(Object(g.a)(e),[t])})),L(F+1)}},placeholder:f,showDropdown:A,toogleShowDropdown:function(){U(!0)},toogleRepeated:function(){K=!1}}),Object(j.jsx)("div",{className:"selectedCoins",children:Object(j.jsx)(w,{handleCloseCard:function(e){var t=e.currentTarget.attributes["data-value"].value,c=y.filter((function(e){return e!==t}));S(c),L(F-1)},coinCount:F,coins:d,selectedCoins:y})})]})]})};var D=function(){return Object(j.jsx)("div",{children:"OH OH! LOOKS LOKE YOU ARE LOST.."})};var I=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),o=Object(i.a)(s,2),d=o[0],u=o[1],h=Object(a.useState)([]),p=Object(i.a)(h,2),O=p[0],g=p[1],f=Object(a.useState)(""),_=Object(i.a)(f,2),m=_[0],v=_[1];return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(r.a,{children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/crypto_website",element:Object(j.jsx)(b,{getID:function(e){n(e)},getToken:function(e){v(e)},getFirstTimeUser:function(e){u(e)},getDataBaseCoins:function(e){g(e)}})}),Object(j.jsx)(l.a,{path:"/dashboard",element:Object(j.jsx)(E,{id:c,token:m,firstTimeUser:d,dataBaseCoins:O})}),Object(j.jsx)(l.a,{path:"*",element:Object(j.jsx)(D,{})})]})})})};c(69);o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))},9:function(e,t,c){e.exports={loaderBg:"dashboard_loaderBg__2bTyy",loader:"dashboard_loader__347SZ","configure-border-1":"dashboard_configure-border-1__2n16-","configure-clockwise":"dashboard_configure-clockwise__WW8wN","configure-border-2":"dashboard_configure-border-2__1Hcfs","configure-xclockwise":"dashboard_configure-xclockwise__1u8ng","configure-core":"dashboard_configure-core__3NnHm",logout:"dashboard_logout__3m7hb",glitch:"dashboard_glitch__3uhej",terminal:"dashboard_terminal__1FVKB"}}},[[71,1,2]]]);
//# sourceMappingURL=main.5329d5ba.chunk.js.map