(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{113:function(e,t,r){"use strict";r.r(t);var n=r(57),a=r.n(n),s=r(58),c=r(52),i=r(53),o=r(56),u=r(55),h=r(0),v=r(54),p=r(114),l=r.n(p),w=r(1),f=function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={reviews:[]},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.next=3,v.a.fetchReview(t);case 3:r=e.sent,this.setState({reviews:r});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.reviews;return e.length>0?Object(w.jsx)("ul",{className:l.a.reviews,children:e.map((function(e){var t=e.id,r=e.author,n=e.content;return Object(w.jsxs)("li",{children:[Object(w.jsx)("h4",{children:"Author: ".concat(r)}),Object(w.jsx)("p",{children:n})]},t)}))}):Object(w.jsx)("p",{className:l.a.reviews,children:"We don't have any rewiews for this movie"})}}]),r}(h.Component);t.default=f},114:function(e,t,r){e.exports={reviews:"Reviews_reviews__2sDKv"}}}]);
//# sourceMappingURL=Reviews.ff520c39.chunk.js.map