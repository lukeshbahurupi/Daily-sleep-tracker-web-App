(this["webpackJsonpdaily-sleep-tracker"]=this["webpackJsonpdaily-sleep-tracker"]||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),c=a.n(s),l=(a(76),a(77),a(10)),o=a(9),i=(a(78),a(66)),d=a(5),u=a(13),b=a(64),h=(a(79),a(112),b.a.initializeApp({apiKey:"AIzaSyCvj754p1_t2AV6rBgaF7NxHb9fnCHoEH0",authDomain:"zzz-tracker.firebaseapp.com",projectId:"zzz-tracker",storageBucket:"zzz-tracker.appspot.com",messagingSenderId:"1006356862639",appId:"1:1006356862639:web:a142a5924de3a66d7ee65a",measurementId:"G-DR5F3YJ2X9"})),m=a(4),x=r.a.createContext(),j=function(e){var t=e.children,a=Object(n.useState)(null),r=Object(l.a)(a,2),s=r[0],c=r[1];return Object(n.useEffect)((function(){h.auth().onAuthStateChanged(c)}),[]),Object(m.jsx)(x.Provider,{value:{currentUser:s},children:t})};a(82);function p(){var e=Object(n.useState)(localStorage.theme),t=Object(l.a)(e,2),a=t[0],r=t[1],s="dark"===a?"light":"dark";return Object(n.useEffect)((function(){var e=window.document.documentElement;e.classList.remove(s),e.classList.add(a),localStorage.setItem("theme",a)}),[a,s]),[s,r]}var g=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],s=p(),c=Object(l.a)(s,2),o=c[0],i=c[1],d=Object(n.useContext)(x).currentUser;return Object(n.useEffect)((function(){d&&(document.getElementById("login").classList.add("hidden"),document.getElementById("signup").classList.add("hidden"),document.getElementById("newEntry").classList.remove("hidden"),document.getElementById("logout").classList.remove("hidden"))}),[d]),Object(m.jsxs)("nav",{className:"bg-gray-400 bg-opacity-60 dark:bg-opacity-80 dark:bg-gray-800 transition-all duration-500",children:[Object(m.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:Object(m.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[Object(m.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:Object(m.jsxs)("button",{onClick:function(){return r(!a)},id:"hamburgerMenu",type:"button",className:"inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[Object(m.jsx)("span",{className:"sr-only",children:"Open main menu"}),Object(m.jsx)("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})}),Object(m.jsx)("svg",{className:"hidden h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})]})}),Object(m.jsx)("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:Object(m.jsx)("div",{className:"hidden sm:block sm:ml-6",children:Object(m.jsxs)("div",{className:"flex space-x-4",children:[Object(m.jsx)(u.b,{to:d?"/dashboard":"/",className:"bg-gray-500 dark:bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-500","aria-current":"page",children:d?"Dashboard":"Home"}),Object(m.jsx)(u.b,{to:d?"/home":"/",className:"text-gray-500 dark:text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-500",children:"About"}),Object(m.jsx)(u.b,{to:d?"/entries":"/",className:"text-gray-500 dark:text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-500 ".concat(d?"block":"hidden"),children:"Entries"})]})})}),Object(m.jsxs)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:[Object(m.jsx)("span",{onClick:function(){return i(o)},className:"mr-5 bg-yellow-300 hover:bg-yellow-400 dark:bg-gray-300 dark:hover:bg-gray-400 cursor-pointer rounded-md p-1 transition-all duration-500",children:"light"===o?Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})}):Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})})}),Object(m.jsx)(u.b,{to:"/login",id:"login",className:"bg-gray-500 dark:bg-gray-900 text-white px-3 hover:bg-gray-900 py-2 rounded-md text-sm font-medium mr-3 transition duration-500","aria-current":"page",children:"Sign In"}),Object(m.jsx)(u.b,{to:"/signup",id:"signup",className:"hidden bg-yellow-600 text-white px-3 hover:bg-yellow-700 py-2 rounded-md text-sm font-medium","aria-current":"page",children:"Sign Up"}),Object(m.jsxs)(u.b,{to:"/entries",id:"newEntry",className:"bg-yellow-600 text-white px-3 hover:bg-yellow-700 flex py-2 rounded-md text-sm font-medium hidden mr-3 transition duration-500","aria-current":"page",children:["light"===o?Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",clipRule:"evenodd"})}):Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),"New Entry"]}),Object(m.jsx)("button",{onClick:function(){h.auth().signOut(),window.location.replace("/zzz-tracker")},id:"logout",className:"bg-gray-500 dark:bg-gray-900 text-white px-3 hover:bg-gray-900 py-2 rounded-md text-sm font-medium transition duration-500 hidden","aria-current":"page",children:"Logout"})]})]})}),Object(m.jsx)("div",{id:"mobile-menu",className:a?"block":"hidden",children:Object(m.jsxs)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[Object(m.jsx)(u.b,{to:d?"/dashboard":"/",href:"#",className:"bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium","aria-current":"page",children:d?"Dashboard":"Home"}),Object(m.jsx)(u.b,{to:d?"/home":"/",className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:"About"}),Object(m.jsx)(u.b,{to:d?"/entries":"/",className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ".concat(d?"block":"hidden"),children:"Entries"})]})})]})};var O=function(){var e=Object(n.useContext)(x).currentUser,t=Object(n.useRef)(null),a=Object(n.useState)(localStorage.theme),r=Object(l.a)(a,2),s=r[0],c=r[1];return Object(n.useEffect)((function(){c(localStorage.theme)}),[s]),Object(n.useEffect)((function(){i.a.to(t,1,{opacity:1,y:-50,ease:d.b.easeOut})}),[]),e?Object(m.jsx)(o.a,{to:"/entries"}):Object(m.jsxs)("div",{id:"background",className:"h-screen transition-all duration-500 splash-screen dark:splash-screen-dark",children:[Object(m.jsx)(g,{}),Object(m.jsx)("div",{className:"jumbotron text-center py-48 lg:py-72 transition-all duration-500",children:Object(m.jsxs)("div",{ref:function(e){t=e},children:[Object(m.jsx)("h1",{className:"text-7xl text-black dark:text-yellow-400 font-bold transition-all duration-500",children:"Zzz Tracker"}),Object(m.jsx)("p",{className:"text-4xl p-6 text-black dark:text-white font-bold transition-all duration-500",children:"Create an account and track your daily sleep"}),Object(m.jsx)(u.b,{to:"/signup",className:"bg-gray-700 hover:bg-gray-800 dark:bg-yellow-400 text-white dark:hover:bg-yellow-500 dark:text-black font-bold py-2 px-5 rounded mb-32 transition-all duration-500",children:"Sign up now"})]})})]})},f=a(28),y=a.n(f),w=a(36),v=(a(88),Object(o.g)((function(e){var t=e.history;p();var a=Object(n.useCallback)(function(){var e=Object(w.a)(y.a.mark((function e(a){var n,r,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,r=n.email,s=n.password,e.prev=2,e.next=5,h.auth().createUserWithEmailAndPassword(r.value,s.value);case 5:t.push("/dashboard"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(m.jsxs)("div",{id:"background",className:"h-screen bg-gray-100 dark:bg-gray-900 transition duration-500 splash-screen dark:splash-screen-dark",children:[Object(m.jsx)(g,{}),Object(m.jsx)("div",{className:"mx-auto text-center align-middle w-min pt-32 flex",children:Object(m.jsxs)("div",{className:"p-10 lg:p-24 bg-gray-200 dark:bg-gray-700 transition duration-500 w-m rounded",children:[Object(m.jsxs)("h1",{className:"text-5xl text-black dark:text-yellow-500 font-bold mb-5 transition duration-500",children:[Object(m.jsx)("span",{className:"text-yellow-500 dark:text-white transition duration-500",children:"Zzz"})," Tracker"]}),Object(m.jsxs)("form",{onSubmit:a,children:[Object(m.jsx)("input",{className:"input-email font-bold placeholder-yellow-500 bg-gray-600 text-black dark:text-white w-60 rounded my-5 text-center",name:"email",type:"email",placeholder:"Email"}),Object(m.jsx)("input",{className:"input-password font-bold placeholder-yellow-500 text-black dark:text-white w-60 rounded text-center mb-10",name:"password",type:"password",placeholder:"Password"}),Object(m.jsx)("button",{className:"font-bold bg-yellow-400 hover:bg-yellow-500 w-60 p-2 rounded transition-all duration-300",type:"submit",children:"Sign Up"}),Object(m.jsxs)("p",{className:"mt-5 px-5 font-bold text-black dark:text-white transition duration-500",children:["Already have an account? ",Object(m.jsx)(u.b,{to:"/login",className:"text-yellow-500 cursor-pointer",children:"Log In"})]})]})]})})]})}))),k=(a(89),Object(o.g)((function(e){var t=e.history;p();var a=Object(n.useCallback)(function(){var e=Object(w.a)(y.a.mark((function e(a){var n,r,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,r=n.email,s=n.password,e.prev=2,e.next=5,h.auth().signInWithEmailAndPassword(r.value,s.value);case 5:t.push("/dashboard"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(n.useContext)(x).currentUser?Object(m.jsx)(o.a,{to:"/dashboard"}):Object(m.jsxs)("div",{id:"background",className:"h-screen bg-gray-100 dark:bg-gray-900 transition duration-500 splash-screen dark:splash-screen-dark",children:[Object(m.jsx)(g,{}),Object(m.jsx)("div",{className:"mx-auto text-center align-middle w-min pt-32 flex",children:Object(m.jsxs)("div",{className:"p-10 lg:p-24 bg-gray-200 dark:bg-gray-700 transition duration-500 rounded",children:[Object(m.jsxs)("h1",{className:"text-5xl text-black dark:text-yellow-500 font-bold mb-5 transition-all duration-500",children:[Object(m.jsx)("span",{className:"text-yellow-500 dark:text-white transition-all duration-500",children:"Zzz"})," Tracker"]}),Object(m.jsxs)("form",{onSubmit:a,children:[Object(m.jsx)("input",{className:"input-email font-bold placeholder-yellow-500 bg-gray-600 text-black dark:text-white w-60 rounded my-5 text-center",name:"email",type:"email",placeholder:"Email"}),Object(m.jsx)("input",{className:"input-password font-bold placeholder-yellow-500 text-black dark:text-white w-60 rounded text-center mb-10",name:"password",type:"password",placeholder:"Password"}),Object(m.jsx)("button",{className:"font-bold bg-yellow-400 hover:bg-yellow-500 w-60 p-2 rounded transition-all duration-300",type:"submit",children:"Log in"}),Object(m.jsxs)("p",{className:"mt-5 font-bold text-black dark:text-white transition duration-500",children:["Don't have an account? ",Object(m.jsx)(u.b,{to:"/signup",className:"text-yellow-500 cursor-pointer",children:"Sign Up"})]})]})]})})]})}))),N=a(142),S=(a(90),a(143)),C=a(47),E=a.n(C);function I(){var e=Object(n.useContext)(x).currentUser,t=e?e.uid:null,a=Object(n.useState)(!1),r=Object(l.a)(a,2),s=r[0],c=r[1],o=Object(n.useState)(""),i=Object(l.a)(o,2),d=i[0],u=i[1],b=Object(n.useState)(""),j=Object(l.a)(b,2),O=j[0],f=j[1],y=Object(n.useState)(""),w=Object(l.a)(y,2),v=w[0],k=w[1],C=Object(n.useState)([]),I=Object(l.a)(C,2),z=I[0],L=I[1],B=h.firestore().collection("sleepData");function D(e,t,a){var n=parseInt(new Date("01/01/2007 "+e).getTime()),r=(parseInt(new Date("01/01/2007 "+t).getTime())-n)/6e4/60;r<0&&(r=24+r);var s=E.a.duration(r,"hours"),c="".concat(s._data.hours<10?"0"+s._data.hours:s._data.hours,":").concat(s._data.minutes<10?"0"+s._data.minutes:s._data.minutes);return B.doc(a.id).update({totalSlept:c}).catch((function(e){console.error(e)})),c}return Object(n.useEffect)((function(){B.where("owner","==",t).orderBy("sleepDate","desc").orderBy("asleepTime","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),L(t)}))}),[]),p(),Object(m.jsxs)("div",{id:"background",className:"bg-gray-100 dark:bg-gray-900 pb-3 splash-screen dark:splash-screen-dark transition duration-500 ".concat(s&&z.length>2?"h-full":"h-screen"),children:[Object(m.jsx)(g,{}),Object(m.jsx)("div",{className:"flex justify-center",children:Object(m.jsxs)("button",{onClick:function(){c(!s)},type:"button",className:"bg-yellow-500 hover:bg-yellow-600 px-10 py-6 font-bold text-black dark:text-gray-200 text-2xl my-10 rounded-full flex transition duration-500",children:[Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 mr-2 my-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),"New Entry"]})}),Object(m.jsx)("div",{className:s?"block":"hidden",children:Object(m.jsx)("div",{className:"p-10 lg:p-24 bg-gray-200 dark:bg-gray-700 transition duration-500 rounded w-min mx-auto",children:Object(m.jsx)("div",{className:"mx-auto text-center align-middle w-64",children:Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"date",className:"font-bold text-black dark:text-white transition duration-500",children:[" Select the date",Object(m.jsx)(N.a,{id:"date",type:"date",className:"w-60",defaultValue:(new Date).toISOString().slice(0,10),onChange:function(e){u(e.target.value)},required:!0})]}),Object(m.jsxs)("label",{htmlFor:"asleepTime",className:"font-bold text-black dark:text-white transition duration-500",children:[" What time did you fall asleep?",Object(m.jsx)(N.a,{id:"asleep",type:"time",className:"w-60",defaultValue:"22:00",onChange:function(e){f(e.target.value)},required:!0})]}),Object(m.jsxs)("label",{htmlFor:"wakeupTime",className:"font-bold text-black dark:text-white transition duration-500",children:[" What time did you wake up?",Object(m.jsx)(N.a,{id:"wakeup",type:"time",className:"w-60",defaultValue:"06:00",onChange:function(e){k(e.target.value)},required:!0})]}),Object(m.jsxs)("div",{className:"flex",children:[Object(m.jsx)("button",{onClick:function(){return function(){var e=document.getElementById("date"),t=document.getElementById("asleep"),a=document.getElementById("wakeup");e.value=(new Date).toISOString().slice(0,10),t.value="22:00",a.value="06:00",u(""),f(""),k("")}()},className:"font-bold bg-gray-300 dark:bg-gray-900 m-auto px-5 hover:bg-gray-400 dark:hover:bg-gray-600 py-2 rounded transition-all duration-300",children:"Reset"}),Object(m.jsx)("button",{onClick:function(){return function(){var t=e?e.uid:"unknown",a=e?e.email:"unknown",n={sleepDate:d,asleepTime:O,wakeupTime:v,id:Object(S.a)(),owner:t,ownerEmail:a,createdAt:(new Date).toLocaleDateString()};""===d||""===O||""===v?alert("Please fill in the whole form"):B.doc(n.id).set(n).catch((function(e){console.error(e)}))}()},className:"font-bold bg-yellow-400 m-auto px-4 hover:bg-yellow-500 py-2 rounded transition-all duration-300",children:"Submit"})]})]})})})}),Object(m.jsxs)("div",{className:"mx-10 text-center",children:[Object(m.jsx)("h1",{className:"text-3xl font-bold text-black dark:text-white my-5 transition duration-500",children:0!==z.length?"Your Sleep Entries":"You haven't added any entries yet, you can add one by clicking the button above"}),z.map((function(e){return Object(m.jsxs)("div",{className:"flex text-xs md:text-lg text-black dark:text-white justify-center bg-gray-200 dark:bg-yellow-600 w-full lg:w-1/2 py-2 my-3 mx-auto transition duration-500 rounded md:rounded-full overflow-auto",children:[Object(m.jsx)("h1",{className:"mx-2 lg:mx-5",children:Object(m.jsx)("span",{className:"font-bold",children:e.sleepDate})}),Object(m.jsxs)("h1",{className:"mx-2 lg:mx-5",children:["Asleep time: ",Object(m.jsx)("span",{className:"font-bold",children:e.asleepTime})]}),Object(m.jsxs)("h1",{className:"mx-2 lg:mx-5",children:["Wakeup time: ",Object(m.jsx)("span",{className:"font-bold",children:e.wakeupTime})]}),Object(m.jsx)("h1",{className:"mx-2 lg:mx-5",children:Object(m.jsxs)("span",{className:"font-bold",children:[D(e.asleepTime,e.wakeupTime,e)," Hours Slept"]})}),Object(m.jsx)("span",{className:"cursor-pointer my-auto hover:text-red-600 mr-2",onClick:function(){var t;t=e,B.doc(t.id).delete().catch((function(e){console.error(e)}))},children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]},e.id)}))]})]})}a(92);var z=a(26);var L=function(){var e=Object(n.useContext)(x).currentUser,t=e?e.uid:null,a=Object(n.useState)([]),r=Object(l.a)(a,2),s=r[0],c=r[1],o=Object(n.useState)(0),i=Object(l.a)(o,2),d=i[0],u=i[1],b=Object(n.useState)(0),j=Object(l.a)(b,2),p=j[0],O=j[1],f=Object(n.useState)(0),y=Object(l.a)(f,2),w=y[0],v=y[1],k=h.firestore().collection("sleepData");function N(){for(var e=0,t=[],a=[],n=0;n<s.length;n++){var r=s[n].totalSlept.split(/[.:]/);e+=parseInt(r[0],10)+(r[1]?parseInt(r[1],10):0)/60}u(Math.round(e/s.length*10)/10),s.map((function(e){return parseInt(e.totalSlept)<7?t.push(parseInt(e.totalSlept)):parseInt(e.totalSlept)>8?a.push(parseInt(e.totalSlept)):void 0})),O(t.length),v(a.length)}return Object(n.useEffect)((function(){k.where("owner","==",t).orderBy("sleepDate","desc").orderBy("asleepTime","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),c(t)})),N()}),[N]),Object(m.jsxs)("div",{className:"h-screen splash-screen dark:splash-screen-dark transition duration-500",children:[Object(m.jsx)(g,{}),Object(m.jsx)("div",{className:"text-center",children:Object(m.jsx)("h1",{className:"font-bold text-3xl lg:text-5xl my-8 text-black dark:text-white transition-all duration-500",children:"Your Dashboard"})}),Object(m.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 mx-auto my-32",children:[Object(m.jsxs)("div",{className:"justify-center text-center bg-gray-400 dark:bg-gray-600 opacity-80 w-3/4 py-5 mx-auto rounded-md transition-all duration-500",children:[Object(m.jsx)("h1",{className:"text-3xl font-bold mb-3",children:"Graph"}),Object(m.jsxs)(z.e,{className:"mx-auto",height:400,width:600,xType:"ordinal",yDomain:[1,12],children:[Object(m.jsx)(z.d,{}),Object(m.jsx)(z.f,{}),Object(m.jsx)(z.c,{}),Object(m.jsx)(z.a,{}),Object(m.jsx)(z.b,{data:s.map((function(e){return{x:e.sleepDate,y:parseInt(e.totalSlept)}}))})]})]}),Object(m.jsx)("div",{className:"text-center justify-center w-4/5 mx-auto",children:Object(m.jsxs)("div",{className:"bg-gray-400 opacity-80 rounded-lg py-5",style:{height:500},children:[Object(m.jsx)("h1",{className:"text-3xl font-bold mb-3",children:"Stats"}),Object(m.jsxs)("h1",{className:"text-xl font-bold my-5",children:["Your average sleep time: ",d," Hours"]}),Object(m.jsxs)("h1",{className:"text-xl font-bold my-5",children:["Number of days with less than 6 hours sleep: ",p]}),Object(m.jsxs)("h1",{className:"text-xl font-bold my-5",children:["Number of days with more than 8 hours sleep: ",w]}),Object(m.jsx)("h1",{className:"text-3xl font-bold mt-24",children:d<7?"You should sleep more. Healthy adults need between 7 and 9 hours of sleep":d>9?"You sleep too much. Healthy adults need between 7 and 9 hours of sleep":"You are on track! Keep it up."})]})})]})]})};var B=function(){return null===localStorage.getItem("theme")&&localStorage.setItem("theme","light"),Object(m.jsx)(j,{children:Object(m.jsx)(u.a,{basename:"/zzz-tracker",children:Object(m.jsxs)(o.d,{children:[Object(m.jsx)(o.b,{path:"/",exact:!0,children:Object(m.jsx)(O,{})}),Object(m.jsx)(o.b,{path:"/signup",children:Object(m.jsx)(v,{})}),Object(m.jsx)(o.b,{path:"/login",children:Object(m.jsx)(k,{})}),Object(m.jsx)(o.b,{path:"/entries",children:Object(m.jsx)(I,{})}),Object(m.jsx)(o.b,{path:"/dashboard",children:Object(m.jsx)(L,{})})]})})})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,144)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(B,{})}),document.getElementById("root")),D()},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},82:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){}},[[111,1,2]]]);
//# sourceMappingURL=main.6049ea73.chunk.js.map