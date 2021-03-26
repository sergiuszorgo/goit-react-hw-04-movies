(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{110:function(e,t,n){e.exports={container:"MovieDetailsPage_container__2O0lt",module:"MovieDetailsPage_module__BMCFE",buttonBack:"MovieDetailsPage_buttonBack__2wfS-",moviTitle:"MovieDetailsPage_moviTitle__3zi2i",addLink:"MovieDetailsPage_addLink__edXnj",poster:"MovieDetailsPage_poster__2bVPE",overview:"MovieDetailsPage_overview__2cNET"}},116:function(e,t,n){"use strict";n.r(t);var a=n(57),c=n.n(a),r=n(61),i=n(58),o=n(52),s=n(53),l=n(56),u=n(55),d=n(0),h=n(10),j=n(3),p=n(54),b=n(72),v=n(16),f=n.n(v),O=n(110),m=n.n(O),g=n(11),_=n(1),x=Object(d.lazy)((function(){return n.e(1).then(n.bind(null,111))})),y=Object(d.lazy)((function(){return n.e(5).then(n.bind(null,113))})),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={genres:null,overview:null,poster_path:null,title:null,vote_average:null},e.hendleGoBack=function(){var t,n=e.props,a=n.location;n.history.push((null===a||void 0===a||null===(t=a.state)||void 0===t?void 0:t.from)||g.a.homePage)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.next=3,p.a.fetchMovieId(t);case 3:n=e.sent,this.setState(Object(r.a)({},n));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.title,n=e.vote_average,a=e.overview,c=e.genres,r=e.poster_path,i="https://image.tmdb.org/t/p/w500".concat(r),o=this.props,s=o.match,l=o.location;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{className:m.a.container,children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("button",{type:"button",onClick:this.hendleGoBack,className:m.a.buttonBack,children:"Go back"}),Object(_.jsx)("img",{src:"".concat(r?i:b.a),alt:t,className:m.a.poster})]}),Object(_.jsxs)("div",{className:m.a.overview,children:[Object(_.jsx)("h2",{className:m.a.moviTitle,children:t}),Object(_.jsxs)("p",{children:["User Score: ","".concat(10*n,"%")]}),Object(_.jsx)("h4",{children:"Overview"}),Object(_.jsx)("p",{children:a}),c&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h4",{children:"Genres"}),Object(_.jsx)("ul",{children:c.map((function(e){return Object(_.jsx)("li",{children:e.name},e.id)}))})]})]})]}),Object(_.jsxs)("div",{className:m.a.module,children:[Object(_.jsx)("h4",{children:"Additional information"}),Object(_.jsxs)("ul",{children:[Object(_.jsx)("li",{children:Object(_.jsx)(h.c,{to:{pathname:"".concat(s.url,"/cast"),state:{from:l}},className:m.a.addLink,children:"Cast"})}),Object(_.jsx)("li",{children:Object(_.jsx)(h.c,{to:{pathname:"".concat(s.url,"/reviews"),state:{from:l}},className:m.a.addLink,children:"Reviews"})})]})]}),Object(_.jsx)(d.Suspense,{fallback:Object(_.jsx)(f.a,{className:"loader",type:"Bars",color:"#00BFFF",height:100,width:100}),children:Object(_.jsxs)(j.d,{children:[Object(_.jsx)(j.b,{path:"".concat(s.path,"/cast"),component:x}),Object(_.jsx)(j.b,{path:"".concat(s.path,"/reviews"),component:y})]})})]})}}]),n}(d.Component);t.default=w},54:function(e,t,n){"use strict";var a=n(60),c=n.n(a);c.a.defaults.baseURL="https://api.themoviedb.org/3";var r="f5571a4d0dffe86480c58c41c5dbcd23";t.a={fetchTrending:function(){return c.a.get("/trending/movie/day?api_key=".concat(r)).then((function(e){return e.data.results}))},fetchMovie:function(e){return c.a.get("/search/movie?api_key=".concat(r,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.data}))},fetchMovieId:function(e){return c.a.get("/movie/".concat(e,"?api_key=").concat(r,"&language=en-US")).then((function(e){return e.data}))},fetchCast:function(e){return c.a.get("/movie/".concat(e,"/credits?api_key=").concat(r,"&language=en-US")).then((function(e){return e.data.cast}))},fetchReview:function(e){return c.a.get("/movie/".concat(e,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(e){return e.data.results}))}}},59:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(59);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},72:function(e,t,n){"use strict";t.a=n.p+"static/media/defaultImg.24904811.jpg"}}]);
//# sourceMappingURL=MovieDetailsPage.1487ab4b.chunk.js.map