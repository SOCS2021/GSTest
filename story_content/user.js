function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5f0ha8JvUKu":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var surname = player.GetVar('surname');
var name = player.GetVar('name');
var email = player.GetVar('email');
var status = player.GetVar('status');
var score = player.GetVar('score');

var formData = new FormData();
formData.append('Surname', surname);
formData.append('Name', name);
formData.append('Email', email);
formData.append('Status', status);
formData.append('Score', score);
//formData.append('Some text', 'Here is some text');

var request = new XMLHttpRequest();
request.open('POST', 'https://script.google.com/macros/s/AKfycbziMxO8jjF1mU_og_XZiJuYM2r485pXZPRkHyXDcIsSY3UDeGaFgpcOOi59oE03JrKVzQ/exec');
request.send(formData);
}

