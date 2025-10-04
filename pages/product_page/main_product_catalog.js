// WebSankalp Technologies - Complete Product Catalog
// Main product catalog with actual images and comprehensive product data

const catalogData = {
  "Barcode & RFID": {
    "Barcode Printers": [
      {
        name: "Zebra ZD421 Thermal Printer",
        brand: "Zebra",
        img: "../../product/Barcode & rfid/Barcode Printer.png",
        specs: "Thermal Transfer, 203/300 DPI, USB/Ethernet, 4-inch width",
        features: ["Thermal Transfer", "203/300 DPI", "USB & Ethernet", "Easy Loading", "Compact Design"],
        rating: "4.5 ⭐"
      },
      {
        name: "TSC Thermal Printer",
        brand: "TSC",
        img: "../../product/Barcode & rfid/Barcode Printer.png",
        specs: "Direct Thermal, High Resolution, Multiple Interfaces",
        features: ["Direct Thermal", "High Resolution", "Multiple Interfaces", "Durable Build"],
        rating: "4.3 ⭐"
      }
    ],
    "Barcode Scanners": [
      {
        name: "Honeywell Voyager Scanner",
        brand: "Honeywell",
        img: "../../product/Barcode & rfid/Barcode Scanners.png",
        specs: "1D/2D Scanning, USB Interface, Laser Technology, Handheld",
        features: ["1D/2D Scanning", "USB Interface", "Laser Technology", "Ergonomic Design", "Fast Scanning"],
        rating: "4.6 ⭐"
      },
      {
        name: "Datalogic Barcode Scanner",
        brand: "Datalogic",
        img: "../../product/Barcode & rfid/Barcode Scanners.png",
        specs: "Advanced 2D Scanning, Wireless Connectivity, Rugged Design",
        features: ["2D Scanning", "Wireless", "Rugged Design", "Long Range"],
        rating: "4.4 ⭐"
      }
    ],
    "Mobile Computers": [
      {
        name: "Zebra TC52 Mobile Computer",
        brand: "Zebra",
        img: "../../product/Barcode & rfid/Mobile Computers.png",
        specs: "Android OS, 5-inch Display, 1D/2D Scanner, WiFi/Cellular",
        features: ["Android 10", "5-inch Touch Display", "Integrated Scanner", "WiFi & 4G", "Rugged Design"],
        rating: "4.7 ⭐"
      },
      {
        name: "Honeywell Mobile Computer",
        brand: "Honeywell",
        img: "../../product/Barcode & rfid/Mobile Computers.png",
        specs: "Windows/Android, Rugged Design, Multiple Connectivity Options",
        features: ["Dual OS Support", "Rugged Design", "Multiple Connectivity", "Long Battery Life"],
        rating: "4.5 ⭐"
      }
    ],
    "RFID Solutions": [
      {
        name: "UHF RFID Tag System",
        brand: "Alien Technology",
        img: "../../product/Barcode & rfid/rfid tag .jpg",
        specs: "UHF Gen2, Long Range Reading, Durable Construction, Multiple Sizes",
        features: ["UHF Gen2 Protocol", "Long Range", "Durable Material", "Various Sizes", "High Performance"],
        rating: "4.4 ⭐"
      },
      {
        name: "RFID Reader System",
        brand: "Impinj",
        img: "../../product/Barcode & rfid/rfid tag .jpg",
        specs: "Fixed RFID Reader, High Performance, Network Connectivity",
        features: ["Fixed Reader", "High Performance", "Network Ready", "Easy Integration"],
        rating: "4.6 ⭐"
      }
    ],
    "Healthcare Solutions": [
      {
        name: "Healthcare Barcode System",
        brand: "WebSankalp",
        img: "../../product/Barcode & rfid/Healthcare Solutions.png",
        specs: "Medical Grade, Patient Safety, Medication Tracking",
        features: ["Medical Grade", "Patient Safety", "Medication Tracking", "Compliance Ready"],
        rating: "4.5 ⭐"
      }
    ],
    "Industrial Tablets": [
      {
        name: "Rugged Industrial Tablet",
        brand: "Panasonic",
        img: "../../product/Barcode & rfid/Industrial Tablets.png",
        specs: "Rugged Design, Industrial Grade, Multi-touch Display",
        features: ["Rugged Design", "Industrial Grade", "Multi-touch", "Long Battery Life"],
        rating: "4.7 ⭐"
      }
    ],
    "Label & Ribbon": [
      {
        name: "Thermal Transfer Ribbons",
        brand: "Brady",
        img: "../../product/Barcode & rfid/Label & Ribbon.png",
        specs: "High Quality Labels, Various Sizes, Adhesive Options",
        features: ["High Quality", "Various Sizes", "Strong Adhesive", "Durable Material"],
        rating: "4.4 ⭐"
      }
    ],
    "Label Applicators": [
      {
        name: "Automatic Label Applicator",
        brand: "Avery Dennison",
        img: "../../product/Barcode & rfid/Label Applicators.png",
        specs: "Automatic Application, High Speed, Precision Placement",
        features: ["Automatic", "High Speed", "Precision", "Easy Integration"],
        rating: "4.5 ⭐"
      }
    ],
    "Machine Vision": [
      {
        name: "Industrial Vision System",
        brand: "Cognex",
        img: "../../product/Barcode & rfid/Machine Vision.png",
        specs: "Advanced Vision Processing, Real-time Analysis, High Resolution",
        features: ["Advanced Vision", "Real-time Analysis", "High Resolution", "AI Integration"],
        rating: "4.8 ⭐"
      }
    ],
    "Manufacturing Solutions": [
      {
        name: "Manufacturing Automation System",
        brand: "WebSankalp",
        img: "../../product/Barcode & rfid/Manufacturing Solutions.png",
        specs: "Complete Automation, Quality Control, Production Tracking",
        features: ["Complete Automation", "Quality Control", "Production Tracking", "Real-time Monitoring"],
        rating: "4.6 ⭐"
      }
    ],
    "Mobile Printers": [
      {
        name: "Portable Thermal Printer",
        brand: "Zebra",
        img: "../../product/Barcode & rfid/Mobile Printers.png",
        specs: "Portable Design, Wireless Connectivity, Long Battery Life",
        features: ["Portable", "Wireless", "Long Battery", "Durable Build"],
        rating: "4.5 ⭐"
      }
    ]
  },

  "Point of Sales (POS)": {
    "All-in-One POS": [
      {
        name: "Posiflex All-in-One POS Terminal",
        brand: "Posiflex",
        img: "../../product/Point of sales/All in one POS.png",
        specs: "15-inch Touch Screen, Intel Processor, Windows 10, Built-in Printer",
        features: ["15-inch Touch Display", "Intel Processor", "Windows 10 IoT", "Thermal Printer", "MSR Ready"],
        rating: "4.4 ⭐"
      },
      {
        name: "Integrated POS System",
        brand: "HP",
        img: "../../product/Point of sales/All in one POS.png",
        specs: "All-in-One Design, Multiple Payment Options, Cloud Ready",
        features: ["All-in-One", "Multiple Payment", "Cloud Ready", "Easy Setup"],
        rating: "4.5 ⭐"
      }
    ],
    "Barcode Scanners": [
      {
        name: "POS Barcode Scanner",
        brand: "Honeywell",
        img: "../../product/Point of sales/Barcode Scanners.png",
        specs: "1D/2D Scanning, USB Interface, Retail Optimized",
        features: ["1D/2D Scanning", "USB Interface", "Retail Optimized", "Fast Scanning"],
        rating: "4.6 ⭐"
      }
    ],
    "Cash Drawers": [
      {
        name: "Heavy Duty Cash Drawer",
        brand: "APG",
        img: "../../product/Point of sales/Cash Drawers.png",
        specs: "Heavy Duty Construction, Multiple Compartments, Security Lock",
        features: ["Heavy Duty", "Multiple Compartments", "Security Lock", "Durable Build"],
        rating: "4.3 ⭐"
      }
    ],
    "Mobile POS": [
      {
        name: "Tablet POS Solution",
        brand: "Square",
        img: "../../product/Point of sales/Mobile POS.png",
        specs: "Tablet-based, Wireless Connectivity, Payment Processing",
        features: ["Tablet-based", "Wireless", "Payment Processing", "Cloud Sync"],
        rating: "4.4 ⭐"
      }
    ],
    "POS Terminals": [
      {
        name: "Traditional POS Terminal",
        brand: "Ingenico",
        img: "../../product/Point of sales/POS Terminals.png",
        specs: "Traditional Design, Reliable Performance, Multiple Interfaces",
        features: ["Traditional Design", "Reliable", "Multiple Interfaces", "Easy Integration"],
        rating: "4.2 ⭐"
      }
    ],
    "POS Keyboards": [
      {
        name: "POS Keyboard with MSR",
        brand: "LogicControls",
        img: "../../product/Point of sales/POS Keyboards.png",
        specs: "Programmable Keys, Built-in MSR, Spill Resistant",
        features: ["Programmable Keys", "Built-in MSR", "Spill Resistant", "Durable"],
        rating: "4.3 ⭐"
      }
    ],
    "POS Monitors": [
      {
        name: "Touch Screen Monitor",
        brand: "Elo",
        img: "../../product/Point of sales/POS Moniters.png",
        specs: "Multi-touch Display, Various Sizes, Commercial Grade",
        features: ["Multi-touch", "Various Sizes", "Commercial Grade", "Easy Setup"],
        rating: "4.5 ⭐"
      }
    ],
    "POS Printers": [
      {
        name: "Thermal Receipt Printer",
        brand: "Epson",
        img: "../../product/Point of sales/POS Printers.png",
        specs: "Thermal Printing, High Speed, Network Ready",
        features: ["Thermal Printing", "High Speed", "Network Ready", "Reliable"],
        rating: "4.6 ⭐"
      }
    ],
    "Self Service Kiosks": [
      {
        name: "Self-Checkout Kiosk",
        brand: "NCR",
        img: "../../product/Point of sales/Self Service Kiosks.png",
        specs: "Self-service Design, Payment Processing, Customer Friendly",
        features: ["Self-service", "Payment Processing", "Customer Friendly", "Easy Operation"],
        rating: "4.4 ⭐"
      }
    ],
    "Side Attachments": [
      {
        name: "POS Side Attachments",
        brand: "Various",
        img: "../../product/Point of sales/Side Attachments.png",
        specs: "Modular Design, Easy Installation, Multiple Options",
        features: ["Modular Design", "Easy Installation", "Multiple Options", "Compatible"],
        rating: "4.2 ⭐"
      }
    ],
    "Card Readers": [
      {
        name: "Magnetic Stripe Reader",
        brand: "MagTek",
        img: "../../product/Point of sales/Swipe Readerr.png",
        specs: "MSR Technology, Secure Reading, Multiple Formats",
        features: ["MSR Technology", "Secure Reading", "Multiple Formats", "Reliable"],
        rating: "4.3 ⭐"
      }
    ]
  },

  "Industrial Touch PC": {
    "Edge AI Systems": [
      {
        name: "AI Edge Computing System",
        brand: "Advantech",
        img: "../../product/Industiral Touch PC/Edge AI Systems.png",
        specs: "AI Processing, Edge Computing, Real-time Analytics",
        features: ["AI Processing", "Edge Computing", "Real-time Analytics", "Industrial Grade"],
        rating: "4.8 ⭐"
      }
    ],
    "Embedded Box PC": [
      {
        name: "Fanless Embedded PC",
        brand: "Advantech",
        img: "../../product/Industiral Touch PC/Embedded Box PC.png",
        specs: "Fanless Design, Industrial Grade, Multiple I/O",
        features: ["Fanless Design", "Industrial Grade", "Multiple I/O", "Compact Size"],
        rating: "4.6 ⭐"
      }
    ],
    "Industrial Displays": [
      {
        name: "Industrial Touch Display",
        brand: "Advantech",
        img: "../../product/Industiral Touch PC/Industrial Displays.png",
        specs: "Multi-touch, Industrial Grade, Various Sizes",
        features: ["Multi-touch", "Industrial Grade", "Various Sizes", "Rugged Design"],
        rating: "4.7 ⭐"
      }
    ],
    "Industrial Panel PC": [
      {
        name: "Panel PC with Touch Screen",
        brand: "Advantech",
        img: "../../product/Industiral Touch PC/Industrial Panel PC.png",
        specs: "All-in-One Design, Touch Interface, Industrial Grade",
        features: ["All-in-One Design", "Touch Interface", "Industrial Grade", "Easy Installation"],
        rating: "4.7 ⭐"
      }
    ],
    "Industrial PC": [
      {
        name: "Rack Mount Industrial PC",
        brand: "Advantech",
        img: "../../product/Industiral Touch PC/Industrial PC.png",
        specs: "Rack Mountable, High Performance, Industrial Grade",
        features: ["Rack Mountable", "High Performance", "Industrial Grade", "Multiple Expansion"],
        rating: "4.6 ⭐"
      }
    ],
    "IoT Gateway": [
      {
        name: "Industrial IoT Gateway",
        brand: "Advantech",
        img: "../../product/Industiral Touch PC/Industrial IOT gateway.png",
        specs: "Edge Computing, Multi-protocol Support, Wireless Connectivity",
        features: ["Edge Computing", "Multi-protocol", "Wireless", "Secure Communication"],
        rating: "4.8 ⭐"
      }
    ],
    "Network Appliance": [
      {
        name: "Network Security Appliance",
        brand: "Advantech",
        img: "../../product/Industiral Touch PC/Network Appliance.png",
        specs: "Network Processing, Security Features, High Throughput",
        features: ["Network Processing", "Security Features", "High Throughput", "Reliable"],
        rating: "4.5 ⭐"
      }
    ]
  },

  "Self Service Kiosks": {
    "Interactive Kiosks": [
      {
        name: "All-in-One Display Kiosk",
        brand: "WebSankalp",
        img: "../../product/Self Service Kiosks/All-in-One Display Kiosk.jpeg",
        specs: "32-inch Touch Display, Android/Windows, WiFi, Custom Software",
        features: ["32-inch Touch", "Dual OS Support", "WiFi Ready", "Custom Software"],
        rating: "4.5 ⭐"
      },
      {
        name: "Allegro Check-In Kiosk",
        brand: "Allegro",
        img: "../../product/Self Service Kiosks/Allegro Check-In Kiosk.jpeg",
        specs: "Check-in System, User Friendly Interface, Secure Processing",
        features: ["Check-in System", "User Friendly", "Secure", "Fast Processing"],
        rating: "4.4 ⭐"
      }
    ],
    "Payment Kiosks": [
      {
        name: "Self-Service Payment Terminal",
        brand: "NCR",
        img: "../../product/Self Service Kiosks/FastLane SelfServ™ Checkout.jpeg",
        specs: "Payment Processing, Self-service Design, Multi-payment Support",
        features: ["Payment Processing", "Self-service", "Multi-payment", "User Friendly"],
        rating: "4.6 ⭐"
      }
    ]
  },

  "Industrial IoT": {
    "PLC Systems": [
      {
        name: "Simatic S7 PLC Family",
        brand: "Siemens",
        img: "../../product/Industrial IOT/Compact PLC discrete machine SIMATIC S7 family.jpeg",
        specs: "Compact Design, Discrete Control, Modular Architecture",
        features: ["Compact Design", "Discrete Control", "Modular", "Reliable"],
        rating: "4.8 ⭐"
      }
    ],
    "Edge Computing": [
      {
        name: "ThingWorx Edge Platform",
        brand: "PTC",
        img: "../../product/Industrial IOT/Edge & device management platform ThingWorx ThingWorx Platform.jpeg",
        specs: "Edge Computing, Device Management, Real-time Analytics",
        features: ["Edge Computing", "Device Management", "Real-time Analytics", "Scalable"],
        rating: "4.7 ⭐"
      }
    ],
    "Industrial Gateways": [
      {
        name: "Industrial IoT Gateway",
        brand: "Advantech",
        img: "../../product/Industrial IOT/IIoT  Edge gateway UC-8100 series.jpeg",
        specs: "Multi-protocol Support, Edge Computing, Wireless Connectivity",
        features: ["Multi-protocol", "Edge Computing", "Wireless", "Secure"],
        rating: "4.6 ⭐"
      }
    ],
    "RTU Systems": [
      {
        name: "RTU500 Telemetry System",
        brand: "ABB",
        img: "../../product/Industrial IOT/Field RTU  telemetry unit RTU500 RTU560 series.jpeg",
        specs: "Remote Monitoring, Telemetry, Field Proven Design",
        features: ["Remote Monitoring", "Telemetry", "Field Proven", "Reliable Communication"],
        rating: "4.5 ⭐"
      }
    ]
  },

  "Security Solutions": {
    "CCTV Cameras": [
      {
        name: "Bosch FlexiDome Camera",
        brand: "Bosch",
        img: "../../Images/Security/Camera/Bosch/flexdome.jpg",
        specs: "Full HD 1080p, Day/Night Vision, Vandal Resistant",
        features: ["Full HD 1080p", "Day/Night Vision", "Vandal Resistant", "PoE Powered"],
        rating: "4.6 ⭐"
      },
      {
        name: "Honeywell Box Camera",
        brand: "Honeywell",
        img: "../../Images/Security/Camera/Honeywell/boxcam.png",
        specs: "High Resolution, Multiple Lens Options, Professional Grade",
        features: ["High Resolution", "Multiple Lens", "Professional Grade", "Easy Installation"],
        rating: "4.4 ⭐"
      }
    ],
    "Video Door Systems": [
      {
        name: "Dahua Video Doorbell",
        brand: "Dahua",
        img: "../../Images/Security/Video door/dahua/doorbell.png",
        specs: "HD Video, Two-way Audio, Mobile App Support",
        features: ["HD Video", "Two-way Audio", "Mobile App", "Night Vision"],
        rating: "4.3 ⭐"
      },
      {
        name: "Hikvision Door Station",
        brand: "Hikvision",
        img: "../../Images/Security/Video door/Hikvision/DIS.jpg",
        specs: "Video Intercom, Access Control, Network Ready",
        features: ["Video Intercom", "Access Control", "Network Ready", "Weather Resistant"],
        rating: "4.5 ⭐"
      }
    ]
  },

  "Access Control": {
    "Biometric Systems": [
      {
        name: "eSSL Biometric Reader",
        brand: "eSSL",
        img: "../../Images/Security/access control/essl/essl.png",
        specs: "Fingerprint Recognition, Time Attendance, TCP/IP",
        features: ["Fingerprint Scanner", "Time Attendance", "TCP/IP Network", "User Management"],
        rating: "4.3 ⭐"
      },
      {
        name: "Dahua Fingerprint Reader",
        brand: "Dahua",
        img: "../../Images/Security/access control/Dahua/ASI1212F-21_thumb.png",
        specs: "Fingerprint + Card Reader, Network Ready, Web Management",
        features: ["Dual Authentication", "Network Ready", "Web Management", "Real-time Monitoring"],
        rating: "4.6 ⭐"
      }
    ]
  },

  "Audio & Video Solutions": {
    "Headphones": [
      {
        name: "boAt Rockerz 480 RGB",
        brand: "boAt",
        img: "../../Images/Audio_Video/audio_solutions/headphones/boAt Rockerz 480 W_RGB .png",
        specs: "Wireless Bluetooth, RGB LED, 40mm Drivers, 10hr Battery",
        features: ["Bluetooth 5.0", "RGB Lighting", "40mm Drivers", "10 Hours Battery"],
        rating: "4.2 ⭐"
      },
      {
        name: "JBL Tune 510BT",
        brand: "JBL",
        img: "../../Images/Audio_Video/audio_solutions/headphones/JBL Tune 510BT, On Ear Wireless Headphones .png",
        specs: "Wireless On-Ear, JBL Pure Bass, 40 Hours Battery",
        features: ["Wireless", "JBL Pure Bass", "40 Hours Battery", "Fast Charging"],
        rating: "4.4 ⭐"
      }
    ],
    "Soundbars": [
      {
        name: "JBL Cinema SB580",
        brand: "JBL",
        img: "../../Images/Audio_Video/audio_solutions/soundbars/JBL Cinema SB580 440W Bluetooth Soundbar.png",
        specs: "440W Power, Bluetooth Connectivity, Surround Sound",
        features: ["440W Power", "Bluetooth", "Surround Sound", "Multiple Inputs"],
        rating: "4.5 ⭐"
      }
    ],
    "Speakers": [
      {
        name: "Sony ULT Tower Speaker",
        brand: "Sony",
        img: "../../Images/Audio_Video/audio_solutions/speakers/Sony ULT TOWER 10 Party Speaker.png",
        specs: "High Power Party Speaker, LED Lighting, Multiple Connectivity",
        features: ["High Power", "LED Lighting", "Multiple Connectivity", "Party Mode"],
        rating: "4.6 ⭐"
      }
    ],
    "Cameras": [
      {
        name: "Canon EOS 750D",
        brand: "Canon",
        img: "../../Images/Audio_Video/hardware/cameras/Canon/Canon EOS 750D.png",
        specs: "DSLR Camera, 24.2MP, Full HD Video, WiFi",
        features: ["24.2MP Sensor", "Full HD Video", "WiFi Connectivity", "Articulating Screen"],
        rating: "4.7 ⭐"
      },
      {
        name: "Sony ILCE-1",
        brand: "Sony",
        img: "../../Images/Audio_Video/hardware/cameras/Sony/ILCE-1.png",
        specs: "Mirrorless Camera, Professional Grade, 4K Video",
        features: ["Professional Grade", "4K Video", "High Speed", "Advanced AF"],
        rating: "4.9 ⭐"
      }
    ]
  },

  "Digital Signage": {
    "Interactive Displays": [
      {
        name: "Interactive LED Display",
        brand: "Samsung",
        img: "../../product/M Digital Signages/Interactive LED Display.JPG",
        specs: "55-inch 4K Display, Multi-touch, Android OS, WiFi Connectivity",
        features: ["4K Resolution", "Multi-touch", "Android OS", "WiFi Ready"],
        rating: "4.6 ⭐"
      }
    ],
    "Digital Billboards": [
      {
        name: "Outdoor LED Billboard",
        brand: "LG",
        img: "../../product/M Digital Signages/Outdoor LED Billboard.JPG",
        specs: "Weather Resistant, High Brightness, Full Color, Remote Control",
        features: ["Weather Resistant", "High Brightness", "Full Color", "Remote Control"],
        rating: "4.5 ⭐"
      }
    ]
  },

  "Battery Solutions": {
    "Li-Ion Batteries": [
      {
        name: "Industrial Li-Ion Battery Pack",
        brand: "WebSankalp",
        img: "../../product/Battery PacksLi-Ion & LFP Battery Packse/Industrial Li-Ion Battery Pack.JPG",
        specs: "High Capacity Li-Ion, 12V/24V Options, Long Life Cycle",
        features: ["High Capacity", "Long Life Cycle", "Safe Design", "Fast Charging"],
        rating: "4.5 ⭐"
      },
      {
        name: "Portable Li-Ion Power Bank",
        brand: "WebSankalp",
        img: "../../product/Battery PacksLi-Ion & LFP Battery Packse/Portable Li-Ion Power Bank.JPG",
        specs: "Portable Design, Multiple Output Options, Fast Charging",
        features: ["Portable Design", "Multiple Outputs", "Fast Charging", "LED Indicators"],
        rating: "4.3 ⭐"
      }
    ],
    "LFP Batteries": [
      {
        name: "LFP Lithium Battery Module",
        brand: "WebSankalp",
        img: "../../product/Battery PacksLi-Ion & LFP Battery Packse/LFP Lithium Battery Module.JPG",
        specs: "LiFePO4 Technology, 3.2V Nominal, 5000+ Cycles",
        features: ["LiFePO4 Technology", "5000+ Cycles", "Thermal Stability", "High Safety"],
        rating: "4.7 ⭐"
      },
      {
        name: "High Capacity LFP Battery System",
        brand: "WebSankalp",
        img: "../../product/Battery PacksLi-Ion & LFP Battery Packse/High Capacity LFP Battery System.JPG",
        specs: "High Capacity LFP, Modular Design, BMS Integration",
        features: ["High Capacity", "Modular Design", "BMS Integration", "Long Life"],
        rating: "4.8 ⭐"
      }
    ],
    "Rechargeable Batteries": [
      {
        name: "Rechargeable Li-Ion Battery Pack",
        brand: "WebSankalp",
        img: "../../product/Battery PacksLi-Ion & LFP Battery Packse/Rechargeable Li-Ion Battery Pack.JPG",
        specs: "Rechargeable Design, Smart BMS, Multiple Capacity Options",
        features: ["Rechargeable Design", "Smart BMS", "Multiple Capacities", "Safety Protection"],
        rating: "4.6 ⭐"
      }
    ]
  }
};

