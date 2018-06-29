import "./style.scss";

//import hover from "./print.js";
//console.log(hoverDiv);

let course = document.getElementsByClassName("course");
let courseTrans = document.getElementsByClassName("course__trans");
let hoverDiv = document.getElementsByClassName("course__hoverDiv");
let fontH2 = document.getElementsByTagName("h2");

let test = document.querySelectorAll("div.course__trans");
console.log(fontH2);
console.log(test);

let length = test.length;
//console.log(length);

//let count = 1;
//course[0].setAttribute("counter", count);
//console.log(course[0].getAttribute("counter"));

/*course[0].setAttribute("counter", count);
let courseAtt = course[0].getAttribute("counter");
console.log(courseAtt);*/

function setCount() {
  let count = 0;
  let a = [];
  for (let i = 0; i < length; i++) {
    courseTrans[i].setAttribute("counter", count);
    a.push(courseTrans[i].getAttribute("counter"));
    count++;
  }
  return a;
}

setCount();

document.onmouseover = function(event) {
  let target = event.target;
  let attr = target.getAttribute("counter");
  /*console.log(target);
  console.log(attr);*/
  for (let i = 0; i < length; i++) {
    if (i == attr) {
      hoverDiv[i].style.display = "block";
      if (i === 0) {
        fontH2[i + 1].style.color = "#8cc34b";
        fontH2[i].style.color = "#8cc34b";
      } else {
        fontH2[i * 2].style.color = "#8cc34b";
        fontH2[i * 2 + 1].style.color = "#8cc34b";
      }
    } else {
      hoverDiv[i].style.display = "none";
      if (i === 0) {
        fontH2[i + 1].style.color = "black";
        fontH2[i].style.color = "black";
      } else {
        fontH2[i * 2 + 1].style.color = "black";
        fontH2[i * 2].style.color = "black";
      }
    }
  }
};

/*function poisk() {
  for (let i = 0; i < test.length; i++) {
    test[i].addEventListener("mouseover", hover);
    test[i].addEventListener("mouseout", hide);
  }
}

poisk();*/

//console.log(course[0].getAttribute("counter"));
//console.log(course[1].getAttribute("counter"));
//console.log(course[2].getAttribute("counter"));
//console.log(wrapper);

/*table.onmouseover = function (event) {
  var target = event.target;
  target.style.background = 'pink';
};
*/

/*wrapper[0].addEventListener("mouseover", check);
function check() {
  let a = event.target.className;
  if (a == "course__trans") {
    /*for (let i=0; i<length; i++){
      if()
    }
  }
  //a[0].getAttribute("counter");
  //console.log(a);
}*/

//course[0].addEventListener("mouseover", hover);

//course[0].addEventListener("mouseout", hide);

/*function hover(i) {
  hoverDiv[i].style.display = "block";
  fontH2[i].style.color = "#8cc34b";
}

function hide(i) {
  hoverDiv[i].style.display = "none";
  fontH2[i].style.color = "black";
}*/

/*if (course.onmouseover) {
  let hoverDiv = document.getElementsByClassName("course__hoverDiv");
  hoverDiv[0].style.display = "block";
}*/
