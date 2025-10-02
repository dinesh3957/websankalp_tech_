document.addEventListener('DOMContentLoaded', () => {

    // =================================================================================
    // 0. DYNAMIC PATH RESOLVER
    // =================================================================================
    // Determine the correct image path based on current page location
    const getImageBasePath = () => {
        const currentPath = window.location.pathname;
        // If we're in a pages subdirectory, use ../Images/
        if (currentPath.includes('/pages/')) {
            return '../Images/';
        }
        // If we're in the root directory, use Images/
        return 'Images/';
    };
    
    const IMG_BASE_PATH = getImageBasePath();

    // =================================================================================

        {
            id: 'WS-CCTV-002',
            category: 'CCTV & Security',
            brand: 'Bosch',
            series: 'Security Camera',
            subtype: 'Network Camera',
            model: 'NBC Series',
            image: IMG_BASE_PATH + 'Security/Camera/Bosch/netwokca.jpg',
            features: ['Network Connectivity', 'High Resolution', 'Remote Access', 'Motion Detection'],
            officialUrl: 'https://www.boschsecurity.com/'
        },
        {
            id: 'WS-CCTV-003',
            category: 'CCTV & Security',
            brand: 'Honeywell',
            series: 'Performance Series',
            subtype: 'Box Camera',
            model: 'HBX-3300',
            image: IMG_BASE_PATH + 'Security/Camera/Honeywell/boxcam.png',
            features: ['3MP Resolution', 'Day/Night Vision', 'Flexible Mounting', 'Professional Grade'],
            officialUrl: 'https://www.honeywellsecurity.com/'
        },
        {
            id: 'WS-CCTV-004',
            category: 'CCTV & Security',
            brand: 'Honeywell',
            series: 'MicroDome Series',
            subtype: 'Micro Dome Camera',
            model: 'MicroDome HD',
            image: IMG_BASE_PATH + 'Security/Camera/Honeywell/Microdome .png',
            features: ['Compact Design', 'HD Quality', 'Easy Installation', 'Wide Coverage'],
            officialUrl: 'https://www.honeywellsecurity.com/'
        },
        {
            id: 'WS-CCTV-005',
            category: 'CCTV & Security',
            brand: 'Vicon',
            series: 'Valkyrie Series',
            subtype: 'Security Camera',
            model: 'Valkyrie 10K',
            image: IMG_BASE_PATH + 'Security/Camera/Vicon/Valkyrie_Flat_Front_10K_V2.png',
            features: ['10MP Resolution', 'Advanced Analytics', 'Weather Resistant', 'Professional Security'],
            officialUrl: 'https://www.vicon-security.com/'
        },
        {
            id: 'WS-CCTV-006',
            category: 'CCTV & Security',
            brand: 'Vicon',
            series: 'Vanguard Series',
            subtype: 'PTZ Camera',
            model: 'Vanguard PTZ',
            image: IMG_BASE_PATH + 'Security/Camera/Vicon/Vanguard.png',
            features: ['Pan-Tilt-Zoom', 'Auto Tracking', 'High Speed', 'Professional Control'],
            officialUrl: 'https://www.vicon-security.com/'
        },

        // -- Access Control Products --
        {
            id: 'WS-AC-001',
            category: 'Access Control',
            brand: 'Dahua',
            series: 'Access Series',
            subtype: 'Access Controller',
            model: 'ASI1201A',
            image: IMG_BASE_PATH + 'Security/access control/Dahua/ASI1201A_ASI1201A-D_thumb.png',
            features: ['RFID Access', 'Multi-User Support', 'Network Connectivity', 'Time Attendance'],
            officialUrl: 'https://www.dahuasecurity.com/'
        },
        {
            id: 'WS-AC-002',
            category: 'Access Control',
            brand: 'Dahua',
            series: 'Fingerprint Series',
            subtype: 'Biometric Reader',
            model: 'ASI1212F-21',
            image: IMG_BASE_PATH + 'Security/access control/Dahua/ASI1212F-21_thumb.png',
            features: ['Fingerprint Recognition', 'High Accuracy', 'Fast Processing', 'Secure Access'],
            officialUrl: 'https://www.dahuasecurity.com/'
        },
        {
            id: 'WS-AC-003',
            category: 'Access Control',
            brand: 'ESSL',
            series: 'Attendance Series',
            subtype: 'Time Attendance',
            model: 'ESSL-X628C',
            image: IMG_BASE_PATH + 'Security/access control/essl/essl.png',
            features: ['Face Recognition', 'Fingerprint Scanner', 'Card Reader', 'Cloud Connectivity'],
            officialUrl: 'https://www.esslsecurity.com/'
        },

        // -- Video Door Systems --
        {
            id: 'WS-VD-001',
            category: 'Video Door Systems',
            brand: 'Dahua',
            series: 'VTO Series',
            subtype: 'Video Doorbell',
            model: 'VTO3211D-P',
            image: IMG_BASE_PATH + 'Security/Video door/dahua/doorbell.png',
            features: ['HD Video Call', 'Motion Detection', 'Night Vision', 'Mobile App'],
            officialUrl: 'https://www.dahuasecurity.com/'
        },
        {
            id: 'WS-VD-002',
            category: 'Video Door Systems',
            brand: 'Hikvision',
            series: 'Door Station',
            subtype: 'IP Door Station',
            model: 'DS-KV6113-WPE1',
            image: IMG_BASE_PATH + 'Security/Video door/Hikvision/hik1.png',
            features: ['Weather Resistant', 'Two-Way Audio', 'Remote Unlock', 'High Definition'],
            officialUrl: 'https://www.hikvision.com/'
        },

        // -- Audio Solutions --
        {
            id: 'WS-AUD-001',
            category: 'Audio Solutions',
            brand: 'boAt',
            series: 'Rockerz Series',
            subtype: 'Wireless Headphones',
            model: 'Rockerz 480',
            image: IMG_BASE_PATH + 'Audio_Video/audio_solutions/headphones/boAt Rockerz 480 W_RGB .png',
            features: ['RGB Lighting', 'Wireless Bluetooth', 'Long Battery Life', 'Bass Boost'],
            officialUrl: 'https://www.boat-lifestyle.com/'
        },
        {
            id: 'WS-AUD-002',
            category: 'Audio Solutions',
            brand: 'JBL',
            series: 'Tune Series',
            subtype: 'Wireless Headphones',
            model: 'Tune 510BT',
            image: IMG_BASE_PATH + 'Audio_Video/audio_solutions/headphones/JBL Tune 510BT, On Ear Wireless Headphones .png',
            features: ['Pure Bass Sound', '40H Battery Life', 'Wireless Freedom', 'Hands-free Calls'],
            officialUrl: 'https://in.jbl.com/'
        },
        {
            id: 'WS-AUD-003',
            category: 'Audio Solutions',
            brand: 'Sony',
            series: 'Professional Series',
            subtype: 'Headphones',
            model: 'Sony Professional',
            image: IMG_BASE_PATH + 'Audio_Video/audio_solutions/headphones/SONY.png',
            features: ['Studio Quality', 'Noise Cancellation', 'Premium Build', 'Professional Audio'],
            officialUrl: 'https://www.sony.co.in/'
        },
        {
            id: 'WS-AUD-004',
            category: 'Audio Solutions',
            brand: 'JBL',
            series: 'Cinema Series',
            subtype: 'Soundbar',
            model: 'Cinema SB580',
            image: IMG_BASE_PATH + 'Audio_Video/audio_solutions/soundbars/JBL Cinema SB580 440W Bluetooth Soundbar.png',
            features: ['440W Power', 'Bluetooth Connectivity', 'Cinema Experience', 'Wireless Subwoofer'],
            officialUrl: 'https://in.jbl.com/'
        },
        {
            id: 'WS-AUD-005',
            category: 'Audio Solutions',
            brand: 'Sony',
            series: 'ULT Series',
            subtype: 'Party Speaker',
            model: 'ULT TOWER 10',
            image: IMG_BASE_PATH + 'Audio_Video/audio_solutions/speakers/Sony ULT TOWER 10 Party Speaker.png',
            features: ['High Power Output', 'Party Lighting', 'Wireless Connectivity', 'Deep Bass'],
            officialUrl: 'https://www.sony.co.in/'
        },

        // -- Camera Equipment --
        {
            id: 'WS-CAM-001',
            category: 'Camera Equipment',
            brand: 'Canon',
            series: 'EOS Series',
            subtype: 'DSLR Camera',
            model: 'EOS 750D',
            image: IMG_BASE_PATH + 'Audio_Video/hardware/cameras/Canon/Canon EOS 750D.png',
            features: ['24.2MP Sensor', 'Wi-Fi Enabled', 'Full HD Video', 'Articulating LCD'],
            officialUrl: 'https://www.canon.co.in/'
        },
        {
            id: 'WS-CAM-002',
            category: 'Camera Equipment',
            brand: 'Canon',
            series: 'PowerShot Series',
            subtype: 'Digital Camera',
            model: 'PowerShot SX740 HS',
            image: IMG_BASE_PATH + 'Audio_Video/hardware/cameras/Canon/PowerShot SX740 HS.png',
            features: ['40x Optical Zoom', '4K Video', 'Wi-Fi/Bluetooth', 'Compact Design'],
            officialUrl: 'https://www.canon.co.in/'
        },
        {
            id: 'WS-CAM-003',
            category: 'Camera Equipment',
            brand: 'Nikon',
            series: 'Z Series',
            subtype: 'Mirrorless Camera',
            model: 'Z 6III Body',
            image: IMG_BASE_PATH + 'Audio_Video/hardware/cameras/Nikon/Nikon Digital Camera Z 6III Body with NIKKOR .png',
            features: ['Full Frame Sensor', 'NIKKOR Lens', '4K Video', 'Professional Grade'],
            officialUrl: 'https://www.nikon.co.in/'
        },
        {
            id: 'WS-CAM-004',
            category: 'Camera Equipment',
            brand: 'Sony',
            series: 'ILCE Series',
            subtype: 'Mirrorless Camera',
            model: 'ILCE-1',
            image: IMG_BASE_PATH + 'Audio_Video/hardware/cameras/Sony/ILCE-1.png',
            features: ['50MP Full Frame', '8K Video Recording', 'Real-time Eye AF', 'Professional Features'],
            officialUrl: 'https://www.sony.co.in/'
        },

        // -- Projector Solutions --
        {
            id: 'WS-PROJ-001',
            category: 'Projector Solutions',
            brand: 'Portronics',
            series: 'Beem Series',
            subtype: 'Smart Projector',
            model: 'Beem 500',
            image: IMG_BASE_PATH + 'Audio_Video/projectors/dlp/Portronics Beem 500 Smart Projector.png',
            features: ['Smart Android OS', 'HD Resolution', 'Portable Design', 'Wireless Connectivity'],
            officialUrl: 'https://www.portronics.com/'
        },
        {
            id: 'WS-PROJ-002',
            category: 'Projector Solutions',
            brand: 'ViewSonic',
            series: 'PA Series',
            subtype: 'DLP Projector',
            model: 'PA503S',
            image: IMG_BASE_PATH + 'Audio_Video/projectors/dlp/ViewSonic PA503S DLP Projector.png',
            features: ['DLP Technology', 'High Brightness', 'Long Lamp Life', 'Business Ready'],
            officialUrl: 'https://www.viewsonic.com/'
        },
        {
            id: 'WS-PROJ-003',
            category: 'Projector Solutions',
            brand: 'XGIMI',
            series: 'Smart Series',
            subtype: 'Smart Projector',
            model: 'XGIMI Smart',
            image: IMG_BASE_PATH + 'Audio_Video/projectors/dlp/XGIMI.png',
            features: ['4K Resolution', 'Smart OS', 'Auto Focus', 'Premium Audio'],
            officialUrl: 'https://www.xgimi.com/'
        },
        {
            id: 'WS-PROJ-004',
            category: 'Projector Solutions',
            brand: 'Epson',
            series: '2165W Series',
            subtype: '3LCD Projector',
            model: 'Epson 2165W WXGA',
            image: IMG_BASE_PATH + 'Audio_Video/projectors/lcd/Epson 2165W WXGA 3LCD Projector.png',
            features: ['3LCD Technology', 'WXGA Resolution', 'High Color Brightness', 'Reliable Performance'],
            officialUrl: 'https://www.epson.co.in/'
        },

        // -- POS Systems Products --
        {
            id: 'WS-POS-001',
            category: 'POS Systems',
            brand: 'WebSankalp',
            series: 'RetailMax',
            subtype: 'Billing Software',
            model: 'WS-RetailMax-Cloud',
            image: IMG_BASE_PATH + 'Point of Sales/posiflex-pos-system.jpg',
            features: ['Cloud-Based', 'Inventory Management', 'GST Ready', 'CRM Included'],
            officialUrl: 'https://websankalp.in/'
        },

        // -- Industrial IoT Products --
        {
            id: 'WS-IOT-001',
            category: 'Industrial IoT',
            brand: 'WebSankalp',
            series: 'IoT Solutions',
            subtype: 'IoT Platform',
            model: 'WS-IoT-Pro',
            image: IMG_BASE_PATH + 'Industrial IoT Home Page/iot.jpg',
            features: ['Sensor Integration', 'Real-time Analytics', 'Cloud Platform', 'Dashboard Monitoring'],
            officialUrl: 'https://websankalp.in/'
        },

        // -- Industrial Touch PC --
        {
            id: 'WS-IPC-001',
            category: 'Industrial Touch PC',
            brand: 'WebSankalp',
            series: 'Industrial Series',
            subtype: 'Touch Panel PC',
            model: 'WS-TouchPC-Pro',
            image: IMG_BASE_PATH + 'Industrial Touch PC/download.jpeg',
            features: ['Industrial Grade', 'Multi-touch Display', 'Rugged Design', 'Extended Temperature'],
            officialUrl: 'https://websankalp.in/'
        },

        // -- Battery Packs --
        {
            id: 'WS-BAT-001',
            category: 'Battery Packs',
            brand: 'WebSankalp',
            series: 'Power Solutions',
            subtype: 'Li-Ion Battery',
            model: 'WS-Battery-LFP',
            image: IMG_BASE_PATH + 'Renewable Li-Ion & LFP Battery/download (1).jpeg',
            features: ['LiFePO4 Technology', 'Long Cycle Life', 'Fast Charging', 'Safety Features'],
            officialUrl: 'https://websankalp.in/'
        },

        // -- Additional Audio Solutions --
        {
            id: 'WS-AUD-006',
            category: 'Audio Solutions',
            brand: 'JBL',
            series: 'Brand Series',
            subtype: 'Headphones',
            model: 'JBL Professional',
            image: IMG_BASE_PATH + 'Audio_Video/audio_solutions/headphones/JBL.png',
            features: ['Professional Grade', 'Superior Sound', 'Durable Build', 'Studio Quality'],
            officialUrl: 'https://in.jbl.com/'
        },
        {
            id: 'WS-AUD-007',
            category: 'Audio Solutions',
            brand: 'Anker',
            series: 'Soundcore Series',
            subtype: 'Wireless Headphones',
            model: 'H30i Wireless',
            image: IMG_BASE_PATH + 'Audio_Video/audio_solutions/headphones/soundcore by Anker H30i Wireless.png',
            features: ['Active Noise Cancelling', '70H Playtime', 'Fast Charging', 'Premium Comfort'],
            officialUrl: 'https://www.soundcore.com/'
        },
        {
            id: 'WS-AUD-008',
            category: 'Audio Solutions',
            brand: 'boAt',
            series: 'Aavante Bar Series',
            subtype: 'Bluetooth Soundbar',
            model: 'Aavante Bar Groove',
            image: IMG_BASE_PATH + 'Audio_Video/audio_solutions/soundbars/boAt Aavante Bar Groove Bluetooth Soundbar.png',
            features: ['Bluetooth 5.0', 'Multiple Connectivity', 'Dynamic Bass', 'Sleek Design'],
            officialUrl: 'https://www.boat-lifestyle.com/'
        },
        {
            id: 'WS-AUD-009',
            category: 'Audio Solutions',
            brand: 'Sony',
            series: 'HT Series',
            subtype: 'Home Theater',
            model: 'HT-S20R Real',
            image: IMG_BASE_PATH + 'Audio_Video/audio_solutions/soundbars/Sony HT-S20R Real.png',
            features: ['5.1ch Surround Sound', 'Bluetooth Connectivity', 'USB Playback', 'HDMI ARC'],
            officialUrl: 'https://www.sony.co.in/'
        },
        {
            id: 'WS-AUD-010',
            category: 'Audio Solutions',
            brand: 'Zebronics',
            series: 'Zeb Series',
            subtype: 'Soundbar',
            model: 'Zeb Juke Bar 3800 Pro',
            image: IMG_BASE_PATH + 'Audio_Video/audio_solutions/soundbars/Zebronics Zeb Juke Bar 3800 Pro .png',
            features: ['120W Output', 'Multiple Inputs', 'LED Display', 'Remote Control'],
            officialUrl: 'https://zebronics.com/'
        },
        {
            id: 'WS-AUD-011',
            category: 'Audio Solutions',
            brand: 'F&D',
            series: 'F-203G Series',
            subtype: 'Multimedia Speaker',
            model: 'F-203G 2.1 Channel',
            image: IMG_BASE_PATH + 'Audio_Video/audio_solutions/speakers/F&D F-203G 2.1 Channel Multimedia Speaker.png',
            features: ['2.1 Channel', 'Deep Bass', 'Multiple Connectivity', 'Compact Design'],
            officialUrl: 'https://www.fd-india.com/'
        },
        {
            id: 'WS-AUD-012',
            category: 'Audio Solutions',
            brand: 'Zebronics',
            series: 'Hammer Series',
            subtype: 'Tower Speaker',
            model: 'Hammer Dual Tower',
            image: IMG_BASE_PATH + 'Audio_Video/audio_solutions/speakers/Zebronics Hammer Dual Tower Speaker.png',
            features: ['Dual Tower Design', 'High Power Output', 'LED Lights', 'Wireless Connectivity'],
            officialUrl: 'https://zebronics.com/'
        },

        // -- Additional Camera Equipment --
        {
            id: 'WS-CAM-005',
            category: 'Camera Equipment',
            brand: 'Canon',
            series: 'IXUS Series',
            subtype: 'Compact Camera',
            model: 'IXUS 285 HS',
            image: IMG_BASE_PATH + 'Audio_Video/hardware/cameras/Canon/IXUS 285 HS.png',
            features: ['20MP Sensor', '12x Optical Zoom', 'Wi-Fi Enabled', 'Compact Design'],
            officialUrl: 'https://www.canon.co.in/'
        },
        {
            id: 'WS-CAM-006',
            category: 'Camera Equipment',
            brand: 'Nikon',
            series: 'COOLPIX Series',
            subtype: 'Digital Camera',
            model: 'COOLPIX S7000',
            image: IMG_BASE_PATH + 'Audio_Video/hardware/cameras/Nikon/Nikon COOLPIX S7000 Digital Camera.png',
            features: ['16MP Sensor', '20x Optical Zoom', 'Full HD Video', 'Built-in Wi-Fi'],
            officialUrl: 'https://www.nikon.co.in/'
        },

        // -- Additional Security Products --
        {
            id: 'WS-CCTV-007',
            category: 'CCTV & Security',
            brand: 'Bosch',
            series: 'Professional Series',
            subtype: 'Security Camera',
            model: 'KBCCM Series',
            image: IMG_BASE_PATH + 'Security/Camera/Bosch/kbccm.jpg',
            features: ['Professional Grade', 'High Resolution', 'Weather Resistant', 'Advanced Analytics'],
            officialUrl: 'https://www.boschsecurity.com/'
        },
        {
            id: 'WS-CCTV-008',
            category: 'CCTV & Security',
            brand: 'Honeywell',
            series: 'Performance Series',
            subtype: 'Security Camera',
            model: 'Explosion Proof Camera',
            image: IMG_BASE_PATH + 'Security/Camera/Honeywell/explosionpr.png',
            features: ['Explosion Proof', 'Industrial Grade', 'High Definition', 'Extreme Conditions'],
            officialUrl: 'https://www.honeywellsecurity.com/'
        },
        {
            id: 'WS-CCTV-009',
            category: 'CCTV & Security',
            brand: 'Vicon',
            series: 'Vero Series',
            subtype: 'Security Camera',
            model: 'Vero Features',
            image: IMG_BASE_PATH + 'Security/Camera/Vicon/Vero_Features.png',
            features: ['Advanced Features', 'High Performance', 'Smart Analytics', 'Professional Security'],
            officialUrl: 'https://www.vicon-security.com/'
        },

        // -- Additional Access Control --
        {
            id: 'WS-AC-004',
            category: 'Access Control',
            brand: 'ESSL',
            series: 'Professional Series',
            subtype: 'Biometric System',
            model: 'ESSL Pro 2',
            image: IMG_BASE_PATH + 'Security/access control/essl/essl2.png',
            features: ['Multi-Biometric', 'Cloud Integration', 'Advanced Security', 'User Management'],
            officialUrl: 'https://www.esslsecurity.com/'
        },
        {
            id: 'WS-AC-005',
            category: 'Access Control',
            brand: 'ESSL',
            series: 'Enterprise Series',
            subtype: 'Access Control',
            model: 'ESSL Enterprise',
            image: IMG_BASE_PATH + 'Security/access control/essl/essl3.png',
            features: ['Enterprise Grade', 'Scalable Solution', 'Advanced Reporting', 'Integration Ready'],
            officialUrl: 'https://www.esslsecurity.com/'
        },

        // -- Additional Video Door Systems --
        {
            id: 'WS-VD-003',
            category: 'Video Door Systems',
            brand: 'Dahua',
            series: 'Advanced Series',
            subtype: 'Video Doorbell',
            model: 'Dahua Advanced 2',
            image: IMG_BASE_PATH + 'Security/Video door/dahua/dahua2.png',
            features: ['Advanced Features', 'HD Video', 'Smart Detection', 'Cloud Storage'],
            officialUrl: 'https://www.dahuasecurity.com/'
        },
        {
            id: 'WS-VD-004',
            category: 'Video Door Systems',
            brand: 'Dahua',
            series: 'VTO Series',
            subtype: 'Door Station',
            model: 'VTO Professional',
            image: IMG_BASE_PATH + 'Security/Video door/dahua/vto3.png',
            features: ['Professional Grade', 'High Definition', 'Weather Resistant', 'Advanced Security'],
            officialUrl: 'https://www.dahuasecurity.com/'
        },

        // -- Custom Software Products --
        {
            id: 'WS-SW-001',
            category: 'Custom Software',
            brand: 'WebSankalp',
            series: 'Development Suite',
            subtype: 'Custom Software',
            model: 'WS-CustomDev-Pro',
            image: IMG_BASE_PATH + 'Custom Software Solutions Home Page/cust_software_dev.jpg',
            features: ['Custom Development', 'Scalable Solutions', 'Modern Architecture', 'Full Support'],
            officialUrl: 'https://websankalp.in/'
        }
    ];


    // =================================================================================



    // =================================================================================
    // 3. GLOBAL SITE-WIDE SCRIPTS
    // =================================================================================

    // --- Mobile Navigation Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        // Toggle menu on hamburger click
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
        
        // Close menu when clicking on nav links
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }

    // --- Scroll to Top Button ---
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (scrollToTopBtn) {
        window.onscroll = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        };
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // =================================================================================
    // 4. PRODUCT DETAIL PAGE FUNCTIONALITY (for contact.html)
    // =================================================================================
    
    const initializeProductDetailPage = () => {
        // Get URL parameters to check if a product was clicked
        const urlParams = new URLSearchParams(window.location.search);
        const productModel = urlParams.get('product');
        
        if (productModel) {
            // Find the product in the catalog
            const product = productCatalog.find(p => p.model === productModel);
            
            if (product) {
                showProductDetail(product);
            }
        }
        
        // Back to contact button functionality
        const backBtn = document.getElementById('back-to-contact');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                hideProductDetail();
                // Remove product parameter from URL
                const newUrl = window.location.pathname;
                window.history.replaceState({}, document.title, newUrl);
            });
        }
    };
    
    const showProductDetail = (product) => {
        // Show product detail section
        const productDetailSection = document.getElementById('product-detail-section');
        const contactMainTitle = document.getElementById('contact-main-title');
        
        if (productDetailSection && contactMainTitle) {
            // Update page title
            contactMainTitle.textContent = `Product Details - ${product.model}`;
            
            // Show product detail section
            productDetailSection.style.display = 'block';
            
            // Populate product details
            const pathParts = product.image.split('/');
            const encodedImageUrl = pathParts.map(part => encodeURIComponent(part)).join('/');
            document.getElementById('product-detail-img').src = encodedImageUrl;
            document.getElementById('product-detail-img').alt = product.model;
            document.getElementById('product-detail-brand').textContent = product.brand;
            document.getElementById('product-detail-model').textContent = product.model;
            document.getElementById('product-detail-series').textContent = product.series;
            document.getElementById('product-detail-category').textContent = product.category;
            
            // Populate specifications
            document.getElementById('spec-brand').textContent = product.brand;
            document.getElementById('spec-model').textContent = product.model;
            document.getElementById('spec-series').textContent = product.series;
            document.getElementById('spec-category').textContent = product.category;
            document.getElementById('spec-subtype').textContent = product.subtype;
            
            // Populate features
            const featuresList = document.getElementById('product-detail-features-list');
            if (featuresList && product.features) {
                featuresList.innerHTML = product.features.map(feature => 
                    `<li>${feature}</li>`
                ).join('');
            }
            
            // Scroll to product detail section
            productDetailSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    const hideProductDetail = () => {
        const productDetailSection = document.getElementById('product-detail-section');
        const contactMainTitle = document.getElementById('contact-main-title');
        
        if (productDetailSection && contactMainTitle) {
            productDetailSection.style.display = 'none';
            contactMainTitle.textContent = 'Get In Touch';
        }
    };

    // --- Go Official Popup Functionality ---
    const initializeGoOfficialPopup = () => {
        const goOfficialBtn = document.getElementById('go-official-btn');
        const popupModal = document.getElementById('official-popup-modal');
        const popupClose = document.querySelector('.popup-close');
        const popupForm = document.getElementById('official-popup-form');
        
        if (goOfficialBtn && popupModal) {
            // Show popup when Go Official button is clicked
            goOfficialBtn.addEventListener('click', () => {
                popupModal.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            });
            
            // Close popup when X button is clicked
            if (popupClose) {
                popupClose.addEventListener('click', () => {
                    popupModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                });
            }
            
            // Close popup when clicking outside
            popupModal.addEventListener('click', (e) => {
                if (e.target === popupModal) {
                    popupModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Handle form submission
            if (popupForm) {
                popupForm.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    
                    // Get form data
                    const formData = {
                        name: document.getElementById('popup-name').value,
                        phone: document.getElementById('popup-phone').value,
                        email: document.getElementById('popup-email').value,
                        message: document.getElementById('popup-message').value
                    };
                    
                    // Get current product info
                    const urlParams = new URLSearchParams(window.location.search);
                    const productModel = urlParams.get('product');
                    const product = productCatalog.find(p => p.model === productModel);
                    
                    // Add product info to form data
                    if (product) {
                        formData.product_info = `${product.brand} ${product.model} - ${product.series}`;
                    }
                    
                    // Disable submit button
                    const submitBtn = popupForm.querySelector('button[type="submit"]');
                    const originalText = submitBtn.textContent;
                    submitBtn.disabled = true;
                    submitBtn.textContent = 'Submitting...';
                    
                    try {
                        // Send data to contact.php
                        const response = await fetch('contact.php', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(formData)
                        });
                        
                        const result = await response.json();
                        
                        if (result.success) {
                            // Show success message
                            alert(`Thank you ${formData.name}! Your inquiry has been submitted successfully!`);
                            
                            // Close popup
                            popupModal.style.display = 'none';
                            document.body.style.overflow = 'auto';
                            
                            // Clear form
                            popupForm.reset();
                            
                            // Redirect to official website if available
                            if (product && product.officialUrl) {
                                setTimeout(() => {
                                    window.open(product.officialUrl, '_blank');
                                }, 1000);
                            }
                        } else {
                            alert(`Error: ${result.message}`);
                        }
                        
                    } catch (error) {
                        console.error('Error submitting form:', error);
                        alert('An error occurred while submitting your inquiry. Please try again.');
                    } finally {
                        // Re-enable submit button
                        submitBtn.disabled = false;
                        submitBtn.textContent = originalText;
                    }
                });
            }
        }
    };
    
    // --- Run page-specific logic ---
    
    // Initialize product detail functionality on contact page
    if (window.location.pathname.includes('contact.html')) {
        initializeProductDetailPage();
        initializeGoOfficialPopup(); // Initialize popup functionality
    }

    // =================================================================================
    // MAILTO LINK FUNCTIONALITY
    // =================================================================================
    
    // Ensure mailto links work properly
    function initializeMailtoLinks() {
        const mailtoLinks = document.querySelectorAll('a[href^="mailto:"]');
        
        mailtoLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Don't prevent default - let the browser handle mailto
                const href = this.getAttribute('href');
                
                // For debugging - you can remove this console.log later
                console.log('Mailto link clicked:', href);
                
                // Ensure the link opens in the same window/tab
                this.setAttribute('target', '_self');
                
                // Try to trigger the mailto programmatically as backup
                try {
                    window.location.href = href;
                } catch (error) {
                    console.log('Mailto fallback triggered');
                }
            });
        });
    }
    
    // Initialize mailto functionality
    initializeMailtoLinks();
});
