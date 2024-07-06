const isPalindrome = (str: string): boolean => {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
};

const testStrings = ["Kasur ini rusak", "Malas", "Katak", "Malam", "Apakah palindrome?"];

testStrings.forEach(str => {
    console.log(`"${str}" ${isPalindrome(str) ? 'adalah' : 'bukan'} palindrome.`);
});
