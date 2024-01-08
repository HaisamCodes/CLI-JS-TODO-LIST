//CLI BASED TODI LIST 
// To exit from the todo list press Ctrl + C  
import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in your list"
        },
        {
            type: "confirm",
            name: "Addmore",
            message: "Do you want to add more Todo",
            default: false
        }
    ]);
    const { TODO, Addmore } = answers;
    console.log(answers);
    loop = Addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly enter valid input");
    }
}
if (todos.length > 0) {
    console.log("Your Todo List : ");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("No TODOS found");
}
