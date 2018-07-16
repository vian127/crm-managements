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
                        {id:1,name:'任务标题'},
                        {id:1,name:'任务类型'},
                        {id:1,name:'问卷'},
                        {id:1,name:'任务客户数'},
                        {id:1,name:'已完成数量'},
                        {id:1,name:'执行中数量'},
                        {id:1,name:'待指派数量'},
                        {id:1,name:'创建时间'},
                        {id:1,name:'任务期限'},
                        {id:1,name:'创建人'},
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
                        type:'1',
                        timeStart:'2017-12-11',
                        timeEnd:'2017-12-12',
                        limitStart:'2018-01-01',
                        limitEnd:'2018-02-02',
                    }

                }
            },
            methods:{
                page(){
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
        $('.js-isshow').on('click',function(){
            $('.choice').slideToggle(200);
        })
        $('.js-filter').on('click',function(){
            console.log(vm.taskFilter)
        })
    })
})