const btnCreateTask = document.getElementById('register-task')
const drawer = document.getElementById('drawer')
const saveTask = document.getElementById('save-task')
const backdrop = document.getElementById('backdrop')
const btnCloseDrawer = document.getElementById('ghost-button-close')
const taskArea = document.getElementById('task-area')
const tasks = []



//funções de verificação
function isNullTask(task){
    if(task != '' && task != null){
        return true
    }else{
        return false
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

btnCreateTask.addEventListener('mouseleave', ()=>{
    btnCreateTask.src = `../components/img/botão.svg`
})

btnCloseDrawer.addEventListener('click', ()=>{
    drawer.classList.remove('open')
    backdrop.classList.remove('show')
    drawer.classList.add('closed')
console.log(backdrop.classList)
console.log(drawer.classList)
})

saveTask.addEventListener('click', ()=>{
    const name = document.getElementById('task-name')
    const desc = document.getElementById('task-description')

    if(isNullTask(name.value) === false){
        alert('Erro: Nome da tarefa em branco ou nula.')
    }
    // }else{
    //     // taskArea.
    // }
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

