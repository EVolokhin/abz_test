(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{21:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),s=n.n(r),c=n(24),o=n.n(c),i=n(28),u=n(9),l=n(3),p=n.n(l),h=n(13),d=n(6),m=function(e){var t=e.name;return Object(a.jsx)("li",{className:"header__link",children:Object(a.jsx)("a",{href:"#signUp",children:" ".concat(t," ")})})},j=n.p+"static/media/menu icon.c551a7a2.svg",b=function(e){var t=e.toggleOpen;return Object(a.jsx)("button",{className:"header__burger",type:"button",onClick:t,children:Object(a.jsx)("img",{src:j,alt:"burgerimage"})})},x=["About me","Relationships","Requirements","Users","Sign Up"],f=["About me","Relationships","Users","Sign Up","Terms and Conditions"],O=["How it works","Partnership","Help","Leave testimonial","Contact us"],g=["How it works","Partnership","Help","Leave testimonial","Contact us"],v=n.p+"static/media/logo.d190168a.svg",_=(n(21),function(e){var t=e.toggleOpen;return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("img",{src:v,alt:"site-logo",className:"header__img"}),Object(a.jsx)("ul",{className:"header__list",children:x.map((function(e){return Object(a.jsx)(m,{name:e},e)}))}),Object(a.jsx)(b,{toggleOpen:t})]})}),y=function(e){var t=e.text,n=e.name,r=e.type,s=e.action,c=e.className;return Object(a.jsx)("button",{onClick:s,name:n,type:r,className:c,children:t})},w=(n(35),function(){return Object(a.jsxs)("section",{className:"assignment",children:[Object(a.jsx)("h1",{className:"assignment__header",children:"test assignment for frontend developer position"}),Object(a.jsxs)("p",{className:"assignment__text",children:["We kindly remind you that your test assignment should be submitted",Object(a.jsx)("br",{}),"as a link to github/bitbucket repository. Please be patient, we consider",Object(a.jsx)("br",{}),"and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens"]}),Object(a.jsx)(y,{text:"Sing up now",name:"assignment",type:"button",action:function(){return document.location="#signUp"},className:"assignment__button"})]})}),N=n.p+"static/media/man-laptop-v1.bdb026ef.svg",k=(n(36),function(){return Object(a.jsxs)("section",{className:"acquaintment",children:[Object(a.jsx)("h2",{className:"acquaintment__header",children:"Let's get acquainted"}),Object(a.jsx)("img",{className:"acquaintment__img",src:N,alt:"men with laptop"}),Object(a.jsxs)("div",{className:"acquaintment__container",children:[Object(a.jsx)("h3",{className:"acquaintment__text_1",children:"I am cool frontend developer"}),Object(a.jsx)("p",{className:"acquaintment__text_2",children:"We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction."}),Object(a.jsx)("p",{className:"acquaintment__text_3",children:"If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page PSD mockup into HTML5/CSS3."}),Object(a.jsx)(y,{text:"Sing up now",name:"accquaintment",type:"button",action:function(){return document.location="#signUp"},className:"acquaintment__button"})]})]})}),S="https://frontend-test-assignment-api.abz.agency/api/v1/users",C=function(){var e=Object(d.a)(p.a.mark((function e(t,n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t),n);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("".concat(a.status," - request error!!"));case 5:return e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),q=function(){var e=Object(d.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C("".concat(S,"?page=").concat(t,"&count=").concat(6));case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://frontend-test-assignment-api.abz.agency/api/v1/positions"));case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("".concat(t.status," - request Positions Failed"));case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C("".concat("https://frontend-test-assignment-api.abz.agency/api/v1/token"));case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(d.a)(p.a.mark((function e(t,n){var a,r,s,c,o,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=new FormData,r=document.querySelector('input[type="file"]'),a.append("position_id","".concat(t.position)),a.append("name","".concat(t.name)),a.append("email","".concat(t.email)),a.append("phone","".concat(t.phone)),a.append("photo",r.files[0]),e.next=10,B();case 10:return s=e.sent,c=s.token,e.next=14,C("".concat(S),{method:"POST",body:a,headers:{Token:"".concat(c)}});case 14:return o=e.sent,i=o.user_id,function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("".concat(S,"/").concat(i));case 2:n=e.sent,a=n.user,t((function(e){return[a].concat(Object(h.a)(e))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(n),e.abrupt("return",o.json());case 21:return e.prev=21,e.t0=e.catch(0),e.abrupt("return",e.t0);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(t,n){return e.apply(this,arguments)}}(),P=(n(37),function(e){var t=e.user,n=t.name,r=t.email,s=t.phone,c=t.position,o=t.photo;return Object(a.jsxs)("div",{className:"users__card user-card",title:"".concat(r),children:[Object(a.jsx)("img",{className:"user-card__photo",src:o,alt:"user"}),Object(a.jsx)("h3",{className:"user-card__name",children:n}),Object(a.jsxs)("div",{className:"user-card__profile",children:[Object(a.jsx)("span",{className:"user-card__position",children:c}),Object(a.jsx)("span",{className:"user-card__email",children:r}),Object(a.jsx)("span",{className:"user-card__phone",children:s})]})]})}),R=function(e){var t=e.users.sort((function(e,t){return t.registration_timestamp-e.registration_timestamp}));return Object(a.jsx)("div",{className:"users__container",children:t.map((function(e){return Object(a.jsx)(P,{user:e},e.id)}))})},X=(n(38),function(e){var t=e.users,n=e.usersPage,r=e.totalPages,s=e.handlePage;return Object(a.jsxs)("section",{className:"users",children:[Object(a.jsx)("h2",{className:"users__header",children:"Our cheerful users"}),Object(a.jsx)("span",{className:"users__text",children:"Attention! Sorting users by registration date"}),Object(a.jsx)(R,{users:t}),n<r&&Object(a.jsx)(y,{text:"Show more",name:"users",type:"button",action:s,className:"users__button"})]})}),F=function(e){var t=e.isHide;return Object(a.jsxs)("section",{hidden:t,children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:v,alt:"site-logo",className:"header__img"})}),Object(a.jsx)("ul",{children:f.map((function(e){return Object(a.jsx)(m,{name:e},e)}))}),Object(a.jsx)("ul",{children:O.map((function(e,t){return Object(a.jsx)(m,{name:e},e)}))}),Object(a.jsx)("ul",{children:g.map((function(e,t){return Object(a.jsx)(m,{name:e},e)}))})]})},H=n(27),T=function(e){var t=e.data,n=e.value,r=e.handleChange,s=e.onBlur,c=t.id,o=t.name,i=t.type,u=t.placeholder;return Object(a.jsxs)("div",{className:"signup-form__container",children:[Object(a.jsx)("label",{htmlFor:c,className:"signup-form__name",children:o}),Object(a.jsx)("input",{type:i,id:c,name:c,placeholder:u,value:n,onChange:r,onBlur:s,className:"signup-form__input"})]})},E=function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:n=e.sent,a=n.positions,t(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(e){var t=e.handleChange,n=e.onBlur,s=Object(r.useState)([]),c=Object(u.a)(s,2),o=c[0],i=c[1];return Object(r.useEffect)((function(){E(i)}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:"Select your position"}),Object(a.jsx)("div",{children:o.map((function(e){var r=e.id,s=e.name;return Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",id:r,name:"position",value:r,onChange:t,onBlur:n},r),Object(a.jsx)("label",{htmlFor:r,children:s}),Object(a.jsx)("br",{})]},r)}))})]})},L={name:{id:"name",name:"Name",type:"text",placeholder:"Your name"},email:{id:"email",name:"Email",type:"email",placeholder:"Your email"},phone:{id:"phone",name:"Phone number",type:"string",placeholder:"+380  XX  XXX  XX  XX"},position:{id:"position",name:"Select your position",type:"radio"},photo:{id:"photo",name:"Photo",type:"file",placeholder:"Upload your photo"}},A=/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,J=function(e){var t={},n=document.querySelector('input[type="file"]'),a=e.photo?n.files[0].size:0;return e.name?(e.name.length<2||e.name.length>60)&&(t.name="Username should contain 2-60 characters"):t.name="Required",e.email?e.email.length<2||e.email.length>100?t.email="Username should be valid and contain 2-100 characters":A.test(e.email)||(t.email="Invalid email"):t.email="Required",e.phone?/^[+]{0,1}380([0-9]{9})$/i.test(e.phone)||(t.phone="Invalid number"):t.phone="Required",e.position||(t.position="Required"),e.photo||(t.photo="Required"),!e.photo||e.photo.toLowerCase().includes("jpg")||e.photo.toLowerCase().includes("jpeg")||(t.photo="The photo format must be jpeg/jpg type"),a/1024>5120&&(t.photo="The photo size must not be greater than 5 Mb"),t},$=function(e){var t=e.setUsers,n=Object(H.a)({initialValues:{name:"",email:"",phone:"",position:"",photo:""},validate:J,onSubmit:function(e){alert(JSON.stringify(e,null,2)),U(e,t),n.resetForm()}});return Object(a.jsxs)("form",{children:[Object(a.jsx)(T,{data:L.name,value:n.values.name,handleChange:n.handleChange,onBlur:n.handleBlur},L.name.id),n.touched.name&&n.errors.name?Object(a.jsx)("div",{children:n.errors.name}):null,Object(a.jsx)(T,{data:L.email,value:n.values.email,handleChange:n.handleChange,onBlur:n.handleBlur},L.email.id),n.touched.email&&n.errors.email?Object(a.jsx)("div",{children:n.errors.email}):null,Object(a.jsx)(T,{data:L.phone,value:n.values.phone,handleChange:n.handleChange,onBlur:n.handleBlur},L.phone.id),n.touched.phone&&n.errors.phone?Object(a.jsx)("div",{children:n.errors.phone}):null,Object(a.jsx)(I,{value:n.values.position,handleChange:n.handleChange,onBlur:n.handleBlur},L.position.id),n.touched.position&&n.errors.position?Object(a.jsx)("div",{children:n.errors.position}):null,Object(a.jsx)(T,{data:L.photo,value:n.values.photo,handleChange:n.handleChange,onBlur:n.handleBlur},L.photo.id),n.touched.photo&&n.errors.photo?Object(a.jsx)("div",{children:n.errors.photo}):null,Object(a.jsx)(y,{text:"Sign up now",name:"form button",type:"submit",action:n.handleSubmit,className:"signup-form__button"})]})},M=(n(40),function(e){var t=e.setUsers;return Object(a.jsxs)("section",{className:"signup-form",id:"signUp",children:[Object(a.jsx)("h2",{className:"signup-form__header",children:"Register to get a work"}),Object(a.jsx)("span",{className:"signup-form__text",children:"Attention! After successful registration and alert, update the list of users in the block from the top"}),Object(a.jsx)($,{setUsers:t})]})}),W=(n(41),function(){var e=Object(d.a)(p.a.mark((function e(t,n,a){var r,s,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(t);case 2:r=e.sent,s=r.users,c=r.total_pages,console.log(s),n((function(e){return[].concat(Object(h.a)(e),Object(h.a)(s))})),a(c);case 8:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()),Y=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],c=Object(r.useState)(1),o=Object(u.a)(c,2),i=o[0],l=o[1],p=Object(r.useState)(0),h=Object(u.a)(p,2),d=h[0],m=h[1],j=Object(r.useState)(!0),b=Object(u.a)(j,2),x=b[0],f=b[1];Object(r.useEffect)((function(){W(i,s,m)}),[i]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(_,{toggleOpen:function(){f(!x)}}),Object(a.jsx)(F,{isHide:x}),Object(a.jsx)(w,{}),Object(a.jsx)(k,{}),Object(a.jsx)(X,{users:n,usersPage:i,totalPages:d,handlePage:function(){l((function(e){return e+1}))}}),Object(a.jsx)(M,{setUsers:s}),Object(a.jsx)("footer",{children:"\xa9 abz.agency specially for the test task"})]})};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(i.a,{children:Object(a.jsx)(Y,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.51c05422.chunk.js.map