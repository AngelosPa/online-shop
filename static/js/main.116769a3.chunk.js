(this["webpackJsonponline-shop"]=this["webpackJsonponline-shop"]||[]).push([[0],{14:function(e,c,t){},15:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),i=t(6),r=t.n(i),a=t(8),o=t(2),j=t(7),l=t(0),d=function(e){var c=e.info,t=e.addToCart,n=c.id,s=c.productName,i=c.icon,r=c.price,a=c.inventory;return Object(l.jsxs)("li",{children:[s," ",Object(l.jsx)("i",{children:i}),Object(l.jsxs)("h5",{children:[r,"\u20ac"]}),Object(l.jsxs)("h6",{children:[a," items in stock"]}),Object(l.jsx)("button",{disabled:0===a,onClick:function(){console.log(c),t(c)},children:a>0?"Add to cart":"Sold out"})]},n)},u=function(e){var c=e.data,t=e.addToCart,n=c.map((function(e,c){return Object(l.jsx)(d,{info:e,addToCart:t},c)}));return Object(l.jsx)(s.a.Fragment,{children:Object(l.jsx)("ul",{children:n})})},b=function(){var e=Object(n.useState)(0),c=Object(o.a)(e,2),t=c[0],s=c[1],i=Object(n.useState)(j),r=Object(o.a)(i,2),d=r[0],b=(r[1],Object(n.useState)("")),h=Object(o.a)(b,2),O=h[0],m=h[1],x=Object(n.useState)([]),p=Object(o.a)(x,2),f=p[0],v=p[1],N=Object(n.useState)([]),y=Object(o.a)(N,2),g=y[0],S=y[1],C=function(){var e=O.toLowerCase().trim(),c=e.length;if(0===c)console.log("input",c),v([]);else{var t=d.filter((function(t){return t.productName.slice(0,c)===e}));v(t)}};return Object(l.jsxs)("div",{className:"hero-section",children:[Object(l.jsxs)("nav",{children:[Object(l.jsx)("div",{className:"hamburgers-menus",children:Object(l.jsxs)("div",{className:"hamburgerstyle-menu",children:[Object(l.jsx)("div",{className:"first-l"}),Object(l.jsx)("div",{className:"sec-l"}),Object(l.jsx)("div",{className:"thr-l"})]})}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",children:"online shops"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",children:"contact us"})}),Object(l.jsx)("li",{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){console.log(g);var e=g.reduce((function(e,c){return e+c.price}),0);s(e),console.log(e)},children:"Total bill"})," ",Object(l.jsxs)("h6",{children:[t,"\u20ac"]})]})})]})]}),Object(l.jsx)("h2",{children:"search for the products of your dreams "}),Object(l.jsx)("div",{className:"searchbarteam",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault()},class:"searchBox",children:[Object(l.jsx)("input",{type:"text",onChange:function(e){m((function(){return e.target.value})),C()},value:O,className:"searchInput",placeholder:"search ..."}),Object(l.jsx)("input",{type:"submit",value:"SEARCH",className:"searchButton"})]})}),Object(l.jsxs)("div",{className:"space-for-results",children:[" ",Object(l.jsx)(u,{data:f,addToCart:function(e){S((function(c){return[].concat(Object(a.a)(c),[e])}))}})]})]})},h=function(){return Object(l.jsxs)("div",{className:"mainmenu",children:[Object(l.jsx)("div",{className:"item",children:"gifts"}),Object(l.jsx)("div",{className:"item",children:"for the kids"}),Object(l.jsx)("div",{className:"item",children:"for the car"}),Object(l.jsx)("div",{className:"item",children:"beauty products"}),Object(l.jsx)("div",{className:"item",children:"technology"}),Object(l.jsx)("div",{className:"item",children:"wellness and beauty"}),Object(l.jsx)("div",{className:"item",children:"Sports"})]})},O=function(e){e.info,e.addToCart;return Object(l.jsx)("footer",{children:Object(l.jsxs)("h6",{children:["All copyrights reserved \xae"," ",Object(l.jsx)("span",{className:"year",children:(new Date).getFullYear()}),Object(l.jsx)("a",{href:"#",children:"contact us"})]})})},m=(t(14),function(){return Object(l.jsxs)("div",{className:"body-container",children:[Object(l.jsx)(b,{}),Object(l.jsx)(h,{}),Object(l.jsx)(O,{})]})});r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"id":0,"productName":"apple","icon":"\ud83c\udf4f","price":3,"inventory":10,"_img":"./img/food.jpeg"},{"id":1,"productName":"watermelon","icon":"\ud83c\udf49","price":90,"inventory":3},{"id":2,"productName":"pizza","icon":"\ud83c\udf55","price":10,"inventory":100},{"id":3,"productName":"salad","icon":"\ud83e\udd57","price":40,"inventory":0},{"id":4,"productName":"ice cream","icon":"\ud83c\udf66","price":7,"inventory":66},{"id":5,"productName":"water","icon":"\ud83e\uddca","price":10,"inventory":0},{"id":6,"productName":"sushi","icon":"\ud83c\udf63","price":33,"inventory":3}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.116769a3.chunk.js.map