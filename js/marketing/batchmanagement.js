/*
    #author     gaofeng
    #date       2017/07/17
    #purpose    批次短信
*/

require(['vue', 'msg', 'layui'], function (Vue, msg) {
  $(function () {
      var vm = new Vue({
          el: '#app',
          data() {
            return  infoAll={
                  taskTb:[
                      {id:1,batchnum:'666',template:'模板A',content:'世界那么大我想出去走走',sendtime:'2018-12-12 12:12:00',send:'888',count:'999',num:'1000',status:'已发送',creater:'王五'},
                      {id:2,batchnum:'666',template:'模板A',content:'世界那么大我想出去走走',sendtime:'2018-12-12 12:12:00',send:'888',count:'999',num:'1000',status:'已发送',creater:'王五'},
                      {id:3,batchnum:'666',template:'模板A',content:'世界那么大我想出去走走',sendtime:'2018-12-12 12:12:00',send:'888',count:'999',num:'1000',status:'已发送',creater:'王五'},
                      {id:4,batchnum:'666',template:'模板A',content:'世界那么大我想出去走走',sendtime:'2018-12-12 12:12:00',send:'888',count:'999',num:'1000',status:'已发送',creater:'王五'},
                      {id:5,batchnum:'666',template:'模板A',content:'世界那么大我想出去走走',sendtime:'2018-12-12 12:12:00',send:'888',count:'999',num:'1000',status:'已发送',creater:'王五'},
                      {id:6,batchnum:'666',template:'模板A',content:'世界那么大我想出去走走',sendtime:'2018-12-12 12:12:00',send:'888',count:'999',num:'1000',status:'已发送',creater:'王五'},
                      {id:7,batchnum:'666',template:'模板A',content:'世界那么大我想出去走走',sendtime:'2018-12-12 12:12:00',send:'888',count:'999',num:'1000',status:'已发送',creater:'王五'},
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