// WebSankalp Technologies - Complete Product Database
// All products organized by categories with deep search functionality

const productData = {
  // Barcode & RFID Solutions
  "Barcode Printers": [
    {
      name: "Zebra ZD421 Thermal Printer",
      brand: "Zebra",
      img: "../product/Barcode%20&%20rfid/Barcode%20Printer.png",
      specs: "Thermal Transfer, 203/300 DPI, USB/Ethernet, 4-inch width",
      features: ["Thermal Transfer", "203/300 DPI", "USB & Ethernet", "Easy Loading", "Compact Design"],
      rating: "4.5 ⭐",
      website: "https://www.zebra.com/"
    }
  ],
  
  "Barcode Scanners": [
    {
      name: "Honeywell Voyager 1250g Scanner",
      brand: "Honeywell", 
      img: "../product/Barcode%20&%20rfid/Barcode%20Scanners.png",
      specs: "1D/2D Scanning, USB Interface, Laser Technology, Handheld",
      features: ["1D/2D Scanning", "USB Interface", "Laser Technology", "Ergonomic Design", "Fast Scanning"],
      rating: "4.6 ⭐",
      website: "https://www.honeywell.com/"
    }
  ],
  
  "Mobile Computers": [
    {
      name: "Zebra TC52 Mobile Computer",
      brand: "Zebra",
      img: "../product/Barcode%20&%20rfid/Mobile%20Computers.png", 
      specs: "Android OS, 5-inch Display, 1D/2D Scanner, WiFi/Cellular",
      features: ["Android 10", "5-inch Touch Display", "Integrated Scanner", "WiFi & 4G", "Rugged Design"],
      rating: "4.7 ⭐",
      website: "https://www.zebra.com/"
    }
  ],
  
  "RFID Solutions": [
    {
      name: "UHF RFID Tag System",
      brand: "Alien",
      img: "../product/Barcode%20&%20rfid/rfid%20tag%20.jpg",
      specs: "UHF Gen2, Long Range Reading, Durable Construction, Multiple Sizes",
      features: ["UHF Gen2 Protocol", "Long Range", "Durable Material", "Various Sizes", "High Performance"],
      rating: "4.4 ⭐",
      website: "https://www.alientechnology.com/"
    }
  ],

  // Point of Sale Solutions
  "POS Terminals": [
    {
      name: "Posiflex All-in-One POS Terminal",
      brand: "Posiflex",
      img: "../Images/Point%20of%20Sales/posiflex-pos-system.jpg",
      specs: "15-inch Touch Screen, Intel Processor, Windows 10, Built-in Printer",
      features: ["15-inch Touch Display", "Intel Processor", "Windows 10 IoT", "Thermal Printer", "MSR Ready"],
      rating: "4.4 ⭐",
      website: "https://www.posiflex.com/"
    }
  ],

  // Industrial Touch PC Solutions  
  "Panel PCs": [
    {
      name: "Industrial Panel PC",
      brand: "Advantech",
      img: "../Images/Industrial%20Touch%20PC/download.jpeg",
      specs: "15-inch Touch Screen, Intel Core i5, Windows 10 IoT, Fanless Design",
      features: ["Fanless Design", "Wide Temperature Range", "Touch Interface", "Industrial Grade", "Multiple I/O"],
      rating: "4.7 ⭐",
      website: "https://www.advantech.com/"
    }
  ],

  // Self Service Kiosk Solutions
  "Interactive Kiosks": [
    {
      name: "Interactive Information Kiosk",
      brand: "WebSankalp",
      img: "../product/Self%20Service%20Kiosks/All-in-One%20Display%20Kiosk.jpeg",
      specs: "32-inch Touch Display, Android/Windows, WiFi, Custom Software",
      features: ["32-inch Touch Display", "Android/Windows OS", "WiFi Connectivity", "Custom Applications", "Durable Construction"],
      rating: "4.5 ⭐",
      website: "https://websankalp.com/"
    }
  ],

  // Industrial IoT Solutions
  "IoT Gateways": [
    {
      name: "Industrial IoT Gateway",
      brand: "WebSankalp",
      img: "../Images/Industrial%20IoT%20Home%20Page/iot.jpg",
      specs: "Edge Computing, Multi-protocol Support, Cloud Integration, Real-time Analytics",
      features: ["Edge Computing", "Multi-protocol Support", "Cloud Integration", "Real-time Analytics", "Remote Monitoring"],
      rating: "4.6 ⭐",
      website: "https://websankalp.com/"
    }
  ],

  // Security & Surveillance Solutions
  "CCTV Cameras": [
    {
      name: "Bosch FlexiDome IP Camera",
      brand: "Bosch",
      img: "../Images/Security/Camera/Bosch/flexdome.jpg",
      specs: "Full HD 1080p, Day/Night Vision, Vandal Resistant, PoE Powered",
      features: ["Full HD 1080p", "Day/Night Vision", "Vandal Resistant", "PoE Powered", "Motion Detection"],
      rating: "4.6 ⭐",
      website: "https://www.boschsecurity.com/"
    },
    {
      name: "Hikvision Turbo HD Camera", 
      brand: "Hikvision",
      img: "../Images/Security/Camera/Bosch/netwokca.jpg",
      specs: "4MP Resolution, Smart IR, Weather Resistant, H.265+ Compression",
      features: ["4MP Resolution", "Smart IR Technology", "Weather Resistant", "H.265+ Compression", "Easy Installation"],
      rating: "4.5 ⭐",
      website: "https://www.hikvision.com/"
    }
  ],

  // Access Control Systems
  "Biometric Systems": [
    {
      name: "eSSL Biometric Access Control",
      brand: "eSSL",
      img: "../Images/Security/access%20control/essl/essl.png",
      specs: "Fingerprint Recognition, Time Attendance, TCP/IP, Software Integration",
      features: ["Fingerprint Scanner", "Time Attendance", "TCP/IP Network", "Software Integration", "User Management"],
      rating: "4.3 ⭐",
      website: "https://www.essl.co.in/"
    },
    {
      name: "Dahua ASI1212F Fingerprint Reader",
      brand: "Dahua",
      img: "../Images/Security/access%20control/Dahua/ASI1212F-21_thumb.png",
      specs: "Fingerprint + Card Reader, TCP/IP, Web Management, Multi-authentication",
      features: ["Fingerprint + Card", "TCP/IP Network", "Web Management", "Multi-authentication", "Real-time Monitoring"],
      rating: "4.6 ⭐",
      website: "https://www.dahuasecurity.com/"
    }
  ],

  // Video Conferencing Solutions
  "Conference Cameras": [
    {
      name: "Professional Conference Camera",
      brand: "WebSankalp",
      img: "../Images/AV%20solutions%20cover/av1.jpg",
      specs: "4K Ultra HD, Auto Tracking, Wide Angle Lens, USB 3.0 Connectivity",
      features: ["4K Ultra HD", "Auto Tracking", "Wide Angle Lens", "USB 3.0", "Plug & Play"],
      rating: "4.5 ⭐",
      website: "https://websankalp.com/"
    }
  ],

  // Battery Solutions
  "Li-Ion Batteries": [
    {
      name: "Industrial Li-Ion Battery Pack",
      brand: "WebSankalp",
      img: "../Images/Renewable%20Li-Ion%20&%20LFP%20Battery/download%20(1).jpeg",
      specs: "High Capacity Li-Ion, 12V/24V Options, Long Life Cycle, Safe Design",
      features: ["High Capacity", "Long Life Cycle", "Safe Design", "Fast Charging", "Environment Friendly"],
      rating: "4.5 ⭐",
      website: "https://websankalp.com/"
    }
  ],

  "LFP Batteries": [
    {
      name: "LFP Lithium Battery Module",
      brand: "WebSankalp", 
      img: "../product/Battery%20PacksLi-Ion%20&%20LFP%20Battery%20Packse/LFP%20Lithium%20Battery%20Module.JPG",
      specs: "LiFePO4 Technology, 3.2V Nominal, 5000+ Cycles, Thermal Stability",
      features: ["LiFePO4 Technology", "5000+ Cycles", "Thermal Stability", "High Safety", "Maintenance Free"],
      rating: "4.7 ⭐",
      website: "https://websankalp.com/"
    }
  ],

  // Audio & Video Solutions (keeping some from original)
  "Headphones": [
    {
      name: "boAt Rockerz 480 Wireless Headphones",
      brand: "boAt",
      img: "../Images/Audio_Video/audio_solutions/headphones/boAt%20Rockerz%20480%20W_RGB%20.png",
      specs: "Wireless Bluetooth, RGB LED, 40mm Drivers, 10hr Battery",
      features: ["Bluetooth 5.0", "RGB Lighting", "40mm Dynamic Drivers", "10 Hours Playtime", "Fast Charging"],
      rating: "4.2 ⭐",
      website: "https://www.boat-lifestyle.com/"
    },
    {
      name: "JBL Tune 510BT Wireless On-Ear Headphones",
      brand: "JBL",
      img: "../Images/Audio_Video/audio_solutions/headphones/JBL%20Tune%20510BT,%20On%20Ear%20Wireless%20Headphones%20.png",
      specs: "JBL Pure Bass Sound, 40hr Battery, Wireless + Wired",
      features: ["JBL Pure Bass", "40 Hours Battery", "Quick Charge", "Multi-Point Connection", "Voice Assistant"],
      rating: "4.5 ⭐",
      website: "https://www.jbl.com/"
    },
    {
      name: "JBL Premium Headphones",
      brand: "JBL",
      img: "../Images/Audio_Video/audio_solutions/headphones/JBL.png",
      specs: "Professional Audio, Comfort Fit, Studio Quality",
      features: ["Studio Quality Sound", "Comfort Padding", "Professional Grade", "Durable Build", "Clear Audio"],
      rating: "4.6 ⭐",
      website: "https://www.jbl.com/"
    },
    {
      name: "Sony Premium Headphones",
      brand: "Sony",
      img: "../Images/Audio_Video/audio_solutions/headphones/SONY.png",
      specs: "High-Resolution Audio, Noise Cancellation, Premium Design",
      features: ["Hi-Res Audio", "Active Noise Cancelling", "30hr Battery", "Quick Attention", "Touch Controls"],
      rating: "4.7 ⭐",
      website: "https://www.sony.com/"
    },
    {
      name: "Soundcore by Anker H30i Wireless Headphones",
      brand: "Anker",
      img: "../Images/Audio_Video/audio_solutions/headphones/soundcore%20by%20Anker%20H30i%20Wireless.png",
      specs: "70hr Playtime, Hi-Res Audio, Rapid Charge, Comfortable Fit",
      features: ["70 Hours Playtime", "Hi-Res Audio Certified", "Rapid Charge", "Memory Foam Ear Cups", "Built-in Mic"],
      rating: "4.4 ⭐",
      website: "https://www.ankersoundcore.com/"
    }
  ],

  "Soundbars": [
    {
      name: "boAt Aavante Bar Groove Bluetooth Soundbar",
      brand: "boAt",
      img: "../Images/Audio_Video/audio_solutions/soundbars/boAt%20Aavante%20Bar%20Groove%20Bluetooth%20Soundbar.png",
      specs: "50W RMS, Bluetooth 5.0, Multiple Connectivity, Wireless Subwoofer",
      features: ["50W RMS Output", "Wireless Subwoofer", "Bluetooth 5.0", "USB/AUX/HDMI", "Remote Control"],
      rating: "4.1 ⭐",
      website: "https://www.boat-lifestyle.com/"
    },
    {
      name: "JBL Cinema SB580 440W Bluetooth Soundbar",
      brand: "JBL",
      img: "../Images/Audio_Video/audio_solutions/soundbars/JBL%20Cinema%20SB580%20440W%20Bluetooth%20Soundbar.png",
      specs: "440W Total Power, Wireless Subwoofer, Dolby Digital, HDMI ARC",
      features: ["440W Total Power", "Dolby Digital", "Wireless Subwoofer", "HDMI ARC", "Bluetooth Streaming"],
      rating: "4.5 ⭐",
      website: "https://www.jbl.com/"
    },
    {
      name: "OBAGE Classic-5 100W 2.1 Channel Soundbar",
      brand: "OBAGE",
      img: "../Images/Audio_Video/audio_solutions/soundbars/OBAGE%20Newly%20Launched%20Classic-5%20100W%202.1.png",
      specs: "100W Output, 2.1 Channel, Bluetooth, USB/SD Card Support",
      features: ["100W RMS Power", "2.1 Channel System", "Bluetooth Connectivity", "USB/SD Support", "LED Display"],
      rating: "4.0 ⭐",
      website: "https://obage.com/"
    },
    {
      name: "Sony HT-S20R Real 5.1ch Dolby Audio Soundbar",
      brand: "Sony",
      img: "../Images/Audio_Video/audio_solutions/soundbars/Sony%20HT-S20R%20Real.png",
      specs: "400W, Real 5.1ch Dolby Audio, Wireless Rear Speakers, HDMI",
      features: ["Real 5.1 Channel", "400W Total Power", "Dolby Audio", "Wireless Rear Speakers", "HDMI ARC"],
      rating: "4.6 ⭐",
      website: "https://www.sony.com/"
    },
    {
      name: "Zebronics Zeb Juke Bar 3800 Pro Soundbar",
      brand: "Zebronics",
      img: "../Images/Audio_Video/audio_solutions/soundbars/Zebronics%20Zeb%20Juke%20Bar%203800%20Pro%20.png",
      specs: "120W, Bluetooth 5.0, USB/AUX/Optical, Wireless Subwoofer",
      features: ["120W RMS Output", "Bluetooth 5.0", "Wireless Subwoofer", "Multiple Input Options", "LED Display"],
      rating: "4.2 ⭐",
      website: "https://zebronics.com/"
    }
  ],

  "Speakers": [
    {
      name: "F&D F-203G 2.1 Channel Multimedia Speaker",
      brand: "F&D",
      img: "../Images/Audio_Video/audio_solutions/speakers/F&D%20F-203G%202.1%20Channel%20Multimedia%20Speaker.png",
      specs: "15W RMS, 2.1 Channel, Wooden Subwoofer, Volume Control",
      features: ["15W RMS Power", "2.1 Channel System", "Wooden Subwoofer", "Wired Volume Control", "3.5mm Input"],
      rating: "4.0 ⭐",
      website: "https://www.fenda.com/"
    },
    {
      name: "Philips MMS4040F 77 Speaker Set",
      brand: "Philips",
      img: "../Images/Audio_Video/audio_solutions/speakers/Philips%20MMS4040F%2077%20Speaker%20Set.png",
      specs: "50W RMS, 2.1 Channel, Deep Bass, Multiple Connectivity",
      features: ["50W RMS Output", "Deep Bass Technology", "Multiple Inputs", "Volume & Bass Control", "Compact Design"],
      rating: "4.3 ⭐",
      website: "https://www.philips.com/"
    },
    {
      name: "Sony ULT TOWER 10 Party Speaker",
      brand: "Sony",
      img: "../Images/Audio_Video/audio_solutions/speakers/Sony%20ULT%20TOWER%2010%20Party%20Speaker.png",
      specs: "1000W, ULT Power Sound, Party Lights, Bluetooth, Karaoke",
      features: ["1000W High Power", "ULT Power Sound", "360° Party Light", "Karaoke Function", "Party Connect"],
      rating: "4.7 ⭐",
      website: "https://www.sony.com/"
    },
    {
      name: "Zebronics Hammer Dual Tower Speaker",
      brand: "Zebronics",
      img: "../Images/Audio_Video/audio_solutions/speakers/Zebronics%20Hammer%20Dual%20Tower%20Speaker.png",
      specs: "140W RMS, Dual Tower Design, Bluetooth, USB/SD/FM",
      features: ["140W RMS Power", "Dual Tower Design", "Bluetooth Connectivity", "USB/SD/FM Support", "Remote Control"],
      rating: "4.1 ⭐",
      website: "https://zebronics.com/"
    },
    {
      name: "Zebronics Zeb-WARRIOR 2.0 Desktop Speaker",
      brand: "Zebronics",
      img: "../Images/Audio_Video/audio_solutions/speakers/Zebronics%20Zeb-WARRIOR%202.0.png",
      specs: "4W RMS, 2.0 Channel, USB Powered, Compact Desktop Design",
      features: ["4W RMS Output", "USB Powered", "Compact Design", "3.5mm AUX Input", "Volume Control"],
      rating: "3.8 ⭐",
      website: "https://zebronics.com/"
    }
  ],

  "Cameras": [
    {
      name: "Canon EOS 750D DSLR Camera",
      brand: "Canon",
      img: "../Images/Audio_Video/hardware/cameras/Canon/Canon%20EOS%20750D.png",
      specs: "24.2MP APS-C CMOS, DIGIC 6, Full HD Video, WiFi/NFC",
      features: ["24.2MP APS-C Sensor", "DIGIC 6 Processor", "Full HD Video", "WiFi & NFC", "Vari-angle LCD"],
      rating: "4.5 ⭐",
      website: "https://www.canon.com/"
    },
    {
      name: "Canon IXUS 285 HS Compact Camera",
      brand: "Canon",
      img: "../Images/Audio_Video/hardware/cameras/Canon/IXUS%20285%20HS.png",
      specs: "20.2MP, 12x Optical Zoom, Full HD Video, WiFi/NFC",
      features: ["20.2MP CMOS Sensor", "12x Optical Zoom", "DIGIC 4+ Processor", "WiFi Connectivity", "Smart AUTO"],
      rating: "4.2 ⭐",
      website: "https://www.canon.com/"
    },
    {
      name: "Canon PowerShot SX740 HS",
      brand: "Canon",
      img: "../Images/Audio_Video/hardware/cameras/Canon/PowerShot%20SX740%20HS.png",
      specs: "20.3MP, 40x Optical Zoom, 4K Video, WiFi/Bluetooth",
      features: ["20.3MP CMOS Sensor", "40x Optical Zoom", "4K Video Recording", "WiFi & Bluetooth", "DIGIC 8 Processor"],
      rating: "4.4 ⭐",
      price: "₹26,999"
    },
    {
      name: "Nikon COOLPIX S7000 Digital Camera",
      brand: "Nikon",
      img: "../Images/Audio_Video/hardware/cameras/Nikon/Nikon%20COOLPIX%20S7000%20Digital%20Camera.png",
      specs: "16MP, 20x Optical Zoom, Full HD Video, WiFi/NFC",
      features: ["16MP CMOS Sensor", "20x Optical Zoom", "Full HD Video", "WiFi & NFC", "Vibration Reduction"],
      rating: "4.1 ⭐",
      price: "₹18,999"
    },
    {
      name: "Sony ILCE-1 Alpha 1 Mirrorless Camera",
      brand: "Sony",
      img: "../Images/Audio_Video/hardware/cameras/Sony/ILCE-1.png",
      specs: "50.1MP Full-frame, 8K Video, 30fps Burst, Real-time Tracking",
      features: ["50.1MP Full-Frame", "8K 30p Video", "30fps Continuous Shooting", "Real-time Eye AF", "5-axis Stabilization"],
      rating: "4.8 ⭐",
      price: "₹5,99,990"
    }
  ],

  "Projectors DLP": [
    {
      name: "Portronics Beem 500 Smart Projector",
      brand: "Portronics",
      img: "../Images/Audio_Video/hardware/projectors/dlp/Portronics%20Beem%20500%20Smart%20Projector.png",
      specs: "DLP Technology, 1080p Support, 3000 Lumens, WiFi Connectivity",
      features: ["DLP Technology", "1080p Full HD", "3000 Lumens", "WiFi Mirroring", "Android 9.0"],
      rating: "4.0 ⭐",
      price: "₹24,999"
    },
    {
      name: "ViewSonic PA503S DLP Projector",
      brand: "ViewSonic",
      img: "../Images/Audio_Video/projectors/dlp/ViewSonic%20PA503S%20DLP%20Projector.png",
      specs: "DLP SVGA, 3800 Lumens, 22000:1 Contrast, HDMI/VGA",
      features: ["DLP SVGA Resolution", "3800 Lumens Brightness", "22000:1 Contrast Ratio", "SuperColor Technology", "Dual HDMI"],
      rating: "4.3 ⭐",
      price: "₹32,999"
    },
    {
      name: "XGIMI Premium DLP Projector",
      brand: "XGIMI",
      img: "../Images/Audio_Video/hardware/projectors/dlp/XGIMI.png",
      specs: "4K UHD, DLP Technology, Android TV, Harman Kardon Audio",
      features: ["4K UHD Resolution", "DLP Technology", "Android TV 10.0", "Harman Kardon Audio", "Auto Focus"],
      rating: "4.6 ⭐",
      price: "₹89,999"
    }
  ],

  "Projectors LCD": [
    {
      name: "Epson 2165W WXGA 3LCD Projector",
      brand: "Epson",
      img: "../Images/Audio_Video/hardware/projectors/lcd/Epson%202165W%20WXGA%203LCD%20Projector.png",
      specs: "WXGA 3LCD, 3500 Lumens, WiFi, Wireless Display, HDMI",
      features: ["WXGA 3LCD Technology", "3500 Lumens", "WiFi Connectivity", "Wireless Display", "Split Screen"],
      rating: "4.4 ⭐",
      price: "₹45,999"
    }
  ],

  // Security Solutions
  "Access Control": [
    {
      name: "ASI1201A Access Control System",
      brand: "Dahua",
      img: "../Images/Security/access%20control/Dahua/ASI1201A_ASI1201A-D_thumb.png",
      specs: "RFID Card Reader, TCP/IP, Wiegand Interface, Anti-passback",
      features: ["RFID Card Reading", "TCP/IP Network", "Wiegand Interface", "Anti-passback Function", "Time Attendance"],
      rating: "4.5 ⭐",
      price: "₹8,999"
    },
    {
      name: "ASI1212F-21 Fingerprint Access Control",
      brand: "Dahua",
      img: "../Images/Security/access%20control/Dahua/ASI1212F-21_thumb.png",
      specs: "Fingerprint + Card Reader, TCP/IP, Web Management, Multi-authentication",
      features: ["Fingerprint Recognition", "Card Reader", "TCP/IP Network", "Web Management", "Multi-authentication"],
      rating: "4.6 ⭐",
      price: "₹12,999"
    },
    {
      name: "eSSL Biometric Access Control System",
      brand: "eSSL",
      img: "../Images/Security/access%20control/essl/essl.png",
      specs: "Biometric Authentication, Time Attendance, Software Integration",
      features: ["Biometric Scanner", "Time Attendance", "Software Integration", "User Management", "Report Generation"],
      rating: "4.3 ⭐",
      price: "₹7,999"
    },
    {
      name: "eSSL Access Controller Pro",
      brand: "eSSL",
      img: "../Images/Security/access%20control/essl/essl2.png",
      specs: "Advanced Access Control, Multi-door Support, Real-time Monitoring",
      features: ["Multi-door Control", "Real-time Monitoring", "Event Logging", "Remote Management", "Alarm Integration"],
      rating: "4.4 ⭐",
      price: "₹15,999"
    },
    {
      name: "eSSL Time Attendance Terminal",
      brand: "eSSL",
      img: "../Images/Security/access%20control/essl/essl3.png",
      specs: "Time & Attendance, Payroll Integration, Biometric Authentication",
      features: ["Time & Attendance", "Payroll Integration", "Biometric Auth", "Shift Management", "Holiday Setup"],
      rating: "4.2 ⭐",
      price: "₹5,999"
    }
  ],

  "Security Cameras": [
    {
      name: "Bosch FlexiDome IP Camera",
      brand: "Bosch",
      img: "../Images/Security/Camera/Bosch/flexdome.jpg",
      specs: "Full HD 1080p, Day/Night Vision, Vandal Resistant, PoE",
      features: ["Full HD 1080p", "Day/Night Vision", "Vandal Resistant", "PoE Powered", "Motion Detection"],
      rating: "4.6 ⭐",
      price: "₹18,999"
    },
    {
      name: "Bosch Network Camera",
      brand: "Bosch",
      img: "../Images/Security/Camera/Bosch/netwokca.jpg",
      specs: "IP Network Camera, HD Resolution, Remote Monitoring, Cloud Storage",
      features: ["IP Network Connectivity", "HD Resolution", "Remote Monitoring", "Cloud Storage", "Mobile App"],
      rating: "4.5 ⭐",
      price: "₹22,999"
    },
    {
      name: "Honeywell Performance Series Camera",
      brand: "Honeywell",
      img: "../Images/Security/Camera/Honeywell/30%20.png",
      specs: "Performance Series, HD Quality, Advanced Analytics, Weather Resistant",
      features: ["HD Video Quality", "Advanced Analytics", "Weather Resistant", "Smart Detection", "Easy Installation"],
      rating: "4.4 ⭐",
      price: "₹16,999"
    },
    {
      name: "Honeywell Box Camera",
      brand: "Honeywell",
      img: "../Images/Security/Camera/Honeywell/boxcam.png",
      specs: "Professional Box Camera, Interchangeable Lens, High Resolution",
      features: ["Interchangeable Lens", "High Resolution", "Professional Grade", "Multiple Mounting", "Day/Night"],
      rating: "4.3 ⭐",
      price: "₹25,999"
    },
    {
      name: "Honeywell Explosion Proof Camera",
      brand: "Honeywell",
      img: "../Images/Security/Camera/Honeywell/explosionpr.png",
      specs: "Explosion Proof Housing, Hazardous Area, Industrial Grade, IP68",
      features: ["Explosion Proof", "Hazardous Area Certified", "Industrial Grade", "IP68 Rating", "Corrosion Resistant"],
      rating: "4.7 ⭐",
      price: "₹85,999"
    },
    {
      name: "Honeywell MicroDome Camera",
      brand: "Honeywell",
      img: "../Images/Security/Camera/Honeywell/Microdome%20.png",
      specs: "Compact Dome, Discreet Installation, HD Quality, Easy Mount",
      features: ["Compact Design", "Discreet Installation", "HD Video", "Easy Mounting", "Wide Angle View"],
      rating: "4.2 ⭐",
      price: "₹12,999"
    },
    {
      name: "Vicon Valkyrie Flat Camera",
      brand: "Vicon",
      img: "../Images/Security/Camera/Vicon/Valkyrie_Flat_Front_10K_V2.png",
      specs: "10K Ultra HD, Flat Panel Design, Advanced Analytics, AI Features",
      features: ["10K Ultra HD", "Flat Panel Design", "AI Analytics", "Smart Detection", "Cloud Integration"],
      rating: "4.8 ⭐",
      price: "₹1,25,999"
    },
    {
      name: "Vicon Vanguard Camera System",
      brand: "Vicon",
      img: "../Images/Security/Camera/Vicon/Vanguard.png",
      specs: "Professional Security Camera, High Performance, Multi-sensor",
      features: ["Multi-sensor Technology", "High Performance", "Professional Grade", "Advanced Features", "Scalable"],
      rating: "4.7 ⭐",
      price: "₹95,999"
    },
    {
      name: "Vicon Vero Security Camera",
      brand: "Vicon",
      img: "../Images/Security/Camera/Vicon/Vero_Features.png",
      specs: "Advanced Security Features, Smart Analytics, Cloud Ready",
      features: ["Smart Analytics", "Cloud Ready", "Advanced Security", "Easy Setup", "Remote Monitoring"],
      rating: "4.6 ⭐",
      price: "₹45,999"
    }
  ],

  "Video Door Systems": [
    {
      name: "Dahua Video Door Phone",
      brand: "Dahua",
      img: "../Images/Security/Video%20door/dahua/1_0_01_15_12792_819005043_crop_thumb.png",
      specs: "HD Video Intercom, Two-way Audio, Motion Detection, Mobile App",
      features: ["HD Video Call", "Two-way Audio", "Motion Detection", "Mobile App", "Night Vision"],
      rating: "4.4 ⭐",
      price: "₹15,999"
    },
    {
      name: "Dahua Smart Doorbell",
      brand: "Dahua",
      img: "../Images/Security/Video%20door/dahua/dahua2.png",
      specs: "Smart Video Doorbell, WiFi Connectivity, Cloud Storage, PIR Detection",
      features: ["WiFi Connectivity", "Cloud Storage", "PIR Detection", "Smart Alerts", "Easy Installation"],
      rating: "4.3 ⭐",
      price: "₹12,999"
    },
    {
      name: "Dahua Wireless Video Doorbell",
      brand: "Dahua",
      img: "../Images/Security/Video%20door/dahua/doorbell.png",
      specs: "Wireless Design, Battery Powered, HD Video, Weather Resistant",
      features: ["Wireless Installation", "Battery Powered", "HD Video Quality", "Weather Resistant", "Smart Notifications"],
      rating: "4.2 ⭐",
      price: "₹18,999"
    },
    {
      name: "Dahua VTO3 Video Door Station",
      brand: "Dahua",
      img: "../Images/Security/Video%20door/dahua/vto3.png",
      specs: "Professional Door Station, Access Control Integration, Vandal Proof",
      features: ["Access Control Integration", "Vandal Proof Design", "Professional Grade", "Multiple Authentication", "Remote Unlock"],
      rating: "4.6 ⭐",
      price: "₹28,999"
    },
    {
      name: "Hikvision Digital Door Station",
      brand: "Hikvision",
      img: "../Images/Security/Video%20door/Hikvision/DIS.jpg",
      specs: "Digital Intercom System, HD Display, Touch Interface, Network Ready",
      features: ["HD Touch Display", "Network Connectivity", "Digital Intercom", "User-friendly Interface", "Multiple Units"],
      rating: "4.5 ⭐",
      price: "₹22,999"
    },
    {
      name: "Hikvision Smart Video Intercom",
      brand: "Hikvision",
      img: "../Images/Security/Video%20door/Hikvision/hik1.png",
      specs: "Smart Video Intercom, Face Recognition, Mobile Integration, Cloud Service",
      features: ["Face Recognition", "Mobile Integration", "Cloud Service", "Smart Features", "Easy Setup"],
      rating: "4.7 ⭐",
      price: "₹35,999"
    }
  ],

  // Industrial Solutions
  "Barcode & RFID": [
    {
      name: "Industrial Barcode Scanner",
      brand: "Zebra",
      img: "../Images/Barcode%20rfid%20cover/barcode-scanner-500x500.jpg",
      specs: "Industrial Grade, 2D Scanning, Rugged Design, Wireless Connectivity",
      features: ["2D Barcode Scanning", "Rugged Design", "Wireless Connection", "Long Range", "Industrial Grade"],
      rating: "4.5 ⭐",
      price: "₹25,999"
    }
  ],

  "Industrial IoT": [
    {
      name: "Industrial IoT Gateway",
      brand: "WebSankalp",
      img: "../Images/Industrial%20IoT%20Home%20Page/iot.jpg",
      specs: "IoT Gateway, Edge Computing, Multi-protocol Support, Cloud Integration",
      features: ["Edge Computing", "Multi-protocol", "Cloud Integration", "Real-time Analytics", "Remote Monitoring"],
      rating: "4.6 ⭐",
      price: "₹45,999"
    }
  ],

  "Touch PC": [
    {
      name: "Industrial Touch PC",
      brand: "Advantech",
      img: "../Images/Industrial%20Touch%20PC/download.jpeg",
      specs: "Industrial Touch Computer, Fanless Design, Wide Operating Temperature",
      features: ["Fanless Design", "Wide Temp Range", "Touch Interface", "Industrial Grade", "Multiple I/O"],
      rating: "4.7 ⭐",
      price: "₹85,999"
    }
  ],

  "Point of Sale": [
    {
      name: "Posiflex POS Terminal",
      brand: "Posiflex",
      img: "../Images/Point%20of%20Sales/posiflex-pos-system.jpg",
      specs: "All-in-one POS, Touch Screen, Thermal Printer, Cash Drawer",
      features: ["All-in-one Design", "Touch Screen", "Thermal Printer", "Cash Drawer", "MSR Reader"],
      rating: "4.4 ⭐",
      price: "₹35,999"
    }
  ],

  "Battery Solutions": [
    {
      name: "Li-Ion Battery Pack",
      brand: "WebSankalp",
      img: "../Images/Renewable%20Li-Ion%20&%20LFP%20Battery/download%20(1).jpeg",
      specs: "Renewable Li-Ion Battery, High Capacity, Long Life, Safe Design",
      features: ["High Capacity", "Long Life Cycle", "Safe Design", "Fast Charging", "Environment Friendly"],
      rating: "4.5 ⭐",
      price: "₹15,999"
    }
  ],

  // Software Solutions
  "Custom Software": [
    {
      name: "Custom Software Development",
      brand: "WebSankalp",
      img: "../Images/Custom%20Software%20Solutions%20Home%20Page/cust_software_dev.jpg",
      specs: "Custom Software Solutions, Web Applications, Mobile Apps, Cloud Solutions",
      features: ["Custom Development", "Web Applications", "Mobile Apps", "Cloud Solutions", "API Integration"],
      rating: "4.8 ⭐",
      price: "Contact for Quote"
    },
    {
      name: "Enterprise Software Development",
      brand: "WebSankalp",
      img: "../Images/Custom%20Software%20Solutions%20Home%20Page/software-development.jpg",
      specs: "Enterprise Solutions, Scalable Architecture, Modern Technologies",
      features: ["Enterprise Grade", "Scalable Architecture", "Modern Tech Stack", "Security Focused", "24/7 Support"],
      rating: "4.9 ⭐",
      price: "Contact for Quote"
    }
  ]
};

