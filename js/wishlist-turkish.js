/*-----------------------------------------------------------------------------------
    Türkçe Favori (Wishlist) Yönetimi
-----------------------------------------------------------------------------------*/

// Favorilere Ekleme Fonksiyonu
function addToWishlist(productId, productName, productPrice, productImage) {
    // Wishlist verilerini localStorage'dan al
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    console.log('addToWishlist çağrıldı:', {
        productId: productId,
        productName: productName,
        currentWishlist: wishlist.map(item => ({ id: item.id, name: item.name }))
    });
    
    // Ürünün favorilerde olup olmadığını kontrol et (ID ve isim ile)
    const existingProduct = wishlist.find(item => {
        const idMatch = item.id === productId;
        const nameMatch = item.name === productName;
        console.log('Karşılaştırma:', {
            itemId: item.id,
            productId: productId,
            idMatch: idMatch,
            itemName: item.name,
            productName: productName,
            nameMatch: nameMatch
        });
        return idMatch || nameMatch;
    });
    
    if (existingProduct) {
        // Ürün zaten favorilerde
        console.log('Ürün zaten favorilerde:', existingProduct);
        showWishlistNotification('Bu ürün zaten favorilerinizde! ℹ️', 'info');
        return;
    }
    
    // Yeni ürün ekle
    const newProduct = {
        id: productId,
        name: productName,
        price: productPrice,
        image: productImage
    };
    
    console.log('Yeni ürün ekleniyor:', newProduct);
    wishlist.push(newProduct);
    
    // Favorileri localStorage'a kaydet
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
    console.log('Favori eklendi! Yeni liste:', wishlist);
    
    // Başarı mesajı göster
    showWishlistNotification('Ürün favorilere eklendi! ❤️', 'success');
    
    // Wishlist sayısını güncelle
    updateWishlistCount();
}

// Favorilerden Çıkarma Fonksiyonu
function removeFromWishlist(productId) {
    if (confirm('Bu ürünü favorilerden çıkarmak istediğinizden emin misiniz?')) {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        wishlist = wishlist.filter(item => item.id !== productId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        
        // Wishlist sayfasındaysa tabloyu yeniden yükle
        if (typeof loadWishlistPage === 'function') {
            loadWishlistPage();
        }
        
        updateWishlistCount();
        showWishlistNotification('Ürün favorilerden çıkarıldı!', 'info');
    }
}

// Wishlist Sayısını Güncelleme
function updateWishlistCount() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const count = wishlist.length;
    
    // Wishlist sayısını güncelle
    document.querySelectorAll('.wishlist-item-count').forEach(el => {
        el.textContent = count;
    });
}

// Bildirim Gösterme
function showWishlistNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? '#1b5e20' : '#0277bd';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideInRight 0.3s ease-out;
        font-size: 14px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Animasyon stilleri
const wishlistStyle = document.createElement('style');
wishlistStyle.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(wishlistStyle);

// Tüm wishlist butonlarına click event ekle
function setupWishlistButtons() {
    // Tüm wishlist linklerini bul
    const wishlistLinks = document.querySelectorAll('a[href="wishlist.html"]');
    
    wishlistLinks.forEach(link => {
        // Header'daki wishlist linkini atla (hm-wishlist class'ı içinde olanlar)
        if (link.closest('.hm-wishlist')) {
            return; // Bu linke event ekleme, normal çalışsın
        }
        
        // Sadece kalp ikonu içeren linkleri işle
        if (link.querySelector('.fa-heart-o') || link.querySelector('.fa-heart')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // En yakın ürün kartını bul
                const productCard = this.closest('.single-product-wrap') || 
                                  this.closest('.product-item') ||
                                  this.closest('.col-lg-4') ||
                                  this.closest('.col-lg-3');
                
                if (productCard) {
                    // Ürün bilgilerini al
                    let productName = productCard.querySelector('.product_name, .product-name, h4 a')?.textContent;
                    
                    // Ürün adını normalize et (boşlukları temizle)
                    if (productName) {
                        productName = productName.trim().replace(/\s+/g, ' ');
                    }
                    
                    const priceText = productCard.querySelector('.new-price, .price')?.textContent.trim();
                    
                    // Görseli al - product-image içindeki img'yi bul
                    let productImageElement = productCard.querySelector('.product-image img, .product-img img, .single-img img, img');
                    let productImage = productImageElement?.src || productImageElement?.getAttribute('src');
                    
                    // Eğer görsel tam yol değilse, tam yol oluştur
                    if (productImage && !productImage.startsWith('http')) {
                        // Göreceli yolu tam yola çevir
                        const baseUrl = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
                        productImage = new URL(productImage, baseUrl).href;
                    }
                    
                    // Fiyatı sayıya çevir
                    const productPrice = parseFloat(priceText?.replace('₺', '').replace(',', '.').replace(/\s/g, '')) || 0;
                    
                    // Benzersiz ve tutarlı ID oluştur (normalize edilmiş ürün adından)
                    const normalizedName = productName ? productName.toLowerCase().replace(/\s+/g, '-') : '';
                    const productId = normalizedName ? normalizedName.hashCode() : Date.now();
                    
                    // Debug için konsola yazdır
                    console.log('Favorilere ekleniyor:', {
                        id: productId,
                        normalizedName: normalizedName,
                        name: productName,
                        price: productPrice,
                        image: productImage
                    });
                    
                    // Mevcut favorileri kontrol et
                    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
                    const exists = wishlist.find(item => item.id === productId);
                    
                    console.log('Favori kontrolü:', {
                        productId: productId,
                        exists: !!exists,
                        currentWishlist: wishlist.map(item => ({ id: item.id, name: item.name }))
                    });
                    
                    // Favorilere ekle
                    if (productName && productPrice && productImage) {
                        addToWishlist(productId, productName, productPrice, productImage);
                    } else {
                        console.error('Eksik ürün bilgisi:', { productName, productPrice, productImage });
                    }
                }
            });
        }
    });
}

// String için basit hash fonksiyonu
String.prototype.hashCode = function() {
    let hash = 0;
    for (let i = 0; i < this.length; i++) {
        const char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
};

// Sayfa yüklendiğinde wishlist sayısını güncelle ve butonları ayarla
document.addEventListener('DOMContentLoaded', function() {
    updateWishlistCount();
    setupWishlistButtons();
});
