(this.webpackJsonpdigwallet=this.webpackJsonpdigwallet||[]).push([[0],{20:function(e,t,n){},30:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfmBAIBAxP9EUReAAADrklEQVRYw71XzWtTXxA9kzwb6BdYEhu7cKGmoM2mlkisIKJC1UI3JYt2YbqKWzc1di9+LaoUXPgPCFUQou78WsSiFGr9IEKpStG29AOMi5Sapp3jYuqvpMmvCvblwFu8d+fNOXdm7tx7BdsE0usFw2HIzp1gJiOexcXt8r01sToO9fx5cmqK/2FtjRwepu7a5R4xRcjubnJigsznydu3yWiUGgpRz50jv34lMxlqba0L5MePU1+/tpnevUvu3VsamUiE/PmTfPhwK19O+bCGQpBwGAgEikd27waiUeD0aeDpUyASEXnzplhcTQ1w4QLQ3w8UCkBHBxmPgyMj4vn06Q8zO3uWOj5ueVQlv3+358cPmw1JTk+TJ0+WinYcMpEgZ2aouRx57RoZDJIrKxu1MTZGnjlTPp964wapSr13j3rsmDlsaDBHy8tWZIkE6fGUkp86RX74YGR37pDB4IbvixdNUFcXef++Tez69U0CBgbIQoHs6bH36moymSSzWeriIplMUn2+UuHt7WQ6vSF8//5Sm5oacn6eeuWKvff2GlcyCQBC7tsHfPwIDAyAo6NAPA6JxQCfD3jyxJ58vtit3w/09ADhsP374AHw7dv/57ajA9LZCfT3g+PjQDQKuXwZOHBAqIODkO5uIJcDDh4EVK14lpcBsrxHnw+oqjKb1VX8ESJAXZ3Z+nwmur4eHB4GOTlpOU6nydbWcjneLpBeL3noEDkyYpwTE7B8zM3Z8qkMrC4WFshCwQM4DvDihcjSUqUEGNfz54DjrIf73btKkW/g7VsAMAH8/Lni/Ouczr/62ZKDDQ1AIgEcOQJWVxcNSmOjqwKokQjw+DGwYwfw8iXky5diCxMAa/ux2PaS19eTs7PUZ8+ofr8tP6+32GZwkCTdWfMSj1vj6e2FnDgBZLNANltuoi41nbY2YGxMPPPzwNAQkEoBqRRkaGizpUs1sLoKrm9eXFoCfu+Opb3GpQik05DWVmpzM9DXBwkEIIEA0NdXYupOEVZVkZmMnRFaWsrbWBG6kgLxrKyQnZ2W+/fvbdOZmSk2am4GXOwDIlNT1LY2SFcX2N4OqasrDgEA2bPHlRT8Daix2HofUIU4rrbk8iFyHEDVA8zO2kmo0mhpAaanQd66RS4suHqN2gRqY6Mddm/eFKrfDxkdtaFLl8BXryC5nDvMtbWQo0eBq1dBVcjhw/adTU3ko0d21XIba2tkKkU2NQGAFAlkMAiGQnZydQP5PGRyUmRu7veXXyUE35D4IvIGAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA0LTAyVDAxOjAzOjE5KzAwOjAwI5egOAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wNC0wMlQwMTowMzoxOSswMDowMFLKGIQAAAAASUVORK5CYII="},34:function(e,t,n){e.exports=n(50)},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(21),c=n.n(i),l=n(10),o=n(17),u=n(8),s=n(9),d=n(12),p=n(11),m=n(2),E=n(16),h=n(14),A=n.n(h),f=n(19),b=function(){return fetch("https://economia.awesomeapi.com.br/json/all").then((function(e){return e.json().then((function(t){return e.ok?Promise.resolve(t):Promise.reject(t)}))}))},v=function(e){return{type:"SUCCESS",curr:e}};n(20);var g=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(E.a)({},a,r))},e.validateFields=function(t){var n=t.target,a=e.state.email,r=n.value;/\S+@\S+\.\S+/.test(a)&&r.length>5&&e.setState({btnDisable:!1})},e.loginValidation=function(){var t=e.props,n=t.userLoginDispatch,a=t.history;n(e.state.email),a.push("/carteira")},e.state={email:"",btnDisable:!0},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.btnDisable;return r.a.createElement("form",{className:"form-login col"},r.a.createElement("h2",null,"Login"),r.a.createElement("input",{type:"email",id:"email",name:"email",onChange:this.handleChange,value:t,"data-testid":"email-input",placeholder:"Digite seu email"}),r.a.createElement("input",{type:"password",id:"password",name:"password",onChange:this.validateFields,"data-testid":"password-input",placeholder:"Digite sua senha"}),r.a.createElement("button",{type:"button",disabled:n,onClick:this.loginValidation},"Entrar"))}}]),n}(a.Component),x=Object(l.b)(null,(function(e){return{userLoginDispatch:function(t){return e(function(e){return{type:"LOGIN",email:e}}(t))}}}))(g),y=n(30),O=n.n(y),w=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(E.a)({},a,r))},e.sendInfo=function(){var t=Object(f.a)(A.a.mark((function t(n){var a,r,i,c,l,o;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props,r=a.expensesDispatch,i=a.importNextId,c=e.state,l=c.editMode,o=c.id,n.preventDefault(),t.t0=e,t.t1=l?o:i,t.next=7,b();case 7:t.t2=t.sent,t.t3={id:t.t1,exchangeRates:t.t2},t.t4=function(){return r(e.state)},t.t0.setState.call(t.t0,t.t3,t.t4),e.setState({value:"",description:"",currency:"USD",method:"",tag:"",id:"",exchangeRates:[],editMode:!1});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.editMode=function(){var t=Object(f.a)(A.a.mark((function t(n){var a;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(a=e.props.importEditExpense).length>0&&0===n.importEditExpense.length&&e.setState({value:a[0].value,description:a[0].description,currency:a[0].currency,method:a[0].method,tag:a[0].tag,id:a[0].id,editMode:!0});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={value:"",description:"",currency:"USD",method:"",tag:"",id:"",exchangeRates:[],editMode:!1},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e){this.editMode(e)}},{key:"render",value:function(){var e=this.props,t=e.importLoadCurrencies,n=e.importEditExpense,a=this.state,i=a.value,c=a.description,l=a.currency,o=a.method,u=a.tag;return r.a.createElement("div",{className:"container-expense col"},r.a.createElement("form",{className:"form-expense row"},r.a.createElement("label",{htmlFor:"value"},"Valor:",r.a.createElement("input",{type:"number","data-testid":"value-input",id:"value",name:"value",value:i,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"description"},"Descri\xe7\xe3o:",r.a.createElement("input",{type:"text","data-testid":"description-input",id:"description",name:"description",value:c,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"currency"},"Moeda:",r.a.createElement("select",{id:"currency","data-testid":"currency-input",name:"currency",value:l,onChange:this.handleChange},t.map((function(e,t){return r.a.createElement("option",{key:t},e)})))),r.a.createElement("label",{htmlFor:"method"},"M\xe9todo de Pagamento:",r.a.createElement("select",{id:"method","data-testid":"method-input",name:"method",value:o,onChange:this.handleChange},r.a.createElement("option",null,"Dinheiro"),r.a.createElement("option",null,"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",null,"Cart\xe3o de d\xe9bito"))),r.a.createElement("label",{htmlFor:"category"},"Categoria:",r.a.createElement("select",{id:"category","data-testid":"tag-input",name:"tag",value:u,onChange:this.handleChange},r.a.createElement("option",null,"Alimenta\xe7\xe3o"),r.a.createElement("option",null,"Lazer"),r.a.createElement("option",null,"Trabalho"),r.a.createElement("option",null,"Transporte"),r.a.createElement("option",null,"Sa\xfade"))),r.a.createElement("button",{type:"submit",onClick:this.sendInfo},0===n.length?"Adicionar Despesa":"Salvar Despesa")))}}]),n}(r.a.Component);w.defaultProps={importEditExpense:[]};var j=Object(l.b)((function(e){return{importLoadCurrencies:e.wallet.currencies,importNextId:e.wallet.expenses.length,importEditExpense:e.wallet.editExpense}}),(function(e){return{expensesDispatch:function(t){return e(function(e){return{type:"EXPENSES",listExpenses:e}}(t))}}}))(w),D=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).delExpense=function(t){var n=t.target.id;(0,e.props.deleteExpenseDispatch)(n)},e.editExpense=function(t){var n=t.target.id;(0,e.props.editExpenseDispatch)(n)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.importExpenses;return r.a.createElement("table",{className:"table-container col"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"table-container-th row"},r.a.createElement("th",null,"Descri\xe7\xe3o"),r.a.createElement("th",null,"Tag"),r.a.createElement("th",null,"M\xe9todo de pagamento"),r.a.createElement("th",null,"Valor"),r.a.createElement("th",null,"Moeda"),r.a.createElement("th",null,"C\xe2mbio utilizado"),r.a.createElement("th",null,"Valor convertido"),r.a.createElement("th",null,"Moeda de convers\xe3o"),r.a.createElement("th",null,"Editar/Excluir"))),r.a.createElement("tbody",null,t.map((function(t){var n=Number(t.exchangeRates[t.currency].ask),a=Number(t.value),i=n*a,c=t.exchangeRates[t.currency].name.split("/");return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.description),r.a.createElement("td",null,t.tag),r.a.createElement("td",null,t.method),r.a.createElement("td",null,a.toFixed(2)),r.a.createElement("td",null,c[0]),r.a.createElement("td",null,n.toFixed(2)),r.a.createElement("td",null,i.toFixed(2)),r.a.createElement("td",null,"Real"),r.a.createElement("td",null,r.a.createElement("button",{id:t.id,type:"button","data-testid":"edit-btn",onClick:e.editExpense},"Editar"),r.a.createElement("button",{id:t.id,type:"button","data-testid":"delete-btn",onClick:e.delExpense},"Excluir")))}))))}}]),n}(a.Component),C=Object(l.b)((function(e){return{importExpenses:e.wallet.expenses}}),(function(e){return{deleteExpenseDispatch:function(t){return e(function(e){return{type:"DELETE",id:e}}(t))},editExpenseDispatch:function(t){return e(function(e){return{type:"EDIT",id:e}}(t))}}}))(D),k=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).sumExpenses=function(){var t=e.props.importExpenses;return t.length>0?t.map((function(e){var t=e.value,n=e.currency;return t*e.exchangeRates[n].ask})).reduce((function(e,t){return e+=t})).toFixed(2):0},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.importThunkCurrency)()}},{key:"render",value:function(){var e=this.props.emailState;return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"container-header row"},r.a.createElement("figure",{className:"header-logo row"},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{src:O.a,alt:"Logo"}))),r.a.createElement("h1",null,"TRYBE WALLET"),r.a.createElement("div",{className:"header-data row"},r.a.createElement("p",null,"Email :",r.a.createElement("span",{"data-testid":"email-field"},e)),r.a.createElement("p",null,"Despesa Total : R$",r.a.createElement("span",{"data-testid":"total-field"},this.sumExpenses())),r.a.createElement("span",{"data-testid":"header-currency-field"},"BRL"))),r.a.createElement(j,null),r.a.createElement(C,null))}}]),n}(r.a.Component),S=Object(l.b)((function(e){return{emailState:e.user.email,importExpenses:e.wallet.expenses}}),(function(e){return{importThunkCurrency:function(t){return e(function(){var e=Object(f.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"REQUEST"}),e.next=3,b();case 3:return n=e.sent,e.abrupt("return",t(v(n)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(k),M=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:x}),r.a.createElement(m.a,{path:"/carteira",component:S}))}}]),n}(a.Component),R=n(13),I=n(31),T=n(32),U=n(6),Q={email:""};var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(U.a)(Object(U.a)({},e),{},{email:t.email});default:return e}},B=n(33),F={currencies:[],expenses:[],editExpense:[]};var G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,n=e.expenses,a=t.curr,r=t.listExpenses,i=t.id;switch(t.type){case"REQUEST":return Object(U.a)({},e);case"SUCCESS":return Object(U.a)(Object(U.a)({},e),{},{currencies:Object.keys(a).filter((function(e){return"USDT"!==e}))});case"EXPENSES":return Object(U.a)(Object(U.a)({},e),{},{expenses:[].concat(Object(B.a)(n),[r]),editExpense:[]});case"DELETE":return Object(U.a)(Object(U.a)({},e),{},{expenses:n.filter((function(e){return e.id!==+i})),editExpense:[]});case"EDIT":return Object(U.a)(Object(U.a)({},e),{},{editExpense:n.filter((function(e){return e.id===+i})),expenses:n.filter((function(e){return e.id!==+i}))});default:return e}},L=Object(R.combineReducers)({wallet:G,user:N}),P=Object(R.createStore)(L,Object(T.composeWithDevTools)(Object(R.applyMiddleware)(I.a)));n(49),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(l.a,{store:P},r.a.createElement(o.a,null,r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.32d4506e.chunk.js.map