// Global variables for current state
let currentCategory = null;
let currentSubcategory = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  renderProducts();
  setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
  document.getElementById("globalSearch").addEventListener("input", handleSearch);
  
  // Setup popup event listeners
  setupPopupEventListeners();
  
  // Debounce search for better performance
  let searchTimeout;
  function handleSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(renderProducts, 300);
  }
}

// Toggle subcategory visibility
function toggleSub(elem) {
  // Close all other subcategories
  document.querySelectorAll('.subcategory').forEach(sub => {
    if (sub !== elem.nextElementSibling) {
      sub.style.display = 'none';
      const toggle = sub.previousElementSibling.querySelector('.toggle');
      if (toggle) toggle.textContent = '+';
    }
  });
  
  // Remove active class from all categories
  document.querySelectorAll('.category').forEach(cat => {
    cat.classList.remove('active');
  });
  
  const sub = elem.nextElementSibling;
  const icon = elem.querySelector(".toggle");
  
  if (sub.style.display === "block") {
    sub.style.display = "none";
    icon.textContent = "+";
  } else {
    sub.style.display = "block";
    icon.textContent = "-";
    elem.classList.add('active');
  }
}

// Load products by category
function loadProducts(category) {
  // Remove active class from all subcategory items
  document.querySelectorAll('.subcategory li').forEach(li => {
    li.classList.remove('active');
  });
  
  // Add active class to clicked item
  event.target.classList.add('active');
  
  currentCategory = category;
  renderProducts();
}

