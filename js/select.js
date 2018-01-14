$(document).ready(begin);

function begin() {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyBg3tbs-mEIm6v_Y00wrPU1yTX8dyBADPw',
    authDomain: 'new-red-social-20998.firebaseapp.com',
    databaseURL: 'https://new-red-social-20998.firebaseio.com',
    projectId: 'new-red-social-20998',
    storageBucket: 'new-red-social-20998.appspot.com',
    messagingSenderId: '16979526429'
  };
  firebase.initializeApp(config);
  // materialize
  $(document).ready(function() {
    $('select').material_select();
  });
}
