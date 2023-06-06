document.querySelectorAll('.under-construction').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    alert('This content is under construction.');
  });
});
