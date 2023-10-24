// coding implementation

function validateForm(){
    var email = document.getElementById('email').value;
    var cmt = document.getElementById('com').value;
    var rate = document.getElementById('rate').value;

    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        alert('Dinh dang email chua dung !');
        return false;
    }
    if(cmt === ''){
        alert('Hay nhap binh luan !');
        return false;
    }
    if(rate === ""){
        alert('Hay nhap rating !');
        return false;
    }
    if(isNaN(rate)){
        alert('Rating can danh gia duoi dang so !');
        return false;
    }
    alert('Form da duoc gui di !');
    return true;
}
    document.getElementById('submit').addEventListener('click', function() {
        if (!validateForm()) {
        event.preventDefault();
        }
    });
// end coding implementation