const btnCreateTask = document.getElementById('register-task')
const drawer = document.getElementById('drawer')
const saveTask = document.getElementById('save-task')
const backdrop = document.getElementById('backdrop')
const btnCloseDrawer = document.getElementById('ghost-button-close')
const tasks = []


console.log(drawer.classList)
console.log(backdrop.classList)

btnCreateTask.addEventListener('click', ()=>{
    drawer.classList.remove('closed')
    backdrop.classList.add('show')
    drawer.classList.add('open')
    console.log(drawer.classList)
    console.log(backdrop.classList)

})

btnCloseDrawer.addEventListener('click', ()=>{
    drawer.classList.remove('open')
    backdrop.classList.remove('show')
    drawer.classList.add('closed')
console.log(backdrop.classList)
console.log(drawer.classList)
})


// saveTask.addEventListener('click', ()=>{
//     const 
// })