export function setupAddExpenseEvent() {
  const form = document.getElementById("addExpenseForm");
  const tbody = document.getElementById("expense-tbody");

  if (!form || !tbody) return; // prevent errors if DOM not ready

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const category = formData.get("category");
    const amount = formData.get("amount");
    const date = formData.get("date");
    const notes = formData.get("notes");

    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="border px-3 py-2 text-center">${date}</td>
      <td class="border px-3 py-2 text-center">${category}</td>
      <td class="border px-3 py-2 text-center">${amount}</td>
      <td class="border px-3 py-2 text-center">${notes}</td>
      <td class="border px-5 py-2 text-center">
        <div class="flex flex-row gap-2 items-center">  
          <button class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
            Edit
          </button>
          <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
            Del
          </button> 
        </div>
      </td>
    `;

    tbody.appendChild(row);
    form.reset();
  });
}
