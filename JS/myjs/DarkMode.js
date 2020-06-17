let btn = document.getElementById("switch_btn");
btn.addEventListener("click",Darkmode,false);

let colors = {
  bg : 'hsl(0, 0%, 100%)',
  BGPattern: 'hsl(225, 100%, 98%)',
  BlueCardBG: 'hsl(227, 47%, 96%)',
  bluetext : 'hsl(228, 12%, 44%)',
  whitext: 'hsl(230, 17%, 14%)',
}

function Darkmode(){
  //changin the orientation of the circle inside de button of darkmode
  btn.style.justifyContent = orienbtn(btn.style.justifyContent);
  //saving the old parrameters
  var bg = getComputedStyle(document.documentElement).getPropertyValue('--VeryDarkBlueBG');
  var bgpattern = getComputedStyle(document.documentElement).getPropertyValue('--VeryDarkBlueTopBGPattern');
  var bgcard = getComputedStyle(document.documentElement).getPropertyValue('--DarkDesaturatedBlueCardBG');
  var bluetext = getComputedStyle(document.documentElement).getPropertyValue('--DesaturatedBlueText');
  var whitetext = getComputedStyle(document.documentElement).getPropertyValue('--WhiteText');
  //changin the values
  document.documentElement.style.setProperty('--VeryDarkBlueBG', colors.bg);
  document.documentElement.style.setProperty('--VeryDarkBlueTopBGPattern', colors.BGPattern);
  document.documentElement.style.setProperty('--DarkDesaturatedBlueCardBG', colors.BlueCardBG);
  document.documentElement.style.setProperty('--DesaturatedBlueText', colors.bluetext);
  document.documentElement.style.setProperty('--WhiteText', colors.whitext);

  //saving the new old 
  colors.bg = bg;
  colors.BGPattern = bgpattern;
  colors.BlueCardBG = bgcard;
  colors.bluetext = bluetext;
  colors.whitext = whitetext;
}


function orienbtn(direction){
  if(direction.length == 0){
    return 'right';
  }
  if(direction == 'right'){
    return 'left';
  }else{
    return 'right';
  }
}