"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{7075:function(r,e,n){n.d(e,{$u:function(){return p},BC:function(){return i},M1:function(){return l},Pg:function(){return o},tx:function(){return f}});var t=n(5861),a=n(7757),c=n.n(a),u=n(2388);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="b3a08fdd3c8f2c01f2754fee7d5e3f69",i=function(){var r=(0,t.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("/trending/movie/day",{params:{api_key:s}});case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",null);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(c().mark((function r(e){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("/search/movie",{params:{api_key:s,query:e}});case 3:return n=r.sent,r.abrupt("return",n.data.results);case 7:r.prev=7,r.t0=r.catch(0);case 9:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),o=function(){var r=(0,t.Z)(c().mark((function r(e){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("/movie/".concat(e),{params:{api_key:s}});case 3:return n=r.sent,r.abrupt("return",n.data);case 7:r.prev=7,r.t0=r.catch(0);case 9:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,t.Z)(c().mark((function r(e){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("/movie/".concat(e,"/credits"),{params:{api_key:s}});case 3:return n=r.sent,r.abrupt("return",n.data.cast);case 7:r.prev=7,r.t0=r.catch(0);case 9:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(c().mark((function r(e){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("/movie/".concat(e,"/reviews"),{params:{api_key:s,language:"en-US",page:1}});case 3:return n=r.sent,r.abrupt("return",n.data.results);case 7:r.prev=7,r.t0=r.catch(0);case 9:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},3387:function(r,e,n){n.r(e),n.d(e,{default:function(){return w}});var t,a,c,u,s,i=n(885),p=n(7075),o=n(2791),l=n(470),f=n(168),h=n(115),d=h.ZP.ul(t||(t=(0,f.Z)(["\n  list-style: none;\n"]))),v=h.ZP.li(a||(a=(0,f.Z)(["\n  display: flex;\n  :not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),m=h.ZP.img(c||(c=(0,f.Z)(["\n  width: 100px;\n  margin-right: 10px;\n"]))),x=h.ZP.div(u||(u=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n"]))),Z=h.ZP.h3(s||(s=(0,f.Z)(["\n  margin-right: 10px;\n"]))),g=n(184),w=function(){var r=(0,o.useState)(null),e=(0,i.Z)(r,2),n=e[0],t=e[1],a=(0,l.UO)().movieId;if((0,o.useEffect)((function(){(0,p.M1)(a).then(t)}),[a]),n)return(0,g.jsx)("div",{children:(0,g.jsx)(d,{children:n.map((function(r){return(0,g.jsxs)(v,{children:[(0,g.jsx)("div",{children:(0,g.jsx)(m,{src:"https://image.tmdb.org/t/p/w500"+r.profile_path,alt:r.name})}),(0,g.jsxs)("div",{children:[(0,g.jsxs)(x,{children:[(0,g.jsx)(Z,{children:"Actor:"}),(0,g.jsxs)("span",{children:[r.name,"."]})]}),(0,g.jsxs)(x,{children:[(0,g.jsx)(Z,{children:"\u0421haracter:"}),(0,g.jsxs)("span",{children:[r.character,"."]})]})]})]},r.id)}))})})}}}]);
//# sourceMappingURL=387.cf7c9825.chunk.js.map