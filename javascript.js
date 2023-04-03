$(document).ready(onReady);

function onReady() {
    $('#generete-btn').on('click', createElement);
}

function createElement(){
    $('Main').append('<div></div>');
    console.log(createElement);
}