//Create the DirectorInterface interface with the 3 expected methods
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

//Create the TeacherInterface interface with the 3 expected methods
export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

//Create a class Director that will implement DirectorInterface
export class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

//Create a class Teacher that will implement TeacherInterface
export class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }

  getCoffeeBreak() {
    return 'Cannot have a break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }
}

//Create a function createEmployee with the following requirements
export function createEmployee(salary: (number | string)): (Director | Teacher) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

//Creating functions specific to employees
export function isDirector(employee: (Director | Teacher)) {
  return employee instanceof Director;
}

export function executeWork(employee: (Director | Teacher)) {
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks();
  }
  return (employee as Teacher).workTeacherTasks();
}

//Write a String literal type named Subjects allowing a variable to have
//the value Math or History only.
export type Subjects = ('Math' | 'History');

//Write a function named teachClass
export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  if (todayClass === 'History') {
    return 'Teaching History';
  }
}
