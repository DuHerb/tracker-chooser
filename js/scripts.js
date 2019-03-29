$(document).ready(function(){

  function createIDtag(input1, input2) {
    if (input1 === input2) {
      return input1;
    } else {
      return "e"
    }
  };

  // function buildID(input1, input2, input3) {
  //
  // }
  var a = "a";
  var b = "a";
  var testTag = createIDtag(a,b);
  console.log(testTag);

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
