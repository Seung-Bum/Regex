const pNum = '415-555-1234'
// Capture	650-555-2345
// Capture	(416)555-3456
// Capture	202 555 4567
// Capture	4035555678	403	
// Capture	1 416 555 9292

const regex = /\d{2,3}[-.]\d{3}[-.]\d{4}/
const regexAll =/1?[\s-]?\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/ // 모든 유형

console.log( pNum.match(regex)[0] ) // 415-555-1234
