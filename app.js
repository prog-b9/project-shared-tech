function changeTextTable1() {
  document.querySelector(".text-scale1").textContent = "أعرف الأسعار";
}

function restoreTextTable1() {
  document.querySelector(".text-scale1").textContent = "شاهد الكل";
}

function changeTextTable2() {
  document.querySelector(".text-scale2").textContent = "أعرف الأسعار";
}

function restoreTextTable2() {
  document.querySelector(".text-scale2").textContent = "شاهد الكل";
}

//   show dropdown list
let btnSHowDropdwonList = document.querySelector(".icon-user");
let dropdwonList = document.querySelector(".box-dropdownlist");
dropdwonList.style.display = "none";
// if click the icon user is show dropdown list
btnSHowDropdwonList.onclick = () => {
  if (dropdwonList.style.display === "none") {
    dropdwonList.style.display = "block";
  } else {
    dropdwonList.style.display = "none";
  }
};
