<?php
session_start();
require_once '../backend/config.php';

// Check if user is already logged in, redirect to dashboard
if (isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true) {
    header('Location: dashboard.php');
    exit();
}

$error_message = '';

if ($_POST) {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);
    
    if (!empty($username) && !empty($password)) {
        try {
            $stmt = $pdo->prepare("SELECT * FROM admin WHERE username = ?");
            $stmt->execute([$username]);
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if ($user && $password === $user['password']) {
                $_SESSION['admin_logged_in'] = true;
                $_SESSION['username'] = $user['username'];
                $_SESSION['user_id'] = $user['id'];
                header('Location: dashboard.php');
                exit();
            } else {
                $error_message = 'Invalid username or password!';
            }
        } catch (PDOException $e) {
            $error_message = 'Database error. Please try again.';
        }
    } else {
        $error_message = 'Please fill in all fields!';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - WebSankalp Technologies</title>
    <meta name="description" content="Login to WebSankalp Technologies Admin Panel">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        /* Login Page Specific Styles */
        .login-main {
            min-height: calc(100vh - 200px);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 50px 0;
            background: #e9f0f4;
        }

        .login-container {
            display: flex;
            width: 650px;
            max-width: 95%;
            background: #fff;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            border-radius: 5px;
            overflow: hidden;
        }

    /* Left Green Section */
    .left {
      flex: 1;
      background: #5883d9ff;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 40px;
      clip-path: polygon(0 0, 100% 0, 70% 100%, 0 100%);
    }

    .left h2 {
      margin: 0 0 10px;
      font-size: 28px;
    }

    .left p {
      margin: 0;
      font-size: 16px;
    }

    .logo {
      width: 150px;
      height: 80px;
      margin-bottom: 20px;
      object-fit: contain;
    }

    /* Right White Section */
    .right {
      flex: 1;
      padding: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .right h3 {
      margin-bottom: 20px;
      font-size: 22px;
      color: #00994d;
    }

    label {
      display: block;
      margin: 10px 0 5px;
      font-size: 14px;
      color: #555;
    }

    input {
      width: 100%;
      padding: 10px;
      border-radius: 20px;
      border: 1px solid #ccc;
      margin-bottom: 15px;
      outline: none;
      font-size: 14px;
    }

    input:focus {
      border-color: #00994d;
    }

    .signin-btn {
      width: 100%;
      padding: 10px;
      background: transparent;
      border: 2px solid #762236bb;
      border-radius: 20px;
      color: #4b3847ff;
      font-size: 16px;
      cursor: pointer;
      transition: 0.3s;
    }

    .signin-btn:hover {
      background: #00994d;
      color: white;
    }

    .forgot {
      text-align: center;
      margin-top: 10px;
    }

    .forgot a {
      color: #00994d;
      text-decoration: none;
      font-size: 14px;
    }

    .forgot a:hover {
      text-decoration: underline;
    }

        /* Responsive Design */
        @media (max-width: 768px) {
            .login-container {
                flex-direction: column;
                text-align: center;
            }
            .left {
                clip-path: none;
                padding: 20px;
            }
            .right {
                padding: 20px;
            }
        }

        .error-message {
            background: #ff4757;
            color: white;
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 15px;
            text-align: center;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="main-header">
        <div class="container">
            <a href="../index.html" class="logo">
                <img src="../assets/images/websankapl_logo.png" alt="WebSankalp Technologies" class="logo-img">
            </a>
            <nav class="main-nav">
                <ul>
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="../pages/about.html">About Us</a></li>
                    <li><a href="../pages/contact.html">Products</a></li>
                    <li><a href="../pages/contact.html">Contact</a></li>
                </ul>
            </nav>
            <div class="header-contact">
                <div class="contact-item">
                    <span class="contact-icon">📞</span>
                    <a href="tel:+919326825895">+91 9326825895</a>
                    <small>Get in touch with us</small>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">✉️</span>
                    <a href="mailto:info@websankalp.com?subject=Inquiry from WebSankalp Website" target="_self">info@websankalp.com</a>
                    <small>Send us an e-mail</small>
                </div>
            </div>
            <button class="menu-toggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>

    <!-- Login Main Content -->
    <main class="login-main">
        <div class="login-container">
            <div class="left">
                <img src="../assets/images/websankapl_logo.png" alt="WebSankalp Logo" class="logo">
                <h2>Welcome!</h2>
                <p>Login to continue.</p>
            </div>
            <div class="right">
                <h3>Login</h3>
                <?php if (!empty($error_message)): ?>
                    <div class="error-message"><?php echo htmlspecialchars($error_message); ?></div>
                <?php endif; ?>
                <form method="POST" action="">
                    <label for="username">Username/Email address *</label>
                    <input type="text" id="username" name="username" placeholder="Username or Email" required value="<?php echo isset($_POST['username']) ? htmlspecialchars($_POST['username']) : ''; ?>">
                    
                    <label for="password">Password *</label>
                    <input type="password" id="password" name="password" placeholder="Password" required>
                    
                    <button type="submit" class="signin-btn">Sign In</button>
                    <div class="forgot">
                        <a href="#">Forgot password?</a>
                    </div>
                </form>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="main-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-about">
                    <strong><h4><span class="red-letter">W</span>ebSankalp <span class="red-letter">T</span>echnologies</h4></strong>
                    
                      <div class="profile-section">
                       
                        <div class="profile-info" style="text-align: center; display: flex; flex-direction: column; align-items: center;">
                         <a href="login.php">   <img src="../assets/satish sir image/satish_sir.jpg" alt="CEO Profile" class="profile-img" style="margin: 0 auto 10px auto;"></a> 
                            <h5 style="margin: 5px 0; text-align: center;">Satish Sutar </h5>
                            <span style="text-align: center;">CEO & Founder - WST</span>
                        </div>
                    </div>
                </div>
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="../index.html">Home</a></li>
                        <li><a href="../pages/about.html">About Us</a></li>
                        <li><a href="../pages/contact.html">Products</a></li>
                        <li><a href="../pages/contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h4>Contact Us</h4>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
                        09326825895 / 08007226877
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/></svg>
                        <a href="mailto:info@websankalp.com?subject=Inquiry from WebSankalp Website" target="_self">info@websankalp.com</a>
                    </p>
                    
                    <div class="qr-code-section" style="margin-top: 20px; text-align: center;">
                        <img src="../assets/satish sir image/scanner.png" alt="WebSankalp QR Code" style="width: 120px; height: 120px; border: 2px solid #ddd; border-radius: 8px; background: white; padding: 8px;">
                        <p style="font-size: 0.85rem; margin-top: 8px; color: #666;">Scan QR Code </p>
                    </div>
                </div>
              
            </div>
            <div class="footer-bottom">
                <p>© 2025 WebSankalp Technologies. All Rights Reserved.</p>
                 </div>
        </div>
    </footer>

    <button id="scrollToTopBtn" title="Go to top">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/><path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/></svg>
    </button>

    <script src="../js/script.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js" integrity="sha384-G/EV+4j2dNv+tEPo3++6LCgdCROaejBqfUeNjuKAiuXbjrxilcCdDz6ZAVfHWe1Y" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
</body>
</html>
