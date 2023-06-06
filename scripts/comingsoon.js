document.querySelectorAll('.under-construction').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    alert('This content is under construction.');
  });
});