// Initialize the catalog
const categoryList = document.getElementById("categoryList");
const contentArea = document.getElementById("contentArea");
const contentTitle = document.getElementById("contentTitle");
const searchInput = document.getElementById("searchInput");

// Load categories in sidebar
Object.keys(catalogData).forEach(cat => {
  let div = document.createElement("div");
  div.textContent = cat;
  div.classList.add("category");
  div.addEventListener("click", () => loadSubcategories(cat, true));
  categoryList.appendChild(div);
});

// Load subcategories (used in sidebar click)
function loadSubcategories(category, clear = false) {
  if (clear) contentArea.innerHTML = "";
  
  // Remove active class from all categories
  document.querySelectorAll('.category').forEach(cat => cat.classList.remove('active'));
  
  // Add active class to clicked category
  if (event && event.target) {
    event.target.classList.add('active');
  }
  
  const block = document.createElement("div");
  block.classList.add("category-block");
  block.innerHTML = `<h3>${category}</h3>`;
  const subGrid = document.createElement("div");
  subGrid.classList.add("grid");
  
  Object.keys(catalogData[category]).forEach(sub => {
    let subDiv = document.createElement("div");
    subDiv.classList.add("subcategory");
    
    // Get the first product's image for the subcategory
    const firstProduct = catalogData[category][sub][0];
    const productCount = catalogData[category][sub].length;
    
    subDiv.innerHTML = `
      <img src="${firstProduct.img}" alt="${sub}">
      <h4>${sub}</h4>
    `;
    subDiv.addEventListener("click", () => loadProducts(category, sub));
    subGrid.appendChild(subDiv);
  });
  
  block.appendChild(subGrid);
  contentArea.appendChild(block);
  contentTitle.textContent = `${category} - Categories`;
}

