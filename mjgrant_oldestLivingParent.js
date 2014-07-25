/* Sample data set */


var people = [
  {
    name: 'Hank',
    age: 29,
    parent: 'Don'
  },
  {
    name: 'Deborah',
    age: 30,
    parent: 'Don'
  },
  {
    name: 'Danny',
    age: 24,
    parent: 'Don'
  },
  {
    name: 'Don',
    age: 64,
    parent: 'Haskell'
  },
  {
    name: 'Kathy',
    age: 75,
    parent: 'Lenora'
  },
  {
    name: 'Haskell',
    parent: 'Finus'
  },
  {
    name: 'Finus'
  },
  {
    name: 'Donna',
    age: 43,
    parent: 'Wilfred'
  },
  {
    name: 'Wilfred',
    age:90,
    parent: 'George'
  },
  {
    name: 'George',
    age:104,
    parent: 'The Doctor'
  },
  {
    name: 'The Doctor',
    age:909,
    parent: 'Gadget',
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
  var oldestParentName = "";
  var oldestAge = 0;
  people.forEach(function(person) {
    if (parents[person.name] && person.age > oldestAge) { //if this person is found in the parents set AND the age is higher than the oldest age
      oldestAge = person.age;
      oldestParentName = person.name;
    }
  });

  //Step 3: Return the name of the person with the highest age
  console.log("Oldest living parent: ", oldestParentName + " who is " + oldestAge);
  return oldestParentName;
}

oldestLivingParent(people);

