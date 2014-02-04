'use strict';

var crawler = require("simplecrawler");
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

if (!fs.existsSync(__dirname+'/downloads')) {
  fs.mkdirSync(__dirname+'/downloads');
}

var sites = ['http://www.codebox.es'];
var condition = /\.jpg|\.png/;

sites.forEach(function(site) {
  var website = crawler.crawl(site);

  website.on('fetchcomplete', function(resource, buffer, response) {
    process.stdout.write('.');
    if(resource.url.match(condition)){
      console.log('');
      console.log(resource.url+' FOUND !');

      var image_name = url.parse(resource.url).host + ' - '+ path.basename(resource.url);
      var file = fs.createWriteStream(__dirname+'/downloads/'+image_name);
      fs.writeFile(__dirname+'/downloads/'+image_name, buffer, function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log("The file was saved!");
        }
      });
    }
  });

  website.on('complete', function() {
    process.stdout.write(site + " COMPLETED !");
  });

})
