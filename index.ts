import inquirer from 'inquirer'

// Asking for roll number
let roll=await inquirer.prompt({
    type:'number',
    name:'num1',
    message:"Please enter your roll no"
})
//  Roll number
let RollNumber:number=roll.num1;

//checking roll no

if(RollNumber==323245){

    let marks=await inquirer.prompt([
        {
            type:'number',
            name:'typescript',
            message:"Enter typescript Number"
        },
        {
            type:'number',
            name:'python',
            message:"Enter python score"
        },
        {
            type:'number',
            name:'java',
            message:'Enter java score'
        }
    ])

    let ts:number=marks.typescript;
    let py:number=marks.python;
    let ja:number=marks.java;

    let totalMarks:number=300;
    let obtainMarks:number=ts+py+ja;
    let percent:number=(obtainMarks/totalMarks) *100;
    console.log(`Your percentage is ${percent}`)
}else{
    console.log("Invalid Number")
}

