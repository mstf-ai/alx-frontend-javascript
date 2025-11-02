// task_1/js/main.ts

/** ====== Task 1 & 2: Teacher & Director ====== **/

// Task 1: Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any; // for extra properties
}

// Task 2: Director interface extends Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Example Director
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

/** ====== Task 3: printTeacher ====== **/

// Task 3: printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Task 3: function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

// Example
console.log(printTeacher("John", "Doe")); // J. Doe

/** ====== Task 4 & 5: StudentClass ====== **/

// Task 4: Interface for constructor
interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

// Task 4: Interface for class
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Task 4: Class
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example
const student = new StudentClass("Alice", "Johnson");
console.log(student.displayName()); // Alice
console.log(student.workOnHomework()); // Currently working

/** ====== Task 6: Functions for Employees ====== **/

// Reuse Teacher & Director interfaces

// Type predicate function
function isDirector(employee: Teacher | Director): employee is Director {
  return (employee as Director).numberOfReports !== undefined;
}

// executeWork function
function executeWork(employee: Teacher | Director) {
  if (isDirector(employee)) {
    employee.workDirectorTasks();
  } else {
    employee.workTeacherTasks();
  }
}

// createEmployee helper for examples
function createEmployee(salary: number): Teacher | Director {
  if (salary > 500) {
    return {
      firstName: "John",
      lastName: "Doe",
      location: "London",
      fullTimeEmployee: true,
      numberOfReports: 17,
      workDirectorTasks: () => console.log("Getting to director tasks"),
      workTeacherTasks: () => console.log("Getting to work"),
    };
  } else {
    return {
      firstName: "Jane",
      lastName: "Smith",
      location: "Paris",
      fullTimeEmployee: true,
      workTeacherTasks: () => console.log("Getting to work"),
    };
  }
}

// Test examples
executeWork(createEmployee(200));   // Getting to work
executeWork(createEmployee(1000));  // Getting to director tasks
