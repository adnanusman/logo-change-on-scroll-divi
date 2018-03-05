<?php
/*
Plugin Name: Logo Change on Scroll
Author: Adnan Usman
Description: Changes logo image src on scroll
Plugin URI: https://github.com/adnanusman
*/

function lcos_enqueue_scripts() {

	if(is_front_page()) {
	wp_enqueue_script('lcosjs', plugin_dir_url( __FILE__ ) . 'js/custom.js', array(), '1.0', true);
	}
}

add_action('wp_enqueue_scripts', 'lcos_enqueue_scripts');

?>
