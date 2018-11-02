webpackJsonp([1],{"+PKk":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={name:"register",data:function(){var e=function(e,n,t){n.length<5?t(new Error("Password cannot be less than five")):t()};return{registerForm:{email:"",password:"",re_password:""},loginRules:{password:[{required:!0,trigger:"blur",validator:e}],re_password:[{required:!0,trigger:"blur",validator:e}]},loading:!1,pwdType:"password"}},methods:{showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},handleRegister:function(){var e=this;this.$refs.registerForm.validate(function(n){if(!n)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("RegisterByAdmin",e.registerForm).then(function(){e.loading=!1,e.$router.push({path:"/"})}).catch(function(){e.loading=!1})})}}},o={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"registerForm",staticClass:"login-form",attrs:{autoComplete:"on",model:e.registerForm,rules:e.loginRules,"label-position":"left"}},[t("h3",{staticClass:"title"},[e._v("Admin Register")]),e._v(" "),t("el-form-item",{attrs:{prop:"email"}},[t("span",{staticClass:"svg-container svg-container_login"},[t("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),t("el-input",{attrs:{name:"email",type:"text",autoComplete:"on",placeholder:"email"},model:{value:e.registerForm.email,callback:function(n){e.$set(e.registerForm,"email",n)},expression:"registerForm.email"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),t("el-input",{attrs:{name:"password",type:e.pwdType,autoComplete:"on",placeholder:"password"},nativeOn:{keyup:function(n){if(!("button"in n)&&e._k(n.keyCode,"enter",13,n.key))return null;e.handleRegister(n)}},model:{value:e.registerForm.password,callback:function(n){e.$set(e.registerForm,"password",n)},expression:"registerForm.password"}}),e._v(" "),t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{prop:"re_password"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),t("el-input",{attrs:{name:"re_password",type:e.pwdType,autoComplete:"on",placeholder:"password"},nativeOn:{keyup:function(n){if(!("button"in n)&&e._k(n.keyCode,"enter",13,n.key))return null;e.handleRegister(n)}},model:{value:e.registerForm.re_password,callback:function(n){e.$set(e.registerForm,"re_password",n)},expression:"registerForm.re_password"}}),e._v(" "),t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),e._v(" "),t("el-form-item",[t("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.loading},nativeOn:{click:function(n){n.preventDefault(),e.handleRegister(n)}}},[e._v("\n        Sign up\n      ")])],1),e._v(" "),t("div",{staticClass:"tips"},[t("span",{staticStyle:{"margin-right":"150px"}},[t("a",{staticClass:"link",attrs:{href:"#/login"}},[e._v("Already have")])]),e._v(" "),t("span",[t("a",{staticClass:"link",attrs:{href:"#/register/employer"}},[e._v("Register as employer ")])]),e._v(" "),t("span",[t("a",{staticClass:"link",attrs:{href:"#/register/employee"}},[e._v("or employee")])])])],1)],1)},staticRenderFns:[]};var i=t("VU/8")(r,o,!1,function(e){t("/rYm"),t("JF8E")},"data-v-e36c1cd2",null);n.default=i.exports},"/rYm":function(e,n,t){var r=t("SAOD");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t("rjj0")("6c67cee2",r,!0)},JF8E:function(e,n,t){var r=t("mh+v");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t("rjj0")("5eae6555",r,!0)},SAOD:function(e,n,t){(e.exports=t("FZ+f")(!1)).push([e.i,"/* reset element-ui css */\n.login-container .el-input {\n  display: inline-block;\n  height: 47px;\n  width: 85%;\n}\n.login-container .el-input input {\n    background: transparent;\n    border: 0px;\n    -webkit-appearance: none;\n    border-radius: 0px;\n    padding: 12px 5px 12px 15px;\n    color: #eee;\n    height: 47px;\n}\n.login-container .el-input input:-webkit-autofill {\n      -webkit-box-shadow: 0 0 0px 1000px #2d3a4b inset !important;\n      -webkit-text-fill-color: #fff !important;\n}\n.login-container .el-form-item {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  color: #454545;\n}\n.link:hover {\n  color: #409EFF;\n}\n",""])},"mh+v":function(e,n,t){(e.exports=t("FZ+f")(!1)).push([e.i,"\n.login-container[data-v-e36c1cd2] {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background-color: #2d3a4b;\n}\n.login-container .login-form[data-v-e36c1cd2] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    width: 520px;\n    padding: 35px 35px 15px 35px;\n    margin: 120px auto;\n}\n.login-container .tips[data-v-e36c1cd2] {\n    font-size: 14px;\n    color: #fff;\n    margin-bottom: 10px;\n}\n.login-container .tips span[data-v-e36c1cd2]:first-of-type {\n      margin-right: 16px;\n}\n.login-container .svg-container[data-v-e36c1cd2] {\n    padding: 6px 5px 6px 15px;\n    color: #889aa4;\n    vertical-align: middle;\n    width: 30px;\n    display: inline-block;\n}\n.login-container .svg-container_login[data-v-e36c1cd2] {\n      font-size: 20px;\n}\n.login-container .title[data-v-e36c1cd2] {\n    font-size: 26px;\n    font-weight: 400;\n    color: #eee;\n    margin: 0px auto 40px auto;\n    text-align: center;\n    font-weight: bold;\n}\n.login-container .show-pwd[data-v-e36c1cd2] {\n    position: absolute;\n    right: 10px;\n    top: 7px;\n    font-size: 16px;\n    color: #889aa4;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n",""])}});