"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{7075:function(e,r,t){t.d(r,{$u:function(){return o},BC:function(){return i},M1:function(){return f},Pg:function(){return p},tx:function(){return v}});var n=t(5861),a=t(7757),u=t.n(a),c=t(2388);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="b3a08fdd3c8f2c01f2754fee7d5e3f69",i=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/trending/movie/day",{params:{api_key:s}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/search/movie",{params:{api_key:s,query:r}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(r),{params:{api_key:s}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(r,"/credits"),{params:{api_key:s}});case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(r,"/reviews"),{params:{api_key:s,language:"en-US",page:1}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},9779:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var n,a=t(885),u=t(7075),c=t(2791),s=t(470),i=t(168),o=t(115).ZP.ul(n||(n=(0,i.Z)(["\n  list-style: none;\n"]))),p=t(184),f=function(){var e=(0,c.useState)(null),r=(0,a.Z)(e,2),t=r[0],n=r[1],i=(0,s.UO)().movieId;return(0,c.useEffect)((function(){(0,u.tx)(i).then(n)}),[i]),t&&t.length>0?(0,p.jsx)("div",{children:(0,p.jsx)(o,{children:t.map((function(e){return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h3",{children:["Author: ",e.author]}),(0,p.jsx)("span",{children:e.content})]},e.id)}))})}):"This movie don't have reviews"}}}]);
//# sourceMappingURL=779.523ec207.chunk.js.map