var brunoLocation = Math.floor(Math.random()*9)
var saxLocation = Math.floor(Math.random()*9)
if (brunoLocation === saxLocation){
    saxLocation = Math.floor(Math.random()*9)
}

console.log(brunoLocation, saxLocation)

// stretch: for same location
// treasure would be connecting with id

const picasso = (id) => {
    if(brunoLocation === id) {
        document.getElementById(id).innerHTML = "πΊπ½"
        alert("24K Magic! π€© You won! πΊπ½")
        document.getElementById(9).innerHTML = ""
    } else if(saxLocation === id) {
        document.getElementById(id).innerHTML = "π·"
        alert("Womp womp. Get back on the dance floor to find Bruno.")
        document.getElementById(9).innerHTML = ""
    } else {
        document.getElementById(id).innerHTML = "πΌοΈ"
    }
}
