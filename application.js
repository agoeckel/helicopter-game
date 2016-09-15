time = 0
game = 0

function Missile() {
  this.speed = Math.floor((Math.random() * 10) + 3);
  this.area = Math.floor((Math.random() * 800) + 1);
}

rounds = Math.floor((Math.random() * 10));

missiles = []
for(var i=0; rounds > i; i++){
  missile = new Missile();
  missiles.push(missile);
}

console.log(missiles)

function missileTimer(){
  if (game === 2000) { return; }
    game += 2
    console.log(game)
  if(game === 1430 && time === 0){
    alert("crashed")
  }

  setTimeout(missileTimer, 10);
  $(".missile").css("right", game);
}

function animation(id){
  $("#"+id).animate({"right": "+=2500px"}, 700 * missiles[id].speed)
}

//   $("."+i).css({"right": game, "margin-top": missile.area});

// for(var i=0; missiles.length > i; i++){


//     $(".missile").after("<div class='missile'  + i + 'style='right:" + game + "px;margin-top:" + missiles[i].place + "px'></div>");
//     $("#missile").after("<div class='missile " + i +"'style='right:" +  game + "px;margin-top:" + missiles[i].place + "px'></div>");
//     $("."+i).css({"right": game, "margin-top": missile.place});
//   }
// });



function timeBackward (){
  if (click === false || time === 0) { return; }
  time -= 3
  setTimeout(timeBackward, 1);
  $('#box').css('margin-top', time);
  $('#box').css('-webkit-transform', 'rotate(-7deg)')
}

function timeForward (){
  if (unClick === false || time >= window.innerHeight - 100 ) { return; }
  time += 3
  if(time === (window.innerHeight - 98)){
    alert("crashed")
  }
  setTimeout(timeForward, 1);
  $('#box').css('margin-top', time);
  if (time >= window.innerHeight - 100 ){
    $('#box').css('-webkit-transform', 'rotate(0deg)');
  } else {
    $('#box').css('-webkit-transform', 'rotate(7deg)');
  };
};

$(document).ready(function(){
  missileTimer();

  for (var i=0; i < missiles.length; i++){
    $(".missile").after("<div class=rocket " + 'id='+ i + " style=margin-top:"+ i * 100 + "px;right:" +  -100 + "px;></div>");
  }

  for (var i=0; i < missiles.length; i++){
    animation(i);
  }

  marginTop = 0



// add loop for missiles to check if they have reached max margin, if so, start back to zero and start animation method
// for (var i=0; i < missiles.length; i++){
//   if()
// }
//  if()

  while((window.innerHeight - 100) > marginTop){
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
    element = document.getElementById("box");
    style = window.getComputedStyle(element);
    marginTop = style.getPropertyValue("margin-top")
  }
});
