var base_images    = [];
var overlay_images = [];
var text_boxes = [];

var summary;
var header;

var menu_x_pos = [];
var menu_y_pos = [];

var effect_x_pos = [];
var effect_y_pos = [];

var counters = [];
var x_modifier = [];
var forward = [];

var gc;

var curr_map = -1;



function preload() {

    summary = loadImage('summarypage.png');
    header = loadImage('headerwithback.png');
    
    base_images[0] = loadImage('brakke1.png');
    overlay_images[0] = loadImage('brakke2.png');
    text_boxes[0] = loadImage('testtext.png');    

    base_images[1] = loadImage('maksi1.png');
    overlay_images[1] = loadImage('maksi2.png');
    text_boxes[1] = loadImage('testtext.png');    

    base_images[2] = loadImage('blitz1.png');
    overlay_images[2] = loadImage('blitz2.png');
    text_boxes[2] = loadImage('testtext.png');    

    base_images[3] = loadImage('herc1.png');
    overlay_images[3] = loadImage('herc2.png');
    text_boxes[3] = loadImage('testtext.png');  

    base_images[4] = loadImage('kvinne1.png');
    overlay_images[4] = loadImage('kvinne2.png');
    text_boxes[4] = loadImage('testtext.png');  

    base_images[5] = loadImage('fisk1.png');
    overlay_images[5] = loadImage('fisk2.png');
    text_boxes[5] = loadImage('testtext.png');  

    base_images[6] = loadImage('haus1.png');
    overlay_images[6] = loadImage('haus2.png');
    text_boxes[6] = loadImage('testtext.png');  
}

function setup() {
  createCanvas(windowWidth,windowHeight);

    frameRate(60); 

  // Can re-use the same canvas if the image sizes are the same. GC creates the offscreen graphic.
  gc = createGraphics(base_images[0].width, base_images[0].height, P2D);

  for (var map = 0; map < base_images.length; map++) {

    counters[map] = 0;
    x_modifier[map] = 0;
    forward[map] = true;
      


//why do these have "map" in the bracket and not zero? 
      
    if (map === 0) {
    effect_x_pos[map] = 478;
      effect_y_pos[map] = 288;

      menu_x_pos[map] = (423);
      menu_y_pos[map] = (440);

    } else if (map === 1) {
      effect_x_pos[map] = 454;
      effect_y_pos[map] = 332;

      menu_x_pos[map] = (103);
      menu_y_pos[map] = (150);

    } else if (map === 2) {
      effect_x_pos[map] = 305;
      effect_y_pos[map] = 208;

      menu_x_pos[map] = (73);
      menu_y_pos[map] = (198);
        
    } else if (map === 3) {
      effect_x_pos[map] = 497;
      effect_y_pos[map] = 224;

      menu_x_pos[map] = (219);
      menu_y_pos[map] = (255);
        
    } else if (map === 4) {
      effect_x_pos[map] = 420;
      effect_y_pos[map] = 266;

      menu_x_pos[map] = (208);
      menu_y_pos[map] = (378);
    
    } else if (map === 5) {
      effect_x_pos[map] = 379;
      effect_y_pos[map] = 260;

      menu_x_pos[map] = (293);
      menu_y_pos[map] = (207);
    
    } else if (map === 6) {
      effect_x_pos[map] = 497;
      effect_y_pos[map] = 374;

      menu_x_pos[map] = (247);
      menu_y_pos[map] = (116);
    }
      
      effect_x_pos[map] = windowWidth * (effect_x_pos[map] / 905.0);
      effect_y_pos[map] = windowHeight * (effect_y_pos[map] / 905.0);

      menu_x_pos[map] = windowWidth * (menu_x_pos[map] / 905.0);
      menu_y_pos[map] = windowHeight * (menu_y_pos[map] / 905.0);

  }

}

