//shows current date
var currentDay = moment

var updateDayText = function(currentDay) {
  var dateText = $("<div>").text(currentDay.format('MMMM Do, YYYY'))
  var dayOfWeek = $("<div>").text(currentDay.format('dddd'))
  var displayEl = $(".jumbotron .d-flex").find("#currentDay")
  if(displayEl.length > 0) {
      $("#currentDay").empty()
      $("#currentDay").append(dateText, dayOfWeek)
  } else {
      var dateDisplay = $("<button>")
          .addClass("btn btn-light dateDisplay")
          .attr("id", "currentDay")
      dateDisplay.append(dateText, dayOfWeek)
      $(".date-picker").replaceWith(dateDisplay)        
  }
   if(isToday(currentDay)){
    $("#last-day").prop('disabled', true)
} else {
    $("#last-day").prop('disabled', false)
}
}