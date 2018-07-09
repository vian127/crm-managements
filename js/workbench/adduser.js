require.config({
    paths: {
     
    },

    shim: {

    }
  });
  
  require(['vue'], function (Vue) {
    $(function () {
        var vm = new Vue({
            el: '#app',
            data:{
                list:[
                      {id: 1,account:'dfsafgsf',stage: '主账号',phone: '42232323',unline: '5',register:'021-344545345',lastlogin:'2018-01-01 12:00:15',code:'111'},
                      {id: 1,account:'dfsafgsf',stage: '主账号',phone: '42232323',unline: '5',register:'021-344545345',lastlogin:'2018-01-01 12:00:15',code:'111'},
                    ],
                record:[
                    {id:1,created:'2017-01-16 14:10:20',session:'张三',relation:'来电',result:'success',stage:'会员服务',content:'网站的推荐',order:'2017-12-12 14:20:00',remark:'偏好更新：趋势预测-面料色彩'},
                    {id:2,created:'2017-01-16 14:10:20',session:'张三',relation:'来电',result:'success',stage:'会员服务',content:'网站的推荐',order:'2017-12-12 14:20:00',remark:'偏好更新：趋势预测-面料色彩'},
                    {id:3,created:'2017-01-16 14:10:20',session:'张三',relation:'来电',result:'success',stage:'会员服务',content:'网站的推荐',order:'2017-12-12 14:20:00',remark:'偏好更新：趋势预测-面料色彩'},
                    {id:4,created:'2017-01-16 14:10:20',session:'张三',relation:'来电',result:'success',stage:'会员服务',content:'网站的推荐',order:'2017-12-12 14:20:00',remark:'偏好更新：趋势预测-面料色彩'},
                    {id:5,created:'2017-01-16 14:10:20',session:'张三',relation:'来电',result:'success',stage:'会员服务',content:'网站的推荐',order:'2017-12-12 14:20:00',remark:'偏好更新：趋势预测-面料色彩'},
                    {id:6,created:'2017-01-16 14:10:20',session:'张三',relation:'来电',result:'success',stage:'会员服务',content:'网站的推荐',order:'2017-12-12 14:20:00',remark:'偏好更新：趋势预测-面料色彩'},
                    {id:7,created:'2017-01-16 14:10:20',session:'张三',relation:'来电',result:'success',stage:'会员服务',content:'网站的推荐',order:'2017-12-12 14:20:00',remark:'偏好更新：趋势预测-面料色彩'},
                    {id:8,created:'2017-01-16 14:10:20',session:'张三',relation:'来电',result:'success',stage:'会员服务',content:'网站的推荐',order:'2017-12-12 14:20:00',remark:'偏好更新：趋势预测-面料色彩'}
                ], 
                }
             })
        })  
    })

       