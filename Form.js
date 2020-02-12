class Form {
constructor() {
this.input=createInput("Name")
this.button=createButton('Play')
this.gretting=createElement('h2')
}
hide(){
this.greeting.hide();
this.button.hide();
this.input.hide();
}
  display(){
    var title = createElement('h2')
    title.html("MultiCar");
    title.position(130, 0);
    
   
    
    this.input.position(130, 160);
    
    this.button.position(250, 200);

    this.button.mousePressed(function(){
      this.input.hide();
      this.button.hide();

      var name = input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
     
      this.greeting.html("Hello " + name )
     this.greeting.position(130, 160)
    });

  }
}
