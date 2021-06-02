// Imported Images in a Array by giving complete url
var imges = ['320X480V2/TELA%201.png',
            '320X480V2/TELA%202.png',
            '320X480V2/TELA%20MALBEC.png',
            '320X480V2/TELA%20LILY.png',
            '320X480V2/TELA%20EGEO%20DOLCE.png',
            '320X480V2/TELA%20CTA.png'
            ];


var output = document.getElementById('output');

// Click count of Ads
var clickcount = 0;

//Clicking Set on Image2
var clickset = 0
var bigbtn = 0

// Opening the 1st Image
openfile(imges[0])

// adding Event Listener
document.getElementById("output").addEventListener('click', function() {
                    //console.log('Click');
                    clickpattern();});


// Opening a  file
function openfile(filepath){
    output.src = filepath;
    //console.log("Current Img URL = ", output.src);
};

// click count but it refreshes again as per page loads
function clicksnum(){
            clickcount +=1;
            //console.log("Clickcount = ", clickcount);
};


// Clicking of 1st Images
function clickpattern(){
    var op = document.getElementById('output');
    op.onmousedown = GetCoordinates;
    //console.log("Current Img URL = ", op.src);
    //console.log("Clickset = ", clickset);
    //console.log("big btn = ", bigbtn);

    if (op.src.search('TELA%201.png') > -1)
    {
        //console.log("Clicked to move 1");
        op.src = imges[1];
        //console.log("Image Changed!!!...", op.src);
        ImageMap(op);
    }
    else if (op.src.search('TELA%202.png') > -1)
    {
        //console.log("Clicked to move 2");
        op.src = imges[1];
        //console.log("Image Changed!!!...", op.src);
    }
    else if (op.src.search('TELA%20MALBEC.png') || op.src.search('TELA%20LILY.png') || op.src.search('TELA%20EGEO%20DOLCE.png'))
    {
        //console.log("Clicked to move 6");
        op.src = imges[5];
        //console.log("Image Changed!!!...", op.src);
    }
};


// Mapping of Image for 4 buttons on it.
function ImageMap(op) {
    var area = document.getElementById("leftkey");
    area.shape = "rect";
    area.coords = "24,376,160,431";
    //area.onmouseover = function(){//console.log("leftkey");};
    area.onclick = function(){clickset = 3; };

    var area = document.getElementById("rightkey");
    area.shape = "rect";
    area.coords = "295,376,161,431";
    //area.onmouseover = function(){//console.log("rightkey");};
    area.onclick = function(){clickset = 5;};

    var area = document.getElementById("bigbtn");
    area.shape = "rect";
    area.coords = "42,466,275,531";
    //area.onmouseover = function(){//console.log("bigbtn");};
    area.onclick = function(){bigbtn = 4; if (clickset==3){op.src = imges[2]; } else if (clickset==5){op.src = imges[4];} else op.src = imges[3];};
 };


// Finding a Position of Mouse Click
function FindPosition(oElement)
{
  if(typeof( oElement.offsetParent ) != "undefined")
  {
    for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
    {
      posX += oElement.offsetLeft;
      posY += oElement.offsetTop;
    }
      return [ posX, posY ];
    }
    else
    {
      return [ oElement.x, oElement.y ];
    }
};


//Getting a Co-ordinates of Mouse click
function GetCoordinates(e)
{
  var PosX = 0;
  var PosY = 0;
  var ImgPos;
  ImgPos = FindPosition(output);
  if (!e) var e = window.event;
  if (e.pageX || e.pageY)
  {
    PosX = e.pageX;
    PosY = e.pageY;
  }
  else if (e.clientX || e.clientY)
    {
      PosX = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft;
      PosY = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop;
    }
  PosX = PosX - ImgPos[0];
  PosY = PosY - ImgPos[1];
  //document.getElementById("x").innerHTML = PosX;
  //document.getElementById("y").innerHTML = PosY;
  return (PosX, PosY);
};

