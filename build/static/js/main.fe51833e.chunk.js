(this.webpackJsonpdigwallet=this.webpackJsonpdigwallet||[]).push([[0],{31:function(e,t,n){},37:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfmBAIBAxP9EUReAAADrklEQVRYw71XzWtTXxA9kzwb6BdYEhu7cKGmoM2mlkisIKJC1UI3JYt2YbqKWzc1di9+LaoUXPgPCFUQou78WsSiFGr9IEKpStG29AOMi5Sapp3jYuqvpMmvCvblwFu8d+fNOXdm7tx7BdsE0usFw2HIzp1gJiOexcXt8r01sToO9fx5cmqK/2FtjRwepu7a5R4xRcjubnJigsznydu3yWiUGgpRz50jv34lMxlqba0L5MePU1+/tpnevUvu3VsamUiE/PmTfPhwK19O+bCGQpBwGAgEikd27waiUeD0aeDpUyASEXnzplhcTQ1w4QLQ3w8UCkBHBxmPgyMj4vn06Q8zO3uWOj5ueVQlv3+358cPmw1JTk+TJ0+WinYcMpEgZ2aouRx57RoZDJIrKxu1MTZGnjlTPp964wapSr13j3rsmDlsaDBHy8tWZIkE6fGUkp86RX74YGR37pDB4IbvixdNUFcXef++Tez69U0CBgbIQoHs6bH36moymSSzWeriIplMUn2+UuHt7WQ6vSF8//5Sm5oacn6eeuWKvff2GlcyCQBC7tsHfPwIDAyAo6NAPA6JxQCfD3jyxJ58vtit3w/09ADhsP374AHw7dv/57ajA9LZCfT3g+PjQDQKuXwZOHBAqIODkO5uIJcDDh4EVK14lpcBsrxHnw+oqjKb1VX8ESJAXZ3Z+nwmur4eHB4GOTlpOU6nydbWcjneLpBeL3noEDkyYpwTE7B8zM3Z8qkMrC4WFshCwQM4DvDihcjSUqUEGNfz54DjrIf73btKkW/g7VsAMAH8/Lni/Ouczr/62ZKDDQ1AIgEcOQJWVxcNSmOjqwKokQjw+DGwYwfw8iXky5diCxMAa/ux2PaS19eTs7PUZ8+ofr8tP6+32GZwkCTdWfMSj1vj6e2FnDgBZLNANltuoi41nbY2YGxMPPPzwNAQkEoBqRRkaGizpUs1sLoKrm9eXFoCfu+Opb3GpQik05DWVmpzM9DXBwkEIIEA0NdXYupOEVZVkZmMnRFaWsrbWBG6kgLxrKyQnZ2W+/fvbdOZmSk2am4GXOwDIlNT1LY2SFcX2N4OqasrDgEA2bPHlRT8Daix2HofUIU4rrbk8iFyHEDVA8zO2kmo0mhpAaanQd66RS4suHqN2gRqY6Mddm/eFKrfDxkdtaFLl8BXryC5nDvMtbWQo0eBq1dBVcjhw/adTU3ko0d21XIba2tkKkU2NQGAFAlkMAiGQnZydQP5PGRyUmRu7veXXyUE35D4IvIGAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA0LTAyVDAxOjAzOjE5KzAwOjAwI5egOAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wNC0wMlQwMTowMzoxOSswMDowMFLKGIQAAAAASUVORK5CYII="},41:function(e,t,n){e.exports=n(59)},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(22),l=n.n(i),c=n(12),o=n(20),u=n(10),d=n(11),s=n(14),p=n(13),m=n(2),h=n(19),E=n(17),b=n.n(E),g=n(21),x=function(){return fetch("https://economia.awesomeapi.com.br/json/all").then((function(e){return e.json().then((function(t){return e.ok?Promise.resolve(t):Promise.reject(t)}))}))},f=function(e){return{type:"SUCCESS",curr:e}};var A,v,y,w,j,O,k,D,C,S,M=n(3),I=n(4),U=I.b.div(A||(A=Object(M.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100vw;\n  height: 100vh;\n  padding: 16px;\n"]))),R=I.b.div(v||(v=Object(M.a)(["\n  border: 1px solid black;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  form {\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  input{\n    width: 80%;\n    padding: 8px;\n    margin: 8px;\n    text-align: center;\n\n  }\n  \n  button{\n    width: 80%;\n    padding: 8px;\n    margin: 8px;\n  }\n  h2{\n    padding: 8px;\n  }\n  p{\n    margin-bottom: 16px;\n    font-size: smaller;\n  }\n"]))),T=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(h.a)({},a,r))},e.validateFields=function(t){var n=t.target,a=e.state.email,r=n.value;/\S+@\S+\.\S+/.test(a)&&r.length>5&&e.setState({btnDisable:!1})},e.loginValidation=function(){var t=e.props,n=t.userLoginDispatch,a=t.history;n(e.state.email),a.push("/carteira")},e.state={email:"",btnDisable:!0},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.btnDisable;return r.a.createElement(U,null,r.a.createElement(R,null,"Insert image or logo"),r.a.createElement(R,null,r.a.createElement("form",null,r.a.createElement("h2",null,"Welcome to your wallet"),r.a.createElement("p",null,"Sign in with your credentials"),r.a.createElement("input",{type:"email",id:"email",name:"email",onChange:this.handleChange,value:t,"data-testid":"email-input",placeholder:"Enter your email"}),r.a.createElement("input",{type:"password",id:"password",name:"password",onChange:this.validateFields,"data-testid":"password-input",placeholder:"Enter your password"}),r.a.createElement("button",{type:"button",disabled:n,onClick:this.loginValidation},"Sign"))))}}]),n}(a.Component),Q=Object(c.b)(null,(function(e){return{userLoginDispatch:function(t){return e(function(e){return{type:"LOGIN",email:e}}(t))}}}))(T),B=I.b.div(y||(y=Object(M.a)(["\n  border: 1px solid red;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 100vw;\n  height: 100vh;\n  padding: 16px;\n"]))),F=I.b.div(w||(w=Object(M.a)(["\n  border: 1px solid grey;\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),G=I.b.div(j||(j=Object(M.a)(["\n  display: flex;\n  flex-direction: row;\n  border: 1px solid grey;\n  padding: 16px;\n  align-items: center;\n\n  figure{\n    text-decoration: none;\n    padding: 8px;\n    margin-right: 8px;\n    background-color: black;\n    border-radius: 50%;\n  }\n\n  p{\n    padding: 0 16px;\n    border: 1px solid grey ;\n    span{\n      margin: 0 16px;\n      border: 1px solid grey ;\n    }\n  }\n"]))),P=I.b.div(O||(O=Object(M.a)(["\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n"]))),L=I.b.p(k||(k=Object(M.a)(["\n  background-color: grey;\n  border-radius: 8px;\n  padding: 16px 0;\n  margin: 0 16px\n"]))),N=n(37),W=n.n(N),z=(n(31),I.b.div(D||(D=Object(M.a)(["\n  border: 1px solid red;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 300px;\n  padding: 16px;\n"])))),X=I.b.form(C||(C=Object(M.a)(["\n  width: 100%;\n  border: 1px solid red;\n  label{\n    display: flex;\n    flex-direction: column;\n    margin: 12px 0;\n  }\n  input{\n    width: 100%;\n    border: 1px solid gray;\n    border-radius: 4px;\n    height: 32px;\n  }\n  select{\n    width: 100%;\n    border: 1px solid gray;\n    margin: 0;\n    height: 32px;\n  }\n"]))),Z=I.b.button(S||(S=Object(M.a)(["\n  width: 100%;\n  height: 32px;\n  margin: 12px 0;\n"]))),K=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(h.a)({},a,r))},e.sendInfo=function(){var t=Object(g.a)(b.a.mark((function t(n){var a,r,i,l,c,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props,r=a.expensesDispatch,i=a.importNextId,l=e.state,c=l.editMode,o=l.id,n.preventDefault(),t.t0=e,t.t1=c?o:i,t.next=7,x();case 7:t.t2=t.sent,t.t3={id:t.t1,exchangeRates:t.t2},t.t4=function(){return r(e.state)},t.t0.setState.call(t.t0,t.t3,t.t4),e.setState({value:"",description:"",currency:"USD",method:"",tag:"",id:"",exchangeRates:[],editMode:!1});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.editMode=function(){var t=Object(g.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(a=e.props.importEditExpense).length>0&&0===n.importEditExpense.length&&e.setState({value:a[0].value,description:a[0].description,currency:a[0].currency,method:a[0].method,tag:a[0].tag,id:a[0].id,editMode:!0});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={value:"",description:"",currency:"USD",method:"",tag:"",id:"",exchangeRates:[],editMode:!1},e}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(e){this.editMode(e)}},{key:"render",value:function(){var e=this.props,t=e.importLoadCurrencies,n=e.importEditExpense,a=this.state,i=a.value,l=a.description,c=a.currency,o=a.method,u=a.tag;return r.a.createElement(z,null,r.a.createElement("h3",null,"Expenses"),r.a.createElement(X,null,r.a.createElement("label",{htmlFor:"description"},"Descri\xe7\xe3o:",r.a.createElement("input",{type:"text","data-testid":"description-input",id:"description",name:"description",value:l,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"category"},"Categoria:",r.a.createElement("select",{id:"category","data-testid":"tag-input",name:"tag",value:u,onChange:this.handleChange},r.a.createElement("option",null,"Alimenta\xe7\xe3o"),r.a.createElement("option",null,"Lazer"),r.a.createElement("option",null,"Trabalho"),r.a.createElement("option",null,"Transporte"),r.a.createElement("option",null,"Sa\xfade"))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"value"},"Valor:",r.a.createElement("input",{type:"number","data-testid":"value-input",id:"value",name:"value",value:i,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"currency"},"Moeda:",r.a.createElement("select",{id:"currency","data-testid":"currency-input",name:"currency",value:c,onChange:this.handleChange},t.map((function(e,t){return r.a.createElement("option",{key:t},e)}))))),r.a.createElement("label",{htmlFor:"method"},"M\xe9todo de Pagamento:",r.a.createElement("select",{id:"method","data-testid":"method-input",name:"method",value:o,onChange:this.handleChange},r.a.createElement("option",null,"Dinheiro"),r.a.createElement("option",null,"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",null,"Cart\xe3o de d\xe9bito"))),r.a.createElement(Z,{type:"submit",onClick:this.sendInfo},0===n.length?"Adicionar Despesa":"Salvar Despesa")))}}]),n}(r.a.Component);K.defaultProps={importEditExpense:[]};var V,J,H,q,Y=Object(c.b)((function(e){return{importLoadCurrencies:e.wallet.currencies,importNextId:e.wallet.expenses.length,importEditExpense:e.wallet.editExpense}}),(function(e){return{expensesDispatch:function(t){return e(function(e){return{type:"EXPENSES",listExpenses:e}}(t))}}}))(K),$=I.b.div(V||(V=Object(M.a)(["\n  border: 1px solid red;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  padding: 16px;\n  thead > tr > th {\n    background-color: antiquewhite;\n    padding: 8px;\n    height: 40px;\n    font-weight: 400;\n  };\n  tbody > tr > td {\n    background-color: bisque;\n    text-align: center;\n    color: gray;\n  }\n"]))),_=(I.b.button(J||(J=Object(M.a)(["\n"]))),I.b.button(H||(H=Object(M.a)(["\n"]))),function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).delExpense=function(t){var n=t.target.id;(0,e.props.deleteExpenseDispatch)(n)},e.editExpense=function(t){var n=t.target.id;(0,e.props.editExpenseDispatch)(n)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.importExpenses;return r.a.createElement($,null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Descri\xe7\xe3o"),r.a.createElement("th",null,"Tag"),r.a.createElement("th",null,"M\xe9todo de pagamento"),r.a.createElement("th",null,"Valor"),r.a.createElement("th",null,"Moeda"),r.a.createElement("th",null,"C\xe2mbio utilizado"),r.a.createElement("th",null,"Valor convertido"),r.a.createElement("th",null,"Moeda de convers\xe3o"),r.a.createElement("th",null,"Editar/Excluir"))),r.a.createElement("tbody",null,t.map((function(t){var n=Number(t.exchangeRates[t.currency].ask),a=Number(t.value),i=n*a,l=t.exchangeRates[t.currency].name.split("/");return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.description),r.a.createElement("td",null,t.tag),r.a.createElement("td",null,t.method),r.a.createElement("td",null,a.toFixed(2)),r.a.createElement("td",null,l[0]),r.a.createElement("td",null,n.toFixed(2)),r.a.createElement("td",null,i.toFixed(2)),r.a.createElement("td",null,"Real"),r.a.createElement("td",null,r.a.createElement("button",{id:t.id,type:"button","data-testid":"edit-btn",onClick:e.editExpense},"Edit"),r.a.createElement("button",{id:t.id,type:"button","data-testid":"delete-btn",onClick:e.delExpense},"Delete")))})))))}}]),n}(a.Component)),ee=Object(c.b)((function(e){return{importExpenses:e.wallet.expenses}}),(function(e){return{deleteExpenseDispatch:function(t){return e(function(e){return{type:"DELETE",id:e}}(t))},editExpenseDispatch:function(t){return e(function(e){return{type:"EDIT",id:e}}(t))}}}))(_),te=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).sumExpenses=function(){var t=e.props.importExpenses;return t.length>0?t.map((function(e){var t=e.value,n=e.currency;return t*e.exchangeRates[n].ask})).reduce((function(e,t){return e+=t})).toFixed(2):0},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.importThunkCurrency)()}},{key:"render",value:function(){var e=this.props.emailState;return r.a.createElement(B,null,r.a.createElement(F,null,r.a.createElement(G,null,r.a.createElement("figure",null,r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{src:W.a,alt:"Logo"}))),r.a.createElement("h1",null,"DIGWALLET")),r.a.createElement(G,null,r.a.createElement("p",null,"Total",r.a.createElement("span",null,this.sumExpenses())),r.a.createElement("p",null,"Currency",r.a.createElement("span",null,"BRL")),r.a.createElement(L,null,e))),r.a.createElement(P,null,r.a.createElement(Y,null),r.a.createElement(ee,null)))}}]),n}(r.a.Component),ne=Object(c.b)((function(e){return{emailState:e.user.email,importExpenses:e.wallet.expenses}}),(function(e){return{importThunkCurrency:function(t){return e(function(){var e=Object(g.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"REQUEST"}),e.next=3,x();case 3:return n=e.sent,e.abrupt("return",t(f(n)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(te),ae=Object(I.a)(q||(q=Object(M.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  body {\n    font-family: sans-serif;\n  }\n"]))),re=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:Q}),r.a.createElement(m.a,{path:"/carteira",component:ne})))}}]),n}(a.Component),ie=n(15),le=n(38),ce=n(39),oe=n(8),ue={email:""};var de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(oe.a)(Object(oe.a)({},e),{},{email:t.email});default:return e}},se=n(40),pe={currencies:[],expenses:[],editExpense:[]};var me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0,n=e.expenses,a=t.curr,r=t.listExpenses,i=t.id;switch(t.type){case"REQUEST":return Object(oe.a)({},e);case"SUCCESS":return Object(oe.a)(Object(oe.a)({},e),{},{currencies:Object.keys(a).filter((function(e){return"USDT"!==e}))});case"EXPENSES":return Object(oe.a)(Object(oe.a)({},e),{},{expenses:[].concat(Object(se.a)(n),[r]),editExpense:[]});case"DELETE":return Object(oe.a)(Object(oe.a)({},e),{},{expenses:n.filter((function(e){return e.id!==+i})),editExpense:[]});case"EDIT":return Object(oe.a)(Object(oe.a)({},e),{},{editExpense:n.filter((function(e){return e.id===+i})),expenses:n.filter((function(e){return e.id!==+i}))});default:return e}},he=Object(ie.combineReducers)({wallet:me,user:de}),Ee=Object(ie.createStore)(he,Object(ce.composeWithDevTools)(Object(ie.applyMiddleware)(le.a)));n(58),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(c.a,{store:Ee},r.a.createElement(o.a,{basename:"/digwallet"},r.a.createElement(re,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.fe51833e.chunk.js.map