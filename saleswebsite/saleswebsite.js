console.log(`Reema Ahmed`)
let item1 = document.querySelector(`.link1`)
let modal = document.querySelector(`.modalWindow`)
let xclose = document.querySelector(`.modalHeadX`)
item1.addEventListener(`click`,function(){
modal.style.display =`block`
})
xclose.addEventListener(`click`, function(){
    modal.style.display =`none`
})
let menu2 = document.querySelector(`.menu2`)
let openMenu2 = document.querySelector(".openMenu2")
openMenu2.addEventListener(`click`, function(){
    this.classList.toggle(`active`)
    menu2.classList.toggle(`openClose`)
})
let menu1 = document.querySelector(`.menu`)
let openMenu1 = document.querySelector(".openMenu")
openMenu1.addEventListener(`click`, function(){
    this.classList.toggle(`active`)
    menu1.classList.toggle(`openClose`)
})
/* SESSION STORAGE IN FORMS */
function passValues(){
    let username = document.querySelector(`#user`).value
    sessionStorage.setItem(`userN`, username)
    return false
}
let input1 = document.querySelector(`.submit1`)
input1.addEventListener(`click`,passValues)
