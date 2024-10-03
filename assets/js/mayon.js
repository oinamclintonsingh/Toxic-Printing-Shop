// =================================
// External Navbar

fetch('../includes/navbar.html')
    .then(response => response.text())
    .then(html => {
        // Insert the fetched HTML content into the div
        document.getElementById('external-navbar').innerHTML = html;
    })
    .catch(error => {
        // Handle any errors
        console.error('Error fetching external page:', error);
    });


// ========================================
// External Footer
fetch('../includes/footer.html')
    .then(response => response.text())
    .then(html => {
        // Insert the fetched HTML content into the div
        document.getElementById('external-footer').innerHTML = html;
    })
    .catch(error => {
        // Handle any errors
        console.error('Error fetching external page:', error);
    });