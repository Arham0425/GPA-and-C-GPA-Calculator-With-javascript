// selected all item

const totalCourses = document.getElementById('courses');
const boxes = document.getElementById('boxes');
const clearBtn = document.getElementById('clear');
const calculateBtn = document.getElementById('calculate');
const totalMarks = document.getElementById('totalMark');
const grade = document.getElementById('grade');
const radioBtnOne = document.getElementById('radioOne');
const radioBtnTwo = document.getElementById('radioTwo');
let sum = 0;
let empty = [];
let countTotalPoint = 0;
// let firstField = document.getElementById('firstField');


// created a function which add item when user's provide some subject number

const addItem = (e) => {
    e.preventDefault()
    for (let i = 1; i <= Number(totalCourses.value); i++) {
        
        let fieldset = document.createElement('fieldset');
        let label = document.createElement('label');
        label.innerHTML = 'SCORE(max 100): '
        let input = document.createElement('input');
        input.setAttribute('type', 'text')
        // when user's provide number of courses then make some classes in the input tag to access the user's subject marks
        input.setAttribute('class', 'class' + i);      
        fieldset.appendChild(label)
        fieldset.appendChild(input)

        boxes.appendChild(fieldset);
    }
}

totalCourses.addEventListener('keyup', addItem);

// using this function accessed use's all subject marks
const mainFunction = (e) => {
    e.preventDefault()
    if (totalCourses.value) {
        for (let i = 1; i <= Number(totalCourses.value); i++) {
            const allClass = document.querySelector('.class' + i);            // I have accessed the new all classes
            sum += Number(allClass.value);
            empty.push(Number(allClass.value))
        }

        grade.innerHTML = permission(empty, sum);
    } else {
        alert('Provide some value.')
    }
}

// this is permission function which handle the all unnecessary input and return proper output. 
const permission = (empty, sum) => {
    for (let i = 0; i < empty.length; i++) {
        if (empty[i] > 100 || empty[i] < 0) { 
            return 'Invalid value.'
        } else if (empty[i] == '') {
            return 'Provide some value in the input field below.';
        } else if (!radioBtnOne.checked && !radioBtnTwo.checked) {
            return 'Please select the radio button.';
        } else if (empty[i] < 33) {
            return 'You are failed'
        } else if (radioBtnOne.checked) {
            if(empty[i] < 40) {
                return 'You are failed'
            } else {
                return fourPoint(sum, empty);
            }
        } else {
            return fivePoint(sum, empty);
        }
    }
    
}

// created a function which return cgpa value 
// it will be run when user click the 1st radio button
const fourPoint = (sum, empty) => {
    const average = (sum / Number(totalCourses.value));
    totalMarks.innerHTML = `TOTAL MARKS: ${sum} <br> AND AVERAGE: ${average.toFixed(2)}`
    // created a loop which check the all subject marks and count the point
    for (let i = 0; i < empty.length; i++) {
        if (empty[i] >= 40 && empty[i] < 45) {
            countTotalPoint += 2;
        } else if (empty[i] >= 45 && empty[i] < 50) {
            countTotalPoint += 2.25;
        } else if (empty[i] >= 50 && empty[i] < 55) {
            countTotalPoint += 2.50;
        } else if (empty[i] >= 55 && empty[i] < 60) {
            countTotalPoint += 2.75;
        } else if (empty[i] >= 60 && empty[i] < 65) {
            countTotalPoint += 3;
        } else if (empty[i] >= 65 && empty[i] < 70) {
            countTotalPoint += 3.25;
        } else if (empty[i] >= 70 && empty[i] < 75) {
            countTotalPoint += 3.50;
        } else if (empty[i] >= 75 && empty[i] < 80) {
            countTotalPoint += 3.75;
        } else if (empty[i] >= 80 && empty[i] <= 100) {
            countTotalPoint += 4;
        }
    }

    // countTotalPoint count the user's all point 
    // and return average point.
    // using this point program will return user's result
    let averagePoint = countTotalPoint / Number(totalCourses.value);

    if (averagePoint >= 2 && averagePoint < 2.25) {
        return `Your grade is: D <br> and Your CGPA is: ${averagePoint.toFixed(2)}`;
    } else if (averagePoint >= 2.25 && averagePoint < 2.5) {
        return `Your grade is: C <br> and Your CGPA is: ${averagePoint.toFixed(2)}`;
    } else if (averagePoint >= 2.5 && averagePoint < 2.75) {
        return `Your grade is: C+ <br> and Your CGPA is: ${averagePoint.toFixed(2)}`;
    } else if (averagePoint >= 2.75 && averagePoint < 3.00) {
        return `Your grade is: B- <br> and Your CGPA is: ${averagePoint.toFixed(2)}`;
    } else if (averagePoint >= 3.00 && averagePoint < 3.25) {
        return `Your grade is: B <br> and Your CGPA is: ${averagePoint.toFixed(2)}`;
    } else if (averagePoint >= 3.25 && averagePoint < 3.50) {
        return `Your grade is: B+ <br> and Your CGPA is: ${averagePoint.toFixed(2)}`;
    } else if (averagePoint >= 3.50 && averagePoint < 3.75) {
        return `Your grade is: A- <br> and Your CGPA is: ${averagePoint.toFixed(2)}`;
    } else if (averagePoint >= 3.75 && averagePoint < 4.00) {
        return `Your grade is: A <br> and Your CGPA is: ${averagePoint.toFixed(2)}`;
    } else if (averagePoint >= 4) {
        return `Your grade is: A+ <br> and Your CGPA is: 4`;
    }

}

