(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{32:function(e,t,n){e.exports=n(65)},37:function(e,t,n){},38:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(30),r=n.n(o),i=(n(37),n(38),n(11)),c=n(2),s=(n(13),n(12)),u=n(9),m=n.n(u),d=function(e){var t=e.replace(/\s/g,"+");return m.a.get("https://www.googleapis.com/books/v1/volumes?q="+t)},f=function(){return m.a.get("/api/books")},v=function(e){return console.log("deleting "+e),m.a.delete("/api/books/"+e)},h=function(e){return console.log("saving book2 with:"),console.log(e),m.a.post("/api/books",e)},E=n(8);n(57);var g=function(e){return l.a.createElement("div",{className:"card"},l.a.createElement("div",null,l.a.createElement("h4",null,e.title),l.a.createElement(E.a,{variant:"danger",className:"float-right",onClick:function(){v(e.id).then((function(t){return e.afterDelete()})).catch((function(e){return console.log(e)}))}},"Delete"),l.a.createElement(E.a,{variant:"outline-primary",className:"float-right",onClick:function(){window.open(e.link,"_blank")}},"View")),l.a.createElement("p",null,"Written by: ",e.authors),l.a.createElement("div",{className:"img-container"},l.a.createElement("img",{alt:e.title,src:e.thumbnail}),l.a.createElement("p",null,e.description)),l.a.createElement("div",{className:"content"}))};var p=function(e){var t=e.children;return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)};function b(e){var t=e.fluid,n=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function k(e){var t=e.fluid,n=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function w(e){var t=e.size,n=e.children;return l.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},n)}n(58);function N(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function j(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}var y=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1];function r(){f().then((function(e){return o(e.data)})).catch((function(e){return console.log(e)}))}return Object(a.useEffect)((function(){r()}),[]),l.a.createElement(b,{fluid:!0},l.a.createElement(k,null,l.a.createElement(w,{size:"md-10 sm-12"},l.a.createElement(p,null,l.a.createElement("h1",null,"(React) Google Book Search"),l.a.createElement("h3",null,"Search for and save books of Interest")),l.a.createElement("h3",null,"Saved Books"),n.length?l.a.createElement(N,null,n.map((function(e){return console.log(e._id),l.a.createElement(j,{key:e._id},l.a.createElement(g,{id:e._id,title:e.title,authors:e.authors.join(", "),thumbnail:e.image,description:e.description,link:e.link,afterDelete:r}))}))):l.a.createElement("h3",null,"No Results to Display"))))},O=n(14),S=n(17);n(59);var I=function(e){return l.a.createElement("div",{className:"card"},l.a.createElement("div",null,l.a.createElement("h4",null,e.title),l.a.createElement(E.a,{variant:"outline-primary",className:"float-right",onClick:function(){return t=e.link,void window.open(t,"_blank");var t}},"View"),l.a.createElement(E.a,{variant:"primary",className:"float-right",onClick:function(){return function(e){console.log("saving book");var t={title:e.title,authors:e.authors.split(", "),description:e.description,image:e.thumbnail,link:e.link};h(t).then(alert("The book has been added to your saved list.")).catch((function(e){return console.log(e)}))}(e)}},"Save")),l.a.createElement("p",null,"Written by: ",e.authors),l.a.createElement("div",{className:"img-container"},l.a.createElement("img",{alt:e.title,src:e.thumbnail}),l.a.createElement("p",null,e.description)),l.a.createElement("div",{className:"content"}))};function B(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function C(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var x=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)({}),i=Object(s.a)(r,2),c=i[0],u=i[1];return console.log(n),l.a.createElement(b,{fluid:!0},l.a.createElement(k,null,l.a.createElement(w,{size:"md-10 sm-12"},l.a.createElement(p,null,l.a.createElement("h1",null,"(React) Google Book Search"),l.a.createElement("h3",null,"Search for and save books of Interest")),l.a.createElement("form",null,l.a.createElement(B,{onChange:function(e){var t=e.target,n=t.name,a=t.value;u(Object(S.a)(Object(S.a)({},c),{},Object(O.a)({},n,a)))},name:"title",placeholder:"Title (required)"}),l.a.createElement(C,{disabled:!c.title,onClick:function(e){e.preventDefault(),c.title&&d(c.title).then((function(e){return t=e.data.items,void o(t);var t})).catch((function(e){return console.log(e)}))}},"Search")))),l.a.createElement(k,null,l.a.createElement(w,{size:"md-12 sm-12"},l.a.createElement("h2",null,"Results"),n.length?l.a.createElement(N,null,n.map((function(e){return l.a.createElement(j,{key:e.id},l.a.createElement(I,{title:e.volumeInfo.title,authors:"undefined"===typeof e.volumeInfo.authors?"":e.volumeInfo.authors.join(", "),thumbnail:"undefined"===typeof e.volumeInfo.imageLinks?"":e.volumeInfo.imageLinks.smallThumbnail,description:e.volumeInfo.description,link:e.volumeInfo.previewLink}))}))):l.a.createElement("h3",null,"No Results to Display"))))};var D=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Google Books"),l.a.createElement(i.b,{to:"/",className:"/"===window.location.pathname||"/search"===window.location.pathname?"nav-link active":"nav-link"},"Search"),l.a.createElement(i.b,{to:"/saved",className:"/saved"===window.location.pathname?"nav-link active":"nav-link"},"Saved"))};var R=function(){return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(D,null),l.a.createElement(c.c,null,l.a.createElement(c.a,{exact:!0,path:["/","/search"]},l.a.createElement(x,null)),l.a.createElement(c.a,{exact:!0,path:"/saved"},l.a.createElement(y,null)))))},W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(l.a.createElement(R,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");W?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):L(e)}))}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.a6f51be5.chunk.js.map