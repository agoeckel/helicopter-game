time = 0
game = 0

function Rocket() {
  this.speed = Math.floor((Math.random() * 10));
  this.area = Math.floor((Math.random() * 800) + 1);
}

rounds = Math.floor((Math.random() * 10) + 5);

function createRockets(rounds){
  rockets = []
  for(var i=0; rounds > i; i++){
    rocket = new Rocket();
    rockets.push(rocket);
  }
  return rockets
}

function animation(id){
  rocketspeed = 700 * rockets[id].speed

  $("#"+id).animate({"right": "+=2000px"}, rocketspeed );
  var percent = 0;
  var pointer = setInterval(function() {
    if (percent >= 100) {
      clearInterval(pointer);
      rocket = document.getElementById(id)
      // console.log(rocket)
      return;
    }
    $("#Status").text(percent);
      // console.log(percent)
      percent ++
      var element = document.getElementById(id);
      var style = window.getComputedStyle(element);
      var right = style.getPropertyValue("right")
      var marginTop = style.getPropertyValue("margin-top")
      var missile = parseInt(marginTop, 10)
      var top = missile + 50
      var bottom = missile - 50

    if((bottom < time) && (time < top) === true){
      if((parseInt(right, 10) >= 1390) && (parseInt(right, 10) <= 1440)){
        $("#box").html("<img src=explosion.gif-c200>")
        clearInterval(pointer);
        percent = 100
      }
    }
  }, 30);
}



function timeBackward (){
  if (click === false || time === 0) { return; }
  time -= 3
  setTimeout(timeBackward, 1);
  $('#box').css('margin-top', time);
  $('#box').css('-webkit-transform', 'rotate(-7deg)')
}

function timeForward (){
  if (unClick === false || time >= window.innerHeight - 96 ) { return; }
    time += 3
  if(time === (window.innerHeight - 96)){
    $("#box").html("<img src=explosion.gif-c200>")
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

  createRockets(rounds)

  window.setInterval(function(){
    $(".rocket").remove()
    createRockets(rounds);
    for (var i=0; i < rockets.length; i++){

      $(".missile").after("<div class=rocket " + 'id='+ i + " style=margin-top:"+ i * 100 + "px;right:" +  -100 + "px;><img src=missile.gif height=30></div>");
      animation(i);
    }
  }, 5000);

  for (var i=0; i < rockets.length; i++){
    $(".missile").after("<div class=rocket " + 'id='+ i + " style=margin-top:"+ i * 100 + "px;right:" +  -100 + "px;><img src=missile.gif height=30></div>");
    animation(i);
  }

  marginTop = 0

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
