/* ==========================================
   CarHub Pro - Main JavaScript File (UPDATED WITH IMAGES)
   ========================================== */

// DOM Elements
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const carsGrid = document.getElementById('carsGrid');
const rentalCarsGrid = document.getElementById('rentalCarsGrid');
const servicesGrid = document.getElementById('servicesGrid');
const searchInput = document.getElementById('searchInput');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// Language and Theme State
let currentLang = localStorage.getItem('language') || 'ar';
let darkMode = localStorage.getItem('darkMode') === 'true';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    loadCars();
    loadRentalCars();
    loadServices();
    setupEventListeners();
    applyTheme();
});

// Initialize App
function initializeApp() {
    setLanguage(currentLang);
    if (darkMode) {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Modal
    loginBtn.addEventListener('click', () => openModal('loginModal'));
    loginForm.addEventListener('submit', handleLogin);
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
    });

    // Navigation
    menuToggle.addEventListener('click', toggleMenu);
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Theme
    themeToggle.addEventListener('click', toggleTheme);

    // Language
    langToggle.addEventListener('click', toggleLanguage);

    // Search
    searchInput.addEventListener('input', (e) => {
        filterCars(e.target.value);
    });

    // Filter buttons
    document.getElementById('brandFilter')?.addEventListener('input', () => {
        applyFilters();
    });
    document.getElementById('priceFilter')?.addEventListener('change', () => {
        applyFilters();
    });
    document.getElementById('fuelFilter')?.addEventListener('change', () => {
        applyFilters();
    });
}

/* ==========================================
   Modal Functions
   ========================================== */

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/* ==========================================
   Authentication
   ========================================== */

async function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        showToast('الرجاء ملء جميع الحقول');
        return;
    }

    try {
        const response = await simulateApiCall({
            endpoint: '/auth/login',
            method: 'POST',
            data: { email, password }
        });

        if (response.success) {
            localStorage.setItem('authToken', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
            
            showToast('تم تسجيل الدخول بنجاح!');
            closeModal('loginModal');
            
            updateAuthUI();
            
            loginForm.reset();
            
            setTimeout(() => {
                window.location.href = '/dashboard.html';
            }, 1500);
        }
    } catch (error) {
        showToast('فشل تسجيل الدخول. الرجاء المحاولة مجدداً');
        console.error('Login error:', error);
    }
}

function updateAuthUI() {
    const user = JSON.parse(localStorage.getItem('user'));
    const authButtons = document.querySelector('.auth-buttons');
    
    if (user) {
        authButtons.innerHTML = `
            <div class="user-menu">
                <span>${user.name}</span>
                <button onclick="logout()" class="btn-logout">Logout</button>
            </div>
        `;
    }
}

function logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    updateAuthUI();
    showToast('تم تسجيل الخروج بنجاح');
}

/* ==========================================
   Navigation Functions
   ========================================== */

function toggleMenu() {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
}

function navigateTo(section) {
    window.location.href = `${section}.html`;
}

/* ==========================================
   Theme Functions
   ========================================== */

function toggleTheme() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', darkMode);
    
    if (darkMode) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

function applyTheme() {
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
}

/* ==========================================
   Language Functions
   ========================================== */

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    setLanguage(currentLang);
    localStorage.setItem('language', currentLang);
}

function setLanguage(lang) {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    langToggle.textContent = lang === 'ar' ? 'EN' : 'العربية';
}

/* ==========================================
   Car Functions
   ========================================== */

function loadCars() {
    const cars = getCarsData();
    displayCars(cars);
}