function show_interior_page(map) {

    //resets graphic
    gc.clear();
    gc.push();

    if (curr_map != -1 &&
      mouseX > effect_x_pos[map] - 25 &&
      mouseX < effect_x_pos[map] + 25 &&
      mouseY > effect_y_pos[map] - 40 &&
      mouseY < effect_y_pos[map] + 40) {
      //showing text box 
    //growing value for when you hover 
      counters[map] += 2;
      if (counters[map] > 70) {
        counters[map] = 70;
      }
    } else {
      counters[map] -= 5;
      if (counters[map] < 0) {
        counters[map] = 0;
      }
    }
    
    
    //changing glitch per map
//    if (map === 0) {
//        gc.fill(0, 100)
//      //gc.rotate(10.0);
//    } else if (map ===1) {
//        gc.fill(0,150)
//    } else if (map ===2)
//        gc.fill(50,50)
//    

//    if(forward[map] === true){
//        x_modifier[map] += 1;
//    } else {
//        x_modifier[map] -= 1;
//    }
//    
//    if (x_modifier[map] >= 100) {
//        forward[map] = false;
//    } else if (x_modifier[map] <= 0 ) {
//        forward[map] = true;
//    }
//    
    
    gc.noStroke();

    //counter expands x with the amount of time you hover; random makes the jitter. x, y, width, height
    //(grey,opacity)
//    gc.fill(0, 200);
//    gc.rect(effect_x_pos[map] + x_modifier[map] + 3,
//           effect_y_pos[map] - 67,
//           5,
//           140)
//    
//    gc.fill(0,100)
//    gc.rect(effect_x_pos[map] + x_modifier[map] - 3,
//           effect_y_pos[map] - 73,
//           5,
//           140)
//    
//    gc.fill(0,150)
//    gc.rect(effect_x_pos[map] + x_modifier[map],
//           effect_y_pos[map] - 70,
//           5,
//           140);
//   
//option 1: 
//    for (var i = -15; i < 15; i++ ) {
//        gc.fill(0, random(255));
//        gc.ellipse(effect_x_pos[map] + random(i) + counters[map] * 0.2,
//                    effect_y_pos[map] + random(i) + counters[map] * 0.2,
//                  1 + counters[map] * 0.8 * 2 + random(counters[map] * 0.2 + 2),
//                  2 + counters[map] * 0.8 * 2 + random(counters[map] * 0.2 + 2));
//        
    
//option 2: sparkle cube zone 
//            for (var i = -15; i < 15; i++ ) {
//        gc.fill(0, random(255));
//        gc.rect(effect_x_pos[map] - 50 + random(400) * 0.2 - (counters[map] * 0.8),
//                    effect_y_pos[map] - 20 + random(300) * 0.2 - (counters[map] * 0.8),
//        //min size //base // only adding jitter to the end//ensures that there is still some value 
//                  8 + counters[map] * 0.8 * 2 + random(counters[map] * 0.2 + 2),
//                  8 + counters[map] * 0.8 * 2 + random(counters[map] * 0.2 + 2));
//            }
                
//option 3: spread out 
//     for (var i = -10; i < 10; i++ ) {
//        gc.fill(0, random(255));
//        gc.rect(effect_x_pos[map] - 100 + (random(100) + random(100) + random(100) + random(100)) * 0.5 - (counters[map] * 0.8),
//                    effect_y_pos[map] - 60 + (random(100) + random(100) + random(100)) * 0.5 - (counters[map] * 0.8),
//        //min size //base // only adding jitter to the end//ensures that there is still some value 
//                  8 + counters[map] * 0.8 * 2 + random(counters[map] * 0.2 + 2),
//                  8 + counters[map] * 0.8 * 2 + random(counters[map] * 0.2 + 2));
         
         
//option 4: another option      
    
//                 for (var i = -30; i < 30; i++ ) {
//        gc.fill(0, random(255));
//        gc.rect(effect_x_pos[map] - 50 + (random(100) + random(100) + random(100) + random(100)) * 0.2 - (counters[map] * 0.8),
//                    effect_y_pos[map] - 20 + (random(100) + random(100) + random(100)) * 0.2 - (counters[map] * 0.8),
//        //min size //base // only adding jitter to the end//ensures that there is still some value 
//                  8 + counters[map] * 0.8 * 2 + random(counters[map] * 0.2 + 2),
//                  8 + counters[map] * 0.8 * 2 + random(counters[map] * 0.2 + 2));
         
         
// option 5: "iteration for Boris" - lines instead of rectangles 
    var xs = windowWidth * (200 / 905);
    var ys = windowHeight * (60 / 905);
    var ws = windowWidth * (40 / 905);
    var mult = windowWidth * (100 / 905);
    var multw = windowHeight * (100 / 905);
    
     for (var i = -8; i < 8; i++ ) {
        gc.fill(200, random(100));
        gc.rect(
            effect_x_pos[map] - xs + (random(mult) + random(mult) + random(mult) + random(mult) + random(mult) + random(mult) + random(mult)) * 0.5 - (counters[map] * 0.8),
                    effect_y_pos[map] - ys + (random(multw) + random(multw) + random(multw)) * 0.5 - (counters[map] * 0.8),
        //min size //base // only adding jitter to the end//ensures that there is still some value 
                  ws + counters[map] * 0.9 * 2 + random(counters[map] * 0.2 + 2),
                  2 + counters[map] * 0.9 * 2 + random(counters[map] * 0.2 + 2));
         
    }
    
//    gc.rect(
//        effect_x_pos[map] + counters[map], 
//        effect_y_pos[map] + counters [map],
//        20 + counters[map] + random(5), 
//        20 + counters[map] + random(2));
//    
//    gc.fill(0, 100);
//    gc.rect(
//        effect_x_pos[map] + random(5), 
//        effect_y_pos[map] + random(10),
//        -30 - counters[map] * 0.5 + random(5), 
//        30 + counters[map] * 0.5 + random(2));
    
//////
//    gc.rect(effect_x_pos[map], effect_y_pos[map] + 10,
//      30 + counters[map] + random(-5), -30 - counters[map] + random(-2));
//    frameRate(15);

//    gc.ellipse(effect_x_pos[map], effect_y_pos[map] + 10,
//      -30 + -counters[map] + random(-5), -30 - counters[map] + random(-2));
//

    gc.pop();
    // To keep the original image intact (otherwise the original image will be permanently changed by mask)
    //.get -- gets the graphic drawn offscreen and overlays it
    var temp = overlay_images[map].get();
    temp.mask(gc.get());

    image(base_images[map], 0, 0, windowWidth, windowHeight);
    image(temp, 0, 0, windowWidth, windowHeight);

    if (counters[map] >= 20) {
    image(text_boxes[map], 0, 0, windowWidth,windowHeight);
    }
    
  //to show target area
      image(gc, 0, 0);
      //   rect(500,210,50,50);
}

