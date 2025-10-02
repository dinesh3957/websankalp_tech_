// Function for Barcode & RFID questions
function showBarcodeRFIDQuestions() {
  const questions = [
    { q: "What type of barcode system do you need for your business?", options: ["Simple inventory tracking", "Asset management with detailed data", "Supply chain tracking", "Customer loyalty programs"] },
    { q: "What range do you need for scanning/reading?", options: ["Contact scanning (0-5cm)", "Short range (1-10cm)", "Medium range (1-3 meters)", "Long range (3+ meters)"] },
    { q: "What environment will you use the system in?", options: ["Indoor office/retail", "Warehouse/industrial", "Outdoor/harsh conditions", "Cold storage/extreme temperatures"] },
    { q: "How many items do you need to track daily?", options: ["Less than 100", "100-1000", "1000-10000", "More than 10000"] },
    { q: "What type of data do you want to store?", options: ["Basic product info", "Serial numbers & dates", "Complete product history", "Real-time location data"] },
    { q: "Do you need real-time tracking?", options: ["No, batch scanning is fine", "Yes, for inventory updates", "Yes, for asset location", "Yes, for security purposes"] },
    { q: "What's your budget range for the system?", options: ["Basic (Under ₹50K)", "Standard (₹50K-₹2L)", "Advanced (₹2L-₹5L)", "Enterprise (₹5L+)"] },
    { q: "Which integration do you need?", options: ["Standalone system", "ERP integration", "Cloud-based solution", "Mobile app integration"] },
    { q: "What's your primary goal?", options: ["Reduce manual errors", "Improve inventory accuracy", "Speed up operations", "Enhance security & tracking"] }
  ];
  loadQuiz("Find Your Barcode & RFID Solution", questions);
}

// Function for Point of Sale questions
function showPOSQuestions() {
  const questions = [
    { q: "What type of business do you have?", options: ["Retail store", "Restaurant/Cafe", "Service business", "Multiple locations"] },
    { q: "How many transactions do you process daily?", options: ["Less than 50", "50-200", "200-500", "500+ transactions"] },
    { q: "What payment methods do you want to accept?", options: ["Cash only", "Card payments", "Digital wallets (UPI/PayTM)", "All payment types"] },
    { q: "Do you need inventory management?", options: ["No, just billing", "Basic stock tracking", "Advanced inventory control", "Multi-location inventory"] },
    { q: "What size screen do you prefer?", options: ["Small tablet (7-10 inch)", "Medium display (12-15 inch)", "Large screen (17+ inch)", "Dual screen setup"] },
    { q: "Do you need customer display?", options: ["No customer display needed", "Basic price display", "Full customer interaction", "Marketing display features"] },
    { q: "What reporting features do you need?", options: ["Basic sales reports", "Detailed analytics", "Real-time dashboard", "Custom reports & insights"] },
    { q: "Do you need offline capability?", options: ["Always online is fine", "Basic offline mode", "Full offline functionality", "Sync when online"] },
    { q: "What's your budget for POS system?", options: ["Budget (₹15K-₹30K)", "Standard (₹30K-₹60K)", "Premium (₹60K-₹1L)", "Enterprise (₹1L+)"] }
  ];
  loadQuiz("Find Your Perfect POS Solution", questions);
}

// Function for Industrial Touch PC questions
function showIndustrialTouchPCQuestions() {
  const questions = [
    { q: "What industrial application do you need?", options: ["Machine control", "Data monitoring", "Process automation", "Quality control systems"] },
    { q: "What environmental conditions will it face?", options: ["Clean office environment", "Dusty workshop", "High temperature areas", "Outdoor/waterproof needed"] },
    { q: "What screen size do you require?", options: ["Small (7-10 inch)", "Medium (12-15 inch)", "Large (17-21 inch)", "Extra large (24+ inch)"] },
    { q: "What processing power do you need?", options: ["Basic data entry", "Standard applications", "Heavy computing tasks", "Real-time processing"] },
    { q: "What connectivity do you require?", options: ["Basic USB/Ethernet", "WiFi + Bluetooth", "Industrial protocols", "Wireless + IoT connectivity"] },
    { q: "Do you need special certifications?", options: ["No special requirements", "IP65 rating", "Explosion proof", "Medical grade"] },
    { q: "What operating system preference?", options: ["Windows based", "Android system", "Linux platform", "Custom OS"] },
    { q: "How will it be mounted?", options: ["Desktop/portable", "Wall mounted", "Panel mounted", "Arm/swing mount"] },
    { q: "What's your budget range?", options: ["Basic (₹50K-₹1L)", "Standard (₹1L-₹2L)", "Advanced (₹2L-₹4L)", "Industrial grade (₹4L+)"] }
  ];
  loadQuiz("Find Your Industrial Touch PC Solution", questions);
}

