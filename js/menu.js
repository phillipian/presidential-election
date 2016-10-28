$(function() {
  // $('nav ul li a').on('click', function(e) {
  //   e.preventDefault();
  //   var selected = $(this).attr('href');
  //   var $links = $(this).parent().parent().find('a');
  //   $($links).removeClass('active');
  //   $(this).addClass('active');
  //   var $charts = $(this).parent().parent().parent().parent().find('.panes div');
  //   $charts.removeClass('active');
  //   var $theChart = $(this).parent().parent().parent().parent().find('.panes '+selected);
  //   $theChart.addClass('active');
  // });

  $('.question.popular-vote nav ul li a').on('click', function(e) {
    e.preventDefault();
    var selected = $(this).attr('href');
    var $links = $(this).parent().parent().find('a');
    $($links).removeClass('active');
    $(this).addClass('active');

    var clinton = 0;
    var trump = 0;
    var stein = 0;
    var johnson = 0;

    $('.bar').removeClass().addClass('bar');

    if (selected === "#students-faculty") {
      clinton = 76;
      trump = 13;
      stein = 6;
      johnson = 4;
      $('.bar').addClass('student-faculty-popular');
    }
    else if (selected === "#students") {
      clinton = 73;
      trump = 15;
      stein = 5;
      johnson = 7;
      $('.bar').addClass('students-popular');
    }
    else if (selected === "#faculty") {
      clinton = 94;
      trump = 4;
      stein = 0;
      johnson = 2;
      $('.bar').addClass('faculty-popular');
    }

    $('.candidate.clinton .text h1').text(clinton+'%');
    $('.candidate.trump .text h1').text(trump+'%');
    $('.other-candidates .stein h1').text(stein+'%');
    $('.other-candidates .johnson h1').text(johnson+'%');
  });
});
