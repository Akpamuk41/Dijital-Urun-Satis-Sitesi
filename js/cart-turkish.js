/*-----------------------------------------------------------------------------------
    Türkçe Sepet Yönetimi - Cart Management
-----------------------------------------------------------------------------------*/

// Sepet verilerini localStorage'da saklama (tek bir key kullan)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Sepeti güncelle
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    updateCartCount();
}

// Sepet sayısını güncelle
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    $('.cart-item-count').text(count);
}

// Sepete ürün ekle (debounce ile)
let addToCartTimeout = null;
function addToCart(productId, productName, productPrice, productImage) {
    // Eğer çok hızlı çağrılıyorsa, önceki çağrıyı iptal et
    if (addToCartTimeout) {
        console.log('⚠️ Çok hızlı ekleme tespit edildi, önceki işlem iptal ediliyor...');
        clearTimeout(addToCartTimeout);
    }
    
    addToCartTimeout = setTimeout(() => {
        console.log('🛒 addToCart çağrıldı:', {
            productId: productId,
            productName: productName,
            currentCart: cart.map(item => ({ id: item.id, name: item.name, quantity: item.quantity }))
        });
        
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
            console.log('✅ Mevcut ürün miktarı artırıldı:', existingItem);
            showNotification('Ürün sepetteki miktarı artırıldı! (Toplam: ' + existingItem.quantity + ')', 'success');
        } else {
            const newItem = {
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1
            };
            cart.push(newItem);
            console.log('✅ Yeni ürün sepete eklendi:', newItem);
            showNotification('Ürün sepete eklendi!', 'success');
        }
        
        updateCart();
        console.log('📊 Sepet güncellendi. Yeni sepet:', cart);
        
        addToCartTimeout = null;
    }, 100); // 100ms debounce
}

// Sepetten ürün sil
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showNotification('Ürün sepetten silindi!', 'info');
}

// Ürün miktarını güncelle
function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, parseInt(newQuantity));
        updateCart();
    }
}

// Mini sepeti güncelle (header'daki)
function updateCartDisplay() {
    const miniCartList = $('.minicart-product-list');
    const miniCartTotal = $('.minicart-total span');
    
    if (miniCartList.length === 0) return;
    
    miniCartList.empty();
    
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const cartItem = `
            <li>
                <a href="single-product-normal.html" class="minicart-product-image">
                    <img src="${item.image}" alt="${item.name}">
                </a>
                <div class="minicart-product-details">
                    <h6><a href="single-product-normal.html">${item.name}</a></h6>
                    <span>₺${item.price} x ${item.quantity}</span>
                </div>
                <button class="close" onclick="removeFromCart('${item.id}')" title="Sil">
                    <i class="fa fa-close"></i>
                </button>
            </li>
        `;
        
        miniCartList.append(cartItem);
    });
    
    miniCartTotal.text('₺' + total.toFixed(2));
    $('.item-text').html('₺' + total.toFixed(2) + '<span class="cart-item-count">' + cart.length + '</span>');
}

// Bildirim göster
function showNotification(message, type) {
    const notification = $('<div class="cart-notification ' + type + '">' + message + '</div>');
    $('body').append(notification);
    
    setTimeout(function() {
        notification.addClass('show');
    }, 100);
    
    setTimeout(function() {
        notification.removeClass('show');
        setTimeout(function() {
            notification.remove();
        }, 300);
    }, 2000);
}

// Sepet sayfası için tam liste
function displayFullCart() {
    const cartTableBody = $('#cart-table-body');
    const cartSubtotal = $('#cart-subtotal');
    const cartTotal = $('#cart-total');
    
    if (cartTableBody.length === 0) return;
    
    cartTableBody.empty();
    
    if (cart.length === 0) {
        cartTableBody.append(`
            <tr>
                <td colspan="6" class="text-center">
                    <p style="padding: 50px 0;">Sepetiniz boş</p>
                    <a href="shop-left-sidebar.html" class="li-button">Alışverişe Başla</a>
                </td>
            </tr>
        `);
        cartSubtotal.text('₺0.00');
        cartTotal.text('₺0.00');
        return;
    }
    
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const row = `
            <tr>
                <td class="li-product-remove">
                    <a href="#" onclick="removeFromCart('${item.id}'); return false;">
                        <i class="fa fa-times"></i>
                    </a>
                </td>
                <td class="li-product-thumbnail">
                    <a href="single-product-normal.html">
                        <img src="${item.image}" alt="${item.name}" style="width: 80px;">
                    </a>
                </td>
                <td class="li-product-name">
                    <a href="single-product-normal.html">${item.name}</a>
                </td>
                <td class="li-product-price">
                    <span class="amount">₺${item.price.toFixed(2)}</span>
                </td>
                <td class="quantity">
                    <div class="cart-plus-minus">
                        <input class="cart-plus-minus-box" value="${item.quantity}" type="text" 
                               onchange="updateQuantity('${item.id}', this.value)">
                    </div>
                </td>
                <td class="product-subtotal">
                    <span class="amount">₺${itemTotal.toFixed(2)}</span>
                </td>
            </tr>
        `;
        
        cartTableBody.append(row);
    });
    
    // Plus/Minus butonlarını yeniden ekle
    $(".cart-plus-minus").each(function() {
        if ($(this).find('.qtybutton').length === 0) {
            $(this).append('<div class="dec qtybutton"><i class="fa fa-angle-down"></i></div><div class="inc qtybutton"><i class="fa fa-angle-up"></i></div>');
        }
    });
    
    cartSubtotal.text('₺' + subtotal.toFixed(2));
    cartTotal.text('₺' + subtotal.toFixed(2));
}

