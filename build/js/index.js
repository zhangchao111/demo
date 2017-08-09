/**
 * Created by Administrator on 2017/7/31.
 */
'use strict';
angular.module("app",['ui.router']);

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
/**
 * Created by Administrator on 2017/8/1.
 */
'use strict';
angular.module("app").config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider.state("main",{
        url:'/main',
        templateUrl:'view/main.html',
        controller:'mainCtrl'
    })
        .state('position',{
            url:'/position/:id',
            templateUrl:'view/position.html',
            controller:'positionCtrl'
        })
        .state("company",{
            url:'/company/:id',
            templateUrl:'view/company.html',
            controller:'companyCtrl',
        })
    $urlRouterProvider.otherwise("main");
}])

/**
 * Created by Administrator on 2017/8/9.
 */
'use strict';

/**
 * Created by Administrator on 2017/8/2.
 */
'use strict';
angular.module("app").directive("appFoot",[function(){
    return {
        restrict:'A',
        replace:true,
        templateUrl:'view/template/foot.html'
    }
}])
/**
 * Created by Administrator on 2017/8/2.
 */
'use strict';
angular.module("app").directive("appHead",[function(){
    return {
        restrict:'A',
        replace:true,
        templateUrl:'view/template/head.html'
    }
}])
/**
 * Created by Administrator on 2017/8/2.
 */
'use strict';
angular.module("app").directive("appHeadBar",[function(){
    return {
        restrict:'A',
        replace:true,
        templateUrl:'view/template/headBar.html',
        scope:{
            text:'@',
        },
        link:function(scope,element,attr){
            scope.back=function(){
                window.history.back();
            }
        }

    }
}])
/**
 * Created by Administrator on 2017/8/7.
 */
"use strict";
angular.module("app").directive("appPositionInfo",[function(){
    return {
        restrict:'A',
        replace:true,
        scope:{
          isActive:'=',
        },
        templateUrl:'view/template/position-info.html',
        link:function(scope){
            scope.imagePath=scope.isActive?("image/star-active.png"):("image/star.png");
        }
    }
}])
/**
 * Created by Administrator on 2017/8/2.
 */
'use strict';
angular.module("app").directive("appPosition",[function(){
    return {
        restrict:'A',
        replace:true,
        templateUrl:'view/template/positionList.html',
        scope:{
            data:"=",
        }
    }
}])
/**
 * Created by Administrator on 2017/8/9.
 */
"use strict";
angular.module("app").directive("appPositionClass",[function(){
    return {
        restrict:'A',
        replace:true,
        templateUrl:'view/template/position_class.html',
    }
}])
/**
 * Created by Administrator on 2017/8/9.
 */
"use strict";
angular.module("app").directive("appCompany",[function(){
    return {
        restrict:'A',
        replace:true,
        templateUrl:'view/template/position_company.html',
    }
}])

