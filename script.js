document.getElementById('derangement-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let n = parseInt(document.getElementById('number-input').value);

    if (isNaN(n)) {
        alert("Please enter a valid integer.");
        return;
    }

    let result = derangements(n);
    document.getElementById('result').innerText = 'Result: ' + result;
});

function derangements(n) {
    if (n <= 1) {
        return 0;
    }
    let T = Array(n + 1).fill(0);
    T[1] = 0;
    T[2] = 1;
    for (let i = 3; i <= n; i++) {
        T[i] = (i - 1) * (T[i - 1] + T[i - 2]);
    }
    return T[n];
}
