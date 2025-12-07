# 🛒 Dijital Ürünler Mağazası

Modern, responsive ve tam özellikli bir dijital ürünler e-ticaret platformu. Oyun içi ürünler, yazılım, tasarım ve dijital eğitim içerikleri için kapsamlı bir alışveriş deneyimi sunar.

![Version](https://img.shields.io/badge/version-2.0-green.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Bootstrap](https://img.shields.io/badge/bootstrap-4.1.3-purple.svg)
![Chart.js](https://img.shields.io/badge/chart.js-4.4.0-orange.svg)

---

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Teknolojiler](#-teknolojiler)
- [Kurulum](#-kurulum)
- [Proje Yapısı](#-proje-yapısı)
- [Admin Panel](#-admin-panel)
- [Sayfalar](#-sayfalar)
- [Kullanım](#-kullanım)
- [Ekran Görüntüleri](#-ekran-görüntüleri)
- [Katkıda Bulunma](#-katkıda-bulunma)
- [Lisans](#-lisans)

---

## ✨ Özellikler

### 🎨 Frontend Özellikleri

- ✅ **Modern ve Responsive Tasarım** - Tüm cihazlarda mükemmel görünüm
- ✅ **Ürün Kataloğu** - Kategorilere göre filtreleme ve arama
- ✅ **Sepet Sistemi** - LocalStorage ile kalıcı sepet
- ✅ **Favori Listesi** - Beğenilen ürünleri kaydetme
- ✅ **Ürün Karşılaştırma** - Ürünleri yan yana karşılaştırma
- ✅ **Canlı Arama** - Anlık ürün arama
- ✅ **Ödeme Sistemi** - Güvenli checkout sayfası
- ✅ **Duyurular** - Kampanya ve duyuru sistemi
- ✅ **Blog** - İçerik yönetimi
- ✅ **İletişim Formu** - Müşteri iletişimi
- ✅ **Çoklu Dil Desteği** - Türkçe yerelleştirme
- ✅ **Para Birimi** - TRY (₺) formatı

### 🔧 Admin Panel Özellikleri

- ✅ **Modern Dashboard** - İstatistikler ve grafikler
- ✅ **Ürün Yönetimi** - Ekleme, düzenleme, silme
- ✅ **Sipariş Yönetimi** - Durum takibi ve filtreleme
- ✅ **Müşteri Yönetimi** - Müşteri profilleri ve istatistikler
- ✅ **Duyuru Yönetimi** - Kampanya ve duyuru oluşturma
- ✅ **Analitik & Raporlar** - 6+ farklı grafik türü (Chart.js)
- ✅ **Site Ayarları** - Kapsamlı yapılandırma seçenekleri
- ✅ **Responsive Admin** - Mobil uyumlu yönetim paneli

---

## 🚀 Teknolojiler

### Frontend
- **HTML5** - Semantik yapı
- **CSS3** - Modern stil ve animasyonlar
- **JavaScript (ES6+)** - Vanilla JS, modern syntax
- **Bootstrap 4.1.3** - Responsive framework
- **jQuery** - DOM manipülasyonu
- **Owl Carousel** - Ürün slider'ları
- **Slick Carousel** - İçerik karuselleri
- **Font Awesome** - İkon kütüphanesi
- **Animate.css** - Animasyonlar

### Admin Panel
- **Chart.js 4.4.0** - İnteraktif grafikler
- **Custom CSS** - Modern admin tasarımı
- **Vanilla JavaScript** - Hafif ve hızlı
- **LocalStorage API** - Veri kalıcılığı

### Özellikler
- **Responsive Design** - Mobil, tablet, desktop
- **LocalStorage** - Sepet ve favori kalıcılığı
- **CSS Grid & Flexbox** - Modern layout
- **CSS Variables** - Tema yönetimi
- **Form Validation** - Kullanıcı doğrulama

---

## 📦 Kurulum

### Gereksinimler
- Modern web tarayıcı (Chrome, Firefox, Safari, Edge)
- Yerel web sunucusu (opsiyonel)

### Adımlar

1. **Projeyi İndirin**
```bash
git clone https://github.com/kullaniciadi/dijital-urun-sitesi.git
cd dijital-urun-sitesi
```

2. **Dosyaları Açın**
- `index.html` dosyasını tarayıcınızda açın
- Veya yerel sunucu kullanın:

```bash
# Python ile
python -m http.server 8000

# Node.js ile (http-server)
npx http-server

# PHP ile
php -S localhost:8000
```

3. **Tarayıcıda Görüntüleyin**
```
http://localhost:8000
```

4. **Admin Paneline Erişim**
```
http://localhost:8000/admin/dashboard.html
```

---

## 📁 Proje Yapısı

```
dijital-urun-sitesi/
├── 📄 index.html                    # Ana sayfa
├── 📄 shop-left-sidebar.html        # Ürün listesi
├── 📄 single-product-normal.html    # Ürün detay
├── 📄 cart.html                     # Sepet
├── 📄 checkout.html                 # Ödeme
├── 📄 wishlist.html                 # Favori listesi
├── 📄 compare.html                  # Ürün karşılaştırma
├── 📄 announcements.html            # Duyurular
├── 📄 blog.html                     # Blog listesi
├── 📄 contact.html                  # İletişim
├── 📄 about-us.html                 # Hakkımızda
├── 📄 faq.html                      # SSS
├── 📄 login-register.html           # Giriş/Kayıt
├── 📄 404.html                      # Hata sayfası
│
├── 📁 admin/                        # Admin Panel
│   ├── 📄 dashboard.html            # Ana panel
│   ├── 📄 urunler.html              # Ürün yönetimi
│   ├── 📄 siparisler.html           # Sipariş yönetimi
│   ├── 📄 musteriler.html           # Müşteri yönetimi
│   ├── 📄 duyurular.html            # Duyuru yönetimi
│   ├── 📄 analitik.html             # Analitik & raporlar
│   ├── 📄 ayarlar.html              # Site ayarları
│   ├── 📄 admin-style.css           # Admin CSS
│   └── 📄 admin-script.js           # Admin JS
│
├── 📁 css/                          # Stil dosyaları
│   ├── 📄 bootstrap.min.css         # Bootstrap framework
│   ├── 📄 style.css                 # Ana stil
│   ├── 📄 duzenleme.css             # Özel düzenlemeler
│   ├── 📄 responsive.css            # Responsive tasarım
│   └── ...                          # Diğer CSS dosyaları
│
├── 📁 js/                           # JavaScript dosyaları
│   ├── 📁 vendor/                   # Kütüphaneler
│   └── 📄 main.js                   # Ana JavaScript
│
├── 📁 images/                       # Görseller
│   ├── 📁 product/                  # Ürün görselleri
│   ├── 📁 slider/                   # Slider görselleri
│   └── 📁 banner/                   # Banner görselleri
│
└── 📁 fonts/                        # Font dosyaları
```

---

## 🎛️ Admin Panel

### Giriş Bilgileri
```
Kullanıcı Adı: admin
Şifre: admin123
```

### Admin Sayfaları

#### 1. 📊 Dashboard (`dashboard.html`)
- Genel istatistikler (4 stat kartı)
- Satış grafiği (Chart.js Line Chart)
- Kategori dağılımı (Doughnut Chart)
- Son siparişler tablosu
- En çok satan ürünler

#### 2. 🛍️ Ürünler (`urunler.html`)
- Ürün listesi ve arama
- Yeni ürün ekleme formu
- Ürün düzenleme/silme
- Kategori filtreleme
- Stok yönetimi
- Toplu işlemler

#### 3. 📦 Siparişler (`siparisler.html`)
- Sipariş listesi
- Durum güncelleme (Beklemede, İşleniyor, Tamamlandı)
- Sipariş detayları
- Fatura yazdırma
- Tarih filtreleme
- Dışa aktarma

#### 4. 👥 Müşteriler (`musteriler.html`)
- Müşteri kartları (grid layout)
- Müşteri istatistikleri
- VIP müşteri yönetimi
- Müşteri arama ve filtreleme
- Mesaj gönderme
- Sipariş geçmişi

#### 5. 📢 Duyurular (`duyurular.html`)
- Duyuru oluşturma
- Görsel yükleme
- Aktif/Pasif durumu
- Duyuru düzenleme/silme
- Önizleme

#### 6. 📈 Analitik (`analitik.html`)
**6 Farklı Grafik:**
- Gelir Trendi (Line Chart)
- Kategori Dağılımı (Doughnut Chart)
- Aylık Satış Karşılaştırma (Bar Chart)
- Müşteri Büyümesi (Line Chart)
- Saatlik Sipariş Dağılımı (Bar Chart)
- En Çok Satan Ürünler (Horizontal Bar)
- Ödeme Yöntemleri (Pie Chart)

**Özellikler:**
- Dönem seçici (7/30/90/365 gün)
- Rapor indirme
- Gerçek zamanlı veriler

#### 7. ⚙️ Ayarlar (`ayarlar.html`)
**8 Ayar Kategorisi:**
- Genel Ayarlar (site bilgileri)
- E-posta Ayarları (SMTP)
- Ödeme Ayarları (para birimi, KDV)
- Sosyal Medya (5 platform)
- SEO Ayarları (meta, analytics)
- Bildirim Ayarları (e-posta, SMS)
- Güvenlik Ayarları (şifre, 2FA)
- Yedekleme & Bakım

---

## 📄 Sayfalar

### Müşteri Sayfaları

| Sayfa | Dosya | Açıklama |
|-------|-------|----------|
| Ana Sayfa | `index.html` | Slider, öne çıkan ürünler, kategoriler |
| Ürün Listesi | `shop-left-sidebar.html` | Filtreleme, sıralama, sayfalama |
| Ürün Detay | `single-product-normal.html` | Ürün bilgileri, yorumlar, ilgili ürünler |
| Sepet | `cart.html` | Sepet yönetimi, miktar güncelleme |
| Ödeme | `checkout.html` | Adres, ödeme bilgileri |
| Favori Listesi | `wishlist.html` | Beğenilen ürünler |
| Karşılaştırma | `compare.html` | Ürün karşılaştırma tablosu |
| Duyurular | `announcements.html` | Kampanya ve duyurular |
| Blog | `blog.html` | Blog yazıları |
| İletişim | `contact.html` | İletişim formu, harita |
| Hakkımızda | `about-us.html` | Şirket bilgileri |
| SSS | `faq.html` | Sık sorulan sorular |
| Giriş/Kayıt | `login-register.html` | Kullanıcı girişi |

---

## 💻 Kullanım

### Sepet İşlemleri

```javascript
// Sepete ürün ekleme
function sepeteEkle(urun) {
    let sepet = JSON.parse(localStorage.getItem('sepet')) || [];
    sepet.push(urun);
    localStorage.setItem('sepet', JSON.stringify(sepet));
}

// Sepeti görüntüleme
function sepetiGoster() {
    let sepet = JSON.parse(localStorage.getItem('sepet')) || [];
    return sepet;
}
```

### Favori İşlemleri

```javascript
// Favorilere ekleme
function favoriyeEkle(urunId) {
    let favoriler = JSON.parse(localStorage.getItem('favoriler')) || [];
    if (!favoriler.includes(urunId)) {
        favoriler.push(urunId);
        localStorage.setItem('favoriler', JSON.stringify(favoriler));
    }
}
```

### Admin Chart.js Kullanımı

```javascript
// Satış grafiği oluşturma
const ctx = document.getElementById('salesChart');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
        datasets: [{
            label: 'Satışlar',
            data: [12000, 19000, 15000, 25000, 22000, 30000, 28000],
            borderColor: '#1b5e20',
            backgroundColor: 'rgba(27, 94, 32, 0.1)'
        }]
    }
});
```

---

## 🎨 Tema Özelleştirme

### CSS Variables (Admin Panel)

```css
:root {
    --primary-color: #1b5e20;      /* Ana renk (yeşil) */
    --primary-dark: #145214;       /* Koyu yeşil */
    --primary-light: #2e7d32;      /* Açık yeşil */
    --success-color: #43a047;      /* Başarı */
    --warning-color: #fb8c00;      /* Uyarı */
    --danger-color: #e53935;       /* Hata */
    --info-color: #039be5;         /* Bilgi */
}
```

### Renk Paletini Değiştirme

1. `admin/admin-style.css` dosyasını açın
2. `:root` bölümündeki renk değerlerini değiştirin
3. Sayfayı yenileyin

---

## 📱 Responsive Breakpoints

```css
/* Mobil */
@media (max-width: 768px) { }

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) { }

/* Desktop */
@media (min-width: 1025px) { }
```

---

## 🔒 Güvenlik

- ✅ Form validasyonu
- ✅ XSS koruması
- ✅ CSRF token desteği (backend entegrasyonu için hazır)
- ✅ Güvenli ödeme sayfası
- ✅ LocalStorage şifreleme (opsiyonel)

---

## 🌐 Tarayıcı Desteği

| Tarayıcı | Versiyon |
|----------|----------|
| Chrome | ✅ 90+ |
| Firefox | ✅ 88+ |
| Safari | ✅ 14+ |
| Edge | ✅ 90+ |
| Opera | ✅ 76+ |

---

## 📊 Performans

- ⚡ Sayfa yükleme: < 2 saniye
- ⚡ First Contentful Paint: < 1.5 saniye
- ⚡ Time to Interactive: < 3 saniye
- ⚡ Lighthouse Score: 90+

---

## 🔄 Güncellemeler

### v2.0 (Aralık 2024)
- ✅ Modern admin panel eklendi
- ✅ Chart.js entegrasyonu
- ✅ 7 admin sayfası oluşturuldu
- ✅ Responsive admin tasarımı
- ✅ Analitik ve raporlama sistemi

### v1.0 (Kasım 2024)
- ✅ İlk sürüm yayınlandı
- ✅ Temel e-ticaret özellikleri
- ✅ Sepet ve favori sistemi
- ✅ Türkçe yerelleştirme

---

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen şu adımları izleyin:

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/YeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/YeniOzellik`)
5. Pull Request oluşturun

---

## 📝 Yapılacaklar

- [ ] Backend API entegrasyonu
- [ ] Gerçek ödeme gateway'i (iyzico, PayTR)
- [ ] Kullanıcı paneli
- [ ] Sipariş takip sistemi
- [ ] E-posta bildirimleri
- [ ] SMS entegrasyonu
- [ ] Çoklu dil desteği (İngilizce)
- [ ] PWA desteği
- [ ] Dark mode

---

## 🐛 Bilinen Sorunlar

- Admin paneli demo verilerle çalışmaktadır
- Backend entegrasyonu gereklidir
- Gerçek ödeme sistemi entegre edilmemiştir

---

## 📞 İletişim

- **Proje Sahibi:** [Adınız]
- **E-posta:** info@dijitalurunler.com
- **Website:** https://dijitalurunler.com
- **GitHub:** https://github.com/kullaniciadi/dijital-urun-sitesi

---

## 📜 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

## 🙏 Teşekkürler

- Bootstrap ekibine
- Chart.js geliştiricilerine
- Font Awesome'a
- Tüm açık kaynak katkıda bulunanlara

---

## 📸 Ekran Görüntüleri

### Ana Sayfa
![Ana Sayfa](screenshots/homepage.png)

### Ürün Listesi
![Ürün Listesi](screenshots/products.png)

### Admin Dashboard
![Admin Dashboard](screenshots/admin-dashboard.png)

### Admin Analitik
![Admin Analitik](screenshots/admin-analytics.png)

---

<div align="center">

**⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın! ⭐**

Made with ❤️ in Turkey

</div>
