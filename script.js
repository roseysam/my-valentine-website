const correctCode = '161224'; // Example access code

const correctAnswers = {
    q1: ['food', 'sleep'], // Accepting either 'food' or 'sleep' as correct answers
    q2: 'anxiety',
    q3: 'fish',
    q4: 'none'
};

function checkAccessCode() {
    const accessCode = document.getElementById('accessCode').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    if (accessCode === correctCode) {
        document.getElementById('accessCodeSection').style.display = 'none';
        document.getElementById('questionSection').style.display = 'block';
        errorMessage.textContent = ''; // Clear error message
    } else {
        errorMessage.textContent = 'Incorrect Access Code. Please try again.'; // Show error message
    }
}

function checkAnswers() {
    const answers = {
        q1: document.getElementById('q1').value.trim().toLowerCase(),
        q2: document.getElementById('q2').value.trim().toLowerCase(),
        q3: document.getElementById('q3').value.trim().toLowerCase(),
        q4: document.getElementById('q4').value.trim().toLowerCase()
    };

    // Check if the answer for Question 1 matches either 'food' or 'sleep'
    if (
    (correctAnswers.q1.includes(answers.q1)) &&
    answers.q2 === correctAnswers.q2 &&
    answers.q3 === correctAnswers.q3 &&
    answers.q4 === correctAnswers.q4
    ) {
        document.getElementById('questionSection').style.display = 'none';
        document.getElementById('letterSection').style.display = 'block';
        document.getElementById('letterContent').style.display = 'block'; // Show the letter after correct answers
    } else {
        alert('Some answers are incorrect. Please try again.');
    }
}

// Function to open envelope and slide out letter
document.getElementById('envelope').addEventListener('click', function () {
    // Open the envelope
    document.getElementById('flap').style.transform = 'rotateX(0deg)';

    // Display the letter and animate it sliding out
    setTimeout(function () {
        document.getElementById('letterContent').style.display = 'block';
    }, 1000); // Letter slides out after 1 second (flap opening duration)
});