// Function for Self Service Kiosks questions
function showSelfServiceKiosksQuestions() {
  const questions = [
    { q: "What type of self-service do you need?", options: ["Information display", "Payment/ordering", "Check-in/registration", "Product selection"] },
    { q: "Where will the kiosk be placed?", options: ["Indoor lobby/reception", "Retail store floor", "Outdoor location", "Food court/restaurant"] },
    { q: "What interaction methods do you want?", options: ["Touch screen only", "Card/cash payments", "QR code scanning", "Voice commands"] },
    { q: "What screen size is suitable?", options: ["Tablet size (10-15 inch)", "Standard (19-24 inch)", "Large display (27-32 inch)", "Digital signage size"] },
    { q: "Do you need printing capability?", options: ["No printing needed", "Receipt printing", "Ticket/label printing", "Document printing"] },
    { q: "What security level do you need?", options: ["Basic user interface", "Secure payments", "Biometric authentication", "High-security access"] },
    { q: "How many users per day expected?", options: ["Less than 100", "100-500", "500-1000", "1000+ users"] },
    { q: "Do you need queue management?", options: ["No queue system", "Basic numbering", "Smart queue management", "Appointment scheduling"] },
    { q: "What's your investment budget?", options: ["Basic (₹1L-₹3L)", "Standard (₹3L-₹6L)", "Advanced (₹6L-₹10L)", "Premium (₹10L+)"] }
  ];
  loadQuiz("Find Your Self-Service Kiosk Solution", questions);
}

// Function for Industrial IoT questions
function showIndustrialIoTQuestions() {
  const questions = [
    { q: "What do you want to monitor/control?", options: ["Temperature & humidity", "Machine performance", "Energy consumption", "Complete facility automation"] },
    { q: "How many devices/sensors do you need?", options: ["Few sensors (5-20)", "Medium setup (20-100)", "Large network (100-500)", "Enterprise scale (500+)"] },
    { q: "What connectivity do you prefer?", options: ["WiFi based", "Cellular/4G/5G", "Wired Ethernet", "Mixed connectivity"] },
    { q: "Do you need real-time alerts?", options: ["Email notifications", "SMS alerts", "Mobile app push", "Dashboard monitoring only"] },
    { q: "What data storage do you prefer?", options: ["Local storage", "Cloud storage", "Hybrid approach", "Edge computing"] },
    { q: "Do you need predictive maintenance?", options: ["No, just monitoring", "Basic trend analysis", "Advanced AI predictions", "Complete maintenance automation"] },
    { q: "What's your technical expertise level?", options: ["Need full support", "Basic technical knowledge", "Good technical team", "Expert level implementation"] },
    { q: "What integration do you need?", options: ["Standalone system", "ERP integration", "Third-party APIs", "Custom integrations"] },
    { q: "What's your project budget?", options: ["Pilot project (₹2L-₹5L)", "Department level (₹5L-₹15L)", "Facility wide (₹15L-₹50L)", "Enterprise (₹50L+)"] }
  ];
  loadQuiz("Find Your Industrial IoT Solution", questions);
}

