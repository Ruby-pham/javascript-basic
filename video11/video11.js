// The for statement creates a loop with 3 optional expressions:
// Expression 1 is executed (one time) before the execution of the code block. khoi tao gia tri

//Expression 2 defines the condition for executing the code block. dieu kien

//Expression 3 is executed (every time) after the code block has been executed.
// note moi expression cach nhau bang dau ;(separated by comma)

//USING LET IN LOOP
// Number
for (let i = 0; i<=10; i++) {console.log('check variable i=', i)}
// String
// neu lay i=0 ma i<= thi se xuat hien 1 bien undefined vi k co bien 4, neu muon khong co undefined thi cho i<
let cars = ['BMW', 'Volvo', 'Saab', 'Ford']
for (let i = 0; i <= cars.length; i++) {console.log('check variable cars:', cars[i ])}

//USING VAR IN LOOP: khong phan biet number hay string
// Number var 
for (var i = 10; i<=10; i++) {console.log('check variable i=', i)}
console.log('check value i', i)

