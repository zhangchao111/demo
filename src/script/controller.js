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
