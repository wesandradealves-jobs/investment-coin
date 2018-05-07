    </main>
    <footer class="footer">
        <div class="container">
        <h5 class="logo">
            <?php get_template_part('components/logo/_logo') ?>
        </h5>
        <?php wp_nav_menu( array('menu' => 'navigation', 'container' => 'nav', 'container_class'=>'navigation' ) ); ?>
        <h6>Folow Us in</h6>
        <?php get_template_part('components/social-networks/_social-networks') ?>
        <div class="copyright">
            <?php wp_nav_menu( array('menu' => 'copyright', 'container' => 'nav', 'container_class'=>'' ) ); ?>
            <p>
                <?php echo "&#x24B8; Copyright ".date('Y')." ".get_bloginfo('name'); ?>
            </p>
        </div> 
        </div>
    </footer>
    </div> 
    <?php wp_footer(); ?>
</body>
</html>