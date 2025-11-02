// task_2/js/main.ts

/** ====== Task 6: Functions for Employees ====== **/

// Teacher interface (يمكن نسخه من المهمة السابقة)
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  workTeacherTasks(): void;
}

// Director interface extends Teacher
interface Director extends Teacher {
  numberOfReports: number;
  workDirectorTasks(): void;
}

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

// createEmployee helper for testing
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

  