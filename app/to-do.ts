class Task {
  done: boolean;
  description: string;
  priority: string;

  constructor(descriptionParameter: string, priorityParameter: string){
    this.done = false;
    this.description = descriptionParameter;
    this.priority = priorityParameter;
  }
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
console.log(tasks);

// A description property, containing a brief string description of the Task.
// A priority property, containing string information on how urgent the Task is, like "High", "Low", or "Medium".
// a done property containing a boolean denoting whether this Task is complete.

// we create a variable named tasks and we set its data type to Task[]. The [] part refers to an array. 
// The Task part denotes the specific type of data the array will contain. Therefore, the data type Task[] 
// refers to an array containing Task objects.
