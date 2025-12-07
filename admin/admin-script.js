/*-----------------------------------------------------------------------------------
    Admin Panel JavaScript - Dijital Ürünler Mağazası
-----------------------------------------------------------------------------------*/

// Initialize Charts
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('salesChart')) {
        initSalesChart();
    }
    if (document.getElementById('categoryChart')) {
        initCategoryChart();
    }
});

// Sales Chart
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
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
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
                    }
                }
            }
        }
    });
}

// Category Chart
function initCategoryChart() {
    const ctx = document.getElementById('categoryChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Dijital Oyunlar', 'Yazılım & Kod', 'Tasarım & Grafik', 'Dijital Eğitim'],
            datasets: [{
                data: [35, 28, 22, 15],
                backgroundColor: ['#667eea', '#f093fb', '#4facfe', '#43e97b'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? '#1b5e20' : type === 'info' ? '#039be5' : '#e53935';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);

console.log('Admin Panel JavaScript yüklendi! 🚀');