// Function for CCTV Security questions
function showCCTVQuestions() {
  const questions = [
    { q: "What area do you want to monitor?", options: ["Small office/home", "Retail store", "Warehouse/factory", "Multiple locations"] },
    { q: "How many cameras do you need?", options: ["1-4 cameras", "5-16 cameras", "16-32 cameras", "32+ cameras"] },
    { q: "What camera resolution do you prefer?", options: ["HD (1080p)", "Full HD+ (2MP)", "4K Ultra HD", "IP cameras with zoom"] },
    { q: "Do you need night vision?", options: ["No night monitoring", "Basic night vision", "Advanced infrared", "Color night vision"] },
    { q: "Where will cameras be installed?", options: ["Indoor only", "Outdoor only", "Mixed indoor/outdoor", "Harsh weather conditions"] },
    { q: "What storage do you need?", options: ["1-7 days", "1-4 weeks", "1-3 months", "6+ months storage"] },
    { q: "Do you need remote viewing?", options: ["No remote access", "Mobile app viewing", "Web browser access", "Professional monitoring"] },
    { q: "What's your security priority?", options: ["Basic monitoring", "Theft prevention", "Employee safety", "Complete security system"] },
    { q: "What's your budget range?", options: ["Basic (₹25K-₹75K)", "Standard (₹75K-₹2L)", "Advanced (₹2L-₹5L)", "Professional (₹5L+)"] }
  ];
  loadQuiz("Find Your CCTV Security Solution", questions);
}

// Function for Access Control questions
function showAccessControlQuestions() {
  const questions = [
    { q: "What type of access control do you need?", options: ["Door entry only", "Time attendance", "Visitor management", "Complete facility control"] },
    { q: "How many access points/doors?", options: ["1-2 doors", "3-10 doors", "10-50 doors", "50+ doors/zones"] },
    { q: "What authentication method do you prefer?", options: ["Card/fob access", "Biometric fingerprint", "Face recognition", "Multi-factor authentication"] },
    { q: "How many users will use the system?", options: ["Less than 50", "50-200", "200-1000", "1000+ users"] },
    { q: "Do you need visitor management?", options: ["No visitor tracking", "Basic visitor log", "Pre-registration system", "Complete visitor workflow"] },
    { q: "What integration do you need?", options: ["Standalone system", "HR system integration", "CCTV integration", "Complete security integration"] },
    { q: "Do you need mobile access?", options: ["No mobile needed", "Admin mobile app", "User mobile access", "Complete mobile solution"] },
    { q: "What reporting do you need?", options: ["Basic entry logs", "Attendance reports", "Security analytics", "Custom compliance reports"] },
    { q: "What's your budget allocation?", options: ["Basic (₹50K-₹1.5L)", "Standard (₹1.5L-₹4L)", "Advanced (₹4L-₹8L)", "Enterprise (₹8L+)"] }
  ];
  loadQuiz("Find Your Access Control Solution", questions);
}

// Function for LED Screen questions
function showLEDScreenQuestions() {
  const questions = [
    { q: "What's your primary use for LED screens?", options: ["Classroom/training", "Corporate presentations", "Digital advertising", "Entertainment/events"] },
    { q: "What screen size do you need?", options: ["Small (32-55 inches)", "Medium (65-75 inches)", "Large (86-98 inches)", "Video wall setup"] },
    { q: "Where will it be installed?", options: ["Conference room", "Classroom/auditorium", "Reception/lobby", "Outdoor display"] },
    { q: "Do you need touch interaction?", options: ["No touch needed", "Basic touch features", "Multi-touch capability", "Advanced interactive features"] },
    { q: "What connectivity do you require?", options: ["HDMI/basic inputs", "Wireless screen sharing", "Network connectivity", "IoT/cloud integration"] },
    { q: "How often will it be used?", options: ["Occasional meetings", "Daily presentations", "Continuous display", "24/7 operation"] },
    { q: "Do you need content management?", options: ["Simple display", "Scheduled content", "Dynamic content updates", "AI-powered content"] },
    { q: "What's your user technical level?", options: ["Basic users", "IT savvy users", "Technical team available", "Professional installation needed"] },
    { q: "What's your budget range?", options: ["Budget (₹1L-₹3L)", "Standard (₹3L-₹6L)", "Premium (₹6L-₹12L)", "Professional (₹12L+)"] }
  ];
  loadQuiz("Find Your LED Screen Solution", questions);
}

