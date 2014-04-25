var list;
list = document.getElementsByClassName("btn btn-danger btn-sm");

function handleClick(){
    alert('Event Clicked?');
}

for (var i = 0; i < list.length; i++){
    list[i].addEventListener("click", handleClick, false);
}
    