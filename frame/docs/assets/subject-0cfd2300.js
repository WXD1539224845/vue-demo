import{n as b,_ as w,d as C,o as y,c as L,a as f,b as l,w as a,F as U,E as i,e as W,f as S,g as E,h as r,i as P,j as k,k as F,l as I}from"./index-31a9734b.js";import{E as v}from"./el-pagination-2d0e727f.js";import{c as z}from"./cloneDeep-498df1ab.js";const N=e=>b.request({url:"mall/cms-subject/add",method:"post",data:e}),T=e=>b.request({url:"mall/cms-subject/del/"+e.id}),$=e=>b.request({url:"mall/cms-subject/edit",method:"post",data:e}),A=e=>b.request({url:"mall/cms-subject/page",method:"post",data:e}),D=C({data(){return{subjectes:[],page:{total:0,current:1,size:10},dialogFormVisible:!1,subject:{albumPics:"",categoryId:0,categoryName:"",collectCount:0,commentCount:0,content:"",createTime:"",description:"",forwardCount:0,id:0,pic:"",productCount:0,readCount:0,recommendStatus:0,showStatus:0,title:""},formLabelWidth:80}},mounted(){this.getSubjectesPage(1)},methods:{toEdit(e){console.log(e),this.dialogFormVisible=!0,this.subject=z(e)},getSubjectesPage(e){A({current:e,size:10}).then(n=>{console.log(n);const p=n.data.page;this.subjectes=p.records,this.page=p}).catch(n=>{console.log(n)})},currentchange(e){this.getSubjectesPage(e),this.page.current=e},del(e){console.log(e),T({id:e}).then(n=>{if(n.success)this.getSubjectesPage(this.page.current),this.page.total%this.page.size==1?this.getAdCatesPage(this.page.current-1):this.getAdCatesPage(this.page.current);else return console.log(n.msg),!1}).catch(n=>{})},toAdd(){this.dialogFormVisible=!0,this.subject={albumPics:"",categoryId:0,categoryName:"",collectCount:0,commentCount:0,content:"",createTime:"",description:"",forwardCount:0,id:0,pic:"",productCount:0,readCount:0,recommendStatus:0,showStatus:0,title:""}},save(){const e=this.subject;e.id==0?N(e).then(t=>{if(t.success)this.dialogFormVisible=!1,this.getSubjectesPage(this.page.current),i(t.msg);else return i(t.msg),!1}).catch(t=>{i("网络错误联系管理员")}):$(e).then(t=>{if(t.success)this.dialogFormVisible=!1,this.getSubjectesPage(this.page.current),i(t.msg);else return i(t.msg),!1}).catch(t=>{i("网络错误联系管理员")})}}}),q={class:"subjectes"},B={class:"subject-tools"},M={class:"dialog-footer"};function G(e,t,n,p,H,J){const m=W,u=P,c=S,g=v,d=k,s=F,h=I,V=E;return y(),L(U,null,[f("div",q,[f("div",B,[l(m,{type:"warning",onClick:e.toAdd},{default:a(()=>[r("添加")]),_:1},8,["onClick"])]),l(c,{data:e.subjectes,style:{width:"100%"}},{default:a(()=>[l(u,{fixed:"",prop:"id",label:"#",width:"50"}),l(u,{prop:"albumPics",label:"专辑图片"}),l(u,{prop:"categoryId",label:"分类ID"}),l(u,{prop:"categoryName",label:"分类名称"}),l(u,{prop:"collectCount",label:"分组计算"}),l(u,{prop:"commentCount",label:"评论计数"}),l(u,{prop:"content",label:"内容"}),l(u,{prop:"createTime",label:"创建时间"}),l(u,{prop:"description",label:"描述"}),l(u,{prop:"forwardCount",label:"转发计数"}),l(u,{prop:"pic",label:"图片"}),l(u,{prop:"productCount",label:"产品计数"}),l(u,{prop:"readCount",label:"读取计数"}),l(u,{prop:"recommendStatus",label:"推荐状态"}),l(u,{prop:"showStatus",label:"显示状态"}),l(u,{prop:"title",label:"标题"}),l(u,{fixed:"right",label:"操作",width:"120"},{default:a(o=>[l(m,{link:"",type:"primary",size:"small",onClick:j=>e.toEdit(o.row)},{default:a(()=>[r("更新")]),_:2},1032,["onClick"]),l(m,{link:"",type:"primary",size:"small",onClick:j=>e.del(o.row.id)},{default:a(()=>[r("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),l(g,{layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,onCurrentChange:e.currentchange},null,8,["page-size","total","onCurrentChange"])]),l(V,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[17]||(t[17]=o=>e.dialogFormVisible=o),title:"广告类型编辑"},{footer:a(()=>[f("span",M,[l(m,{onClick:t[16]||(t[16]=o=>e.dialogFormVisible=!1)},{default:a(()=>[r("Cancel")]),_:1}),l(m,{type:"primary",onClick:e.save},{default:a(()=>[r(" 保存 ")]),_:1},8,["onClick"])])]),default:a(()=>[l(h,{model:e.subject},{default:a(()=>[l(s,{label:"编号","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.subject.id,"onUpdate:modelValue":t[0]||(t[0]=o=>e.subject.id=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(s,{label:"专辑图片","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.subject.albumPics,"onUpdate:modelValue":t[1]||(t[1]=o=>e.subject.albumPics=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(s,{label:"分类ID","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.subject.categoryId,"onUpdate:modelValue":t[2]||(t[2]=o=>e.subject.categoryId=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(s,{label:"分类名称","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.subject.categoryName,"onUpdate:modelValue":t[3]||(t[3]=o=>e.subject.categoryName=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(s,{label:"分组计算","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.subject.collectCount,"onUpdate:modelValue":t[4]||(t[4]=o=>e.subject.collectCount=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(s,{label:"评论计数","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.subject.commentCount,"onUpdate:modelValue":t[5]||(t[5]=o=>e.subject.commentCount=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(s,{label:"内容","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.subject.content,"onUpdate:modelValue":t[6]||(t[6]=o=>e.subject.content=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(s,{label:"创建时间","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.subject.createTime,"onUpdate:modelValue":t[7]||(t[7]=o=>e.subject.createTime=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(s,{label:"描述","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.subject.description,"onUpdate:modelValue":t[8]||(t[8]=o=>e.subject.description=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(s,{label:"转发计数","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.subject.forwardCount,"onUpdate:modelValue":t[9]||(t[9]=o=>e.subject.forwardCount=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(s,{label:"图片","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.subject.pic,"onUpdate:modelValue":t[10]||(t[10]=o=>e.subject.pic=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(s,{label:"产品计数","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.subject.productCount,"onUpdate:modelValue":t[11]||(t[11]=o=>e.subject.productCount=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(s,{label:"读取计数","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.subject.readCount,"onUpdate:modelValue":t[12]||(t[12]=o=>e.subject.readCount=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(s,{label:"推荐状态","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.subject.recommendStatus,"onUpdate:modelValue":t[13]||(t[13]=o=>e.subject.recommendStatus=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(s,{label:"显示状态","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.subject.showStatus,"onUpdate:modelValue":t[14]||(t[14]=o=>e.subject.showStatus=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(s,{label:"标题","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.subject.title,"onUpdate:modelValue":t[15]||(t[15]=o=>e.subject.title=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const R=w(D,[["render",G]]);export{R as default};