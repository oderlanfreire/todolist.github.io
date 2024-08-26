const btnCreateTask = document.getElementById('register-task')
const drawer = document.getElementById('drawer')
const saveTask = document.getElementById('save-task')
const backdrop = document.getElementById('backdrop')
const btnCloseDrawer = document.getElementById('ghost-button-close')
let taskIndex = null


document.addEventListener('DOMContentLoaded', ()=>{
    carregarTarefas()
})


function carregarTarefas(){
    const itensContainer = document.getElementById('content-section')
    itensContainer.innerHTML = ''
    const itens = JSON.parse(localStorage.getItem('itens')) || []
    itens.forEach((item, index) =>{
        const divItem  = document.createElement('div')
        divItem.classList.add("item")


        const check = document.createElement('input')
        check.type = 'checkbox'
        check.checked = item.checked
        check.classList.add('task-check')
        check.onchange = ()=>{
            atualizarTask(index, 'checked', check.checked)
            riscarTask(check, label, description)
        }

        const textContainer = document.createElement('div')
        textContainer.classList.add('text-container')

        const label = document.createElement('span')
        label.innerText = item.label
        label.classList.add('task-label')
        label.style.textDecoration = item.checked ? "line-throught" : "none"

        const description = document.createElement('span')
        description.innerText = item.description
        description.classList.add('task-description')
        description.style.textDecoration = item.checked ? "line-through" : "none";


        const btnContainer = document.createElement('div')
        btnContainer.classList.add('btn-container')

        const editBtn = document.createElement('button')
        editBtn.innerHTML = '&#9998;'
        editBtn.classList.add('edit-btn')
        editBtn.onclick = ()=>
            openEditDrawer(index, label, description)

        const deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = '&#128465;'
        deleteBtn.classList.add('delete-btn')
        deleteBtn.onclick = ()=>
            deleteItem(index)
        


        textContainer.appendChild(label)
        textContainer.appendChild(description)
        btnContainer.appendChild(editBtn)
        btnContainer.appendChild(deleteBtn)

        divItem.appendChild(check)
        divItem.appendChild(textContainer)
        divItem.appendChild(btnContainer)
    

        itensContainer.appendChild(divItem)
        const hr = document.createElement('hr')
        hr.classList.add('hr-task')
        itensContainer.appendChild(hr)

    })
}



//funções dos botões
function openDrawer(){
    drawer.classList.remove('closed')
    backdrop.classList.add('show')
    drawer.classList.add('open')
    console.log(drawer.classList)
    console.log(backdrop.classList)
}

function openEditDrawer(index, label, description){
    taskIndex = index
    document.getElementById("task-name").value = label.innerText
    document.getElementById("task-description").value = description.innerText
    document.getElementById("task-name-displayed").value = label.innerText
    document.getElementById("task-name-displayed").style.fontSize = '1.5rem'
    drawer.classList.remove('closed')
    backdrop.classList.add('show')
    drawer.classList.add('open')
    console.log(drawer.classList)
    console.log(backdrop.classList)
}


function closeDrawer(){
    drawer.classList.remove('open')
    backdrop.classList.remove('show')
    drawer.classList.add('closed')
}

function createTask(){
    
    let label = document.getElementById('task-name').value.trim()
    let description = document.getElementById('task-description').value.trim()

    console.log(label)

    if(label === ''){
        alert('Erro: Nome da tarefa em branco ou nula.')
        return
    }

    const itens = JSON.parse(localStorage.getItem("itens")) || []

    
    if(taskIndex === null){
        if(itens.some((item) => item.label === label )){
            alert('Tarefa já cadastrada!')
            return
        }
        itens.push({checked: false, label, description})
    }else{
        itens[taskIndex].label = label
        itens[taskIndex].description = description
        taskIndex = null
    }

    localStorage.setItem("itens", JSON.stringify(itens))
    closeDrawer()
    drawer.classList.add('closed')
    document.getElementById('task-name').value = ''
    document.getElementById('task-description').value = ''
    carregarTarefas()
        
}


function deleteItem(index){
    let itens = JSON.parse(localStorage.getItem("itens")) || []
    itens.splice(index, 1)
    localStorage.setItem('itens', JSON.stringify(itens))
    carregarTarefas()
    
}

