var $input=$("textarea.blog-post")
var $submit=$("button.submit-post")
var posts=[];


$submit.on("click",function functionName() {
  var post =$input.val();

  posts.push( post );
  $input.val("");

  $(this).trigger("submit:post");
})
;


$submit.on("submit:post", function(){
  if(post.length === 1){
     $submit.before($("<button class='publishpost'>Publish Now</button>"));}
   });
$("button publish-post").on("click",
function(){
  for (var i =0; i < posts.length;i++){
        $("button publish post")append("<section class =post >" + posts[0] + "</section>")
        append("<hr>");
      )
      posts=[];

      $["button.publish-post"].remove();
      });
    }
});
