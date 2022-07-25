const mirror = obj => {
    let mirrorOBJ = {
    }
    let strobj = obj.toString()
    console.log(strobj)
    let objArr = strobj.split('')
    let mirrorkey = objArr.reverse()
    let mirrorstr = mirrorkey.join('')
    mirrorOBJ[obj] = mirrorstr
    return mirrorOBJ;
    };
let hey = {}
console.log(hey)