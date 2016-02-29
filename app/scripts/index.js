'use strict';
var $ = require('jquery');
var _ = require('underscore');
var handlebars = require('handlebars');
var baseUrl = 'https://api.github.com/users/leahstarin';
var githubtoken;  
var repoUrl = baseUrl + '/repos';

if(typeof(githubtoken) !== "undefined"){
  $.ajaxSetup({
    headers: {
      'Authorization': 'token ' + githubtoken,
    }
  });
}

$.ajax(baseUrl).done(function(data){
 //console.log(data);
 avatarTemplate(data);
 // profilePic(data);
 // fullName(data);
 sideBar(data);
})

$.ajax(repoUrl).done(function(data){
 console.log(data);
 repoList(data);
 //humanTime(data);
})

function avatarTemplate(data){
  var source = $("#show-template").html();
  var template = handlebars.compile(source);
  var compiledTemplate = template(data);
  $('.show-template').html(compiledTemplate);
}

function sideBar(data){
  var sourcetwo = $('#second-template').html();
  var templatetwo = handlebars.compile(sourcetwo);
  var compiledTemplatetwo = templatetwo(data);
  $('.profilepic').html(compiledTemplatetwo);
}
function repoList(data){
var sourcethree = $("#third-template").html();
var templatethree = handlebars.compile(sourcethree);
var compiledTemplatethree = templatethree({'repo': data});
$('.repos-list').html(compiledTemplatethree);
}
