function strand() {
  switch (Math.floor(Math.random() * 25 + 1)) { // Generating num between 1 and 25
    default:
      txt = 'Est. 2017-11-09'; // Default text
      break;
    case 1:
      txt = 'Subscribe to Pewdiepie' // Type 1
      break;
    case 2:
      txt = 'Pytec 2: Electric Boogaloo' // Type 2
      break;
    case 3:
      txt = '<s>PyTex</s> Pyrex' // Type 3
      break; // Add more witty banter cases if you'd like
  }
  document.getElementById('stc').innerHTML = txt; // Sending to index.html
}
