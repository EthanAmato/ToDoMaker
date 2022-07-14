let userTodo = document.querySelector("input.todoInput");
let submitTodo = document.querySelector("button.todoSubmit");
let todoList = document.querySelector('ul.todoList');
let newTodos = document.querySelectorAll('li button.todoItem');

submitTodo.addEventListener('click', function(event){
    let userInput = userTodo.value; //simply store user input in text box
    //Make new li child to append to UL
    let newTodo = document.createElement('li');
    let todoClickable = document.createElement('button');
    todoClickable.classList.add("todoItem");

    //Sets Delete Sequence for Buttons added by Submit button
    todoClickable.onclick = function() {
            console.log('clicked');
            let self = this;

            self.innerHTML = self.innerHTML.strike()
            
            let delayDelete = function()    {
                    self.parentElement.remove();
                }
            
            setTimeout(delayDelete, 1000);
        }

    todoClickable.innerHTML = userInput;//Set the text of the new li to button
    todoClickable.setAttribute('href', '#');
    newTodo.append(todoClickable); 
    todoList.append(newTodo); //add todo to todo list
    userTodo.value = ""; //clear user input
    newTodos = document.querySelectorAll('button todoItem')
})

