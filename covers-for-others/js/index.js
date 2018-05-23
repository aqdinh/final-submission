var base_images    = [];
var overlay_images = [];
var text_boxes = [];

var summary;
var header;

var menu_x_pos = [];
var menu_y_pos = [];

var effect_x_pos = [];
var effect_y_pos = [];

var minimap_x_pos = [];
var minimap_y_pos = [];

var counters = [];
var x_modifier = [];
var forward = [];

var gc;

var curr_map = -1;

var p_width = 905.0;
var p_height = 538.0;

var ratio;
var image_width;
var image_height;

function preload() {

    summary = loadImage('summaryfull.png');
    header = loadImage('headerwithback.png');
    
    base_images[0] = loadImage('brakke1.png');
    overlay_images[0] = loadImage('brakke2.png');
    text_boxes[0] = loadImage('brakke text.png');    

    base_images[1] = loadImage('maksi1.png');
    overlay_images[1] = loadImage('maksi2.png');
    text_boxes[1] = loadImage('maksitaksitext.png');    

    base_images[2] = loadImage('blitz1.png');
    overlay_images[2] = loadImage('blitz2.png');
    text_boxes[2] = loadImage('blitztext.png');    

    base_images[3] = loadImage('herc1.png');
    overlay_images[3] = loadImage('herc2.png');
    text_boxes[3] = loadImage('herctext.png');  

    base_images[4] = loadImage('kvinne1.png');
    overlay_images[4] = loadImage('kvinne2.png');
    text_boxes[4] = loadImage('kvinnetext.png');  

    base_images[5] = loadImage('fisk1.png');
    overlay_images[5] = loadImage('fisk2.png');
    text_boxes[5] = loadImage('fisktext.png');  

    base_images[6] = loadImage('haus1.png');
    overlay_images[6] = loadImage('haus2.png');
    text_boxes[6] = loadImage('hausmaniatext.png');  
}

function setup() {
    ratio = windowWidth / base_images[0].width;
    image_width = base_images[0].width * ratio;
    image_height = base_images[0].height * ratio;
    
  createCanvas(image_width,image_height, P2D);
    

    frameRate(60); 

  // Can re-use the same canvas if the image sizes are the same. GC creates the offscreen graphic.
  gc = createGraphics(image_width, image_height, P2D);

  for (var map = 0; map < base_images.length; map++) {

    counters[map] = 0;
    x_modifier[map] = 0;
    forward[map] = true;
            
    if (map === 0) {
    effect_x_pos[map] = 1053;
      effect_y_pos[map] = 647;

      menu_x_pos[map] = (423);
      menu_y_pos[map] = (440);
        
      minimap_x_pos[map] = (1736);
      minimap_y_pos[map] = (968);

    } else if (map === 1) {
      effect_x_pos[map] = 994;
      effect_y_pos[map] = 729;

      menu_x_pos[map] = (101 / 2.2);
      menu_y_pos[map] = (303 / 2.2);
        
    minimap_x_pos[map] = (1417);
      minimap_y_pos[map] = (749);


    } else if (map === 2) {
      effect_x_pos[map] = 669;
      effect_y_pos[map] = 455;

      menu_x_pos[map] = (208 / 2.2);
      menu_y_pos[map] = (430 / 2.2);
        
        minimap_x_pos[map] = (1456);
      minimap_y_pos[map] = (786);
        
    } else if (map === 3) {
      effect_x_pos[map] = 1093;
      effect_y_pos[map] = 489;

      menu_x_pos[map] = (219);
      menu_y_pos[map] = (255);
        
    minimap_x_pos[map] = (1574);
      minimap_y_pos[map] = (821);
        
    } else if (map === 4) {
      effect_x_pos[map] = 921;
      effect_y_pos[map] = 585;

      menu_x_pos[map] = (208);
      menu_y_pos[map] = (378);
        
        minimap_x_pos[map] = (1572);
      minimap_y_pos[map] = (917);
    
    } else if (map === 5) {
      effect_x_pos[map] = 836;
      effect_y_pos[map] = 570;

      menu_x_pos[map] = (293);
      menu_y_pos[map] = (207);
        
    minimap_x_pos[map] = (1636);
      minimap_y_pos[map] = (786);
    
    
    } else if (map === 6) {
      effect_x_pos[map] = 1093;
      effect_y_pos[map] = 780;

      menu_x_pos[map] = (247);
      menu_y_pos[map] = (116);
        
    minimap_x_pos[map] = (1603);
      minimap_y_pos[map] = (714);
    }
      
      effect_x_pos[map] = image_width * (effect_x_pos[map] / base_images[0].width);
      effect_y_pos[map] = image_height * (effect_y_pos[map] / base_images[0].height);

      menu_x_pos[map] = image_width * (menu_x_pos[map] / p_width);
      menu_y_pos[map] = image_height * (menu_y_pos[map] / p_height);
      
      minimap_x_pos[map] = image_width * (minimap_x_pos[map] / base_images[0].width);
      minimap_y_pos[map] = image_height * (minimap_y_pos[map] / base_images[0].height);

  }

}

