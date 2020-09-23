// JS -> Single-Thread -> At any given point in time, JS will run one line of script

/* Think: If JS is single-threaded, how JS will remember to call callback function of window.setTimeout after a deley? */
/* Answer: That's true JS is single-threader but browsers engines aren't(V8, SpiderMonkey, etc)
Browsers are written with C++ and JS let to engines handle this things.
 */

/* THINK: What if we have some action that take time to response
like reuqest to server, we must block user to get response? */
/* Answer: We use asynchorounos programming to handle this(With the help of callbacks) */
// Basiclly Web API handle asynchonous actions like async, promises, etc