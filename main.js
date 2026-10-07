/* Core UI Interactions & Card Rendering */

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    setupWhatsApp();
});

function setupWhatsApp() {
    const waButton = document.getElementById('wa-float');
    if (waButton) {
        const phone = "233240000000";
        const message = encodeURIComponent("Hello UCC Hostel Finder, I need help finding a hostel.");
        waButton.href = `https://wa.me/${phone}?text=${message}`;
    }
}

// Modal Control
function closeModal(modalId) {
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
        targetModal.style.display = 'none';
    }
}

function openRoomView(hostelId) {
    const hostel = hostels.find(h => h.id === hostelId);
    if (!hostel) return;

    document.getElementById('modalHostelName').textContent = hostel.name;
    document.getElementById('modalLocation').textContent = `📍 ${hostel.location}`;
    document.getElementById('modalPrice').textContent = `GH₵ ${hostel.price.toLocaleString()} / academic year`;
    document.getElementById('modalRoomType').textContent = hostel.roomType;
    document.getElementById('modalDesc').textContent = hostel.description;
    
    const mainImg = document.getElementById('modalMainImg');
    mainImg.src = hostel.images[0];
    
    const thumbs = document.getElementById('modalThumbs');
    thumbs.innerHTML = '';
    hostel.images.forEach(img => {
        const thumb = document.createElement('img');
        thumb.src = img;
        thumb.onclick = () => mainImg.src = img;
        thumbs.appendChild(thumb);
    });

    document.getElementById('btnInitPayment').setAttribute('data-id', hostel.id);
    document.getElementById('roomModal').style.display = 'flex';
}

/* Helper function to map amenities to Font Awesome icons */
function getAmenityIcon(amenity) {
    const name = amenity.toLowerCase().trim();
    if (name.includes('wi-fi') || name.includes('wifi')) return 'fa-wifi';
    if (name.includes('water')) return 'fa-droplet';
    if (name.includes('security')) return 'fa-shield-halved';
    if (name.includes('kitchen')) return 'fa-utensils';
    if (name.includes('wardrobe')) return 'fa-door-closed';
    if (name.includes('parking')) return 'fa-square-parking';
    if (name.includes('generator') || name.includes('electricity')) return 'fa-bolt';
    if (name.includes('study') || name.includes('table')) return 'fa-book-open';
    if (name.includes('bed')) return 'fa-bed';
    if (name.includes('balcony')) return 'fa-building';
    if (name.includes('fan')) return 'fa-fan';
    if (name.includes('ac') || name.includes('air conditioning')) return 'fa-snowflake';
    if (name.includes('washroom') || name.includes('toilet')) return 'fa-bath';
    if (name.includes('cctv')) return 'fa-video';
    if (name.includes('cleaning')) return 'fa-broom';
    return 'fa-circle-check';
}

/* Build Uniform Hostel Card HTML */
function createHostelCard(hostel) {
    const amenitiesHtml = hostel.amenities.map(amenity => {
        const iconClass = getAmenityIcon(amenity);
        return `
            <span class="amenity">
                <i class="fa-solid ${iconClass}"></i> ${amenity}
            </span>
        `;
    }).join('');
    
    return `
        <div class="hostel-card">
            <img src="${hostel.images[0]}" alt="${hostel.name}" class="hostel-image" loading="lazy">
            <div class="hostel-info">
                <h3>${hostel.name}</h3>
                <p style="color: var(--text-light); font-size: 14px;">📍 ${hostel.location}</p>
                <div class="hostel-price">GH₵ ${hostel.price.toLocaleString()} <small style="font-weight:normal; font-size:12px;">/ yr</small></div>
                <p style="font-size: 14px;"><strong>Room:</strong> ${hostel.roomType}</p>
                
                <div class="amenity-tags">
                    ${amenitiesHtml}
                </div>
                
                <div class="card-actions">
                    <button class="btn btn-primary" onclick="openRoomView(${hostel.id})">
                        <i class="fa-solid fa-eye"></i> View Room
                    </button>
                    <button class="btn btn-accent" onclick="initiatePayment(${hostel.id})">
                        <i class="fa-solid fa-lock"></i> Book & Pay
                    </button>
                </div>
            </div>
        </div>
    `;
}