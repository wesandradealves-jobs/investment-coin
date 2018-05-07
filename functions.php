<?php

@ini_set( 'upload_max_size' , '64M' );
@ini_set( 'post_max_size', '64M');
@ini_set( 'max_execution_time', '300' );

global $post;

function remove_menus(){
    global $post;
    remove_menu_page( 'index.php' );                  //Dashboard
    remove_menu_page( 'jetpack' );                    //Jetpack*
    remove_menu_page( 'edit.php' );                   //Posts
    // remove_menu_page( 'upload.php' );                 //Media
    //   remove_menu_page( 'edit.php?post_type=page' );    //Pages
    remove_menu_page( 'edit-comments.php' );          //Comments
    // remove_menu_page( 'themes.php' );                 //Appearance
    // remove_menu_page( 'plugins.php' );                //Plugins
    //   remove_menu_page( 'users.php' );                  //Users
    //   remove_menu_page( 'tools.php' );                  //Tools
    // remove_menu_page( 'options-general.php' );        //Settings
}
////////////////////////////////////////////////////
function attach_template_to_page( $page_name, $template_file_name ) {

    // Look for the page by the specified title. Set the ID to -1 if it doesn't exist.
    // Otherwise, set it to the page's ID.
    $page = get_page_by_title( $page_name, OBJECT, 'page' );
    $page_id = null == $page ? -1 : $page->ID;

    // Only attach the template if the page exists
    if( -1 != $page_id ) {
        update_post_meta( $page_id, '_wp_page_template', $template_file_name );
    } // end if

    return $page_id;

} // end attach_template_to_page
////////////////////////////////////////////////////
function query_post_type($query) {
    if(is_category() || is_tag()) {
    $post_type = get_query_var('post_type');
    if($post_type)
    $post_type = $post_type;
    else
    $post_type = array('nav_menu_item','post','articles');
    $query->set('post_type',$post_type);
    return $query;
    }
    }
////////////////////////////////////////////////////    
function customizer( $wp_customize ) {
    $wp_customize->add_panel( 'customization', array(
        'priority'       => 2,
        'title'          => __('Customização')
    ));    
        // Footer
        $wp_customize->add_section( 'footer' , array(
            'title'       => __( 'Footer' ),
            'panel' => 'customization',
            'priority'    => 3
            ));       
        $wp_customize->add_setting( 'logo-footer' );
        $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'logo-footer', array(
        'label'    => __( 'Footer Logo' ),
        'section'  => 'footer',
        'settings' => 'logo-footer'
        )));                       
        // Header
        $wp_customize->add_section( 'header' , array(
        'title'       => __( 'Header' ),
        'panel' => 'customization',
        'priority'    => 1
        ));           
        $wp_customize->add_setting( 'logo' );
        $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'logo', array(
        'label'    => __( 'Logo' ),
        'section'  => 'header',
        'settings' => 'logo'
        )));        
        // Social Networks
        $wp_customize->add_section( 'social_networks' , array(
        'title'       => __( 'Social Networks' ),
        'panel' => 'customization',
        'priority'    => 0
        ));    
        $wp_customize->add_setting( 'show_social_network', array(
        'capability' => 'edit_theme_options',
        'default' => 'no',
        'sanitize_callback' => 'sanitize',
        ));
        $wp_customize->add_setting( 'facebook' );
        $wp_customize->add_control('facebook',  array(
            'label' => 'Facebook',
            'section' => 'social_networks',
            'type' => 'url',
            'settings' => 'facebook'
        ));   
        $wp_customize->add_setting( 'twitter' );
        $wp_customize->add_control('twitter',  array(
            'label' => 'Twitter',
            'section' => 'social_networks',
            'type' => 'url',
            'settings' => 'twitter'
        ));    
        $wp_customize->add_setting( 'youtube' );
        $wp_customize->add_control('youtube',  array(
            'label' => 'Youtube',
            'section' => 'social_networks',
            'type' => 'url',
            'settings' => 'youtube'
        ));  
        $wp_customize->add_setting( 'git' );
        $wp_customize->add_control('git',  array(
            'label' => 'GIT',
            'section' => 'social_networks',
            'type' => 'url',
            'settings' => 'git'
        ));   
        $wp_customize->add_setting( 'linkedin' );
        $wp_customize->add_control('linkedin',  array(
            'label' => 'Linkedin',
            'section' => 'social_networks',
            'type' => 'url',
            'settings' => 'linkedin'
        ));             
        $wp_customize->add_setting( 'telegram' );
        $wp_customize->add_control('telegram',  array(
            'label' => 'Telegram',
            'section' => 'social_networks',
            'type' => 'url',
            'settings' => 'telegram'
        ));                 
        $wp_customize->add_setting( 'googleplus' );
        $wp_customize->add_control('googleplus',  array(
            'label' => 'Google Plus',
            'section' => 'social_networks',
            'type' => 'url',
            'settings' => 'googleplus'
        ));               
        $wp_customize->add_setting( 'instagram' );
        $wp_customize->add_control('instagram',  array(
            'label' => 'Instagram',
            'section' => 'social_networks',
            'type' => 'url',
            'settings' => 'instagram'
        ));     
        $wp_customize->add_setting( 'pinterest' );
        $wp_customize->add_control('pinterest',  array(
            'label' => 'Pinterest',
            'section' => 'social_networks',
            'type' => 'url',
            'settings' => 'pinterest'
        ));     
        $wp_customize->add_setting( 'rss' );
        $wp_customize->add_control('rss',  array(
            'label' => 'RSS',
            'section' => 'social_networks',
            'type' => 'url',
            'settings' => 'rss'
        ));  
}
////////////////////////////////////////////////////
function remove_customizer_settings( $wp_customize ){
    $wp_customize->remove_section('static_front_page');
}
////////////////////////////////////////////////////
function get_custom_field_data($key, $echo = false) {
$value = get_post_meta($post->ID, $key, true);
if($echo == false) {
return $value;
} else {
echo $value;
}
}
////////////////////////////////////////////////////
function hide_admin_bar() {
wp_add_inline_style('admin-bar', '<style> html { margin-top: 0 !important; } </style>');
return false;
}
////////////////////////////////////////////////////
function menu() {
    register_nav_menus(
    array(
    // 'default' => __( 'Default' ),
    // 'copyright' => __( 'Copyright' )
    )
    );
    }
