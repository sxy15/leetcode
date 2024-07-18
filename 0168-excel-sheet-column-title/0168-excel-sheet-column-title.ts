var convertToTitle = function (columnNumber) {
    let ans = "";

    while (columnNumber > 0) {
        columnNumber--;
        // Get the last character and append it at the end of string.
        ans = String.fromCharCode((columnNumber % 26) + "A".charCodeAt(0)) + ans;
        columnNumber = Math.floor(columnNumber / 26);
    }

    return ans;
};