(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t){},123:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),c=a.n(s),o=a(25),l=(a(79),a(22)),u=a(23),i=a(26),m=a(24),h=a(27),p=a(62),d=a(10),f=a(35),g=a.n(f),v=a(60),b=a(61),E=a.n(b),O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={handle:"",enteredName:"",msg:""},a.sendForm=function(e){e.preventDefault();var t=a.state,n=t.handle,r=t.msg;a.props.sendMessage(n,r),a.setState({msg:""})},a.acceptName=function(){a.setState({handle:a.state.enteredName})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.checkHealth()}},{key:"render",value:function(){var e=this,t=this.state,a=t.enteredName,n=t.handle,s=t.msg;if(""===n)return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(){e.acceptName()}},r.a.createElement("div",{className:"row"},r.a.createElement("input",{className:"col s8",placeholder:"Your Name",value:a,onChange:function(t){e.setState({enteredName:t.target.value})}}),r.a.createElement("button",{className:"btn"},"Register"))));var c=this.props.messages;return r.a.createElement("ul",{className:"pages"},r.a.createElement("li",{className:"chat page"},r.a.createElement("div",{className:"chatArea"},r.a.createElement("ul",{className:"messages"},c.map(function(e,t){return r.a.createElement("li",{className:"collection-item",key:t},e.handle," -- ",e.msg)}))),r.a.createElement("form",{onSubmit:this.sendForm},r.a.createElement("input",{value:s,onChange:function(t){return e.setState({msg:t.target.value})},className:"inputMessage",placeholder:"Type here..."}),r.a.createElement("input",{type:"submit",hidden:!0}))))}}]),t}(n.Component),y=Object(o.b)(function(e){return{status:e.status,health:e.health,messages:e.socket.messages}},{checkHealth:function(){return function(){var e=Object(v.a)(g.a.mark(function e(t){var a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/chat/api");case 2:a=e.sent,t({type:"HEALTH_CHECK",payload:a.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},sendMessage:function(e,t){return{type:"server/hello",data:{handle:e,msg:t}}}})(O),N=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(d.a,{path:"/",component:y}))}}]),t}(n.Component),j=a(69),w=a(9),k=a(64),C=a(65),H=a(66),S=a.n(H),_=a(67),A=a.n(_),T=a(68),L=a.n(T),M={messages:[{handle:"Bill",msg:"Hello world!"}]},R={status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"OK";return(arguments.length>1?arguments[1]:void 0).type,e},health:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HEALTH_CHECK":return t.payload;default:return e}},socket:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"message":return L()(e,{messages:{$push:[t.data]}});default:return e}}},D=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_SOCKET_URL,K=A()(D),x=S()(K,"server/"),B=Object(w.createStore)(Object(w.combineReducers)(Object(j.a)({},R)),Object(C.composeWithDevTools)(Object(w.applyMiddleware)(x,k.a)));B.subscribe(function(){console.log("new client state",B.getState())});var P=B;c.a.render(r.a.createElement(o.a,{store:P},r.a.createElement(N,null)),document.getElementById("root"))},70:function(e,t,a){e.exports=a(123)},79:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.fc87829a.chunk.js.map