function Projects($scope) {


    $scope.projects = [{
      name: 'TerrorismFacts',
      img: 'gtdb.png',
      desc: ['TerrorismFacts allows a user to visualize information about terrorist attacks around the world through 2015.'
            + ' Users can stack filters based on a variety of attributes and then visualize the results on a number of views.'
            + ' Views include a pie chart, a line chart, a map, and a list with event details.',
            'This was a group project for Databases at UF (CIS4301).'
            +' I worked in a group with 3 other students to find the dataset and then design and implement the product.'
            +' This project used an Oracle database, Google\'s Charts API, and a mixture of PHP and JavaScript.'],
      link: 'https://cise.ufl.edu/~krehbiel/GTDB/index.php'
    },
    {
      name: 'FloorTime',
      img: 'speaker.gif',
      desc: ['FloorTime allows users to analyze the amount of time for which each speaker speaks in an audio recording.'
          +' The application takes in audio data, performs speaker diarization, and then shows the results on graphs.',
          'This is my senior project! I am working on this with one other UF student. As of 2017, the project is still in progress.']
    }];
}
