var elList = document.querySelector(".js-list");
 
  


for (var item of films) {
    
     
    var newItem = document.createElement("li");
    var newSpan = document.createElement("span");
    var newTile = document.createElement("h2");
    var newImg = document.createElement("img");
    var newText = document.createElement("p");
    var newSubtitle = document.createElement("span");
 
     newTile.textContent = item.title; 
     newImg.src = item.poster;
    newSpan.textContent = item.id; 
    newText.textContent = item.overview; 
    newSubtitle.textContent = item.genres;
      
    newItem.classList.add("js-itim");
    newImg.classList.add("js-img"); 
    newSpan.classList.add("js-span");
    newTile.classList.add("js-title");
    newText.classList.add("js-text");
    newSubtitle.classList.add("js-subtitle");


    newItem.append(newTile, newImg, newSpan, newText, newSubtitle);

   elList.appendChild(newItem);

};  
