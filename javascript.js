$(document).ready(onReady);
let counter = 1;
function onReady() {
    $('#generete-btn').on('click', createElement);
    $('div').children().children().on('click', makeitYellow);
    $('div').children().children().children().on('click', deleteDiv)
}

function createElement(){
    $('Main').append(`<div>
    <p> ${counter++} </p>
    <button>Yellow</button>
    <button>Delete</button>
    </div>`);
}

function makeitYellow() {
    $('div').css('background-color', 'yellow')
}

function deleteDiv() {
    $(this).parent().remove()
}