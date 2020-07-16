
function toggleBlock() {
    var topTip = document.getElementsByClassName("head-inner");
    var bottomClock = document.getElementsByClassName("goodPaper");
    for (let i = 0 ; i < topTip.length; i++){
        topTip[i].addEventListener("mouseover",function () {
            for (let j = 0 ; j < topTip.length; j++){
                topTip[j].style.backgroundColor = "#f1f1f1";
                topTip[j].style.color = "#000";
                bottomClock[j].style.display = "none";
            }
            this.style.backgroundColor = "#00b262";
            this.style.color = "#fff";
            bottomClock[i].style.display = "block";
        })
    }
}

toggleBlock()

    let i = 0;
    setInterval(function () {
        var topTip = document.getElementsByClassName("head-inner");
        var bottomClock = document.getElementsByClassName("goodPaper");
            if(i == topTip.length){
                i = 0;
                console.log(i);
            }
            for (let j = 0 ; j < topTip.length; j++){
                topTip[j].style.backgroundColor = "#f1f1f1";
                topTip[j].style.color = "#000";
                bottomClock[j].style.display = "none";
            }
            topTip[i].style.backgroundColor = "#00b262";
            topTip[i].style.color = "#fff";
            bottomClock[i].style.display = "block";
            i++;
    },1000)



var banner = document.getElementsByClassName("banner")[0];
var slideShow = document.getElementsByClassName("slideShow")[0];
var images = document.querySelectorAll(".slideShow img");
var bannerBar = document.getElementsByClassName("bannerBar")[0];


//创建轮播图小按钮
for(let i = 0 ; i < images.length ; i++){
    console.log(images.length)
    var span = document.createElement("span");
    bannerBar.appendChild(span);
}


slideShow.style.transition = "all 3s";

var spans = document.querySelectorAll(".bannerBar span");
let index = 0;
spans[index].style.background = "#2691fd";

for(let j = 0 ; j < images.length ; j++){
    spans[j].addEventListener("click",function () {
        index = j;
        for(let i = 0 ; i < images.length ; i++){
            spans[i].style.background = "rgba(0,0,0,.2)";
            spans[i].style.zIndex = 11;
            images[i].style.zIndex = 0;
        }

        images[index].style.zIndex = 10;
        spans[index].style.background = "#2691fd";
    })
}

setInterval(function () {
    if (index == images.length){
        index=0;
    }
    for(let i = 0 ; i < images.length ; i++){
        spans[i].style.background = "rgba(0,0,0,.2)";
        images[i].style.zIndex = 0;
    }
    images[index].style.zIndex = 10;
    spans[index].style.background = "#2691fd";
    index++;
},3000)

//获取所有的nav列表
var navs = document.querySelectorAll(".banner-nav ul li");
var navBar = document.querySelectorAll(".banner-nav ul li")[0];
var navDetail = document.getElementsByClassName("nav-detail")[0];
navBar.addEventListener("mouseout",function () {
    document.getElementsByClassName("nav-detail")[0].style.display = "none";
});
navDetail.addEventListener("mouseout",function () {
    document.getElementsByClassName("nav-detail")[0].style.display = "none";
});
navDetail.addEventListener("mouseover",function () {
    document.getElementsByClassName("nav-detail")[0].style.display = "block";
});
console.log(navs.length);
for (let i = 0 ; i < navs.length;i++) {
    navs[i].addEventListener("mouseover",function () {
        navDetail.style.display = "block";
    })
    navs[i].addEventListener("mouseout",function () {
        navDetail.style.display = "none";
    })
}

var navItems = document.querySelectorAll(".clickScroll div");
window.addEventListener("scroll", function () {
    if(document.documentElement.scrollTop > 600){
        document.getElementsByClassName("sliderTop")[0].style.top = 0;
        document.getElementsByClassName("clickScroll")[0].style.width = "40px";
        document.getElementsByClassName("clickScroll")[0].style.height = "400px";
        for(let i = 0; i < navItems.length ; i++){
            navItems[i].style.width = "36px";
            navItems[i].style.height = "36px";
            navItems[i].style.fontSize = "12px";
        }
    }else{
        document.getElementsByClassName("sliderTop")[0].style.top = "-50px";
        document.getElementsByClassName("clickScroll")[0].style.width = "0px";
        document.getElementsByClassName("clickScroll")[0].style.height = "0px";
        for(let i = 0; i < navItems.length ; i++){
            navItems[i].style.width = "0px";
            navItems[i].style.height = "0px";
            navItems[i].style.fontSize = "0px";
        }
    }
}, true);

document.getElementsByClassName("naBottom")[0].addEventListener("click",function () {
    scrollTo(0,0)
})