// Load products
function loadProducts(category, subcategory) {
  contentTitle.textContent = `${subcategory} - Products`;
  contentArea.innerHTML = "";
  
  const productsGrid = document.createElement("div");
  productsGrid.classList.add("grid");
  
  catalogData[category][subcategory].forEach(prod => {
    let pDiv = document.createElement("div");
    pDiv.classList.add("product-card");
    pDiv.innerHTML = `
      <img src="${prod.img}" alt="${prod.name}">
      <div class="product-info">
        <h4>${prod.name}</h4>
        <div class="brand">${prod.brand}</div>
        <div class="specs">${prod.specs}</div>
        <div class="features">
          ${prod.features.map(feature => `<span>${feature}</span>`).join('')}
        </div>
        <div class="rating">${prod.rating}</div>
      </div>
    `;
    
    // Add click event for product details
    pDiv.addEventListener("click", () => showProductDetails(prod));
    
    productsGrid.appendChild(pDiv);
  });
  
  contentArea.appendChild(productsGrid);
}

// Show product details (like product.html functionality)
function showProductDetails(product) {
  // Get or create the product details container
  let productDetails = document.getElementById('productDetails');
  if (!productDetails) {
    productDetails = document.createElement('div');
    productDetails.id = 'productDetails';
    productDetails.classList.add('product-details');
    contentArea.insertBefore(productDetails, contentArea.firstChild);
  }
  
  // Update the product details content
  productDetails.innerHTML = `
    <div class="product-details-header">
      <h3 class="product-details-title">${product.name}</h3>
      <button class="close-details" onclick="closeProductDetails()">&times;</button>
    </div>
    <div class="product-details-content">
      <img class="product-details-image" src="${product.img}" alt="${product.name}" style="cursor: pointer;" onclick="openContactPopup('${product.name}')">
      <div class="product-details-info">
        <h4>Brand: <span>${product.brand}</span></h4>
        <div class="product-details-specs">
          <strong>Specifications:</strong>
          <p>${product.specs}</p>
        </div>
        <div class="product-details-features">
          <strong>Features:</strong>
          <div>
            ${product.features.map(feature => `<span class="feature-item">${feature}</span>`).join('')}
          </div>
        </div>
        <div class="contact-section">
          <h5>Contact for Pricing & Support</h5>
          <div class="contact-info">
            <div class="contact-item">
              <span>📞</span>
              <a href="tel:+919326825895">+91 9326825895</a>
            </div>
            <div class="contact-item">
              <span>✉️</span>
              <a href="mailto:info@websankalp.com">info@websankalp.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Show the details with animation
  productDetails.classList.add('show');
  productDetails.scrollIntoView({ behavior: 'smooth' });
}

// Close product details function
function closeProductDetails() {
  const productDetails = document.getElementById('productDetails');
  if (productDetails) {
    productDetails.classList.remove('show');
  }
}

// Show all products in grid format (matching the image style)
function showAllProductsGrid() {
  // Find existing products grid or create new one
  let productsGrid = document.querySelector('.products-grid');
  if (!productsGrid) {
    const allProductsSection = document.createElement("div");
    allProductsSection.classList.add("all-products-section");
    
    productsGrid = document.createElement("div");
    productsGrid.classList.add("products-grid");
    
    allProductsSection.appendChild(productsGrid);
    contentArea.appendChild(allProductsSection);
  } else {
    // Clear existing products
    productsGrid.innerHTML = '';
  }
  
  // Collect all products from all categories
  Object.keys(catalogData).forEach(category => {
    Object.keys(catalogData[category]).forEach(subcategory => {
      catalogData[category][subcategory].forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        productCard.innerHTML = `
          <div class="product-image">
            <img src="${product.img}" alt="${product.name}">
          </div>
          <div class="product-content">
            <h4 class="product-title">${product.name}</h4>
            <div class="product-brand">${product.brand}</div>
          </div>
        `;
        
        productCard.addEventListener("click", () => showProductDetails(product));
        productsGrid.appendChild(productCard);
      });
    });
  });
}

// Helper function to get category labels
function getCategoryLabel(category, subcategory) {
  const categoryLabels = {
    "Barcode & RFID": "Barcode Printers",
    "Point of Sale": "POS Terminals", 
    "Industrial Touch PC": "Panel PCs",
    "Self Service Kiosks": "Interactive Kiosks",
    "Digital Signage": "Interactive Displays",
    "Industrial IoT": "PLC Systems",
    "Security Solutions": "Security Cameras",
    "Access Control": "Biometric Systems",
    "Audio & Video": "Conference Systems",
    "Battery Solutions": "Li-Ion Battery Packs"
  };
  return categoryLabels[category] || subcategory;
}

// Contact popup modal functions
function openContactPopup(productName) {
  const modal = document.getElementById('contact-popup-modal');
  const productInfoInput = document.getElementById('popup-product-info');
  
  // Set the product name in the hidden field
  if (productInfoInput) {
    productInfoInput.value = productName;
  }
  
  // Pre-fill the message with product name
  const messageTextarea = document.getElementById('popup-message');
  if (messageTextarea) {
    messageTextarea.value = `I'm interested in ${productName}. Please provide more information about pricing and availability.`;
  }
  
  // Show the modal
  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeContactPopup() {
  const modal = document.getElementById('contact-popup-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// Redirect to official product sites
function redirectToOfficialSite(productName) {
  // Define official product URLs based on product names
  const officialSites = {
    // Zebra Products
    "Zebra ZD421 Thermal Printer": "https://www.zebra.com/us/en/products/printers/desktop/zd421.html",
    "Zebra TC52 Mobile Computer": "https://www.zebra.com/us/en/products/mobile-computers/handheld/tc52-tc57.html",
    
    
    // Honeywell Products
    "Honeywell Voyager 1250g Scanner": "https://www.honeywell.com/us/en/products/productivity/sensors-switches-and-controls/sensing-and-iot/hand-held-scanners/voyager-1250g",
    
    // Alien Products (RFID)
    "UHF RFID Tag System": "https://www.alien-technology.com/",
    
    // Posiflex Products
    "Posiflex All-in-One POS Terminal": "https://www.posiflex.com/",
    "Traditional POS Terminal": "https://www.posiflex.com/",
    
    // Advantech Products
    "Industrial Panel PC": "https://www.advantech.com/",
    "15-inch Panel PC": "https://www.advantech.com/",
    
    // WebSankalp Products
    "Interactive Information Kiosk": "https://websankalp.com/",
    "32-inch Interactive Kiosk": "https://websankalp.com/",
    
    // IoT Gateway
    "Industrial IoT Gateway": "https://www.advantech.com/",
    
    // Security Products
    "Bosch FlexiDome IP Camera": "https://www.boschsecurity.com/",
    "Hikvision Turbo HD Camera": "https://www.hikvision.com/",
    
    // Access Control
    "eSSL Biometric Access Control": "https://www.essl.co.in/",
    "Dahua ASI2212F Fingerprint Reader": "https://www.dahuasecurity.com/",
    
    // Conference Solutions
    "Professional Conference Camera": "https://www.logitech.com/",
    
    // Battery Solutions
    "Industrial Li-Ion Battery": "https://www.lg-chem.com/",
    "LFP Battery Pack": "https://www.samsung.com/",
  };
  
  // Get the official site URL
  let redirectUrl = officialSites[productName];
  
  // If specific product not found, try to match by category
  if (!redirectUrl) {
    if (productName.toLowerCase().includes('zebra')) {
      redirectUrl = "https://www.zebra.com/";
    } else if (productName.toLowerCase().includes('honeywell')) {
      redirectUrl = "https://www.honeywell.com/";
    } else if (productName.toLowerCase().includes('posiflex')) {
      redirectUrl = "https://www.posiflex.com/";
    } else if (productName.toLowerCase().includes('advantech')) {
      redirectUrl = "https://www.advantech.com/";
    } else if (productName.toLowerCase().includes('bosch')) {
      redirectUrl = "https://www.boschsecurity.com/";
    } else if (productName.toLowerCase().includes('hikvision')) {
      redirectUrl = "https://www.hikvision.com/";
    } else if (productName.toLowerCase().includes('essl')) {
      redirectUrl = "https://www.essl.co.in/";
    } else if (productName.toLowerCase().includes('dahua')) {
      redirectUrl = "https://www.dahuasecurity.com/";
    } else if (productName.toLowerCase().includes('alien')) {
      redirectUrl = "https://www.alien-technology.com/";
    } else {
      // Default to WebSankalp website
      redirectUrl = "https://websankalp.com/";
    }
  }
  
  // Open the official site in a new tab
  if (redirectUrl) {
    window.open(redirectUrl, '_blank');
  }
}

// Initialize popup modal events when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Close popup when clicking the close button
  const closeBtn = document.querySelector('.popup-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeContactPopup);
  }
  
  // Close popup when clicking outside the modal content
  const modal = document.getElementById('contact-popup-modal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeContactPopup();
      }
    });
  }
  
  // Handle form submission
  const form = document.getElementById('contact-popup-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(form);
      
      // Show loading state
      const submitBtn = form.querySelector('.btn');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Submit to backend
      fetch('../../pages/submit_contact.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Success message
          alert('Thank you for your inquiry! We will contact you soon. You will be redirected to the official product page.');
          
          // Close the modal
          closeContactPopup();
          
          // Reset the form
          form.reset();
          
          // Get the product name from the hidden field
          const productInfo = formData.get('product_info');
          
          // Redirect to official product site after a short delay
          setTimeout(() => {
            redirectToOfficialSite(productInfo);
          }, 1000);
        } else {
          // Error message
          alert('Error: ' + (data.message || 'Failed to submit inquiry. Please try again.'));
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Failed to submit inquiry. Please check your internet connection and try again.');
      })
      .finally(() => {
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      });
    });
  }
});

