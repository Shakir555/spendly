export function setupAddExpenseEvent() {
  const form = document.getElementById("addExpenseForm");
  const tbody = document.getElementById("expense-tbody");

  // Prevents errors if DOM not ready
  if (!form || !tbody) return;
  
  // Load existing expenses from localStorage
  let savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
  savedExpenses.forEach(exp => addRowToTable(exp, tbody));

  // Add expense form Submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const expense = {
      category: formData.get("category"),
      amount: formData.get("amount"),
      date: formData.get("date"),
      notes: formData.get("notes"),
    };

    // Save the expense data to table
    addRowToTable(expense, tbody);

    // Save to local Storage
    savedExpenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(savedExpenses));

    // Reset the form
    form.reset();
  });
}

function addRowToTable(expense, tbody) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td class="border px-3 py-2 text-center">${expense.date}</td>
    <td class="border px-3 py-2 text-center">${expense.category}</td>
    <td class="border px-3 py-2 text-center">${expense.amount}</td>
    <td class="border px-3 py-2 text-center">${expense.notes}</td>
    <td class="border px-5 py-2 text-center">
      <div class="flex flex-row gap-2 items-center">
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded edit-btn">
          Edit
        </button>
        <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded del-btn">
          Del
        </button>
      </div>
    </td>
  `;
  tbody.appendChild(row);
}
