/*
    #author     gaofeng
    #date       2017/07/17
    #purpose    查看任务页
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
              taskTb:[
                  {id:1,time:'2018-12-12 12:12:12',type:'指派',name:'张三',content:'指派给客服组长'},
                  {id:2,time:'2018-12-12 12:12:12',type:'指派',name:'张三',content:'指派给客服组长'},
                  {id:3,time:'2018-12-12 12:12:12',type:'指派',name:'张三',content:'指派给客服组长'},
                  {id:4,time:'2018-12-12 12:12:12',type:'指派',name:'张三',content:'指派给客服组长'},
                  {id:5,time:'2018-12-12 12:12:12',type:'指派',name:'张三',content:'指派给客服组长'},
                  {id:6,time:'2018-12-12 12:12:12',type:'指派',name:'张三',content:'指派给客服组长'},
                  {id:7,time:'2018-12-12 12:12:12',type:'指派',name:'张三',content:'指派给客服组长'},
              ],   
          },
          methods: {

          },
      })
  })
})