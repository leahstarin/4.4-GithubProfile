'use strict';
var $ = require('jquery');
var _ = require('underscore');
var handlebars = require('handlebars');
var baseUrl = 'https://api.github.com/users/leahstarin';
var githubtoken = require('./githubtoken.js').token;
var repoUrl = baseUrl + '/repos';
//
if(typeof(githubtoken) !== "undefined"){
  $.ajaxSetup({
    headers: {
      'Authorization': 'token ' + githubtoken,
    }
  });
}


$.ajax(baseUrl).done(function(data){
  console.log(data);
  avatarTemplate(data);
  // profilePic(data);
  // fullName(data);
  sideBar(data);
});

$.ajax(repoUrl).done(function(data){
  console.log(data);
  // _.each(data,function(item) {
  //     // console.log(item.name);
  // });
});


function avatarTemplate(data){
  var source = $("#show-template").html();
  var template = handlebars.compile(source);
  var compiledTemplate = template(data);
  $('.show-template').html(compiledTemplate);
}
//
function sideBar(data){
  var sourcetwo = $('#second-template').html();
  var templatetwo = handlebars.compile(sourcetwo);
  var compiledTemplatetwo = templatetwo(data);
  $('.profilepic').html(compiledTemplatetwo);
}

// function profilePic (data){
//   var source = $("#show-template").html();
//   var template = handlebars.compile(source);
//   var compiledTemplate = template(data);
//   $('.profilepic').html(compiledTemplate);
// }
//
// function fullName (data){
//   var source = $("#second-template").html();
//   var template = handlebars.compile(source);
//   var compiledTemplate = template(data);
//   $('.fullname').html(compiledTemplate);
// }
