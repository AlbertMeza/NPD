const db = require('../dbConfig');

/**
 * Enhanced HTML template with modern glassmorphism styling
 */
const getEnhancedHTMLTemplate = (title, content) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title} - No Pore Decisions</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <style>
            :root {
                --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                --success-gradient: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
                --info-gradient: linear-gradient(135deg, #2196F3 0%, #21CBF3 100%);
                --warning-gradient: linear-gradient(135deg, #FF9800 0%, #FFC107 100%);
                --secondary-gradient: linear-gradient(135deg, #6c757d 0%, #495057 100%);
                --card-gradient: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%);
                --glass-bg: rgba(255, 255, 255, 0.25);
                --glass-border: rgba(255, 255, 255, 0.18);
            }

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: 'Inter', sans-serif;
                background: var(--primary-gradient);
                min-height: 100vh;
                position: relative;
                overflow-x: hidden;
            }

            body::before {
                content: '';
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: 
                    radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 40% 80%, rgba(120, 219, 226, 0.3) 0%, transparent 50%);
                z-index: -1;
            }

            .navbar {
                background: var(--glass-bg) !important;
                backdrop-filter: blur(20px);
                border-bottom: 1px solid var(--glass-border);
                padding: 1rem 0;
                margin-bottom: 2rem;
            }

            .navbar-brand {
                font-weight: 700;
                font-size: 1.3rem;
                color: white !important;
                text-shadow: 0 2px 4px rgba(0,0,0,0.3);
            }

            .navbar-nav .nav-link {
                color: rgba(255,255,255,0.9) !important;
                font-weight: 500;
                margin: 0 0.5rem;
                padding: 0.5rem 1rem !important;
                border-radius: 25px;
                transition: all 0.3s ease;
            }

            .navbar-nav .nav-link:hover {
                background: rgba(255,255,255,0.2);
                color: white !important;
                transform: translateY(-2px);
            }

            .container {
                background: var(--card-gradient);
                backdrop-filter: blur(20px);
                border: 1px solid var(--glass-border);
                border-radius: 20px;
                padding: 2.5rem;
                margin: 2rem auto;
                box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                max-width: 1200px;
                position: relative;
                z-index: 2;
            }

            h3 {
                font-size: 2.5rem;
                font-weight: 700;
                color: white;
                text-shadow: 0 4px 8px rgba(0,0,0,0.3);
                margin-bottom: 2rem;
                text-align: center;
                background: linear-gradient(45deg, #fff, #e0e0ff);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }

            h5 {
                color: white;
                font-weight: 600;
                margin-bottom: 1rem;
                text-shadow: 0 2px 4px rgba(0,0,0,0.3);
            }

            .alert {
                background: var(--glass-bg);
                backdrop-filter: blur(10px);
                border: 1px solid var(--glass-border);
                border-radius: 15px;
                color: black;
                padding: 1.5rem;
                margin-bottom: 1.5rem;
                font-weight: 500;
            }

            .alert-success {
                background: rgba(17, 153, 142, 0.2);
                border-color: rgba(17, 153, 142, 0.3);
            }

            .alert-warning {
                background: rgba(255, 152, 0, 0.2);
                border-color: rgba(255, 152, 0, 0.3);
            }

            .table-container {
                background: rgba(255,255,255,0.1);
                backdrop-filter: blur(10px);
                border: 1px solid var(--glass-border);
                border-radius: 15px;
                overflow: hidden;
                margin-bottom: 2rem;
            }

            .table {
                margin-bottom: 0;
                color: white;
            }

            .table-dark {
                background: rgba(0,0,0,0.3) !important;
                color: white !important;
            }

            .table thead th {
                background: rgba(255,255,255,0.2);
                border: none;
                color: white;
                font-weight: 600;
                padding: 1rem;
                text-transform: uppercase;
                font-size: 0.9rem;
                letter-spacing: 0.5px;
            }

            .table tbody tr {
                border-bottom: 1px solid rgba(255,255,255,0.1);
                transition: all 0.3s ease;
            }

            .table tbody tr:hover {
                background: rgba(255,255,255,0.1);
                transform: translateX(5px);
            }

            .table tbody td {
                padding: 1rem;
                border: none;
                vertical-align: middle;
            }

            .btn-modern {
                border: none;
                padding: 0.75rem 2rem;
                font-weight: 600;
                border-radius: 25px;
                color: white;
                transition: all 0.3s ease;
                box-shadow: 0 8px 25px rgba(0,0,0,0.2);
                position: relative;
                overflow: hidden;
                text-decoration: none;
                display: inline-block;
                margin: 0.25rem;
            }

            .btn-modern::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                transition: left 0.5s;
            }

            .btn-modern:hover {
                transform: translateY(-3px);
                box-shadow: 0 12px 35px rgba(0,0,0,0.3);
                color: white;
            }

            .btn-modern:hover::before {
                left: 100%;
            }

            .btn-success-modern {
                background: var(--success-gradient);
            }

            .btn-info-modern {
                background: var(--info-gradient);
                padding: 0.5rem 1.5rem;
                font-size: 0.9rem;
            }

            .btn-primary-modern {
                background: var(--primary-gradient);
            }

            .btn-secondary-modern {
                background: var(--secondary-gradient);
            }

            .badge {
                background: var(--info-gradient) !important;
                color: white;
                padding: 0.5rem 0.75rem;
                border-radius: 15px;
                font-weight: 500;
            }

            .no-results {
                text-align: center;
                padding: 3rem;
                color: rgba(255,255,255,0.8);
                font-size: 1.2rem;
            }

            .no-results i {
                font-size: 4rem;
                margin-bottom: 1rem;
                color: rgba(255,255,255,0.5);
            }

            .floating-shapes {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 1;
            }

            .shape {
                position: absolute;
                background: rgba(255,255,255,0.1);
                border-radius: 50%;
                animation: float-shapes 20s infinite linear;
            }

            .shape:nth-child(1) {
                width: 100px;
                height: 100px;
                top: 20%;
                left: 10%;
                animation-delay: 0s;
            }

            .shape:nth-child(2) {
                width: 60px;
                height: 60px;
                top: 60%;
                right: 10%;
                animation-delay: -5s;
            }

            .shape:nth-child(3) {
                width: 80px;
                height: 80px;
                bottom: 20%;
                left: 20%;
                animation-delay: -10s;
            }

            @keyframes float-shapes {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(180deg); }
            }

            @media (max-width: 768px) {
                .container {
                    padding: 1.5rem;
                    margin: 1rem;
                }
                
                h3 {
                    font-size: 2rem;
                }
                
                .btn-modern {
                    padding: 0.5rem 1.5rem;
                    font-size: 0.9rem;
                    margin: 0.25rem 0;
                    display: block;
                    text-align: center;
                }
            }
        </style>
    </head>
    <body>
        <div class="floating-shapes">
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
        </div>

        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid px-4">
                <a class="navbar-brand" href="index.html">
                    <i class="fas fa-database me-2"></i>TCSS 445 | Final Project
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="productLogs.html">
                                <i class="fas fa-box me-1"></i>Products
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="userSearch.html">
                                <i class="fas fa-users me-1"></i>Users
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        ${content}

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        <script>
            // Add loading animation
            window.addEventListener('load', function() {
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.5s ease-in-out';
                setTimeout(() => {
                    document.body.style.opacity = '1';
                }, 100);
            });
        </script>
    </body>
    </html>
    `;
};

/**
 * getProductDetails - Fetches product data based on product name/purpose
 */
const getProductDetails = (req, res) => {
    const productName = req.query.productName; // Expecting productName from query parameters

    if (!productName) {
        const errorContent = `
            <div class="container">
                <div class="no-results">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h3>Missing Information</h3>
                    <p>A product name or purpose is required for the search.</p>
                    <a href="/productLogs.html" class="btn-primary-modern btn-modern">
                        <i class="fas fa-arrow-left me-2"></i>Back to Product Search
                    </a>
                </div>
            </div>
        `;
        return res.status(400).send(getEnhancedHTMLTemplate('Error', errorContent));
    }

    const query = `
        SELECT
            ProductID, Purpose, ExpDate
        FROM Product_Logs
        WHERE Purpose LIKE ?
    `;

    db.query(query, [`%${productName}%`], (err, productResults) => {
        if (err) {
            console.error("Error fetching product data:", err);
            const errorContent = `
                <div class="container">
                    <div class="no-results">
                        <i class="fas fa-exclamation-triangle"></i>
                        <h3>Database Error</h3>
                        <p>Unable to search for products at this time.</p>
                        <a href="/productlogs.html" class="btn-primary-modern btn-modern">
                            <i class="fas fa-arrow-left me-2"></i>Back to Search
                        </a>
                    </div>
                </div>
            `;
            return res.status(500).send(getEnhancedHTMLTemplate('Error', errorContent));
        }

        let content = `
        <div class="container">
            <h3><i class="fas fa-search me-3"></i>Search Results for "${productName}"</h3>
        `;

        if (productResults.length === 0) {
            content += `
            <div class="alert alert-warning">
                <i class="fas fa-box-open me-2"></i>
                <strong>No products found</strong> matching the search term "${productName}".
            </div>
            `;
        } else {
            content += `
            <div class="alert alert-success">
                <i class="fas fa-check-circle me-2"></i>
                Found ${productResults.length} product(s) matching "${productName}":
            </div>
            <div class="table-container">
                <table class="table table-striped">
                    <thead class="table-dark">
                        <tr>
                            <th><i class="fas fa-id-badge me-2"></i>Product ID</th>
                            <th><i class="fas fa-box me-2"></i>Purpose</th>
                            <th><i class="fas fa-calendar-alt me-2"></i>Expiration Date</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            productResults.forEach(product => {
                content += `
                <tr>
                    <td><span class="badge">${product.ProductID}</span></td>
                    <td><strong>${product.Purpose}</strong></td>
                    <td>${product.ExpDate ? new Date(product.ExpDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }) : 'N/A'}</td>
                </tr>
                `;
            });

            content += `
                    </tbody>
                </table>
            </div>
            `;
        }

        content += `
            <div class="mt-4 text-center">
                <a href="/productLogs.html" class="btn-primary-modern btn-modern me-2">
                    <i class="fas fa-search me-2"></i>New Product Search
                </a>
                <a href="/allproducts" class="btn-secondary-modern btn-modern">
                    <i class="fas fa-boxes me-2"></i>View All Products
                </a>
            </div>
        </div>
        `;

        res.send(getEnhancedHTMLTemplate('Product Search Results', content));
    });
};

