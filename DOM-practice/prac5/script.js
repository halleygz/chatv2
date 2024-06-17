// variables
const addTask = document.getElementById('add-task')
const taskContainer = document.getElementById('task-container')
const inputTask = document.getElementById('input-task')

//event listener for add btn
addTask.addEventListener('click', function(){
    let task = document.createElement('div')
    task.classList.add('task')

    let li = document.createElement('li')
    li.innerText = `${inputTask.value}`
    task.appendChild(li)

    let checkBtn = document.createElement('button')
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>` 
    checkBtn.classList.add('checkTask')
    task.appendChild(checkBtn)


    let delBtn = document.createElement('button')
    delBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>` 
    delBtn.classList.add('delTask')
    task.appendChild(delBtn)

    if(inputTask.value === ''){
        alert('please enter a task')
    } else {
        taskContainer.append(task)
    }
    inputTask.value = ''


    checkBtn.addEventListener('click', function(){
        checkBtn.parentElement.style.textDecoration = 'line-through'
    })
    delBtn.addEventListener('click', function(e){
        let target  = e.target
        target.parentElement.parentElement.remove()
    })
})