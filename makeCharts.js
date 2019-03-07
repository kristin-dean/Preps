
var dataB = d3.csv("breast.csv");
var dataP = d3.csv("prostate.csv");

dataB.then(function(data)
{
  console.log("data",data);
  drawChart(data, "#breast");
},
function(err)
{
  console.log(err);
});

dataP.then(function(dataName)
{
  console.log("data",dataName);
    drawChart(dataName, "#prostate");
},
function(err)
{
  console.log(err);
});


//************************************** function to create charts ******************************************//

var drawChart = function(colorData, idname)
{
  var width = 1500;
  var height = 600;
  var barWidth = width/colorData.length - 10;
  var svg = d3.select(idname)
              .attr("height", height)
              .attr("width", width);
  svg.selectAll("rect")
     .data(colorData)
     .enter()
     .append("rect")
     .attr("x", function(d,i)
      { return i*barWidth + 10;})
    .attr("y", function (d)
      { return height - d.Count/1000;})
    .attr("width", barWidth)
    .attr("height", function(d)
      { return d.Count/200;})
    .attr("fill", function(d)
      { return "pink"});
}
