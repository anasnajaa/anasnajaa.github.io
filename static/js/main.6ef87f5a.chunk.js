(this["webpackJsonpmain-blog-front"]=this["webpackJsonpmain-blog-front"]||[]).push([[0],{65:function(e,a,t){e.exports=t(85)},70:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),s=t(23),o=t(6),i=t(56);t(70);var m=function(){var e=Object(o.m)().slug;return r.a.createElement("div",null,r.a.createElement("h3",null,e))},u=t(9),d=t.n(u),E=t(20),p=t(52),g=t(53),f=t(61),b=t(60),h="9c8569eb29d07e9f4b3819310d",v="https://hecked-blog.herokuapp.com";function k(e,a){return x.apply(this,arguments)}function x(){return(x=Object(E.a)(d.a.mark((function e(a,t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(v,"/ghost/api/v3/content/posts/?key=").concat(h,"&")+"fields=id,title,slug,custom_excerpt,reading_time,feature_image,"+"created_at,updated_at,published_at,meta&include=tags&limit=".concat(a,"&page=").concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var C=t(102),N=t(91),y=t(99),P=function(e,a,t,n){return e===a?r.a.createElement(C.a.Item,{disabled:n,key:Object(y.a)(),active:!0},n?r.a.createElement(N.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):a):"..."===a?r.a.createElement(C.a.Ellipsis,{disabled:!0,key:Object(y.a)()}):r.a.createElement(C.a.Item,{disabled:n,onClick:function(){t(a)},key:Object(y.a)()},a)},L=function(e){var a=e.pg,t=e.isLoading,n=e.onNextClick,l=e.onPreviousClick,c=e.onPageClick;return r.a.createElement(C.a,{size:"sm"},a&&a.pages&&a.pages>0?r.a.createElement(r.a.Fragment,null,1===a.pages?r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a.Prev,{disabled:!0}),r.a.createElement(C.a.Item,{disabled:!0},"1"),r.a.createElement(C.a.Next,{disabled:!0})):r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a.Prev,{disabled:t||1===a.page,onClick:function(){l()}}),function(e,a,t){for(var n,r=e.page,l=e.pages,c=r-1,s=r+1+1,o=[],i=[],m=1;m<=l;m+=1)if(1===m||m===l||m>=c&&m<=s)o.push(m);else if(m<c)m=c-1;else if(m>s){o.push(l);break}return o.forEach((function(e){n&&(e-n===2?i.push(P(r,n+1,a,t)):e-n!==1&&i.push(P(r,"...",a,t))),i.push(P(r,e,a,t)),n=e})),i}(a,c,t),r.a.createElement(C.a.Next,{disabled:t||a.pages===a.page,onClick:function(){n()}}))):r.a.createElement(r.a.Fragment,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a.Item,{disabled:!0},r.a.createElement(N.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a.Prev,{disabled:!0}),r.a.createElement(C.a.Item,{disabled:!0},"None"),r.a.createElement(C.a.Next,{disabled:!0}))))},j=t(101),w=t(98),F=t(92),I=t(93),O=t(44),_=t.n(O),D=function(e){return"5f86bc611488fc001eea51ae"===e?{backgroundColor:"",color:"#16063A"}:"5f8a7e4a11e139001eb1d5d2"===e?{backgroundColor:"",color:"#2A0238"}:"5f7f519ecbab9f001ede0c9b"===e?{backgroundColor:"",color:"#4F5400"}:"5f8a7f6d11e139001eb1d5d6"===e?{backgroundColor:"",color:"003925"}:void 0},A=t(21),B=function(e){var a=e.post;return r.a.createElement(j.a,{className:"mb-2"},r.a.createElement(j.a.Img,{variant:"top",src:a.feature_image}),r.a.createElement(j.a.Body,{className:"pb-0"},r.a.createElement(j.a.Title,null,a.title),r.a.createElement(j.a.Subtitle,{className:"mb-2 text-muted"},r.a.createElement(w.a,{placement:"top",overlay:r.a.createElement(F.a,null,r.a.createElement(_.a,{date:a.published_at,format:"DD/MM/YYYY hh:mm A"}))},r.a.createElement(_.a,{date:a.published_at,fromNow:!0}))),r.a.createElement(j.a.Text,null,a.custom_excerpt)),a.tags.length>0?r.a.createElement("div",{style:{paddingLeft:"1.25rem"},className:"pb-2"},r.a.createElement("small",{className:"text-muted"},a.tags.map((function(e){var a=e.name,t=e.slug,n=e.id;return r.a.createElement(A.LinkContainer,{key:n,to:"/blog/topic/".concat(t)},r.a.createElement(I.a,{className:"mr-2 cursor-pointer",style:D(n)},a))})))):r.a.createElement(r.a.Fragment,null))},S=t(94),z=t(95),Y=function(){return r.a.createElement("span",null,r.a.createElement(N.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",className:"mr-2"}),"Loading, please wait...")},H=function(e){Object(f.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(p.a)(this,t),(n=a.call(this,e)).state={error:null,isLoaded:!1,posts:[],pagination:null,currentPage:1},n}return Object(g.a)(t,[{key:"getBlogPosts",value:function(){var e=Object(E.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(5,this.state.currentPage);case 3:a=e.sent,console.log(a),this.setState({error:null,isLoaded:!0,posts:a.posts,pagination:a.meta.pagination}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),this.setState({error:e.t0,isLoaded:!0});case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"updateCurrentPage",value:function(e){var a=this;this.setState({currentPage:e,isLoaded:!1},(function(){a.getBlogPosts()}))}},{key:"componentDidMount",value:function(){this.getBlogPosts()}},{key:"render",value:function(){var e=this;return this.state.error?r.a.createElement("div",null,"Error: ",this.state.error.message):this.state.isLoaded?r.a.createElement(S.a,null,this.state.posts.map((function(e){return r.a.createElement(z.a,{key:e.id,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(B,{post:e}))})),r.a.createElement(z.a,{xs:12,sm:12,md:4,lg:4,xl:4}),r.a.createElement(z.a,{className:"text-center",xs:12,sm:12,md:4,lg:4,xl:4},r.a.createElement(L,{pg:this.state.pagination,onNextClick:function(){e.updateCurrentPage(e.state.currentPage+1)},onPreviousClick:function(){e.updateCurrentPage(e.state.currentPage-1)},onPageClick:function(a){e.updateCurrentPage(a)},isLoading:!this.state.isLoaded})),r.a.createElement(z.a,{xs:12,sm:12,md:4,lg:4,xl:4})):r.a.createElement(S.a,null,r.a.createElement(z.a,{className:"text-center"},r.a.createElement(Y,null)))}}]),t}(r.a.Component);var M=function(){var e=Object(o.n)().path;return r.a.createElement("div",null,r.a.createElement(o.g,null,r.a.createElement(o.d,{exact:!0,path:e},r.a.createElement(i.a,null,r.a.createElement(S.a,null,r.a.createElement(z.a,{xs:12,sm:12,md:12,lg:2,xl:2}),r.a.createElement(z.a,{xs:12,sm:12,md:12,lg:8,xl:8},r.a.createElement(H,null)),r.a.createElement(z.a,{xs:12,sm:12,md:12,lg:2,xl:2})))),r.a.createElement(o.d,{path:"".concat(e,"/post/:slug")},r.a.createElement(m,null))))},T=function(){return r.a.createElement("span",null,"Under Construction.")},J=t(96),K=t(27),R=t(39),U=t(57),q=function(){return r.a.createElement(J.a,null,r.a.createElement("h1",null,"Hi, I'm Anas Najaa."),r.a.createElement("p",null,"I'm a software developer based in Kuwait.",r.a.createElement("br",null),"I'm currently interested in building simple to use APIs and SPAs.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{style:{textDecoration:"none",color:"#1DA1F2"},className:"h4",href:"https://twitter.com/spidernet12"},r.a.createElement(K.a,{icon:R.c})),r.a.createElement("span",null,"\xa0\xa0"),r.a.createElement("a",{style:{textDecoration:"none",color:"#2867B2"},className:"h4",href:"https://www.linkedin.com/in/anasnajaa"},r.a.createElement(K.a,{icon:R.b})),r.a.createElement("span",null,"\xa0\xa0"),r.a.createElement("a",{style:{textDecoration:"none",color:"#24292e"},className:"h4",href:"https://github.com/anasnajaa"},r.a.createElement(K.a,{icon:R.a})),r.a.createElement("span",null,"\xa0\xa0"),r.a.createElement("a",{style:{textDecoration:"none",color:"#D44638"},className:"h4",href:"mailto:anas.najaa@outlook.com"},r.a.createElement(K.a,{icon:U.a}))))},G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"404 Error"),r.a.createElement("span",null,"Page Not Found"))},Q=t(100),V=t(97),W=function(){return r.a.createElement(Q.a,{bg:"light",expand:"lg"},r.a.createElement(A.LinkContainer,{to:"/"},r.a.createElement(Q.a.Brand,null,"Anas Najaa")),r.a.createElement(Q.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(Q.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(V.a,{className:"mr-auto"},r.a.createElement(A.LinkContainer,{to:"/"},r.a.createElement(V.a.Link,null,"Home")),r.a.createElement(A.LinkContainer,{to:"/blog"},r.a.createElement(V.a.Link,null,"Blog")),r.a.createElement(A.LinkContainer,{to:"/portfolio"},r.a.createElement(V.a.Link,null,"Portfolio")))))},X=function(){return r.a.createElement(s.HashRouter,null,r.a.createElement(W,null),r.a.createElement(i.a,{className:"p-3"},r.a.createElement(o.g,null,r.a.createElement(o.d,{exact:!0,path:"/"},r.a.createElement(q,null)),r.a.createElement(o.d,{path:"/blog"},r.a.createElement(M,null)),r.a.createElement(o.d,{path:"/portfolio"},r.a.createElement(T,null)),r.a.createElement(o.d,{path:"*"},r.a.createElement(G,null)))))};c.a.render(r.a.createElement(X,null),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.6ef87f5a.chunk.js.map