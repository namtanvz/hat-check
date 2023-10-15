document.getElementById('derangement-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let n = parseInt(document.getElementById('number-input').value);

    if (isNaN(n)) {
        alert("Please enter a valid integer.");
        return;
    }

    let result = derangements(n);
    document.getElementById('result').innerText = 'Result: ' + result.toString();
});

function derangements(n) {
    if (n <= 1) {
        return bigInt(0);
    }
    
    let T = Array.from({ length: n + 1 }).map(() => bigInt(0));
    T[1] = bigInt(0);
    T[2] = bigInt(1);

    for (let i = 3; i <= n; i++) {
        T[i] = bigInt(i - 1).multiply(T[i - 1].add(T[i - 2]));
    }

    return T[n];
}
