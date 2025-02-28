let cartItems = [];

    
function addToCart(bookTitle, price, imageUrl) {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push({ title: bookTitle, price: price, imageUrl: imageUrl });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    
    function removeFromCart(index) {
        cartItems.splice(index, 1);
        updateCartDisplay();
    }
    
    function updateCartDisplay() {
        let cartItemsList = document.getElementById('cartItems');
        let totalAmount = document.getElementById('totalAmount');
        
        cartItemsList.innerHTML = '';
        
        let total = 0;
    
        cartItems.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.title} - $${item.price.toFixed(2)}`;
    
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = function() {
                removeFromCart(index);
            };
    
            listItem.appendChild(removeButton);
            cartItemsList.appendChild(listItem);
    
            total += item.price;
        });
    
        totalAmount.textContent = total.toFixed(2);
    }
    
    function checkout() {
        alert('Thank you for your purchase!');
        cartItems = []; 
        updateCartDisplay();
    }
    function processPayment(event) {
        event.preventDefault();


        alert('Payment processed successfully!');
        alert('Your Order Has Been Placed...');
        window.location.href = "book store.html";
    }
    function buyNow() {
            
        window.location.href = "payments.html";
    }
    function checkout() {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        let billItemsTable = document.getElementById('billTable');
        let billTotalAmount = document.getElementById('billTotalAmount');
        let total = 0;

     
        billItemsTable.innerHTML = '<thead><tr><th>Title</th><th>Price</th></tr></thead>';
        billItemsTable.innerHTML += '<tbody id="billItems"></tbody>';

       
        let billItemsList = document.getElementById('billItems');
        cartItems.forEach((item) => {
            const row = document.createElement('tr');

            const titleCell = document.createElement('td');
            titleCell.textContent = item.title;
            row.appendChild(titleCell);

            const priceCell = document.createElement('td');
            priceCell.textContent = `$${item.price.toFixed(2)}`;
            row.appendChild(priceCell);

            billItemsList.appendChild(row);

            total += item.price;
        });

        billTotalAmount.textContent = total.toFixed(2);

        document.getElementById('billSection').style.display = 'block';
        document.getElementById('cartItems').style.display = 'none';
    }
    function loadCart() {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        let cartItemsList = document.getElementById('cartItems');
        let totalAmount = document.getElementById('totalAmount');
        let total = 0;

        cartItemsList.innerHTML = '';

        cartItems.forEach((item, index) => {
            const listItem = document.createElement('li');

            const image = document.createElement('img');
            image.src = item.imageUrl;
            image.alt = item.title;
            image.style.width = '50px'; 

            listItem.appendChild(image);

            listItem.innerHTML += ` ${item.title} - $${item.price.toFixed(2)}`;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = function() {
                removeFromCart(index);
            };

            listItem.appendChild(removeButton);
            cartItemsList.appendChild(listItem);

            total += item.price;
        });

        totalAmount.textContent = total.toFixed(2);
    }
    function removeFromCart(index) {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        loadCart();
    }