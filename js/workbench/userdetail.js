require.config({
  paths: {
    'ztree-core':'lib/ztree/jquery.ztree.core.min',
    'ztree-excheck':'lib/ztree/jquery.ztree.excheck.min'
  },

  shim: {
    'ztree-excheck':{
      deps:['css!lib/ztree/zTreeStyle.css','jquery','ztree-core']
    }
  }
});
  
require(['vue','ztree-excheck'], function (Vue) {
  $(function () {
      var vm = new Vue({
          el: '#app',
          data:{
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
            }
          })

           // 分页
        function page(){
          layui.use('laypage', function(){
              var laypage = layui.laypage;
              //执行一个laypage实例
              laypage.render({
                  elem: 'test1'
                  ,count: 50
                  ,layout: [ 'prev', 'page', 'next','limit','count', 'skip']
                  ,jump: function(obj){
                    console.log(obj)
                    var curr = obj.curr;

                  }
              });
          });
      }
     page();
      });

    var def={
      trees:{
        hangye:[
          { id:1, pId:0, name:'随意勾选 1', open:true},
          { id:11, pId:1, name:'随意勾选 1-1', open:true},
          { id:111, pId:11, name:'随意勾选 1-1-1'},
          { id:112, pId:11, name:'随意勾选 1-1-2'},
          { id:12, pId:1, name:'随意勾选 1-2', open:true},
          { id:121, pId:12, name:'随意勾选 1-2-1'},
          { id:122, pId:12, name:'随意勾选 1-2-2'},
          { id:2, pId:0, name:'随意勾选 2', checked:true, open:true},
          { id:21, pId:2, name:'随意勾选 2-1'},
          { id:22, pId:2, name:'随意勾选 2-2', open:true},
          { id:221, pId:22, name:'随意勾选 2-2-1', checked:true},
          { id:222, pId:22, name:'随意勾选 2-2-2'},
          { id:23, pId:2, name:'随意勾选 2-3'}
        ],

      }
    };
    
    setTrees();
    function setTrees(){                                          // 树结构
      var setting = {
        check: {
          enable: true
        },
        data: {
          simpleData: {
            enable: true
          }
        }
      };
      $('.js-trees-ele').each(function(){
        var $self=$(this);
        var key=$self.attr('data-key') || '';
        if(key!=''){
          $.fn.zTree.init($self, setting, def.trees[key]);
        }
      });
    }

    $('.basic-sure').on('click',function(){
     const len= $('input').length;
     console.log(len)
     })
  })

      