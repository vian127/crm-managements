/*
    #author     gaofeng
    #date       2017/07/16
    #purpose    管理列表页
*/

require(['vue', 'msg', 'layui'], function (Vue, msg) {
    $(function () {
        var vm = new Vue({
            el: '#app',
            data() {
              return  infoAll={
                    taskTh:[
                        {id:3,is_show:true,name:'任务标题'},
                        {id:4,is_show:true,name:'任务类型'},
                        {id:5,is_show:true,name:'问卷'},
                        {id:6,is_show:true,name:'任务客户数'},
                        {id:7,is_show:true,name:'已完成数量'},
                        {id:8,is_show:true,name:'执行中数量'},
                        {id:9,is_show:true,name:'待指派数量'},
                        {id:10,is_show:true,name:'创建时间'},
                        {id:11,is_show:true,name:'任务期限'},
                        {id:12,is_show:true,name:'创建人'},
                    ],
                    taskTb:[
                        {id:1,title:'新客户',type:'调查问卷',roll:'内容',clientNum:'5',successNum:'6',executory:'7',noAssigned:'8',created:'2018-6-12 12:12:12:00',limit:'2018-12-12 12:12:00',creater:'客服经理'},
                        {id:2,title:'新客户',type:'调查问卷',roll:'内容',clientNum:'5',successNum:'6',executory:'7',noAssigned:'8',created:'2018-6-12 12:12:12:00',limit:'2018-12-12 12:12:00',creater:'客服经理'},
                        {id:3,title:'新客户',type:'调查问卷',roll:'内容',clientNum:'5',successNum:'6',executory:'7',noAssigned:'8',created:'2018-6-12 12:12:12:00',limit:'2018-12-12 12:12:00',creater:'客服经理'},
                        {id:4,title:'新客户',type:'调查问卷',roll:'内容',clientNum:'5',successNum:'6',executory:'7',noAssigned:'8',created:'2018-6-12 12:12:12:00',limit:'2018-12-12 12:12:00',creater:'客服经理'},
                        {id:5,title:'新客户',type:'调查问卷',roll:'内容',clientNum:'5',successNum:'6',executory:'7',noAssigned:'8',created:'2018-6-12 12:12:12:00',limit:'2018-12-12 12:12:00',creater:'客服经理'},
                        {id:6,title:'新客户',type:'调查问卷',roll:'内容',clientNum:'5',successNum:'6',executory:'7',noAssigned:'8',created:'2018-6-12 12:12:12:00',limit:'2018-12-12 12:12:00',creater:'客服经理'},
                        {id:7,title:'新客户',type:'调查问卷',roll:'内容',clientNum:'5',successNum:'6',executory:'7',noAssigned:'8',created:'2018-6-12 12:12:12:00',limit:'2018-12-12 12:12:00',creater:'客服经理'},
                    ],
                    taskFilter:{
                        title:'客服',
                        roll:'1',
                        stage:'1',
                        rollName:'问卷名称',
                        principal:'1',
                        execute:'1',
                        company:'11',
                    },
                    list_info:{
                        is_show_select:false,
                        checked_all:true
                    }
                }
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
                expertFunc:function(){                                     //高级筛选
                    var layer = layui.layer;
                    layer.open({
                        type:0,
                        title:'',
                        area: ['500px', '300px'],
                        btn:['取消','确认'],
                        btnAlign: 'c',
                        content: $('#js-expert').html(),
                        btn2:function(index,layero){
                            alert(123)
                        }
                    });     
                },
                assignFunc:function(){                                  //批量指派
                        var layer = layui.layer;
                        layer.open({
                            type:0,
                            title:'',
                            area: ['400px', '220px'],
                            btn:['取消','确认'],
                            btnAlign: 'c',
                            content: $('#js-assign').html(),
                            btn2:function(index,layero){
                                alert(123)
                            }
                        });     
                },
                failFunc:function(){                                //批量未通过
                    var layer = layui.layer;
                    layer.open({
                        type:0,
                        title:'',
                        area: ['400px', '220px'],
                        btn:['取消','确认'],
                        btnAlign: 'c',
                        content: $('#js-fail').html(),
                        btn2:function(index,layero){
                         var result=$('#js-fail textarea').text();
                         console.log(layero)
                        }
                    });     
                },
                passFunc:function(){                            //批量通过
                    var layer = layui.layer;
                    layer.open({
                        type:0,
                        title:'',
                        area: ['350px', '180px'],
                        btn:['取消','确认'],
                        btnAlign: 'c',
                        content: $('#js-pass').html(),
                        btn2:function(index,layero){
                            alert(123)
                        }
                    });     
                },
                endFunc:function(){                              //批量终止
                    var layer = layui.layer;
                    layer.open({
                        type:0,
                        title:'',
                        area: ['400px', '220px'],
                        btn:['取消','确认'],
                        btnAlign: 'c',
                        content: $('#js-end').html(),
                        btn2:function(index,layero){
                            alert(123)
                        }
                    });  
                }
            },
            created(){
                this.page();
                layui.use('layer');
            }
        })  
    })
})