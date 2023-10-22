let input = document.getElementById("input");
let btn = document.getElementById("btn");
let ul = document.querySelector("ul");
let item = document.getElementsByClassName("li");
function showData() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  var close = document.createElement("button");
  close.appendChild(document.createTextNode("X"));
  li.appendChild(close);
  close.addEventListener("click",function(){
    li.classList.add("delete")
  })
  function deleteListItem() {
    li.classList.toggle("active");
  }
  li.addEventListener("click", deleteListItem);

}
btn.addEventListener("click", showData);
