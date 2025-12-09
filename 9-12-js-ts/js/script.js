const caculate = function(num1, num2, operator){
    let result = 0;
    switch(operator){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if(num2 == 0){
                alert("Invalid value");
                return;
            }
            result = num1 / num2;
            break;
    }
    console.log(result);
}


const students = [
    {name: "Doan", score: 80},
    {name: "Tien", score: 91},
    {name: "Hien", score: 70},
    {name: "Be", score: 100},
    {name: "Ba", score: 90}
];

const getAboveThreshold = (students, threshold) => {
    const newStudentsList = students.filter(students => students.score > threshold)
    return newStudentsList;
}

const getAverageScore = (students) => {
    const ave = students.reduce(((sum, cur) => sum + cur.score), 0) / students.length
    return ave;
}
caculate(1, 2, '-');
console.log(getAboveThreshold(students, 80));
console.log(getAverageScore(students));