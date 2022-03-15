// ==== Video Project ====
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-contaienr");

// add EventListener
btn.addEventListener("click", function () {
    if (!btn.classList.contains("slide")) {
        btn.classList.add('slide');
        video.pause();
    } else {
        btn.classList.remove("slide");
        video.play();
    };
});