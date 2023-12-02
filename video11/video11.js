// The for statement creates a loop with 3 optional expressions:
// Expression 1 is executed (one time) before the execution of the code block.

//Expression 2 defines the condition for executing the code block.

//Expression 3 is executed (every time) after the code block has been executed.
// note moi expression cach nhau bang dau ;(separated by comma)

//USING LET IN LOOP
// Number
for (let i = 0; i<=10; i++) {console.log('check variable i=', i)}
// String
let cars = ['BMW', 'Volvo', 'Saab', 'Ford']
for (let i = 0; i <= cars.length; i++) {console.log('check variable cars:', cars[i ])}

//USING VAR IN LOOP: khong phan biet number hay string
// Number var 
for (var i = 10; i<=10; i++) {console.log('check variable i=', i)}
console.log('check value i', i)

