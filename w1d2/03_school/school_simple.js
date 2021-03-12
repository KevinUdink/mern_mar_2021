// To visualize how this code works, copy and paste this in to the following website:
//    http://www.pythontutor.com/visualize.html#mode=edit

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  print() {
    console.log(`\nMy name is: ${this.name} and I am ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, gpa = 4.0) {
    super(name, age);
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
  constructor(name, age, subject = "all") {
    super(name, age);
    this.subject = subject;
  }
}


//-------------------------------------------------------------------------------------------
// Let's create some instances and try this out!
//-------------------------------------------------------------------------------------------
const student1 = new Student("billy", 14, 3.5);
const teacher1 = new Teacher("Mrs Thompson", 29, "Math");

Student.getSchoolLevel();
