const myRegex = /.(\w+)(\((ListView.java):(\d+)\))$/
const regex = /(\w+)\(([\w\.]+):(\d+)\)/


// Skip	W/dalvikvm( 1553): threadid=1: uncaught exception\
// Skip	E/( 1553): FATAL EXCEPTION: main
// Skip	E/( 1553): java.lang.StringIndexOutOfBoundsException
// Capture	E/( 1553):   at widget.List.makeView(ListView.java:1727)
// Capture	E/( 1553):   at widget.List.fillDown(ListView.java:652)
const message = 'E/( 1553):   at widget.List.fillFrom(ListView.java:709)'


console.log( message.match(regex)[1] ) // fillFrom
console.log( message.match(regex)[2] ) // ListView.java
console.log( message.match(regex)[3] ) // 709
