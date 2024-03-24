const fullImgbox = document.getElementById("full-img-box");
const fullImg = document.getElementById("full-img");
const close = document.querySelector(".close");

function openFullImg(reference){
	fullImgbox.style.display = "flex";
	fullImg.src = reference;
};

close.addEventListener("click",function closeImg(){
	fullImgbox.style.display = "none";
});
