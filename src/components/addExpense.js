// components/addexpense.js
export default function AddExpenseForm() {
  return `
    <div class="border rounded-lg p-4 mb-6 shadow bg-white">
      <h3 class="text-lg font-bold mb-3">Add Expense</h3>
      <form class="flex flex-col gap-3">
        <input 
          type="text" 
          placeholder="Expense name" 
          class="border rounded-md p-2"
        />
        <input 
          type="number" 
          placeholder="Amount" 
          class="border rounded-md p-2"
        />
        <select class="border rounded-md p-2">
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
        </select>
        <button type="submit" class="bg-blue-500 text-white p-2 rounded-md">
          Add Expense
        </button>
      </form>
    </div>
  `;
}


