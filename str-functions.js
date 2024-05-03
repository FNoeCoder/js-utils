
function deleteSpaces(str) {
    return str.replace(/\s/g, '');
}

function deleteAllCharacters(str, char) {
    return str.replace(new RegExp(char, 'g'), '');
}

function capitalizeWords(str) {
    let words = str.split(' ');
    words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    return words.join(' ');
}
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}



const functions = {
    deleteSpaces,
    deleteAllCharacters,
    capitalizeWords,
    capitalizeFirstLetter
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    // Node.js (CommonJS)
    module.exports = functions;
} else {
    //web (ES6)
    window.stringFunctions = functions;
}