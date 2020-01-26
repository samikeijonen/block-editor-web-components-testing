<?php
/**
 * Plugin Name: Fox Blocks Web Components
 * Plugin URI: https://github.com/samikeijonen/fox-blocks-web-components/
 * Description: Fox Blocks Web Components demo, how do they work with block editor.
 * Version: 1.0.0
 * Author: Sami Keijonen
 * License: MIT
 * Text Domain: fox-blocks-web-components
 * Domain Path: /languages
 *
 * @package FoxBlocksWebcomponents
 */

namespace FoxBlocks\Webcomponents;

/**
 * Singleton class that sets up and initializes the plugin.
 *
 * @since  1.0.0
 * @access public
 * @return void
 */
final class Plugin {
	/**
	 * Plugin directory path.
	 *
	 * @since  1.0.0
	 * @access public
	 * @var    string
	 */
	public $dir = '';

	/**
	 * Plugin directory URI.
	 *
	 * @since  1.0.0
	 * @access public
	 * @var    string
	 */
	public $uri = '';

	/**
	 * Returns the instance.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return object
	 */
	public static function get_instance() {
		static $instance = null;

		if ( is_null( $instance ) ) {
			$instance = new self();
			$instance->setup();
			$instance->includes();
			$instance->setup_actions();
		}

		return $instance;
	}

	/**
	 * Constructor method.
	 *
	 * @since  1.0.0
	 * @access private
	 * @return void
	 */
	private function __construct() {}

	/**
	 * Magic method to output a string if trying to use the object as a string.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return string
	 */
	public function __toString() {
		return 'fox-blocks-web-components';
	}

	/**
	 * Sets up globals.
	 *
	 * @since  1.0.0
	 * @access private
	 * @return void
	 */
	private function setup() {
		// Main plugin directory path and URI.
		$this->dir = trailingslashit( plugin_dir_path( __FILE__ ) );
		$this->uri = trailingslashit( plugin_dir_url( __FILE__ ) );
	}

	/**
	 * Loads files needed by the plugin.
	 *
	 * @since  1.0.0
	 * @access private
	 * @return void
	 */
	private function includes() {
		// Include block PHP files.
		// require_once $this->dir . 'src/blocks/remote-posts/index.php';
	}

	/**
	 * Sets up main plugin actions and filters.
	 *
	 * @since  1.0.0
	 * @access private
	 * @return void
	 */
	private function setup_actions() {
		// Blocks assets.
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );

		// FE and block assets.
		add_action( 'enqueue_block_assets', array( $this, 'enqueue_assets' ) );

		// Internationalize the text strings used.
		add_action( 'plugins_loaded', array( $this, 'i18n' ), 2 );
	}

	/**
	 * Blocks assets.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return void
	 */
	public function editor_assets() {
		wp_enqueue_script(
			'fox-blocks-web-components',
			$this->uri . 'build/index.js',
			[
				'wp-blocks',
				'wp-i18n',
				'wp-editor',
				'wp-element',
				'wp-components',
			],
			'1.0.0',
			true
		);
	}

	/**
	 * Frontend assets.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return void
	 */
	public function enqueue_assets() {
		wp_enqueue_script(
			'fox-blocks-web-components-assets',
			$this->uri . 'build/scripts.js',
			[],
			'1.0.0',
			true
		);
	}

	/**
	 * Loads the translation files.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return void
	 */
	public function i18n() {
		load_plugin_textdomain( 'fox-blocks-web-components', false, trailingslashit( dirname( plugin_basename( __FILE__ ) ) ) . 'languages' );
	}
}

/**
 * Gets the instance of the `Plugin` class.  This function is useful for quickly grabbing data
 * used throughout the plugin.
 *
 * @since  1.0.0
 * @access public
 * @return object
 */
function plugin() {
	return Plugin::get_instance();
}

// Let's get the plugin up and rolling.
plugin();
