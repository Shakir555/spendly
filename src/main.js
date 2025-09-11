import "./style.css"; // Load Tailwind

document.querySelector("#app").innerHTML = `
  <div class="p-6 min-h-screen">
    <!-- App Title -->
    <h1 class="text-3xl font-bold text-center mb-6">Spendly</h1>
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">Monthly Expenses</h2>
      <select class="border rounded-md p-2 font-bold">
        <option>Sept 2025</option>
        <option>Aug 2025</option>
      </select>
    </div>

    <!-- Components -->
    <div class="flex justify-between mb-3">
      <!-- Total -->
      <div class="flex flex-col item-center">
        <h4 class="text-lg font-bold">Total</h4>
        <p class="text-xl font-thin">$$$$</p>
      </div>
      <!-- Avg/Day -->
      <div class="flex flex-col items-center">
        <h4 class="text-lg font-bold">Avg/Day</h4>
        <p class="text-xl font-thin">$$$$</p>
      </div>
      <!-- Top Category -->
      <div class="flex flex-col items-center">
        <h4 class="text-lg font-bold">Top Category</h4>
        <p class="text-xl font-thin">$$$$</p>
      </div>
      <!-- Remaining Budget -->
      <div class="flex flex-col items-center">
        <h4 class="text-lg font-bold">Remaining Budget</h4>
        <p class="text-xl font-thin">$$$$</p> 
      </div>
    </div>       
  </div>  
`;


