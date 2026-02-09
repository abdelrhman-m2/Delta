/* ==========================================
   CarHub Pro - Data with Real Images
   ========================================== */

// Get Cars Data with Real Images
function getCarsData() {
    return [
        {
            id: 1,
            brand: 'BMW',
            model: '330i',
            year: 2023,
            price: 280000,
            mileage: 15000,
            fuelType: 'Petrol',
            transmission: 'Automatic',
            doors: 4,
            seller: 'Premium Motors',
            rating: 4.8,
            reviews: 124,
            image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop'
        },
        {
            id: 2,
            brand: 'Mercedes',
            model: 'C200',
            year: 2022,
            price: 320000,
            mileage: 25000,
            fuelType: 'Petrol',
            transmission: 'Automatic',
            doors: 4,
            seller: 'Luxury Cars Egypt',
            rating: 4.9,
            reviews: 156,
            image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop'
        },
        {
            id: 3,
            brand: 'Audi',
            model: 'A4',
            year: 2023,
            price: 300000,
            mileage: 10000,
            fuelType: 'Petrol',
            transmission: 'Automatic',
            doors: 4,
            seller: 'Auto Excellence',
            rating: 4.7,
            reviews: 98,
            image: 'data:image/jpeg;base64,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'
        },
        {
            id: 4,
            brand: 'Porsche',
            model: '911',
            year: 2023,
            price: 850000,
            mileage: 5000,
            fuelType: 'Petrol',
            transmission: 'Automatic',
            doors: 2,
            seller: 'Elite Motors',
            rating: 5.0,
            reviews: 89,
            image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop'
        },
        {
            id: 5,
            brand: 'Toyota',
            model: 'Camry',
            year: 2023,
            price: 180000,
            mileage: 8000,
            fuelType: 'Hybrid',
            transmission: 'Automatic',
            doors: 4,
            seller: 'City Cars',
            rating: 4.6,
            reviews: 234,
            image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop'
        },
        {
            id: 6,
            brand: 'Lexus',
            model: 'RX 350',
            year: 2022,
            price: 450000,
            mileage: 20000,
            fuelType: 'Hybrid',
            transmission: 'Automatic',
            doors: 4,
            seller: 'Premium Imports',
            rating: 4.8,
            reviews: 167,
            image: 'data:image/jpeg;base64,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'
        },
        {
            id: 7,
            brand: 'Tesla',
            model: 'Model 3',
            year: 2023,
            price: 350000,
            mileage: 0,
            fuelType: 'Electric',
            transmission: 'Automatic',
            doors: 4,
            seller: 'EV World',
            rating: 4.9,
            reviews: 142,
            image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop'
        },
        {
            id: 8,
            brand: 'Volvo',
            model: 'XC90',
            year: 2023,
            price: 420000,
            mileage: 12000,
            fuelType: 'Diesel',
            transmission: 'Automatic',
            doors: 4,
            seller: 'Safety First Motors',
            rating: 4.7,
            reviews: 115,
            image: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=600&h=400&fit=crop'
        },
        {
            id: 9,
            brand: 'Range Rover',
            model: 'Sport',
            year: 2022,
            price: 550000,
            mileage: 18000,
            fuelType: 'Petrol',
            transmission: 'Automatic',
            doors: 4,
            seller: 'Off Road Masters',
            rating: 4.8,
            reviews: 203,
            image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop'
        },
        {
            id: 10,
            brand: 'Aston Martin',
            model: 'DB11',
            year: 2023,
            price: 950000,
            mileage: 2000,
            fuelType: 'Petrol',
            transmission: 'Automatic',
            doors: 2,
            seller: 'Luxury Vehicles',
            rating: 5.0,
            reviews: 45,
            image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=600&h=400&fit=crop'
        },
        {
            id: 11,
            brand: 'Jaguar',
            model: 'F-TYPE',
            year: 2022,
            price: 420000,
            mileage: 15000,
            fuelType: 'Petrol',
            transmission: 'Automatic',
            doors: 2,
            seller: 'British Motors',
            rating: 4.6,
            reviews: 78,
            image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop'
        },
        {
            id: 12,
            brand: 'Bentley',
            model: 'Continental',
            year: 2023,
            price: 1200000,
            mileage: 1000,
            fuelType: 'Petrol',
            transmission: 'Automatic',
            doors: 4,
            seller: 'Elite Motors',
            rating: 5.0,
            reviews: 32,
            image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=600&h=400&fit=crop'
        }
    ];
}

