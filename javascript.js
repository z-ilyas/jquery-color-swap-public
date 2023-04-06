$(document).ready(onReady);
let counter = 1;
function onReady() {
    $('#generete-btn').on('click', createElement);
    $('Main').on('click', '#yellow-btn', makeitYellow);
    $('Main').on('click', '#delete-btn', deleteDiv)
}

function createElement(){
    $('Main').append(`<div>
    <p> ${counter++} </p>
    <button id="yellow-btn">Yellow</button>
    <button id="delete-btn">Delete</button>
    </div>`);
}

function makeitYellow() {
    $('div').css('background-color', 'yellow')
}

function deleteDiv() {
    $(this).parent().remove()
}