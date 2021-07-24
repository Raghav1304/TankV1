
var gameState=1
var score=0
var lives=3
var wall1, wall2, wall3,wall4, wall5, wall6, wall7, wall8, wall9, wall10
var score=0
var score2=0
function preload(){
t1=loadAnimation("tank1.png");
t2=loadAnimation("tank2.png");
t1a=loadAnimation("flippedtank1.png")
t2a=loadAnimation("flippedtank2.png")
bg=loadImage("maze.png");
bulletImg=loadAnimation("bullet.png");
fbulletImg=loadAnimation("flipped bullet.png");

}
function setup(){
    createCanvas(displayWidth-50, displayHeight-200);
   
    tank1= createSprite(40,70,30,30);
    tank2= createSprite(1280,517,30,30);
    wall1=createSprite(650,35,displayWidth-60,20)
    wall1.visible=false

    
    wall2=createSprite(650,540,displayWidth-60,20)
    wall3=createSprite(30,350,20,500)
    wall4=createSprite(105,95,190,20)
    wall5=createSprite(100,130,20,90)
    wall6=createSprite(303,95,110,20)
    wall7=createSprite(221,160,110,20)
    wall8=createSprite(263,200,20,200)
    wall9=createSprite(106,224,180,20)
    wall10=createSprite(104,258,20,90)
    wall11=createSprite(332,290,350,20)
    wall12=createSprite(187,322,20,90)
    wall13=createSprite(183,351,200,20)
    wall14=createSprite(379,164,110,20)
    wall15=createSprite(347,164,20,150)
    wall16=createSprite(422,105,20,130)
    wall17=createSprite(182,415,200,20)
    wall18=createSprite(100,450,20,80)
    wall19=createSprite(242,480,235,20)
    wall20=createSprite(343,445,20,90)
    wall21=createSprite(260,510,20,90)
    wall22=createSprite(415,350,180,20)
    wall23=createSprite(420,430,20,130)
    wall24=createSprite(630,480,400,20)
    wall25=createSprite(500,520,20,100)
    wall26=createSprite(536,95,100,20)
    wall27=createSprite(580,75,20,80)
    wall28=createSprite(570,415,180,20)
    wall29=createSprite(665,430,20,70)
    wall30=createSprite(580,390,20,70)
    wall31=createSprite(550,225,250,20)
    wall32=createSprite(580,230,20,150)
    wall33=createSprite(620,160,260,20)
    wall34=createSprite(700,290,250,20)
    wall35=createSprite(700,350,250,20)
    wall36=createSprite(655,130,20,90)
    wall37=createSprite(740,290,20,150)
    wall38=createSprite(815,260,20,90)
    wall39=createSprite(890,220,180,20)
    wall40=createSprite(820,395,20,70)
    wall41=createSprite(770,420,90,20)
    wall42=createSprite(975,265,20,70)
    wall43=createSprite(815,95,180,20)
    wall44=createSprite(890,140,20,70)
    wall45=createSprite(890,160,180,20)
    wall46=createSprite(970,135,20,80)
    wall47=createSprite(1050,95,180,20)
    wall48=createSprite(1050,75,20,70)
    wall49=createSprite(930,290,100,20)
    wall50=createSprite(930,350,100,20)
    wall51=createSprite(890,390,20,75)
    wall52=createSprite(1060,415,300,20)
    wall53=createSprite(1010,480,260,20)
    wall54=createSprite(970,520,20,70)
    wall55=createSprite(1210,75,20,70)
    wall56=createSprite(1160,160,230,20)
    wall57=createSprite(1050,260,20,90)
    wall58=createSprite(1090,290,100,20)
    wall59=createSprite(1130,230,20,100)
    wall60=createSprite(1155,350,230,20)
    wall61=createSprite(1135,395,20,70)
    wall62=createSprite(1250,480,100,20)
    wall63=createSprite(1320,520,20,70)
    wall64=createSprite(10,70,20,70)
    wall65=createSprite(1210,260,20,80)
    wall66=createSprite(1240,220,90,20)


    tank1.addAnimation("tank1",t1);
    tank1.addAnimation("tank1a",t1a)
    tank1.scale=0.08
    tank2.addAnimation("tank2a",t2a)
    tank2.addAnimation("tank2",t2);
   

    tank2.scale=0.15
    
    bulletsGroup1=createGroup()
    bulletsGroup2=createGroup()
}
function draw(){
   if(gameState===1){ 
    background("black")

    textSize(60)
    stroke("red")
    strokeWeight(3)
    fill("white")
    textAlign(CENTER)
    text("TankV1",750,100)
    textSize(30)
    stroke("white")
    fill("yellow")
    text("RULES FOR PLAYING THE GAME ",750,210)
    text("1. Use the W,A,S,D to move Tank1",750,290)
    text("2. Press space key to shoot the bullet from Tank1",750,340)
    text("3. Use the arrow keys to move Tank2",750,390)
    text("4. Use Enter key to shoot bullet from Tank2",750,440)
    text("5. Destroy the opponent tank and win the game",750,490)
    
stroke("white")
    fill("BLUE")
    text("PRESS ENTER TO START THE GAME",750,550)

    

    if(keyDown("enter")){
      gameState = 2
    }



   }


   if(gameState===2){
     background("white")
    background(bg); 

    drawSprites();
   
  
    textSize(25)
    stroke("white")
    fill("red")
    textAlign(CENTER)
   
    text("Player1 = "+score,500,40)
    text("Player2 = "+score2,650,40)
    

   

   if(keyDown(UP_ARROW)){
     tank2.y-=5
   }
   if(keyDown(DOWN_ARROW)){
    tank2.y+=5
  }
  if(keyDown(LEFT_ARROW)){
    tank2.x-=5
    tank2.changeAnimation("tank2a",t2a)
  
    if(keyDown("enter")&&frameCount%10===0){
      bullet = createSprite(tank2.x,tank2.y,10,10)
    bullet.addAnimation("bullets",bulletImg)
    bullet.scale = 0.2
    bullet.velocityX = -10
    bulletsGroup2.add(bullet)
    bullet.debug=false
    bullet.setCollider("rectangle",0,0,40,10)
    }
  }
  if(keyDown(RIGHT_ARROW)){
    tank2.x+=5
    tank2.changeAnimation("tank2",t2)

    if(keyDown("enter")&&frameCount%10===0){
      bullet = createSprite(tank2.x,tank2.y,10,10)
    bullet.addAnimation("bullets",fbulletImg)
    bullet.scale = 0.2
    bullet.velocityX = 10
    bulletsGroup2.add(bullet)
    bullet.debug=false
    bullet.setCollider("rectangle",0,0,40,10)
    }
  }
  //if(keyDown("enter")&&frameCount%20===0){
  //bullets()

  //}


  if(keyDown("W")){
    tank1.y-=5
  }
  if(keyDown("S")){
   tank1.y+=5
 }
 if(keyDown("A")){
   tank1.x-=5
   tank1.changeAnimation("tank1a",t1a)
   if(keyDown("space")&&frameCount%10===0){
    bullet = createSprite(tank1.x,tank1.y,10,10)
  bullet.addAnimation("bullets",bulletImg)
  bullet.scale = 0.2
  bullet.velocityX = -10
  bulletsGroup1.add(bullet)
  bullet.debug=false
  bullet.setCollider("rectangle",0,0,40,10)
  }
 }
 if(keyDown("D")){
   tank1.x+=5
   tank1.changeAnimation("tank1",t1)
   if(keyDown("space")&&frameCount%10===0){
    bullet = createSprite(tank1.x,tank1.y,10,10)
  bullet.addAnimation("bullets",fbulletImg)
  bullet.scale = 0.2
  bullet.velocityX = 10
  bulletsGroup1.add(bullet)
  bullet.debug=false
  bullet.setCollider("rectangle",0,0,40,10)
  }
 }




if(bulletsGroup1.isTouching(wall1)||bulletsGroup1.isTouching(wall2)||
bulletsGroup1.isTouching(wall3)||bulletsGroup1.isTouching(wall4)||
bulletsGroup1.isTouching(wall5)||bulletsGroup1.isTouching(wall6)||
bulletsGroup1.isTouching(wall7)||bulletsGroup1.isTouching(wall8)||
bulletsGroup1.isTouching(wall9)||bulletsGroup1.isTouching(wall10)||
bulletsGroup1.isTouching(wall11)||bulletsGroup1.isTouching(wall12)||
bulletsGroup1.isTouching(wall13)||bulletsGroup1.isTouching(wall14)||
bulletsGroup1.isTouching(wall15)||bulletsGroup1.isTouching(wall16)||
bulletsGroup1.isTouching(wall17)||bulletsGroup1.isTouching(wall18)||
bulletsGroup1.isTouching(wall19)||bulletsGroup1.isTouching(wall20)||
bulletsGroup1.isTouching(wall21)||bulletsGroup1.isTouching(wall22)||
bulletsGroup1.isTouching(wall23)||bulletsGroup1.isTouching(wall24)||
bulletsGroup1.isTouching(wall25)||bulletsGroup1.isTouching(wall26)||
bulletsGroup1.isTouching(wall27)||bulletsGroup1.isTouching(wall28)||
bulletsGroup1.isTouching(wall29)||bulletsGroup1.isTouching(wall30)||
bulletsGroup1.isTouching(wall31)||bulletsGroup1.isTouching(wall32)||
bulletsGroup1.isTouching(wall33)||bulletsGroup1.isTouching(wall34)||
bulletsGroup1.isTouching(wall35)||bulletsGroup1.isTouching(wall36)||
bulletsGroup1.isTouching(wall37)||bulletsGroup1.isTouching(wall38)||
bulletsGroup1.isTouching(wall39)||bulletsGroup1.isTouching(wall40)||
bulletsGroup1.isTouching(wall41)||bulletsGroup1.isTouching(wall42)||
bulletsGroup1.isTouching(wall43)||bulletsGroup1.isTouching(wall44)||
bulletsGroup1.isTouching(wall45)||bulletsGroup1.isTouching(wall46)||
bulletsGroup1.isTouching(wall47)||bulletsGroup1.isTouching(wall48)||
bulletsGroup1.isTouching(wall49)||bulletsGroup1.isTouching(wall50)||
bulletsGroup1.isTouching(wall51)||bulletsGroup1.isTouching(wall52)||
bulletsGroup1.isTouching(wall53)||bulletsGroup1.isTouching(wall54)||
bulletsGroup1.isTouching(wall55)||bulletsGroup1.isTouching(wall56)||
bulletsGroup1.isTouching(wall57)||bulletsGroup1.isTouching(wall58)||
bulletsGroup1.isTouching(wall59)||bulletsGroup1.isTouching(wall60)||
bulletsGroup1.isTouching(wall61)||bulletsGroup1.isTouching(wall62)||
bulletsGroup1.isTouching(wall63)||bulletsGroup1.isTouching(wall64)||
bulletsGroup1.isTouching(wall65)||bulletsGroup1.isTouching(wall66))


{
bulletsGroup1[0].destroy()
}
if(bulletsGroup2.isTouching(wall1)||bulletsGroup2.isTouching(wall2)||
bulletsGroup2.isTouching(wall3)||bulletsGroup2.isTouching(wall4)||
bulletsGroup2.isTouching(wall5)||bulletsGroup2.isTouching(wall6)||
bulletsGroup2.isTouching(wall7)||bulletsGroup2.isTouching(wall8)||
bulletsGroup2.isTouching(wall9)||bulletsGroup2.isTouching(wall10)||
bulletsGroup2.isTouching(wall11)||bulletsGroup2.isTouching(wall12)||
bulletsGroup2.isTouching(wall13)||bulletsGroup2.isTouching(wall14)||
bulletsGroup2.isTouching(wall15)||bulletsGroup2.isTouching(wall16)||
bulletsGroup2.isTouching(wall17)||bulletsGroup2.isTouching(wall18)||
bulletsGroup2.isTouching(wall19)||bulletsGroup2.isTouching(wall20)||
bulletsGroup2.isTouching(wall21)||bulletsGroup2.isTouching(wall22)||
bulletsGroup2.isTouching(wall23)||bulletsGroup2.isTouching(wall24)||
bulletsGroup2.isTouching(wall25)||bulletsGroup2.isTouching(wall26)||
bulletsGroup2.isTouching(wall27)||bulletsGroup2.isTouching(wall28)||
bulletsGroup2.isTouching(wall29)||bulletsGroup2.isTouching(wall30)||
bulletsGroup2.isTouching(wall31)||bulletsGroup2.isTouching(wall32)||
bulletsGroup2.isTouching(wall33)||bulletsGroup2.isTouching(wall34)||
bulletsGroup2.isTouching(wall35)||bulletsGroup2.isTouching(wall36)||
bulletsGroup2.isTouching(wall37)||bulletsGroup2.isTouching(wall38)||
bulletsGroup2.isTouching(wall39)||bulletsGroup2.isTouching(wall40)||
bulletsGroup2.isTouching(wall41)||bulletsGroup2.isTouching(wall42)||
bulletsGroup2.isTouching(wall43)||bulletsGroup2.isTouching(wall44)||
bulletsGroup2.isTouching(wall45)||bulletsGroup2.isTouching(wall46)||
bulletsGroup2.isTouching(wall47)||bulletsGroup2.isTouching(wall48)||
bulletsGroup2.isTouching(wall49)||bulletsGroup2.isTouching(wall50)||
bulletsGroup2.isTouching(wall51)||bulletsGroup2.isTouching(wall52)||
bulletsGroup2.isTouching(wall53)||bulletsGroup2.isTouching(wall54)||
bulletsGroup2.isTouching(wall55)||bulletsGroup2.isTouching(wall56)||
bulletsGroup2.isTouching(wall57)||bulletsGroup2.isTouching(wall58)||
bulletsGroup2.isTouching(wall59)||bulletsGroup2.isTouching(wall60)||
bulletsGroup2.isTouching(wall61)||bulletsGroup2.isTouching(wall62)||
bulletsGroup2.isTouching(wall63)||bulletsGroup2.isTouching(wall64)||
bulletsGroup2.isTouching(wall65)||bulletsGroup2.isTouching(wall66))


{
bulletsGroup2[0].destroy()
}

if(bulletsGroup1.isTouching(tank2)){
tank2.position.x=1120
tank2.position.y=75
  score=score+1
}


if(bulletsGroup2.isTouching(tank1)){
  tank1.position.x=50
  tank1.position.y=72
  score2=score2+1
}

if(score===10){
 gameState=3
}

if(score2===10){
  gameState=4
}


  tank1.collide(wall1)
  tank1.collide(wall2)
  tank1.collide(wall3)
  tank1.collide(wall4)
  tank1.collide(wall5)
  tank1.collide(wall6)
  tank1.collide(wall7)
  tank1.collide(wall8)
  tank1.collide(wall9)
  tank1.collide(wall10)
  tank1.collide(wall11)
  tank1.collide(wall12)
  tank1.collide(wall13)
  tank1.collide(wall14)
  tank1.collide(wall15)
  tank1.collide(wall16)
  tank1.collide(wall17)
  tank1.collide(wall18)
  tank1.collide(wall19)
  tank1.collide(wall20)
  tank1.collide(wall21)
  tank1.collide(wall22)
  tank1.collide(wall23)
  tank1.collide(wall24)
  tank1.collide(wall25)
  tank1.collide(wall26)
  tank1.collide(wall27)
  tank1.collide(wall28)
  tank1.collide(wall29)
  tank1.collide(wall30)
  tank1.collide(wall31)
  tank1.collide(wall32)
  tank1.collide(wall33)
  tank1.collide(wall34)
  tank1.collide(wall35)
  tank1.collide(wall36)
  tank1.collide(wall37)
  tank1.collide(wall38)
  tank1.collide(wall39)
  tank1.collide(wall40)
  tank1.collide(wall41)
  tank1.collide(wall42)
  tank1.collide(wall43)
  tank1.collide(wall44)
  tank1.collide(wall45)
  tank1.collide(wall46)
  tank1.collide(wall47)
  tank1.collide(wall48)
  tank1.collide(wall49)
  tank1.collide(wall50)
  tank1.collide(wall51)
  tank1.collide(wall52)
  tank1.collide(wall53)
  tank1.collide(wall54)
  tank1.collide(wall55)
  tank1.collide(wall56)
  tank1.collide(wall57)
  tank1.collide(wall58)
  tank1.collide(wall59)
  tank1.collide(wall60)
  tank1.collide(wall61)
  tank1.collide(wall62)
  tank1.collide(wall63)
  tank1.collide(wall64)
  tank1.collide(wall65)
  tank1.collide(wall66)

   }

   tank2.collide(wall1)
  tank2.collide(wall2)
  tank2.collide(wall3)
  tank2.collide(wall4)
  tank2.collide(wall5)
  tank2.collide(wall6)
  tank2.collide(wall7)
  tank2.collide(wall8)
  tank2.collide(wall9)
  tank2.collide(wall10)
  tank2.collide(wall11)
  tank2.collide(wall12)
  tank2.collide(wall13)
  tank2.collide(wall14)
  tank2.collide(wall15)
  tank2.collide(wall16)
  tank2.collide(wall17)
  tank2.collide(wall18)
  tank2.collide(wall19)
  tank2.collide(wall20)
  tank2.collide(wall21)
  tank2.collide(wall22)
  tank2.collide(wall23)
  tank2.collide(wall24)
  tank2.collide(wall25)
  tank2.collide(wall26)
  tank2.collide(wall27)
  tank2.collide(wall28)
  tank2.collide(wall29)
  tank2.collide(wall30)
  tank2.collide(wall31)
  tank2.collide(wall32)
  tank2.collide(wall33)
  tank2.collide(wall34)
  tank2.collide(wall35)
  tank2.collide(wall36)
  tank2.collide(wall37)
  tank2.collide(wall38)
  tank2.collide(wall39)
  tank2.collide(wall40)
  tank2.collide(wall41)
  tank2.collide(wall42)
  tank2.collide(wall43)
  tank2.collide(wall44)
  tank2.collide(wall45)
  tank2.collide(wall46)
  tank2.collide(wall47)
  tank2.collide(wall48)
  tank2.collide(wall49)
  tank2.collide(wall50)
  tank2.collide(wall51)
  tank2.collide(wall52)
  tank2.collide(wall53)
  tank2.collide(wall54)
  tank2.collide(wall55)
  tank2.collide(wall56)
  tank2.collide(wall57)
  tank2.collide(wall58)
  tank2.collide(wall59)
  tank2.collide(wall60)
  tank2.collide(wall61)
  tank2.collide(wall62)
  tank2.collide(wall63)
  tank2.collide(wall64)
  tank2.collide(wall65)
  tank2.collide(wall66)

  wall1.visible=false
  wall2.visible=false
  wall3.visible=false
  wall4.visible=false
  wall5.visible=false
  wall6.visible=false
  wall7.visible=false
  wall8.visible=false
  wall9.visible=false
  wall10.visible=false
   
  wall11.visible=false
  wall12.visible=false
  wall13.visible=false
  wall14.visible=false
  wall15.visible=false
  wall16.visible=false
  wall17.visible=false
  wall18.visible=false
  wall19.visible=false
  wall20.visible=false
   
  wall21.visible=false
  wall22.visible=false
  wall23.visible=false
  wall24.visible=false
  wall25.visible=false
  wall26.visible=false
  wall27.visible=false
  wall28.visible=false
  wall29.visible=false
  wall30.visible=false
   
  wall31.visible=false
  wall32.visible=false
  wall33.visible=false
  wall34.visible=false
  wall35.visible=false
  wall36.visible=false
  wall37.visible=false
  wall38.visible=false
  wall39.visible=false
  wall40.visible=false
   
  wall41.visible=false
  wall42.visible=false
  wall43.visible=false
  wall44.visible=false
  wall45.visible=false
  wall46.visible=false
  wall47.visible=false
  wall48.visible=false
  wall49.visible=false
  wall50.visible=false
   
  wall51.visible=false
  wall52.visible=false
  wall53.visible=false
  wall54.visible=false
  wall55.visible=false
  wall56.visible=false
  wall57.visible=false
  wall58.visible=false
  wall59.visible=false
  wall60.visible=false
   
  wall61.visible=false
  wall62.visible=false
  wall63.visible=false
  wall64.visible=false
  wall65.visible=false
  wall66.visible=false
  

   if(gameState===3){

    textSize(70)
    stroke("white")
    fill("red")
    textAlign(CENTER)
    text("TANK1 WON",650,320)



   }

   if(gameState===4){

    textSize(70)
    stroke("white")
    fill("green")
    textAlign(CENTER)
    text("TANK2 WON",650,320)
   }
   
}
    
function bullets(){
    bullet = createSprite(tank2.x,tank2.y,10,10)
    bullet.addAnimation("bullets",bulletImg)
    bullet.scale = 0.2
    bullet.velocityX = 10
    bulletsGroup.add(bullet)
  }
