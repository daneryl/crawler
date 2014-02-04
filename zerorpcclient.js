'use strict';

var zerorpc = require("zerorpc");

var client = new zerorpc.Client();
client.connect("tcp://127.0.0.1:4242");

client.invoke("hello", "World", function(error, reply, streaming) {
  if(error){
    console.log("ERROR: ", error);
  }
  console.log(reply);
});

console.log('Entre medias')

client.invoke("bye", "World", function(error, reply, streaming) {
  if(error){
    console.log("ERROR: ", error);
  }
  console.log(reply);
});

console.log('Final');
