(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(7),a=n.n(r),i=n(2),s=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],o=r[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),a.trim().length>2&&(t((function(e){return[a].concat(Object(s.a)(e))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:a,onChange:function(e){o(e.target.value)}})})},j=n(10),b=n(6),d=n.n(b),l=n(8),p=function(){var e=Object(l.a)(d.a.mark((function e(t){var n,c,r,a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=rHaImpUmIhTqOZ83l5yBhIvSgnCh5fRK"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,a=r.data,i=a.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__fadeIn",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsxs)("p",{children:[" ",t," "]})]})},O=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){p(e).then((function(e){setTimeout((function(){a({data:e,loading:!1})}),2500)}))}),[e]),r}(t),r=n.data,a=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__bounce",children:t}),a&&Object(u.jsx)("p",{className:"animate__bounceIn",children:"Loading..."}),Object(u.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(u.jsx)(f,Object(j.a)({},e),e.id)}))}),Object(u.jsx)("br",{})]})},h=function(){var e=Object(c.useState)(["One Punch Man"]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:r}),Object(u.jsx)("br",{}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(O,{category:e},e)}))})]})},m=(n(17),document.querySelector("#root"));a.a.render(Object(u.jsx)(h,{}),m)}},[[18,1,2]]]);
//# sourceMappingURL=main.03c60636.chunk.js.map