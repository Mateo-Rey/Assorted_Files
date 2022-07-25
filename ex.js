function firstNonRepeatingLetter(s) {
    let valuemap = {}
    let result = ''
    let splitarray = s.split('')
    for (let i = 0; i < splitarray.length; i++) {
        if (valuemap[splitarray[i]] !== true) {
            valuemap[splitarray[i]] = i
    } 
    console.log(valuemap)
}
const [[lowestKey, lowestVal]] = Object.entries(valuemap).sort(function ([,valA], [,valB]) { return valA - valB });
return lowestKey;
}

console.log(firstNonRepeatingLetter('22ssesdddss'))