(this["webpackJsonpanasnajaa.github.io"]=this["webpackJsonpanasnajaa.github.io"]||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),s=a(26),o=a(10),u=a(75),i=(a(89),a(7)),m=a.n(i),p=a(8),E=a(6),d="https://hecked-blog.herokuapp.com/ghost/api/v3/content",f="key=".concat("9c8569eb29d07e9f4b3819310d"),b="Data retrival failed for endpoint:",h=function(){var e=Object(p.a)(m.a.mark((function e(t,a,n){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/posts/?").concat(f,"&")+"fields=id,title,slug,custom_excerpt,reading_time,feature_image,"+"created_at,updated_at,published_at,meta&include=tags&limit=".concat(t,"&page=").concat(a,"&")+"".concat(n?"filter=tag:".concat(n):""));case 2:if(!(r=e.sent).ok){e.next=9;break}return e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 9:throw Error("".concat(b," getPosts"));case 10:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/posts/?").concat(f,"&")+"fields=id,title,slug,published_at,tags.id&limit=all");case 2:if(!(t=e.sent).ok){e.next=9;break}return e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:throw Error("".concat(b," getArchivePosts"));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/posts/slug/").concat(t,"/?").concat(f,"&include=tags&")+"fields=id,title,slug,html,reading_time,feature_image,created_at,updated_at,published_at");case 2:if(!(a=e.sent).ok){e.next=10;break}return e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n.posts[0]);case 10:throw Error("".concat(b," getPostBySlug"));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/tags/?").concat(f,"&")+"&include=count.posts&limit=all&filter=visibility:public");case 2:if(!(t=e.sent).ok){e.next=9;break}return e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:throw Error("".concat(b," getTags"));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/pages/?").concat(f,"&")+"fields=id,title,html,feature_image,"+"updated_at,published_at&limit=all&filter=tag:".concat(t,"&filter=visibility:internal"));case 2:if(!(a=e.sent).ok){e.next=9;break}return e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 9:throw Error("".concat(b," getPageData"));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/pages/slug/").concat(t,"/?").concat(f,"&")+"fields=id,title,html,feature_image,created_at,updated_at,published_at");case 2:if(!(a=e.sent).ok){e.next=10;break}return e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n.pages[0]);case 10:throw Error("".concat(b," getPageBySlug"));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=a(126),O=a(111),y=a(121),N=function(e,t,a,n){return e===t?r.a.createElement(w.a.Item,{disabled:n,key:Object(y.a)(),active:!0},n?r.a.createElement(O.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):t):"..."===t?r.a.createElement(w.a.Ellipsis,{disabled:!0,key:Object(y.a)()}):r.a.createElement(w.a.Item,{disabled:n,onClick:function(){a(t)},key:Object(y.a)()},t)},S=function(e){var t=e.pg,a=e.isLoading,n=e.onNextClick,l=e.onPreviousClick,c=e.onPageClick;return r.a.createElement(w.a,{size:"sm"},t&&t.pages&&t.pages>0?r.a.createElement(r.a.Fragment,null,1===t.pages?r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a.Prev,{disabled:!0}),r.a.createElement(w.a.Item,{disabled:!0},"1"),r.a.createElement(w.a.Next,{disabled:!0})):r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a.Prev,{disabled:a||1===t.page,onClick:function(){l()}}),function(e,t,a){for(var n,r=e.page,l=e.pages,c=r-1,s=r+1+1,o=[],u=[],i=1;i<=l;i+=1)if(1===i||i===l||i>=c&&i<=s)o.push(i);else if(i<c)i=c-1;else if(i>s){o.push(l);break}return o.forEach((function(e){n&&(e-n===2?u.push(N(r,n+1,t,a)):e-n!==1&&u.push(N(r,"...",t,a))),u.push(N(r,e,t,a)),n=e})),u}(t,c,a),r.a.createElement(w.a.Next,{disabled:a||t.pages===t.page,onClick:function(){n()}}))):r.a.createElement(r.a.Fragment,null,a?r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a.Item,{disabled:!0},r.a.createElement(O.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a.Prev,{disabled:!0}),r.a.createElement(w.a.Item,{disabled:!0},"None"),r.a.createElement(w.a.Next,{disabled:!0}))))},C=a(127),_=a(122),L=a(113),I=a(31),P=a.n(I),A=a(13),F=a(112),T=function(e){return"5f86bc611488fc001eea51ae"===e?{backgroundColor:"red",color:"white"}:"5f8a7e4a11e139001eb1d5d2"===e?{backgroundColor:"blue",color:"white"}:"5f7f519ecbab9f001ede0c9b"===e?{backgroundColor:"green",color:"white"}:"5f8a7f6d11e139001eb1d5d6"===e?{backgroundColor:"purple",color:"white"}:void 0},M=function(e){var t=e.tags;return r.a.createElement(r.a.Fragment,null,t.length>0?r.a.createElement("small",{className:"text-muted pb-2",style:{marginLeft:"1.25rem"}},t.map((function(e){var t=e.name,a=e.slug,n=e.id;return r.a.createElement(A.LinkContainer,{style:T(n),key:n,to:"/blog/topics/".concat(a)},r.a.createElement(F.a,{className:"mr-2 p-1 cursor-pointer"},t))}))):r.a.createElement(r.a.Fragment,null))},D=function(e){var t=e.post;return r.a.createElement(C.a,{className:"mb-2"},r.a.createElement(A.LinkContainer,{className:"cursor-pointer",to:"/blog/posts/".concat(t.slug)},r.a.createElement(C.a.Img,{variant:"top",src:t.feature_image})),r.a.createElement(A.LinkContainer,{className:"cursor-pointer",to:"/blog/posts/".concat(t.slug)},r.a.createElement(C.a.Body,{className:"pb-0"},r.a.createElement(C.a.Title,null,t.title),r.a.createElement(C.a.Subtitle,{className:"mb-2 text-muted"},r.a.createElement(_.a,{placement:"top",overlay:r.a.createElement(L.a,null,r.a.createElement(P.a,{date:t.published_at,format:"DD/MM/YYYY hh:mm A"}))},r.a.createElement(P.a,{date:t.published_at,fromNow:!0}))),r.a.createElement(C.a.Text,null,t.custom_excerpt))),r.a.createElement(M,{tags:t.tags}))},B=a(115),H=a(73),G=function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),s=Object(E.a)(c,2),o=s[0],u=s[1];return setTimeout((function(){a&&u(!0)}),1200),Object(n.useEffect)((function(){return function(){l(!1)}}),[]),r.a.createElement("span",null,r.a.createElement(O.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",className:"mr-2"}),"Loading, please wait...",o&&r.a.createElement("div",null,r.a.createElement("br",null),"Server is starting up from cold boot, this might take a while..."))},q=a(72),Y=a.n(q),W=a(114),R=function(e){var t=e.title,a=e.message,n=e.type;return r.a.createElement(W.a,{variant:n,dismissible:!0},r.a.createElement(W.a.Heading,null,t),r.a.createElement("p",null,a))},z=function(e){var t=Y.a.parse(e.location.search,{ignoreQueryPrefix:!0});return{p:t.p?parseInt(t.p):null}},K=Object(o.o)((function(e){var t=e.topic,a=e.history,l=Object(n.useState)(null),c=Object(E.a)(l,2),s=c[0],o=c[1],u=Object(n.useState)(null),i=Object(E.a)(u,2),d=i[0],f=i[1],b=Object(n.useState)(!1),g=Object(E.a)(b,2),v=g[0],x=g[1],j=Object(n.useState)([]),k=Object(E.a)(j,2),w=k[0],O=k[1],y=Object(n.useState)(null),N=Object(E.a)(y,2),C=N[0],_=N[1],L=Object(n.useState)(z(a).p||1),I=Object(E.a)(L,2),P=I[0],A=I[1],F=function(e){var a="";return a=t?"/blog/topics/".concat(t):"/blog","".concat(a,"?p=").concat(e)},T=function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(5,t||1,a);case 3:n=e.sent,f(null),O(n.posts),_(n.meta.pagination),a&&(r=n.posts[0].tags.filter((function(e){return e.slug===a}))[0].name,o(r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),f(e.t0);case 13:return e.prev=13,x(!0),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(t,a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return a.listen((function(){var e,t=z(a);e=t.p,A(e),x(!1)}))}),[]),Object(n.useEffect)((function(){T(P,t)}),[P,t]),d?r.a.createElement(B.a,null,r.a.createElement(H.a,{className:"text-center"},r.a.createElement(R,{title:"API Error",message:d.message,type:"danger"}))):v?r.a.createElement(B.a,null,t&&r.a.createElement(H.a,{xs:12},r.a.createElement("h3",null,r.a.createElement("i",null,s))),w.map((function(e){return r.a.createElement(H.a,{key:e.id,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(D,{post:e}))})),r.a.createElement(H.a,{xs:12,sm:12,md:4,lg:4,xl:4}),r.a.createElement(H.a,{className:"text-center",xs:12,sm:12,md:4,lg:4,xl:4},r.a.createElement(S,{pg:C,onNextClick:function(){a.push(F(P+1))},onPreviousClick:function(){a.push(F(P-1))},onPageClick:function(e){a.push(F(e))},isLoading:!v})),r.a.createElement(H.a,{xs:12,sm:12,md:4,lg:4,xl:4})):r.a.createElement(B.a,null,t&&r.a.createElement(H.a,{xs:12},r.a.createElement("h3",null,r.a.createElement("i",null,s))),r.a.createElement(H.a,{className:"text-center"},r.a.createElement(G,null)))})),Q=a(120),J=a(116),U=a(63),V=a.n(U),X=function(){var e=Object(n.useState)(null),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),s=Object(E.a)(c,2),o=s[0],u=s[1],i=Object(n.useState)([]),d=Object(E.a)(i,2),f=d[0],b=d[1],h=Object(n.useState)([]),v=Object(E.a)(h,2),x=v[0],j=v[1],k=Object(n.useState)(""),w=Object(E.a)(k,2),O=w[0],N=w[1],S=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g();case 3:return t=e.sent,l(null),b(t.posts),e.abrupt("return",t.posts);case 9:e.prev=9,e.t0=e.catch(0),l(e.t0);case 12:return e.prev=12,u(!0),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=null,t=null,a=[];f.forEach((function(n){var l,c,s=new V.a(n.published_at),o=s.month(),u=s.year();-1!==n.title.toLowerCase().indexOf(O.toLowerCase())&&(o===e&&u===t||(e=o,t=u,a.push((l=t,c=s.format("MMMM"),r.a.createElement("tr",{className:"bg-secondary text-white",key:Object(y.a)()},r.a.createElement("td",{colSpan:"3"},r.a.createElement("strong",null,l,"-",c)))))),a.push(function(e){var t=e.id,a=e.published_at,n=e.slug,l=e.title;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement(P.a,{date:a,format:"DD"})),r.a.createElement("td",null,r.a.createElement(A.LinkContainer,{className:"cursor-pointer",key:Object(y.a)(),to:"/blog/posts/".concat(n)},r.a.createElement("span",null,l))))}(n)))})),j([].concat(a))};return Object(n.useEffect)((function(){S()}),[]),Object(n.useEffect)((function(){C()}),[f,O]),a?r.a.createElement(B.a,null,r.a.createElement(H.a,{className:"text-center"},r.a.createElement(R,{title:"API Error",message:a.message,type:"danger"}))):o?r.a.createElement(B.a,null,r.a.createElement(H.a,{xs:12},r.a.createElement(Q.a,null,r.a.createElement(Q.a.Group,{controlId:"formBasicEmail"},r.a.createElement(Q.a.Control,{type:"text",placeholder:"Filter by Title",value:O,onChange:function(e){N(e.target.value)}})))),r.a.createElement(H.a,{xs:12},r.a.createElement(J.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("tbody",null,x)))):r.a.createElement(B.a,null,r.a.createElement(H.a,{className:"text-center"},r.a.createElement(G,null)))},Z=a(128),$=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),s=Object(E.a)(c,2),o=s[0],u=s[1],i=Object(n.useState)(null),d=Object(E.a)(i,2),f=d[0],b=d[1],h=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:t=e.sent,l(t.tags),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),b(e.t0);case 10:return e.prev=10,u(!0),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){h()}),[]),f?r.a.createElement(B.a,null,r.a.createElement(H.a,null,"Error: ",f.message)):o?r.a.createElement(B.a,null,r.a.createElement(H.a,null,r.a.createElement(Z.a,null,a.map((function(e){var t=e.id,a=e.description,n=e.name,l=e.slug,c=e.count;return r.a.createElement(A.LinkContainer,{className:"cursor-pointer",key:t,to:"/blog/topics/".concat(l)},r.a.createElement(Z.a.Item,null,n,"\xa0\xa0",r.a.createElement(F.a,{variant:"light"},c.posts),r.a.createElement("br",null),r.a.createElement("small",null,a)))}))))):r.a.createElement(B.a,null,r.a.createElement(H.a,{className:"text-center"},r.a.createElement(G,null)))},ee=a(125),te=a(54),ae=function(){var e=Object(te.useMediaQuery)({query:"(max-width: 1224px)"});return r.a.createElement(B.a,null,r.a.createElement(H.a,{xs:12,className:"mb-3"},r.a.createElement(ee.a,{className:e?"":"flex-column"},r.a.createElement(ee.a.Item,null,r.a.createElement(A.IndexLinkContainer,{to:"/blog"},r.a.createElement(ee.a.Link,null,"Blog"))),r.a.createElement(ee.a.Item,null,r.a.createElement(A.IndexLinkContainer,{to:"/blog/topics"},r.a.createElement(ee.a.Link,null,"Topics"))),r.a.createElement(ee.a.Item,null,r.a.createElement(A.IndexLinkContainer,{to:"/blog/archive"},r.a.createElement(ee.a.Link,null,"Archive"))))))},ne=a(58),re=a(117),le=Object(o.o)((function(e){var t=e.match,a=(e.location,e.history,Object(n.useState)(null)),l=Object(E.a)(a,2),c=l[0],s=l[1],o=Object(n.useState)(!1),u=Object(E.a)(o,2),i=u[0],d=u[1],f=Object(n.useState)(null),b=Object(E.a)(f,2),h=b[0],g=b[1],x=Object(n.useState)(!0),j=Object(E.a)(x,2),k=j[0],w=j[1],O=function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v(t);case 3:a=e.sent,console.log(a),s(null),g(Object(ne.a)({},a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),s(e.t0);case 12:return e.prev=12,d(!0),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){O(t.params.slug)}),[t.params.slug]),c?r.a.createElement(B.a,null,r.a.createElement(H.a,{className:"text-center"},r.a.createElement(R,{title:"API Error",message:c.message,type:"danger"}))):i?r.a.createElement(B.a,null,r.a.createElement(H.a,{className:"mb-4"},r.a.createElement("h1",null,r.a.createElement("b",null,h.title)),r.a.createElement(_.a,{placement:"top",overlay:r.a.createElement(L.a,null,r.a.createElement(P.a,{date:h.published_at,format:"DD/MM/YYYY hh:mm A"}))},r.a.createElement("small",null,"Published ",r.a.createElement(P.a,{date:h.published_at,fromNow:!0}))),r.a.createElement("br",null),r.a.createElement("small",null,r.a.createElement("i",null,"Tags ")),r.a.createElement(M,{tags:h.tags})),r.a.createElement(H.a,{xs:12},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:h.html}})),r.a.createElement(H.a,{xs:12,className:"mt-3 text-center"},k&&r.a.createElement(re.a,{variant:"secondary",onClick:function(){!function(){w(!1),window.disqus_config=function(){this.page.url=window.location.href,this.page.identifier=h.id};var e=document.createElement("script");e.src="https://hecked-blog.disqus.com/embed.js",e.setAttribute("data-timestamp",Date.now().toString()),document.body.appendChild(e)}()}},"Show Comments"),!k&&r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("div",{id:"disqus_thread"})))):r.a.createElement(B.a,null,r.a.createElement(H.a,{className:"text-center"},r.a.createElement(G,null)))})),ce=function(){var e=Object(o.m)().topic;return r.a.createElement(K,{topic:e})};var se=function(){return r.a.createElement(B.a,null,r.a.createElement(H.a,{xs:12,sm:12,md:12,lg:2,xl:2},r.a.createElement(ae,null)),r.a.createElement(H.a,{xs:12,sm:12,md:12,lg:10,xl:10},r.a.createElement(o.g,null,r.a.createElement(o.d,{path:"/blog/topics/:topic"},r.a.createElement(ce,null)),r.a.createElement(o.d,{path:"/blog/archive"},r.a.createElement(X,null)),r.a.createElement(o.d,{path:"/blog/topics"},r.a.createElement($,null)),r.a.createElement(o.d,{path:"/blog/posts/:slug"},r.a.createElement(le,null)),r.a.createElement(o.d,{exact:!0,path:"/blog"},r.a.createElement(K,null)))))},oe=function(){return r.a.createElement("span",null,"Under Construction.")},ue=a(118),ie=a(59),me=a(60),pe=(a(104),function(){return r.a.createElement("div",{className:"HomeComponent"},r.a.createElement(B.a,null,r.a.createElement(H.a,{xs:12,sm:12,md:12,lg:3,xl:3}),r.a.createElement(H.a,{xs:12,sm:12,md:12,lg:6,xl:6},r.a.createElement(ue.a,{className:"text-center"},r.a.createElement("h1",null,"Hi, I'm Anas Najaa."),r.a.createElement("p",null,"I'm a software developer based in Kuwait.",r.a.createElement("br",null),"I'm currently interested in building simple to use APIs and SPAs.",r.a.createElement("br",null),r.a.createElement("i",null,"Learn by doing, keep learning.")))),r.a.createElement(H.a,{xs:12,sm:12,md:12,lg:3,xl:3})),r.a.createElement(B.a,null,r.a.createElement(H.a,{xs:12,className:"text-center"},r.a.createElement("div",null,r.a.createElement("h2",{className:"mb-3"},"I'm avilable here"),r.a.createElement("a",{className:"mr-5 twitter",href:"https://twitter.com/spidernet12",target:"_blank",rel:"noopener noreferrer nofollow"},r.a.createElement(ie.a,{icon:me.c})),r.a.createElement("a",{className:"mr-5 linkedin",href:"https://www.linkedin.com/in/anasnajaa",target:"_blank",rel:"noopener noreferrer nofollow"},r.a.createElement(ie.a,{icon:me.b})),r.a.createElement("a",{className:"github",href:"https://github.com/anasnajaa",target:"_blank",rel:"noopener noreferrer nofollow"},r.a.createElement(ie.a,{icon:me.a}))))),r.a.createElement("footer",null,"This Website is hosted on\xa0",r.a.createElement("a",{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer nofollow"},"Github Pages"),"\xa0and\xa0",r.a.createElement("a",{href:"https://www.heroku.com/dynos",target:"_blank",rel:"noopener noreferrer nofollow"},"Heroku"),r.a.createElement("br",null),"The frontend is powered by React.js (",r.a.createElement("a",{href:"https://github.com/anasnajaa/anasnajaa.github.io",target:"_blank",rel:"noopener noreferrer nofollow"},"source code"),")",r.a.createElement("br",null),"API is powered by Node.js/MongoDB/Express/Postgres (",r.a.createElement("a",{href:"https://github.com/anasnajaa/anasnajaa-api",target:"_blank",rel:"noopener noreferrer nofollow"},"source code"),")",r.a.createElement("br",null),"Content is powered by\xa0",r.a.createElement("a",{href:"https://ghost.org/docs/api/v3/content/",target:"_blank",rel:"noopener noreferrer nofollow"},"Ghost"),"\xa0acting as a headless CMS"))}),Ee=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"404 Error"),r.a.createElement("span",null,"Page Not Found"))},de=a(124),fe=function(){var e=Object(te.useMediaQuery)({query:"(max-width: 1224px)"}),t=Object(n.useRef)(null),a=function(){e&&t.current.dispatchEvent(new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0,buttons:1}))};return r.a.createElement(de.a,{className:"fixed-top",bg:"light",expand:"lg"},r.a.createElement(u.a,null,r.a.createElement(de.a.Brand,null,"Anas Najaa"),r.a.createElement(de.a.Toggle,{ref:t,"aria-controls":"basic-navbar-nav"}),r.a.createElement(de.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(ee.a,{className:"mr-auto"},r.a.createElement(A.IndexLinkContainer,{to:"/",onClick:a},r.a.createElement(ee.a.Link,null,"Home")),r.a.createElement(A.LinkContainer,{to:"/blog",onClick:a},r.a.createElement(ee.a.Link,null,"Blog")),r.a.createElement(A.LinkContainer,{to:"/services",onClick:a},r.a.createElement(ee.a.Link,null,"Services")),r.a.createElement(A.LinkContainer,{to:"/portfolio",onClick:a},r.a.createElement(ee.a.Link,null,"Portfolio")),r.a.createElement(A.LinkContainer,{to:"/links",onClick:a},r.a.createElement(ee.a.Link,null,"Links")),r.a.createElement(A.LinkContainer,{to:"/books",onClick:a},r.a.createElement(ee.a.Link,null,"Books"))))))},be=a(123),he=a(119),ge=function(e){var t=e.title,a=e.body,n=e.isHtml,l=e.show,c=e.onClose;return r.a.createElement(he.a,{show:l,onHide:c},r.a.createElement(he.a.Header,{closeButton:!0},r.a.createElement(he.a.Title,null,t)),r.a.createElement(he.a.Body,null,n?r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}}):a),r.a.createElement(he.a.Footer,null,r.a.createElement(re.a,{variant:"secondary",onClick:c},"Close")))},ve=function(){var e=Object(n.useState)(null),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),s=Object(E.a)(c,2),o=s[0],u=s[1],i=Object(n.useState)(!1),d=Object(E.a)(i,2),f=d[0],b=d[1],h=Object(n.useState)([]),g=Object(E.a)(h,2),v=g[0],x=g[1],w=Object(n.useState)(!0),y=Object(E.a)(w,2),N=y[0],S=y[1],_=Object(n.useState)(!1),L=Object(E.a)(_,2),I=L[0],P=L[1],A=Object(n.useState)(null),F=Object(E.a)(A,2),T=F[0],M=F[1],D=Object(n.useState)(null),q=Object(E.a)(D,2),Y=q[0],W=q[1],z=function(e){var t=e.card;return r.a.createElement(C.a,null,r.a.createElement(C.a.Header,null,r.a.createElement(be.a.Toggle,{as:re.a,variant:"outline",eventKey:t.id},t.title)),r.a.createElement(be.a.Collapse,{eventKey:t.id},r.a.createElement(C.a.Body,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),r.a.createElement("hr",null),r.a.createElement(re.a,{className:"mr-2",variant:"primary"},"Place a request"),r.a.createElement(re.a,{variant:"success",disabled:!N,onClick:function(){K()}},N?"FAQs":r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",className:"mr-2"}),"Loading...")))))},K=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!1),e.next=4,k("services-faqs");case 4:t=e.sent,M(t.html),W(t.title),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),W("Error"),M(e.t0.message);case 13:return e.prev=13,S(!0),P(!0),e.finish(13);case 17:case"end":return e.stop()}}),e,null,[[0,9,13,17]])})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(p.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("services-page");case 3:t=e.sent,n=t.pages,a={headerCard:n.find((function(e){return"5f9040ca5d24f1001e75ee71"===e.id})),services:n.filter((function(e){return"5f904a755d24f1001e75eeb5"===e.id||"5f904b025d24f1001e75eec3"===e.id||"5f904bd15d24f1001e75eeed"===e.id}))},u(a.headerCard),x(a.services),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),l(e.t0);case 12:return e.prev=12,b(!0),e.finish(12);case 15:case"end":return e.stop()}var n}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){Q()}),[]),a?r.a.createElement(B.a,null,r.a.createElement(H.a,null,r.a.createElement(R,{title:"API Error",message:a.message,type:"danger"}))):f?r.a.createElement(B.a,null,r.a.createElement(ge,{title:Y,body:T,isHtml:!0,show:I,onClose:function(){P(!1)}}),r.a.createElement(H.a,{xs:"12"},r.a.createElement(ue.a,null,r.a.createElement("h1",null,o.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:o.html}}))),r.a.createElement(H.a,{xs:"12"},r.a.createElement(be.a,{defaultActiveKey:v[0].id},v.map((function(e){return r.a.createElement(z,{key:e.id,card:e})}))))):r.a.createElement(B.a,null,r.a.createElement(H.a,{className:"text-center"},r.a.createElement(G,null)))},xe="https://anasnajaa-api.herokuapp.com/api/v1";var je="Data retrival failed for endpoint:",ke=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(xe,"/books"),{method:"GET"});case 2:if(!(t=e.sent).ok){e.next=9;break}return e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:throw Error("".concat(je," getBooks"));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),we=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(xe,"/links"),{method:"GET"});case 2:if(!(t=e.sent).ok){e.next=9;break}return e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:throw Error("".concat(je," getLinks"));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),s=Object(E.a)(c,2),o=s[0],u=s[1],i=Object(n.useState)(null),d=Object(E.a)(i,2),f=d[0],b=d[1],h=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,we();case 3:t=e.sent,l(t.links),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),b(e.t0);case 10:return e.prev=10,u(!0),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){h()}),[]),f?r.a.createElement(B.a,null,r.a.createElement(H.a,null,"Error: ",f.message)):o?r.a.createElement(B.a,null,r.a.createElement(H.a,{xs:"12"},r.a.createElement("h3",null,"Links"),r.a.createElement("p",null,"Websites that I found useful that talk about many topics, mostly realted to programming.")),r.a.createElement(H.a,{xs:"12"},r.a.createElement(Z.a,null,a.map((function(e){var t=e._id,a=e.url;e.likes,e.title,e.tags,e.date_created;return r.a.createElement("a",{key:t,target:"_blank",rel:"noopener noreferrer",href:a},r.a.createElement(Z.a.Item,null,a,"\xa0\xa0"))}))))):r.a.createElement(B.a,null,r.a.createElement(H.a,{className:"text-center"},r.a.createElement(G,null)))},ye=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),s=Object(E.a)(c,2),o=s[0],u=s[1],i=Object(n.useState)(null),d=Object(E.a)(i,2),f=d[0],b=d[1],h=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ke();case 3:t=e.sent,l(t.books),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),b(e.t0);case 10:return e.prev=10,u(!0),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){h()}),[]),f?r.a.createElement(B.a,null,r.a.createElement(H.a,null,"Error: ",f.message)):o?r.a.createElement(B.a,null,r.a.createElement(H.a,{xs:"12"},r.a.createElement("h3",null,"Books"),r.a.createElement("p",null,"Below are some of the books that I enjoyed reading sorted by latest read.")),r.a.createElement(H.a,{xs:"12"},r.a.createElement(Z.a,null,a.map((function(e){var t=e._id,a=e.title;e.thumbnail_url,e.date_created;return r.a.createElement("a",{key:t,target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com/search?q=".concat(a)},r.a.createElement(Z.a.Item,null,a,"\xa0\xa0"))}))))):r.a.createElement(B.a,null,r.a.createElement(H.a,{className:"text-center"},r.a.createElement(G,null)))},Ne=(a(105),function(e){var t=e.steps,a=e.showNumber,n=e.activeStep,l=e.onSelect,c=t.length-1;return r.a.createElement("div",{className:"StepperComponent"},t.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement("div",{className:"stepper-item"},r.a.createElement("div",{className:"stepper-item-outer",onClick:l.bind(null,t+1)},r.a.createElement("div",{className:"stepper-item-inner ".concat(n===t+1?"stepper-item-inner-active":t+1<n?"stepper-item-inner-completed":"stepper-item-inner-future")},"  ",a&&t+1," ")),r.a.createElement("span",{className:"stepper-title ".concat(n===t+1?"stepper-title-active":"")}," ",e.title," ")),c===t?"":r.a.createElement("div",{className:"stepper-item-outer"}," "))})))});Ne.defaultProps={steps:[{title:"Step 1"},{title:"Step 2"},{title:"Step 3"}],showNumber:!1,activeStep:2,onSelect:function(e){}};var Se=function(e){e.dispatch;var t=Object(n.useState)(!1),a=Object(E.a)(t,2),l=a[0],c=a[1];return r.a.createElement(Q.a,null,r.a.createElement(Q.a.Group,{controlId:"exampleForm.ControlInput1"},r.a.createElement(Q.a.Label,null,"Email Address"),r.a.createElement(Q.a.Control,{type:"email",placeholder:"name@example.com"})),r.a.createElement(Q.a.Group,{controlId:"exampleForm.ControlSelect1"},r.a.createElement(Q.a.Label,null,"Service Required"),r.a.createElement(Q.a.Control,{as:"select"},r.a.createElement("option",null,"Web / App Development"),r.a.createElement("option",null,"General IT Support"),r.a.createElement("option",null,"Programming Training"))),r.a.createElement(Q.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(Q.a.Label,null,"Request Description"),r.a.createElement(Q.a.Control,{as:"textarea",rows:3})),r.a.createElement(Q.a.Group,null,r.a.createElement(re.a,{variant:"info",onClick:function(){c(!0)},disabled:l},l?"Loading\u2026":"Submit")))},Ce=a(80),_e=function(e){var t=e.onChange;return r.a.createElement(Ce.a,{sitekey:"6LfHtdoZAAAAAJxtjaPSqyy4bX57G8YIx-ngomeW",onChange:function(e){t(e)}})},Le=function(e){e.dispatch;var t=Object(n.useState)(!1),a=Object(E.a)(t,2),l=a[0],c=a[1];return r.a.createElement(Q.a,null,r.a.createElement(Q.a.Group,{controlId:"exampleForm.ControlInput1"},r.a.createElement(Q.a.Label,null,"Mobile Number"),r.a.createElement(Q.a.Control,{type:"number",placeholder:"12345678"})),r.a.createElement(Q.a.Group,{className:"text-center"},r.a.createElement(_e,{onChange:function(e){var t;t=e,console.log(t)}})),r.a.createElement(Q.a.Group,null,r.a.createElement(re.a,{variant:"info",onClick:function(){c(!0)},disabled:l},l?"Sending...":"Send Verification Code")))},Ie={serviceRequestId:"",name:"",email:"",mobile:"",description:"",serviceID:"",activeStep:1,isNextDisabled:!0};function Pe(e,t){switch(t.type){case"nextStep":var a=Object(ne.a)({},e);return a.activeStep+=1,a;case"decrement":return{count:e.count-1};default:throw new Error}}var Ae=function(){var e=Object(n.useReducer)(Pe,Ie),t=Object(E.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){}),[]);return r.a.createElement(B.a,null,r.a.createElement(H.a,{xs:12,sm:12,md:12,lg:2,xl:2}),r.a.createElement(H.a,{xs:12,sm:12,md:12,lg:8,xl:8},r.a.createElement(Ne,{showNumber:!1,steps:[{title:""},{title:""},{title:""}],activeStep:a.activeStep}),r.a.createElement(B.a,null,r.a.createElement(H.a,{xs:12},1===a.activeStep&&r.a.createElement(Le,{dispatch:l}),2===a.activeStep&&r.a.createElement(Se,{dispatch:l}),3===a.activeStep&&r.a.createElement(r.a.Fragment,null,"All Done!")),r.a.createElement(H.a,{xs:12},3!==a.activeStep&&r.a.createElement(re.a,{variant:"success",onClick:function(){l({type:"nextStep"})},disabled:a.isNextDisabled},"Next")))),r.a.createElement(H.a,{xs:12,sm:12,md:12,lg:2,xl:2}))},Fe=a(77),Te=function(){return r.a.createElement(Fe.a,null,r.a.createElement("title",null,"Anas Najaa"),r.a.createElement("meta",{name:"description",content:"Anas Najaa's Personal Website."}),r.a.createElement("meta",{itemprop:"name",content:"Anas Najaa"}),r.a.createElement("meta",{itemprop:"description",content:"Anas Najaa's Personal Website."}),r.a.createElement("meta",{itemprop:"image",content:"https://www.dropbox.com/s/ixkk21ysnxb52wl/Najaaio%20Origin%20Logo.png?dl=1"}),r.a.createElement("meta",{property:"og:url",content:"https://anasnajaa.github.io"}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:"Anas Najaa"}),r.a.createElement("meta",{property:"og:description",content:"Anas Najaa's Personal Website."}),r.a.createElement("meta",{property:"og:image",content:"https://www.dropbox.com/s/ixkk21ysnxb52wl/Najaaio%20Origin%20Logo.png?dl=1"}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:title",content:"Anas Najaa"}),r.a.createElement("meta",{name:"twitter:description",content:"Anas Najaa's Personal Website."}),r.a.createElement("meta",{name:"twitter:image",content:"https://www.dropbox.com/s/ixkk21ysnxb52wl/Najaaio%20Origin%20Logo.png?dl=1"}))},Me=function(){return r.a.createElement(s.HashRouter,null,r.a.createElement(Te,null),r.a.createElement(fe,null),r.a.createElement(u.a,{className:"p-3 mt-5"},r.a.createElement(o.g,null,r.a.createElement(o.d,{exact:!0,path:"/"},r.a.createElement(pe,null)),r.a.createElement(o.d,{path:"/blog"},r.a.createElement(se,null)),r.a.createElement(o.d,{path:"/portfolio"},r.a.createElement(oe,null)),r.a.createElement(o.d,{path:"/services/request"},r.a.createElement(Ae,null)),r.a.createElement(o.d,{path:"/services"},r.a.createElement(ve,null)),r.a.createElement(o.d,{path:"/links"},r.a.createElement(Oe,null)),r.a.createElement(o.d,{path:"/books"},r.a.createElement(ye,null)),r.a.createElement(o.d,{path:"*"},r.a.createElement(Ee,null)))))};c.a.render(r.a.createElement(Me,null),document.getElementById("root"))},84:function(e,t,a){e.exports=a(106)},89:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.832ca2ca.chunk.js.map