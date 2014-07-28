var oldestParentName = "";
var oldestAge = 0;

/* Sample data set */
var people = [
  {
    name: 'Bran Stark',
    age: 9,
    parent: 'Eddard Stark'
  },
  {
    name: 'Jon Snow',
    age: 19,
    parent: 'Rhaegar Taergaryen'
  },
  {
    name: 'Robb Stark',
    age: 16,
    parent: 'Eddard Stark'
  },
  {
    name: 'Rickon Stark',
    age: 4,
    parent: 'Eddard Stark'
  },
  {
    name: 'Eddard Stark',
    age: 42,
    parent: 'Rickard Stark'
  },
  {
    name: 'Jaime Lannister',
    age:32,
    parent:'Tywin Lannister'
  },
  {
    name:'Joffrey Baratheon',
    age:13,
    parent:'Jaime Lannister'
  },
  {
    name: 'Tywin Lannister',
    age:55,
    parent: 'Tytos Lannister',
  },
  {
    name: 'Tytos Lannister',
  },
  {
    name: 'Rhaegar Targaryen',
    parent: 'Aerys the Mad King'
  },
  {
    name: 'Aerys the Mad King'
  },
  {
    name: 'Rickard Stark',
    parent: 'Bran the Builder'
  },
  {
    name: 'Bran the Builder'
  },
  {
    name:'Gendry',
    age:16,
    parent:'Robert Baratheon'
  },
  {
    name:'Robert Baratheon',
    age:41
  },
];


function oldestLivingParent(people) {
  //Step 1: Iterate through the people list and save a list of parent names as keys in the parents object
  var parents = {};
  people.forEach(function(person) {
    if (person.parent) {
      parents[person.parent] = true;
    }
  });

  //Step 2: Iterate through people again, this time grabbing only the ones who are parents and comparing their age to the last age saved
  people.forEach(function(person) {
    if (parents[person.name] && person.age > oldestAge) { //if this person is found in the parents set AND the age is higher than the oldest age
      oldestAge = person.age;
      oldestParentName = person.name;
    }
  });

  //Step 3: Return the name of the person with the highest age
  return oldestParentName;
}

oldestLivingParent(people);

$(document).ready(function () {
  $('body').append("Oldest living parent: ", oldestParentName + " who is " + oldestAge);
});