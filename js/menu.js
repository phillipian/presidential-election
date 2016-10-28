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

    if (selected === "#students-faculty") {
      var clinton = 76;
      var trump = 13;
      $('.candidate.clinton .text h1').text(`${clinton}%`);
      $('.candidate.trump .text h1').text(`${trump}%`);
      $('.bar').removeClass().addClass('bar');
      $('.bar').addClass('student-faculty-popular');
    }
    else if (selected === "#students") {
      var clinton = 95.3;
      var trump = 4.7;
      $('.candidate.clinton .text h1').text(`${clinton}%`);
      $('.candidate.trump .text h1').text(`${trump}%`);
      $('.bar').removeClass().addClass('bar');
      $('.bar').addClass('students-popular');
    }
    else if (selected === "#faculty") {
      var clinton = 95.3;
      var trump = 4.7;
      $('.candidate.clinton .text h1').text(`${clinton}%`);
      $('.candidate.trump .text h1').text(`${trump}%`);
      $('.bar').removeClass().addClass('bar');
      $('.bar').addClass('students-popular');
    }
    //
    // var $charts = $(this).parent().parent().parent().parent().find('.panes div');
    // $charts.removeClass('active');
    // var $theChart = $(this).parent().parent().parent().parent().find('.panes '+selected);
    // $theChart.addClass('active');
  });
});
