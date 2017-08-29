google.charts.load('current', {
   'packages': ['geochart'],
   // Note: you will need to get a mapsApiKey for your project.
   // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
   'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
 });
 google.charts.setOnLoadCallback(drawMarkersMap);

function drawMarkersMap() {

  var rawdata = [
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
      img: "cpt.JPG"
    },
    {
      city: 'New York City',
      days: 90,
      year: 2017,
      img: "nyc.JPG",
      desc: "I interned at Bloomberg in Manhattan the summer after my Junior year in college."
    },
    {
      city: 'Istanbul',
      days: 1,
      year: 2017
    },
    {
      city: 'Seoul',
      days: 30,
      year: 2015,
      img: "sk.jpg",
      desc: "I studied abroad in Seoul at Hanyang University."
    },
    {
      city: 'Satellite Beach',
      days: 18,
      year: 1995,
      inYears: true,
      img: "stlbch.JPG",
      desc: "I grew up in Satellite Beach, FL."
    },
    {
      city: 'Weston',
      days: 90,
      year: 2016,
      img: "weston.jpg",
      desc: "I interned at Ultimate Software in Weston, FL the summer after my Sophomore year in college."
    },
    {
      city: 'Nassau',
      days: 1,
      year: 2016,
    },
    {
      city: 'Key Largo',
      days: 4,
      year: 2016,
      img: "keylargo.jpg"
    },
    {
      city: 'Key West',
      days: 4,
      year: 2016,
      img: "keywest.jpg"
    },
    {
      city: 'Gainesville, FL',
      days: 3,
      year: 2014,
      inYears: true,
      img: "uf.jpg",
      desc: "I did my undergrad at the University of Florida in Gainesville, Florida."
    },
    {
      city: 'Victoria, British Columbia',
      days: 1,
      year: 2014
    },
    {
      city: 'Juneau',
      days: 2,
      year: 2014
    },
    {
      city: 'Skagway',
      days: 2,
      year: 2014
    },
    {
      city: 'Panama City',
      days: 7,
      year: 2000
    },
    {
      city: 'Cologne, Germany',
      days: 1,
      year: 2015
    },
    {
      city: 'Strausbourg',
      days: 1,
      year: 2015,
      img: 'strausbourg.jpg'
    },
    {
      city: 'Amsterdam',
      days: 4,
      year: 2015,
      img: 'amsterdam.jpg'
    },
    {
      city: 'Rome',
      days: 1,
      year: 2004
    },
    {
      city: 'Florence',
      days: 1,
      year: 2004
    },
    {
      city: 'Monaco',
      days: 1,
      year: 2004
    },
    {
      city: 'Barcelona',
      days: 7,
      year: 2000
    },
    {
      city: 'Valencia, Spain',
      days: 7,
      year: 2000
    },
    {
      city: 'Santorini',
      days: 7,
      year: 2000
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
      desc: 'My friends and I hiked the tallest mountain in NY - Mount Marcy.'
    },
    {
      city: 'Mountainview',
      days: 3,
      year: 2017,
      img: 'mv.jpg'
    },
    {
      city: 'San Diego',
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
      city: 'Asheville, NC',
      days: 10,
      year: 2016,
      img: 'nc.jpg',
      desc: 'My friends and I often go to North Carolina and North Georgia for hiking trips.'
    },
    {
      city: 'Zurich',
      days: 4,
      year: 2015,
      img: 'zurich.jpg'
    },
    {
      city: 'Stratton, VT',
      days: 4,
      year: 2017,
      img: 'stratton.JPG'
    }


  ];

  var data = new google.visualization.DataTable();
  data.addColumn('string','City');
  data.addColumn('number', 'Year Visited');
  data.addColumn('number','Duration of Stay');
  data.addColumn({'type': 'string', 'role': 'tooltip', 'p': {'html': true}});

  var advdata = rawdata.map(function(elm){
    return [elm.city,elm.year,elm.days, makeToolTip(elm)];
  });

  function makeToolTip(elm){
    var title = "<h5 style=\"text-align:center; min-width:100px\">" + elm.days;
    title += ('inYears' in elm) ? " year" : " day";
    title += elm.days == 1 ? "" : "s";
    title += ('inYears' in elm) ? " starting in " : " in ";
    title += elm.year + "</h5>";
    if('img' in elm){
      var html = "<table style=\"border: 2px solid white; margin:-10px; margin-right:-20px\" class=\"table borderless\" ><tbody style=\"border: 0px;\"><tr>";
      html += "<td><img style=\"height: 200px; width:auto;\" src=\"images/"+elm.img+"\"></td>"
      html += "<td style=\"max-width:150px;\">"+title;
      if('desc' in elm){
        html += "<span style=\"\">"+elm.desc+"</span>";
      }
        html += "</td></tr></tbody></table>";
    } else {
      var html = "<div>" + title;
      if('desc' in elm){
        html += "<span style=\"\">"+elm.desc+"</span>"
      } else {
        html += "<span style=\"min-width:200px; padding:0px\"></span>"
      }
      html += "</div>"
    }
    return html;
  }

  data.addRows(advdata);


  var options = {
    displayMode: 'markers',
    colorAxis: {colors: ['yellow', 'blue']},
    tooltip : {
      isHtml: true,
      trigger:'focus'
    }
  };

  var chart = new google.visualization.GeoChart(document.getElementById('map'));
  chart.draw(data, options);
};
