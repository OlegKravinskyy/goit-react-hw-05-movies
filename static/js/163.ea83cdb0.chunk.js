"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[163],{7075:function(n,e,r){r.d(e,{$u:function(){return u},BC:function(){return o},M1:function(){return d},Pg:function(){return l},tx:function(){return p}});var t=r(5861),a=r(7757),i=r.n(a),c=r(2388);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="b3a08fdd3c8f2c01f2754fee7d5e3f69",o=function(){var n=(0,t.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/trending/movie/day",{params:{api_key:s}});case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",null);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/search/movie",{params:{api_key:s,query:e}});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/movie/".concat(e),{params:{api_key:s}});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/movie/".concat(e,"/credits"),{params:{api_key:s}});case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/movie/".concat(e,"/reviews"),{params:{api_key:s,language:"en-US",page:1}});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},3862:function(n,e,r){r.d(e,{MA:function(){return h},W6:function(){return f},XC:function(){return x},eW:function(){return v},px:function(){return p},v2:function(){return m}});var t,a,i,c,s,o,u=r(168),l=r(6731),d=r(115),p=d.ZP.div(t||(t=(0,u.Z)(["\n  padding: 15px;\n"]))),h=d.ZP.input(a||(a=(0,u.Z)(["\n  margin-right: 20px;\n"]))),f=d.ZP.button(i||(i=(0,u.Z)(["\n  cursor: pointer;\n  :hover {\n    background-color: darkgrey;\n  }\n"]))),v=d.ZP.ul(c||(c=(0,u.Z)(["\n  list-style: none;\n"]))),x=d.ZP.li(s||(s=(0,u.Z)(["\n  :not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),m=(0,d.ZP)(l.OL)(o||(o=(0,u.Z)(["\n  text-decoration: none;\n  color: black;\n  :hover {\n    background-color: darkgrey;\n    color: white;\n  }\n"])))},6163:function(n,e,r){r.r(e),r.d(e,{default:function(){return U}});var t,a,i,c,s,o,u,l,d,p=r(885),h=r(7075),f=r(3862),v=r(2791),x=r(470),m=r(168),Z=r(6731),g=r(115),b=g.ZP.div(t||(t=(0,m.Z)(["\n  border-bottom: 2px solid black;\n"]))),k=(0,g.ZP)(Z.OL)(a||(a=(0,m.Z)(["\n  display: block;\n  border: 1px solid transparency;\n  width: 80px;\n  text-align: center;\n  text-decoration: none;\n  color: black;\n  margin: 30px;\n  cursor: pointer;\n  :hover {\n    background-color: darkgrey;\n  }\n"]))),j=g.ZP.div(i||(i=(0,m.Z)(["\n  display: flex;\n  border-bottom: 2px solid black;\n"]))),w=g.ZP.div(c||(c=(0,m.Z)(["\n  padding: 15px;\n"]))),y=g.ZP.ul(s||(s=(0,m.Z)(["\n  list-style: none;\n"]))),P=g.ZP.ul(o||(o=(0,m.Z)(["\n  list-style: none;\n  margin-left: -40px;\n"]))),_=g.ZP.div(u||(u=(0,m.Z)(["\n  padding: 15px;\n  border-bottom: 2px solid black;\n"]))),C=g.ZP.ul(l||(l=(0,m.Z)(["\n  list-style: none;\n"]))),O=g.ZP.li(d||(d=(0,m.Z)(["\n  :not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),S=r(184),U=function(){var n,e,r=(0,x.UO)().movieId,t=(0,v.useState)(null),a=(0,p.Z)(t,2),i=a[0],c=a[1],s=(0,v.useState)(null),o=(0,p.Z)(s,2),u=o[0],l=o[1],d=(0,x.TH)(),m=null!==(n=null===(e=(0,v.useRef)(d).current.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";if((0,v.useEffect)((function(){(0,h.Pg)(r).then(c).catch((function(n){l(n.message)}))}),[r]),i){var Z=i.genres;return(0,S.jsxs)(b,{children:[(0,S.jsx)(k,{to:m,children:"Back"}),u&&(0,S.jsx)("h1",{children:"There is no detailed information about the film!!!"}),i&&(0,S.jsxs)(w,{children:[(0,S.jsxs)(j,{children:[(0,S.jsx)("div",{children:(0,S.jsx)("img",{src:"https://image.tmdb.org/t/p/w342"+i.poster_path,alt:i.title||i.name})}),(0,S.jsx)("div",{children:(0,S.jsxs)(y,{children:[(0,S.jsxs)("li",{children:[(0,S.jsxs)("h2",{children:[i.title||i.name," "]}),(0,S.jsxs)("p",{children:["User score ",(10*i.vote_average).toFixed()," %"]})]}),(0,S.jsxs)("li",{children:[(0,S.jsx)("h2",{children:"Overview"}),(0,S.jsx)("p",{children:i.overview})]}),(0,S.jsxs)("li",{children:[(0,S.jsx)("h2",{children:"Genres"}),(0,S.jsx)(P,{children:Z.map((function(n){return(0,S.jsx)("li",{children:n.name},n.id)}))})]})]})})]}),(0,S.jsxs)(_,{children:[(0,S.jsx)("h3",{children:"Additional information"}),(0,S.jsxs)(C,{children:[(0,S.jsx)(O,{children:(0,S.jsx)(f.v2,{to:"cast",children:"Cast"})}),(0,S.jsx)(O,{children:(0,S.jsx)(f.v2,{to:"reviews",children:"Reviews"})})]})]})]}),(0,S.jsx)(v.Suspense,{fallback:null,children:(0,S.jsx)(x.j3,{})})]})}}}}]);
//# sourceMappingURL=163.ea83cdb0.chunk.js.map