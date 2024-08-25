const btnCreateTask = document.getElementById('register-task')
const drawer = document.getElementById('drawer')
const saveTask = document.getElementById('save-task')
const backdrop = document.getElementById('backdrop')
const btnCloseDrawer = document.getElementById('ghost-button-close')
let taskIndex = null

// const taskArea = document.getElementById('container')
// const checkbox = document.getElementById('check')
// const tasks = []



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
        label.innerText = item.label.value
        label.classList.add('task-label')
        label.style.textDecoration = item.checked ? "line-throught" : "none"

        const description = document.createElement('span')
        description.innerText = item.description.value
        description.classList.add('task-description')
        description.style.textDecoration = item.checked ? "line-through" : "none";


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

        divItem.appendChild(check)
        divItem.appendChild(textContainer)
        divItem.appendChild(editBtn)
        divItem.appendChild(deleteBtn)

        itensContainer.appendChild(divItem)

        const hr = document.createElement('hr')
        itensContainer.appendChild(hr)

    })
}

//funções de verificação
function isNullTask(task){
    if(task != '' && task != null){
        return true
    }
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
    
    let label = document.getElementById('task-name')
    let description = document.getElementById('task-description')

    if(isNullTask(label.value) === false){
        alert('Erro: Nome da tarefa em branco ou nula.')
    }

    const itens = JSON.parse(localStorage.getItem("itens")) || []

    if(itens.some((item, index) => item.label === label )){
        alert('Tarefa já cadastrada!')
    }

    if(taskIndex === null){
        itens.push({checked: false, label, description})
    }else{
        itens[taskIndex].label = label
        itens[taskIndex].description = description
    }

    localStorage.setItem("itens", JSON.stringify(itens))
    closeDrawer()

        // let check = document.createElement('input')
        // check.id = 'check'
        // check.type = 'checkbox'
    
        // let label = document.createElement('label')
        // label.textContent = name.value
        // let description = document.createElement('span')
        // description.id='subcontent2'
        // description.innerText = desc.value
        
        // let lblContainer = document.createElement('div')
        // lblContainer.className = 'container-lbl'
        // lblContainer.appendChild(check)
        // lblContainer.appendChild(label)
        
        // let elmContainer = document.createElement('div')
        // elmContainer.className = 'container-elm'
        // elmContainer.id='container-elm'
        // elmContainer.appendChild(lblContainer)
        // elmContainer.appendChild(description)

        // tasks.push(elmContainer)
        // taskArea.classList = 'container2'
        // taskArea.innerHTML = ''
        // tasks.forEach(task =>{
        //     taskArea.appendChild(task)
        //     taskArea.appendChild(document.createElement('hr'))
        // })
        // name.value = ''
        // desc.value = ''
        drawer.classList.add('closed')
        carregarTarefas()
        
}


function deleteItem(index){
    let itens = JSON.parse(localStorage.getItem("itens")) || []
    itens.splice(index, 1)
    localStorage.setItem('itens', JSON.stringify(itens))
    carregarTarefas()
    
}
// btnCreateTask.addEventListener('click', ()=>{
//     drawer.classList.remove('closed')
//     backdrop.classList.add('show')
//     drawer.classList.add('open')
//     console.log(drawer.classList)
//     console.log(backdrop.classList)

// })

btnCreateTask.addEventListener('mouseenter', ()=>{
    btnCreateTask.src = `../components/img/crate-task-hover.svg`
})

btnCloseDrawer.addEventListener('mouseout', ()=>{
    btnCreateTask.src = `../components/img/botão.svg`
})

btnCreateTask.addEventListener('mouseleave', ()=>{
    btnCreateTask.src = `../components/img/botão.svg`
})

btnCloseDrawer.addEventListener('click', ()=>{
    drawer.classList.remove('open')
    backdrop.classList.remove('show')
    drawer.classList.add('closed')
})
