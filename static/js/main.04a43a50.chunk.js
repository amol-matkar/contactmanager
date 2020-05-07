(this.webpackJsonptesting=this.webpackJsonptesting||[]).push([[0],{37:function(e,t,a){e.exports=a(67)},42:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),o=a.n(c),l=a(10),s=a(14),i=(a(42),a(2)),m=a.n(i),u=a(12),p=a(5),d=a(6),h=a(8),b=a(7),v=a(36),f=a(16),E=a(13),y=a.n(E),g=r.a.createContext(),C=function(e,t){switch(t.type){case"ADD_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{contacts:[t.payload].concat(Object(v.a)(e.contacts))});case"UPDATE_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});case"DELETE_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});default:return e}},N=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],dispatch:function(t){return e.setState((function(e){return C(e,t)}))}},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(g.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),j=g.Consumer,O=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showContactInfo:!1},e.onShowClick=function(t){console.log(e.state);var a=e.state.showContactInfo;e.setState({showContactInfo:!a})},e.onDeleteClicHander=function(){var e=Object(u.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone,s=null;return this.state.showContactInfo&&(s=r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o))),r.a.createElement(j,null,(function(t){var c=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n,r.a.createElement("i",{className:"fas fa-sort-down",style:{cursor:"pointer"},onClick:e.onShowClick}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClicHander.bind(e,a,c)}),r.a.createElement(l.b,{to:"/contact/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"15px"}}))),s)}))}}]),a}(n.Component),k=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(j,null,(function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"display-8 mb-2 text-danger"},"Contact List"),t.map((function(e){return r.a.createElement(O,{key:e.id,contact:e})})))}))}}]),a}(n.Component),w=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement(l.b,{to:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/about",className:"nav-link"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/contact/add",className:"nav-link"},"Add Contact")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/test",className:"nav-link"},"Test")))))};w.defaultProps={branding:"My App"};var x=w,S=a(17),A=a(35),T=a.n(A),D=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{value:n,id:a,type:o,name:a,placeholder:c,className:T()("form-control form-control-lg",{"is-invalid":s}),onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};D.defaultProps={type:"text"};var P=D,q=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onChange=function(t){return e.setState(Object(S.a)({},t.target.name,t.target.value))},e.onSubmit=function(){var t=Object(u.a)(m.a.mark((function t(a,n){var r,c,o,l,s,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),console.log(e.state),r=e.state,c=r.name,o=r.email,l=r.phone,""!==c){t.next=6;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 6:if(""!==o){t.next=9;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 9:if(""!==l){t.next=12;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 12:return s={name:c,email:o,phone:l},t.next=15,y.a.post("https://jsonplaceholder.typicode.com/users",s);case 15:i=t.sent,a({type:"ADD_CONTACT",payload:i.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 19:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(j,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(P,{label:"Name",value:a,name:"name",placeholder:"Enter name",onChange:e.onChange,error:o.name}),r.a.createElement(P,{label:"Email",value:n,name:"email",type:"email",placeholder:"Enter email",onChange:e.onChange,error:o.email}),r.a.createElement(P,{label:"Phone",value:c,name:"phone",placeholder:"Enter phone",onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))}))}}]),a}(n.Component),M=(a(66),function(){return r.a.createElement("div",{className:"card-body mb-3"},r.a.createElement("h1",{className:"display-4"},"About contact manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage the contact."),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))}),_=function(){return r.a.createElement("div",{className:"card-body"},r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist."))},I=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:""},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/1").then((function(e){return e.json()})).then((function(t){e.setState({title:t.title,body:t.body})}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return r.a.createElement("div",{className:"card card-body"},r.a.createElement("h1",null,t),r.a.createElement("div",{className:"card-body"},a))}}]),a}(n.Component),U=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onChange=function(t){return e.setState(Object(S.a)({},t.target.name,t.target.value))},e.onSubmit=function(){var t=Object(u.a)(m.a.mark((function t(a,n){var r,c,o,l,s,i,u;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),console.log(e.state),r=e.state,c=r.name,o=r.email,l=r.phone,""!==c){t.next=6;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 6:if(""!==o){t.next=9;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 9:if(""!==l){t.next=12;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 12:return s=e.props.match.params.id,i={name:c,email:o,phone:l},t.next=16,y.a.put("https://jsonplaceholder.typicode.com/users/".concat(s),i);case 16:u=t.sent,console.log(u.data),a({type:"UPDATE_CONTACT",payload:u.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 21:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,y.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone,errors:{}});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(j,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Update Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(P,{label:"Name",value:a,name:"name",placeholder:"Enter name",onChange:e.onChange,error:o.name}),r.a.createElement(P,{label:"Email",value:n,name:"email",type:"email",placeholder:"Enter email",onChange:e.onChange,error:o.email}),r.a.createElement(P,{label:"Phone",value:c,name:"phone",placeholder:"Enter phone",onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))}))}}]),a}(n.Component);var F=function(){return r.a.createElement(N,null,r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(x,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:k}),r.a.createElement(s.a,{exact:!0,path:"/contact/add",component:q}),r.a.createElement(s.a,{exact:!0,path:"/contact/edit/:id",component:U}),r.a.createElement(s.a,{exact:!0,path:"/about",component:M}),r.a.createElement(s.a,{exact:!0,path:"/test",component:I}),r.a.createElement(s.a,{component:_}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.04a43a50.chunk.js.map