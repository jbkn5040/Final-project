document.getElementById('cakeForm').addEventListener('submit', function (event) {
    event.preventDefault();


    let flavour = document.getElementById('flavour').value;
    let weight = parseFloat(document.getElementById('weight').value);


    const prices = {
        vanilla: 2000,
        chocolate: 3500,
        strawberry: 3000,
        lemon: 2750
    };

    let pricePerKg = prices[flavour];
    let totalPrice = pricePerKg * weight;


    document.getElementById('priceOutput').innerHTML = `
        <h2>Total Price:</h2>
        <p>The price for a ${weight} kg ${flavour} cake is KES${totalPrice.toFixed(2)}</p>
    `;
});
