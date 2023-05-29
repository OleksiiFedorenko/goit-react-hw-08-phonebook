"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[734],{4938:function(e,a,r){r.d(a,{FB:function(){return o},ie:function(){return u},k:function(){return c}});var s=r(8007),n=/^[a-zA-Z\u0430-\u044f\u0491\u0454\u0456\u0457\u0410-\u042f\u0490\u0404\u0406\u0407]+(([' -][a-zA-Z\u0430-\u044f\u0491\u0454\u0456\u0457\u0410-\u042f\u0490\u0404\u0406\u0407 ])?[a-zA-Z\u0430-\u044f\u0491\u0454\u0456\u0457\u0410-\u042f\u0490\u0404\u0406\u0407]*)*$/,t="Name may contain only letters, apostrophe, dash and spaces. For example Jacob Mercer, Charles de Castelmore d'Artagnan",i=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,l=/.{8,}/,d="Password must be at least 8 characters",c=s.Ry().shape({email:s.Z_().matches(i,"Please enter valid email").required("Please enter your email"),password:s.Z_().matches(l,d).required("Please enter your password")}),o=s.Ry().shape({name:s.Z_().matches(n,t).required("Please enter your name"),email:s.Z_().matches(i,"Email address must include letters/digits, '@' symbol, and valid domain. Periods, underscores, hyphens can be also used. For example email@gmail.com").required("Please enter your email"),password:s.Z_().matches(l,d).required("Please enter your password")}),u=s.Ry().shape({name:s.Z_().matches(n,t).required("Please add name"),number:s.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be at least 5 digits and can contain spaces, dashes, parentheses and can start with +").required("Please add phone number")})},5734:function(e,a,r){r.r(a),r.d(a,{default:function(){return v}});var s=r(5861),n=r(4687),t=r.n(n),i=r(9434),l=r(9085),d=r(5705),c=r(5822),o=r(4938),u=r(4087),m=r(1213),h=r(2392),p=r(8208),w=r(9140),x=r(4125),f=r(4224),b=r(3329),y=function(){var e=(0,i.I0)(),a=function(){var a=(0,s.Z)(t().mark((function a(r,s){var n,i;return t().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=s.resetForm,a.prev=1,a.next=4,e((0,c.Ib)(r)).unwrap();case 4:i=a.sent,l.Am.success("Welcome back, ".concat(i.user.name,"!")),n(),a.next=14;break;case 9:if(a.prev=9,a.t0=a.catch(1),400!==a.t0.status){a.next=13;break}return a.abrupt("return",l.Am.error("The email or password is incorrect."));case 13:l.Am.error("Something went wrong. Please try agail later.");case 14:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e,r){return a.apply(this,arguments)}}();return(0,b.jsx)(u.xu,{bg:"white",p:6,rounded:"md",w:"300px",children:(0,b.jsx)(d.J9,{initialValues:{email:"",password:""},validationSchema:o.k,onSubmit:a,children:function(e){var a=e.errors,r=e.touched;return(0,b.jsx)(d.l0,{children:(0,b.jsxs)(m.g,{spacing:4,align:"flex-start",children:[(0,b.jsxs)(h.NI,{isInvalid:!!a.email&&r.email,children:[(0,b.jsx)(p.l,{htmlFor:"email",children:"Email"}),(0,b.jsx)(d.gN,{as:w.I,id:"email",name:"email",type:"email",variant:"filled"}),(0,b.jsx)(x.J1,{children:a.email})]}),(0,b.jsxs)(h.NI,{isInvalid:!!a.password&&r.password,children:[(0,b.jsx)(p.l,{htmlFor:"password",children:"Password"}),(0,b.jsx)(d.gN,{as:w.I,id:"password",name:"password",type:"text",variant:"filled"}),(0,b.jsx)(x.J1,{children:a.password})]}),(0,b.jsx)(f.z,{type:"submit",colorScheme:"blue",width:"full",children:"Log in"})]})})}})})},g=r(176),v=function(){return(0,b.jsx)(g.k,{bg:"gray.100",align:"center",justify:"center",h:"94.1vh",children:(0,b.jsx)(y,{})})}}}]);
//# sourceMappingURL=734.8b94b271.chunk.js.map