function displayCars(cars) {
    carsGrid.innerHTML = '';
    
    if (cars.length === 0) {
        carsGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <i class="fas fa-search"></i>
                <p>${currentLang === 'ar' ? 'لم يتم العثور على سيارات' : 'No cars found'}</p>
            </div>
        `;
        return;
    }

    cars.forEach(car => {
        const carCard = createCarCard(car);
        carsGrid.appendChild(carCard);
    });
}

function createCarCard(car) {
    const card = document.createElement('div');
    card.className = 'car-card';
    
    const isFavorite = isCarFavorite(car.id);
    
    card.innerHTML = `
        <div class="car-image-container">
            <img src="${car.image}" alt="${car.brand} ${car.model}" class="car-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="car-image-fallback" style="display:none;">
                <i class="fas fa-car"></i>
            </div>
            <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${car.id}, event)">
                <i class="fas fa-heart"></i>
            </button>
        </div>
        <div class="car-content">
            <h3 class="car-title">${car.brand} ${car.model}</h3>
            <p class="car-brand">${car.year} • ${car.seller}</p>
            <div class="car-specs">
                <div class="spec">
                    <i class="fas fa-tachometer-alt"></i>
                    <span>${car.mileage} km</span>
                </div>
                <div class="spec">
                    <i class="fas fa-gas-pump"></i>
                    <span>${car.fuelType}</span>
                </div>
                <div class="spec">
                    <i class="fas fa-cog"></i>
                    <span>${car.transmission}</span>
                </div>
                <div class="spec">
                    <i class="fas fa-door-open"></i>
                    <span>${car.doors} doors</span>
                </div>
            </div>
            <div class="car-footer">
                <div>
                    <div class="car-price">${formatCurrency(car.price)}</div>
                    <div class="car-price-unit">${currentLang === 'ar' ? 'جنيه مصري' : 'EGP'}</div>
                </div>
                <button class="btn-view" onclick="viewCarDetails(${car.id})">
                    ${currentLang === 'ar' ? 'عرض' : 'View'}
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function filterCars(query) {
    const cars = getCarsData();
    const filtered = cars.filter(car => {
        const searchText = `${car.brand} ${car.model} ${car.year}`.toLowerCase();
        return searchText.includes(query.toLowerCase());
    });
    displayCars(filtered);
}

function applyFilters() {
    const brand = document.getElementById('brandFilter')?.value.toLowerCase() || '';
    const priceRange = document.getElementById('priceFilter')?.value || '';
    const fuelType = document.getElementById('fuelFilter')?.value || '';
    
    let cars = getCarsData();
    
    if (brand) {
        cars = cars.filter(car => car.brand.toLowerCase().includes(brand));
    }
    
    if (priceRange) {
        cars = cars.filter(car => {
            if (priceRange === '0-100000') return car.price < 100000;
            if (priceRange === '100000-300000') return car.price >= 100000 && car.price < 300000;
            if (priceRange === '300000-500000') return car.price >= 300000 && car.price < 500000;
            if (priceRange === '500000+') return car.price >= 500000;
            return true;
        });
    }
    
    if (fuelType) {
        cars = cars.filter(car => car.fuelType.toLowerCase() === fuelType);
    }
    
    displayCars(cars);
}

function viewCarDetails(carId) {
    localStorage.setItem('selectedCarId', carId);
    window.location.href = `car-details.html?id=${carId}`;
}

function toggleFavorite(carId, event) {
    event.stopPropagation();
    
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favorites.indexOf(carId);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(carId);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    const btn = event.target.closest('.favorite-btn');
    btn.classList.toggle('active');
    
    showToast(currentLang === 'ar' ? 'تم التحديث' : 'Updated');
}

function isCarFavorite(carId) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites.includes(carId);
}

/* ==========================================
   Rental Functions
   ========================================== */

function loadRentalCars() {
    const rentalCars = getRentalCarsData();
    displayRentalCars(rentalCars);
}