////////////////////////////////////////////////////
set_post_thumbnail_size( 600, 600 );
////////////////////////////////////////////////////
function regScripts() {
    wp_deregister_script('jquery');
    wp_enqueue_script('vendors', get_template_directory_uri()."/assets/js/vendors.js");
    wp_enqueue_script('commons', get_template_directory_uri()."/assets/js/commons.js");
    wp_enqueue_style('style', get_stylesheet_directory_uri().'/style.css');
}
////////////////////////////////////////////////////
function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
////////////////////////////////////////////////////
function df_terms_clauses($clauses, $taxonomy, $args) {
    if (!empty($args['post_type'])) {
    global $wpdb;
    $post_types = array();
    foreach($args['post_type'] as $cpt) {
    $post_types[] = "'".$cpt."'";
    }
    if(!empty($post_types)) {
    $clauses['fields'] = 'DISTINCT '.str_replace('tt.*', 'tt.term_taxonomy_id, tt.term_id, tt.taxonomy, tt.description, tt.parent', $clauses['fields']).', COUNT(t.term_id) AS count';
    $clauses['join'] .= ' INNER JOIN '.$wpdb->term_relationships.' AS r ON r.term_taxonomy_id = tt.term_taxonomy_id INNER JOIN '.$wpdb->posts.' AS p ON p.ID = r.object_id';
    $clauses['where'] .= ' AND p.post_type IN ('.implode(',', $post_types).')';
    $clauses['orderby'] = 'GROUP BY t.term_id '.$clauses['orderby'];
    }
    }
    return $clauses;
    }
