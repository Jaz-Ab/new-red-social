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
  //  Habilitando chat-general
  var newDate = new Date();
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
