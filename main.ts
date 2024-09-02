#! /usr/bin/env node

    import inquirer from "inquirer";
    console.log("\n---- Welcome To our ToDo List Application ----\n");

    let todos:string[] = [];
    let condition = true;

    while (condition) {   
    let ans = await inquirer.prompt(
        [
            {
                name: "select",
                type: "list",
                message: "Select an operation:",
                choices: ["Add","Update","View","Delete","Exit"]
            }
        ]
    );
    if (ans.select === "Add") {
        let addTodo = await inquirer.prompt(
            [
                {
                    name: "todo",
                    type: "input",
                    message: "Add Items In The List:",
                    validate: function (input) {
                        if(input.trim() == ""){
                            return "Please Enter A Non-Empty Item."
                        }
                        return true;
                    }
                }
            ]
        );
        if(addTodo.todo.trim() !== ""){
        todos.push(addTodo.todo);
        console.log("\t---- LIST ITEMS ---- \t");
        todos.forEach(todo => console.log(`\t > ${todo}`))
        }
    }
    
    if (ans.select === "Update") {
        let updateTodo = await inquirer.prompt(
            [
                {
                    name: "todo",
                    type: "list",
                    message: "update Items In The List:",
                    choices: todos.map(item => item)
                }
            ]
        );
        let addTodo = await inquirer.prompt(
            [
                {
                    name: "todo",
                    type: "input",
                    message: "Add Items In The List:"
                }
            ]
        );
        let newTodo = todos.filter(val => val !== updateTodo.todo);
        todos = [...newTodo,addTodo.todo];
        console.log("\t---- LIST ITEMS ---- \t");
        todos.forEach(todo => console.log(`\t > ${todo}`))
        
    }
    
    if (ans.select === "View") {
        console.log("\t---- LIST ITEMS ---- \t");
        todos.forEach(todo => console.log(`\t > ${todo}`))
    }

    if (ans.select === "Delete") {
        let deleteTodo = await inquirer.prompt(
            [
                {
                    name: "todo",
                    type: "list",
                    message: "Select The Item For Delete:",
                    choices: todos.map(item => item)
                }
            ]
        );
        let newTodo = todos.filter(val => val !== deleteTodo.todo);
        todos = [...newTodo];
        console.log("\t---- LIST ITEMS ---- \t");
        todos.forEach(todo => console.log(`\t > ${todo}`))
    }
    if (ans.select === "Exit") {
        console.log("\n\tExiting Program....\t");
        condition = false;
    }
    }

    console.log("\n\t---- Thanks For Testing Our Project ----\t\n");