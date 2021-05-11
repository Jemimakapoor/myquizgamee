class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide()

    background("red")

    fill("white")
    textSize(30)
    text("RESULT OF THE QUIZ",50,50)


     Contestant.getContestantInfo()

     if(allContestants !==undefined){
       fill("white")
       textSize(20)
       text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230)
       var ypos=230
      
       for(var plr in allContestants){
         var correctAnswer="2"
         if(correctAnswer===allContestants[plr].answer)
         fill("green")
        else fill("red")
        ypos+=20
        textSize(20)
        text(allContestants[plr].name+":"+allContestants[plr].answer,250,ypos)
       }
     }
    
     

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