function displayRentalCars(cars) {
    rentalCarsGrid.innerHTML = '';
    
    if (cars.length === 0) {
        rentalCarsGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <i class="fas fa-car"></i>
                <p>${currentLang === 'ar' ? 'لا توجد سيارات متاحة للإيجار' : 'No rental cars available'}</p>
            </div>
        `;
        return;
    }

    cars.forEach(car => {
        const card = document.createElement('div');
        card.className = 'car-card rental-card';
        
        card.innerHTML = `
            <div class="car-image-container">
                <img src="${car.image}" alt="${car.brand} ${car.model}" class="car-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="car-image-fallback" style="display:none;">
                    <i class="fas fa-car"></i>
                </div>
                <div class="rental-price">${car.dailyRate}/${currentLang === 'ar' ? 'اليوم' : 'day'}</div>
            </div>
            <div class="car-content">
                <h3 class="car-title">${car.brand} ${car.model}</h3>
                <p class="car-brand">${car.year} • ${car.owner}</p>
                <div class="car-specs">
                    <div class="spec">
                        <i class="fas fa-users"></i>
                        <span>${car.seats} ${currentLang === 'ar' ? 'مقاعد' : 'seats'}</span>
                    </div>
                    <div class="spec">
                        <i class="fas fa-gas-pump"></i>
                        <span>${car.fuelType}</span>
                    </div>
                </div>
                <div class="car-footer">
                    <div>
                        <div class="car-price">${formatCurrency(car.weeklyRate)}</div>
                        <div class="car-price-unit">${currentLang === 'ar' ? 'بالأسبوع' : 'Per week'}</div>
                    </div>
                    <button class="btn-view" onclick="bookRental(${car.id})">
                        ${currentLang === 'ar' ? 'احجز الآن' : 'Book Now'}
                    </button>
                </div>
            </div>
        `;
        
        rentalCarsGrid.appendChild(card);
    });
}

function bookRental(rentalId) {
    localStorage.setItem('selectedRentalId', rentalId);
    window.location.href = `rental-details.html?id=${rentalId}`;
}

/* ==========================================
   Services Functions
   ========================================== */

function loadServices() {
    const services = getServicesData();
    displayServices(services);
}

function displayServices(services) {
    servicesGrid.innerHTML = '';
    
    if (services.length === 0) {
        servicesGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <i class="fas fa-tools"></i>
                <p>${currentLang === 'ar' ? 'لا توجد خدمات متاحة' : 'No services available'}</p>
            </div>
        `;
        return;
    }

    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        
        card.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <div class="service-price">${formatCurrency(service.price)}</div>
            <button class="btn-primary" onclick="bookService(${service.id})">
                ${currentLang === 'ar' ? 'احجز الآن' : 'Book Now'}
            </button>
        `;
        
        servicesGrid.appendChild(card);
    });
}

function bookService(serviceId) {
    localStorage.setItem('selectedServiceId', serviceId);
    window.location.href = `service-booking.html?id=${serviceId}`;
}

/* ==========================================
   Notification Functions
   ========================================== */

function showToast(message, duration = 3000) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

/* ==========================================
   Utility Functions
   ========================================== */

function formatCurrency(amount) {
    return new Intl.NumberFormat(currentLang === 'ar' ? 'ar-EG' : 'en-US', {
        style: 'currency',
        currency: 'EGP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function formatDate(date) {
    return new Date(date).toLocaleDateString(currentLang === 'ar' ? 'ar-EG' : 'en-US');
}

async function simulateApiCall(config) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                token: 'fake-jwt-token-' + Math.random(),
                user: {
                    name: 'أحمد محمد',
                    email: config.data.email,
                    id: Math.random()
                }
            });
        }, 1000);
    });
}

window.openModal = openModal;
window.closeModal = closeModal;
window.navigateTo = navigateTo;
window.viewCarDetails = viewCarDetails;
window.toggleFavorite = toggleFavorite;
window.bookRental = bookRental;
window.bookService = bookService;
window.logout = logout;

// برمجة سلايدر المهندسين
const slider = document.getElementById('engineersSlider');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

if (slider && nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        // التحريك لليسار في RTL يعني قيمة سالبة
        slider.scrollLeft -= 300;
    });

    prevBtn.addEventListener('click', () => {
        // التحريك لليمين في RTL يعني قيمة موجبة
        slider.scrollLeft += 300;
    });
}


// برمجة سلايدر طاقم مراكز الصيانة
const centersSlider = document.getElementById('centersSlider');
const centerNextBtn = document.getElementById('centerNextBtn');
const centerPrevBtn = document.getElementById('centerPrevBtn');

if (centersSlider && centerNextBtn && centerPrevBtn) {
    centerNextBtn.addEventListener('click', () => {
        centersSlider.scrollLeft -= 300; // التحريك لليسار
    });

    centerPrevBtn.addEventListener('click', () => {
        centersSlider.scrollLeft += 300; // التحريك لليمين
    });
}