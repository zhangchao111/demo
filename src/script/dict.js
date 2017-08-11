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