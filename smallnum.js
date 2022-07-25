function nextSmaller(n) {
    let narr = n.split('')
    let res = []
    for (let i = 0; i < narr; i++) {
        if (n.length < 2) {
            return -1;
        }
        else if (n[0] < n[/[1-2]/]) {
        return -1; 
    }   else if (n[1] < n[0] < n[2]) {
        res.push(n[1]); res.push(n[0]); res.push(n[2])
    }   else if (n[2] < n[1] < n[0]) {
        res.push(n[2]); res.push(n[1]); res.push(n[0])
    }
  }
}