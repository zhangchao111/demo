/**
 * Created by Administrator on 2017/7/31.
 */
'use strict';
angular.module("app",['ui.router',"ngCookies"]);

/**
 * Created by Administrator on 2017/8/2.
 */
'use strict';
angular.module("app")
.controller("mainCtrl",["$scope","$http","cache",function($scope,$http,cache){
    cache.put('to','you')
    // ajax请求的其他方式 $http['post','delete','put']('url',{//请求的body})
    $http.get('/data/positionList.json').then(function(responce){
        console.log(responce.data);
        $scope.list = responce.data;
    },function(responce){
        console.log(responce+"=====abc")
    });

}])
.controller("positionCtrl",["$scope","$q","$state","$http",function($scope,$q,$state,$http){
   // console.log($state.params.id);
    $scope.inLogin=false;
    function getPosition(){
        var def = $q.defer();
        //第一种写法
        // $http.get('/data/position.json?id='+$state.params.id).then(function(responce){
        //     console.log(responce.data);
        //     $scope.position=responce.data;
        //     def.resolve(responce.data)
        // },function(responce){
        //     console.log(responce);
        //     def.reject(responce);
        // })

        // 第二种写法
        $http.get('/data/position.json',{
            params:{
                id:$state.params.id
            }
        }).then(function(responce){
            console.log(responce.data);
            $scope.position=responce.data;
            def.resolve(responce.data)
        },function(responce){
            console.log(responce);
            def.reject(responce);
        })


        return def.promise;
    }
    getPosition().then(function(obj){
        //console.log(obj.companyId)
        getCompany(obj.companyId)
    })
    function getCompany(id){
        $http.get('/data/company.json?id='+id).then(function(resp){
            console.log(resp.data);
            $scope.company=resp.data;
        },function(resp){

        })
    }

}])


.controller("companyCtrl",['$scope',"$state","$http",function($scope,$state,$http){
    $http.get('/data/company.json?id='+$state.params.id).then(function(resp){
        console.log(resp.data);
        $scope.company=resp.data;
        //测试 向下广播
        $scope.$broadcast('abc',{id:1});
    },function(resp){
        console.log(resp);
    })
    //测试 接收处理向上广播的函数
    $scope.$on('cba',function(event,data){
        console.log(event,data);
    })
   // $scope.$digest();用原生操作dom后，同步的命令

}])

.controller("searchCtrl",["$scope","$http","dict",function($scope,$http,dict){
    $scope.name='';
    $scope.search=function(){
        $http.get('/data/positionList.json?name='+$scope.name).then(function(responce){
            console.log(responce.data);
            $scope.list = responce.data;
        },function(responce){
            console.log(responce+"=====abc")
        });
    }
    $scope.search();
    $scope.sheet={};
    $scope.tablist=[{
        id:'city',
        name:'城市',
    },{
        id:'salary',
        name:'薪资',
    },{
        id:'scale',
        name:'公司规模',
    }]
   // console.log(dict)
    $scope.tClick=function(id,name){
       // console.log(id,name)
        $scope.sheet.list=dict[id];
        $scope.sheet.visible=true;
        console.log( $scope.sheet)

    }
    $scope.sClick=function(id,name){
        console.log(id,name)
        if(id){

        }else{

        }
    }


}])

/**
 * Created by Administrator on 2017/8/11.
 */
"use strict";
angular.module("app").value("dict",{}).run(["$http",'dict',function($http,dict){
    $http.get('data/city.json').then(function(resp){
        dict.city=resp.data;
    },function(resp){

    })
    $http.get('data/salary.json').then(function(resp){
        dict.salary=resp.data;
    },function(resp){

    })
    $http.get('data/scale.json').then(function(resp){
        dict.scale=resp.data;
    },function(resp){

    })
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
        .state("search",{
            url:'/search',
            templateUrl:'view/search.html',
            controller:'searchCtrl'
        })
    $urlRouterProvider.otherwise("main");
}])

/**
 * Created by Administrator on 2017/8/10.
 */
"use strict";
angular.module("app")

    //service是直接调用返回这个函数 不弄定义私有属性
//     .service("cache",["$cookies",function($cookies){
//     this.put=function(key,value){
//           $cookies.put(key,value)
//     }
//     this.get=function(key){
//        return $cookies.get(key);
//     }
//     this.remove=function(key){
//         $cookies.remove(key)
//     }
// }])


//factory 是返回一个对象 可以定义一些私有属性，外部不可访问
    .factory("cache",["$cookies",function($cookies){
       return {
           put:function(key,value){
                $cookies.put(key,value);
           },
           get:function(key){
              return $cookies.get(key);
           },
           remove:function(key){
               $cookies.remove(key);
           }

       }
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
        link:function($scope,element,attr){
            $scope.back=function(){
                window.history.back();
            }
            //测试 接收处理向下广播的函数
            $scope.$on("abc",function(event,data){
                    console.log(event,data)
            })
            //测试 向上广播
            $scope.$emit("cba",{id:2});
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
            isLogin:'=',
            pos:'=',
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
        scope:{
            com:'='
        },
        templateUrl:'view/template/position_class.html',
        link:function($scope){
           $scope.showPositionList=function(idx){
               //console.log(idx);
                $scope.positionList=$scope.com.positionClass[idx].positionList;
               $scope.isActive = idx;
            }
            $scope.$watch('com',function(newVal){
                if(newVal)$scope.showPositionList(0)
            })
        }
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
        scope:{
            com:'='
        },
        templateUrl:'view/template/position_company.html',
    }
}])


/**
 * Created by Administrator on 2017/8/11.
 */
"use strict";
angular.module("app").directive("appTab",[function(){
    return {
        restrict:'A',
        replace:true,
        scope:{
            list:'=',
          tabClick:'&',
        },
        templateUrl:'view/template/searchTab.html',
        link:function($scope){
            $scope.click=function(tab){
               console.log(tab)
                $scope.selectId=tab.id;
                $scope.tabClick(tab)
            }
            $scope.selectId='city';
        }
    }
}])
/**
 * Created by Administrator on 2017/8/11.
 */
"use strict";
angular.module("app").directive("appSheet",[function(){
    return {
        restrict:'A',
        replace:true,
        scope:{
            list:'=',
            visible:'=',
            select:'&',
        },
        templateUrl:'view/template/sheet.html',
        link:function($scope){
            // $scope.select=function(){
            //
            // }
        }
    }
}])
