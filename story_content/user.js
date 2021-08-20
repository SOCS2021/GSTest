function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5pkGmpPUt44":
        Script1();
        break;
      case "6GfdENhR4Zf":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var LearnerName = player.GetVar('LearnerName');
var LearnerEmail = player.GetVar('LearnerEmail');
var CorrectAnswer = player.GetVar('CorrectAnswer');

var formData = new FormData();
formData.append('LearnerName', LearnerName);
formData.append('LearnerEmail', LearnerEmail);
formData.append('CorrectAnswer', CorrectAnswer);


var request = new XMLHttpRequest();
request.open('POST', 'https://script.google.com/macros/s/AKfycbwH9MKCIq73QMCT3eIVeX8T8wGIbAl5XpNV9gRw9J89bwwMuzdfShV2HXUV0jXaRdQ7TA/exec');
request.send(formData);
}

function Script2()
{
  var player = GetPlayer();

var LearnerName = player.GetVar('LearnerName');
var LearnerEmail = player.GetVar('LearnerEmail');
var CorrectAnswer = player.GetVar('CorrectAnswer');

var formData = new FormData();
formData.append('LearnerName', LearnerName);
formData.append('LearnerEmail', LearnerEmail);
formData.append('CorrectAnswer', CorrectAnswer);


var request = new XMLHttpRequest();
request.open('POST', 'https://script.google.com/macros/s/AKfycbwH9MKCIq73QMCT3eIVeX8T8wGIbAl5XpNV9gRw9J89bwwMuzdfShV2HXUV0jXaRdQ7TA/exec');
request.send(formData);
}

