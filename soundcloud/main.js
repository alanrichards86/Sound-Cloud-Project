/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with

var audio = document.querySelector('#audioPlayer');
var form = document.querySelector('#mainForm');
var request = new Request('https://api.soundcloud.com/tracks?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f')
var myInit = { method: 'GET',
               mode: 'no-cors',
               cache: 'default' };

// 2. Create your `onSubmit` event for getting the user's search term
function sub() {
  console.log('Hi!');
  alert('It worked!');
}


// function sub() {
//   console.log('Hi!');
//   fetch('https://api.soundcloud.com/users?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f', myInit).then(
//     function(response) {
//      console.log(response);
//      console.log('Status:', response.status);
//     response.json().then(function(data){
//       console.log(data);
//     });
//
//    });
//  }
//     function(reject){
//       console.log("Rejected!");
//     }
//   );
//   // alert(form.artist.value);
//
// }

// 3. Create your `fetch` request that is called after a submission

// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play
