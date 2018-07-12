import "./style.scss";
import { createCourse } from "./createCourses.js";

let hoverDiv = document.getElementsByClassName("course__hoverDiv");
let title = document.getElementsByClassName("title");
let test = document.querySelectorAll("div.course__trans");

let course = document.getElementsByClassName("course");
let lengthCourse = course.length;

let wrapper = document.getElementById("wrapper__course");
let button = document.getElementById("button");

button.onclick = function() {
  fetch("http://localhost:3000/courses", {
    method: "GET"
  })
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      response.json().then(function(data) {
        for (let i = 0; i < data.length; i++) {
          let newDiv = document.createElement("div");
          newDiv.setAttribute("class", "course");
          console.log(data[i].background);
          newDiv.innerHTML = createCourse(
            data[i].title,
            data[i].text,
            data[i].duration,
            data[i].background
          );

          wrapper.insertBefore(
            newDiv,
            wrapper.children[wrapper.children.length - 1]
          );

          course[i].style.backgroundImage = "url(" + data[i].background + ")";
        }

        setCount();
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
};

function setCount() {
  let course = document.getElementsByClassName("course");
  let lengthCourse = course.length;
  let count = 0;
  let a = [];
  for (let i = 0; i < lengthCourse; i++) {
    course[i].setAttribute("counter", count);
    a.push(course[i].getAttribute("counter"));
    count++;
  }
  return a;
}

document.onmouseover = function(event) {
  let target = event.target;
  let div = target.parentNode;
  let divClass = div.className;

  if (divClass === "course") {
    let attr = div.getAttribute("counter");
    hoverDiv[attr].style.display = "block";
    title[attr].style.color = "#8cc34b";
  }
};

document.onmouseout = function(event) {
  let target = event.target;
  let div = target.parentNode;
  let divClass = div.className;
  if (divClass === "course") {
    let attr = div.getAttribute("counter");
    hoverDiv[attr].style.display = "none";
    title[attr].style.color = "black";
  }
};

document.onclick = function(e) {
  let target = event.target;
  let div = target.parentNode;
  let divClass = div.className;

  if (divClass === "course") {
    let attr = div.getAttribute("counter");
    let check = document.getElementsByClassName("check");
    let checkBox = document.getElementsByClassName("course__check__box");

    checkBox[attr].style.background = "#8cc34b";
    checkBox[attr].style.backgroundImage = "url('user.svg')";
    checkBox[attr].style.border = "2px solid #8cc34b";

    course[attr].style.background = "#edf5e3";
    check[attr].style.background = "#e7f0db";
    course[attr].style.transformOrigin = "0% 50%";

    let start = Date.now();
    let timer = setInterval(function() {
      let timePassed = Date.now() - start;
      if (timePassed >= 2000) {
        clearInterval(timer);
        course[attr].style.display = "none";
        let wrapperH = document.getElementById("wrapper__course").clientHeight;
        if (wrapperH === 350) {
          let done = document.getElementById("done");
          done.style.display = "block";
          wrapper.style.display = "flex";
        }
        return;
      }
      draw(timePassed);
    }, 20);
    function draw(timePassed) {
      let time = 1 - timePassed / 2000;
      let margin = 20 - timePassed / 6.2;
      course[attr].style.transform = `scaleX(${time})`;
      course[attr].style.marginRight = margin + "px";
    }
  }
};
