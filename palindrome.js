var isPalindrome = function (str) {
    var cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    var reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
};
var testStrings = ["Kasur ini rusak", "Malas", "Katak", "Malam", "Apakah itu palindrome?"];
testStrings.forEach(function (str) {
    console.log("\"".concat(str, "\" ").concat(isPalindrome(str) ? 'adalah' : 'bukan', " palindrome."));
});
