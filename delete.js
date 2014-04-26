var list;
list = document.getElementsByClassName("btn btn-danger btn-sm");

function handleClick() {
    confirm("Deleting hard drive " + this.getAttribute("id") + " will delete associated backups as well.\n\nContinue?");
}

for (var i = 0; i < list.length; i++){
    list[i].addEventListener("click", handleClick, false);
}
    