"use strict";(self.webpackChunkrlc=self.webpackChunkrlc||[]).push([[562],{5501:(e,s,t)=>{t.d(s,{r:()=>r,u:()=>a});t(2573);function a(e){const s=e.replace("\u0440.","").replace("\u043e","").trim(),[t,a,r,l,i,n]=s.split(" "),c={"\u0441\u0456\u0447\u043d\u044f":"January","\u043b\u044e\u0442\u043e\u0433\u043e":"February","\u0431\u0435\u0440\u0435\u0437\u043d\u044f":"March","\u043a\u0432\u0456\u0442\u043d\u044f":"April","\u0442\u0440\u0430\u0432\u043d\u044f":"May","\u0447\u0435\u0440\u0432\u043d\u044f":"June","\u043b\u0438\u043f\u043d\u044f":"July","\u0441\u0435\u0440\u043f\u043d\u044f":"August","\u0432\u0435\u0440\u0435\u0441\u043d\u044f":"September","\u0436\u043e\u0432\u0442\u043d\u044f":"October","\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430":"November","\u0433\u0440\u0443\u0434\u043d\u044f":"December"}[a];return new Date(`${c} ${t}, ${r} ${n}`).toUTCString()}const r=e=>{const s=new Date(e);return`${s.getUTCDate()} ${["\u0441\u0456\u0447\u043d\u044f","\u043b\u044e\u0442\u043e\u0433\u043e","\u0431\u0435\u0440\u0435\u0437\u043d\u044f","\u043a\u0432\u0456\u0442\u043d\u044f","\u0442\u0440\u0430\u0432\u043d\u044f","\u0447\u0435\u0440\u0432\u043d\u044f","\u043b\u0438\u043f\u043d\u044f","\u0441\u0435\u0440\u043f\u043d\u044f","\u0432\u0435\u0440\u0435\u0441\u043d\u044f","\u0436\u043e\u0432\u0442\u043d\u044f","\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430","\u0433\u0440\u0443\u0434\u043d\u044f"][s.getUTCMonth()]} ${s.getUTCFullYear()} \u0440. \u043e ${String(s.getUTCHours()).padStart(2,"0")}:${String(s.getUTCMinutes()).padStart(2,"0")}`}},7562:(e,s,t)=>{t.r(s),t.d(s,{default:()=>m});var a=t(5043),r=t(6213),l=t(1899),i=t.n(l),n=(t(5015),t(5475)),c=t(5501),d=t(8571),o=t(579);const m=()=>{const[e,s]=(0,a.useState)(null),[t,l]=(0,a.useState)([]),[m,h]=(0,a.useState)(""),[u,g]=(0,a.useState)([]),[x,j]=(0,a.useState)(null),[N,p]=(0,a.useState)([]),v=localStorage.getItem("schoolId");(0,a.useEffect)((()=>{y(s,r.A,l)}),[]),(0,a.useEffect)((()=>{if(t.length>0){const e=t.flatMap((e=>{try{return e.time.map((e=>e.teacherName))}catch(s){return console.error("Invalid time format:",e.time),[]}}));g([...new Set(e)]);const s=t.flatMap((e=>e.time.map((e=>new Date(e.time)))));p([...new Set(s)])}}),[t]);const y=async(e,s,t)=>{const a=localStorage.getItem("token");if(console.log(a),a)try{const r=await s.get("http://13.60.221.226/api/me",{headers:{Authorization:`Bearer ${a}`}}),{user:l,orders:i}=r.data;e(l),t(i)}catch(r){console.error("Error fetching user data:",r)}};return(0,o.jsx)("div",{className:"mains",children:(0,o.jsx)("div",{className:"containers",children:(0,o.jsxs)("div",{className:"user-profile",children:[(0,o.jsx)("div",{className:"logos",children:(0,o.jsx)("div",{className:"logos-items",children:(0,o.jsx)(n.N_,{to:`/${v}`,children:(0,o.jsx)("img",{src:d.A,alt:"Logo"})})})}),(0,o.jsx)("h2",{children:"\u041e\u0441\u043e\u0431\u0438\u0441\u0442\u0438\u0439 \u043a\u0430\u0431\u0456\u043d\u0435\u0442"}),e?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("strong",{children:["\u0412\u0456\u0442\u0430\u0454\u043c\u043e, ",e.username]}),(0,o.jsx)("h3",{children:"\u0412\u0430\u0448\u0456 \u0437\u0430\u043f\u0438\u0441\u0438"}),(0,o.jsx)(i(),{selected:x,onChange:e=>j(e),dateFormat:"yyyy-MM-dd",isClearable:!0,placeholderText:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0434\u0430\u0442\u0443 \u0434\u043b\u044f \u0444\u0456\u043b\u044c\u0442\u0440\u0430\u0446\u0456\u0457 \u0437\u0430\u043f\u0438\u0441\u0456\u0432",inline:!0,highlightDates:N}),x&&(0,o.jsxs)("p",{children:["\u0412\u0438\u0431\u0440\u0430\u043d\u0430 \u0434\u0430\u0442\u0430: ",x.toLocaleDateString()]}),t.length>0?(0,o.jsx)("ul",{className:"orders-list",children:((e,s)=>s?e.filter((e=>(e.time||[]).some((e=>new Date(e.time).getDate()),new Date(x).getDate()))):e)(t,x).map(((e,s)=>{let t=[];try{t=e.time.map((e=>({teacherName:e.teacherName,lang:e.lang,levelName:e.levelName,lessonTypes:e.lessonTypes,time:(0,c.r)(e.time),payment_status:e.payment_status})))}catch(r){console.error("Invalid time format:",e.time)}const a=t?t.filter((e=>{const s=new Date((0,c.u)(e.time));return s instanceof Date&&!isNaN(s)&&x instanceof Date&&!isNaN(x)&&s.getDate()===x.getDate()})):[];return 0===a.length?null:(console.log(a),(0,o.jsx)("li",{children:(0,o.jsx)("ul",{children:a.map(((s,t)=>(0,o.jsxs)("li",{style:{marginBottom:"10px"},children:[(0,o.jsxs)("div",{className:"order-item",children:[(0,o.jsx)("strong",{children:"\u0417\u0430\u043f\u0438\u0441 \u043d\u0430 \u0443\u0440\u043e\u043a:"}),(0,o.jsxs)("div",{className:"order-item-el",children:[(0,o.jsx)("div",{className:"order-item-el-head",children:"\u0412\u0447\u0438\u0442\u0435\u043b\u044c:"})," ",(0,o.jsx)("div",{className:"order-item-el-desc",children:s.teacherName})]}),(0,o.jsxs)("div",{className:"order-item-el",children:[(0,o.jsx)("div",{className:"order-item-el-head",children:"\u041c\u043e\u0432\u0430:"})," ",(0,o.jsx)("div",{className:"order-item-el-desc",children:s.lang})]}),(0,o.jsxs)("div",{className:"order-item-el",children:[(0,o.jsx)("div",{className:"order-item-el-head",children:"\u0420\u0456\u0432\u0435\u043d\u044c:"})," ",(0,o.jsx)("div",{className:"order-item-el-desc",children:s.levelName})]}),(0,o.jsxs)("div",{className:"order-item-el",children:[(0,o.jsx)("div",{className:"order-item-el-head",children:"\u0422\u0438\u043f \u0443\u0440\u043e\u043a\u0443:"})," ",(0,o.jsx)("div",{className:"order-item-el-desc",children:s.lessonTypes})]}),(0,o.jsxs)("div",{className:"order-item-el",children:[(0,o.jsx)("div",{className:"order-item-el-head",children:"\u0427\u0430\u0441:"})," ",(0,o.jsx)("div",{className:"order-item-el-desc",children:s.time})]}),(0,o.jsxs)("div",{className:"order-item-el",children:[(0,o.jsx)("div",{className:"order-item-el-head",children:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043e\u043f\u043b\u0430\u0442\u0438:"})," ",(0,o.jsx)("div",{className:"order-item-el-desc",children:s.payment_status})]})]}),e.students.length>0&&(0,o.jsxs)("div",{className:"students-list",style:{marginTop:"10px"},children:[(0,o.jsx)("div",{className:"students-head",children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442\u0438:"}),(0,o.jsx)("ul",{children:e.students.map(((e,s)=>(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"student-name",children:e.name})},s)))})]})]},t)))})},s))}))}):(0,o.jsx)("p",{children:"\u0417\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456."})]}):(0,o.jsx)("p",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430..."}),(0,o.jsx)(n.N_,{to:`/${v}`,children:(0,o.jsx)("button",{className:"btn-logout",onClick:async()=>{try{200===(await r.A.post("http://13.60.221.226/api/logout")).status&&(s(null),l([]),localStorage.removeItem("token"),console.log("Logged out successfully"))}catch(e){console.error("Error logging out:",e)}},children:"\u0412\u0438\u0439\u0442\u0438"})})]})})})}}}]);
//# sourceMappingURL=562.25bbd024.chunk.js.map