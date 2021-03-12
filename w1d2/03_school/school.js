//-------------------------------------------------------------------------------------------
// this is an "abstract" class - we do NOT intend to EVER make an instance
//    of this class!
// the purpose of an abstract class is to group common attributes and methods
//    in to a parent / super class to simplify and reduce code (DRY)
//-------------------------------------------------------------------------------------------
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  print() {
    console.log(`\nMy name is: ${this.name} and I am ${this.age} years old.`);
  }
}


//-------------------------------------------------------------------------------------------
// What is unique about a student?
//    unique pieces are placed in a child class
//-------------------------------------------------------------------------------------------
// setting a default value for the parameter 'gpa'
//    the default for gpa can be overridden when the object is instantiated / constructed
//        if you do not pass an argument for the 'gpa' it will default to '4.0'
//        if you pass in a value (argument) for 'gpa' it will use what is passed in
//-------------------------------------------------------------------------------------------
class Student extends Person {
  constructor(name, age, gpa = 4.0) {

  }

  // this method uses the "this" keyword to refer to the object that is invoking the function
  getSchoolLevel = function () {
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

//-------------------------------------------------------------------------------------------
// What is unique to a teacher?  
//-------------------------------------------------------------------------------------------
class Teacher extends Person {
  constructor(name, age, subject = "all") {
    super(name, age);
  }


}


//-------------------------------------------------------------------------------------------
// Let's create some instances and try this out!
//-------------------------------------------------------------------------------------------

