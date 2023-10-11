import{_ as k,o as r,c as s,a as e,Q as h,e as _,w as u,$ as y,d as a,b as w,F as b,W as c,t as o,a1 as f,a2 as g}from"./index.eeec1dcc.js";const m={components:{},data(){return{activeTab:"Residential",residentialTableData:{GTT:[{plan:"DSL Silver",download:5,upload:"unsure",cost:5699,fee:"unsure",notes:"Optional cost of $ 9,120 for a wireless modem"},{plan:"DSL Gold",download:10,upload:"unsure",cost:7999,fee:"unsure",notes:"Optional cost of $ 9,120 for a wireless modem"},{plan:"Fibre + Voice 100",download:100,upload:20,cost:10999,fee:2e4,notes:"Bundles internet + landline<br/> Comes with 3000 free monthly minutes to GTT landlines"},{plan:"Fibre + Voice 200",download:200,upload:20,cost:12999,fee:2e4,notes:"Bundles internet + landline<br/> Comes with 5000 free monthly minutes to GTT landlines"},{plan:"Fibre + Voice 300",download:300,upload:20,cost:14999,fee:2e4,notes:"Bundles internet + landline<br/> Comes with 10000 free monthly minutes to GTT landlines"}],ENet:[{plan:"4G",download:20,upload:2,cost:7900,fee:29e3,notes:"Wireless internet | 1TB monthly data cap | Bundled with TV"},{plan:"OnFiber",download:350,upload:100,cost:13100,fee:29e3,notes:"TV & internet bundle<br/> 90 BUSINESS DAYS (~4 months) waiting period for install"},{plan:"OnFiber The Gig",download:1e3,upload:500,cost:26300,fee:29e3,notes:"TV & internet bundle<br/> 90 BUSINESS DAYS (~4 months) waiting period for install"}],NexLink:[{plan:"Starter",download:8,upload:"unsure",cost:5300,fee:"unsure",notes:"Wireless internet"},{plan:"Starter+",download:15,upload:"unsure",cost:7e3,fee:"unsure",notes:"Wireless internet"},{plan:"Extreme",download:25,upload:"unsure",cost:10500,fee:"unsure",notes:"Wireless internet"}]},businessTableData:{GTT:[{plan:"Connex 200",download:200,upload:75,cost:18999,fee:22800,notes:"3500 Minutes On Net+ Calls to USA & Canada"},{plan:"Connex 400",download:400,upload:100,cost:25999,fee:22800,notes:"4000 Minutes On Net+ Calls to USA & Canada"},{plan:"Connex 600",download:600,upload:250,cost:37999,fee:22800,notes:"6000 Minutes On Net+ Calls to USA & Canada"}],ENet:[{plan:"OnFiber PLC Essential",download:25,upload:"?",cost:"?",fee:"?",notes:""},{plan:"OnFiber PLC Preferred",download:50,upload:"?",cost:"?",fee:"?",notes:""},{plan:"OnFiber PLC Ultimate",download:100,upload:"?",cost:"?",fee:"?",notes:""},{plan:"OnFiber PLC Elite",download:250,upload:"?",cost:"?",fee:"?",notes:""}],Digicel:[{plan:"FiberX Lite",download:200,upload:20,cost:8999,fee:2e4,notes:""},{plan:"FiberX 200",download:200,upload:75,cost:15500,fee:2e4,notes:""},{plan:"FiberX 300",download:300,upload:100,cost:29900,fee:2e4,notes:""},{plan:"FiberX 600",download:600,upload:300,cost:35e3,fee:2e4,notes:""},{plan:"FiberX 1000",download:1e3,upload:600,cost:15e4,fee:2e4,notes:""}]}}},mounted(){document.getElementById("defaultOpen").click()},methods:{openTab(d){this.activeTab=d}}},n=d=>(f("data-v-fa58fca0"),d=d(),g(),d),T={class:"flex items-center justify-center py-10"},v={class:"dark:text-white"},S=n(()=>e("div",{class:"mb-5 flex w-full flex-row justify-between sm:mb-5"},[e("h2",{class:"text-2xl leading-tight"},[a(" Guyana's ISPs Compared "),e("p",{class:"mt-1 text-sm"},"Last Updated: 11/10/2023")])],-1)),C={class:"tab mt-4"},L={class:"table dark:text-white"},M=n(()=>e("thead",null,[e("tr",null,[e("th",{colspan:"9",class:"whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"}," Residential Pricing ")]),e("tr",null,[e("th",{class:"whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"}," Company "),e("th",{class:"whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"}," Plan "),e("th",{colspan:"2",class:"whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"}," Advertised Speed (Mbps) "),e("th",{class:"whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"}," Monthly Cost "),e("th",{class:"whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"}," Price per Mbps "),e("th",{class:"whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"}," Install Fee "),e("th",{class:"whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"}," Total Upfront Cost "),e("th",{class:"whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"}," Notes ")]),e("tr",null,[e("th",{class:"whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"}),e("th",{class:"whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"}),e("th",{class:"whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"}," Download "),e("th",{class:"whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"}," Upload "),e("th",{class:"whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"}),e("th",{class:"whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"}),e("th",{class:"whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"}),e("th",{class:"whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"}),e("th",{class:"whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"})])],-1)),F=n(()=>e("td",{class:"border-b-2 border-white px-4 py-1 font-bold dark:text-white"},[a(" GTT"),e("sup",null,"1*")],-1)),P={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},N={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},B={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},D={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},I={hidden:""},E={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},G={key:0,class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},O={key:1,class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},U={hidden:""},V={key:2,class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},R={key:3,class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},A=["innerHTML"],W=n(()=>e("td",{class:"border-b-2 border-white px-4 py-1 font-bold dark:text-white"},[a(" ENet"),e("sup",null,"2*")],-1)),$={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},X={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},H={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},j={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},Q={hidden:""},Y={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},z={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},q={hidden:""},J={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},K=["innerHTML"],Z=n(()=>e("td",{class:"border-b-2 border-white px-4 py-1 font-bold dark:text-white"},[a(" NexLink"),e("sup",null,"3*")],-1)),ee={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},te={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},oe={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},re={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},se={hidden:""},de={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},ne={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},ie={hidden:""},ae={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},le={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},be={class:"table dark:text-white"},ce=n(()=>e("thead",null,[e("tr",null,[e("th",{colspan:"9",class:"whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"}," Business Pricing ")]),e("tr",null,[e("th",{class:"whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"}," Company "),e("th",{class:"whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"}," Plan "),e("th",{colspan:"2",class:"whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"}," Advertised Speed (Mbps) "),e("th",{class:"whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"}," Monthly Cost "),e("th",{class:"whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"}," Price per Mbps "),e("th",{class:"whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"}," Install Fee "),e("th",{class:"whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"}," Total Upfront Cost "),e("th",{class:"whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"}," Notes ")]),e("tr",null,[e("th",{class:"whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"}),e("th",{class:"whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"}),e("th",{class:"whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"}," Download "),e("th",{class:"whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"}," Upload "),e("th",{class:"whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"}),e("th",{class:"whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"}),e("th",{class:"whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"}),e("th",{class:"whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"}),e("th",{class:"whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"})])],-1)),pe=n(()=>e("td",{class:"border-b-2 border-white px-4 py-1 font-bold dark:text-white"},[a(" GTT"),e("sup",null,"1*")],-1)),he={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},we={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},xe={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},_e={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},ue={hidden:""},ye={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},ke={key:0,class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},fe={key:1,class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},ge={hidden:""},me={key:2,class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},Te={key:3,class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},ve={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},Se=n(()=>e("td",{class:"border-b-2 border-white px-4 py-1 font-bold dark:text-white"},[a(" ENet"),e("sup",null,"2*")],-1)),Ce={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},Le={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},Me=n(()=>e("td",{class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},"?",-1)),Fe=n(()=>e("td",{class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},"?",-1)),Pe=n(()=>e("td",{class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},"?",-1)),Ne=n(()=>e("td",{class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},"?",-1)),Be=n(()=>e("td",{class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},"?",-1)),De={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},Ie=n(()=>e("td",{class:"border-b-2 border-white px-4 py-1 font-bold dark:text-white"},[a(" Digicel"),e("sup",null,"3*")],-1)),Ee={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},Ge={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},Oe={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},Ue={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},Ve={hidden:""},Re={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},Ae={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},We={hidden:""},$e={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},Xe={class:"border-b-2 border-white px-4 py-1 text-center dark:text-white"},He={class:"p-2"},je={key:0,class:"text-sm"},Qe=n(()=>e("sup",null,"1*",-1)),Ye=n(()=>e("a",{class:"text-blue-500",href:"https://web.archive.org/web/20230604195536/https://www.gtt.co.gy/internet",target:"_blank"},"1",-1)),ze=n(()=>e("a",{class:"text-blue-500",href:"https://web.archive.org/web/20230604195553/https://www.gtt.co.gy/fibre-voice",target:"_blank"},"2",-1)),qe=n(()=>e("a",{class:"text-blue-500",href:"https://web.archive.org/web/20230604200310/https://www.gtt.co.gy/internet/dsl-plans",target:"_blank"},"3",-1)),Je={key:1,class:"text-sm"},Ke=n(()=>e("sup",null,"1*",-1)),Ze=n(()=>e("a",{class:"text-blue-500",href:"https://web.archive.org/web/20231011151719/https://www.gtt.co.gy/connex",target:"_blank"},"GTT Connex",-1)),et=n(()=>e("p",{class:"text-sm"},[e("sup",null,"2*"),a(" Information Sourced from: "),e("a",{class:"text-blue-500",href:"https://web.archive.org/web/20230610133114/https://www.enetworks.gy/internet/",target:"_blank"},"ENet Website")],-1)),tt={key:2,class:"text-sm"},ot=n(()=>e("sup",null,"3*",-1)),rt=n(()=>e("a",{class:"text-blue-500",href:"https://web.archive.org/web/20231011123425/https://nexlinkonline.com/packages/",target:"_blank"},"NexLink Website",-1)),st={key:3,class:"text-sm"},dt=n(()=>e("sup",null,"3*",-1)),nt=n(()=>e("a",{class:"text-blue-500",href:"https://web.archive.org/web/20230602194902/https://support-gy-business.digicelgroup.com/hc/en-us/articles/9110098629389-FiberX-FAQs",target:"_blank"},"Digicel Business Website",-1));function it(d,p,at,lt,i,x){return r(),s("div",T,[e("div",v,[S,e("div",C,[e("button",{id:"defaultOpen",class:h([{"bg-gray-200 dark:bg-gray-800":i.activeTab==="Residential","bg-gray-100 dark:bg-gray-700":i.activeTab!=="Residential"},"tablinks rounded-t-lg p-4 transition-opacity"]),onClick:p[0]||(p[0]=t=>x.openTab("Residential"))}," Residential ",2),e("button",{class:h([{"bg-gray-200 dark:bg-gray-800":i.activeTab==="Business","bg-gray-100 dark:bg-gray-700":i.activeTab!=="Business"},"tablinks rounded-t-lg p-4 transition-opacity"]),onClick:p[1]||(p[1]=t=>x.openTab("Business"))}," Business ",2)]),_(y,{name:"fade",mode:"out-in"},{default:u(()=>[(r(),s("div",{key:i.activeTab,class:h(["tabcontent bg-gray-200 dark:bg-gray-800",{hidden:i.activeTab!=="Residential"}])},[e("table",L,[M,e("tbody",null,[(r(!0),s(b,null,c(i.residentialTableData.GTT,(t,l)=>(r(),s("tr",{key:l,class:"text-gray-700"},[F,e("td",P,o(t.plan),1),e("td",N,o(t.download),1),e("td",B,o(t.upload),1),e("td",D,o("$ "+Math.round(t.cost).toLocaleString()),1),e("div",I,o(d.pricePerMbps=t.cost/t.download),1),e("td",E,o("$ "+d.pricePerMbps.toFixed(2).toLocaleString()),1),typeof t.fee=="string"?(r(),s("td",G,o(t.fee),1)):(r(),s("td",O,o("$ "+Math.round(t.fee).toLocaleString()),1)),e("div",U,o(d.totalCost=t.fee+t.cost),1),typeof t.fee=="string"?(r(),s("td",V,o(t.fee),1)):(r(),s("td",R,o("$ "+d.totalCost.toLocaleString()),1)),e("td",{class:"border-b-2 border-white px-4 py-1 text-center dark:text-white",innerHTML:t.notes},null,8,A)]))),128)),(r(!0),s(b,null,c(i.residentialTableData.ENet,(t,l)=>(r(),s("tr",{key:l,class:"text-gray-700"},[W,e("td",$,o(t.plan),1),e("td",X,o(t.download),1),e("td",H,o(t.upload),1),e("td",j,o("$ "+Math.round(t.cost).toLocaleString()),1),e("div",Q,o(d.pricePerMbps=t.cost/t.download),1),e("td",Y,o("$ "+d.pricePerMbps.toFixed(2).toLocaleString()),1),e("td",z,o("$ "+Math.round(t.fee).toLocaleString()),1),e("div",q,o(d.totalCost=t.fee+t.cost),1),e("td",J,o("$ "+d.totalCost.toLocaleString()),1),e("td",{class:"border-b-2 border-white px-4 py-1 text-center dark:text-white",innerHTML:t.notes},null,8,K)]))),128)),(r(!0),s(b,null,c(i.residentialTableData.NexLink,(t,l)=>(r(),s("tr",{key:l,class:"text-gray-700"},[Z,e("td",ee,o(t.plan),1),e("td",te,o(t.download),1),e("td",oe,o(t.upload),1),e("td",re,o("$ "+Math.round(t.cost).toLocaleString()),1),e("div",se,o(d.pricePerMbps=t.cost/t.download),1),e("td",de,o("$ "+d.pricePerMbps.toFixed(2).toLocaleString()),1),e("td",ne,o(t.fee),1),e("div",ie,o(d.totalCost=t.fee+t.cost),1),e("td",ae,o(t.fee),1),e("td",le,o(t.notes),1)]))),128))])])],2))]),_:1}),_(y,{name:"fade",mode:"out-in"},{default:u(()=>[(r(),s("div",{key:i.activeTab,class:h(["tabcontent bg-gray-200 dark:bg-gray-800",{hidden:i.activeTab!=="Business"}])},[e("table",be,[ce,e("tbody",null,[(r(!0),s(b,null,c(i.businessTableData.GTT,(t,l)=>(r(),s("tr",{key:l,class:"text-gray-700"},[pe,e("td",he,o(t.plan),1),e("td",we,o(t.download),1),e("td",xe,o(t.upload),1),e("td",_e,o("$ "+Math.round(t.cost).toLocaleString()),1),e("div",ue,o(d.pricePerMbps=t.cost/t.download),1),e("td",ye,o("$ "+d.pricePerMbps.toFixed(2).toLocaleString()),1),typeof t.fee=="string"?(r(),s("td",ke,o(t.fee),1)):(r(),s("td",fe,o("$ "+Math.round(t.fee).toLocaleString()),1)),e("div",ge,o(d.totalCost=t.fee+t.cost),1),typeof t.fee=="string"?(r(),s("td",me,o(t.fee),1)):(r(),s("td",Te,o("$ "+d.totalCost.toLocaleString()),1)),e("td",ve,o(t.notes),1)]))),128)),(r(!0),s(b,null,c(i.businessTableData.ENet,(t,l)=>(r(),s("tr",{key:l,class:"text-gray-700"},[Se,e("td",Ce,o(t.plan),1),e("td",Le,o(t.download),1),Me,Fe,Pe,Ne,Be,e("td",De,o(t.notes),1)]))),128)),(r(!0),s(b,null,c(i.businessTableData.Digicel,(t,l)=>(r(),s("tr",{key:l,class:"text-gray-700"},[Ie,e("td",Ee,o(t.plan),1),e("td",Ge,o(t.download),1),e("td",Oe,o(t.upload),1),e("td",Ue,o("$ "+Math.round(t.cost).toLocaleString()),1),e("div",Ve,o(d.pricePerMbps=t.cost/t.download),1),e("td",Re,o("$ "+d.pricePerMbps.toFixed(2).toLocaleString()),1),e("td",Ae,o("$ "+Math.round(t.fee).toLocaleString()),1),e("div",We,o(d.totalCost=t.fee+t.cost),1),e("td",$e,o("$ "+Math.round(d.totalCost).toLocaleString()),1),e("td",Xe,o(t.notes),1)]))),128))])])],2))]),_:1}),e("div",He,[i.activeTab=="Residential"?(r(),s("p",je,[Qe,a(" Information Sourced from: "),Ye,a(", "),ze,a(", "),qe])):w("",!0),i.activeTab=="Business"?(r(),s("p",Je,[Ke,a(" Information Sourced from: "),Ze])):w("",!0),et,i.activeTab=="Residential"?(r(),s("p",tt,[ot,a(" Information Sourced from: "),rt])):w("",!0),i.activeTab=="Business"?(r(),s("p",st,[dt,a(" Information Sourced from: "),nt])):w("",!0)])])])}var ct=k(m,[["render",it],["__scopeId","data-v-fa58fca0"]]);export{ct as default};
