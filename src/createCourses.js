export { createCourse };

function createCourse(title, text, duration, background) {
  return `
    
        <div class="course__trans"></div>
        <div class="course__img"></div>
        <div class="course__hoverDiv"></div>
        <div class="course__wrapper">
            <div class="course__wrapper__text">
                <h2 class="title">${title}</h2>
                <p>${text}</p>
            </div>
        <div class="course__duration">
            <div class="course__duration__img"></div>
            <p>${duration}</p>
        </div>
        <div class="course__check check">
            <div class="course__check__box"></div>
            <h2>Посмотрел</h2>
        </div>
        </div>
    
`;
}
