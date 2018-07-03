export class Task {
  name: string;
  description: string;
  done: boolean;

  constructor(name, done, description) {
    this.name = name;
    this.done = done;
    this.description = description
  }
}
