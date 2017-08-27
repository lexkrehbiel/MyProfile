var app = angular.module('Portfolio', []);

if(typeof Projects !== 'undefined'){
  app.controller('Projects', Projects);
}

if(typeof Courses !== 'undefined'){
  app.controller('Courses', Courses);
}