// Main render function with enhanced search
function renderProducts() {
  const query = document.getElementById("globalSearch").value.trim().toLowerCase();
  const productList = document.getElementById("productList");
  const resultsInfo = document.getElementById("resultsInfo");
  
  // Show loading
  productList.innerHTML = '<div class="loading">🔄 Loading products...</div>';
  
  const toShow = [];
  let totalProducts = 0;

  // Enhanced search through all products
  Object.keys(productData).forEach(cat => {
    totalProducts += productData[cat].length;
    
    productData[cat].forEach(prod => {
      // Category filter
      if (currentCategory && cat !== currentCategory) {
        return;
      }
      
      // Enhanced search - check multiple fields
      if (query) {
        const searchFields = [
          prod.brand.toLowerCase(),
          prod.name.toLowerCase(),
          cat.toLowerCase(),
          prod.specs.toLowerCase(),
          prod.features ? prod.features.join(' ').toLowerCase() : '',
          prod.price ? prod.price.toLowerCase() : ''
        ].join(' ');
        
        if (!searchFields.includes(query)) {
          return;
        }
      }
      
      toShow.push({ ...prod, category: cat });
    });
  });

  // Update results info
  if (query) {
    resultsInfo.textContent = `Found ${toShow.length} products matching "${query}"`;
  } else if (currentCategory) {
    resultsInfo.textContent = `Showing ${toShow.length} products in ${currentCategory}`;
  } else {
    resultsInfo.textContent = `Showing all ${toShow.length} products from ${Object.keys(productData).length} categories`;
  }

  // Render products
  setTimeout(() => {
    if (toShow.length === 0) {
      productList.innerHTML = `
        <div class="no-results">
          <h3>🔍 No products found</h3>
          <p>Try adjusting your search terms or browse our categories.</p>
        </div>
      `;
      return;
    }

    productList.innerHTML = toShow.map(prod => `
      <div class="product-card" onclick="showProductDetails('${encodeURIComponent(prod.name)}', '${encodeURIComponent(prod.category)}')">
        <img src="${prod.img}" alt="${prod.name}" onerror="this.onerror=null; this.src='data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="140" viewBox="0 0 200 140"><rect width="200" height="140" fill="#f8f9fa" stroke="#dee2e6" stroke-width="2"/><circle cx="100" cy="50" r="15" fill="#dee2e6"/><text x="100" y="85" font-family="Arial, sans-serif" font-size="12" fill="#666" text-anchor="middle">No Image</text><text x="100" y="100" font-family="Arial, sans-serif" font-size="12" fill="#666" text-anchor="middle">Available</text></svg>`)}';">
        <div class="product-name">${prod.name}</div>
        <div class="brand">${prod.brand}</div>
        <div class="specs">${prod.specs}</div>
        ${prod.features ? `<div class="features">
          ${prod.features.slice(0, 3).map(feature => `<span>${feature}</span>`).join('')}
        </div>` : ''}
        <div class="rating">${prod.rating}</div>
        <div class="category-tag">${prod.category}</div>
      </div>
    `).join('');
  }, 100);
}

// Show product details in-page
function showProductDetails(encodedProductName, encodedCategory) {
  const productName = decodeURIComponent(encodedProductName);
  const category = decodeURIComponent(encodedCategory);
  
  // Find the product
  let foundProduct = null;
  Object.keys(productData).forEach(cat => {
    const product = productData[cat].find(p => p.name === productName);
    if (product) {
      foundProduct = { ...product, category: cat };
    }
  });
  
  if (foundProduct) {
    // Update the details section
    document.getElementById('detailsTitle').textContent = foundProduct.name;
    const detailsImage = document.getElementById('detailsImage');
    detailsImage.src = foundProduct.img;
    detailsImage.alt = foundProduct.name;
    
    // Make image clickable to show contact popup
    detailsImage.style.cursor = 'pointer';
    detailsImage.onclick = function() {
      showContactPopup(foundProduct);
    };
    
    // Add hover effect and tooltip
    detailsImage.title = foundProduct.website ? `Click to visit ${foundProduct.brand} official website` : `${foundProduct.brand} product image`;
    
    document.getElementById('detailsBrand').textContent = foundProduct.brand;
    document.getElementById('detailsSpecs').textContent = foundProduct.specs;
    
    // Update features
    const featuresContainer = document.getElementById('detailsFeatures');
    featuresContainer.innerHTML = '';
    if (foundProduct.features) {
      foundProduct.features.forEach(feature => {
        const featureDiv = document.createElement('div');
        featureDiv.className = 'feature-item';
        featureDiv.textContent = feature;
        featuresContainer.appendChild(featureDiv);
      });
    }
    
    // Show the details section
    const detailsSection = document.getElementById('productDetails');
    detailsSection.classList.add('show');
    
    // Scroll to details section
    detailsSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Close product details
function closeProductDetails() {
  const detailsSection = document.getElementById('productDetails');
  detailsSection.classList.remove('show');
}

// Initialize with all products
loadProducts(null);

// Mobile sidebar toggle function
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('show');
}

// Show contact popup
function showContactPopup(product) {
  console.log('showContactPopup called with product:', product);
  
  const modal = document.getElementById('contact-popup-modal');
  const productInfoField = document.getElementById('popup-product-info');
  const messageField = document.getElementById('popup-message');
  
  if (!modal) {
    console.error('Modal not found!');
    return;
  }
  
  // Set product info
  if (productInfoField) {
    productInfoField.value = `Product: ${product.name} | Brand: ${product.brand}`;
  }
  
  if (messageField) {
    messageField.placeholder = `I'm interested in ${product.name} from ${product.brand}...`;
  }
  
  // Store product info for later use
  modal.setAttribute('data-product-name', product.name);
  modal.setAttribute('data-product-brand', product.brand);
  modal.setAttribute('data-website', product.website || '');
  
  // Show modal
  modal.style.display = 'flex';
  console.log('Modal displayed');
  
  // Focus on first input
  setTimeout(() => {
    const nameField = document.getElementById('popup-name');
    if (nameField) {
      nameField.focus();
    }
  }, 300);
}

