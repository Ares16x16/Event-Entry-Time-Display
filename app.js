const queueNumberElement = document.getElementById('queue-number');

function updateQueueNumber() {
  fetch('/queue')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      queueNumberElement.textContent = data.current_timeslot;
    })
    .catch(error => {
      console.error('Error fetching queue number:', error);
    });
}
updateQueueNumber();
// Update the queue number every 5 seconds
setInterval(updateQueueNumber, 5000);