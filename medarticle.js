const replace = (string, pattern, rep) => {
let repString = string.replace(pattern, rep)
return repString;
}
console.log(replace('Hello World',/o/g, 'O'))