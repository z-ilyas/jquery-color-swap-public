$(document).ready(onReady);
let counter = 1;
function onReady() {
    $('#generete-btn').on('click', createElement);
}

function createElement(){
    $('Main').append(`<div>
    <p> ${counter++}</p>
    </div>`);
}