function show_interior_page(map) {

    if (curr_map === map) {
    //resets graphic
    
    gc.clear();
    gc.push();

    if (curr_map != -1 &&
      mouseX > effect_x_pos[map] - 100 &&
      mouseX < effect_x_pos[map] + 100 &&
      mouseY > effect_y_pos[map] - 100 &&
      mouseY < effect_y_pos[map] + 100) {
      //showing text box 
    //growing value for when you hover 
      counters[map] += 2;
      if (counters[map] > image_width * (70 / p_width)) {
        counters[map] = image_width * (70 / p_width);
      }
    } else {
      counters[map] -= 5;
      if (counters[map] < 0) {
        counters[map] = 0;
      }
    }
    
    gc.noStroke();

    var xs = image_width * (200 / p_width);
    var ys = image_height * (60 / p_height);
    var ws = image_width * (40 / p_width);
    var mult = image_width * (100 / p_width);
    var multh = image_height * (100 / p_height);
    var w_two = image_width * (2 / p_width);
    var h_two = image_height * (2 / p_height);
    
     for (var i = -8; i < 8; i++) {
        gc.fill(200, random(100));
        gc.rect(
            effect_x_pos[map] - xs + (random(mult) + random(mult) + random(mult) + random(mult) + random(mult) + random(mult) + random(mult)) * 0.5 - (counters[map] * 0.8),
                 effect_y_pos[map] - ys + (random(multh) + random(multh) + random(multh)) * 0.5 - (counters[map] * 0.8),
        //min size //base // only adding jitter to the end//ensures that there is still some value 
                  ws + counters[map] * 0.9 * w_two + random(counters[map] * 0.2 + w_two),
                  h_two + counters[map] * 0.9 * h_two + random(counters[map] * 0.2 + h_two));
         
    }
    
    gc.pop();
    // To keep the original image intact (otherwise the original image will be permanently changed by mask)
    //.get -- gets the graphic drawn offscreen and overlays it
    var temp = overlay_images[map].get();
    temp.mask(gc.get());

    image(base_images[map], 0, 0, image_width, image_height);
    image(temp, 0, 0, image_width, image_height);

    if (counters[map] >= 20) {
    image(text_boxes[map], 0, 0, image_width, image_height);
    }
    
  //to show target area
      //image(gc, 0, 0,image_width, image_height);
      //   rect(500,210,50,50);
    } else {
        image(base_images[map], 0, 0, image_width, image_height);
    }
}

function show_navigation() {
    
    var nav_scale = 0.158;

  for (var map = 0; map < base_images.length; map++) {

//      push();
//      translate(menu_x_pos[map], menu_y_pos[map]);
//      scale(nav_scale);
//      show_interior_page(map);
//      pop();

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
    var x_offset = windowWidth * (550 / p_width);
    var y_offset = windowHeight * (260 / p_height);

  for (var map = 0; map < base_images.length; map++) {
      
      
      
//      push();
//      translate(x_offset,y_offset);
//      scale(small_nav_scale);
//      
//      push();
//      translate(menu_x_pos[map], menu_y_pos[map]);
//      scale(nav_scale);
//      show_interior_page(map);
//      pop();
//      
//      pop();

      if (
        mouseIsPressed &&
        mouseX > minimap_x_pos[map] &&
        mouseX < minimap_x_pos[map] +  130 &&
        mouseY > minimap_y_pos[map] &&
        mouseY < minimap_y_pos[map] + 50  ) {

          curr_map = map;

     }
      

  }

}

function check_back_click() {
              if (
        mouseIsPressed &&
        mouseX > 0 &&
        mouseX < image_height * (328 / base_images[0].height) &&
        mouseY > 0 &&
        mouseY < image_height * (170 / base_images[0].height)) {
          curr_map = -1;              
     }
}

function draw() {
  //image(image_one, 0, 0, windowWidth, windowHeight);
  background(255);

  if (curr_map === -1) {
    image(summary, 0, 0,image_width,image_height);
      show_navigation();
  } else {
    show_interior_page(curr_map);
    show_interior_navigation();
    image(header,0,0,image_width,image_height);
  }

check_back_click();
    
    //can add header here

}
