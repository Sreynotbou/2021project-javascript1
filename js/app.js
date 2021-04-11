//  add value
function removefood(event){
  if(event.target.className==="remove"){
      let li=event.target.parentElement;
      li.remove();
  }
}
//  for create delete file delete
function createfood (event){
  const food=document.querySelector('#add-task');
// to comfirm value
  if(food.value===""){
      return confirm("please enter your food name");
  }
//  create food :
  const foodlist=document.createElement('span');
// call class task into food
  foodlist.className="task";
// call text into bewtten middal
  foodlist.textContent= food.value;
  const date =document.querySelector('#date');
  const selecte =document.querySelector('#selecte');
  const price=document.querySelector('#price');
  const quanity=document.querySelector('#quantity');
// create delect food button:
  const deletefood=document.createElement('span');
  deletefood.classList.add('remove');
  deletefood.textContent="remove";
// create new li
  const li=document.createElement('li');
//  add date selecte to li:
  li.textContent=date.value + " | " +selecte.value + " | " + price.value +" | " + quantity.value + " | ";
  li.appendChild(foodlist);
  li.appendChild(deletefood);
// add li into Ul
  ul.appendChild(li);
// clear value from input 
  food.value="";
};
const ul=document.querySelector('ul');
const btnAdd=document.querySelector('button');
const searchfood=document.querySelector('#searchId');
ul.addEventListener('click',removefood);
btnAdd.addEventListener('click',createfood);
// use key up
searchfood.addEventListener('keyup',function(e){
  let text=searchfood.value.toLowerCase();
  let listfood=document.querySelectorAll('li');
//  loop child 1
  for (let li of listfood){
      let title =li.firstElementChild.textContent.toLocaleLowerCase();
      if (title.indexOf(text)===-1){
          li.style.display="none";
      }else{
          li.style.display="";
      };
  }
});
