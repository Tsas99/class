const addItem = document.getElementById("addItem");
const itemContainer = document.getElementById("itemContainer");
let text = ` Sain baina uu ? `;

const localItemExisting = window.localStorage.getItem("greeting");

if (localItemExisting != undefined) {
  itemContainer.innerHTML = localItemExisting;
}

const itemAdder = () => {
  window.localStorage.setItem("greeting", text);
};

const otpInput = document.getElementById("otpInput");
const checkOtp = document.getElementById("checkOtp");

otpInput.addEventListener("keyup", () => {
  const otpNumbers = window.localStorage.getItem("24lp2401@nest.edu.mn");

  if (otpInput.value.length >= 3) {
    itemContainer.innerHTML = "";
  }

  if (otpInput.value.length === 4) {
    if (otpInput.value == otpNumbers) {
      itemContainer.innerHTML = "Success";
    } else {
      itemContainer.innerHTML = "Error, otp is not correct";
    }
  }
});

checkOtp.addEventListener("click", () => {
  const otpNumbers = window.localStorage.getItem("24lp2401@nest.edu.mn");
  if (otpInput.value === otpNumbers) {
    itemContainer.innerHTML = "Success";
  } else {
    itemContainer.innerHTML = "Error, otp is not correct";
  }
});