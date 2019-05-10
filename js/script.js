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


$(".group1, .group2").change(function() {
  this.checked ? $("." + this.className).not(this).prop("disabled", true) : $("." + this.className).not(this).prop("disabled", false);
  if (this.checked) {
    $('#flashMessage').slideDown().delay(2000).slideUp()
  }
})

$(".activities").change(function() {
  console.log("clicking");

  $(".activities").append("<p> Total cost: $100 </p>")
  console.log($(input).attr('name'))



  if (this.checked) {


  }
})
