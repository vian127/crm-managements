/*
    #author     gaofeng
    #date       2017/07/16
    #purpose    任务列表页
*/

require(['vue', 'msg', 'layui'], function (Vue, msg) {
  $(function () {
      var vm = new Vue({
          el: '#app',
          data:{
              taskTh:[
                  {id:3,is_show:true,name:'任务标题'},
                  {id:4,is_show:true,name:'任务编号'},
                  {id:5,is_show:true,name:'任务类型'},
                  {id:6,is_show:true,name:'状态'},
                  {id:7,is_show:true,name:'当前负责人'},
                  {id:8,is_show:true,name:'问卷'},
                  {id:9,is_show:true,name:'预约日期'},
                  {id:10,is_show:true,name:'创建时间'},
                  {id:11,is_show:true,name:'最后更新时间'},
                  {id:12,is_show:true,name:'任务期限'},
                  {id:13,is_show:true,name:'客户'},
                  {id:14,is_show:true,name:'创建人'},
                  {id:15,is_show:true,name:'执行人'},
              ],
              taskTb:[
                  {id:1,title:'新客户',num:'111',type:'调查问卷',status:'待指派',principal:'客服C',roll:'问卷',order:'2018-07-21 12:12:00',cretime:'2018-5-05-12 12:12:00',uptime:'2018-12-12 12:12:00',expire:'2018-08-01 12:12:00',user:'客户',creater:'客服经理',exe:'客服C'},
                  {id:2,title:'新客户',num:'111',type:'调查问卷',status:'待指派',principal:'客服C',roll:'问卷',order:'2018-07-21 12:12:00',cretime:'2018-5-05-12 12:12:00',uptime:'2018-12-12 12:12:00',expire:'2018-08-01 12:12:00',user:'客户',creater:'客服经理',exe:'客服C'},
                  {id:3,title:'新客户',num:'111',type:'调查问卷',status:'待指派',principal:'客服C',roll:'问卷',order:'2018-07-21 12:12:00',cretime:'2018-5-05-12 12:12:00',uptime:'2018-12-12 12:12:00',expire:'2018-08-01 12:12:00',user:'客户',creater:'客服经理',exe:'客服C'},
                  {id:4,title:'新客户',num:'111',type:'调查问卷',status:'待指派',principal:'客服C',roll:'问卷',order:'2018-07-21 12:12:00',cretime:'2018-5-05-12 12:12:00',uptime:'2018-12-12 12:12:00',expire:'2018-08-01 12:12:00',user:'客户',creater:'客服经理',exe:'客服C'},
                  {id:5,title:'新客户',num:'111',type:'调查问卷',status:'待指派',principal:'客服C',roll:'问卷',order:'2018-07-21 12:12:00',cretime:'2018-5-05-12 12:12:00',uptime:'2018-12-12 12:12:00',expire:'2018-08-01 12:12:00',user:'客户',creater:'客服经理',exe:'客服C'},
                  {id:6,title:'新客户',num:'111',type:'调查问卷',status:'待指派',principal:'客服C',roll:'问卷',order:'2018-07-21 12:12:00',cretime:'2018-5-05-12 12:12:00',uptime:'2018-12-12 12:12:00',expire:'2018-08-01 12:12:00',user:'客户',creater:'客服经理',exe:'客服C'},
                  {id:7,title:'新客户',num:'111',type:'调查问卷',status:'待指派',principal:'客服C',roll:'问卷',order:'2018-07-21 12:12:00',cretime:'2018-5-05-12 12:12:00',uptime:'2018-12-12 12:12:00',expire:'2018-08-01 12:12:00',user:'客户',creater:'客服经理',exe:'客服C'},
                  {id:7,title:'新客户',num:'111',type:'调查问卷',status:'待指派',principal:'客服C',roll:'问卷',order:'2018-07-21 12:12:00',cretime:'2018-5-05-12 12:12:00',uptime:'2018-12-12 12:12:00',expire:'2018-08-01 12:12:00',user:'客户',creater:'客服经理',exe:'客服C'},
              ],
              taskFilter:{
                  title:'',
                  roll:'1',
                  stage:'1',
                  principal:'1',
                  execute:'',
                  company:'',
              },
              list_info:{
                  is_show_select:false,
                  checked_all:true
              },
              form_info:{
                  is_single_select:false,
                  is_checked_all:false
              },
              taskNum:'22',
              is_set_time:false
              
          },
          mounted() {
              this.page();
          },
          methods: {
              filterFunc: function () {                               //确认筛选                               
                  console.log(this.taskFilter);
              },
              toggleSelect: function () {                             //显示隐藏
                  this.list_info.is_show_select = !this.list_info.is_show_select;
              },
              changeCol: function (event, id) {                        //单选
                  var tag = event.target;
                  var is_check = tag.checked;
                  if (is_check == true) {
                      $('.js-list-table').find('.js-col' + id + '-ele').show();
                  } else {
                      $('.js-list-table').find('.js-col' + id + '-ele').hide();
                  }
                  var checked_len = 0;
                  this.taskTh.forEach(function (item) {
                      if (id == item.id) {
                          item.is_show = is_check;
                      }
                      item.is_show == true ? checked_len++ : checked_len;
                  });

                  // 全选判断
                  if (is_check == true) {
                      if (this.list_info.checked_all == false && checked_len == this.taskTh.length) {
                          this.list_info.checked_all = true;
                      }
                  } else {
                      if (checked_len == this.taskTh.length - 1 && this.list_info.checked_all == true) {
                          this.list_info.checked_all = false;
                      }
                  }
              },
              changeAll: function (e) {                                 //全选
                  var tag = e.target;
                  var is_check = tag.checked;
                  if (is_check == true) {
                      $('.js-list-table').find('.js-can-hide').show();
                      this.taskTh.forEach(item => item.is_show = true);
                  } else {
                      $('.js-list-table').find('.js-can-hide').hide();
                      this.taskTh.forEach(item => item.is_show = false);
                  }
              },
              page: function () {                                     //分页
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
              formChangeAll: function (e) {                               //表格全选
                  var tag = e.target;
                  var is_check = tag.checked;
                  if (is_check == true) {
                      this.taskTb.forEach(item => {
                          item.is_show = true;
                      });
                  } else {
                      this.taskTb.forEach(item => item.is_show = false);
                  }

              },
              formChangeCol: function (e, id) {                           //表格单选
                  var tag = event.target;
                  var is_check = tag.checked;

                  var checked_len = 0;
                  this.taskTb.forEach(function (item) {
                      if (id == item.id) {
                          item.is_show = is_check;
                      }
                      item.is_show == true ? checked_len++ : checked_len;
                  });
                  // 全选判断
                  if (is_check == true) {
                      if (this.form_info.is_checked_all == false && checked_len == this.taskTb.length) {
                          this.form_info.is_checked_all = true;
                      }
                  } else {
                      if (checked_len == this.taskTb.length - 1 && this.form_info.is_checked_all == true) {
                          this.form_info.is_checked_all = false;
                      }
                  }

              },
          },
      })
  })
})