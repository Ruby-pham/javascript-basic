// key=value
let a = {};
let b = 'Eric';
console.log('typeof a: ', typeof a, 'typeof b: ', typeof b)

// option 1
let obj = {name: 'Ngoc', address_vn: 'HCM', email: 'rubypham955@gmal.com'}
   
console.log('where are you from: ', `I'm from`, obj.address_vn)
console.log('what is your email: ', `my email's`, obj.email)

// option 2
let c = 'name'
obj[c] = 'ruby'
console.log('what your name: ', `my name's`, obj['name'])

// option 3
let d = 'address'
obj.address = 'HCM'
console.log('where are you from: ', `I'm from`, obj['address'], obj)

