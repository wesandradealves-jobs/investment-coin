<a class="logo-anchor" href="<?php echo site_url(); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) )." - ".get_bloginfo('description'); ?>">
    <?php if(get_theme_mod('logo') || get_theme_mod('logo-footer')) : ?>
        <?php  
            if(did_action( 'get_footer' ) === 1 && get_theme_mod('logo-footer')){
                $ENV = get_theme_mod('logo-footer');
            } else if(did_action( 'get_footer' ) === 0 && get_theme_mod('logo')) {
                $ENV = get_theme_mod('logo');
            } else {
                echo esc_attr( get_bloginfo( 'name', 'display' ) );
            }
        ?>
        <img height="20" src="<?php echo $ENV; ?>" alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) )." - ".get_bloginfo('description'); ?>">
    <?php else : ?>
        <?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>
    <?php endif; ?>
</a> 