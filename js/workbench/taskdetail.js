require.config({
  paths: {
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
  
require(['jquery','vue','general','msg','layui','ztree-excheck','ztree-exhide'], function (jquery,Vue,general,msg,layui) {
    $(function (){
        var def={
            loading_ele:$('.js-loading-div')
        };
        var vm = new Vue({
            el: '#app',
            data() {
                return {
                    tab_list:{                                                          //tab数据
                        receive:null,
                        assist:null,
                        activity:null,
                        call:{
                            callIns:null,
                            callOuts:null
                        },
                        service:null,
                        ground:null,
                        order:null,
                        invoice:null,
                        open:null,
                        shop:null
                    },
                    location_obj:general.fn.getLocationParameter(),                     //浏览器参数
                    user_info:{
                        customerInfo:{},
                        customerTag:{},
                        contactList:[],
                        feedbackList:[],
                    },                                                       //用户信息
                list:[
                  {id: 1,name:'张天一',role: '决策者,领导者',position: '总经理',status: '在职',mobile: '138883228323',telephone:'021-344545345',wx:'232545545',judge:'是',ext:'111',qq:'4546546456',email:'22222@qq.com',source:'注册'},
                  {id: 2,name:'张天一',role: '决策者',position: '总经理',status: '在职',mobile: '1233312',telephone:'021-344545345',wx:'232545545',judge:'是',ext:'111',qq:'4546546456',email:'22222@qq.com',source:'注册'},
                  {id: 3,name:'张天一',role: '决策者',position: '总经理',status: '在职',mobile: '1233312',telephone:'021-344545345',wx:'232545545',judge:'是',ext:'111',qq:'4546546456',email:'22222@qq.com',source:'注册'},
                  {id: 4,name:'张天一',role: '决策者',position: '总经理',status: '在职',mobile: '1233312',telephone:'021-344545345',wx:'232545545',judge:'是',ext:'111',qq:'4546546456',email:'22222@qq.com',source:'注册'},
                  {id: 5,name:'张天一',role: '决策者',position: '总经理',status: '在职',mobile: '1233312',telephone:'021-344545345',wx:'232545545',judge:'是',ext:'111',qq:'4546546456',email:'22222@qq.com',source:'注册'},
                  {id: 6,name:'张天一',role: '决策者',position: '总经理',status: '在职',mobile: '1233312',telephone:'021-344545345',wx:'232545545',judge:'是',ext:'111',qq:'4546546456',email:'22222@qq.com',source:'注册'},
                  {id: 7,name:'张天一',role: '决策者',position: '总经理',status: '在职',mobile: '1233312',telephone:'021-344545345',wx:'232545545',judge:'是',ext:'111',qq:'4546546456',email:'22222@qq.com',source:'注册'},
                  {id: 8,name:'张天一',role: '决策者',position: '总经理',status: '在职',mobile: '1233312',telephone:'021-344545345',wx:'232545545',judge:'是',ext:'111',qq:'4546546456',email:'22222@qq.com',source:'注册'}
                ],
                record:[
                  {id:1,created:'2017-01-16 14:10:20',session:'张三',tel:'13875875687',selation:'来电',stage:'有效',result:'成功',impress:'较好',content:'网站的推荐',detail:'法撒旦',contact:'钉钉'},
                  {id:2,created:'2017-01-16 14:10:20',session:'张三',tel:'13875875687',selation:'来电',stage:'有效',result:'成功',impress:'较好',content:'网站的推荐',detail:'法撒旦',contact:'钉钉'},
                  {id:3,created:'2017-01-16 14:10:20',session:'张三',tel:'13875875687',selation:'来电',stage:'有效',result:'成功',impress:'较好',content:'网站的推荐',detail:'法撒旦',contact:'钉钉'},
                  {id:4,created:'2017-01-16 14:10:20',session:'张三',tel:'13875875687',selation:'来电',stage:'有效',result:'成功',impress:'较好',content:'网站的推荐',detail:'法撒旦',contact:'钉钉'},
                  {id:5,created:'2017-01-16 14:10:20',session:'张三',tel:'13875875687',selation:'来电',stage:'有效',result:'成功',impress:'较好',content:'网站的推荐',detail:'法撒旦',contact:'钉钉'},
                  {id:6,created:'2017-01-16 14:10:20',session:'张三',tel:'13875875687',selation:'来电',stage:'有效',result:'成功',impress:'较好',content:'网站的推荐',detail:'法撒旦',contact:'钉钉'},
                  {id:7,created:'2017-01-16 14:10:20',session:'张三',tel:'13875875687',selation:'来电',stage:'有效',result:'成功',impress:'较好',content:'网站的推荐',detail:'法撒旦',contact:'钉钉'},
                  {id:8,created:'2017-01-16 14:10:20',session:'张三',tel:'13875875687',selation:'来电',stage:'有效',result:'成功',impress:'较好',content:'网站的推荐',detail:'法撒旦',contact:'钉钉'}
                ], 

                datas:{
                    pro:[
                      {id:1,name:'上海'},
                      {id:2,name:'北京'},
                      {id:3,name:'广州'},
                      {id:4,name:'深圳'}
                    ],
                    city:[
                      {id:1,name:'黄石'},
                      {id:2,name:'武汉'},
                      {id:3,name:'随州'},
                      {id:4,name:'黄冈'}
                    ]
                },
                
                material:{
                  account:'123',
                  id:'123',
                  brand:'123',
                  company:'123',  
                  email:'123',
                  pro:'1',
                  city:'1',
                  district:'1',
                  addr:'123',
                  telephone:'123',
                  genre:'1',
                  trade:'1',
                  sex:'1',
                  stage:'1',
                  state:'1', 
                  invoice:'1',
                  limit:'全网',
                },
                visit:{
                  person:'2',
                  phone:'123',
                  link:'2',
                  stage:'2',
                  result:'2',
                  attention:'123',
                  remark:'123',
                  impress:'2',
                  apm:'true',
                  hasapm:'2',
                  book:'true',
                  hasbook:'2',
                  ceo:'true',
                  hasceo:'2',
                  cloud:'true',
                  hascloud:'2',
                  seoul:'true',
                  hasseoul:'2',
                  exhibition:'true',
                  hasexhibition:'2',
                  first_visit:'true',
                  perfect:'2',
                  verify:[],
                  invoice:'true',
                  is_invoice:'2',
                  invoice_all:[],
                  present:'true',
                  is_present:[],
                  login:'true',
                  is_login:[],
                  sites:'true',
                  login_status:'true',
                  is_status:'2',
                  intro:'',
                  is_intro:'2',
                  is_sites:[],
                  recommend:'true',
                  is_recommend:'2',
                  mark:'true',
                  is_mark:'123'
                },
                def:{
                    trees:{
                      industry:[
                        { id:1, pId:0, name:'材质', open:false},
                        { id:11, pId:1, name:'棉麻'},
                        { id:12, pId:1, name:'丝绸'},
                        { id:2, pId:0, name:'配饰', open:false},
                        { id:21, pId:2, name:'手链'},
                        { id:22, pId:2, name:'戒指'},
                      ],
                      style:[
                        { id:1, pId:0, name:'流行', open:false},
                        { id:11, pId:1, name:'坎肩'},
                        { id:12, pId:1, name:'短袖'},
                        { id:2, pId:0, name:'经典', open:false},
                        { id:21, pId:2, name:'牛仔'},
                        { id:22, pId:2, name:'麦子'},
                      ],
                      single:[
                        { id:1, pId:0, name:'流行', open:false},
                        { id:11, pId:1, name:'坎肩'},
                        { id:12, pId:1, name:'短袖'},
                        { id:2, pId:0, name:'经典', open:false},
                        { id:21, pId:2, name:'牛仔'},
                        { id:22, pId:2, name:'麦子'},
                      ],
                      season:[
                        { id:1, pId:0, name:'流行', open:false},
                        { id:11, pId:1, name:'坎肩'},
                        { id:12, pId:1, name:'短袖'},
                        { id:2, pId:0, name:'经典', open:false},
                        { id:21, pId:2, name:'牛仔'},
                        { id:22, pId:2, name:'麦子'},
                      ],
                      material:[
                        { id:1, pId:0, name:'流行', open:false},
                        { id:11, pId:1, name:'坎肩'},
                        { id:12, pId:1, name:'短袖'},
                        { id:2, pId:0, name:'经典', open:false},
                        { id:21, pId:2, name:'牛仔'},
                        { id:22, pId:2, name:'麦子'},
                      ],
                      process:[
                        { id:1, pId:0, name:'流行', open:false},
                        { id:11, pId:1, name:'坎肩'},
                        { id:12, pId:1, name:'短袖'},
                        { id:2, pId:0, name:'经典', open:false},
                        { id:21, pId:2, name:'牛仔'},
                        { id:22, pId:2, name:'麦子'},
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
                },
              } 
            },
            methods:{
                getUserData:function(opt){                                                          //请求用户信息
                    var self=this;
                    general.fn.subAjax({
                        url:'http://localhost:8081/api/customer/info',
                        data:{id:self.location_obj.id},
                        success:function(data){
                            if(data && data.data){
                                self.user_info=data.data;
                                if(self.user_info.feedbackList instanceof Array && self.user_info.feedbackList.length>0){
                                    this.setLayerPage();
                                }
                            }else{
                                msg.msg({'txt':'未请求到数据'},1200);
                            }
                            def.loading_ele.fadeOut(400);
                        },
                        error:function(){
                            def.loading_ele.fadeOut(400);
                        }
                    });
                },
                getTabData:function(opt){                                                          //请求tab数据
                    var self=this;
                    general.fn.subAjax({
                        url:'http://localhost:8081/api/customer/type',
                        data:opt,
                        success:function(data){
                            if(data && data.data){
                                self.tab_list[opt.type]=data.data;
                                console.log(self.tab_list);
                            }else{
                                msg.msg({'txt':'未请求到数据'},1200);
                            }
                            def.loading_ele.fadeOut(400);
                        },
                        error:function(){
                            def.loading_ele.fadeOut(400);
                        }
                    });
                },
                setLayerPage:function(){                                                            //分页
                    layui.use('laypage', function(){
                        var laypage = layui.laypage;
                        laypage.render({
                            elem: 'laypage-section'
                            ,count: 50
                            ,layout: [ 'prev', 'page', 'next','limit','count', 'skip']
                            ,jump: function(obj){
                                var curr = obj.curr;
                            }
                        });
                    });
                },
                // 保存资料
                saveMaterial:function(){
                    var data = this.material;
                    var txt='';
                    if(data.id==''){
                      txt='客户ID不能为空!';
                      msg.msg({txt:txt},1000)
                      return
                    }else if(data.company==''){
                      txt='公司名称不能为空!';
                      msg.msg({txt:txt},1000)
                      return
                    }else if(data.pro==''){
                      txt='城市不能为空！';
                      msg.msg({txt:txt},1000)
                      return
                    }else if(data.city==''){
                      txt='城市不能为空！';
                      msg.msg({txt:txt},1000)
                      return
                    }else if(data.district==''){
                      txt='城市不能为空！';
                      msg.msg({txt:txt},1000)
                      return
                    }
                },
                //回访记录
                visitRecord:function(){
                    var data =this.visit;
                    console.log(data)
                },
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

                    // tab表格栏
                    $('.js-tab-list>li.js-tab-item').on('click',function(){
                        var index = $(this).index();
                        var key=$(this).attr('data-key');
                        if(self.tab_list[key]==null || (self.tab_list[key].callIns==null && self.tab_list[key].callOuts==null)){
                            def.loading_ele.fadeIn(200);
                            self.getTabData({
                                customerId:'1345318',
                                type:key
                            });
                        }
                        $(this).addClass('stats-active').siblings().removeClass('stats-active')
                        $('.js-stats-info>div').eq(index).show().siblings().hide();
                    });

                    $('.js-tab-list>li.js-tab-item').eq(0).click();

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
            },
            mounted:function(){
                this.getUserData();
                this.bindFunc();
            }
        }); 
    });
})


      