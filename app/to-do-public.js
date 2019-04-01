var Task = /** @class */ (function () {
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var tasks = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
tasks.push(new Task('Buy chocolate.', 'Low'));
tasks.push(new Task('Do laundry.', 'High'));
tasks[0].markDone();
for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
    var task = tasks_1[_i];
    console.log(task);
}
// make sure the names of parameters in the constructor() 
// method match the names of the properties at the top of the file exactly
// We won't have to manually assign the constructor() method's parameters to Task properties!
// We can remove lines like this.description = description; from our constructor, like this:
// If constructor() parameters share the exact same name as class properties (like description, 
// or priority in the example above), TypeScript will automatically assign them to a public property 
// of the same name and type.
// we can declare class properties the same way that we declare regular variables
// We can use this same structure to provide a default value for a class property:
// EXAMPLE:
// class Thing {
//   propertyName: type = defaultValue;
// }
// EXAMPLE: var greeting: string = "Hi TypeScript!";
// TYPESCRIPT FOR LOOP EXAMPLE:
// for(var individualThing of listOfMultipleThings) {
//   console.log(individualThing);
// };
// http://www.typescriptlang.org/docs/handbook/classes.html
