(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),o=(a(9),a(1)),u=function(e){return l.a.createElement("div",null,l.a.createElement("label",null,e.label+" "),l.a.createElement("input",{type:"number",value:e.value,placeholder:e.placeholder,onChange:e.handleChange}))},i=function(e){return l.a.createElement("button",{onClick:e.onClick},e.label)},m=(a(10),function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(),m=Object(o.a)(r,2),s=m[0],h=m[1],d=Object(n.useState)(),E=Object(o.a)(d,2),v=E[0],b=E[1],g=Object(n.useState)(),w=Object(o.a)(g,2),p=w[0],f=w[1],C=function(e){return e<18.5?"Underweight":e>=18.5&&e<24.9?"Normal weight":e>=25&&e<29.9?"Overweight":e>=30?"Obesity":void 0};return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Welcome to our BMI Calculator!"),l.a.createElement("div",{className:"row"},l.a.createElement(u,{label:"Height",placeholder:"Enter height in cm",handleChange:function(e){return h(e.target.value)},value:s})),l.a.createElement("div",{className:"row"},l.a.createElement(u,{label:"Weight",placeholder:"Enter weight in kg",handleChange:function(e){return c(e.target.value)},value:a})),l.a.createElement("div",{className:"rowCal"},l.a.createElement(i,{label:"CALCULATE",onClick:function(){var e=(a/Math.pow(s/100,2)).toFixed(2);b(e);var t=C(e);f(t),h(""),c("")}})),l.a.createElement("div",{className:"row"},isNaN(v)?null:l.a.createElement("h3",null,"Your BMI = ",v)),l.a.createElement("div",{className:"row"},l.a.createElement("h3",null,p))))}),s=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),c(e),r(e)})};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null)),document.getElementById("root")),s()}],[[4,1,2]]]);
//# sourceMappingURL=main.b981a94a.chunk.js.map