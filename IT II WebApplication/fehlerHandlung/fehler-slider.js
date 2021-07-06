
let fehlern = Array.from(document.querySelectorAll(".fehler .fehler-detail"));

var sliderCount = fehlern.length;

let next = document.querySelector("#next");

let prev = document.querySelector("#prev");

let currentSlide = 1;

var paginationUl = document.createElement("ul");

paginationUl.setAttribute("id", "pagination-ul");

for (var i = 1; i <= fehlern.length; i++) {
  var paginationLi = document.createElement("li");
  paginationLi.setAttribute("data-slide", i);
  var paginationLiText = document.createTextNode(i);
  paginationLi.appendChild(paginationLiText);
  paginationUl.appendChild(paginationLi);
}

document.getElementById("indicators").appendChild(paginationUl);

let paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

let paginationCreatedUl = document.getElementById("pagination-ul");


paginationBullets.forEach(li => {
  li.addEventListener("click", function(e) {
    currentSlide = e.target.dataset.slide;
    showImage();
  })
})

next.addEventListener("click", function(){
  if(next.classList.contains("disabled")){}
  else{
     currentSlide++;
    showImage();
  }

})

prev.addEventListener("click", function(){
  if(prev.classList.contains("disabled")){}
  else{
     currentSlide--;
    showImage();
  }
})

function showImage() {

  fehlern.forEach(f => {
    f.classList.remove("active");
  });
  paginationBullets.forEach(li => {
      li.classList.remove("active");
    })

  fehlern[currentSlide - 1].classList.add("active");

  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

 if(currentSlide == sliderCount){
   next.classList.add("disabled");
 }else{
   next.classList.remove("disabled");
 }

if(currentSlide == 1){
  prev.classList.add("disabled");
}else{
  prev.classList.remove("disabled");
}
};


showImage();


// fehler fehlerDisplay
let fehler = document.querySelector(".fehler");
let slider = document.querySelector(".slider-controls");
let menu = document.querySelector("#menu");


function fehlerDisplay(){
  fehler.style.display = "block";
  slider.style.display = "block";
  menu.style.display = "none";
}
