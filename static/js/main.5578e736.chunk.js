(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),s=n.n(r),i=n(23),c=n.n(i),o=n(27),u=n(13),l=n(2),p=n.n(l),d=n(7),m=n(10),h=function(e){var t=e.name,n=e.className,r=e.toggleOpen;return Object(a.jsx)("li",{className:n,children:Object(a.jsx)("a",{href:"#signUp",onClick:r,children:" ".concat(t," ")})})},j=n.p+"static/media/menu icon.c551a7a2.svg",b=function(e){var t=e.toggleOpen;return Object(a.jsx)("button",{className:"header__burger",type:"button",onClick:t,children:Object(a.jsx)("img",{src:j,alt:"burgerimage"})})},f=["About me","Relationships","Requirements","Users","Sign Up"],x=["About me","Relationships","Users","Sign Up","Terms and Conditions"],g=["How it works","Partnership","Help","Leave testimonial","Contact us"],O=["How it works","Partnership","Help","Leave testimonial","Contact us"],_=n.p+"static/media/logo.d190168a.svg",v=(n(34),function(e){var t=e.toggleOpen;return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("img",{src:_,alt:"site-logo",className:"header__img"}),Object(a.jsx)("ul",{className:"header__list",children:f.map((function(e){return Object(a.jsx)(h,{name:e,className:"header__link"},e)}))}),Object(a.jsx)(b,{toggleOpen:t})]})}),N=function(e){var t=e.text,n=e.name,r=e.type,s=e.action,i=e.className;return Object(a.jsx)("button",{onClick:s,name:n,type:r,className:i,children:t})},y=(n(35),function(){return Object(a.jsxs)("section",{className:"assignment",children:[Object(a.jsx)("h1",{className:"assignment__header",children:"test assignment for frontend developer position"}),Object(a.jsx)("p",{className:"assignment__text",children:"We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens"}),Object(a.jsx)(N,{text:"Sing up now",name:"assignment",type:"button",action:function(){return document.location="#signUp"},className:"assignment__button"})]})}),w=n.p+"static/media/man-laptop-v1.bdb026ef.svg",k=(n(36),function(){return Object(a.jsxs)("section",{className:"acquaintment",children:[Object(a.jsx)("h2",{className:"acquaintment__header",children:"Let's get acquainted"}),Object(a.jsx)("img",{className:"acquaintment__img",src:w,alt:"men with laptop"}),Object(a.jsxs)("div",{className:"acquaintment__container",children:[Object(a.jsx)("h3",{className:"acquaintment__text-1",children:"I am cool frontend developer"}),Object(a.jsx)("p",{className:"acquaintment__text-2",children:"We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction."}),Object(a.jsx)("p",{className:"acquaintment__text-3",children:"If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page PSD mockup into HTML5/CSS3."}),Object(a.jsx)(N,{text:"Sing up now",name:"accquaintment",type:"button",action:function(){return document.location="#signUp"},className:"acquaintment__button"})]})]})}),q="https://frontend-test-assignment-api.abz.agency/api/v1/users",S=function(){var e=Object(d.a)(p.a.mark((function e(t,n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t),n);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("".concat(a.status," - request error!!"));case 5:return e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(p.a.mark((function e(t,n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S("".concat(q,"?page=").concat(t,"&count=").concat(n));case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),alert("Users request fail"),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://frontend-test-assignment-api.abz.agency/api/v1/positions"));case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("".concat(t.status," - request Positions Failed"));case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S("".concat("https://frontend-test-assignment-api.abz.agency/api/v1/token"));case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),alert("Token request fail"),console.log(e.t0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(d.a)(p.a.mark((function e(t,n){var a,r,s,i,c,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=new FormData,r=document.querySelector('input[type="file"]'),a.append("position_id","".concat(t.position)),a.append("name","".concat(t.name)),a.append("email","".concat(t.email)),a.append("phone","".concat(t.phone)),a.append("photo",r.files[0]),e.next=10,B();case 10:return s=e.sent,i=s.token,e.next=14,S("".concat(q),{method:"POST",body:a,headers:{Token:"".concat(i)}});case 14:return c=e.sent,o=c.user_id,function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S("".concat(q,"/").concat(o));case 2:n=e.sent,a=n.user,t((function(e){return[a].concat(Object(u.a)(e))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(n),e.abrupt("return",c);case 21:return e.prev=21,e.t0=e.catch(0),alert("SignupForm post error"),console.log(e.t0),e.abrupt("return",e.t0);case 26:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(t,n){return e.apply(this,arguments)}}(),U=n(4),P=n.n(U),E=(P.a.shape({name:P.a.string.isRequired,email:P.a.string.isRequired,phone:P.a.string.isRequired,position:P.a.string.isRequired,photo:P.a.string.isRequired}.isRequired).isRequired,n(39),function(e){var t=e.user,n=t.name,r=t.email,s=t.phone,i=t.position,c=t.photo;return Object(a.jsxs)("div",{className:"users__card user-card",title:"".concat(r),children:[Object(a.jsx)("img",{className:"user-card__photo",src:c,alt:"user"}),Object(a.jsx)("h3",{className:"user-card__name",children:n}),Object(a.jsxs)("div",{className:"user-card__profile",children:[Object(a.jsx)("span",{className:"user-card__position",children:i}),Object(a.jsx)("span",{className:"user-card__email",children:r}),Object(a.jsx)("span",{className:"user-card__phone",children:s})]})]})}),X=function(e){var t=e.users.sort((function(e,t){return t.registration_timestamp-e.registration_timestamp}));return Object(a.jsx)("div",{className:"users__container",children:t.map((function(e){return Object(a.jsx)(E,{user:e},e.id)}))})},F=(n(40),function(e){var t=e.users,n=e.usersPage,r=e.totalPages,s=e.handlePage;return Object(a.jsxs)("section",{className:"users",children:[Object(a.jsx)("h2",{className:"users__header",children:"Our cheerful users"}),Object(a.jsx)("span",{className:"users__text",children:"Attention! Sorting users by registration date"}),Object(a.jsx)(X,{users:t}),n<r&&Object(a.jsx)(N,{text:"Show more",name:"users",type:"button",action:s,className:"users__button"})]})}),T=(n(41),function(e){var t=e.isHide,n=e.toggleOpen;return Object(a.jsxs)("section",{hidden:t,className:"nav-menu",children:[Object(a.jsx)("ul",{className:"nav-menu__list",children:x.map((function(e){return Object(a.jsx)(h,{name:e,className:"nav-menu__link",toggleOpen:n},e)}))}),Object(a.jsx)("ul",{className:"nav-menu__list",children:g.map((function(e,t){return Object(a.jsx)(h,{name:e,className:"nav-menu__link",toggleOpen:n},e)}))}),Object(a.jsx)("ul",{className:"nav-menu__list",children:O.map((function(e,t){return Object(a.jsx)(h,{name:e,className:"nav-menu__link",toggleOpen:n},e)}))})]})}),H=n(26),L=(P.a.shape({id:P.a.string.isRequired,name:P.a.string.isRequired,type:P.a.string.isRequired}.isRequired).isRequired,P.a.string.isRequired,P.a.func.isRequired,P.a.func.isRequired,function(e){var t=e.data,n=e.value,r=e.handleChange,s=e.onBlur,i=t.id,c=t.name,o=t.type,u=t.placeholder;return Object(a.jsxs)("div",{className:"signup-form__container",children:[Object(a.jsx)("label",{htmlFor:i,className:"signup-form__name",children:c}),Object(a.jsx)("input",{type:o,id:i,name:i,placeholder:u,value:n,onChange:r,onBlur:s,className:"signup-form__input"})]})}),I=(n(43),function(e){var t=e.data,n=e.value,r=e.handleChange,s=e.onBlur,i=t.id,c=t.name,o=t.type,u=t.placeholder;return Object(a.jsxs)("div",{className:"signup-form__file file",children:[Object(a.jsx)("span",{className:"file__name",children:c}),Object(a.jsxs)("div",{className:"file__wrapper",children:[Object(a.jsxs)("label",{htmlFor:i,className:"file__input-button",children:[Object(a.jsx)("span",{className:"file__input-text",children:""!==n?n:"Upload your photo"}),Object(a.jsx)("span",{className:"file__input-wrapper",children:"Browse"})]}),Object(a.jsx)("input",{type:o,id:i,name:i,placeholder:u,value:n,onChange:r,onBlur:s,className:"file__input"})]})]})}),W=function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:n=e.sent,a=n.positions,t(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=s.a.memo((function(e){var t=e.handleChange,n=e.onBlur,s=Object(r.useState)([]),i=Object(m.a)(s,2),c=i[0],o=i[1];return Object(r.useEffect)((function(){W(o)}),[]),Object(a.jsxs)("div",{className:"signup-form__radio",children:[Object(a.jsx)("p",{className:"signup-form__radio-text",children:"Select your position"}),Object(a.jsx)("div",{className:"signup-form__radio-container",children:c.map((function(e){var r=e.id,s=e.name;return Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",id:r,name:"position",value:r,onChange:t,onBlur:n,className:"signup-form__radio-input"},r),Object(a.jsx)("label",{htmlFor:r,children:s}),Object(a.jsx)("br",{})]},r)}))})]})})),J={name:{id:"name",name:"Name",type:"text",placeholder:"Your name"},email:{id:"email",name:"Email",type:"email",placeholder:"Your email"},phone:{id:"phone",name:"Phone number",type:"string",placeholder:"+380  XX  XXX  XX  XX"},position:{id:"position",name:"Select your position",type:"radio"},photo:{id:"photo",name:"Photo",type:"file",placeholder:"Upload your photo"}},$=/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,M=function(e){var t={},n=document.querySelector('input[type="file"]'),a=e.photo?n.files[0].size:0;return e.name?(e.name.length<2||e.name.length>60)&&(t.name="Username should contain 2-60 characters"):t.name="Required",e.email?e.email.length<2||e.email.length>100?t.email="Username should be valid and contain 2-100 characters":$.test(e.email)||(t.email="Invalid email"):t.email="Required",e.phone?/^[+]{0,1}380([0-9]{9})$/i.test(e.phone)||(t.phone="Invalid number"):t.phone="Required",e.position||(t.position="Required"),e.photo||(t.photo="Required"),!e.photo||e.photo.toLowerCase().includes("jpg")||e.photo.toLowerCase().includes("jpeg")||(t.photo="The photo format must be jpeg/jpg type"),a/1024>5120&&(t.photo="The photo size must not be greater than 5 Mb"),t},Y=(n(44),function(e){var t=e.setUsers,n=Object(H.a)({initialValues:{name:"",email:"",phone:"",position:"",photo:""},validate:M,onSubmit:function(e){alert(JSON.stringify(e,null,2)),z(e,t),n.resetForm()}});return Object(a.jsxs)("form",{className:"signup__form",children:[Object(a.jsx)(L,{data:J.name,value:n.values.name,handleChange:n.handleChange,onBlur:n.handleBlur,error:n.errors.name},J.name.id),n.touched.name&&n.errors.name?Object(a.jsx)("div",{className:"signup-form__error",children:n.errors.name}):null,Object(a.jsx)(L,{data:J.email,value:n.values.email,handleChange:n.handleChange,onBlur:n.handleBlur,error:n.errors.email},J.email.id),n.touched.email&&n.errors.email?Object(a.jsx)("div",{className:"signup-form__error",children:n.errors.email}):null,Object(a.jsx)(L,{data:J.phone,value:n.values.phone,handleChange:n.handleChange,onBlur:n.handleBlur,error:n.errors.phone},J.phone.id),n.touched.phone&&n.errors.phone?Object(a.jsx)("div",{className:"signup-form__error",children:n.errors.phone}):null,Object(a.jsx)(A,{value:n.values.position,handleChange:n.handleChange,onBlur:n.handleBlur},J.position.id),n.touched.position&&n.errors.position?Object(a.jsx)("div",{className:"signup-form__error",children:n.errors.position}):null,Object(a.jsx)(I,{data:J.photo,value:n.values.photo,handleChange:n.handleChange,onBlur:n.handleBlur,error:n.errors.photo},J.photo.id),n.touched.photo&&n.errors.photo?Object(a.jsx)("div",{className:"signup-form__error",children:n.errors.photo}):null,Object(a.jsx)(N,{text:"Sing up now",name:"form button",type:"submit",action:n.handleSubmit,className:"signup-form__button"})]})}),D=(n(45),function(e){var t=e.setUsers;return Object(a.jsxs)("section",{className:"signup",id:"signUp",children:[Object(a.jsx)("h2",{className:"signup__header",children:"Register to get a work"}),Object(a.jsx)("span",{className:"signup__text",children:"Attention! After successful registration and alert, update the list of users in the block from the top"}),Object(a.jsx)(Y,{setUsers:t})]})}),G=(n(46),function(){var e=Object(r.useState)([]),t=Object(m.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)(1),c=Object(m.a)(i,2),o=c[0],u=c[1],l=Object(r.useState)(0),h=Object(m.a)(l,2),j=h[0],b=h[1],f=Object(r.useState)(!0),x=Object(m.a)(f,2),g=x[0],O=x[1],_=Object(r.useState)(6),N=Object(m.a)(_,2),w=N[0],q=N[1];window.addEventListener("resize",(function(){var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;e<400&&q(3),e>410&&q(6)})),Object(r.useEffect)((function(){V(o,s,b,w,q)}),[o]),Object(r.useEffect)(Object(d.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(o,w);case 2:t=e.sent,n=t.users,a=t.total_pages,s(n),b(a);case 7:case"end":return e.stop()}}),e)}))),[w]);var S=function(){O(!g)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v,{toggleOpen:S}),Object(a.jsx)(T,{isHide:g,toggleOpen:S}),Object(a.jsx)(y,{}),Object(a.jsx)(k,{}),Object(a.jsx)(F,{users:n,usersPage:o,totalPages:j,handlePage:function(){u((function(e){return e+1}))}}),Object(a.jsx)(D,{setUsers:s}),Object(a.jsx)("footer",{className:"footer",children:"\xa9 abz.agency specially for the test task"})]})}),V=function(){var e=Object(d.a)(p.a.mark((function e(t,n,a,r){var s,i,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t,r);case 2:s=e.sent,i=s.users,c=s.total_pages,n((function(e){return[].concat(Object(u.a)(e),Object(u.a)(i))})),a(c);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}();c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(o.a,{children:Object(a.jsx)(G,{})})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.5578e736.chunk.js.map