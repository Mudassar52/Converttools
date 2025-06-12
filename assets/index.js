document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times');
    });

    // Handle dropdown toggles on mobile
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && link.nextElementSibling?.classList.contains('dropdown')) {
                e.preventDefault();
                link.parentElement.classList.toggle('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.querySelector('i').classList.remove('fa-times');
            hamburger.querySelector('i').classList.add('fa-bars');
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            hamburger.querySelector('i').classList.remove('fa-times');
            hamburger.querySelector('i').classList.add('fa-bars');
        }
    });
});


  // Add hover effect to tool cards
  document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 30;
        const rotateY = -(x - centerX) / 30;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// Animate floating shapes
document.querySelectorAll('.shape').forEach((shape, index) => {
    shape.style.animation = `float ${10 + index * 2}s infinite linear`;
});

// Add pulse effect to subscribe button
const subscribeBtn = document.querySelector('.subscribe-btn');
setInterval(() => {
    subscribeBtn.style.transform = 'scale(1.1)';
    setTimeout(() => {
        subscribeBtn.style.transform = 'scale(1)';
    }, 200);
}, 3000);




     // Tab switching and filtering functionality
     const tabs = document.querySelectorAll('.tab');
const tools = document.querySelectorAll('.tool-card');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');

        const category = tab.getAttribute('data-category');
        
        // Filter tools
        tools.forEach(tool => {
            if (category === 'all' || tool.getAttribute('data-category') === category) {
                tool.classList.remove('hidden');
                // Reset animation
                tool.style.animation = 'none';
                tool.offsetHeight; // Trigger reflow
                tool.style.animation = 'fadeIn 0.5s ease-out';
            } else {
                tool.classList.add('hidden');
            }
        });
    });
});

// Card hover effects
const cards = document.querySelectorAll('.tool-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    });
});






AOS.init({
    duration: 800,
    offset: 100,
    once: true
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'none';
    });
});






document.querySelectorAll('.tool-card1').forEach(card => {
    // Advanced 3D tilt effect
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / 10) * -1;
        const rotateY = (x - centerX) / 10;
        
        // Apply smooth transform with perspective
        card.style.transform = `
            perspective(1000px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg) 
            translateY(-15px)
            scale3d(1.02, 1.02, 1.02)
        `;
    });

    // Smooth reset on mouse leave
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale3d(1, 1, 1)';
    });

    // Add floating animation with random delay
    card.style.animation = `float ${3 + Math.random()}s ease-in-out infinite`;
});



   // Add smooth 3D tilt effect on mouse move
   document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = -(x - centerX) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});






function handleKeyPress(event) {
    if (event.key === "Enter") { // چیک کریں کہ انٹر بٹن دبایا گیا ہے
        openFile();
    }
}

function openFile() {
    let fileName = document.getElementById("searchInput").value.trim().toLowerCase();
    
    // اپنی HTML فائل کا اصل پاتھ یہاں رکھیں (لوکل یا ہوسٹڈ)
    let localFilePath = "tools-dashboard.html"; // یہاں اپنی فائل کا نام دیں
    
    if (fileName !== "") {
        window.location.href = localFilePath; // لوکل HTML فائل کو اوپن کرے گا
    } else {
        alert("براہ کرم فائل کا نام لکھیں!");
    }
}