////////////////////////////////////////////////////
function hide_editor() {
    $post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
    if( !isset( $post_id ) ) return;
    $template_file = get_post_meta($post_id, '_wp_page_template', true);
    if($template_file == 'page-templates/contact.php' || $template_file == 'page-templates/whitepaper.php' || $template_file == 'page-templates/home.php'){ 
        remove_post_type_support('page', 'editor');
    }    
    // remove_post_type_support('page', 'thumbnail');
}
////////////////////////////////////////////////////
function called( $file_name, $files = array(), $dir = '' ) {

    if( empty( $files ) ) {
        $files = debug_backtrace();
    }

    if( ! $dir ) {
        $dir = get_stylesheet_directory() . '/';
    }

    $dir = str_replace( "/", "\\", $dir );
    $caller_theme_file = array();

    foreach( $files as $file ) {
        if( false !== mb_strpos($file['file'], $dir) ) {
            $caller_theme_file[] = $file['file'];
        }
    }

    if( $file_name ) {
        return in_array( $dir . $file_name, $caller_theme_file );
    }

    return;

}
////////////////////////////////////////////////////
function sanitize( $input, $setting ) {
    global $wp_customize;
 
    $control = $wp_customize->get_control( $setting->id );
 
    if ( array_key_exists( $input, $control->choices ) ) {
        return $input;
    } else {
        return $setting->default;
    }
}
////////////////////////////////////////////////////
function pagination(){
    echo '
    <ul class="post-pagination '.(is_single() ? '-single' : '').'">';
        if(is_single()) :
            if(get_previous_post()->ID) :
                echo '
                <li class="-actions -prev">
                    <a class="prev" href="'.esc_url( get_permalink( get_previous_post()->ID ) ).'" title="Post Anterior"><i class="fa fa-chevron-left"></i> Post Anterior</a>
                </li>';
            endif; 
            if(get_next_post()->ID) :
                echo '
                <li class="-actions -next">
                    <a class="next" href="'.esc_url( get_permalink( get_next_post()->ID ) ).'" title="Próximo Post">Próximo Post <i class="fa fa-chevron-right"></i></a>
                </li>';
            endif; 
        else : 
            if(get_previous_posts_link()) :
                echo '
                <li class="-actions -prev">
                    <a class="prev" href="'.get_previous_posts_page_link().'" title="Posts Anteriores"><i class="fa fa-chevron-left"></i> Post Anteriores</a>
                </li>';
            endif; 
            if(get_next_posts_link()) :
                echo '
                <li class="-actions -next">
                    <a class="next" href="'.get_next_posts_page_link().'" title="Próximos Posts">Próximos Posts <i class="fa fa-chevron-right"></i></a>
                </li>';
            endif; 
        endif;
    echo '</ul>';
}
////////////////////////////////////////////////////
function the_slug_exists($post_name) {
	global $wpdb;
	if($wpdb->get_row("SELECT post_name FROM wp_posts WHERE post_name = '" . $post_name . "'", 'ARRAY_A')) {
		return true;
	} else {
		return false;
	}
}
if (isset($_GET['activated']) && is_admin()){
    $home_page_title = 'Home';
    $home_page_content = '';
    $home_page_check = get_page_by_title($home_page_title);
    $home_page = array(
	    'post_type' => 'page',
	    'post_title' => $home_page_title,
	    'post_content' => $home_page_content,
	    'post_status' => 'publish',
	    'post_author' => 1,
	    'ID' => 2,
	    'post_slug' => 'home'
    );
    if(!isset($home_page_check->ID) && !the_slug_exists('home')){
        $home_page_id = wp_insert_post($home_page);
    }
}
if (isset($_GET['activated']) && is_admin()){
	$front_page = 2; // this is the default page created by WordPress
	update_option( 'page_on_front', $front_page );
	update_option( 'show_on_front', 'page' );
}
////////////////////////////////////////////////////
// $menuname = 'Menu';
// $bpmenulocation = 'lblgbpmenu';
// Does the menu exist already?
$menu_exists = wp_get_nav_menu_object( $menuname );

