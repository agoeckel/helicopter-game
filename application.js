function timeBackward (){
      if (click === false || time === 0) { return; }
      time -= 3
      setTimeout(timeBackward, 1);
    $('#box').css('margin-top', time);
    $('#box').css('-webkit-transform', 'rotate(-7deg)')
   }

function timeForward (){
  if (unClick === false || time >= 700) { return; }
    time += 3
    setTimeout(timeForward, 1);
    $('#box').css('margin-top', time);
      if (time >= 700){
        $('#box').css('-webkit-transform', 'rotate(0deg)');
      } else {
        $('#box').css('-webkit-transform', 'rotate(7deg)');
      };
   };

$(document).ready(function(){
  time = 0

  $(window).mousedown(function(e){
    e.preventDefault();
    unClick = false;
    click = true;

    if(click === true){
        timeBackward();
      };
  });

    $(window).mouseup(function(e){
    e.preventDefault();
    click = false;
    unClick = true;

    if(unClick === true){
      timeForward();
    };
  });
});
