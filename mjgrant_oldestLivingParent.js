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
  }
];


function oldestLivingParent(people) {
  var livingParents = {};
  var oldestLivingParentObj = {};

  //Step 1: Iterate through the people list, identifying parents and saving them to a new array if they also have an age
/*  for (var i = 0; i < people.length; i ++) {
    if (people[i].parent) {
      var parentName = people[i].parent;
      //check parentName against every name already in the people array until that parent person is found
      for (var j = 0; j < people.length; j++) {
        if (parentName == people[j].name) {
          //when that parent is found...
          if (people[j].age) {  //check if they have an age...
            livingParents.push(people[j]); //person is a parent and has an age, push them to the livingParents array
          }
        }
      }
    }
  } */

  //Step 1: for each person in people, if that person's parent isn't already in livingParents object 
  //then add that person's parent as the key and that person's parent's age as the value
  people.forEach(function(person) {
    if (person.parent) { //if the person has a parent
      for (i = 0; i < people.length; i ++) { //find that parent in the people array
        if (person.parent == people[i].name && people[i].age) { //if the parent exists and has an age
          if (!livingParents[person.parent]) { //and doesn't already exist in livingParents object
            //add the parent to the livingParents set if not already there, with age as the value
            livingParents[people[i].name] = people[i].age;
            //console.log(Object.keys(livingParents)); //debug: display all the keys in the object
          }
        }
      }
    }
  });

  //Step 2: Turn livingParents into array
  var livingParentsArray = [];
  for (var person in livingParents) {
      livingParentsArray.push(person);
    }
    
  //Step 3: Iterate through it comparing age and saving
  //the person object with the highest age as it is found.
  oldestLivingParentObj = livingParentsArray[0];
  for (var j = 0; j < livingParentsArray.length; j++) {
      if (livingParentsArray[j].age > oldestLivingParentObj.age) {
        oldestLivingParentObj = livingParentsArray[j]; //if a livingParent is found to be older than the saved parent, save that one in its place
      }
  }
  console.log("Oldest living parent: ", oldestLivingParentObj.name);
  return oldestLivingParentObj.name;
}

oldestLivingParent(people);

