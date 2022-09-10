"use strict";
//------------------ Set || Variables || Start --------------->
let type = document.querySelector(".type");
let index = 0;
let start = 0;
let data = () => {
    if (document.documentElement.getAttribute("lang") == "en") {
        return [
            "We invest in energy, for a brighter future",
            "We invest in energy, for a brighter future",
            "We invest in energy, for a brighter future",
        ];
    }
    else {
        return [
            "نستسمر الطاقه,من أجل مستقبل أكثر إشراقًا",
            "نستسمر الطاقه,من أجل مستقبل أكثر إشراقًا",
            "نستسمر الطاقه,من أجل مستقبل أكثر إشراقًا",
        ];
    }
};
let word = "";
let letter = "";
//------------------ Set || Variables || End --------------->
//------------------ Typing || Function || Start --------------->
if (type) {
    setTimeout(() => {
        typingFun();
    }, 4500);
}
function typingFun() {
    type.classList.add("active_after_type");
    word = data()[index];
    letter = word.slice(0, start++);
    if (index == data().length - 1) {
        index = 0;
    }
    if (word.length == letter.length) {
        start = 0;
        index++;
    }
    type.innerHTML = letter;
    setTimeout(typingFun, 230);
}
//------------------ Typing || Function || End --------------->
//=================== Scroll - Button ====>
window.addEventListener("scroll", () => {
    let arrow = document.querySelector(".arrow");
    if (window.scrollY > 600) {
        arrow.style.opacity = "1";
        arrow.style.visibility = "visible";
    }
    else {
        arrow.style.opacity = "0";
        arrow.style.visibility = "hidden";
    }
    arrow.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
//=================== Scroll - Button ====>
//=================== Team - Button ====>
let team = {
    act_btn: document.querySelector(".act-btn"),
    team: document.querySelector(".team"),
    body: document.querySelector("body"),
    close: document.querySelector(".close"),
    shower: function () {
        var _a;
        (_a = this.act_btn) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            var _a, _b;
            (_a = this.team) === null || _a === void 0 ? void 0 : _a.classList.toggle("activer-team");
            (_b = this.body) === null || _b === void 0 ? void 0 : _b.classList.add("hide-scroll");
        });
    },
    hidder: function () {
        var _a;
        (_a = this.close) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            var _a, _b;
            (_a = this.team) === null || _a === void 0 ? void 0 : _a.classList.remove("activer-team");
            (_b = this.body) === null || _b === void 0 ? void 0 : _b.classList.remove("hide-scroll");
        });
    },
};
team.shower();
team.hidder();
let teamer = document.querySelectorAll(".teamer");
let teame = document.querySelector(".team");
teamer.forEach((e) => {
    e.addEventListener("click", () => {
        teame === null || teame === void 0 ? void 0 : teame.classList.add("activer-team");
    });
});
//=================== Team - Button ====>
//=================== Load - Animation ====>
let body = document.querySelector("body");
body === null || body === void 0 ? void 0 : body.classList.add("hide-scroll");
if (document.readyState == "loading") {
    setTimeout(() => {
        update();
    }, 3000);
}
function update() {
    let load = document.querySelector(".load");
    load.classList.add("hide-load");
    body === null || body === void 0 ? void 0 : body.classList.remove("hide-scroll");
}
//=================== Load - Animation ====>
//=================== Slider ====>
let start_index = 1;
if (location.href.includes("index.html")) {
    let img_en = document.querySelector(".img-en img");
    window.addEventListener("load", slider);
    function slider() {
        if (start_index < 4) {
            start_index++;
        }
        else {
            start_index = 1;
        }
        img_en.setAttribute("src", `./assets/slide/${start_index}.jpg`);
        // img_ar.setAttribute("src", `../../assets/slide/${start_index}.jpg`);
        setTimeout(slider, 2000);
    }
}
else {
    let img_ar = document.querySelector("#img-ar img");
    if (img_ar) {
        window.addEventListener("load", sliders);
        function sliders() {
            if (start_index < 4) {
                start_index++;
            }
            else {
                start_index = 1;
            }
            img_ar.setAttribute("src", `../../assets/slide/${start_index}.jpg`);
            setTimeout(sliders, 2000);
        }
    }
}
//=================== Slider ====>
//=================== Drop - Down ====>
let drop = document.querySelector(".drop");
let drop_ele = document.querySelectorAll(".drop .drop-cont .drop-ele");
window.onload = () => {
    drop.insertAdjacentText("afterbegin", "Options");
};
drop.addEventListener("click", (e) => {
    drop.style.height == "100px"
        ? (drop.style.height = "30px")
        : (drop.style.height = "100px");
});
drop_ele.forEach((e) => {
    e.addEventListener("click", (e) => {
        drop.childNodes[0].remove();
        drop.insertAdjacentText("afterbegin", e.target.innerText);
    });
});
//=================== Drop - Down ====>
