/*
    #author     gaofeng
    #date       2017/07/17
    #purpose    发件箱
*/

require(['vue', 'msg', 'layui'], function (Vue, msg) {
  $(function () {
      var vm = new Vue({
          el: '#app',
          data() {
            return  infoAll={
                  taskTb:[
                      {id:1,tel:'13667898899',template:'模板A',content:'世界那么大我想出去走走',sendtime:'2018-12-12 12:12:00',sendstatus:'已发送',client:'张三',user:'李四',creater:'王五',num:'88888'},
                      {id:2,tel:'13667898899',template:'模板A',content:'世界那么大我想出去走走',sendtime:'2018-12-12 12:12:00',sendstatus:'已发送',client:'张三',user:'李四',creater:'王五',num:'88888'},
                      {id:3,tel:'13667898899',template:'模板A',content:'世界那么大我想出去走走',sendtime:'2018-12-12 12:12:00',sendstatus:'已发送',client:'张三',user:'李四',creater:'王五',num:'88888'},
                      {id:4,tel:'13667898899',template:'模板A',content:'世界那么大我想出去走走',sendtime:'2018-12-12 12:12:00',sendstatus:'已发送',client:'张三',user:'李四',creater:'王五',num:'88888'},
                      {id:5,tel:'13667898899',template:'模板A',content:'世界那么大我想出去走走',sendtime:'2018-12-12 12:12:00',sendstatus:'已发送',client:'张三',user:'李四',creater:'王五',num:'88888'},
                      {id:6,tel:'13667898899',template:'模板A',content:'世界那么大我想出去走走',sendtime:'2018-12-12 12:12:00',sendstatus:'已发送',client:'张三',user:'李四',creater:'王五',num:'88888'},
                      {id:7,tel:'13667898899',template:'模板A',content:'世界那么大我想出去走走',sendtime:'2018-12-12 12:12:00',sendstatus:'已发送',client:'张三',user:'李四',creater:'王五',num:'88888'},
                  ],
                }
              },
              methods:{
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