function calculate(num1: number, num2:number, operator: String):void{
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
calculate(1,2,'+');

interface Student{
    name: string,
    score: number
}


export const students: Student[] = [
    {name: "Doan", score: 80},
    {name: "Tien", score: 91},
    {name: "Hien", score: 70},
    {name: "Be", score: 100},
    {name: "Ba", score: 90}
];

const getAboveThreshold = (students: Student[], threshold: number) => {
    const newStudentsList = students.filter(students => students.score > threshold)
    return newStudentsList;
}

const getAverageScore = (students: Student[]) => {
    const ave = students.reduce(((sum, cur) => sum + cur.score), 0) / students.length
    return ave;
}
console.log(getAboveThreshold(students, 90));
console.log(getAverageScore(students));