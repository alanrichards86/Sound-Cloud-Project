/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with

var audio = ""; document.querySelector('#audioPlayer');
var form = document.querySelector('#mainForm');
var results = document.querySelector(".results");
var request = new Request("http://api.soundcloud.com/users/?client_id=8538a1744a7fdaa59981232897501e04")
var myInit = { method: 'GET',
               mode: 'no-cors',
               cache: 'default' };

// 2. Create your `onSubmit` event for getting the user's search term
function sub() {
  event.preventDefault();
  fetch("http://api.soundcloud.com/users/?client_id=8538a1744a7fdaa59981232897501e04&q=" + form.value)
    .then(function(response){
      response.json().then(function(data){
        console.log(data);
        console.log(data[0].uri);
        dataInfo(data)
})
})
}
//Cant get this function to work properly !
function dataInfo(data) {
let dataArray = [];
for(let i = 0; i < data.length; i++)
fetch(data[i].uri + 'id=8538a1744a7fdaa59981232897501e04&q=')
.then(function(response){
  response.json().then(function(data)
  console.log('hi');
  console.log(data[i].uri);
  dataArray.push(data[i].uri);
  console.log(dataArray);
}

// 3. Create your `fetch` request that is called after a submission

// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play
