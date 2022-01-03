/**
 * Exercise 1
 *
 * Create five variables: `card1, card2, card3, card4, card5`.
 *
 * Assign the values `4, 2, 7, 1, 11` to the variables created above.
 *
 * Add them up and put the sum in a variable called `result`.
 *
 * Answer with the variable `result`.
 *
 */
 console.log('***** Exercise 1 *****');
let card1 = 4;
let card2 = 2;
let card3 = 7;
let card4 = 1;
let card5 = 11;
console.log('card 1: ', card1, 'card 2: ', card2, 'card 3: ', card3, 'card 4: ', card4, 'card 5: ', card5);
let result = card1 + card2 + card3 + card4 + card5;
console.log('Result: ', result);

/**
* Exercise 2
*
* Use an `if statement` to see if the five cards (card1-card5) have a
* combined sum that is higher than 21.
*
* Create a variable `status` and give it a different value depending on the
* following.
*
* * If the sum is higher than 21, give your variable the value `"busted"`.
* * Else give it the value `"safe"`.
*
* Answer with your status-variable.

*/
console.log('***** Exercise 2 *****');
let totalCardSum = card1 + card2 + card3 + card4 + card5;
if (totalCardSum > 21) {
    status = 'busted';

    console.log(status);
} else {
    status = 'safe';

    console.log(status);
}

/**
 * Exercise 3
 *
 * Use `if else statements` to see if the combined value of the first three
 * cards (card1-card3) is lower, higher or exactly 21.
 *
 * Answer with a string corresponding to the result:
 * lower = `"safe"`
 * higher = `"busted"`
 * 21 = `"black jack"`
 *
 * Store the response in your status-variable and answer with it.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
 console.log('***** Exercise 3 *****');
 totalCardSum = card1 + card2 + card3;
 if (totalCardSum < 21) {
     status = 'safe';
     console.log(status);
 } else if (totalCardSum > 21) {
     status = 'busted';
     console.log(status);
 } else {
     status = 'black jack';
     console.log(status);
 }

 /**
 * Exercise 4
 *
 * Create three variables: `dealer1, dealer2, dealer3`.
 *
 * Assign the values `1, 6, 7` to the variables.
 *
 * Combine the `if`, `else if`, `else` statements and the operator `AND (&&)`
 * to see what the dealer should do. Combine as you feel needed.
 *
 * If the sum of the dealercards is lower than 17, answer with `"pick"`, if
 * the sum is higher than or equal to 17 and lower than 21 answer with
 * `"stop"`. If the sum is 21 answer with `"black jack"`. If the sum is higher
 * than 21 answer with `"busted"`.
 *
 * Store the response in a variable.
 
 *
 
 */

  console.log('***** Exercise 4 *****');
let dealer1 = 1;
let dealer2 = 6;
let dealer3 = 7;

totalCardSum = dealer1 + dealer2 + dealer3;

if (totalCardSum < 17) {
	status = 'pick';
    console.log(status);
} else if (totalCardSum >= 17 && totalCardSum < 21) {
	status = 'stop';
    console.log(status);
} else if (totalCardSum === 21) {
	status = 'black jack';
    console.log(status);
} else {
	status = 'busted';
    console.log(status);
}




