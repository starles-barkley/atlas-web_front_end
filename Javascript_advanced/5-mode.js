function changeMode(size, weight, transform, background, color) {
  return function() {
      document.body.style.fontSize = size + 'px';
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
  };
}

function main() {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Welcome Holberton!';
  document.body.appendChild(paragraph);

  const buttons = [
      { text: 'Spooky', mode: spooky },
      { text: 'Dark mode', mode: darkMode },
      { text: 'Scream mode', mode: screamMode }
  ];

  buttons.forEach(buttonData => {
      const button = document.createElement('button');
      button.textContent = buttonData.text;
      button.addEventListener('click', buttonData.mode);
      document.body.appendChild(button);
  });
}

main();