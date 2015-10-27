var db      = require('../server/lib/neo-db.js');
'use strict'

exports.up = function(next) {
  db.constraints.uniqueness.createIfNone('User', 'username', function(err, constraint) {
      if(err){
        console.log(err);
      }else{
        console.log("Constraint Created on User!"); 
        next();
      }
    });
  
};

exports.down = function(next) {
  db.constraints.uniqueness.drop('User', 'username', function(err) {
    if(err){
        console.log(err);
      }else{
        console.log("User constraint has been droped."); 
        next();
      }
  });
  
};
