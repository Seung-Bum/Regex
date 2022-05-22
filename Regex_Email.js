// Capture	tom@hogwarts.com
// Capture	tom.riddle@hogwarts.com
const email = 'tom.riddle+regexone@hogwarts.com'
// Capture	tom@hogwarts.eu.com
// Capture	potter@hogwarts.com
// Capture	harry@hogwarts.com
// Capture	hermione+regexone@ho.gwarts.com

const regex = /^([\w\.\+]*)/ // => 안에다가 포함하고 싶은 문자를 더 넣으면 된다.
const regexAll = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+/

console.log( email.match(regex)[0] ) // tom.riddle+regexone
console.log( email.match(regexAll)[0] ) // tom.riddle+regexone@hogwarts.com