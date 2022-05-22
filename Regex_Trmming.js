const text = '	The quick brown fox...'
// Capture	   jumps over the lazy dog.

const regex = /^\s*(.*)\s*$/

console.log( text.match(regex)[1] ) // The quick brown fox...