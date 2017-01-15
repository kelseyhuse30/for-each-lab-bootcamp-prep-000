function iterativeLog(array){
  array.forEach((item,index,array) => {
    console.log(`${index}: ${item}`);
  })
}

function iterate(callback){
  var colors = ["blue","red","orange"];
  colors.forEach(callback);
  return colors;
}

function doToArray(array,callback){
  array.forEach(callback);
}

mocha.run();
