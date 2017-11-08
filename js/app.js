$(document).ready(function(){
//     for (var myId = 0; myId <= 10; myId++) {
//   $('textarea#' + myId).bind('input propertychange', function(){
//     localStorage.setItem("note", $(this).val());
//   });
//
//   if(localStorage.getItem("note") && localStorage.getItem("note")!=''){
//     var noteItem = localStorage.getItem("note");
//     $('textarea#' + myId).val(noteItem);
//   }
//   }
// });




// ALTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT-----------------

$('textarea#1').bind('input propertychange', function(){
  localStorage.setItem("note1", $(this).val());
});
if(localStorage.getItem("note1") && localStorage.getItem("note1")!=''){
  var noteItem = localStorage.getItem("note1")
  $('textarea#1').val(noteItem);
}

$('textarea#2').bind('input propertychange', function(){
  localStorage.setItem("note2", $(this).val());
});
if(localStorage.getItem("note2") && localStorage.getItem("note2")!=''){
  var noteItem = localStorage.getItem("note2")
  $('textarea#2').val(noteItem);
}

$('textarea#3').bind('input propertychange', function(){
  localStorage.setItem("note3", $(this).val());
});
if(localStorage.getItem("note3") && localStorage.getItem("note3")!=''){
  var noteItem = localStorage.getItem("note3")
  $('textarea#3').val(noteItem);
}

$('textarea#4').bind('input propertychange', function(){
  localStorage.setItem("note4", $(this).val());
});
if(localStorage.getItem("note4") && localStorage.getItem("note4")!=''){
  var noteItem = localStorage.getItem("note4")
  $('textarea#4').val(noteItem);
}
});

// REFFFFFFFFFFFFFFFFFF---------------------

// var supported = 'This text will be saved locally, forever.',
//     unsupported = 'Oh no! Your browser does not support localStorage.';
// if (window.localStorage) {
//     $('.persisted-text').keyup(function () {
//         localStorage.setItem(this.name, this.value);
//     }).val(function () {
//         return localStorage.getItem(this.name) || supported
//     })
// } else {
//     $('.persisted-text').val(unsupported);
// }

// Registering ServiceWorker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ',    registration.scope);
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}
