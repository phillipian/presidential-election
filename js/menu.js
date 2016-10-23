$(function() {
  $('nav ul li a').on('click', function(e) {
    e.preventDefault();
    var selected = $(this).attr('href');
    var $links = $(this).parent().parent().find('a');
    $($links).removeClass('active');
    $(this).addClass('active');
    var $charts = $(this).parent().parent().parent().parent().find('.charts div');
    $charts.removeClass('active');
    var $theChart = $(this).parent().parent().parent().parent().find('.charts '+selected);
    $theChart.addClass('active');
  });
});
