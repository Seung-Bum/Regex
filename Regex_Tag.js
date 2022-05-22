const capture = '<a>This is a link</a>'
const capture1 = '<a href=\'https://regexone.com\'>Link</a>'
// Capture	<div class='test_style'>Test</div>
// Capture	<div>Hello <span>world</span></div>

const regex = /='([\w://.]*)'/
console.log( capture1.match(regex)[1] ) // https://regexone.com

const regex1 = />([\w\s]*)</
console.log( capture1.match(regex1)[1] ) // Link

const regex2 = /<(\w+)/
console.log( capture1.match(regex2)[1] ) // a