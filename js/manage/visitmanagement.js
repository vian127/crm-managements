/*
    #author     gaofeng
    #date       2017/07/18
    #purpose    任务统计详情页
*/

require(['vue', 'msg', 'layui'], function (Vue, msg) {
  $(function () {
      var def = {
          loading_ele: $('.js-loading-div')
      };
      def.loading_ele.fadeOut(400);
      var vm = new Vue({
          el: '#app',
          data:{
              taskTh:[
                  {id:2,is_show:true,name:'创建日期'},
                  {id:3,is_show:true,name:'创建人'},
                  {id:4,is_show:true,name:'主账号'},
                  {id:5,is_show:true,name:'客户'},
                  {id:6,is_show:true,name:'服务方式'},
                  {id:7,is_show:true,name:'用户角色'},
                  {id:8,is_show:true,name:'用户职位'},
                  {id:9,is_show:true,name:'服务对象'},
                  {id:10,is_show:true,name:'手机号码'},
                  {id:11,is_show:true,name:'联络类型'},
                  {id:12,is_show:true,name:'联络结果'},
                  {id:13,is_show:true,name:'服务类型'},
                  {id:14,is_show:true,name:'最后修改时间'},
                  {id:15,is_show:true,name:'最后修改人'},
              ],
              taskTb:[
                  {id:1,createtime:'2018-12-12 12:30:00',creater:'客服A',account:'skyblue',client:'上海服装服务有限公司',serve:'去电',role:'使用者',position:'经理',person:'张三',tel:'13626738899',type:'有效',result:'完成',genre:'初次回访',amendtime:'2018-12-12 12:12:00',modifier:'李四'},
                  {id:2,createtime:'2018-12-12 12:30:00',creater:'客服A',account:'skyblue',client:'上海服装服务有限公司',serve:'去电',role:'使用者',position:'经理',person:'张三',tel:'13626738899',type:'有效',result:'完成',genre:'初次回访',amendtime:'2018-12-12 12:12:00',modifier:'李四'},
                  {id:3,createtime:'2018-12-12 12:30:00',creater:'客服A',account:'skyblue',client:'上海服装服务有限公司',serve:'去电',role:'使用者',position:'经理',person:'张三',tel:'13626738899',type:'有效',result:'完成',genre:'初次回访',amendtime:'2018-12-12 12:12:00',modifier:'李四'},
                  {id:4,createtime:'2018-12-12 12:30:00',creater:'客服A',account:'skyblue',client:'上海服装服务有限公司',serve:'去电',role:'使用者',position:'经理',person:'张三',tel:'13626738899',type:'有效',result:'完成',genre:'初次回访',amendtime:'2018-12-12 12:12:00',modifier:'李四'},
                  {id:5,createtime:'2018-12-12 12:30:00',creater:'客服A',account:'skyblue',client:'上海服装服务有限公司',serve:'去电',role:'使用者',position:'经理',person:'张三',tel:'13626738899',type:'有效',result:'完成',genre:'初次回访',amendtime:'2018-12-12 12:12:00',modifier:'李四'},
                  {id:6,createtime:'2018-12-12 12:30:00',creater:'客服A',account:'skyblue',client:'上海服装服务有限公司',serve:'去电',role:'使用者',position:'经理',person:'张三',tel:'13626738899',type:'有效',result:'完成',genre:'初次回访',amendtime:'2018-12-12 12:12:00',modifier:'李四'},
                  {id:7,createtime:'2018-12-12 12:30:00',creater:'客服A',account:'skyblue',client:'上海服装服务有限公司',serve:'去电',role:'使用者',position:'经理',person:'张三',tel:'13626738899',type:'有效',result:'完成',genre:'初次回访',amendtime:'2018-12-12 12:12:00',modifier:'李四'},
              ],
              taskFilter:{
                  account:'',
                  company:'',
                  tel:'',
                  creater:'1',
                  createdStart:'',
                  createdEnd:'',
                  role:'1',
              },
              list_info:{
                  is_show_select:false,
                  checked_all:true
              },
             
          },
          mounted(){
              this.page();
              layui.use('layer');
              this.dateTime();
          },
          methods:{
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
              },
              saveSelect:function(){                                                      //确认提交选择
                  console.log(this.thead);
                  this.toggleSelect();
              },

              filterFunc:function(){                                                      //确认筛选列表
                  console.log(this.taskFilter);
              },
              page:function(){                                                            //分页
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
              expertFunc:function(){                                                      //高级筛选
                  var layer = layui.layer;
                  layer.open({
                      type:0,
                      title:'',
                      area: ['500px', 'auto'],
                      btn:['取消','确认'],
                      btnAlign: 'c',
                      content: $('#js-expert').html(),
                      btn2:function(index,layero){
                          alert(123)
                      }
                  });     
              },
              dateTime:function(){
                self=this
                layui.use('laydate', function(){
                  var laydate = layui.laydate;
                  laydate.render({
                    elem: '.js-createdStart',
                    done:function(value){
                      self.taskFilter.createdStart=value;
                    }
                  });
                  laydate.render({
                    elem: '.js-createdEnd',
                    done:function(value){
                      self.taskFilter.createdEnd=value;
                    }
                  });
              });
              }
          },
      })  
  })
})