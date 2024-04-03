//Step 1: define an interface for todoItems//
interface Todo {
    id: number
    title: string
    status: string
    completedOn?: Date
}

//Step 2: hard-code value with enums for status//

enum ItemStatus {
    InProgress = "in-progress",
    ToDo = "todo",
    Done = "done"
}

//Step 3: Apply types for addToDoItem and getNextId//
//type 1 = itemstatus//
//type 2 = todoitems//

//Step 4: Use a generic type to define the parameter type getNextId//


const todoItems: Todo[] = [
    { id: 1, title: "Learn HTML", status: ItemStatus.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: ItemStatus.InProgress },
    { id: 3, title: "Write the best app in the world", status: ItemStatus.ToDo },
]

function addTodoItem(todo: string): Todo {
    const id = getNextId(todoItems)

    const newTodo = {
        id: 4,
        title: todo,
        status: ItemStatus.ToDo,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId<T extends {id: number }>(items: T[]): number {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))
