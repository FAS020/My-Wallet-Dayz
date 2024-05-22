let bank = localStorage.getItem('bank') ? parseFloat(localStorage.getItem('bank')) : 0;

function updateBank() {
    document.getElementById('bank').innerText = `Bank: $${bank.toFixed(2)}`;
    localStorage.setItem('bank', bank);
}

function showTab(tab) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    document.getElementById(tab).classList.add('active');
}

function buyItem(item, price) {
    if (bank >= price) {
        bank -= price;
        updateBank();
        alert(`You bought a ${item} for $${price}`);
    } else {
        alert("Not enough money in your wallet");
    }
}

function sellItem(item, price) {
    bank += price;
    updateBank();
    alert(`You sold a ${item} for $${price}`);
}

function claimReward(reward, amount) {
    bank += amount;
    updateBank();
    alert(`You claimed ${reward} and earned S${amount}`);
}

function resetBank() {
    bank = 0;
    updateBank();
}

// Initialize with the Buy tab active
showTab('buy');
updateBank();


