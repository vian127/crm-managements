/*
	#author		lut000
	#date 		2018/07/12
    #porpuse    共用入口
*/
require(['vue'],function(Vue){
	var app=new Vue({
		el:'#app',
		data(){
			return {
				login_info:{
					account:'',
					password:'',
					code:'',
					is_account:false,
					is_password:false,
					is_code:false,
					msg:''
				}
			}
		},
		methods:{
			subFunc:function(e){
				var tag=e.target;
				var data=this.login_info;
				var txt='',p_ele=null,is_next=false;
				data.is_account=false;
				data.is_password=false;
				data.is_code=false;
				if(data.account==''){
					txt='请输入用户名';
					data.msg=txt;
					data.is_account=true;
				}else if(data.account.length<4){
					txt='用户名至少4位字符';
					data.is_account=true;
				}else if(data.password==''){
					txt='请输入密码';
					data.is_password=true;
					console.log(2222)
				}else if(data.password.length<6){
					txt='密码至少6位字符';
					data.is_password=true;
				}else if(data.code==''){
					txt='请输入图形验证码';
					data.is_code=true;
				}else if(data.code.length!=4){
					txt='请输入正确验证码';
					data.is_code=true;
				}else{
					is_next=true;
				}

				if(is_next==true){
					console.log('当前登录数据：'+data);
				}else{
					data.msg=txt;
				}
			}
		}
	})
});