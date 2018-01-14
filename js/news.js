$(document).ready(begin());
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
    console.log(user.uid);
    $('#photo-user').append('<img class="img-user" src="' + user.foto + '">');
    $('#name-user').text(user.nombre);
    $('#out').on('click', function() {
      firebase.database().ref('team/' + user.uid).remove();
    });
  });

  //  Materialize
  $('.button-collapse').sideNav();
  $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: 'left', // Displays dropdown with edge aligned to the left of button
    stopPropagation: false // Stops event propagation
  });
  $('#textarea1').val('New Text');
  $('#textarea1').trigger('autoresize');
  //  Habilitando post
  var newDate = new Date();
  var $textarea = $('#icon_prefix2');
  var $containerPost = $('#container-post');
  var $btnPost = $('#btn-post');
  $btnPost.on('click', function() {
    var $textPost = $textarea.val();
    if ($textPost.length > 0) {
      $containerPost.append(
        '<div class="border-post row">' +
          '<form class="col l10 offset-l1 offset-s1 s10">' +
            '<div class="row">' +
              '<div class="input-field col l11 s11">' +
                '<i id="edit-btn" class="color-purple material-icons prefix">mode_edit</i>' +
                '<textarea id="text-edit" class="materialize-textarea" disabled>' + $textPost + '</textarea>' +
                '<div id="container-btn-save" class="row">' +
                  '<span id="like" class="col l2 left"><i class="likes material-icons">thumb_up</i></span>' +
                  '<span id="love" class="col l2 left"><i class="likes material-icons">favorite</i></span>' +
                  '<span id="force" class="col l2 left"><i class="likes material-icons">fitness_center</i></span>' +
                  '<span class="valign-wrapper col l2 right">' + newDate.getHours() + ':' + newDate.getMinutes() + '  ' + newDate.getFullYear() + '/' + (newDate.getMonth() + 1) + '/' + newDate.getDate() + '</span>' +
                '</div>' +
                '<div id="container-likes" class="text-purple col s2 l2">' +
                '</div>' +
                '<div id="container-love" class="text-purple col s2 l2">' +
                '</div>' +
                '<div id="container-force" class="text-purple col s2 l2">' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</form>' +
        '</div>'
      );
      //  habilitando btn like
      var $like = $('#like');
      var numLike = 1;
      $like.on('click', function() {
        if (numLike === 1) {
          $('#container-likes').html('<b>' + numLike++ + ' like' + '</b>');
        } else {
          $('#container-likes').html('<b>' + numLike++ + ' likes' + '</b>');
        }
      });
      //  habilitando btn love
      var $love = $('#love');
      var numLove = 1;
      $love.on('click', function() {
        if (numLove === 1) {
          $('#container-love').html('<b>' + numLove++ + ' love' + '</b>');
        } else {
          $('#container-love').html('<b>' + numLove++ + ' loves' + '</b>');
        }
      });
      //  habilitando btn fuerza
      var $force = $('#force');
      var numForce = 1;
      $force.on('click', function() {
        if (numForce === 1) {
          $('#container-force').html('<b>' + numForce++ + ' force' + '</b>');
        } else {
          $('#container-force').html('<b>' + numForce++ + ' forces' + '</b>');
        }
      });
      var $editBtn = $('#edit-btn');
      $editBtn.on('click', function() {
        $('#text-edit').removeAttr('disabled');
        $('#container-btn-save').append(
          '<a id="btn-save" class="waves-effect waves-light btn">guardar</a>'
        );
        $('#btn-save').on('click', function() {
          $('#text-edit').attr('disabled', true);
          $('#btn-save').remove();
        });
      });
    }
    $textarea.val('');
  });
  //  Habilitando chat-general
  var $inputChat = $('#input-chat');
  var $chatContainer = $('#chat-container');
  var $send = $('#send');
  $send.on('click', function() {
    var $textChat = $inputChat.val();
    if ($textChat.length > 0) {
      $chatContainer.append(
        '<div class="content-sms">' +
        '<p id="message-send" class="message">' + $textChat + '<span class="move">' + newDate.getHours() + ':' + newDate.getMinutes() + '</span></p>' +
        '</div>'
      );
    }
    $inputChat.val('');
  });
}
