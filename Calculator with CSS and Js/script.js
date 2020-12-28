function insert(num){
    document.form.textview.value = document.form.textview.value + num
}

function equal() {
    var exp = document.form.textview.value;
    if(exp){
    document.form.textview.value = eval(exp)
    }
}

function clean() {
    document.form.textview.value = "";
}

function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}

// document.form.textview.value references to the value of the element (in this case <input>)
// with the name textview of the form (<form>) in the document (document)
