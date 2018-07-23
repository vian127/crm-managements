/*
    #author     gaofeng
    #date       2017/07/17
    #purpose    批次短信
*/

require(['vue', 'msg', 'layui'], function (Vue, msg) {
  $(function () {
      var vm = new Vue({
          el: '#app',
          data:{
              taskTb:[
                  {id:1,company:'上海服装服务有限公司',tel:'13689889988',name:'张三'},
                  {id:2,company:'上海服装服务有限公司',tel:'13689889988',name:'张三'},
                  {id:3,company:'上海服装服务有限公司',tel:'13689889988',name:'张三'},
                  {id:4,company:'上海服装服务有限公司',tel:'13689889988',name:'张三'},
                  {id:5,company:'上海服装服务有限公司',tel:'13689889988',name:'张三'},
                  {id:6,company:'上海服装服务有限公司',tel:'13689889988',name:'张三'},
                  {id:7,company:'上海服装服务有限公司',tel:'13689889988',name:'张三'},
              ],
              desc:null,
              remnant:0
              },
              methods:{
                descInput(){
                  var txtVal = this.desc.length;
                  this.remnant =txtVal;
                  },
                  page:function(){
                    layui.use('laypage', function () {
                        var laypage = layui.laypage;
                        //执行一个laypage实例
                        laypage.render({
                            elem: 'laypage-section',
                            count: 50,
                            layout: ['prev', 'page', 'next', 'limit', 'count', 'skip'],
                            jump: function (obj) {
                                console.log(obj)
                                var curr = obj.curr;
                            }
                        });
                    });
                  },
              },
              mounted(){
                this.page();
              }
          })
        })
})