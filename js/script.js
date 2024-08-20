const btnCreateTask = document.getElementById('register-task')
const drawer = document.getElementById('drawer')
const saveTask = document.getElementById('save-task')
const backdrop = document.getElementById('backdrop')
const btnCloseDrawer = document.getElementById('ghost-button-close')
const taskArea = document.getElementById('container')
const checkbox = document.getElementById('check')
const tasks = []


//funções de verificação
function isNullTask(task){
    if(task != '' && task != null){
        return true
    }
}




//funções dos botões
btnCreateTask.addEventListener('click', ()=>{
    drawer.classList.remove('closed')
    backdrop.classList.add('show')
    drawer.classList.add('open')
    console.log(drawer.classList)
    console.log(backdrop.classList)

})

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

saveTask.addEventListener('click', ()=>{
    let name = document.getElementById('task-name')
    let desc = document.getElementById('task-description')
    
    if(isNullTask(name.value) === false){
        alert('Erro: Nome da tarefa em branco ou nula.')
    }else{
        let check = document.createElement('input')
        check.id = 'check'
        check.type = 'checkbox'

        let label = document.createElement('label')
        label.textContent = name.value

        let description = document.createElement('span')
        description.id='subcontent2'
        description.innerText = desc.value
        
        let lblContainer = document.createElement('div')
        lblContainer.className = 'container-lbl'
        lblContainer.appendChild(check)
        lblContainer.appendChild(label)
        
        let elmContainer = document.createElement('div')
        elmContainer.className = 'container-elm'
        elmContainer.id='container-elm'
        elmContainer.appendChild(lblContainer)
        elmContainer.appendChild(description)

        tasks.push(elmContainer)
        taskArea.classList = 'container2'
        taskArea.innerHTML = ''
        tasks.forEach(task =>{
            taskArea.appendChild(task)
            taskArea.appendChild(document.createElement('hr'))
        })
        name.value = ''
        desc.value = ''
        drawer.classList.add('closed')
    }

})



//funções visuais 
btnCloseDrawer.addEventListener('mouseenter', ()=>{
    btnCloseDrawer.src = `../components/img/close-btn-hover.svg`
})

btnCloseDrawer.addEventListener('mouseleave', ()=>{
    btnCloseDrawer.src = `../components/img/close-btn.svg`
})


saveTask.addEventListener('mouseenter', ()=>{
    saveTask.src = `../components/img/save-btn-hover.svg`
})

saveTask.addEventListener('mouseleave', ()=>{
    saveTask.src = `../components/img/save-btn.svg`
})