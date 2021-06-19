var daar, zaar;
function preload() {
  car = loadImage("img/car.png");
  buld = loadImage("img/buld.png");
  grass = loadImage("img/grass.png");
  road = loadImage("img/road.jpg");
  sky = loadImage("img/sky.png");
  whe = loadImage("img/whe.png");
  so1 = loadSound("sound/CS.wav");
}

function setup() {
  createCanvas(1200, 800);

  man = createSprite(100, 100);
  man.scale = 1;
  man.addImage(sky);
  // man.velocityX = -10
  edge = createEdgeSprites();

  caar = createSprite(288, 850);
  caar.addImage(road);
  caar.scale = 1.9;
  // caar.velocityX = -10

  // kaar = createSprite(200,820);
  // kaar.addImage(car)
  // kaar.scale = .3

  // daar = createSprite(104,850);
  // daar.addImage(whe)
  // daar.scale = .07

  // saar = createSprite(288,850);
  // saar.addImage(whe)
  // saar.scale = .07

  gaar = createSprite(200, 670);
  gaar.addImage(car);
  gaar.scale = 0.3;

  zaar = createSprite(287, 703);
  zaar.addImage(whe);
  zaar.scale = 0.07;

  naar = createSprite(103, 703);
  naar.addImage(whe);
  naar.scale = 0.07;

  xar = createSprite(700, 220);
  xar.addImage(buld);
  xar.scale = 1;
  // xar.velocityX = -10

  sar = createSprite(660, 460);
  sar.addImage(grass);
  sar.scale = 1.1;
  // sar.velocityX = -10
}

function draw() {
  background("black");
  drawSprites();

  if (keyDown("d")) {
    gaar.x = gaar.x + 5;
    zaar.x = zaar.x + 5;
    naar.x = naar.x + 5;
    man.velocityX = -10;
    caar.velocityX = -10;
    xar.velocityX = -10;
    sar.velocityX = -10;
    so1.play();
    // zaar.style.transform = 'rotate(360deg)'
    // naar.style.transform = 'rotate(360deg)'
  }
  // if(keyDown("a")){
  //     gaar.x = gaar.x - 5;
  //     zaar.x = zaar.x - 5;
  //     naar.x = naar.x - 5;
  //     man.velocityX = +10
  //     caar.velocityX = +10
  //     xar.velocityX = +10
  //     sar.velocityX = +10
  // }
  if (keyDown("s")) {
    gaar.y = gaar.y + 5;
    zaar.y = zaar.y + 5;
    naar.y = naar.y + 5;
  }
  if (keyDown("w")) {
    gaar.y = gaar.y - 5;
    zaar.y = zaar.y - 5;
    naar.y = naar.y - 5;
  }
  if (keyDown("esc")) {
    man.velocityX = 0;
    caar.velocityX = 0;
    xar.velocityX = 0;
    sar.velocityX = 0;
  }
  gaar.bounceOff(edge[0]);
  gaar.bounceOff(edge[1]);
  gaar.bounceOff(edge[2]);
  gaar.bounceOff(edge[3]);

  zaar.bounceOff(edge[0]);
  zaar.bounceOff(edge[1]);
  zaar.bounceOff(edge[2]);
  zaar.bounceOff(edge[3]);

  naar.bounceOff(edge[0]);
  naar.bounceOff(edge[1]);
  naar.bounceOff(edge[2]);
  naar.bounceOff(edge[3]);

  if (man.x < 100) {
    man.x = width / 2;
  }
  if (sar.x < 485) {
    sar.x = 660;
  }
  if (xar.x < -640) {
    xar.x = 2000;
  }
  if (caar.x < -1000) {
    caar.x = 100;
  }
}
