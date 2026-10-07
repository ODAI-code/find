/* Centralized Hostel Data */
// Structured vertically for readability

const locations = ["Amamoma", "Kwaprow", "Apewosika", "Abura", "Ola", "North Campus"];

// Demo Data Array
const hostels = [
    {
        id: 1,
        name: "Mercy Hostel",
        location: "Amamoma",
        price: 4500,
        roomType: "4-in-a-room",
        description: "A secure and quiet environment perfect for studying, located just 5 minutes from the university gate.",
        images: [
            "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80"
        ],
        video: "videos/hostels/sample-room.mp4",
        amenities: ["Wi-Fi", "Water", "Security", "Kitchen", "Wardrobe", "Parking"],
        availability: "Available",
        manager: {
            name: "Demo Manager A",
            phone: "0240000001",
            whatsapp: "233240000001",
            email: "manager.a@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Mercy Hostel Ent",
            momoNumber: "0240000001"
        }
    },
    {
        id: 2,
        name: "Edi Bee Hostel",
        location: "Amamoma",
        price: 5200,
        roomType: "2-in-a-room",
        description: "Premium accommodation with spacious rooms and reliable electricity.",
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80"
        ],
        video: "",
        amenities: ["Water", "Security", "Generator", "Study table"],
        availability: "Available",
        manager: {
            name: "Demo Manager B",
            phone: "0240000002",
            whatsapp: "233240000002",
            email: "manager.b@example.com"
        },
        paymentDetails: {
            momoNetwork: "Vodafone Cash",
            momoName: "Edi Bee Rentals",
            momoNumber: "0200000002"
        }
    },
    {
        id: 3,
        name: "Comfort Hostel",
        location: "Kwaprow",
        price: 3800,
        roomType: "4-in-a-room",
        description: "Affordable and highly social hostel in the heart of Kwaprow.",
        images: ["https://images.unsplash.com/photo-1502672260266-1c1e5240980c?auto=format&fit=crop&q=80"],
        video: "",
        amenities: ["Water", "Security", "Balcony"],
        availability: "Available",
        manager: {
            name: "Demo Manager C",
            phone: "0240000003",
            whatsapp: "233240000003",
            email: "manager.c@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Comfort Accommodations",
            momoNumber: "0240000003"
        }
    }
];

// PROGRAMMATIC DEMO DATA GENERATION 
// (To meet the 24 records constraint easily while keeping code clean)
let currentId = 4;
locations.forEach(loc => {
    for(let i=1; i<=3; i++) {
        hostels.push({
            id: currentId++,
            name: `${loc} Standard Hostel ${i}`,
            location: loc,
            price: Math.floor(Math.random() * 3000) + 3000,
            roomType: i % 2 === 0 ? "2-in-a-room" : "4-in-a-room",
            description: `A standard student accommodation located in ${loc}. Independent verification recommended.`,
            images: ["https://images.unsplash.com/photo-1502672260266-1c1e5240980c?auto=format&fit=crop&q=80"],
            video: "",
            amenities: ["Water", "Security", "Bed", "Cleaning service"],
            availability: "Available",
            manager: {
                name: `Manager ${loc} ${i}`,
                phone: `024111222${i}`,
                whatsapp: `23324111222${i}`,
                email: `manager${currentId}@example.com`
            },
            paymentDetails: {
                momoNetwork: "MTN Mobile Money",
                momoName: `Hostel ${loc} ${i}`,
                momoNumber: `024111222${i}`
            }
        });
    }
});