
//login btn haddle
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementsByClassName('submit-area')[0];
    if (loginArea) {
        loginArea.style.display = "none";
    }
    const transjectinArea = document.getElementById('transjectin-area');
    if (transjectinArea) {
        transjectinArea.style.display = "block";
    }
});
//deposit btn handdle
const depositAmount = document.getElementById('depositBtn');
depositAmount.addEventListener('click', function () {
    const depositeMoney = document.getElementById('deposit').value;
    const depositenumber = parseFloat(depositeMoney)

    //    const carentDeposite = document.getElementById('carentdeposite').innerText;
    //    const carrentNumber = parseFloat(carentDeposite) 

    //    const totalDeposite = depositenumber + carrentNumber;

    //    document.getElementById('carentdeposite').innerText = totalDeposite



    updateSpanTag("carentdeposite", depositenumber)
    updateSpanTag("currentBalance", depositenumber)

    depositeMoney = document.getElementById('deposit').value = "";




})

function updateSpanTag(id, depositenumber) {
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositenumber + currentBalanceNumber;

    document.getElementById(id).innerText = totalBalance;
}