// Close contact popup
function closeContactPopup() {
  console.log('closeContactPopup called');
  const modal = document.getElementById('contact-popup-modal');
  if (modal) {
    modal.style.display = 'none';
    
    // Clear form
    const form = document.getElementById('contact-popup-form');
    if (form) {
      form.reset();
    }
    console.log('Popup closed successfully');
  }
}

// Handle form submission
function handleContactFormSubmit(event) {
  event.preventDefault();
  console.log('Form submitted');
  
  const modal = document.getElementById('contact-popup-modal');
  const form = document.getElementById('contact-popup-form');
  const submitBtn = form.querySelector('button[type="submit"]');
  
  // Get form data
  const formData = new FormData(form);
  const name = formData.get('name');
  const mobile = formData.get('mobile');
  const email = formData.get('email');
  const message = formData.get('message');
  const productInfo = formData.get('product_info');
  
  // Validate required fields
  if (!name || !mobile || !email) {
    alert('Please fill in all required fields (Name, Mobile, Email).');
    return;
  }
  
  // Disable submit button to prevent double submission
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Submitting...';
  submitBtn.disabled = true;
  
  // Get product info from modal attributes
  const productName = modal.getAttribute('data-product-name');
  const productBrand = modal.getAttribute('data-product-brand');
  const website = modal.getAttribute('data-website');
  
  console.log('Submitting form data:', {
    name, mobile, email, message, productInfo
  });
  
  // Submit form data to PHP via AJAX
  fetch('submit_contact.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log('Server response:', data);
    
    if (data.success) {
      // Re-enable submit button first
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      
      // Show success message
      alert(`Thank you ${name}! Your inquiry has been submitted successfully. We will contact you soon.`);
      
      // Close popup
      closeContactPopup();
      
      // Automatically redirect to official website after form submission
      if (website) {
        window.open(website, '_blank');
      }
    } else {
      // Show error message
      alert('Error: ' + data.message);
      
      // Re-enable submit button
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  })
  .catch(error => {
    console.error('Error submitting form:', error);
    alert('There was an error submitting your inquiry. Please try again.');
    
    // Re-enable submit button
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  });
}

