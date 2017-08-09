/**
 * Created by Administrator on 2017/8/2.
 */
'use strict';
angular.module("app")
.controller("mainCtrl",["$scope",function($scope){
    $scope.list=[{
        id:1,
        name:'销售',
        imgSrc:'image/list.png',
        companyName:'千度',
        city:'上海',
        industry:'互联网',
        time:'2017-08-03 16:30'
    },{
        id:2,
        name:'web前端',
        imgSrc:'image/list1.png',
        companyName:'滴滴',
        city:'北京',
        industry:'互联网',
        time:'2017-07-23 16:30'
    },{
        id:3,
        name:'php',
        imgSrc:'image/list2.png',
        companyName:'百度',
        city:'成都',
        industry:'互联网',
        time:'2017-07-27 16:30'
    }]


}])
.controller("positionCtrl",["$scope",function($scope){

}])
.controller("companyCtrl",['$scope',function(){

}])