// Open inquiry form
function openInquiry(productName) {
  alert(`Inquiry form for ${productName} - This would open a contact form in a real implementation`);
}

// Search filter
searchInput.addEventListener("input", () => {
  let query = searchInput.value.toLowerCase();
  
  if (!query) {
    contentTitle.textContent = "Our Product Catalog";
    showAllCategories();
    return;
  }
  
  contentArea.innerHTML = "";
  contentTitle.textContent = `Search Results for "${query}"`;
  
  const resultsGrid = document.createElement("div");
  resultsGrid.classList.add("grid");
  
  let resultsFound = false;
  
  Object.keys(catalogData).forEach(cat => {
    Object.keys(catalogData[cat]).forEach(sub => {
      catalogData[cat][sub].forEach(prod => {
        if (
          prod.name.toLowerCase().includes(query) || 
          cat.toLowerCase().includes(query) || 
          sub.toLowerCase().includes(query) ||
          prod.brand.toLowerCase().includes(query) ||
          prod.specs.toLowerCase().includes(query) ||
          prod.features.some(feature => feature.toLowerCase().includes(query))
        ) {
          resultsFound = true;
          let pDiv = document.createElement("div");
          pDiv.classList.add("product-card");
          pDiv.innerHTML = `
            <img src="${prod.img}" alt="${prod.name}">
            <div class="product-info">
              <h4>${prod.name}</h4>
              <div class="brand">${prod.brand}</div>
              <div class="category-tag">${cat} > ${sub}</div>
              <div class="specs">${prod.specs}</div>
              <div class="features">
                ${prod.features.map(feature => `<span>${feature}</span>`).join('')}
              </div>
              <div class="rating">${prod.rating}</div>
            </div>
          `;
          
          pDiv.addEventListener("click", () => showProductDetails(prod));
          resultsGrid.appendChild(pDiv);
        }
      });
    });
  });
  
  if (!resultsFound) {
    const noResults = document.createElement("div");
    noResults.classList.add("no-results");
    noResults.innerHTML = `
      <h3>No products found for "${query}"</h3>
      <p>Try searching with different keywords or browse our categories.</p>
    `;
    contentArea.appendChild(noResults);
  } else {
    contentArea.appendChild(resultsGrid);
  }
});

// Show all categories by default
function showAllCategories() {
  contentArea.innerHTML = "";
  Object.keys(catalogData).forEach(cat => {
    const block = document.createElement("div");
    block.classList.add("category-block");
    block.innerHTML = `<h3>${cat}</h3>`;
    
    const subGrid = document.createElement("div");
    subGrid.classList.add("grid");
    
    Object.keys(catalogData[cat]).forEach(sub => {
      let subDiv = document.createElement("div");
      subDiv.classList.add("subcategory");
      subDiv.innerHTML = `
        <h4>${sub}</h4>
      `;
      subDiv.addEventListener("click", () => loadProducts(cat, sub));
      subGrid.appendChild(subDiv);
    });
    
    block.appendChild(subGrid);
    contentArea.appendChild(block);
  });
}

// Initialize the page
showAllCategories();