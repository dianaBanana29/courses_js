import courseData from './config/courseData.json'
import { getRandomCourse } from './utils/randomCourse.js';
const N_COURSES = 100;
function createCourses(){
    const courses = [];
    for(let i = 0; i < N_COURSES; i++ ){
        courses.push(getRandomCourse(courseData))
    }
    return courses;
}
console.log(courseData.maxCost)
//TODO rendering inside UI, using map, json.stringify
function goToHtml() {
    const result = document.getElementById('courses')
    const result2 = createCourses()
    result.innerHTML = result2.map(p=> `<li>${JSON.stringify(p)}</li>`).join('')
}  
goToHtml()