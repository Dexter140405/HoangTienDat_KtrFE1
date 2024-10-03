 
    let subtotal = 8480000;
    let shippingFee = 42000; 
    let shippingPromotion = 30000; 
    
    function calculateTotal() { 
        let total = subtotal + shippingFee - shippingPromotion;
    document.getElementById('totalAmount').textContent = total.toLocaleString('vi-VN', {
        style: 'currency',
    currency: 'VND'
        });
    }
    function updateShippingFee(fee) {
        shippingFee = fee;
    calculateTotal(); 
    }
    function updateShippingPromotion(promotion) {
        shippingPromotion = promotion;
    calculateTotal(); 
    } 
    window.onload = function() {
        calculateTotal();
    };

