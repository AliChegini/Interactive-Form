// focus on name fild at load
$("#name").focus()

$("#other-title").hide()

// show and hide other title based on user select
$("#title").change(() => {
  if ($("#title").val() == "other") {
    $("#other-title").show()
  } else {
    $("#other-title").hide()
  }
})


// remove the objects and get a reference to them
var $punsTheme = $("#puns").remove()
var $heartTheme = $("#heart").remove()


$("#design").change(() => {
  toggleFields()
})


function toggleFields() {
  $("#color optgroup").remove()
  var designValue = $("#design").val()

  // append the removed objects when needed
  if (designValue == "js puns") {
    $("#color").append($punsTheme)
  }

  if (designValue == "heart js") {
    $("#color").append($heartTheme)
  }
}
