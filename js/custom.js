window.onscroll = function() {
	var logo = document.getElementById('logo');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	    logo.setAttribute('src', 'https://www.portofinos.com/wp-content/uploads/logo.png');
    } else {
        logo.setAttribute('src', 'https://www.portofinos.com/wp-content/uploads/portofinos_LOGO_slanted.png');
    }
}
