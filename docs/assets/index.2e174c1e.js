import{r as e,o as a,c as i,a as t,F as o,b as r,t as n,d,w as l,v as m,e as s,f as p,g as f,h as c,i as u,j as h}from"./vendor.5c91f95a.js";!function(e=".",a="__import__"){try{self[a]=new Function("u","return import(u)")}catch(i){const t=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[a]=e=>new Promise(((i,r)=>{const n=new URL(e,t);if(self[a].moduleMap[n])return i(self[a].moduleMap[n]);const d=new Blob([`import * as m from '${n}';`,`${a}.moduleMap['${n}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(d),onerror(){r(new Error(`Failed to import: ${e}`)),o(l)},onload(){i(self[a].moduleMap[n]),o(l)}});document.head.appendChild(l)})),self[a].moduleMap={}}}("assets/");const T={name:"HelloWorld",props:{msg:String},data(){var e=[];return window.localStorage.getItem("roadmapTimeLines1.0")&&(e=JSON.parse(window.localStorage.getItem("roadmapTimeLines1.0"))),{count:0,timeNodes:this.buildTimeNodes(),rows:new Array(40),draftRoadmapTimeline:this.getDraftRoadmaoTimeline(),roadmapTimeLines:e,dialogVisiableOfdraftRoadmapTimelineTextInput:!1}},computed:{draftRoadmapTimeLineStyle:function(){return this.buildRoadmapTimelineStyle(this.draftRoadmapTimeline)}},methods:{buildRoadmapTimelineBdStyle(e){let a="#222";return e.property.backgroundColor&&"#fff"!==e.property.backgroundColor&&(a="#fff"),{"background-color":e.property.backgroundColor?e.property.backgroundColor:"#fff",color:a}},randomBackgroundColor(e){let a=["#295BE6","#2CBC63","#12B2E6","#774EE0","#AF4FD3","#E16AC0","#EB4962","#F1763A","#EAC00B"];e.property.backgroundColor=a[parseInt(Math.random()*a.length)],this.cache(),console.log(e.property.backgroundColor)},onClickBtnRemoveOfRoadmapTimeline(e){this.roadmapTimeLines.splice(e,1),this.cache()},onClickBtnShare(){alert("开发中")},buildRoadmapTimelineStyle:e=>({left:e.property.left+"px",top:e.property.top+"px",width:e.property.width+"px"}),getDraftRoadmaoTimeline:()=>({isBuilding:!1,isFinish:!1,property:{width:0,left:0,top:0,text:"",backgroundColor:"#fff",initialOffsetX:0,initialLeft:0,initialTop:0,initialScreenX:0}}),onMouseMoveForCaledarView(e){if(this.draftRoadmapTimeline.isBuilding){let a=e.screenX-this.draftRoadmapTimeline.property.initialScreenX,i=a<0?0:a;this.draftRoadmapTimeline.property.width=i,this.draftRoadmapTimeline.property.dayCount=i<=60?1:1+Math.floor((i-60)/60)}},onMouseDownForRoadmapRowsItem(e){this.draftRoadmapTimeline.isBuilding?this.onMouseUpForRoadmapRowsItem(e):this.draftRoadmapTimeline.isBuilding||(this.draftRoadmapTimeline.isFinish=!1,this.draftRoadmapTimeline.isBuilding=!0,this.draftRoadmapTimeline.property.initialOffsetX=e.offsetX,this.draftRoadmapTimeline.property.initialLeft=e.currentTarget.getBoundingClientRect().x+this.$refs.caledarView.scrollLeft,this.draftRoadmapTimeline.property.initialTop=e.currentTarget.getBoundingClientRect().y-60,this.draftRoadmapTimeline.property.initialScreenX=e.screenX,this.draftRoadmapTimeline.property.left=this.draftRoadmapTimeline.property.initialLeft,this.draftRoadmapTimeline.property.top=this.draftRoadmapTimeline.property.initialTop)},onMouseUpForRoadmapRowsItem(){this.draftRoadmapTimeline.isBuilding&&(this.dialogVisiableOfdraftRoadmapTimelineTextInput=!0,this.$nextTick((()=>{this.$refs.draftRoadmapTimelineTextInput.focus()})))},onDialogCloseChangeRoadmapTimelineTextInput(){this.dialogVisiableOfdraftRoadmapTimelineTextInput=!1,this.newDraftRoadmaoTimeline()},createRoadmapTimeline(){this.dialogVisiableOfdraftRoadmapTimelineTextInput=!1,this.draftRoadmapTimeline.isBuilding=!1,this.draftRoadmapTimeline.isFinish=!0,this.draftRoadmapTimeline.property.width=60*this.draftRoadmapTimeline.property.dayCount,this.roadmapTimeLines.push({property:{backgroundColor:this.draftRoadmapTimeline.property.backgroundColor,left:this.draftRoadmapTimeline.property.left,top:this.draftRoadmapTimeline.property.top,width:this.draftRoadmapTimeline.property.width,text:this.draftRoadmapTimeline.property.text}}),this.newDraftRoadmaoTimeline(),this.cache()},cache(){window.localStorage.setItem("roadmapTimeLines1.0",JSON.stringify(this.roadmapTimeLines))},newDraftRoadmaoTimeline(){this.draftRoadmapTimeline=this.getDraftRoadmaoTimeline()},buildTimeNodes(){const e=moment(new Date).subtract(1,"months"),a=moment(new Date).add(4,"months"),i=moment.range(e,a);return Array.from(i.by("day",{excludeEnd:!0})).map((e=>{let a=moment(e),i={name:a.format("YYYY-MM-DD"),whatDayOfWeek:a.format("dd").substring(0,1),whatDayOfMonth:a.format("D")};return"1"===a.format("D")&&(i.whatMonthOfYear=a.format("MMM")),i}))}},mounted(){this.$nextTick((()=>{this.$refs.caledarView.style.height=document.documentElement.clientHeigh-132+"px";this.$refs.caledarView.scrollLeft=1800}))}},R={class:""},w=t("div",{class:"navbar"},[t("h3",null,"Z Roadmap")],-1),_={class:"caledar-view__item"},g={class:"caledar-view__item__head-wrap"},y={class:"caledar-view__item__MMM"},b={key:0},v={class:"caledar-view__item__head"},C={class:"caledar-view__item__head__dd"},M={class:"caledar-view__item__roadmap"},k={class:"caledar-view__item__roadmap__rows"},x={class:"roadmap__timeline__bd building"};T.render=function(u,h,T,B,D,L){const O=e("el-input"),I=e("el-dialog");return a(),i("div",R,[w,t("div",{class:"caledar-view",ref:"caledarView",onMousemove:h[3]||(h[3]=(...e)=>L.onMouseMoveForCaledarView&&L.onMouseMoveForCaledarView(...e))},[(a(!0),i(o,null,r(D.timeNodes,(e=>(a(),i("div",_,[t("div",g,[t("div",y,[e.whatMonthOfYear?(a(),i("span",b,n(e.whatMonthOfYear),1)):d("",!0)]),t("div",v,[t("div",C,n(e.whatDayOfWeek),1),t("div",{class:"caledar-view__item__head__D","data-name":e.name},[t("em",null,n(e.whatDayOfMonth),1)],8,["data-name"])])]),t("div",M,[t("ul",k,[(a(!0),i(o,null,r(D.rows,(e=>(a(),i("li",{onMouseup:h[1]||(h[1]=(...e)=>L.onMouseUpForRoadmapRowsItem&&L.onMouseUpForRoadmapRowsItem(...e)),onMousedown:h[2]||(h[2]=(...e)=>L.onMouseDownForRoadmapRowsItem&&L.onMouseDownForRoadmapRowsItem(...e)),class:[{building:D.draftRoadmapTimeline.isBuilding},"caledar-view__item__roadmap__rows__item"]},null,34)))),256))])])])))),256)),l(t("div",{class:["roadmap__timeline",{building:D.draftRoadmapTimeline.isBuilding}],style:L.draftRoadmapTimeLineStyle},[t("div",x,n(D.draftRoadmapTimeline.property.dayCount),1)],6),[[m,D.draftRoadmapTimeline.isBuilding]]),D.roadmapTimeLines.length?(a(!0),i(o,{key:0},r(D.roadmapTimeLines,((e,o)=>(a(),i("div",{class:"roadmap__timeline",style:this.buildRoadmapTimelineStyle(e)},[t("div",{class:"roadmap__timeline__bd finish",style:L.buildRoadmapTimelineBdStyle(e),onClick:a=>L.randomBackgroundColor(e)},[s(n(e.property.text)+" ",1),t("i",{class:"el-icon-close roadmap__timeline__bd__btn-remove",onClick:p((e=>L.onClickBtnRemoveOfRoadmapTimeline(o)),["stop"])},null,8,["onClick"])],12,["onClick"])],4)))),256)):d("",!0)],544),t(I,{width:"50%","custom-class":"draft-roadmap-time-line-dialog",title:"",modelValue:D.dialogVisiableOfdraftRoadmapTimelineTextInput,"onUpdate:modelValue":h[6]||(h[6]=e=>D.dialogVisiableOfdraftRoadmapTimelineTextInput=e),onClose:L.onDialogCloseChangeRoadmapTimelineTextInput},{default:f((()=>[t(O,{size:"medium",modelValue:D.draftRoadmapTimeline.property.text,"onUpdate:modelValue":h[4]||(h[4]=e=>D.draftRoadmapTimeline.property.text=e),ref:"draftRoadmapTimelineTextInput",placeholder:"Task name",onKeyup:h[5]||(h[5]=c((e=>L.createRoadmapTimeline()),["enter"]))},null,8,["modelValue"])])),_:1},8,["modelValue","onClose"])])};const B={name:"App",components:{CalendarView:T}};B.render=function(t,o,r,n,d,l){const m=e("CalendarView");return a(),i(m)};window["moment-range"].extendMoment(moment);var D=u(B);D.use(h),D.mount("#app");
