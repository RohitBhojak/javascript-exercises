const palindromes = function (str) {
    const alphanum = "abcdefghijklmnopqrstuvwxyz0123456789";
    let left = 0, right = str.length - 1;
    while (left < right) {
        while (left < right && !alphanum.includes(str.charAt(left).toLowerCase())) left++;
        while (left < right && !alphanum.includes(str.charAt(right).toLowerCase())) right--;
        if (str.charAt(left).toLowerCase() !== str.charAt(right).toLowerCase()) return false;
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
