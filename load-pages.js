$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = 'pages/' + $(this).data('include') + '.html'
        $(this).load(file)
    })
})