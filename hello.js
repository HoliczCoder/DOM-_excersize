function myfunction() {
    var getValue = document.getElementById("value").value;
    document.getElementById("demo").innerHTML = getValue;
    if (getValue >= 500) {
        document.getElementById("output").innerHTML = getValue * 0.1
    } else {
        document.getElementById("output").innerHTML = "ban khong phai nop thue"
    }
}

function yourfunction() {
    var first_fee;
    var second_fee;
    var third_fee;
    var current_fee = 27000;
    var getValue = document.getElementById("new-val").value;
    //document.getElementById("check").innerHTML = getValue; // tra ket qua de check bug
    if (getValue < 200) {
        // gia cuoc truoc 200 phut tong se la
        first_fee = getValue * 120;
        second_fee = 0;
        third_fee = 0;
    } else if (getValue > 200 && getValue < 400) {
        // gia cuoc sau 200 phut tong se la
        first_fee = 200 * 120;
        second_fee = (getValue - 200) * 80;
        third_fee = 0;
    } else {
        first_fee = 200 * 120;
        second_fee = 200 * 80;
        third_fee = (getValue - 400) * 40
    }
    document.getElementById("result").innerHTML = 27000 + first_fee + second_fee + third_fee;


}



function newfuction() {
    var Money = 0;
    var getValue = document.getElementById("reward").value;
    console.log(getValue);
    switch (getValue) {
        case '1':
            document.getElementById("critic").innerHTML = "Rat kem";
            Money = -0.01 * 1000;
            break;
        case '2':
            document.getElementById("critic").innerHTML = "Rat kem";
            Money = -0.01 * 1000;
            break;
        case '3':
            document.getElementById("critic").innerHTML = "Rat kem";
            Money = -0.01 * 1000;
            break;
        case '4':
            document.getElementById("critic").innerHTML = "Kem";
            Money = -0.005 * 1000;
            break;
        case '5':
            document.getElementById("critic").innerHTML = "Co co gang";
            Money = 0.005 * 1000;
            break;
        case '6':
            document.getElementById("critic").innerHTML = "Tot";
            Money = 0.02 * 1000;
            break;
        case '7':
            document.getElementById("critic").innerHTML = "Rat tot";
            Money = 0.035 * 1000;
            break;
        case '8':
            document.getElementById("critic").innerHTML = "Tuyet voi";
            Money = 0.5 * 1000;
            break;
        case '9':
            document.getElementById("critic").innerHTML = "Tuyet voi";
            Money = 0.5 * 1000;
            break;
        case '10':
            document.getElementById("critic").innerHTML = "Tuyet voi";
            Money = 0.5 * 1000;
            break;
        default:
            document.getElementById("critic").innerHTML = "Nhap sai";
            break;
    }
    console.log(Money);
    document.getElementById("outcome").innerHTML = Money;


}