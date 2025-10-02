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
    // CONTACT FORM FUNCTIONALITY
    // =================================================================================
    
    // Handle contact form submission
    function initializeContactForm() {
        const contactForm = document.getElementById('contact-form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                
                const submitBtn = document.getElementById('contact-submit-btn');
                const originalText = submitBtn.textContent;
                
                // Get form data
                const formData = new FormData();
                formData.append('name', document.getElementById('name').value);
                formData.append('mobile', document.getElementById('mobile').value);
                formData.append('email', document.getElementById('email').value);
                formData.append('message', document.getElementById('message').value);
                formData.append('product_info', 'Contact Page Inquiry');
                
                // Update button state
                submitBtn.textContent = 'Submitting...';
                submitBtn.disabled = true;
                
                try {
                    const response = await fetch('../pages/submit_contact.php', {
                        method: 'POST',
                        body: formData
                    });
                    
                    const result = await response.json();
                    
                    const messageDiv = document.getElementById('contact-message');
                    
                    if (result.success) {
                        // Show success message
                        messageDiv.className = 'contact-message success';
                        messageDiv.textContent = 'Thank you! Your message has been sent successfully. We will get back to you soon.';
                        messageDiv.style.display = 'block';
                        
                        // Reset form
                        contactForm.reset();
                        
                        // Hide message after 5 seconds
                        setTimeout(() => {
                            messageDiv.style.display = 'none';
                        }, 5000);
                    } else {
                        messageDiv.className = 'contact-message error';
                        messageDiv.textContent = 'Error: ' + (result.message || 'Something went wrong. Please try again.');
                        messageDiv.style.display = 'block';
                        
                        // Hide error message after 5 seconds
                        setTimeout(() => {
                            messageDiv.style.display = 'none';
                        }, 5000);
                    }
                    
                } catch (error) {
                    console.error('Error submitting form:', error);
                    const messageDiv = document.getElementById('contact-message');
                    messageDiv.className = 'contact-message error';
                    messageDiv.textContent = 'Error submitting form. Please try again.';
                    messageDiv.style.display = 'block';
                    
                    // Hide error message after 5 seconds
                    setTimeout(() => {
                        messageDiv.style.display = 'none';
                    }, 5000);
                } finally {
                    // Reset button state
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
            });
        }
    }
    
    // Initialize contact form
    initializeContactForm();

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