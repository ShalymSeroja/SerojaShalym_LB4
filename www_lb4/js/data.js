window.onload = function() {
  function updateDateTime() {
      var date = new Date();
      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
      var dateTimeString = date.toLocaleString('en-US', options);
      document.getElementById("current-date").innerHTML = dateTimeString;
  }
  updateDateTime();
  setInterval(updateDateTime, 1000); // Update every second
};
