function calculateGrade(score){
    if(typeof score !=="number" || score<0 || score>100){
        return "invalid score";
    }
    if(score>=90){
        return "A";
    }
    if(score>=80){
        return"B";
    }
    if(score>=70){
        return"C";
    }
    if(score>=60){
        return"D";
    }
    else{
        return"F";
    }
}
function checkAccess(age , hasTicket){
    if(typeof age!=="number" || typeof hasTicket !=="boolean"){
        return false;
    }
    return age>= 18 && hasTicket== true;
}
console.log("Grade 90 : " ,calculateGrade(90));
console.log("Grade 89 : " ,calculateGrade(89));
console.log("Grade 0 : " ,calculateGrade(0));
console.log("Grade 100 : " ,calculateGrade(100));
console.log("Grade 55:", calculateGrade(55));
console.log("Grade -9:", calculateGrade(-9));
console.log("Grade 101:", calculateGrade(101));
console.log("Grade abc : " ,calculateGrade("abc"));

console.log("Access 20 , true" , checkAccess(20, true));
console.log("Access 20 , false" , checkAccess(20, false));
console.log("Access 17 , true" , checkAccess(17, true));