// SCROLLING
// console.log(menuList);
var menuList=document.querySelectorAll('.nav-menu a');
var interval;
for(let i=0; i<menuList.length;i++){
    menuList[i].addEventListener('click',function(event){
        event.preventDefault(event);
         var targetSectionId=this.textContent.trim().toLowerCase();
         var targetSection=document.getElementById(targetSectionId);
         interval=setInterval(function(){scrollVertically(targetSection,targetSectionId)},5);
    })
}
function scrollVertically(targetSection,targetSectionId) {
    var targetCordinate=targetSection.getBoundingClientRect();
    if(targetCordinate.top<=0){
        clearInterval(interval);
        return
    }
    else if(targetSectionId=='contact'&&targetCordinate.top<=226){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);
}

// SKILL TAG ANIMATION
var skillBars=document.querySelectorAll('.skill-progress > div');
var skillDisplay=document.querySelector('.skills-display');
var animationDone=false;
window.addEventListener('scroll',checkScroll);

function intializeBars(){
    for(let bars of skillBars){
        bars.style.width=0+"%";
    }
}
intializeBars();

function fireAnimation(){
    for(let bar of skillBars){
        let target =bar.getAttribute('data-bar-width');
        let current=0;
        let interval=setInterval(function(){
            if(current>=target){
                clearInterval(interval);
                return;
            }
            current++;
            bar.style.width=current+"%";
        },2);
    }
}

function checkScroll(){
    
    var visibility=skillDisplay.getBoundingClientRect();
    if(animationDone==false && visibility.top <= window.innerHeight){
        animationDone=true;
        fireAnimation();   
    }
    else if(visibility.top>window.innerHeight){
        animationDone=false;
        intializeBars();
    }
}

let menu=document.querySelector('.hamburger');
let menuLists=document.querySelector('.nav-menu');
menu.addEventListener('click',function(){
     if(menuLists.style.display!='none'){
        menuLists.style.display='none';
    }else{
        menuLists.style.display="flex";
    }
});

// SCROLL BAR 
// var menuList=document.querySelectorAll('.nav-menu a')
// var interval;
// for(var i=0;i<menuList.length;i++){
//     menuList[i].addEventListener('click',function(event){
//         event.preventDefault(event);
//         var targetSectionId=this.textContent.trim().toLowerCase();
//         var targetSection=document.getElementById(targetSectionId);
//         // we cant pass targetSection as an argument in scoll cause then it'll be function call and we have to pass function so thats why we can send multiple parameter as an argument in setinterval function
        
//          // 1 way by sending parametrs to setinterval fucntion
//         // interval=setInterval(scrollVertically,1,targetSection,targetSectionId);
        
//         // 2 way by calling function in function
//         interval=setInterval(function() {
//             scrollVertically(targetSection,targetSectionId)
//         },10);
//     })
// }

// function scrollVertically(targetSection,targetSectionId) {
//         var targetCoordinate=targetSection.getBoundingClientRect();
//         if(targetCoordinate.top<=0){
//             clearInterval(interval);
//             return;
//         }
//         else if(targetSectionId=='contact' && targetCoordinate.top<226){
//             clearInterval(interval);
//             return;

//         }
//         window.scrollBy(0,50);
// }

//3 way in a common function
// var menuList=document.querySelectorAll('.nav-menu a');
// console.log(menuList);
// for(var i=0;i<menuList.length;i++){
//     // FOR PREVENTING THE DEFAULT BEHVIOUR OF FUNCTION we use event.preventDefault
//     // some functions are not applicable in arrow function
//     menuList[i].addEventListener('click',function(event){
//         event.preventDefault(event);
//         // For extracting the text from anchor tags from menu
//         var targetSectionId=this.textContent.trim().toLowerCase();
//         // Reach the particular section by name
//         var targetSection=document.getElementById(targetSectionId);
        
//         // SETING THE SCROLLING 
//         var interval=setInterval(function(){
//             // GETTING THE COORDINATES OF SECTION Also this function return the objects
//             // WE TAKING IT INSIDE THE FUNCTION CAUSE WE HAVE TO UPDATE IT AFTER EVERY SCROLL
//             var sectionCoordinates=targetSection.getBoundingClientRect();
//             console.log(sectionCoordinates.top);
//             if(sectionCoordinates.top<=0){
//                 clearInterval(interval);
//                 return;
//             }
//             // SCROLL WINDOW
//             window.scrollBy(0,50);
//         },50);
//     })
// }



// SKILLS TAG ANIMATION

// var progressBar=document.querySelectorAll('.skill-progress > div');
// var skillContainer=document.getElementById('skills');
// // Now handeling window scroll
// window.addEventListener('scroll',checkScroll);
// var animationDone=false;

// function intializeBars(){ // setting bar to zero
//     for(let bar of progressBar){
//         bar.style.width=0+'%';
//     }
// }
// intializeBars();
// function fillBars() {
//     for(let bar of progressBar){
//         let targetWidth=bar.getAttribute('data-bar-width');
//         let currentWidth=0;
//         let intervalW=setInterval(function(){
//             if(currentWidth>targetWidth){
//                 clearInterval(intervalW);
//                 return;
//             }
//             currentWidth++;
//             bar.style.width=currentWidth+'%';
//         },5);
//     }
// }

// function checkScroll(){
//     // check wether skill container is visible
//     var visibility=skillContainer.getBoundingClientRect();
//     if(animationDone==false && visibility.top<=window.innerHeight){// inner height is viewport height
//         animationDone=true;
//         console.log("VISIBLE");
//         fillBars(); // here animation takes place in fillbars functions
//     }
//     else if(visibility.top>window.innerHeight){
//         animationDone=false;
//         intializeBars();
//     }
// }