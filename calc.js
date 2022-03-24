// viet tong ca gia tri chia het cho 3 nam trong khong 200-600
var father;
var sum = 0;
var mother;
var number;
for (father = 200; father <= 600; father++) {
    if (father % 3 == 0) {
        sum = sum + father
    }

}
console.log(sum);

for (mother = 50; mother <= 100; mother++) {
    if (mother % 3 == 0) {
        number = mother;
        console.log(number);
    }
}
// tinh tong va tong binh phuong 100 so nuy dau
var sum;
var exp_sum;
var arg;
for (number = 0; number <= 100; number++) {
    sum = sum + number;
    exp_sum = exp_sum + (number ** 2);
    arg = sum / number;

}
console.log(sum);
console.log(exp_sum);
console.log(arg);

function fractal() {
    var result = 1;
    var Frac = document.getElementById("frac").value;
    for (i = 1; i <= Frac; i++) {
        result = result * i;
    }
    document.getElementById("here").innerHTML = result;
}


// in ra tong 100 so dau tien dung vong lap while

var m = 0;
var sum = 0;
while (m <= 100) {
    m = m + 1;
    sum = sum + m;
}
console.log(" gia tri tong 100 so dau la", sum);

//Viết chương trình có sử dụng vòng lặp While cho phép in ra những số chia hết cho 3 trong khoảng từ 20-50
