// Apply click-to-open on all articles with details element
const elements = document.querySelectorAll('article');
elements.forEach(element => {
  const details = element.querySelector('details')
  if (details) {
    element.addEventListener('click', (event) => {
      // Do not toggle open state if clicking details or its contents
      if (event.target != details && !details.contains(event.target))
        details.open = !details.open;
    });
  }
});