// ======================
// ĐĂNG NHẬP
// ======================

function dangNhap(){


let user =
document.getElementById("user").value;


let pass =
document.getElementById("pass").value;



if(user=="admin" && pass=="123456"){


location.href="index.html";


}

else{


alert("Sai tài khoản hoặc mật khẩu");


}


}




// ======================
// CHUYỂN TRANG IFRAME
// ======================

function loadPage(page){


document.getElementById("frame").src = page;


}





// ======================
// TÌM KHÁCH
// ======================


function timKhach(){



let danhSach = JSON.parse(

localStorage.getItem("khach")

) || [];



let tuKhoa =

document.getElementById("timkiem").value.toLowerCase();




let bang =

document.getElementById("bang");




bang.innerHTML = `


<tr>

<th>STT</th>

<th>Họ tên</th>

<th>Số điện thoại</th>

<th>Thao tác</th>

</tr>


`;





danhSach.forEach(function(khach,index){



if(

khach.ten.toLowerCase().includes(tuKhoa)

){



bang.innerHTML += `


<tr>


<td>${index+1}</td>


<td>${khach.ten}</td>


<td>${khach.sdt}</td>


<td>


<button onclick="xoaKhach(${index})">

Xóa

</button>


</td>


</tr>


`;



}



});



}