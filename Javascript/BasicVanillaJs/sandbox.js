// sample function
function solve(string) {
    string = string.split("");
    let answer = 0;

    for(let index of string) {
        if(index === "0" || index === "6" || index === "9")
            answer += 6;
        else if(index === "1") 
            answer += 2;
        else if(index === "2" || index === "3" || index === "5") 
            answer += 5;
        else if(index === "4")
            answer += 4;
        else if(index === "7") 
            answer += 3;
        else if(index === "8") 
            answer += 7;
    }
    return answer;
}


// gets the input
let form = document.getElementById('myForm');

form.addEventListener('submit', function(e) {
    let textArea = document.getElementById('field');
    let input = textArea.value;
    let answer = solve(input);
    document.getElementById("result").innerHTML += answer + " leds<br>  ";
    e.preventDefault();
});



