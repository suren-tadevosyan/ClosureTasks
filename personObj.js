function createPerson(str, num) {
  let privName = str;
  let privAge = num;

  return {
    getName() {
      return privName;
    },

    getAge() {
      return privAge;
    },

    setName(newName) {
      privName = newName;
    },

    setAge(newAge) {
      privAge = newAge;
    },
  };
}

const person = createPerson("Alice", 30);
console.log(person.getName()); 
console.log(person.getAge()); 
person.setName("Bob");
person.setAge(25);
console.log(person.getName()); 
console.log(person.getAge());
