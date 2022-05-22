const regex = /(\w+):\/\/([\w\-\.]+)(:(\d+))?/
const regex1 = /(https?:\/\/)?(www\.)?youtu.be\/([a-zA-Z0-9-]{11})/

// Capture	ftp://file_server.com:21/top_secret/life_changing_plans.pdf
// Capture	https://regexone.com/lesson/introduction#section
// Capture	file://localhost:4040/zip_file
// Capture	https://s3cur3-server.com:9999/

const url = 'market://search/angry%20birds'
console.log( url.match(regex)[0] ) // market://search
console.log( url.match(regex)[1] ) // market
console.log( url.match(regex)[2] ) // search

const url1 = 'https://www.youtu.be/-ZClicwm0zM'
console.log( url1.match(regex1)[1] ) // https://
console.log( url1.match(regex1)[2] ) // www.
console.log( url1.match(regex1)[3] ) // -ZClicwm0zM


