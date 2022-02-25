<?php
/**
 * Plugin Name:       Loan Calculators
 * Description:       Easily incorporate loan calculators inside Wordpress pages and posts.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Casey Smith
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       loan-calculator
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function create_block_loan_calculator_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'create_block_loan_calculator_block_init' );


/**
 * Enqueue frontend and editor JavaScript and CSS
 */
function loanCalc_block_plugin_scripts() {

    $editorStylePath = '/src/editor.scss';
    $blockPath = '/src/style.scss';

    // Enqueue block frontend scripts
    wp_enqueue_script(
        'frontend',
        plugins_url( '/src/frontend.js', __FILE__ ),
        ['wp-blocks', 'wp-i18n', 'wp-element', 'wp-components', 'wp-editor'],
        filemtime( plugin_dir_path( __FILE__ ) . 'src/frontend.js' )
    );

      // Enqueue optional editor only styles
    wp_enqueue_style(
        'loancalc-block-css',
        plugins_url( $blockPath, __FILE__),
        [ ],
        filemtime( plugin_dir_path( __FILE__ ) . $blockPath )
    );

}

function loanCalc_block_plugin_editor_scripts() {

    $editorStylePath = '/src/editor.scss';
    $blockPath = '/src/style.scss';

      // Enqueue optional editor only styles
    wp_enqueue_style(
        'loancalc-block-editor-css',
        plugins_url( $editorStylePath, __FILE__),
        [  ],
        filemtime( plugin_dir_path( __FILE__ ) . $editorStylePath )
    );

}

add_action( 'enqueue_block_editor_assets', 'loanCalc_block_plugin_editor_scripts' );

// Hook the enqueue functions into the frontend and editor
add_action( 'enqueue_block_assets', 'loanCalc_block_plugin_scripts' );