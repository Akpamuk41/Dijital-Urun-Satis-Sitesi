/*-----------------------------------------------------------------------------------
    Modern Admin Panel JavaScript - Dijital Ürünler Mağazası
-----------------------------------------------------------------------------------*/

// Section Navigation
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionName + '-section');
    if (targetSection) {
        targetSection.style.display = 'block';
    }
    
    // Update active menu item
    document.querySelectorAll('.sidebar-nav li').forEach(li => {
        li.classList.remove('active');
    });
    event.target.closest('li').classList.add('active');
    
    // Update page title
    const titles = {
        'dashboard': 'Dashboard',
        'products': 'Ürün Yönetimi',
        'orders': 'Siparişler',
        'announcements': 'Duyurular',
        'customers': 'Müşteriler',
        'analytics': 'Analitik & Raporlar',
        'settings': 'Ayarlar'
    };
    
    document.querySelector('.top-bar h2').textContent = titles[sectionName] || 'Dashboard';
}

// Initialize Charts
document.addEventListener('DOMContentLoaded', function() {
    initSalesChart();
    initCategoryChart();
    initRevenueChart();
    initCustomerGrowthChart();
    initProductPerformanceChart();
    initTrafficSourceChart();
});

// Sales Chart (Line Chart)
function initSalesChart() {
    const ctx = document.getElementById('salesChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
            datasets: [{
                label: 'Satışlar',
                data: [12000, 19000, 15000, 25000, 22000, 30000, 28000],
                borderColor: '#1b5e20',
                backgroundColor: 'rgba(27, 94, 32, 0.1)',
                tension: 0.4,
                fill: true,
                pointRadius: 5,
                pointHoverRadius: 7,
                pointBackgroundColor: '#1b5e20',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    titleFont: {
                        size: 14
                    },
                    bodyFont: {
                        size: 13
                    },
                    callbacks: {
                        label: function(context) {
                            return '₺' + context.parsed.y.toLocaleString('tr-TR');
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '₺' + (value / 1000) + 'K';
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Category Chart (Doughnut Chart)
function initCategoryChart() {
    const ctx = document.getElementById('categoryChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Dijital Oyunlar', 'Yazılım & Kod', 'Tasarım & Grafik', 'Dijital Eğitim'],
            datasets: [{
                data: [35, 28, 22, 15],
                backgroundColor: [
                    '#667eea',
                    '#f093fb',
                    '#4facfe',
                    '#43e97b'
                ],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 12
                        },
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': %' + context.parsed;
                        }
                    }
                }
            }
        }
    });
}

// Revenue Chart (Bar Chart)
function initRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
            datasets: [{
                label: 'Gelir',
                data: [35000, 42000, 38000, 45000, 52000, 48000, 55000, 58000, 62000, 59000, 65000, 70000],
                backgroundColor: 'rgba(27, 94, 32, 0.8)',
                borderRadius: 8,
                hoverBackgroundColor: '#1b5e20'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return '₺' + context.parsed.y.toLocaleString('tr-TR');
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '₺' + (value / 1000) + 'K';
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Customer Growth Chart (Line Chart)
function initCustomerGrowthChart() {
    const ctx = document.getElementById('customerGrowthChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
            datasets: [{
                label: 'Yeni Müşteriler',
                data: [45, 62, 58, 75, 82, 78, 95, 102, 118, 125, 142, 156],
                borderColor: '#4facfe',
                backgroundColor: 'rgba(79, 172, 254, 0.1)',
                tension: 0.4,
                fill: true,
                pointRadius: 4,
                pointHoverRadius: 6,
                pointBackgroundColor: '#4facfe',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Product Performance Chart (Horizontal Bar)
function initProductPerformanceChart() {
    const ctx = document.getElementById('productPerformanceChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['PUBG Mobile UC', 'Logo Tasarım', 'PHP Script', 'Canva Eğitim', 'Unity Proje'],
            datasets: [{
                label: 'Satış Adedi',
                data: [234, 156, 98, 187, 145],
                backgroundColor: [
                    '#667eea',
                    '#f093fb',
                    '#4facfe',
                    '#43e97b',
                    '#fb8c00'
                ],
                borderRadius: 8
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return context.parsed.x + ' satış';
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Traffic Source Chart (Pie Chart)
function initTrafficSourceChart() {
    const ctx = document.getElementById('trafficSourceChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Organik Arama', 'Sosyal Medya', 'Direkt', 'Referans', 'Email'],
            datasets: [{
                data: [42, 28, 15, 10, 5],
                backgroundColor: [
                    '#1b5e20',
                    '#4facfe',
                    '#f093fb',
                    '#43e97b',
                    '#fb8c00'
                ],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 12
                        },
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': %' + context.parsed;
                        }
                    }
                }
            }
        }
    });
}

// Add Product Modal (placeholder)
function showAddProductModal() {
    alert('Yeni ürün ekleme modalı açılacak (Geliştirme aşamasında)');
}

// Mobile Menu Toggle
document.querySelector('.btn-menu-toggle')?.addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
});

// Real-time Clock
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('tr-TR', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    const dateString = now.toLocaleDateString('tr-TR', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    });
    
    // Update if clock element exists
    const clockElement = document.getElementById('current-time');
    if (clockElement) {
        clockElement.textContent = timeString + ' - ' + dateString;
    }
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();

// Animate numbers on page load
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toLocaleString('tr-TR');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Animate stat cards on load
window.addEventListener('load', function() {
    const statCards = document.querySelectorAll('.stat-content h3');
    statCards.forEach(card => {
        const finalValue = parseInt(card.textContent.replace(/[^0-9]/g, ''));
        if (!isNaN(finalValue)) {
            card.textContent = '0';
            setTimeout(() => {
                animateValue(card, 0, finalValue, 1500);
            }, 300);
        }
    });
});

// Search functionality
document.querySelector('.search-box input')?.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    console.log('Arama yapılıyor:', searchTerm);
    // Arama fonksiyonalitesi buraya eklenecek
});

// Notification click
document.querySelector('.btn-notification')?.addEventListener('click', function() {
    alert('Bildirimler: \n\n' +
          '• Yeni sipariş alındı (#12345)\n' +
          '• Stok uyarısı: PUBG Mobile UC\n' +
          '• Yeni müşteri kaydı\n' +
          '• Ödeme onayı bekleniyor\n' +
          '• Yeni yorum eklendi');
});

console.log('Modern Admin Panel yüklendi! 🚀');
