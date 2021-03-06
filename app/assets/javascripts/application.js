// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

function openPopup () {
    $('#modal-task').show(500, function () {
        $(this).addClass('active')
    })
}

function openGroupPopup () {
    $('#modal-group').show(500, function () {
        $(this).addClass('active')
    })
}

function closePopup () {
    $('.modal').removeClass('active')
    $('.modal').hide(500)
}

function handleCheckbox (event) {
    if (event.target.id === 'task_status') {
        var item = event.target.parentNode.parentNode.parentNode
        if (event.target.checked) {
            $(item).removeClass('alert-secondary')
            $(item).addClass('alert-success')
        } else {
            $(item).removeClass('alert-success')
            $(item).addClass('alert-secondary')
        }
    }
}