// If it doesn't exist, let's create it.
if( !$menu_exists){
    $menu_id = wp_create_nav_menu($menuname);

    // Set up default BuddyPress links and add them to the menu.
    wp_update_nav_menu_item($menu_id, 0, array(
        'menu-item-title' =>  __('Home'),
        'menu-item-classes' => 'home',
        'menu-item-url' => home_url( '/' ), 
        'menu-item-status' => 'publish'));

    // Grab the theme locations and assign our newly-created menu
    if( !has_nav_menu( $bpmenulocation ) ){
        $locations = get_theme_mod('nav_menu_locations');
        $locations[$bpmenulocation] = $menu_id;
        set_theme_mod( 'nav_menu_locations', $locations );
    }
}
////////////////////////////////////////////////////
function add_mobile_anchor( $items, $args )
{
    if($args->container_class == 'navigation -main-navigation')
    {
        $items .= '
            <li>
                <button onclick="mobileNavigation()" type="button" class="tcon tcon-menu--xbutterfly" aria-label="toggle menu">
                    <span class="tcon-menu__lines" aria-hidden="true"></span>
                    <span class="tcon-visuallyhidden">toggle menu</span>
                </button>
            </li>
        ';
    }

    return $items;
}
////////////////////////////////////////////////////
if( function_exists('acf_add_options_page') ) {
 
    acf_add_options_page(array(
            'page_title' 	=> 'Site',
            'menu_title'	=> 'Site<br>Settings',
            'menu_slug' 	=> 'site',
            'capability'	=> 'edit_posts',
            'parent_slug'   => '',
            'icon_url'      => '', // Add this line and replace the second inverted commas with class of the icon you like
            'position' => -1
        ));
        
        // acf_add_options_sub_page(array(
        // 	'page_title' 	=> 'General Settings',
        // 	'menu_title'	=> 'General Settings',
        // 	'capability'	=> 'edit_posts',
            //         'parent_slug'   => 'site'
        // ));

        acf_add_options_sub_page(array(
            'page_title' 	=> 'General Settings',
            'menu_title'	=> 'General',
            'capability'	=> 'edit_posts',
            'parent_slug'   => 'site'
        )); 
        
        acf_add_options_sub_page(array(
            'page_title' 	=> 'Home Page Settings',
            'menu_title'	=> 'Home',
            'capability'	=> 'edit_posts',
            'parent_slug'   => 'site'
        ));
        
        // acf_add_options_sub_page(array(
        // 	'page_title' 	=> 'Product Page Settings',
        // 	'menu_title'	=> 'Product',
        // 	'parent_slug'	=> 'theme-product-settings',
        // 	'capability'	=> 'edit_posts',
            // 'parent_slug'   => 'flow',
        // ));
        
        // acf_add_options_sub_page(array(
        // 	'page_title' 	=> 'Why Flow Page Settings',
        // 	'menu_title'	=> 'Why Flow',
        // 	'parent_slug'	=> 'theme-product-settings',
        // 	'capability'	=> 'edit_posts',
            // 'parent_slug'   => 'flow',
        // ));
        
        // acf_add_options_sub_page(array(
        // 	'page_title' 	=> 'Company Page Settings',
        // 	'menu_title'	=> 'Company',
        // 	'parent_slug'	=> 'theme-product-settings',
        // 	'capability'	=> 'edit_posts',
            // 'parent_slug'   => 'flow',
        // ));
        
        // acf_add_options_sub_page(array(
        // 	'page_title' 	=> 'Careers Page Settings',
        // 	'menu_title'	=> 'Careers',
        // 	'parent_slug'	=> 'theme-product-settings',
        // 	'capability'	=> 'edit_posts',
            // 'parent_slug'   => 'flow',
        // ));
        
        // acf_add_options_sub_page(array(
        // 	'page_title' 	=> 'Request a Demo Page Settings',
        // 	'menu_title'	=> 'Request',
        // 	'parent_slug'	=> 'theme-request-settings',
        // 	'capability'	=> 'edit_posts',
            // 'parent_slug'   => 'flow',
        // ));
     
}
////////////////////////////////////////////////////
attach_template_to_page( 'home', 'page-templates/home.php' );
add_theme_support( 'post-thumbnails' );
add_filter( 'wp_nav_menu_items', 'add_mobile_anchor', 10, 2);
add_filter('upload_mimes', 'cc_mime_types');
add_filter( 'wpcf7_validate_configuration', '__return_false' );
add_filter('pre_get_posts', 'query_post_type');
add_filter( 'show_admin_bar', 'hide_admin_bar' );
add_filter('terms_clauses', 'df_terms_clauses', 10, 3);
add_action( 'wp_enqueue_scripts', 'regScripts' );
add_action( 'init', 'menu' );
add_action( 'admin_init', 'hide_editor' );
add_action( 'customize_register', 'remove_customizer_settings', 20 );
add_action( 'customize_register', 'customizer' );
add_action( 'admin_menu', 'remove_menus' );
?>