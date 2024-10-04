// // // nab button 

// // button = document.getElementById('navbar-toggler');

// // button.addEventListener('click', clickfunction)

// // // function to handle click

// // function clickfunction(){
// //     console.log('this')
// //    let hide = document.getElementById('navbar-nav');
// //     console.log(hide.classList)

// //   if(hide.style.display = 'none'){
// //     hide.style.display = 'block';
// //     hide.classList.add('show')
// //   }
// //   else{
// //     hide.classList.add('hide');
// //   }
  
   
    
// // }







// function googleTranslateElementInit() {
//   new google.translate.TranslateElement({
//     pageLanguage: 'en',  // Current page language
//     includedLanguages: 'bn',  // Language options (Bangla)
//     layout: google.translate.TranslateElement.InlineLayout.SIMPLE
//   }, 'google_translate_element');
// }

// function translateToBangla() {
//   var selectField = document.querySelector("select.goog-te-combo");
//   if (selectField) {
//     selectField.value = "bn";  // Set language to Bangla (bn)
//     selectField.dispatchEvent(new Event("change"));  // Trigger the change event
//   }
// }


// function initMap() {
//   var location = {lat: -34.397, lng: 150.644};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 8,
//     center: location
//   });
// }

// // Call initMap once the Google Maps API has loaded
// google.maps.event.addDomListener(window, 'load', initMap);




$("#translateButton").click(function () {

  var url = "https://translation.googleapis.com/language/translate/v2";
  //Strings requiring translation
  url += "?q=" + escape($("#textField").text());
  url += "&q=" + escape($("#title").text());
  //Target language
  url += "&target=" + $("#targetLanguage").val();
  //Replace with your API key
  url += "&key=AIzaSyBm6-QqyT7_OcJp03BIPZhgfp-xB0GxOb0";
  console.log(url);
  $.get(url, function (data, status) {
      //Results are returned in an array following the order they were passed. 
      $("#textField").text(data.data.translations[0].translatedText);
      $("#title").text(data.data.translations[1].translatedText);
  });       
});