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

  // modal/form submit control
  $("form").submit(function(event) {

    event.preventDefault();

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
    $("#formModal").modal('toggle');
    return false;

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

  // $(".goodbye-box").removeClass("my-hide");
  // $(".goodbye-box").addClass("my-hide");

});
