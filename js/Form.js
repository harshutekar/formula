class Form {
  constructor() {
  this.input=createInput("").attribute("placesholder","AWARA OFFICIAL YT")
  this.playbutton=createButton("play")
  this.titleimg=createImg("assets,/title.png","game title")
  this.greeting=createElement("h2") 
  }
  setElementsposition(){
  this.titleimg.position(120,100)
  this.input.position(width/2-110,height/-80)
  this.playbuttuon.position(width/2-90,height/2-20)
  this.greeting.position(width/2-300,height/-100)
  }
  hide(){
  this.playbutton.hide()
  this.input.hide()
  this.greeting.hide()
  }
  handleMousePressed(){
  this.playbutton(()=>{
  this.input.hide()
  this.playbutton.hide()
  var message=`hello AWARA${this.input.value()}what for another player to join`
  this.greeting.html()
  }
  )
  }
  display(){
    this.setElementsposition()
    this.handleMousePressed()
  }
 }
