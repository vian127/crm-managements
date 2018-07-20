/*
    #author     gaofeng
    #date       2017/07/16
    #purpose    新增任务页
*/

require(['vue', 'msg', 'layui'], function (Vue, msg) {
  $(function () {
      var vm = new Vue({
          el: '#app',
          data() {
            return  infoAll={
                  taskTh:[
                      {id:3,is_show:true,name:'主账号'},
                      {id:4,is_show:true,name:'公司名称'},
                      {id:5,is_show:true,name:'未回访天数'},
                      {id:6,is_show:true,name:'未登录天数'},
                      {id:7,is_show:true,name:'领用人'},
                      {id:8,is_show:true,name:'领用时间'}
                  ],
                  taskTb:[
                      {id:1,is_show:false,account:'skyblue',company:'上海服装服务有限公司',visit:'5',login:'5',receive:'6',time:'2018-12-12 12:12:12'},
                      {id:2,is_show:false,account:'skyblue',company:'上海服装服务有限公司',visit:'5',login:'5',receive:'6',time:'2018-12-12 12:12:12'},
                      {id:3,is_show:false,account:'skyblue',company:'上海服装服务有限公司',visit:'5',login:'5',receive:'6',time:'2018-12-12 12:12:12'},
                      {id:4,is_show:false,account:'skyblue',company:'上海服装服务有限公司',visit:'5',login:'5',receive:'6',time:'2018-12-12 12:12:12'},
                      {id:5,is_show:false,account:'skyblue',company:'上海服装服务有限公司',visit:'5',login:'5',receive:'6',time:'2018-12-12 12:12:12'},
                      {id:6,is_show:false,account:'skyblue',company:'上海服装服务有限公司',visit:'5',login:'5',receive:'6',time:'2018-12-12 12:12:12'},
                      {id:7,is_show:false,account:'skyblue',company:'上海服装服务有限公司',visit:'5',login:'5',receive:'6',time:'2018-12-12 12:12:12'},
                  ],
                  collect:{
                      type:'1',
                      title:'123',
                      desc:'123',
                      expire:'',
                      assign:'1',
                      limitEnd:'2018-02-02',
                  },
                 taskNum:{
                     add:'111',
                     select:'222'
                 },
                 list_info:{
                    is_show_select:false,
                    checked_all:false,
                }
              }
          },
          methods:{   
			  createdFunc:function(){                                                      //确认筛选列表
				console.log(this.collect);
			  },
              toggleSelect:function(){                                                     //显示隐藏
                  this.list_info.is_show_select=!this.list_info.is_show_select;
              },
              changeCol:function(event,id){                                               //单选
                  var tag=event.target;
                  var is_check=tag.checked;
                  if(is_check==true){
                      $('.js-list-table').find('.js-col'+id+'-ele').show();
                  }else{
                      $('.js-list-table').find('.js-col'+id+'-ele').hide();
                  }
                  var checked_len=0;
                  this.taskTh.forEach(function(item){
                      if(id==item.id){
                          item.is_show=is_check;
                      }
                      item.is_show==true?checked_len++:checked_len;
                  });

                  // 全选判断
                  if(is_check==true){
                      if(this.list_info.checked_all==false && checked_len==this.taskTh.length){
                          this.list_info.checked_all=true;
                      }
                  }else{
                      if(checked_len==this.taskTh.length-1 && this.list_info.checked_all==true){
                          this.list_info.checked_all=false;
                      }
                  }
              },
              changeAll:function(e){                                                      //全选
                  var tag = e.target;
                  var is_check = tag.checked;
                  if(is_check==true){
                      $('.js-list-table').find('.js-can-hide').show();
                      this.taskTh.forEach(item=>item.is_show=true);
                  }else{
                      $('.js-list-table').find('.js-can-hide').hide();
                      this.taskTh.forEach(item=>item.is_show=false);
                  }
>>>>>>> c69a7ec7856bf14e46e0eb8d9bddfde31a36b5fc
              },
              changeAll:function(e){
                var tag = e.target;
                var is_check = tag.checked;
                if(is_check==true){
                    this.taskTb.forEach(item=>{item.is_show=true;});
                }else{
                    this.taskTb.forEach(item=>item.is_show=false);
                }
                
              },
              changeCol:function(e,id){
                var tag=event.target;
                var is_check=tag.checked;

                var checked_len=0;
                this.taskTb.forEach(function(item){
                    if(id==item.id){
                        item.is_show=is_check;
                    }
                    item.is_show==true?checked_len++:checked_len;
                });
              // 全选判断
              if(is_check==true){
                if(this.list_info.checked_all==false && checked_len==this.taskTb.length){
                    this.list_info.checked_all=true;
                }
            }else{
                if(checked_len==this.taskTb.length-1 && this.list_info.checked_all==true){
                    this.list_info.checked_all=false;
                }
            }

              },
              page:function(){
                  layui.use('laypage', function () {
                      var laypage = layui.laypage;
                      //执行一个laypage实例
                      laypage.render({
                          elem: 'test1',
                          count: 50,
                          layout: ['prev', 'page', 'next', 'limit', 'count', 'skip'],
                          jump: function (obj) {
                              console.log(obj)
                              var curr = obj.curr;
                          }
                      });
                  });
              },
              dateTime:function(){
                layui.use('laydate', function(){
                    var laydate = layui.laydate;
                    laydate.render({
                      elem: '#js-tasklimit'
                    });
                });
              },
          },
          created(){
              this.page();
              this.dateTime();
          }
      })
     
     
  })
})