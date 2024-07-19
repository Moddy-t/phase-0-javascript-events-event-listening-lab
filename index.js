
function addingEventListener() {
    const button = document.getElementById('button');
    button.addEventListener('click', function() {
      alert('Button was clicked!');
    });
  }
  
  // Ensure the function is called to bind the event listener
  addingEventListener();