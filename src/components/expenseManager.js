export default function expenseManagerForm() {
  return `
    <div class="border-2 border-blue-500 rounded-lg p-4 mt-10 mb-6 shadow bg-blue-50 w-1/2">
      <h3 class="text-lg font-bold mb-4 text-center">Expense Manager</h3>

      <!-- Table -->
      <div class="overflow-x-auto">
        <table id="expense-table" class="table-auto w-full border-collapse">
          <thead>
            <tr class="bg-blue-100 text-left">
              <th class="border px-3 py-2 text-center">Date</th>
              <th class="border px-3 py-2 text-center">Category</th>
              <th class="border px-3 py-2 text-center">Amount</th>
              <th class="border px-3 py-2 text-center">Notes</th>
              <th class="border px-5 py-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody id="expense-tbody">
            <!-- Rows will be added dynamically -->
          </tbody>
        </table>
      </div>
    </div>
  `
}
