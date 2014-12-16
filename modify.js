var list = document.body.innerText.split(/\s+/);
var dom = document.body.innerHTML;

for (var i = 0; i < list.length; i++) {
    if (list[i].length > 4) {
        dom = dom.replace(list[i], "Hodor");
    }
}

document.body.innerHTML = dom;

