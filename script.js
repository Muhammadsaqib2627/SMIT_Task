
document.getElementById("student-data").addEventListener('submit', (Event) => {
    Event.preventDefault();
    const rollNo = document.getElementById("roll-no").value;
    const name = document.getElementById("name").value;
    const batch = document.getElementById("batch").value;
    const section = document.getElementById("section").value;

    const data = {
        rollNo: rollNo,
        Name: name,
        Batch: batch,
        Section: section
    };

    const actualData = JSON.stringify(data);
    console.log(actualData);
    sessionStorage.setItem("studentDetails", actualData);
    alert("student details has been stored in session");

    document.getElementById("student-data").reset();

});

function submitQuiz() {
    var correctAnswers = {
        q1: 'a',
        q2: 'a'
    };

    var selectedAnswers = {};
    var form = document.getElementById('quizForm');
    var totalMarks = 0;

    // Retrieve selected answers
    for (var i = 0; i < form.elements.length; i++) {
        var element = form.elements[i];
        if (element.type === 'radio' && element.checked) {
            selectedAnswers[element.name] = element.value;
        }
    }

    // Compare selected answers with correct answers
    for (var question in selectedAnswers) {
        if (selectedAnswers.hasOwnProperty(question)) {
            if (selectedAnswers[question] === correctAnswers[question]) {
                totalMarks++;
            }
        }
    }

    // Display total marks
    document.getElementById('result').innerText = 'Total Marks: ' + totalMarks;

    // Store marks in Session Storage
    sessionStorage.setItem('quizMarks', totalMarks);
}

