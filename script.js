
const box=document.querySelector(".toastBox");
const successMsg= '<i class="fa-solid fa-circle-check fa-beat fa-xl" style="color: #00ff00;"></i> Successfully submitted';
const errorMsg='<i class="fa-solid fa-circle-xmark fa-shake fa-xl" style="color: #ff0000;"></i> Please fix the error!';
const pendingMsg='<i class="fa-solid fa-circle-exclamation fa-bounce fa-xl" style="color: #ffbb00;"></i> check your internet connection!!';

const openmodel = (msg, col) => {
    let cont=document.createElement("div");
    const bottom=document.createElement("div");
    cont.innerHTML=msg;
    cont.appendChild(bottom);
    cont.classList.add("active");
    bottom.classList.add("bottom");
    bottom.style.backgroundColor=col;
    box.appendChild(cont);
    setTimeout(()=>{
        box.removeChild(cont);
    },4000);
}
