function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector(".target")
}

function increaseRankBy(n){
  var rankedList = document.getElementById("app").querySelectorAll("ul.ranked-list li")
  for (let i = 0; i < rankedList.length; i++){
    rankedList[i].innerHTML = (parseInt(rankedList[i].innerHTML, 10) + n).toString()
  }
}

function deepestChild(){
  var grandnodes =  document.getElementById("grand-node").querySelectorAll("div")
  var finalgrandnode = grandnodes.length - 1

return grandnodes[finalgrandnode]

}
