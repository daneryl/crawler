'use strict';

var crawler = require("simplecrawler");
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

if (!fs.existsSync(__dirname+'/downloads')) {
  fs.mkdirSync(__dirname+'/downloads');
}

var sites = ['http://www.codebox.es', 'http://www.levelap.com'];
var condition = /\.jpg|\.png/;

sites.forEach(function(site) {
  var website = crawler.crawl(site);

  website.on('fetchcomplete', function(resource) {
    process.stdout.write('.');
    if(resource.url.match(condition)){
      console.log('');
      console.log(resource.url+' FOUND !');

      var image_name = url.parse(resource.url).host + ' - '+ path.basename(resource.url);
      var file = fs.createWriteStream(__dirname+'/downloads/'+image_name);
      var request = http.get(resource.url, function(response) {
        response.pipe(file);
      });
    }
  });

  website.on('complete', function() {
    process.stdout.write(site + " COMPLETED !");
  });

})
