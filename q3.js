function toTitleCase(str) {
    return str.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
}
var personName = "Daim Naim";
var lowercasePersonName = personName.toLowerCase();
var uppercasePersonName = personName.toUpperCase();
var titlecasePersonName = toTitleCase(personName);
console.log(lowercasePersonName + "\n" + uppercasePersonName + "\n" + titlecasePersonName);