// Setup popup event listeners
function setupPopupEventListeners() {
  console.log('Setting up popup event listeners...');
  
  // Close button
  const closeBtn = document.querySelector('.popup-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      console.log('Close button clicked');
      closeContactPopup();
    });
    console.log('Close button listener added');
  }
  
  // Close on overlay click
  const modal = document.getElementById('contact-popup-modal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeContactPopup();
      }
    });
    console.log('Modal overlay listener added');
  }
  
  // Form submission
  const form = document.getElementById('contact-popup-form');
  if (form) {
    form.addEventListener('submit', handleContactFormSubmit);
    console.log('Form submission listener added');
  }
  
  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const modal = document.getElementById('contact-popup-modal');
      if (modal && modal.style.display === 'flex') {
        closeContactPopup();
      }
    }
  });
  console.log('Escape key listener added');
}



// Handle broken images globally
function handleBrokenImages() {
  // Add error handlers to all product images
  document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
      // Replace broken image with placeholder
      e.target.src = 'data:image/svg+xml;base64,' + btoa(`
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="140" viewBox="0 0 200 140">
          <rect width="200" height="140" fill="#f8f9fa" stroke="#dee2e6" stroke-width="2"/>
          <circle cx="100" cy="70" r="20" fill="#dee2e6"/>
          <text x="100" y="100" font-family="Arial" font-size="14" fill="#666" text-anchor="middle">No Image Available</text>
        </svg>
      `);
      e.target.onerror = null; // Prevent infinite loop
      console.log('Replaced broken image:', e.target.alt);
    }
  }, true);
}

// Initialize broken image handler when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  handleBrokenImages();
});

// Show official website popup
