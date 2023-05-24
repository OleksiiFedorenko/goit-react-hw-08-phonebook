"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{1983:function(n,e,t){t.r(e),t.d(e,{default:function(){return X}});var r,a,o,i,s,c,l,d,u,f,m,p,x=t(9439),h=t(2791),g=t(9434),b=t(3743),Z=t(168),j=t(6444),v=j.ZP.h1(r||(r=(0,Z.Z)(["\n  margin-top: 0;\n"]))),w=j.ZP.h2(a||(a=(0,Z.Z)([""]))),y=t(184),P=function(n){var e=n.mainTitle,t=n.title;return e?(0,y.jsx)(v,{children:e}):(0,y.jsx)(w,{children:t})},k=t(6916),z=function(n){return n.contacts.items},A=function(n){return n.contacts.isLoading},C=function(n){return n.contacts.error},F=function(n){return n.filter},I=(0,k.P1)([z,F],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),S=t(8174),_=t(5705),L=t(6727),N=(0,j.ZP)(_.l0)(o||(o=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: baseline;\n  gap: 15px;\n\n  padding: 10px;\n\n  width: 360px;\n\n  border-radius: 4px;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n"]))),R=j.ZP.label(i||(i=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: baseline;\n  gap: 5px;\n\n  font-size: 18px;\n  font-weight: 500;\n"]))),T=(0,j.ZP)(_.gN)(s||(s=(0,Z.Z)(["\n  padding: 4px 6px;\n  font-size: 14px;\n  border: 1px solid grey;\n  border-radius: 4px;\n  &:focus {\n    outline: 1px solid #1d65b8;\n  }\n"]))),q=j.ZP.button(c||(c=(0,Z.Z)(["\n  background: linear-gradient(to bottom right, #4782ef, #5ad0ff);\n  border: 0;\n  border-radius: 6px;\n  color: #fff;\n  cursor: pointer;\n  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial,\n    sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 2.5;\n  outline: transparent;\n  padding: 0 1rem;\n  text-align: center;\n  transition: box-shadow 0.2s ease-in-out;\n\n  &:hover,\n  &:focus {\n    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),\n      -0.125rem -0.125rem 1rem rgba(71, 110, 239, 0.5),\n      0.125rem 0.125rem 1rem rgba(90, 208, 255, 0.5);\n  }\n\n  &:active {\n    background: linear-gradient(to bottom right, #5ad0ff, #4782ef);\n  }\n"]))),B=(0,j.ZP)(_.Bc)(l||(l=(0,Z.Z)(["\n  color: #ec3434;\n  font-size: 16px;\n  font-weight: 400;\n"]))),E=L.Ry().shape({name:L.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0491\u0454\u0456\u0457\u0410-\u042f\u0490\u0404\u0406\u0407]+(([' -][a-zA-Z\u0430-\u044f\u0491\u0454\u0456\u0457\u0410-\u042f\u0490\u0404\u0406\u0407 ])?[a-zA-Z\u0430-\u044f\u0491\u0454\u0456\u0457\u0410-\u042f\u0490\u0404\u0406\u0407]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Please add name"),phone:L.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be at least 5 digits and can contain spaces, dashes, parentheses and can start with +").required("Please add phone number")}),H=function(){var n=(0,g.I0)(),e=(0,g.v9)(z);return(0,y.jsx)(_.J9,{initialValues:{name:"",phone:""},validationSchema:E,onSubmit:function(t,r){var a=t.name,o=t.phone,i=r.resetForm,s=a.toLowerCase();e.some((function(n){return n.name.toLowerCase()===s}))?S.Am.warn("".concat(a," is already in contacts.")):(n((0,b.uK)({name:a,phone:o})),S.Am.success("".concat(a," is added to contacts.")),i())},children:(0,y.jsxs)(N,{children:[(0,y.jsxs)(R,{children:["Name",(0,y.jsx)(T,{type:"text",name:"name"}),(0,y.jsx)(B,{name:"name",component:"div"})]}),(0,y.jsxs)(R,{children:["Phone number",(0,y.jsx)(T,{type:"tel",name:"phone"}),(0,y.jsx)(B,{name:"phone",component:"div"})]}),(0,y.jsx)(q,{type:"submit",children:"Add contact"})]})})},J=t(4808),K=j.ZP.label(d||(d=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: baseline;\n  gap: 5px;\n\n  font-size: 18px;\n  font-weight: 500;\n"]))),U=j.ZP.input(u||(u=(0,Z.Z)(["\n  padding: 4px 6px;\n  font-size: 14px;\n  border: 1px solid grey;\n  border-radius: 4px;\n  &:focus {\n    outline: 1px solid #1d65b8;\n  }\n"]))),D=function(){var n=(0,g.I0)(),e=(0,g.v9)(F);return(0,y.jsxs)(K,{children:["Find contacts by name",(0,y.jsx)(U,{type:"text",value:e,onChange:function(e){n((0,J.T)(e.target.value))}})]})},G=j.ZP.button(f||(f=(0,Z.Z)(["\n  margin-left: 12px;\n  background: linear-gradient(to bottom right, #ef474753, #ff975a53);\n  border: 0;\n  border-radius: 4px;\n  color: #000;\n  cursor: pointer;\n  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial,\n    sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.5;\n  outline: transparent;\n  padding: 0 0.75rem;\n  text-align: center;\n  transition: box-shadow 0.2s ease-in-out;\n\n  &:hover,\n  &:focus {\n    color: #fff;\n    background: linear-gradient(to bottom right, #ef4747, #ff975a);\n    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),\n      -0.125rem -0.125rem 1rem rgba(239, 71, 71, 0.5),\n      0.125rem 0.125rem 1rem rgba(255, 137, 90, 0.5);\n  }\n\n  &:active {\n    color: #fff;\n    background: linear-gradient(to bottom right, #ff975a, #ef4747);\n  }\n"]))),M=function(n){var e=n.contact,t=(0,g.I0)(),r=e.id,a=e.name,o=e.phone;return(0,y.jsxs)(y.Fragment,{children:[a,": ",o,(0,y.jsx)(G,{type:"button",onClick:function(){t((0,b.GK)(r)),S.Am.error("".concat(a," was removed from contacts."))},children:"Delete"})]})},V=t(4585),$=j.ZP.p(m||(m=(0,Z.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  color: #ec3434;\n"]))),O=function(n){var e=n.message;return(0,y.jsx)($,{children:e})},Q=j.ZP.ul(p||(p=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: baseline;\n  gap: 5px;\n"]))),W=function(){var n=(0,g.v9)(z),e=(0,g.v9)(A),t=(0,g.v9)(C),r=(0,g.v9)(I);return e?(0,y.jsx)(V.Z,{}):t?(0,y.jsx)(O,{message:"Something went wrong, please try again later"}):0===r.length?(0,y.jsx)(O,{message:n.length>0?"No contacts found":"No contacts yet"}):(0,y.jsx)(Q,{children:r.map((function(n){return(0,y.jsx)("li",{children:(0,y.jsx)(M,{contact:n})},n.id)}))})},X=function(){var n=(0,h.useState)(!1),e=(0,x.Z)(n,2),t=e[0],r=e[1],a=(0,g.I0)();return(0,h.useEffect)((function(){r(!0)}),[]),(0,h.useEffect)((function(){a((0,b.yF)())}),[a]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(P,{mainTitle:"Phonebook"}),(0,y.jsx)(H,{}),(0,y.jsx)(P,{title:"Contacts"}),(0,y.jsx)(D,{}),t&&(0,y.jsx)(W,{})]})}}}]);
//# sourceMappingURL=983.4bb938bf.chunk.js.map