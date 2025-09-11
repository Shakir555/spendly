// components/addexpense.js
export default function AddExpenseForm() {
  return `
    <div class="border rounded-lg p-4 mb-6 shadow bg-blue">
      <h3 class="text-lg font-bold mb-3">Add Expense</h3>
      <form class="flex flex-col gap-3">
        <!-- Category -->
        <select class="border rounded-md p-2">
            <option>Food</option>
            <option>Transport</option>
            <option>Shopping</option>
            <option>Groceries</option>
        </select> 
        <!-- Amount -->
        <input type="number" placeholder="$$$" class="border rounded-md p-2"/>
        <!-- Date -->
        <input type="datetime-local" class="border rounded-md p-2"/>
        <!-- Notes -->
        <textarea placeholder="Add Notes.." class="border rounded-md p-2 resize-y min-h-[80px]">
        </textarea>
        <!-- Add Expense Button>
        <button type="submit" class="bg-blue-500 text-white p-2 rounded-md">
          Add Expense
        </button>
      </form>
    </div>
  `;
}


