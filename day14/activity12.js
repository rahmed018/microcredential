console.log(`Reema Ahmed`)
/* jQuery program */
$(`document`).ready(function(){
    //example1
    $(`.para2`).css(`border`,`ridge 5px green`)
/*
let p2 = document.querySelector(`.para2`)
p2.style.border = `ridge 5px green`
*/
$('.a').css({'color':'magenta', 'padding':'1em 2em','background-color':'yellow'});
$(`#pExamples`).css(`text-align`,`center` )

//example 2
$(`div > p:odd`).css(`color`, `blue`)
$(`#pExamples > p.para5`).css(`font-size`, `1.3em`)
// select next adjacent element
$(`ul + div`).css(`border`, `orange dotted 1em`)

//Example 5
let p4 = $(`.para4`)
p4.prev().css(`background-color`, `pink`)
p4.next().css(`background-color`, `gray`)
p4.parent().css(`font-family`, `Arial Black`)

//example 6
$(`.p_append`).append(`<h2>NEW MESSAGE</h2>`)
$(`.p_prepend`).prepend(`NEW LINE `)

//EXAMPLE 7
$(`<h3> NEW HEADING </h3>`).insertAfter
(`.p_append`).css(`background-color`, `lightblue`)

//example 10
$(`#btnProperties`).click(function(){
    $(`.square`).css(`background-color`, `pink`)
})
$(`#addClass`).click(function(){
    $(`.square`).addClass(`btnColor`)
})
$(`#removeClass`).click
(function(){
    $(`.square`).removeClass(`btnColor`)
})
$(`#toggleClass`).click(function(){
    $(`.square`).toggle(`btnColor`)
})
})
//example 12
function hoverCircle(){
    $(`.circle`).addClass(`btnColor`)
    $(`.circle`).html(`<p> Circle was hovered! </p>`)
}
function resizeWindow(){
    $(`.circle`).html(`<p> Window was resized! </p>`)
}
function dblClickCircle(){
    $(`.circle`).html(`<p> Double Click!</p>`)
}
$(`.circle`).hover(hoverCircle)
$(window).resize(resizeWindow)
$(`.circle`).dblclick(dblClickCircle)

/* JS code */