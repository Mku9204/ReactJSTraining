//if else
 let marks=prompt('Enter the marks');
console.log(marks)

// if (marks >=90) {
//     console.log("Exillent :- ",marks)
// } else if(marks <= 90 && marks>=80){
//     console.log("Good :- ",marks);
// }else{
//     console.log('passes :- ',marks)
// }

//switch cases
switch(marks){
    case(marks=90):
    console.log("Exillent :-",marks);
    break;
    case(marks=80):
    console.log("Good :- ",marks);
    break;
    default:
        console.log("Passes :-",marks);
}