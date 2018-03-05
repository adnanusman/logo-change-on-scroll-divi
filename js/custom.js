window.onscroll = function() {
	var logo = document.getElementById('logo');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	// Change the URL to the logo you want displayed on scroll
        logo.setAttribute('src', 'http://www.example.com/wp-content/uploads/logo.png');
    } else {
	// Change the URL to the logo that is displayed on page load
        logo.setAttribute('src', 'http://www.example.com/wp-content/uploads/logo_slanted.png');
    }
}