// created a function which return gpa value
// it will be run when user click the second radio button 
const fivePoint = (sum, empty) => {
    const average = (sum / Number(totalCourses.value));
    totalMarks.innerHTML = `TOTAL MARKS: ${sum} <br> AND AVERAGE: ${average.toFixed(2)}`
    // created a loop which check the all subject marks and count the point
    for (let i = 0; i < empty.length; i++){
        if (empty[i] >= 33 && empty[i] < 40) {
            countTotalPoint += 1;
        } else if (empty[i] >= 40 && empty[i] < 50) {
            countTotalPoint += 2;
        } else if (empty[i] >= 50 && empty[i] < 60) {
            countTotalPoint += 3;
        } else if (empty[i] >= 60 && empty[i] < 70) {
            countTotalPoint += 3.5;
        } else if (empty[i] >= 70 && empty[i] < 80) {
            countTotalPoint += 4;
        } else if (empty[i] >= 80 && empty[i] <= 100) {
            countTotalPoint += 5;
        }
    }

    // countTotalPoint count the user's all point 
    // using this point program will return user's result
    let averagePoint = (countTotalPoint - 2) / ((Number(totalCourses.value)) - 1);
    console.log(averagePoint)

    if (averagePoint >= 1 && averagePoint < 2) {
        return `Your grade is: D <br> and Your GPA is: ${averagePoint.toFixed(2)}`;
    } else if (averagePoint >= 2 && averagePoint < 3) {
        return `Your grade is: C <br> and Your GPA is: ${averagePoint.toFixed(2)}`;
    } else if (averagePoint >= 3 && averagePoint < 3.5) {
        return `Your grade is: B <br> and Your GPA is: ${averagePoint.toFixed(2)}`;
    } else if (averagePoint >= 3.5 && averagePoint < 4) {
        return `Your grade is: A- <br> and Your GPA is: ${averagePoint.toFixed(2)}`;
    } else if (averagePoint >= 4 && averagePoint < 5) {
        return `Your grade is: A <br> and Your GPA is: ${averagePoint.toFixed(2)}`;
    } else if (averagePoint >= 5) {
        return `Your grade is: A+ <br> and Your GPA is: 5`;
    }
    
}

calculateBtn.addEventListener('click', mainFunction)


// remove item
const removeItem = (e) => {
    e.preventDefault()

    totalMarks.innerHTML = 'Total Marks: <br> Average:';
    grade.innerHTML = 'GRADE: <br> gpa or cgpa: ';
    radioBtnOne.checked = false;
    radioBtnTwo.checked = false;
    // when click the clear button then value of the sum and countTotalPoint will be zero 
    // and empty array value will be null 
    sum = 0;
    empty = [];
    countTotalPoint = 0;
    for (let j = 0; j < Number(totalCourses.value); j++){
        boxes.removeChild(boxes.childNodes[j])
    }
    totalCourses.value = '';
    
}

clearBtn.addEventListener('click', removeItem);