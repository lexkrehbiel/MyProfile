var app = angular.module('Portfolio', []);

if(Projects){
  app.controller('Projects', Projects);
}

if(Courses){
  app.controller('Courses', Courses);
}
