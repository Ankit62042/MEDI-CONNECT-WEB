"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[440],{6794:function(e,s,n){n.d(s,{Z:function(){return c}});n(2791);var r=n(6355),i=n(3495),t=n(1087),a=n(184),c=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("footer",{children:(0,a.jsxs)("div",{className:"footer",children:[(0,a.jsxs)("div",{className:"footer-links",children:[(0,a.jsx)("h3",{children:"Links"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(t.OL,{to:"/",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)(t.OL,{to:"/doctors",children:"Doctors"})}),(0,a.jsx)("li",{children:(0,a.jsx)(t.OL,{to:"/appointments",children:"Appointments"})}),(0,a.jsx)("li",{children:(0,a.jsx)(t.OL,{to:"/notifications",children:"Notifications"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.fO,{to:"/#contact",children:"Contact Us"})}),(0,a.jsx)("li",{children:(0,a.jsx)(t.OL,{to:"/profile",children:"Profile"})})]})]}),(0,a.jsxs)("div",{className:"social",children:[(0,a.jsx)("h3",{children:"Social links"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"facebook",children:(0,a.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,a.jsx)(r.tBk,{})})}),(0,a.jsx)("li",{className:"youtube",children:(0,a.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,a.jsx)(r.V2E,{})})}),(0,a.jsx)("li",{className:"instagram",children:(0,a.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,a.jsx)(r.Zf_,{})})})]})]})]})})})}},3841:function(e,s,n){n.d(s,{Z:function(){return j}});var r=n(9439),i=n(2791),t=n(7689),a=n(1087),c=n(3495),l=n(9434),o=n(5318),d=n(3853),h=n(1213),m=n(456),x=n(184),j=function(){var e=(0,i.useState)(!1),s=(0,r.Z)(e,2),n=s[0],j=s[1],u=(0,l.I0)(),p=(0,t.s0)(),f=(0,i.useState)(localStorage.getItem("token")||""),g=(0,r.Z)(f,2),v=g[0],y=(g[1],(0,i.useState)(localStorage.getItem("token")?(0,m.Z)(localStorage.getItem("token")):"")),N=(0,r.Z)(y,2),b=N[0];N[1];return(0,x.jsxs)("header",{children:[(0,x.jsxs)("nav",{className:n?"nav-active":"",children:[(0,x.jsx)("h2",{className:"nav-logo",children:(0,x.jsx)(a.OL,{to:"/",children:"MediConnect"})}),(0,x.jsxs)("ul",{className:"nav-links",children:[(0,x.jsx)("li",{children:(0,x.jsx)(a.OL,{to:"/",children:"Home"})}),(0,x.jsx)("li",{children:(0,x.jsx)(a.OL,{to:"/doctors",children:"Doctors"})}),v&&b.isAdmin&&(0,x.jsx)("li",{children:(0,x.jsx)(a.OL,{to:"/dashboard/users",children:"Dashboard"})}),v&&!b.isAdmin&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(a.OL,{to:"/appointments",children:"Appointments"})}),(0,x.jsx)("li",{children:(0,x.jsx)(a.OL,{to:"/notifications",children:"Notifications"})}),(0,x.jsx)("li",{children:(0,x.jsx)(a.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,x.jsx)("li",{children:(0,x.jsx)(c.fO,{to:"/#contact",children:"Contact Us"})}),(0,x.jsx)("li",{children:(0,x.jsx)(a.OL,{to:"/profile",children:"Profile"})})]}),v?(0,x.jsx)("li",{children:(0,x.jsx)("span",{className:"btn",onClick:function(){u((0,o.ps)({})),localStorage.removeItem("token"),p("/login")},children:"Logout"})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(a.OL,{className:"btn",to:"/login",children:"Login"})}),(0,x.jsx)("li",{children:(0,x.jsx)(a.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,x.jsxs)("div",{className:"menu-icons",children:[!n&&(0,x.jsx)(d.cur,{className:"menu-open",onClick:function(){j(!0)}}),n&&(0,x.jsx)(h.ySC,{className:"menu-close",onClick:function(){j(!1)}})]})]})}},3782:function(e,s,n){n.r(s),n.d(s,{default:function(){return v}});var r=n(2791),i=n(4942),t=n(1413),a=n(9439),c=(n(1062),n(184)),l=function(){var e=(0,r.useState)({name:"",email:"",message:""}),s=(0,a.Z)(e,2),n=s[0],l=s[1],o=function(e){var s=e.target,r=s.name,a=s.value;return l((0,t.Z)((0,t.Z)({},n),{},(0,i.Z)({},r,a)))};return(0,c.jsx)("section",{className:"register-section flex-center",id:"contact",children:(0,c.jsxs)("div",{className:"contact-container flex-center contact",children:[(0,c.jsx)("h2",{className:"form-heading",children:"Contact Us"}),(0,c.jsxs)("form",{method:"POST",action:"https://formspree.io/f/".concat({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLOUDINARY_BASE_URL:"https://api.cloudinary.com/v1_1/dxqywun29/image/upload",REACT_APP_CLOUDINARY_CLOUD_NAME:"dxqywun29",REACT_APP_CLOUDINARY_PRESET:"ml_default",REACT_APP_SERVER_DOMAIN:"http://localhost:5000/api"}.REACT_FORMIK_SECRET),className:"register-form ",children:[(0,c.jsx)("input",{type:"text",name:"name",className:"form-input",placeholder:"Enter your name",value:n.name,onChange:o}),(0,c.jsx)("input",{type:"email",name:"email",className:"form-input",placeholder:"Enter your email",value:n.email,onChange:o}),(0,c.jsx)("textarea",{type:"text",name:"message",className:"form-input",placeholder:"Enter your message",value:n.message,onChange:o,rows:"8",cols:"12"}),(0,c.jsx)("button",{type:"submit",className:"btn form-btn",children:"send"})]})]})})},o=n.p+"static/media/ProjectLogo.b604264567468fca94cb.png",d=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("section",{className:"container",children:[(0,c.jsx)("h2",{className:"page-heading about-heading",children:"About Us"}),(0,c.jsxs)("div",{className:"about",children:[(0,c.jsx)("div",{className:"hero-img",children:(0,c.jsx)("img",{src:o,alt:"hero"})}),(0,c.jsx)("div",{className:"hero-content",children:(0,c.jsx)("p",{children:"Welcome to our revolutionary healthcare solution! At MediConnect, we're dedicated to transforming the way patients and doctors interact, making healthcare more accessible and convenient for everyone. Our mission is simple: to bridge the gap between patients and healthcare providers by leveraging cutting-edge technology. Gone are the days of lengthy waits and difficult appointments. With our app, scheduling appointments is a breeze, and finding the perfect doctor for your needs is easier than ever. We believe that everyone deserves quality healthcare, regardless of their location or circumstances. That's why we've created a platform that brings healthcare right to your fingertips. Whether you're seeking routine check-ups, specialized care, or simply need medical advice, our app connects you with experienced doctors who are ready to help."})})]})]})})},h=n(6794),m=n.p+"static/media/heroimg.af977379966d27248cea.png",x=n(2610),j=n.n(x),u=function(){return(0,c.jsxs)("section",{className:"hero",children:[(0,c.jsxs)("div",{className:"hero-content",children:[(0,c.jsx)("h1",{children:(0,c.jsxs)(j(),{children:["Empowering Health, Anywhere, Anytime, ",(0,c.jsx)("br",{}),"Bringing Doctors to Your Doorstep Digitally!"]})}),(0,c.jsx)("p",{children:"Introducing our innovative app connecting doctors and patients seamlessly, regardless of location. Say goodbye to long waits and hello to convenience with appointment scheduling at your fingertips. Easily find the right doctor for your needs and book appointments effortlessly. Experience healthcare on your terms, simplified like never before!"})]}),(0,c.jsx)("div",{className:"hero-img",children:(0,c.jsx)("img",{src:m,alt:"hero"})})]})},p=n(3841),f=n(835),g=function(){return(0,c.jsxs)("section",{className:"container circles",children:[(0,c.jsxs)("div",{className:"circle",children:[(0,c.jsx)(f.ZP,{start:0,end:1e3,delay:0,enableScrollSpy:!0,scrollSpyDelay:500,children:function(e){var s=e.countUpRef;return(0,c.jsxs)("div",{className:"counter",children:[(0,c.jsx)("span",{ref:s}),"+"]})}}),(0,c.jsxs)("span",{className:"circle-name",children:["Satisfied",(0,c.jsx)("br",{}),"Patients"]})]}),(0,c.jsxs)("div",{className:"circle",children:[(0,c.jsx)(f.ZP,{start:0,end:250,delay:0,enableScrollSpy:!0,scrollSpyDelay:500,children:function(e){var s=e.countUpRef;return(0,c.jsxs)("div",{className:"counter",children:[(0,c.jsx)("span",{ref:s}),"+"]})}}),(0,c.jsxs)("span",{className:"circle-name",children:["Verified",(0,c.jsx)("br",{}),"Doctors"]})]}),(0,c.jsxs)("div",{className:"circle",children:[(0,c.jsx)(f.ZP,{start:0,end:75,delay:0,enableScrollSpy:!0,scrollSpyDelay:500,children:function(e){var s=e.countUpRef;return(0,c.jsxs)("div",{className:"counter",children:[(0,c.jsx)("span",{ref:s}),"+"]})}}),(0,c.jsxs)("span",{className:"circle-name",children:["Specialist",(0,c.jsx)("br",{}),"Doctors"]})]})]})},v=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(p.Z,{}),(0,c.jsx)(u,{}),(0,c.jsx)(d,{}),(0,c.jsx)(g,{}),(0,c.jsx)(l,{}),(0,c.jsx)(h.Z,{})]})}},1062:function(){}}]);
//# sourceMappingURL=440.c18ec353.chunk.js.map