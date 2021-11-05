
export const MyClass, {
    const randomizeOrder = () => {
        let myIndex = Math.floor(Math.random() * 5); // randomized index for correct answer, 1-4
        let xhr = new XMLHttpRequest();
        xhr.open('GET', '../../questionList.html')
        // how to load one question at a time?
        let current = 1;
        xhr.onreadystatechange = () => { // onload?
            let currentQuestion = document.getElementById('q' + current.toString());
            // split contents based on newline?
            let i = 1;
            while (i < 5) { // for each of the four answer choices
                if (i == myIndex) {
                    // assign the correct answer choice to the randomly generated index
                } else {
                    // assign the other answer choices to the remaining answer choice indices
                }
                i++;
            }
            if (current < 5) { // total number of questions
                current++;
            }
        };
    }
}

