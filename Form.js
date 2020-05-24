class Form{
constructor(){

}
display(){
    var title = createElement('h2');
title.html("AARNAV'S CAR RACING GAME");
title.position(130,10);
var input = createInput("NAME");
input.position(130,160);
var button = createButton('PLAY');
button.position(250,170);
var greeting = createElement('h3');

button.mousePressed(function(){
    input.hide();
    button.hide();
    var name = input.value();
    playerCount = playerCount+1;
    player.update(name);
player.updateCount(playerCount);
greeting.html("Hi " + name);
greeting.position(130,160);
})

}
}