

        // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navMenu = document.querySelector('nav ul');
       
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.innerHTML = navMenu.classList.contains('active') ?
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
       
        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
               
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
               
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
       
        // Active Navigation Link on Scroll
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');
       
        window.addEventListener('scroll', () => {
            let current = '';
           
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
               
                if (pageYOffset >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });
           
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });
       
        // Scroll to Top Button
        const scrollTopBtn = document.querySelector('.scroll-top');
       
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });
       
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
       
        // Form Submission
        const contactForm = document.querySelector('.contact-form form');
       
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
           
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            // Show success message (in a real scenario, you would send this data to a server)
            alert(`شكراً ${name}، تم استلام رسالتك بنجاح! سوف نتصل بك على ${email} قريباً.`);
           FileSystemDirectoryHandle(name,email,phone);
           localStorage.getItem(name,email,phone);
            // Reset form
            contactForm.reset();
        });
    // تهيئة خريطة OpenStreetMap
        function initMap() {
            // إحداثيات المشروع من قاعدة البيانات
            const projectLocation = ['13.591103','44.044658'];
            // إنشاء الخريطة
            const map = L.map('map').setView(projectLocation, 15);
            // إضافة طبقة OpenStreetMap
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 19
            }).addTo(map);
            // إنشاء علامة مخصصة
            const customIcon = L.divIcon({
                className: 'custom-marker',
                html: '',
                iconSize: [30, 30],
               
            });
            
            // إضافة علامة على موقع المشروع
            L.marker(projectLocation, {icon: customIcon}).addTo(map)
            

                .openPopup();
            
            // إضافة دائرة حول الموقع
            L.circle(projectLocation, {
                color: '#2A5C82',
                fillColor: '#2A5C82',
                fillOpacity: 0.2,
                radius: 300
            }).addTo(map);
            
            // إضافة مقياس
            L.control.scale().addTo(map);
        }
        
        // تهيئة الخريطة بعد تحميل الصفحة
        document.addEventListener('DOMContentLoaded', function() {
            initMap();
        });
        