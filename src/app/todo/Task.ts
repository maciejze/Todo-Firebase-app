export class Task {
  name: string;
  description: string;
  done: boolean;
  dueDate: any;

  constructor(name, done, description, dueDate) {
    this.name = name;
    this.done = done;
    this.description = description;
    this.dueDate = dueDate;
  }
}