// Get Rental Cars Data with Real Images
function getRentalCarsData() {
    return [
        {
            id: 101,
            brand: 'Toyota',
            model: 'Camry',
            year: 2023,
            dailyRate: 350,
            weeklyRate: 2100,
            monthlyRate: 7500,
            seats: 5,
            fuelType: 'Petrol',
            owner: 'Cairo Rentals',
            image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop'
        },
        {
            id: 102,
            brand: 'BMW',
            model: '320i',
            year: 2023,
            dailyRate: 550,
            weeklyRate: 3300,
            monthlyRate: 11000,
            seats: 5,
            fuelType: 'Petrol',
            owner: 'Luxury Rentals',
            image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop'
        },
        {
            id: 103,
            brand: 'Hyundai',
            model: 'Elantra',
            year: 2023,
            dailyRate: 280,
            weeklyRate: 1680,
            monthlyRate: 6000,
            seats: 5,
            fuelType: 'Petrol',
            owner: 'Economy Rentals',
            image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&h=400&fit=crop'
        },
        {
            id: 104,
            brand: 'Mercedes',
            model: 'E-Class',
            year: 2022,
            dailyRate: 650,
            weeklyRate: 3900,
            monthlyRate: 13000,
            seats: 5,
            fuelType: 'Petrol',
            owner: 'Premium Rentals',
            image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop'
        },
        {
            id: 105,
            brand: 'Kia',
            model: 'Sportage',
            year: 2023,
            dailyRate: 420,
            weeklyRate: 2520,
            monthlyRate: 9000,
            seats: 5,
            fuelType: 'Petrol',
            owner: 'SUV Rentals',
            image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&h=400&fit=crop'
        },
        {
            id: 106,
            brand: 'Audi',
            model: 'A6',
            year: 2023,
            dailyRate: 600,
            weeklyRate: 3600,
            monthlyRate: 12000,
            seats: 5,
            fuelType: 'Petrol',
            owner: 'Executive Rentals',
            image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop'
        }
    ];
}

// Get Services Data
function getServicesData() {
    return [
        {
            id: 201,
            name: 'Oil Change',
            description: 'Professional oil and filter change service',
            price: 350,
            icon: 'fas fa-tint',
            mechanic: 'Pro Mechanics',
            duration: '30 mins'
        },
        {
            id: 202,
            name: 'Car Inspection',
            description: 'Complete vehicle inspection and diagnostics',
            price: 500,
            icon: 'fas fa-stethoscope',
            mechanic: 'Auto Experts',
            duration: '1 hour'
        },
        {
            id: 203,
            name: 'Brake Service',
            description: 'Brake pads replacement and rotor servicing',
            price: 800,
            icon: 'fas fa-hand-paper',
            mechanic: 'Safety First',
            duration: '45 mins'
        },
        {
            id: 204,
            name: 'Tire Replacement',
            description: 'Premium tire replacement service',
            price: 1200,
            icon: 'fas fa-ring',
            mechanic: 'Tire World',
            duration: '1 hour'
        },
        {
            id: 205,
            name: 'Engine Repair',
            description: 'Engine diagnostics and repair service',
            price: 2500,
            icon: 'fas fa-cogs',
            mechanic: 'Engine Masters',
            duration: 'Varies'
        },
        {
            id: 206,
            name: 'Battery Service',
            description: 'Battery replacement and charging service',
            price: 600,
            icon: 'fas fa-battery-half',
            mechanic: 'Power Services',
            duration: '20 mins'
        },
        {
            id: 207,
            name: 'Car Wash',
            description: 'Premium exterior and interior wash',
            price: 250,
            icon: 'fas fa-water',
            mechanic: 'Shine Masters',
            duration: '1.5 hours'
        },
        {
            id: 208,
            name: 'AC Service',
            description: 'Air conditioning system cleaning and repair',
            price: 700,
            icon: 'fas fa-snowflake',
            mechanic: 'Cool Cars',
            duration: '1 hour'
        },
        {
            id: 209,
            name: 'Suspension Repair',
            description: 'Suspension system inspection and repair',
            price: 1500,
            icon: 'fas fa-car',
            mechanic: 'Ride Comfort',
            duration: '2 hours'
        },
        {
            id: 210,
            name: 'Transmission Service',
            description: 'Transmission fluid change and service',
            price: 1800,
            icon: 'fas fa-gears',
            mechanic: 'Power Drive',
            duration: '1.5 hours'
        }
    ];
}

