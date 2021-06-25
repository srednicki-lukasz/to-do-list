class ToDoList {
    arr = [];

    constructor(container) {
        this.container = container;
    }

    /**
     * Add item.
     * @param {string} toDo 
     * @memberof ToDoList
     */
    add(toDo) {
        this.arr.push(toDo);

        const li = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button');

        this.arr.forEach(item => {
            span.innerText = item;
            li.appendChild(span);

            button.innerText = 'DELETE';
            li.appendChild(button);

            this.container.insertBefore(li, this.container.firstChild);
        })
    }

    /**
     * Clear input.
     * @param {HTMLInputElement} input
     * @memberof ToDoList
     */
    clear(input) {
        input.value = '';
    }

    /**
     * Remove item.
     * @param {Event} e
     * @memberof ToDoList
     */
    remove(e) {
        const target = e.target;

        if (target.innerText === 'DELETE') {
            target.parentElement.remove();
        }
    }
}

const buttonAddToDo = document.querySelector('.add');
const inputToDo = document.querySelector('#to-do');
const ulToDo = document.querySelector('.to-do-list');

const toDoList = new ToDoList(ulToDo);

buttonAddToDo.addEventListener('click', () => {
    toDoList.add(inputToDo.value);
    toDoList.clear(inputToDo);
});

ulToDo.addEventListener('click', toDoList.remove);
