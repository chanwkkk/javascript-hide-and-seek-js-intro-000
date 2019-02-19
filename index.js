function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var array=document.querySelectorAll("ul.ranked-list")
  for (var i=0;i<array.length;i++){
    array[i].innerHTML=parseInt(array[i].innerHTML)+n;
  }
}

function deepestChild(){
  let current=document.getElementById('grand-node');
  let next=current.children[0];
  while(next){
    current=next;
    next=current.children[0];
  }
  return current;
}
