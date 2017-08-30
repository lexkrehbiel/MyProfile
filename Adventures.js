google.charts.load('current', {
   'packages': ['geochart'],
   // Note: you will need to get a mapsApiKey for your project.
   // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
   'mapsApiKey': 'AIzaSyAdq7UZiiy5hgj4YBzOLF170yhrUbOo5oc'
 });
google.charts.setOnLoadCallback(drawMarkersMap);

function drawMarkersMap() {

  var rawdata = [
    {
      city: 'Lake Tahoe, CA',
      days: 4,
      year: 1997
    },
    {
      city: 'Munich, Germany',
      days: 2,
      year: 2005
    },
    {
      city: 'Wurzburg, Germany',
      days: 2,
      year: 2005
    },
    {
      city: 'Paris, France',
      days: 4,
      year: 2005
    },
    {
      city: 'London, England',
      days: 4,
      year: 2005
    },
    {
      city: 'Monaco',
      days: 1,
      year: 2009
    },
    {
      city: 'Algulhas, Western Cape',
      days: 1,
      year: 2017,
      img: "southernpoint.jpg"
    },
    {
      city: 'Nice, France',
      days: 1,
      year: 2009
    },
    {
      city: 'Santorini, Greece',
      days: 1,
      year: 2009
    },
    {
      city: 'Rome, Italy',
      days: 1,
      year: 2009
    },
    {
      city: 'Florence, Italy',
      days: 1,
      year: 2009
    },
    {
      city: 'Athens, Greece',
      days: 1,
      year: 2009
    },
    {
      city: 'Mykonos, Greece',
      days: 1,
      year: 2009
    },
    {
      city: 'Cozumel, Mexico',
      days: 1,
      year: 2012
    },
    {
      city: 'Panama Canal',
      days: 3,
      year: 2001
    },
    {
      city: 'St. John',
      days: 1,
      year: 2001
    },
    {
      city: 'St. Thomas',
      days: 1,
      year: 2001
    },
    {
      city: 'Turks & Caikos',
      days: 1,
      year: 2012
    },
    {
      city: 'Labadee, Haiti',
      days: 1,
      year: 2012
    },
    {
      city: 'Grand Caman',
      days: 1,
      year: 2012
    },
    {
      city: 'St. Martin',
      days: 1,
      year: 2012
    },
    {
      city: 'Hiedelberg, Germany',
      days: 1,
      year: 2015
    },
    {
      city: 'Antananarivo, Madagascar',
      days: 6,
      year: 2017,
      img: "tana.jpg"
    },
    {
      city: 'Cape Town, South Africa',
      days: 4,
      year: 2017,
      img: "cpt.jpg"
    },
    {
      city: 'New York City',
      days: 90,
      year: 2017,
      img: "nyc.JPG",
      desc: "I interned at Bloomberg in Manhattan the summer after my Junior year in college."
    },
    {
      city: 'Istanbul, Turkey',
      days: 1,
      year: 2017
    },
    {
      city: 'Seoul, South Korea',
      days: 30,
      year: 2015,
      img: "sk.jpg",
      desc: "I studied abroad in Seoul at Hanyang University."
    },
    {
      city: 'Satellite Beach, FL',
      year: 1995,
      years: 18,
      img: "stlbch.JPG",
      desc: "I grew up in Satellite Beach, FL."
    },
    {
      city: 'Weston, FL',
      days: 90,
      year: 2016,
      img: "weston.jpg",
      desc: "I interned at Ultimate Software in Weston, FL the summer after my Sophomore year in college."
    },
    {
      city: 'Nassau, Bahamas',
      days: 1,
      year: 2016,
    },
    {
      city: 'Key Largo, FL',
      days: 4,
      year: 2016,
      img: "keylargo.jpg"
    },
    {
      city: 'Key West, FL',
      days: 4,
      year: 2016,
      img: "keywest.jpg"
    },
    {
      city: 'Gainesville, FL',
      year: 2014,
      years: 3,
      img: "uf.jpg",
      desc: "I did my undergrad at the University of Florida in Gainesville, Florida."
    },
    {
      city: 'Victoria, British Columbia',
      days: 1,
      year: 2014,
      img: 'victoria.JPG'
    },
    {
      city: 'Juneau, Alaska',
      days: 2,
      year: 2014
    },
    {
      city: 'Skagway, Alaska',
      days: 2,
      year: 2014
    },
    {
      city: 'Cologne, Germany',
      days: 1,
      year: 2015
    },
    {
      city: 'Strasbourg, Germany',
      days: 1,
      year: 2015,
      img: 'strausbourg.jpg'
    },
    {
      city: 'St. Petersburg, FL',
      days: 1,
      year: 2015,
      img: 'stpete.jpg'
    },
    {
      city: 'Koblenz, Germany',
      days: 1,
      year: 2015,
      img: 'koblenz.jpg'
    },
    {
      city: 'Amsterdam',
      days: 4,
      year: 2015,
      img: 'amsterdam.jpg'
    },
    {
      city: 'Barcelona, Spain',
      days: 7,
      year: 2012
    },
    {
      city: 'Valencia, Spain',
      days: 7,
      year: 2012
    },
    {
      city: 'Boulder, CO',
      days: 3,
      year: 2017,
      img: 'boulder.JPG'
    },
    {
      city: 'Glennwood Springs, CO',
      days: 3,
      year: 2017,
      img:'glennwood.JPG'
    },
    {
      city: 'Northville, NY',
      days: 3,
      year: 2017,
      img: 'northville.JPG',
      desc: 'Some of my friends and I hiked the tallest mountain in NY - Mount Marcy.'
    },
    {
      city: 'Mountainview, CA',
      days: 3,
      year: 2017,
      img: 'mv.jpg'
    },
    {
      city: 'San Diego, CA',
      days: 3,
      year: 2017
    },
    {
      city: 'Asheville, NC',
      days: 10,
      year: 2016,
      img: 'nc.jpg',
      desc: 'My friends and I often go to North Carolina and North Georgia for hiking trips.'
    },
    {
      city: 'Lucerne, Switzerland',
      days: 4,
      year: 2015,
      img: 'zurich.jpg'
    },
    {
      city: 'Stratton, VT',
      days: 4,
      year: 2017,
      img: 'stratton.jpg'
    },
    {
      city: 'Orlando, FL',
      days: 50,
      year: 1996,
      img: 'orlando.jpg',
      desc: "I grew up an hour from Disney World - I get to go there often!"
    },
    {
      city: 'Sebastian, FL',
      days: 1,
      year: 2017,
      img: 'sebastian.jpg',
      desc: "Ask me about the time I skydived with my grandma."
    },
    ,
    {
      city: 'Austin, Texas',
      days: 1,
      year: 2014,
      img: 'austin.jpg',
      desc: 'I used to play ultimate frisbee on UF\'s women\'s team, so I got to travel around the Southeast to compete.'
    }


  ];

  var advdata = rawdata.map(function(elm){

    // generate a tooltip

    // get the tooltip title
    var title = "<h5 style=\"width:100px\">";
    if('years' in elm){
      // ensure all elements have a days component for sizing
      title += elm.years;
      elm.days = 365 * elm.years;
      title += ' year';
      title += elm.years == 1 ? "" : "s";
      title += ' starting in ';
    } else {
      title += elm.days;
      title += ' day';
      title += elm.days == 1 ? "" : "s";
      title += ' in ';
    }
    title += elm.year + "</h5>";

    // generate the textual parts of the tooltip
    var textComponents = title;
    if('desc' in elm){
      textComponents += "<span>"+elm.desc+"</span>"
    }

    // create an image tooltip with the textual parts
    if('img' in elm){

      // generate a table with the discovered width
      var html = "<table style=\"border: 2px solid white; margin:-10px; width: auto\" class=\"table borderless\">"
      html += "<tbody><tr>";

      // create a column with the image
      html += "<td><img style=\"height: 150px; width:auto; max-width: 300; overflow-x:hidden\" src=\"images/"+elm.img+"\"></td>"

      // create a column with the text data
      html += "<td style=\"width:100px;\">"+textComponents+"</td>";

      // close the elements
      html += "</tr></tbody></table>";
    } else {
      // generate the simple tootltip
      var html = "<div width=100px>" + textComponents + "</div>";
    }

    // generate the size factor for the element
    var sizeFactor = (elm.days > 120) ? 120 : elm.days;

    // return API-friendly array
    return [elm.city, elm.year, sizeFactor, html];

  })
  // sort by year so that it populates the map in chronological order
  .sort(function(a,b){
    return a[1] - b[1];
  });

  // pop that pesky sort-undefined
  advdata.pop();

  // initialize the data table
  var data = new google.visualization.DataTable();
  data.addColumn('string','City');
  data.addColumn('number', 'Year Visited');
  data.addColumn('number','Duration of Stay');
  data.addColumn({'type': 'string', 'role': 'tooltip', 'p': {'html': true}});
  // add the rows into the dataset
  data.addRows(advdata/*[advdata[0], advdata[1]]*/);


  var options = {
    displayMode: 'markers',
    colorAxis: {colors: ['orange', 'blue']},
    tooltip : {
      isHtml: true,
      trigger:'focus'
    }
  };

  var chart = new google.visualization.GeoChart(document.getElementById('map'));
  chart.draw(data, options);
};