// Sepeti temizle
function clearCart() {
    if (confirm('Sepeti tamamen temizlemek istediğinizden emin misiniz?')) {
        cart = [];
        updateCart();
        displayFullCart();
        showNotification('Sepet temizlendi!', 'info');
    }
}

// Sepete ekleme butonlarını ayarla
function setupAddToCartButtons() {
    // Tüm "Sepete Ekle" butonlarını seç
    // shopping-cart.html linklerini de dahil et
    const addToCartButtons = $('a[href="shopping-cart.html"], .add-to-cart-btn, .add-cart.active a, .add-to-cart');
    
    // Önceki event listener'ları tamamen temizle
    addToCartButtons.off('click');
    
    console.log('Sepete ekle butonları bulundu:', addToCartButtons.length);
    
    // Yeni event listener ekle
    addToCartButtons.on('click', function(e) {
        e.preventDefault();
        e.stopImmediatePropagation(); // Tüm event'leri durdur
        
        const $this = $(this);
        
        // Eğer zaten işlem yapılıyorsa, tekrar ekleme
        if ($this.data('processing')) {
            console.log('⚠️ Zaten işlem yapılıyor, atlanıyor...');
            return false;
        }
        
        // İşlem bayrağını set et
        $this.data('processing', true);
        console.log('🔄 İşlem başlatıldı...');
        
        // Ürün kartını bul
        const productWrap = $this.closest('.single-product-wrap, .product-item, .col-lg-4, .col-lg-3');
        
        if (productWrap.length === 0) {
            console.error('❌ Ürün kartı bulunamadı!');
            $this.data('processing', false);
            return false;
        }
        
        // Ürün bilgilerini al
        const productName = productWrap.find('.product_name, .product-name, h4 a').first().text().trim();
        const productImage = productWrap.find('.product-image img, img').first().attr('src');
        
        // Fiyat bilgisini al
        let priceElement = productWrap.find('.new-price, .new-price-2, .price').first();
        let priceText = priceElement.text().trim();
        priceText = priceText.replace('₺', '').replace(',', '.').replace(/\s/g, '');
        const productPrice = parseFloat(priceText);
        
        // Benzersiz ID oluştur
        const productId = productName ? productName.replace(/\s+/g, '-').toLowerCase().hashCode() : Date.now();
        
        console.log('📦 Sepete ekleniyor:', {
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage
        });
        
        // Sepete ekle
        if (productName && productPrice && productImage) {
            addToCart(productId, productName, productPrice, productImage);
        } else {
            console.error('❌ Eksik ürün bilgisi:', { productName, productPrice, productImage });
        }
        
        // İşlem bayrağını temizle (1 saniye sonra)
        setTimeout(() => {
            $this.data('processing', false);
            console.log('✅ İşlem tamamlandı, bayrak temizlendi');
        }, 1000);
        
        return false;
    });
}

// Sayfa yüklendiğinde (sadece bir kez çalışsın)
let cartInitialized = false;

$(document).ready(function() {
    if (cartInitialized) {
        console.log('Sepet zaten başlatılmış, atlanıyor...');
        return;
    }
    
    console.log('Sepet başlatılıyor...');
    cartInitialized = true;
    
    updateCartDisplay();
    updateCartCount();
    displayFullCart();
    setupAddToCartButtons();
    
    // Quantity butonları için event listener (sadece bir kez)
    $(document).off('click.qtybutton').on('click.qtybutton', '.qtybutton', function() {
        const $button = $(this);
        const $input = $button.parent().find('input');
        const oldValue = parseInt($input.val());
        const onchangeAttr = $input.attr('onchange');
        
        if (!onchangeAttr) return;
        
        const productId = onchangeAttr.match(/'([^']+)'/)[1];
        
        let newVal;
        if ($button.hasClass('inc')) {
            newVal = oldValue + 1;
        } else {
            newVal = Math.max(1, oldValue - 1);
        }
        
        $input.val(newVal);
        updateQuantity(productId, newVal);
    });
    
    console.log('Sepet başarıyla başlatıldı!');
});

// String için hash fonksiyonu (eğer yoksa)
if (!String.prototype.hashCode) {
    String.prototype.hashCode = function() {
        let hash = 0;
        for (let i = 0; i < this.length; i++) {
            const char = this.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash);
    };
}

// CSS için stil ekle
const style = document.createElement('style');
style.textContent = `
    .cart-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: #007bff;
        color: white;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        opacity: 0;
        transform: translateX(400px);
        transition: all 0.3s ease;
    }
    
    .cart-notification.show {
        opacity: 1;
        transform: translateX(0);
    }
    
    .cart-notification.success {
        background: #28a745;
    }
    
    .cart-notification.info {
        background: #17a2b8;
    }
    
    .cart-notification.error {
        background: #dc3545;
    }
`;
document.head.appendChild(style);