/**
 * getAllProductLogs - Fetches and displays all products with proper error handling
 */
const getAllProductLogs = (req, res) => {
    // Fixed SQL query - removed non-existent Join_Date column and fixed column name
    const query = 'SELECT ProductID, Purpose, ExpDate FROM Product_Logs ORDER BY ExpDate DESC';

    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching all products:", err);
            const errorContent = `
                <div class="container">
                    <div class="no-results">
                        <i class="fas fa-exclamation-triangle"></i>
                        <h3>Database Error</h3>
                        <p>Unable to retrieve products at this time.</p>
                        <a href="/productLogs.html" class="btn-primary-modern btn-modern">
                            <i class="fas fa-arrow-left me-2"></i>Back to Search
                        </a>
                    </div>
                </div>
            `;
            return res.status(500).send(getEnhancedHTMLTemplate('Error', errorContent));
        }

        // Generate enhanced HTML response
        let content = `
        <div class="container">
            <h3><i class="fas fa-box me-3"></i>All Product Logs</h3>
        `;

        if (results.length === 0) {
            content += `
                <div class="no-results">
                    <i class="fas fa-box-open"></i>
                    <h5>No Products Found</h5>
                    <p>There are currently no products in the database.</p>
                </div>
            `;
        } else {
            content += `
            <div class="alert alert-success">
                <i class="fas fa-info-circle me-2"></i>
                Displaying ${results.length} product${results.length !== 1 ? 's' : ''}
            </div>
            <div class="table-container">
                <table class="table table-striped">
                    <thead class="table-dark">
                        <tr>
                            <th><i class="fas fa-id-badge me-2"></i>Product ID</th>
                            <th><i class="fas fa-box me-2"></i>Purpose</th>
                            <th><i class="fas fa-calendar-alt me-2"></i>Expiration Date</th>
                            <th><i class="fas fa-cog me-2"></i>Action</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            results.forEach(product => {
                content += `
                <tr>
                    <td><span class="badge">${product.ProductID}</span></td>
                    <td><strong>${product.Purpose}</strong></td>
                    <td>${product.ExpDate ? new Date(product.ExpDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long', 
                        day: 'numeric'
                    }) : 'N/A'}</td>
                    <td>
                        <a href="/product?productName=${encodeURIComponent(product.Purpose)}" class="btn-info-modern btn-modern">
                            <i class="fas fa-eye me-1"></i>View Details
                        </a>
                    </td>
                </tr>
                `;
            });

            content += `
                    </tbody>
                </table>
            </div>
            `;
        }

        content += `
            <div class="text-center">
                <a href="/productLogs.html" class="btn-primary-modern btn-modern">
                    <i class="fas fa-arrow-left me-2"></i>Back to Search
                </a>
            </div>
        </div>
        `;

        res.send(getEnhancedHTMLTemplate('All Products', content));
    });
};

/**
 * Module exports the enhanced functions to be used in the routes
 */
module.exports = {
    getProductDetails,
    getAllProductLogs
};
