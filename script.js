let total = 0;

function addExpense() {
    const category = document.getElementById("category").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (!isNaN(amount) && amount > 0) {
        total += amount;
        
        const expenseList = document.getElementById("expenseList");
        const listItem = document.createElement("li");
        
        listItem.textContent = `Kategoria: ${category}, Shuma: ${amount} Leke`;
        
        expenseList.appendChild(listItem);
        
        document.getElementById("totalAmount").textContent = `Totali: ${total} Leke`;
        
        document.getElementById("amount").value = "";
        document.getElementById("category").selectedIndex = 0;
    } else {
        alert("Vendosini Shumen.");
    }
} 