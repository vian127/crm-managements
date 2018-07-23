require.config({
  paths: {
      
  },

  shim: {

  }
});

require(['vue','msg','layui'], function (Vue,msg) {
  $(function () {
      var vm = new Vue({
          el: '#app',
          data() {
              return {
                list:[
                    {id: 1,account:'dfsafgsf',stage: '主账号',phone: '42232323',unline: '5',register:'021-344545345',lastlogin:'2018-01-01 12:00:15',code:'111'},
                    {id: 1,account:'dfsafgsf',stage: '主账号',phone: '42232323',unline: '5',register:'021-344545345',lastlogin:'2018-01-01 12:00:15',code:'111'},
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
                  }
                }
              },
              methods:{
                
              }
      })


      $('.open').on('click', function () {
          $(this).parent().next().toggle();
      })
      //  分页
      // 分页
      function page() {
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
      page();
  })
})