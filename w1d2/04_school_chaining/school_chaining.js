//-------------------------------------------------------------------------------------------
// each method needs to return "this" to be able to simplify and improve performance
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
class Student extends Person {
  constructor(name, age, gpa = 4.0) {
    super(name, age);
    this.gpa = gpa;
    this.numDueAssignments = 0;
  }

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

  turnInAssignment() {
    this.numDueAssignments -= 1;
    console.log(`\n${this.name} just turned in an assignment`);
    console.log(`\t${this.name} now has ${this.numDueAssignments} assignments due`)
  }
}

//-------------------------------------------------------------------------------------------
class Teacher extends Person {
  constructor(name, age, subject = "all") {
    super(name, age);
    this.subject = subject;
  }

  assignHomework(student) {
    student.numDueAssignments += 1;
    console.log(`\n${this.name} just assigned homework to ${student.name}`);
    console.log(`\t${student.name} now has ${student.numDueAssignments} assignments due`)
  }

  print() {
    let printSubject = "";
    if(this.subject === "all") {
      printSubject = "all subjects";
    } else {
      printSubject = this.subject;
    }
    console.log(`\n${this.name} is a teacher and teaches ${printSubject}`)
  }
}


//-------------------------------------------------------------------------------------------
// Let's create some instances and try this out!
//-------------------------------------------------------------------------------------------
const teacher1 = new Teacher("Mrs. NiceAndFun", 28);  // using the default subject
const teacher2 = new Teacher("Mr. Mathman", 46, "Math");

teacher1.print();
teacher2.print();

const student1 = new Student("Billy", 8);
const student2 = new Student("Sally", 16);

student1.getSchoolLevel();   
student1.print();
student2.getSchoolLevel();   
student2.print();

teacher1.assignHomework(student1);
teacher2.assignHomework(student2);
teacher2.assignHomework(student2);
teacher2.assignHomework(student2);

student1.turnInAssignment();
student2.turnInAssignment();

console.log("\nWhat is in the object?")
console.log(student1);
console.log(teacher1);
