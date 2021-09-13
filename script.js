console.log("This is calculator project");

// ====Function calculate bill start here

function calculateBill() {
  //====selecting the span tag

  var spanId = document.getElementById("span-id");
  spanId.style.display = "none";

  var spanId3 = document.getElementById("span-id3");
  spanId3.style.display = "none";

  // ====targetting the value

  var totalBill = document.getElementById("billAmount").value;

  var totalTipPercent = document.getElementById("tipPercent").value;

  var allPerson = document.getElementById("totalPerson").value;

  var myCalculation = ((totalBill / 100) * totalTipPercent) / allPerson;

  var alertTip = document.getElementById("alertAmountEach");

  if (allPerson === "") {
    spanId3.style.display = "block";
    spanId3.innerText = "* value required";
    spanId3.style.color = "red";
    document.getElementById("totalPerson").focus();
  }
  if (totalBill === "") {
    spanId.style.display = "block";
    spanId.innerText = "* value required";
    spanId.style.color = "red";
    document.getElementById("billAmount").focus();
  } 
  else {
    alertTip.innerText = myCalculation.toFixed(2);
  }
}
