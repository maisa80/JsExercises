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

let card1 = 4;
let card2 = 2;
let card3 = 7;
let card4 = 1;
let card5 = 11;
console.log('card 1: ', card1, 'card 2: ', card2, 'card 3: ', card3, 'card 4: ', card4, 'card 5: ', card5);
let result = card1 + card2 + card3 + card4 + card5;
console.log('Result: ', result);

/**
* Exercise 1.2 (1 points)
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

let totalCardSum = card1 + card2 + card3 + card4 + card5;
if (totalCardSum > 21) {
    status = 'busted';

    console.log(status);
} else {
    status = 'safe';

    console.log(status);
}






