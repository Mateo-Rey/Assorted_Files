

function isogram(str) {
    let map = {}
    if (str == '') {
        let strarr = str.split('')
        for (let i = 0; i < strarr.length; i++) {
            if (map[strarr[i]] !== strr[i]) {
                return false;
            } else {
                map[strarr[i]] = i
                
            }
        }
    }console.log(map)

}

console.log(isogram('string'))