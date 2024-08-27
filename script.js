function encrypt() {
    let text = document.getElementById("input-text").value;
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            charCode = ((charCode - 97 + 13) % 26) + 97;
        } else if (charCode >= 65 && charCode <= 90) {
            charCode = ((charCode - 65 + 13) % 26) + 65;
        }
        result += String.fromCharCode(charCode);
    }
    document.getElementById("result").innerText = result;
}
function decrypt() {
    let text = document.getElementById("input-text").value;
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            charCode = ((charCode - 97 - 13 + 26) % 26) + 97;
        } else if (charCode >= 65 && charCode <= 90) {
            charCode = ((charCode - 65 - 13 + 26) % 26) + 65;
        }
        result += String.fromCharCode(charCode);
    }
    document.getElementById("result").innerText = result;
}

