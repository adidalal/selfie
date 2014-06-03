// Restores preferences
// stored in localStorage
function restore_options() {
  // ask for camera permissions
  navigator.webkitGetUserMedia({video: true, audio: true}, cameraSuccess, cameraDeny);
  // camera status
  function cameraSuccess() {
      console.log('permissions accepted');
  }
  function cameraDeny() {
      console.log('permissions rejected');
  }

  // handle userid
  var userid = localStorage.getItem('userid');
  console.log(userid);
  if (!userid) {
        userid = Math.random().toString(36).substring(7);
        console.log('generated uid' + userid);
        localStorage.setItem('userid', userid);
    };
    document.getElementById('userid').value = userid;
};

// Saves options to localStorage
function save_options() {
    userid = document.getElementById('userid').value;
    console.log(userid);
    localStorage.setItem('userid', userid);
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
};

// handle loading and saving options
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);