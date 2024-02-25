function toTitleCase(str: string): string {
    return str.replace(/\b\w/g, (char: string) => char.toUpperCase());
}

let personName = "daim naim"

let lowercasePersonName = personName.toLowerCase();
let uppercasePersonName = personName.toUpperCase();
let titlecasePersonName = toTitleCase(personName);

console.log(lowercasePersonName + "\n" + uppercasePersonName + "\n" + titlecasePersonName );