var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");
var tbody = d3.select("tbody");

var resetData = tableData;

// renderTable renders the tableData to the tbody
function renderTable() {
  for (var i = 0; i < tableData.length; i++) {
    var data = tableData[i];
    var fields = Object.entries(data); {
        var row = tbody.append("tr");
        Object.entries(data).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);

        console.log(data);
      });
    };
  }
}
renderTable();

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  d3.select("tbody").html("");

  // Select the input elements
  var inputDate = d3.select("#datetime");
  var inputState = d3.select("#state");
  var inputCity = d3.select("#city");
  var inputCountry = d3.select("#country");
  var inputShape = d3.select("#shape");

  // Get the value property of the input element
  var dateValue = inputDate.property("value");
  var stateValue = inputState.property("value");
  var cityValue = inputCity.property("value");
  var countryValue = inputCountry.property("value");
  var shapeValue = inputShape.property("value");

  // Filter each object from the dataset
  
  var filteredDate = tableData.filter(report => report.datetime === dateValue);
  var filteredState = tableData.filter(report => report.state === stateValue);
  var filteredCity= tableData.filter(report => report.city === cityValue);
  var filteredCountry= tableData.filter(report => report.country === countryValue);
  var filteredShape= tableData.filter(report => report.shape === shapeValue);

  console.log(filteredDate);
  console.log(filteredState);
  console.log(filteredCity);
  console.log(filteredCountry);
  console.log(filteredShape);
  
  filteredDate.forEach((report) => {
  var row = tbody.append("tr");
  Object.entries(report).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
    });
  });

  filteredState.forEach((report) => {
    var row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

  filteredCity.forEach((report) => {
    var row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

  filteredCountry.forEach((report) => {
    var row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

  filteredShape.forEach((report) => {
    var row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
    // Clear input filters
    d3.select("#datetime").node().value = "";
    d3.select("#state").node().value = "";
    d3.select("#city").node().value = "";
    d3.select("#country").node().value = "";
    d3.select("#shape").node().value = "";
  
});


