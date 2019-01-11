const steps = [];

const equation = function(start) {
    const oddFunc = odd => 3 * odd + 1;
    const evenFunc = even => even / 2;

    const alg = startNum =>
        startNum % 2 == 0 ? evenFunc(startNum) : oddFunc(startNum);

    let result = alg(start);
    // console.log(result);

    if (result == 1) {
        steps.push(result);
    } else {
        steps.push(result);
        equation(result);
    }
};

class UI {
    static displayNumbers(step) {
        // console.log(`steps`, steps);
        const list = document.querySelector("#number-list");
        const row = document.createElement("tr");
        row.innerHTML = `<td>${step.index}</td><td>${step}</td>`;
        list.appendChild(row);
    }

    // static clearFields() {
    //     document.querySelector("#startNumber").value = 0;
    // }
}

//
//! Event - Submit number
//
document.querySelector("#displayForm").addEventListener("submit", e => {
    e.preventDefault();
    let enteredNum = document.querySelector("#startNumber").value;
    enteredNum = parseInt(enteredNum);
    equation(enteredNum);
    console.log(`steps`, steps);
    steps.forEach(step => UI.displayNumbers(step));
});