// Function for Battery Packs questions
function showBatteryPacksQuestions() {
  const questions = [
    { q: "What application do you need batteries for?", options: ["UPS/power backup", "Solar energy storage", "Electric vehicles", "Portable devices/equipment"] },
    { q: "What capacity do you require?", options: ["Small (1-10 kWh)", "Medium (10-50 kWh)", "Large (50-200 kWh)", "Industrial (200+ kWh)"] },
    { q: "Which battery technology do you prefer?", options: ["Li-Ion (standard)", "LFP (longer life)", "Lead acid (budget)", "Custom chemistry"] },
    { q: "What's your expected usage pattern?", options: ["Occasional backup", "Daily cycling", "Frequent deep discharge", "Continuous operation"] },
    { q: "Do you need solar integration?", options: ["No solar needed", "Basic solar charging", "Grid-tied solar system", "Off-grid solar setup"] },
    { q: "What safety features do you need?", options: ["Basic protection", "Advanced BMS", "Fire safety systems", "Industrial safety standards"] },
    { q: "What's your space constraint?", options: ["Compact/portable", "Standard rack mount", "Large installation", "No space constraints"] },
    { q: "Do you need monitoring/control?", options: ["No monitoring needed", "Basic status display", "Mobile app monitoring", "Complete IoT integration"] },
    { q: "What's your investment range?", options: ["Budget (₹1L-₹5L)", "Standard (₹5L-₹15L)", "Advanced (₹15L-₹40L)", "Industrial (₹40L+)"] }
  ];
  loadQuiz("Find Your Battery Solution", questions);
}

// Function for Digital Signage questions
function showDigitalSignageQuestions() {
  const questions = [
    { q: "Where will you use digital signage?", options: ["Indoor retail/office", "Outdoor advertising", "Restaurant/cafe", "Transportation/public spaces"] },
    { q: "What content will you display?", options: ["Static images/text", "Video content", "Interactive menus", "Real-time data/news"] },
    { q: "What screen size is suitable?", options: ["Small (32-43 inches)", "Medium (49-65 inches)", "Large (75-86 inches)", "Video wall display"] },
    { q: "How will you manage content?", options: ["USB/manual updates", "Basic scheduling", "Cloud-based CMS", "AI-powered content"] },
    { q: "Do you need weatherproof displays?", options: ["Indoor use only", "Semi-outdoor/covered", "Full outdoor weatherproof", "Extreme weather resistance"] },
    { q: "What's your content update frequency?", options: ["Weekly/monthly", "Daily updates", "Hourly changes", "Real-time updates"] },
    { q: "How many displays do you need?", options: ["Single display", "2-5 displays", "5-20 displays", "20+ display network"] },
    { q: "Do you need analytics/tracking?", options: ["No analytics needed", "Basic view counting", "Audience demographics", "Complete engagement analytics"] },
    { q: "What's your project budget?", options: ["Single unit (₹50K-₹1.5L)", "Small network (₹1.5L-₹5L)", "Medium deployment (₹5L-₹15L)", "Large network (₹15L+)"] }
  ];
  loadQuiz("Find Your Digital Signage Solution", questions);
}

// Load quiz into modal
function loadQuiz(title, questions) {
  document.getElementById("quizTitle").innerText = title;
  const form = document.getElementById("quizForm");
  form.innerHTML = "";
  questions.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "question";
    let opts = `<select name="q${i}"><option value="">--Select an answer--</option>`;
    item.options.forEach(opt => {
      opts += `<option value="${opt}">${opt}</option>`;
    });
    opts += "</select>";
    div.innerHTML = `<p>${i+1}. ${item.q}</p>${opts}`;
    form.appendChild(div);
  });
  document.getElementById("quizModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("quizModal").style.display = "none";
}

function submitAnswers() {
  const form = document.getElementById("quizForm");
  let answers = [];
  [...form.elements].forEach(el => {
    if (el.tagName === "SELECT") {
      answers.push(el.value || "Not answered");
    }
  });
  alert("Your Answers:\n" + answers.join("\n"));
  closeModal();
}
