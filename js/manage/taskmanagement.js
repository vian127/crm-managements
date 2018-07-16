require.config({
    paths: {

    },

    shim: {
       
    }
});

require(['vue', 'msg', 'layui'], function (Vue, msg) {
    $(function () {
        var vm = new Vue({
            el: '#app',
            data() {
              return  infoAll={
                    taskTh:[
                        {id:1,is_show:true,name:'任务标题'},
                        {id:1,is_show:true,name:'任务类型'},
                        {id:1,is_show:true,name:'问卷'},
                        {id:1,is_show:true,name:'任务客户数'},
                        {id:1,is_show:true,name:'已完成数量'},
                        {id:1,is_show:true,name:'执行中数量'},
                        {id:1,is_show:true,name:'待指派数量'},
                        {id:1,is_show:true,name:'创建时间'},
                        {id:1,is_show:true,name:'任务期限'},
                        {id:1,is_show:true,name:'创建人'},
                    ],
                    taskTb:[
                        {id:1,is_show:true,title:'新客户',type:'调查问卷',roll:'内容',clientNum:'5',successNum:'6',executory:'7',noAssigned:'8',created:'2018-6-12 12:12:12:00',limit:'2018-12-12 12:12:00',creater:'客服经理'},
                        {id:2,is_show:true,title:'新客户',type:'调查问卷',roll:'内容',clientNum:'5',successNum:'6',executory:'7',noAssigned:'8',created:'2018-6-12 12:12:12:00',limit:'2018-12-12 12:12:00',creater:'客服经理'},
                        {id:3,is_show:true,title:'新客户',type:'调查问卷',roll:'内容',clientNum:'5',successNum:'6',executory:'7',noAssigned:'8',created:'2018-6-12 12:12:12:00',limit:'2018-12-12 12:12:00',creater:'客服经理'},
                        {id:4,is_show:true,title:'新客户',type:'调查问卷',roll:'内容',clientNum:'5',successNum:'6',executory:'7',noAssigned:'8',created:'2018-6-12 12:12:12:00',limit:'2018-12-12 12:12:00',creater:'客服经理'},
                        {id:5,is_show:true,title:'新客户',type:'调查问卷',roll:'内容',clientNum:'5',successNum:'6',executory:'7',noAssigned:'8',created:'2018-6-12 12:12:12:00',limit:'2018-12-12 12:12:00',creater:'客服经理'},
                        {id:6,is_show:true,title:'新客户',type:'调查问卷',roll:'内容',clientNum:'5',successNum:'6',executory:'7',noAssigned:'8',created:'2018-6-12 12:12:12:00',limit:'2018-12-12 12:12:00',creater:'客服经理'},
                        {id:7,is_show:true,title:'新客户',type:'调查问卷',roll:'内容',clientNum:'5',successNum:'6',executory:'7',noAssigned:'8',created:'2018-6-12 12:12:12:00',limit:'2018-12-12 12:12:00',creater:'客服经理'},
                    ],is_show:true,
                    taskFilter:{
                        title:'客服',
                        type:'1',
                        timeStart:'2017-12-11',
                        timeEnd:'2017-12-12',
                        limitStart:'2018-01-01',
                        limitEnd:'2018-02-02',
                    },
                    list_info:{
                        is_show_select:false,
                        checked_all:true
                    }
                }
            },
            methods:{
                toggleSelect:function(){
                    this.list_info.is_show_select=!this.list_info.is_show_select;
                },
                changeCol:function(event,id){
                    var tag = event.target;
                    var is_check=tag.checked;
                    if(is_check==true){
                        $('.js-list-table').find('.js-col'+id+'-ele').show();
                    }else{
                        $('.js-list-table').find('.js-col'+id+'-ele').hide()
                    }
                    var checked_len=0;
                    this.taskTh.forEach(function(item){
                        if(id==item.id){
                            item.is_show=is_check;
                        }
                        item.is_show=true?checked_len++:checked_len;
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
                }
            },
            created(){
                this.page()
            }
        })
       
        $('.js-filter').on('click',function(){
            console.log(vm.taskFilter)
        })
    })
})