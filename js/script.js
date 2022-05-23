//------ MAIN ------//
const app = new Vue ({
    el: "#root",
    data: {
        todos: [
            {
                text: "Fare la spesa",
                isDone: false,
            },
            {
                text: "Fare il bucato",
                isDone: true,
            },
            {
                text: "Andare in banca",
                isDone: false,
            },
            {
                text: "Pagare le bollette",
                isDone: false,
            },
            {
                text: "Preparare la cena",
                isDone: true,
            }
        ],
        newTodo: "",
    },
    methods: {
        removeTodo (index) {
            this.todos.splice (index, 1);
        },
        checkTodo() {
            if (this.todos.todo.isDone === false) {
                this.todos.todo.isDone = true;
            }
        },
        addTodo () {
            if (this.newTodo !== " ") {
                todo = {text: this.newTodo , isDone: false} 
                this.todos.push(todo);
            }
        }
    },
});