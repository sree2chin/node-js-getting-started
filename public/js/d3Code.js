// Set the dimensions of the canvas / graph
    var margin = {top: 30, right: 20, bottom: 30, left: 50},
        width = 600 - margin.left - margin.right,
        height = 270 - margin.top - margin.bottom;


    // Parse the date / time
    var parseDate = d3.time.format("%d-%b-%y").parse;

    // Set the ranges
    var x = d3.scale.linear().range([0, width]);
    var y = d3.scale.linear().range([height, 0]);

    // Define the axes
    var xAxis = d3.svg.axis().scale(x)
        .orient("bottom").ticks(5);

    var yAxis = d3.svg.axis().scale(y)
        .orient("left").ticks(5);

    // Define the line
    var valueline = d3.svg.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.close); });
        
    // Adds the svg canvas
    var svg = d3.select("#farmers-graph")
      .append("svg")
          .attr("width", width + margin.left + margin.right + 10)
          .attr("height", height + margin.top + margin.bottom + 10)

    .append("g")
                .attr("transform", 
                "translate(" + margin.left + "," + margin.top + ")");

    // Get the data
    //d3.csv("data.csv", function(error, data) {
    var data = [
        {date:1995,close:'10720',size:2},
        {date:1996,close:'13729',size:4},
        {date:1997,close:'13622',size:8},
        {date:1998,close:'16015',size:16},
        {date:1999,close:'16082',size:32},
        {date:2000,close:'16603',size:32},
        {date:2001,close:'16415',size:32},
        {date:2002,close:'17971',size:32},
        {date:2003,close:'17164',size:32},
        {date:2004,close:'18241',size:32},
        {date:2005,close:'17131',size:32},
        {date:2006,close:'17060',size:32},
        {date:2007,close:'16632',size:32},
        {date:2008,close:'16796',size:32},
        {date:2009,close:'17368',size:32},
        {date:2010,close:'15964',size:32},
        {date:2011,close:'14027',size:32},
        {date:2012,close:'13754',size:32},
        {date:2013,close:'11772',size:32},
        {date:2014,close:'12360',size:32},
        {date:2015,close:'12602',size:32},
    ];

      data.forEach(function(d) {
          d.close = +d.close;
      });

      // Scale the range of the data
      x.domain(d3.extent(data, function(d) { return d.date; }));
      y.domain([0, d3.max(data, function(d) { return d.close; })]);

      // Add the valueline path.
      var path = svg.append("path")
          .attr("class", "line")
          .attr("d", valueline(data));


          var totalLength = path.node().getTotalLength();
      $(document).on("click",".s-to-solve-tab",function() {
        var tempPath = path;
        setTimeout(function(){
          tempPath
          .attr("stroke-dasharray", totalLength + " " + totalLength)
          .attr("stroke-dashoffset", totalLength)
          .transition()
          .duration(2000)
          .ease("linear")
          .attr("stroke-dashoffset", 0);
        },100);
        
      });

      // Add the X Axis
      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      // Add the Y Axis
      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);  
    

      

