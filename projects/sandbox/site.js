var $title=$("h1");
var $output=$("#output");
var $list= $("#list");
var color= prompt("What color title would you like?");


$title.text("I  am coming from jquery");
$title.css({
  "color": color,
  "text-align":"center",
  "background-color":"black",
});
$title.animate({

  "font-size":"1200%",
  "duration" : 1000,
  "easing" : "easeIn",
});

$output.text("I am coming from jquery");
$output.html("<ul><li>I am coming from jquery</li></ul>");

console.log($("h1").text());
console.log( $output.text());
console.log( $output.html());
$output.append("I am missing my hot chocolate");
$output.append("<h3> This another day of class. </h3>");
$("#output  > ul" ).append(
    $("<li>").text("Here's a new list items")
);
$list.prepend(" chocolate ");
$("#list > ul").prepend(
  $("<li>").text("goejgog"),
    $("<li>").text("roejgog")
);
var carrot = function(){
  var bunny =Math.pow(2,2);
  var deer =Math.pow(6,2);

  console.log( bunny );
  console.log( deer );

  return bunny + deer;
}
alert(carrot());
var $output =$("#output");
$title.text("I am coming for JQuery");
$output.html("<ul><li>This a subtitle</li></ul>");
$output.append("this is text");
$output.append("<h3>this is a subtitle</h3>")
$("#output ul").append(
  $("<li>").text("here's a new list item")
);
$("#output").on("mouseenter","li", function(){
  $(this).addClass("highlight");
}) ;
$("#output").on("mouseleave", "li", function () {
  $(this).removeClass("highlight");
});
$("#output ul").append(
  $("<li>").text("here's a new lis item")
);
$("#output ul").append(
  $("<li>").text("here's a new lis item")
);
$("#output ul").append(
  $("<li>").text("here's a new lis item")
);
$("#output").append(
  $(<"input type='text'>")
)
$("#output").on("keypress")
