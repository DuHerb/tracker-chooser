$(document).ready(function(){

  //reduceInput() takes two arguments and returns a single letter string representing their equality or difference.
  function reduceInput(input1, input2) {
    if (input1 === input2) {
      return input1;
    } else {
      return "e"
    }
  };

  //buildImageID() takes arguments from reduceInput() and concatenates them into a usable .class name
  function buildImageID(input1, input2, input3) {
    return "." + input1 + input2 + input3;
  }

  // var imageID = (buildImageID("f","a","e"));
  //
  // $(imageID).removeClass('my-hide');

  // console.log(buildImageID("f","a","e"));
  // var a = "a";
  // var b = "a";
  // var testTag = reduceInput(a,b);
  // console.log(testTag);

  $("form").submit(function(event) {
    event.preventDefault();

    var q1 = $('input:radio[name=question1]:checked').val();
    var q2 = $('input:radio[name=question2]:checked').val();
    var q3 = $('input:radio[name=question3]:checked').val();
    var q4 = $('input:radio[name=question4]:checked').val();
    var q5 = $('input:radio[name=question5]:checked').val();
    var q6 = $('input:radio[name=question6]:checked').val();

    console.log(q1, q2, q3, q4, q5, q6);

    // $('.course-card').removeClass('my-hide');

  });



});
