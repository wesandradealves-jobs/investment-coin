<?php get_header(); ?>
<div class="inner-wrap">
    <section class="contact">
    <div class="container">
        <div class="grid">
        <div>
            <?php if ( have_posts () ) : while (have_posts()) : the_post();  ?>
            <h3 class="grid-title">
              <?php echo get_the_title(); ?>
            </h3>
            <?php the_content(); ?>
            <?php endwhile; endif; ?>
        </div>
        </div>
    </div>
    </section>          
</div>
<?php get_footer(); ?>