function show_navigation() {
    
    var nav_scale = 0.2;

  for (var map = 0; map < base_images.length; map++) {

      push();
      translate(menu_x_pos[map], menu_y_pos[map]);
      scale(nav_scale);
      show_interior_page(map);
      pop();

      if (
        mouseIsPressed &&
        mouseX > menu_x_pos[map] &&
        mouseX < menu_x_pos[map] + base_images[map].width * nav_scale &&
        mouseY > menu_y_pos[map] &&
        mouseY < menu_y_pos[map] + base_images[map].height * nav_scale) {

          curr_map = map;

     }

  }

}

function show_interior_navigation() {
    
    var nav_scale = 0.25;
    var small_nav_scale = 0.55;
    var x_offset = windowWidth * (550 / 905);
    var y_offset = windowHeight * (260 / 905);

  for (var map = 0; map < base_images.length; map++) {
      
      if (curr_map != map) {
      
      push();
      translate(x_offset,y_offset);
      scale(small_nav_scale);
      
      push();
      translate(menu_x_pos[map], menu_y_pos[map]);
      scale(nav_scale);
      show_interior_page(map);
      pop();
      
      pop();

      if (
        mouseIsPressed &&
        mouseX > menu_x_pos[map] * small_nav_scale + x_offset &&
        mouseX < (menu_x_pos[map] + base_images[map].width * nav_scale) * small_nav_scale + x_offset  &&
        mouseY > menu_y_pos[map] * small_nav_scale + y_offset &&
        mouseY < (menu_y_pos[map] + base_images[map].height * nav_scale) * small_nav_scale + y_offset  ) {

          curr_map = map;

     }
      }

  }

}

function check_back_click() {
              if (
        mouseIsPressed &&
        mouseX > 0 &&
        mouseX < 100 &&
        mouseY > 0 &&
        mouseY < 100) {
          curr_map = -1;              
     }
}

function draw() {
  //image(image_one, 0, 0, windowWidth, windowHeight);
  background(255);

  if (curr_map === -1) {
    image(summary, 0, 0,windowWidth,windowHeight);
      show_navigation();
  } else {
    show_interior_page(curr_map);
    show_interior_navigation();
    image(header,0,0,windowWidth,windowHeight);
  }

check_back_click();
    
    //can add header here

}
