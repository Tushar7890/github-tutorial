let count=0;
let step_value=1
let step=document.getElementById("step")
let value=document.getElementById("value")
let decrease=document.getElementById("decrease")
let reset=document.getElementById("reset")
let increase=document.getElementById("increase")
increase.addEventListener("click",increment);
decrease.addEventListener("click",decrement);
reset.addEventListener("click",reset_count);
step.addEventListener("change",change_step);

function change_step() {
	step_value=Number(step.value);
}
function increment() {
	count=count+step_value;
	value.innerText=count;
	value.style.color="green"
}
function decrement() {
	count=count-step_value;
	value.innerText=count;
	value.style.color="red"
}
function reset_count(){
count=0;
value.innerText=count;
value.style.color="blue"
}

function run() {
	setInterval(increment,1000)
}
run()