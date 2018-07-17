/*
    #author     lut000
    #date       2017/07/16
    #porpuse    新增任务类型
*/
require.config({
    paths:{
        'ztree-core':'lib/ztree/jquery.ztree.core.min',
        'ztree-excheck':'lib/ztree/jquery.ztree.excheck.min',
        'ztree-exhide':'lib/ztree/jquery.ztree.exhide.min',
    },
    shim: {
        'ztree-excheck':{
            deps:['css!lib/ztree/zTreeStyle.css','jquery','ztree-core']
        },
        'ztree-exhide':{
            deps:['jquery','ztree-core']
        }
    }
});
require(['jquery','vue','msg','ztree-excheck','ztree-exhide'], function (jquery,Vue,msg) {
    $(function () {
        var vm = new Vue({
            el: '#app',
            data(){
                return {
                    collect:{
                        name:'',
                        status:1
                    },
                    def:{
                        trees:{
                            creator:[
                                { id:1, pId:0, name:'材质', open:false},
                                { id:11, pId:1, name:'棉麻'},
                                { id:12, pId:1, name:'丝绸'},
                                { id:2, pId:0, name:'配饰', open:false},
                                { id:21, pId:2, name:'手链'},
                                { id:22, pId:2, name:'戒指'},
                            ],
                        },
                        trees_setting:{ 
                                check: {
                                enable: true
                            },
                            data:{
                                simpleData: {
                                    enable: true
                                }
                            }
                        }
                    }
                }
            },
            methods:{
                bindFunc:function(){                                                        //事件绑定
                    var self=this,d=self.def;
                    // 点击获取焦点
                    $('.js-checked-list').on('click',function(e){
                        var $self=$(this),tag_ele=$self.siblings('.js-filter-div');
                        var id=tag_ele.attr('data-id');
                        if(d.trees[id]==undefined){
                          var key=$self.attr('data-key') || '';
                          if(key!=''){
                            $.fn.zTree.init(tag_ele.children('.js-trees-ele'), d.trees_setting, d.trees[key]);
                            d.trees[id]=$.fn.zTree.getZTreeObj(id);
                          }
                        }
                        tag_ele.show();
                        e.stopPropagation();
                    });


                    // 隐藏下拉选择层
                    $('.js-filter-div').on('click',function(e){
                        e.stopPropagation();
                    });
                    $('#page-wrapper').on('click',function(){
                        $('.js-filter-div').hide();
                    });
                  
                    
                    // 确定筛选项
                    $('.js-add-checked').on('click',function(){
                        var id=$(this).parents('.js-filter-div').attr('data-id') || '';
                        var ztree_obj=d.trees[id];
                        var checked_obj=ztree_obj.getCheckedNodes();
                        $(this).parents('.js-filter-div').hide();
                        setFilterDom($(this).parents('.js-filter-div').siblings('.js-checked-list'),checked_obj);
                    });
                    // 取消筛选项
                    $('.js-cancel-checked').on('click',function(){
                        $(this).parents('.js-filter-div').hide();
                    });



                    function setFilterDom(tag,data){
                        var _html='';
                        data.forEach(function(item,index){
                            if(index==0){
                                _html+='<li>'+item.name+'</li>';
                            }else{
                                _html+=',<li>'+item.name+'</li>';
                            }
                        });
                        tag.html(_html);
                    };

                },
                saveFunc:function(e){                                                           //保存
                    var tag=e.target;
                    console.log(this.collect)
                    msg.msg({'txt':'保存成功'},function(){
                        window.history.back(-1);
                    },1200)
                }
            },
            mounted:function(){
                this.bindFunc();
            }
        });
    })
})