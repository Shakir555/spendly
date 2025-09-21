// Libraries
// Tailwind CSS
import "./style.css";
import AddExpenseForm from "./components/addExpense.js";
import expenseManagerForm from "./components/expenseManager.js";
import { setupAddExpenseEvent } from "./events/addExpenseEvent.js";

document.querySelector("#app").innerHTML = `
  <div class="p-6 min-h-screen">
    <!-- App Title -->
    <h1 class="text-3xl font-extrabold text-center mb-6 drop-shadow-lg">Spendly</h1>
    <!-- Header -->
    <div class="flex justify-between items-center mb-6 border-2 border-blue-500 rounded-lg p-4">
      <h2 class="text-2xl font-bold">Monthly Expenses</h2>
      <select class="border rounded-md p-2 font-bold">
        <option>Sept 2025</option>
        <option>Aug 2025</option>
      </select>
    </div>

    <!-- Components -->
    <div class="flex justify-around items-center mb-3 border-2 border-blue-500 rounded-lg p-4 bg-white shadow-sm">
      <!-- Total -->
      <div class="flex flex-col items-center mx-2">
        <h4 class="text-lg font-bold">Total</h4>
        <p class="text-xl font-thin">$$$$</p>
      </div>

      <!-- Avg/Day -->
      <div class="flex flex-col items-center mx-2">
        <h4 class="text-lg font-bold">Avg/Day</h4>
        <p class="text-xl font-thin">$$$$</p>
      </div>

      <!-- Top Category -->
      <div class="flex flex-col items-center mx-2">
        <h4 class="text-lg font-bold">Top Category</h4>
        <p class="text-xl font-thin">$$$$</p>
      </div>

      <!-- Remaining Budget -->
      <div class="flex flex-col items-center mx-2">
        <h4 class="text-lg font-bold">Remaining Budget</h4>
        <p class="text-xl font-thin">$$$$</p>
      </div>
    </div>

    <!-- Add Expense + Expense Manager Side by Side -->
    <div class="flex gap-6 items-start">
      <!-- Add Expense Form -->
        ${AddExpenseForm()}
      <!-- Expense Manager Form -->
        ${expenseManagerForm()}
    </div>
  </div>  
`;

// Add Event after rendering
setupAddExpenseEvent();


