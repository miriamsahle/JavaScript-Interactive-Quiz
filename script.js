const correctAnswers = ['A', 'B', 'B', 'A']; //the correct answers to the quiz.
const form = document.querySelector('.quiz-form'); //quering the form tag class.
const result = document.querySelector('.result');

//when the user clicks on submit
form.addEventListener('submit', e => {
    e.preventDefault(); //prevents the default action which in this case is refreshing the page.

    let score = 0; //the user start at a score of zero.
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]; //the users index

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    // show result on the page
    scrollTo(0,0); //scrollTo method scrolls the window to where you define the x and y-coordinate, in this case we chose 0,0 to make it go all the way up.
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    // animating the score
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score) {
            clearInterval(timer);
        } else{
            output++;
        }
    }, 10); //this shows how many seconds we want it to animate, here its 10 milliseconds
});

// window object (global object)