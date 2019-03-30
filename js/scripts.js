$(document).ready(function(){

  //reduceInput() takes two arguments and returns a single letter string representing their equality or difference.
  function reduceInput(input1, input2) {
    if (input1 === input2) {
      return input1;
    } else {
      return "e"
    }
  };

  //buildCourseClass() takes arguments from reduceInput() and concatenates them into a usable .class name
  function buildCourseClass(input1, input2, input3) {
    return "." + input1 + input2 + input3;
  }
  //validates that radio button from each group is selected
  $('#main-submit').click(function(event){
    event.preventDefault();
      var check = true;
      $("input:radio").each(function(){
          var name = $(this).attr("name");
          if($("input:radio[name="+name+"]:checked").length == 0){
              check = false;
          }
      });
      //save console.log for debugging
      console.log(check);

      if(check){
          var q1 = $('input:radio[name=question1]:checked').val();
          var q2 = $('input:radio[name=question2]:checked').val();
          var q3 = $('input:radio[name=question3]:checked').val();
          var q4 = $('input:radio[name=question4]:checked').val();
          var q5 = $('input:radio[name=question5]:checked').val();
          var q6 = $('input:radio[name=question6]:checked').val();

          //save for testing and debugging
          console.log(q1, q2, q3, q4, q5, q6);

          var courseClass = buildCourseClass(reduceInput(q1,q2), reduceInput(q3,q4), reduceInput(q5,q6));

          //save for testing and debugging
          console.log(courseClass);

          $(courseClass).removeClass('my-hide');
          $(".goodbye-box").removeClass("my-hide");
          // $("#invalidInput").addClass('my-hide');
          $("#formModal").modal('toggle');
          return false;

      }else{
          $("#invalidInput").removeClass('my-hide');
          $("form").trigger("reset");
      }
  });
  // button controls
  $(".openModal").on("click", function(){
    $(".display-box").children().addClass('my-hide');
    $(".goodbye-box").addClass("my-hide");
    $("#formModal").modal('show');
  })

  $(".view-all").on("click", function() {
    $(".display-box").children().removeClass('my-hide');
    $(".goodbye-box").removeClass("my-hide");
  });

  $(".retake").on("click", function() {
    $(".display-box").children().addClass('my-hide');
    $(".goodbye-box").addClass("my-hide");
    $("#formModal").modal('show');
  });

    $('#formModal').on('hidden.bs.modal', function (e) {
      $("form").trigger("reset");
  });

});
