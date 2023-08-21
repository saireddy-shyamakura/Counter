let count =0
let counting= document.getElementById("increment-el")
let entry=document.getElementById("previous-entries")

function increment() {
			count=count+1
			counting.innerText= "Count :" +" "+ count
		}
function decrement() {
			count=count-1
			counting.innerText="Count :" +" "+ count
		}
function reset() {
			count=0
			counting.innerText="Count :" +" "+ count
		}
function save() {
			let entry1=count+" "
			entry.textContent += entry1
			count=0
			counting.innerText="Count :" +" "+ count
		}
function clear() {
	        count=20
			counting.innerText="Count :" + " "+ count
			
		}
