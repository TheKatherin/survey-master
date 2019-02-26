$(document).ready(function() {
  console.log( "ready!" );
  $("#survey_form" ).submit(function( event ) {
    var question_id = $("#response p").attr("id");
    var answer_id = parseInt($("input:checked").val());
    console.log(question_id);
    console.log(answer_id);

    var response = get_response(question_id, answer_id);
    console.log(response["text"]);

    $(".info").remove();
    $(".answer").remove();
    $("<p id=" + response["next_questionid"] + " class=info>" + response["text"] + "</p>").appendTo("#response");

    if(!response["isresult"]){
      console.log( response["answer_list"]);
      for (var i = 0; i < response["answer_list"].length; i++) {
        $("<div class = answer form-check>" +
        "<input class = form-check-input type = radio name =a nswer" + (i+1) + " value =" + (i+1) + ">" +
        "<label class = form-check-label for = answer" + (i+1) + ">" + response["answer_list"][i] +
        "</label></div>").appendTo("#answer_list");
      }
    }
    event.preventDefault();
  });
});

//business logic
function get_response(question_id, answer_id){
  var response = new Object();
  switch (question_id) {
    // What do you want to learn
    case "question_0":switch (answer_id) {
      case 1 || 2: // Just for fun or I'm interested
        response.isresult = false;
        response.next_questionid ="question_1_1"
        response.text = "Have a brilliant idea/platform in mind";
        response.answer_list = ["Yes", "Nope, just want to get started"];
        return response;
      case 3: // Improve myself
        response.isresult = true;
        response.text = "Survey ends: python";
        return response;
      case 4: // Make money
        response.isresult = false;
        response.next_questionid ="question_1_4"
        response.text = "Which of this fit you better?";
        response.answer_list = ["Get a job", "I have a Startup idea"];
        return response;
      case 5: // For my kids
        response.isresult = true;
        response.text = "Survey ends: Scratch";
        return response;
      case 6: // I don't know
        response.isresult = true;
        response.text = "Survey ends: Python";
        return response;
        break;
      default:
      }
    // Have a brilliant idea/platform in mind:
    case "question_1_1":switch (answer_id) {
      case 1: // Yes
      response.isresult = false;
      response.next_questionid ="question_1_4"
      response.text = "Which of this fit you better?";
      response.answer_list = ["Get a job", "I have a Startup idea"];
      return response;
      case 2: // Nope, just want to get started.
      response.isresult = false;
      response.next_questionid ="question_1_1_2"
      response.text = "I prefer to learn things...";
      response.answer_list = ["The easy, the best way", "The slightly harder way", "The really hard way(but easier to pick upother language in future"];
      return response;
    };
    // Which of this fit you better?
    case "question_1_4":switch (answer_id) {
      case 1 || 2: // Get a job
        response.isresult = false;
        response.next_questionid ="question_1_4_1"
        response.text = "Which platform/field?";
        response.answer_list = ["Web", "Enterprise", "Mobile", "3D/Gaming", "I want to work in big tech company", "Doesn't metter. I just want $$$"];
        return response;
    };
    // I prefer to learn things
    case "question_1_1_2":switch (answer_id) {
      case 1: // The easy way
        response.isresult = true;
        response.text = "Survey ends: python";
        return response;
      case 2: // The slightly harder way
        response.isresult = false;
        response.next_questionid ="question_1_1_2_2"
        response.text = "What type of car?";
        response.answer_list = ["Auto", "Manual"];
        return response;
      case 3: // The really hard way
        response.isresult = true;
        response.text = "Survey ends: C++";
        return response;
    };
    // Which platform/field?
    case "question_1_4_1":switch (answer_id) {
      case 1: // Web
        response.isresult = false;
        response.next_questionid ="question_1_4_1_1"
        response.text = "What do you like more?";
        response.answer_list = ["Frontend", "BackEnd"];
        return response;
      case 2: // Enterprise
        response.isresult = false;
        response.next_questionid ="question_1_4_1_2"
        response.text = "What do you think about Windows OS?";
        response.answer_list = ["No. It's suck", "I'm a fan"];
        return response;
      case 3: // Mobile
        response.isresult = false;
        response.next_questionid ="question_1_4_1_3"
        response.text = "What platform does you phone has?";
        response.answer_list = ["I love my iPhone. iOS", "Android", "Windows phone"];
        return response;
      case 4: // 3D/Gaming
        response.isresult = true;
        response.text = "Survey ends: C++";
        return response;
      case 5: // Big tech company
        response.isresult = false;
        response.next_questionid ="question_1_4_1_5"
        response.text = "Which platform/field?";
        response.answer_list = ["Facebook", "Google", "Microsoft", "Apple"];
        return response;
      case 6: // $$$
        response.isresult = true;
        response.text = "Survey ends: Java";
        return response;
    };
    // Frontend vs. BackEnd
    case "question_1_1_2_2":switch (answer_id) {
      case 1: // Auto
        response.isresult = true;
        response.text = "Survey ends: Java";
        return response;
      case 2: // Manual
        response.isresult = true;
        response.text = "Survey ends: C";
        return response;
    };
    // Frontend vs. BackEnd
    case "question_1_4_1_1":switch (answer_id) {
      case 1: // Web
        response.isresult = false;
        response.next_questionid ="question_1_4_1_1_1"
        response.text = "What do you like more";
        response.answer_list = ["Frontend", "BackEnd"];
        return response;
    };
    // windows os
    case "question_1_4_1_2":switch (answer_id) {
      case 1: // no
        response.isresult = true;
        response.text = "Survey ends: Java";
        return response;
      case 2: // yes
        response.isresult = true;
        response.text = "Survey ends: C#";
        return response;
    };
    // windows os
    case "question_1_4_1_3":switch (answer_id) {
      case 1: // ios
        response.isresult = true;
        response.text = "Survey ends: Swift";
        return response;
      case 2: // android
        response.isresult = true;
        response.text = "Survey ends: java";
        return response;
      case 3: //  windows phone
        response.isresult = true;
        response.text = "Survey ends: C#";
        return response;
    };
    // company
    case "question_1_4_1_5":switch (answer_id) {
      case 1: // facebook
        response.isresult = true;
        response.text = "Survey ends: python";
        return response;
      case 2: // Google
        response.isresult = true;
        response.text = "Survey ends: python";
        return response;
      case 3: //  Microsoft
        response.isresult = true;
        response.text = "Survey ends: C#";
        return response;
      case 4: //  Apple
        response.isresult = true;
        response.text = "Survey ends: C";
        return response;
    };
    // What type of car?
    case "question_1_4_1_1_1":switch (answer_id) {
      case 1: // Frontend
        response.isresult = false;
        response.next_questionid ="question_1_4_1_1_1_1"
        response.text = "I want to work for...";
        response.answer_list = ["Corporate", "Startup"];
        return response;
      case 2: // BackEnd
        response.isresult = true;
        response.text = "Survey ends: Javascript";
        return response;
    };
    // What type of car?
    case "question_1_4_1_1_1_1":switch (answer_id) {
      case 1: // Corporate
        response.isresult = true
        response.text = "Survey ends: C#";
        return response;
      case 2: // Startup
        response.isresult = false;
        response.next_questionid ="question_1_4_1_1_1_2"
        response.text = "Which one is your favourite toy?";
        response.answer_list = ["Lego", "Play-Doh", "I've an old toy, I love it so much!"];
        return response;
    };
    // Which one is your favourite toy?
    case "question_1_4_1_1_1_2":switch (answer_id) {
      case 1: // Lego
        response.isresult = true
        response.text = "Survey ends: python";
        return response;
      case 2: // Play-Doh
        response.isresult = true
        response.text = "Survey ends: Rudy";
        return response;
      case 3: // Old toy
        response.isresult = true
        response.text = "Survey ends: php";
        return response;
    };
  };
};
