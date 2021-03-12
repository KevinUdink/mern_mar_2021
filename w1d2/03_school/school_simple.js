// To visualize how this code works, copy and paste this in to the following website:
//    http://www.pythontutor.com/visualize.html#mode=edit
// Be sure to select Javascript as the language!

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  print() {
    console.log(`\nMy name is: ${this.name} and I am ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, gpa = 4.0) {
    super(firstName, lastName, age);
    this.gpa = gpa;
  }

  // this method uses the "this" keyword to refer to the object that is invoking the function
  getSchoolLevel() {
    if (this.age < 11) {
      console.log("\n" + this.name + " is in elementary school.");
    }
    else if (this.age < 15) {
      console.log("\n" + this.name + " is in middle school.");
    }
    else {
      console.log("\n" + this.name + " is in high school.");
    }
  };
}

class Teacher extends Person {
  constructor(firstName, lastName, age, subject = "all") {
    super(firstName, lastName, age);
    this.subject = subject;
  }
}


//-------------------------------------------------------------------------------------------
// Let's create some instances and try this out!
//-------------------------------------------------------------------------------------------
const student1 = new Student("billy", "bob", 14, 3.5);
const teacher1 = new Teacher("Mrs", "Thompson", 29, "Math");

Student.getSchoolLevel();
