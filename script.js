function add() {
    let input = document.getElementById("inputBox").value;

    // Split values using comma
    let numbers = input.split(",");

    let num1 = parseFloat(numbers[0]);
    let num2 = parseFloat(numbers[1]);

    let result = num1 + num2;

    document.getElementById("resultBox").value = result;
}
