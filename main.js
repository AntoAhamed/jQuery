//document.querySelector("#heading1").innerHTML="Heading 1 changed"; in js

//text manipulation...
$("#heading1").text("New heading");
//$("#heading1").html("<i>New heading in italic</i>");
$("#heading1").append(" New heading"); //prepend()

//create and add elements before and after...
var newHead1 = $("<h1></h1>").text("Heading 1.5");
var newHead2 = $("<h1></h1>").text("Heading 2.5");
$("#mydiv1 #heading2").before(newHead1);
$("#mydiv1 #heading2").after(newHead2);

//$("a").attr("target",""); set or add attribute
//$("a").removeAttr("target"); remove attribute

$("#para1").css("color", "red");
$("#para1").css({ "fontSize": "20px", "padding": "10px" });

$(".btn").click(function () {
    var tmpValue = this.value;
    $("#btnDemo").text(tmpValue + " is clicked")
})