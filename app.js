'use strict';

var username = prompt('Hi! What\'s your name?');
console.log('username:', username);

alert('Alright ' + username + ', I am going to ask you a few questions about Melanie. Let\'s see how you do.');

var university = prompt('Did Melanie go to a university?');
console.log('university:', university);

// Here is where I allow upper and lower case answers to be accepted
if (university.toUpperCase() === 'Y' || university.toUpperCase() === 'YES') {
  alert('That\'s correct!');
} else if (university.toUpperCase() === 'N' || university.toUpperCase() === 'NO') {
  alert('Incorrect, she graduated from the University of Washington.');
}

var degree = prompt('Did Melanie get a degree in science? ');
console.log('science degree:', degree);

if (degree.toUpperCase() === 'Y' || degree.toUpperCase() === 'YES') {
  alert('Nope! She has a degree in art history.');
} else if (degree.toUpperCase() === 'N' || degree.toUpperCase() === 'NO') {
  alert('Correct! She has a degree in art history.');
}

var bike = prompt('Does Melanie enjoy riding a bike?');
console.log('bike rider:', bike);

if (bike.toUpperCase() === 'Y' || bike.toUpperCase() === 'YES') {
  alert('No doubt, Melanie loves her bike.');
} else if (bike.toUpperCase() === 'N' || bike.toUpperCase() === 'NO'){
  alert('Incorrect! Just take a look at her computer sometime.');
}

var seattle = prompt('Is Melanie native to Seattle?');
console.log('seattlite:', seattle);

if (seattle.toUpperCase() === 'Y' || seattle.toUpperCase() === 'YES') {
  alert('Yep, but that doesn\'t make her immune to rainy days.');
} else if (seattle.toUpperCase() === 'N' || seattle.toUpperCase() === 'NO') {
  alert('Believe it or not, she\'s a true local, but that doesn\'t make her immune to rainy days.');
}

var pets = prompt('Last question, does Melanie have any pets?');
console.log('pets:', pets);

//these if/else if scenarios got very redundant!!
if (pets.toUpperCase() === 'Y' || pets.toUpperCase() === 'YES') {
  alert('You got it! She has a 10 pound dog named Beardsley.');
} else if (pets.toUpperCase() === 'N' || pets.toUpperCase() === 'NO') {
  alert('Not so! She has a 10 pound dog named Beardsley.');
}