// Get Mechanics Data with Real Images
function getMechanicsData() {
    return [
        {
            id: 1,
            name: 'Pro Mechanics Cairo',
            address: 'Downtown Cairo',
            phone: '+201012345678',
            email: 'info@promechanics.com',
            rating: 4.8,
            reviews: 234,
            image: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=400&h=400&fit=crop',
            specializations: ['Oil Change', 'Inspection', 'General Maintenance'],
            hours: '08:00 - 18:00'
        },
        {
            id: 2,
            name: 'Auto Experts Alexandria',
            address: 'Alexandria',
            phone: '+201098765432',
            email: 'info@autoexperts.com',
            rating: 4.7,
            reviews: 189,
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop',
            specializations: ['Engine Repair', 'Diagnostics', 'Performance'],
            hours: '07:00 - 19:00'
        },
        {
            id: 3,
            name: 'Safety First Motors',
            address: 'Giza',
            phone: '+201156789012',
            email: 'info@safetyfirst.com',
            rating: 4.9,
            reviews: 312,
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop',
            specializations: ['Brakes', 'Safety Systems', 'Tires'],
            hours: '08:00 - 20:00'
        }
    ];
}

// Get Testimonials Data
function getTestimonialsData() {
    return [
        {
            id: 1,
            author: 'أحمد محمد',
            location: 'القاهرة',
            rating: 5,
            text: 'خدمة ممتازة جداً! عملية شراء السيارة كانت سهلة وآمنة جداً',
            image: 'https://i.pravatar.cc/150?img=12'
        },
        {
            id: 2,
            author: 'فاطمة علي',
            location: 'الإسكندرية',
            rating: 5,
            text: 'استأجرت سيارة للرحلة العائلية وكانت التجربة رائعة جداً',
            image: 'https://i.pravatar.cc/150?img=45'
        },
        {
            id: 3,
            author: 'محمود حسن',
            location: 'الجيزة',
            rating: 5,
            text: 'بعت سيارتي بسهولة جداً والفريق كان محترف جداً',
            image: 'https://i.pravatar.cc/150?img=33'
        },
        {
            id: 4,
            author: 'نور يوسف',
            location: 'القاهرة',
            rating: 5,
            text: 'تجربة رائعة من البداية إلى النهاية. الفريق جداً متعاون',
            image: 'https://i.pravatar.cc/150?img=47'
        }
    ];
}

// Search Cars
function searchCars(query) {
    const cars = getCarsData();
    return cars.filter(car => {
        const searchText = `${car.brand} ${car.model} ${car.year}`.toLowerCase();
        return searchText.includes(query.toLowerCase());
    });
}

// Filter Cars by Criteria
function filterCarsByCriteria(criteria) {
    let cars = getCarsData();

    if (criteria.brand) {
        cars = cars.filter(car => car.brand.toLowerCase() === criteria.brand.toLowerCase());
    }

    if (criteria.minPrice) {
        cars = cars.filter(car => car.price >= criteria.minPrice);
    }

    if (criteria.maxPrice) {
        cars = cars.filter(car => car.price <= criteria.maxPrice);
    }

    if (criteria.fuelType) {
        cars = cars.filter(car => car.fuelType.toLowerCase() === criteria.fuelType.toLowerCase());
    }

    if (criteria.transmission) {
        cars = cars.filter(car => car.transmission.toLowerCase() === criteria.transmission.toLowerCase());
    }

    if (criteria.minYear) {
        cars = cars.filter(car => car.year >= criteria.minYear);
    }

    return cars;
}

// Get Car by ID
function getCarById(id) {
    const cars = getCarsData();
    return cars.find(car => car.id === parseInt(id));
}

// Get Rental Car by ID
function getRentalCarById(id) {
    const rentalCars = getRentalCarsData();
    return rentalCars.find(car => car.id === parseInt(id));
}

// Get Service by ID
function getServiceById(id) {
    const services = getServicesData();
    return services.find(service => service.id === parseInt(id));
}

// Get Mechanic by ID
function getMechanicById(id) {
    const mechanics = getMechanicsData();
    return mechanics.find(mechanic => mechanic.id === parseInt(id));
}

// Get Popular Cars
function getPopularCars() {
    return getCarsData().slice(0, 6);
}

// Get Best Rated Cars
function getBestRatedCars() {
    const cars = getCarsData();
    return cars.sort((a, b) => b.rating - a.rating).slice(0, 6);
}

// Get Newest Cars
function getNewestCars() {
    const cars = getCarsData();
    return cars.sort((a, b) => b.year - a.year).slice(0, 6);
}

// Statistics
function getStatistics() {
    return {
        totalCars: getCarsData().length,
        totalRentals: getRentalCarsData().length,
        totalServices: getServicesData().length,
        totalMechanics: getMechanicsData().length,
        happyCustomers: 10234,
        transactionsCompleted: 5678,
        averageRating: 4.8
    };
}