let a = 5
let b = 5
// su dung == de so sanh hai number -> se la true
console.log('compare a vs b:', 'a=', a, 'b=', b, 'result', a == b)

let c = 5
let d = '5'
// su dung == de so sanh number vs tring -> cung se la true
console.log('compare c vs d:', 'c=', c, 'd=', d, 'result', c == d)

let e = 5
let f = 5
// su dung === de so sanh hai number -> se la true
console.log('compare e vs f:', 'e=', e, 'f=', f, 'result', e === f)

let g = 5
let h = '5' 
// su dung === de so sanh number vs tring -> se la fail
console.log('compare g vs h:', 'g=', g, 'h=', h, 'result', g === h) 
// note: == lay gia tri de so sanh, === lay dung kieu de so sanh


//Empty, null, undefined
//Empty gia tri rong nhung van duoc luu lai
let t = {}
console.log('check value,', 'type of t:', typeof t, t)
//null khong co gia tri va khong duoc luu lai
let n = null
console.log('check value', 'type of n:', typeof n, n)
//undefined khong gan gia tri
let m
console.log('check value', 'type of m:', typeof m, m)
