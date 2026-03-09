import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const todos = [];

const showMenu = () => {
    console.log("\n1: Add a Task");
    console.log("2: View Task");
    console.log("3: Exit");
    rl.question("Choose an option: ", handleInput);
};

const handleInput = (Option) => {

    if (Option === "1") {
        rl.question("Enter the Task: ", (Task) => {
            todos.push(Task);
            console.log("Task added:", Task);
            showMenu();
        });

    } else if (Option === "2") {
        console.log("\nYour Todo Lists:");
        todos.forEach((Task, index) => {
            console.log(`${index + 1}. ${Task}`);
        });
        showMenu();

    } else if (Option === "3") {
        console.log("Good Byee");
        rl.close();

    } else {
        console.log("Invalid Option Please try again");
        showMenu();
    }
};

showMenu();