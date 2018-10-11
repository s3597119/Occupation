webpackJsonp([17],{fUBA:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("e8iq"),i={data:function(){return{filterText:"",list:null,listLoading:!0,dialogFormVisible:!1,formLabelwidth:"160px",detail:{jobId:"",number:"",salary:"",expectWorkExperience:"",expectEduBackground:"",jobRequirement:"",description:"",createTime:"",status:"",employer:{email:"",name:"",phone:"",address:"",description:"",domain:"",scale:"",isForbidden:!1,reportedNum:0}}}},filters:{statusFilter:function(e){return{0:"success",1:"danger"}[e]}},created:function(){this.fetchData()},computed:{filteredList:function(){var e=this.list,t=this.filterText;return t?(t=t.trim().toLowerCase(),e=e.filter(function(e){if(-1!==e.description.toLowerCase().indexOf(t)||-1!==e.jobRequirement.toLowerCase().indexOf(t))return e}),e):e}},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(a.f)().then(function(t){e.list=t.data,e.listLoading=!1})},reportEmployer:function(e){var t=this;Object(a.i)(e).then(function(e){t.fetchData()})},handApply:function(e,t){var l=this;Object(a.b)(e,t).then(function(e){l.fetchData()})}}},r={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container"},[l("el-input",{staticStyle:{"margin-bottom":"30px"},attrs:{placeholder:"Search"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),e._v(" "),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.filteredList,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[l("el-table-column",{attrs:{align:"center",label:"jobId",width:"90",prop:"jobId",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.jobId)+"\n      ")]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"Number",width:"90",align:"center",prop:"Number",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.number)+"\n      ")]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"Salary",width:"90",prop:"Salary",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.salary)+"\n      ")]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"Work Experience",width:"90",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.expectWorkExperience)+"\n      ")]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"Edu Background",width:"90",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.expectEduBackground)+"\n      ")]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"Requirement"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.jobRequirement)+"\n      ")]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"Description"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.description)+"\n      ")]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"Create Time",width:"110",align:"center",prop:"Create Time",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[l("i",{staticClass:"el-icon-time"}),e._v(" "),l("span",[e._v(e._s(t.row.createTime))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"Status",width:"90",align:"center",prop:"Status",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-tag",{attrs:{type:e._f("statusFilter")(t.row.status)}},[e._v(e._s(0==t.row.status?"valid":"invalid"))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"Operation",width:"260",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"mini"},on:{click:function(l){e.dialogFormVisible=!0,e.detail=t.row}}},[e._v("detail")]),e._v(" "),l("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(l){e.handApply(t.row.jobId,t.row.employer.email)}}},[e._v("apply")]),e._v(" "),l("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(l){e.reportEmployer(t.row.employer.email)}}},[e._v("report")])]}}])})],1),e._v(" "),l("el-dialog",{attrs:{title:"Job Detail",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[l("el-form",{attrs:{model:e.detail}},[l("el-form-item",{attrs:{label:"jobId","label-width":e.formLabelwidth}},[l("el-input-number",{attrs:{disabled:!0},model:{value:e.detail.jobId,callback:function(t){e.$set(e.detail,"jobId",t)},expression:"detail.jobId"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Number","label-width":e.formLabelwidth}},[l("el-input-number",{attrs:{disabled:!0},model:{value:e.detail.number,callback:function(t){e.$set(e.detail,"number",t)},expression:"detail.number"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Salary","label-width":e.formLabelwidth}},[l("el-input",{attrs:{disabled:!0},model:{value:e.detail.salary,callback:function(t){e.$set(e.detail,"salary",t)},expression:"detail.salary"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Work Experience","label-width":e.formLabelwidth}},[l("el-input",{attrs:{disabled:!0},model:{value:e.detail.expectWorkExperience,callback:function(t){e.$set(e.detail,"expectWorkExperience",t)},expression:"detail.expectWorkExperience"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Edu Background","label-width":e.formLabelwidth}},[l("el-input",{attrs:{disabled:!0},model:{value:e.detail.expectEduBackground,callback:function(t){e.$set(e.detail,"expectEduBackground",t)},expression:"detail.expectEduBackground"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"jobRequirement","label-width":e.formLabelwidth}},[l("el-input",{attrs:{type:"textarea",disabled:!0},model:{value:e.detail.jobRequirement,callback:function(t){e.$set(e.detail,"jobRequirement",t)},expression:"detail.jobRequirement"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Description","label-width":e.formLabelwidth}},[l("el-input",{attrs:{type:"textarea",disabled:!0},model:{value:e.detail.description,callback:function(t){e.$set(e.detail,"description",t)},expression:"detail.description"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Create Time","label-width":e.formLabelwidth}},[l("el-date-picker",{attrs:{type:"datetime",disabled:!0},model:{value:e.detail.createTime,callback:function(t){e.$set(e.detail,"createTime",t)},expression:"detail.createTime"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Employer email","label-width":e.formLabelwidth}},[l("el-input",{attrs:{disabled:!0},model:{value:e.detail.employer.email,callback:function(t){e.$set(e.detail.employer,"email",t)},expression:"detail.employer.email"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Employer name","label-width":e.formLabelwidth}},[l("el-input",{attrs:{disabled:!0},model:{value:e.detail.employer.name,callback:function(t){e.$set(e.detail.employer,"name",t)},expression:"detail.employer.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Employer phone","label-width":e.formLabelwidth}},[l("el-input",{attrs:{disabled:!0},model:{value:e.detail.employer.phone,callback:function(t){e.$set(e.detail.employer,"phone",t)},expression:"detail.employer.phone"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Employer address","label-width":e.formLabelwidth}},[l("el-input",{attrs:{disabled:!0},model:{value:e.detail.employer.address,callback:function(t){e.$set(e.detail.employer,"address",t)},expression:"detail.employer.address"}})],1),e._v(" "),l("el-form-item",{attrs:{type:"textarea",label:"Employer description","label-width":e.formLabelwidth}},[l("el-input",{attrs:{disabled:!0},model:{value:e.detail.employer.description,callback:function(t){e.$set(e.detail.employer,"description",t)},expression:"detail.employer.description"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Employer domain","label-width":e.formLabelwidth}},[l("el-input",{attrs:{disabled:!0},model:{value:e.detail.employer.domain,callback:function(t){e.$set(e.detail.employer,"domain",t)},expression:"detail.employer.domain"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Employer scale","label-width":e.formLabelwidth}},[l("el-input",{attrs:{disabled:!0},model:{value:e.detail.employer.scale,callback:function(t){e.$set(e.detail.employer,"scale",t)},expression:"detail.employer.scale"}})],1)],1)],1)],1)},staticRenderFns:[]},o=l("VU/8")(i,r,!1,null,null,null);t.default=o.exports}});