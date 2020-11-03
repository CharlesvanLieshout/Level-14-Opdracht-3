// function assignGrade(score) {
//     if (score > 90) {
//         return 'A';
//     } else if (score > 80) {
//         return 'B';
//     } else if (score > 70) {
//         return 'C';
//     } else if (score > 65) {
//         return 'D';
//     } else {
//         return 'F';
//     }
// }

/* Schrijf een for-loop die "iterate" van 60 tot 100. Dit is de "score" (grade)  van de student.
Voor elke loop, roep de bovenstaande functie aan met de i (grade) als argument. 
Console.log vervolgens: "Voor 91 punten, krijg je een A". 
De uitkomst is 40 regels lang. */

for (score = 60; score <= 100; score++) {
    function assignGrade(score) {
        if (score > 90) {
            return 'A';
        } else if (score > 80) {
            return 'B';
        } else if (score > 70) {
            return 'C';
        } else if (score > 65) {
            return 'D';
        } else {
            return 'F';
        }
    }
    console.log("voor " + score + " punten krijg je een " + assignGrade(score));
    
}


