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

// Trim a fixed amount of leading whitespace on code blocks
document.querySelectorAll('pre code, pre samp, pre:not(:has(code, samp))').forEach(el => {
  const lines = el.innerHTML.split('\n');
  const isBlank = s => /^[ \t]*$/.test(s); // space(s) or tab(s) only
  const indentWidth = s => s.match(/^[ \t]*/)[0].replace(/\t/g, '  ').length; // tabs are 2 spaces
  const minIndent = indentWidth(lines.filter(s => !isBlank(s))[0]); // extract min from first non-blank line
  lines.forEach((s, index) => lines[index] = isBlank(s) ? s : s.replace(/\t/g, '  ').slice(minIndent))
  el.innerHTML = lines.join('\n');
});