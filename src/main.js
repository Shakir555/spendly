import "./style.css"; // Load Tailwind

document.querySelector("#app").innerHTML = `
  <div class="p-6 min-h-screen">
    <!-- App Title -->
    <h1 class="text-3xl font-bold text-center mb-6">Spendly</h1>

    <!-- Header Row -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">Monthly Expenses</h2>
      <select class="border rounded-md p-2 font-bold">
        <option>Sept 2025</option>
        <option>Aug 2025</option>
      </select>
    </div>
  </div>
`;
