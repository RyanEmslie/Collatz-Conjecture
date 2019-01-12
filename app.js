let steps = [];
let count = 0;

class UI {
    static equation(start) {
        const oddFunc = odd => 3 * odd + 1;
        const evenFunc = even => even / 2;

        const alg = startNum =>
            startNum % 2 == 0 ? evenFunc(startNum) : oddFunc(startNum);

        let result = alg(start);

        if (result == 1) {
            steps.push(result);
        } else {
            steps.push(result);
            UI.equation(result);
        }
    }

    static displayNumbers(step) {
        count += 1;
        document.querySelector(
            "#displayTotalSteps"
        ).innerHTML = `Total number of steps: ${steps.length}`;
        const list = document.querySelector("#number-list");
        const row = document.createElement("tr");
        row.innerHTML = `<td>${count}</td><td>${step}</td>`;
        list.appendChild(row);
    }

    // resets array to zero on new submit
    static resetStepArray() {
        steps.length = 0;
        count = 0;
    }

    // while tb has children, remove the first one
    static deleteRows() {
        let tb = document.querySelector("tbody");
        while (tb.childNodes.length) {
            tb.removeChild(tb.childNodes[0]);
        }
    }

    // retrieves value from form
    // validates for only positive integers and sends to equation
    static submittedNumber() {
        let enteredNum = document.querySelector("#startNumber").value;
        enteredNum = parseInt(enteredNum);
        console.log(enteredNum);
        console.log(typeof enteredNum);
        if (isNaN(enteredNum)) {
            document.querySelector(
                "#displayTotalSteps"
            ).innerHTML = `Please enter a postive integer`;
        } else if (enteredNum < 1) {
            document.querySelector(
                "#displayTotalSteps"
            ).innerHTML = `Please enter a postive integer`;
        } else {
            UI.equation(enteredNum);
        }
        document.querySelector("#startNumber").value = " ";
    }
}

document.querySelector("#displayForm").addEventListener("submit", e => {
    e.preventDefault();

    UI.resetStepArray();

    UI.deleteRows();

    UI.submittedNumber();

    steps.forEach(step => UI.displayNumbers(step));
});
