// Skip	.bash_profile
// Skip	workspace.doc
// Capture	img0912.jpg	img0912
const extension = 'updated_img0912.png'
// Skip	documentation.html
// Capture	favicon.gif	favicon
// Skip	img0912.jpg.tmp
// Skip	access.lock

const regex = /(\w+)\.(jpg|png|gif)$/

console.log( extension.match(regex)[0] ) // updated_img0912.png
console.log( extension.match(regex)[1] ) // updated_img0912
console.log( extension.match(regex)[2] ) // png
