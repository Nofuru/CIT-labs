const coeffs = document.querySelectorAll(".inp");
const btn = document.getElementById("btn");

const solveTask = (arg1, arg2, arg3) => {
  const descr = Math.sqrt(Math.pow(arg2, 2) - 4 * arg1 * arg3);
  let x1 = 0;
  let x2 = 0;

  if (descr > 0) {
    x1 = (-arg2 + descr) / (2 * arg1);
    x2 = (-arg2 - descr) / (2 * arg1);

    alert(`X1=${x1}, X2=${x2}`);
  } else if (descr === 0) {
    x1 = -arg2 / (2 * arg1);

    alert(`X=${x1}`);
  } else {
    alert("Корней нет");
  }
};

console.log(coeffs[0], coeffs[1], coeffs[2]);

btn.addEventListener("click", () => solveTask(coeffs[0].value, coeffs[1].value, coeffs[2].value));
