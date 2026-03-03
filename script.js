const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

  // Select correct class name from your HTML
  const prices = document.querySelectorAll(".price");

  let total = 0;

  prices.forEach(price => {
    total += parseFloat(price.textContent);
  });

  // Remove old total row if exists
  const oldTotal = document.getElementById("total-row");
  if (oldTotal) oldTotal.remove();

  const table = document.querySelector("table");

  const newRow = document.createElement("tr");
  newRow.id = "total-row";

  const newCell = document.createElement("td");
  newCell.colSpan = 2;
  newCell.textContent = `Total Price: ${total}`;

  newRow.appendChild(newCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);