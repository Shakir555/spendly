// components/addexpense.js
export default function AddExpenseForm() {
  return `
    <div class="border-2 border-blue-500 rounded-lg p-4 mt-10 mb-6 shadow bg-blue w-1/3">
      <h3 class="text-lg font-bold mb-3 text-center">Add Expense</h3>
      <form id="addExpenseForm" class="flex flex-col gap-3">
        
        <!-- Category --> 
        <h5 class="text-lg font-bold mb-3">Category</h5>
        <select name="category" class="border-2 border-blue-500 rounded-md p-2">
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Groceries</option>
        </select> 
        
        <!-- Amount -->
        <h5 class="text-lg font-bold mb-3">Amount</h5>
        <input 
          name="amount" 
          type="number" 
          placeholder="$$$" 
          class="border-2 border-blue-500 rounded-md p-2"
        />
        
        <!-- Date -->
        <h5 class="text-lg font-bold mb-3">Date</h5>
        <input 
          name="date" 
          type="datetime-local" 
          class="border-2 border-blue-500 rounded-md p-2"
        />
        
        <!-- Notes -->
        <h5 class="text-lg font-bold mb-3">Notes</h5>
        <textarea 
          name="notes" 
          placeholder="Add Notes.." 
          class="border-2 border-blue-500 rounded-md p-2 resize-y min-h-[80px]">
        </textarea>
        
        <!-- Add Expense Button -->
        <button type="submit" class="bg-blue-500 text-white p-2 rounded-md">
          Add Expense
        </button>
      </form>
    </div>
  `;
}
