

var pic = document.getElementById('myPhoto');
var imageList= ['earthbefore.jpg', 'secondearth.jpg','world_on_fire.jpg'];
// keep track of index
var index = 0;

//make a function
function changePic(){
  //this is whwere the code goes
  // we have to change image attibute Resources
  pic.setAttribute('src' ,imageList[index]);

  if (index == imageList.length-1 ){
    index  =0;
  }
  else{
    index++;
  }
  //go through each picture in the list
}

setInterval(changePic, 2000);
