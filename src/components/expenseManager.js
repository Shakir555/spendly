// components/expenseManager.js
export default function expenseManagerForm() {
  return `
    <div class="border-2 border-blue-500 rounded-lg p-4 mt-10 mb-6 shadow bg-blue-50 w-1/2">
      <h3 class="text-lg font-bold mb-4 text-center">Expense Manager</h3>

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full border-collapse">
          <thead>
            <tr class="bg-blue-100 text-left">
              <th class="border px-3 py-2 text-center">Date</th>
              <th class="border px-3 py-2 text-center">Category</th>
              <th class="border px-3 py-2 text-center">Amount</th>
              <th class="border px-3 py-2 text-center">Notes</th>
              <th class="border px-5 py-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <!-- Example Row -->
            <tr>
              <td class="border px-3 py-2 text-center">2025-09-12 18:30</td>
              <td class="border px-3 py-2 text-center">Food</td>
              <td class="border px-3 py-2 text-center">25.50</td>
              <td class="border px-3 py-2 text-center">Dinner with friends AND MORE THING STO COME</td>
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
}
