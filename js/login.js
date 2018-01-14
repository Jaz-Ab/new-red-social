$(document).ready(begin);

function begin() {
  // materialize
  $('.carousel.carousel-slider').carousel({fullWidth: true});
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
  //  login
  var provider = new firebase.auth.GoogleAuthProvider();
  $('#loginGoogle').on('click', function() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log(result.user);
      saveData(result.user);
      window.location.href = '../views/news.html';
    });
  });
  //  Esta funcion guarda automaticamente los datos
  function saveData(user) {
    var realUser = {
      uid: user.uid,
      nombre: user.displayName,
      email: user.email,
      foto: user.photoURL
    };
    firebase.database().ref('team/' + user.uid).set(realUser);
  }

  //  Aquí estoy leyendo la Base de datos
  firebase.database().ref('team').on('child_added', function(data) {
    var user = data.val();
    $('#root').append('<img class="photo-url" src="' + user.foto + '">');
  });
  /*
  //   Escribir enla base de datos
  $('#save').on('click', function() {
    firebase.database().ref('test').set({
      nombre: 'Alia',
      edad: '14',
      sexo: 'masculino'
    });
  });*/
}
