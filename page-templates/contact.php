<?php /* Template Name: Contact */ ?>
<?php get_header(); ?>
<div class="inner-wrap">
    <section class="contact">
    <div class="container">
        <div class="grid">
        <div>
            <?php if ( have_posts () ) : while (have_posts()) : the_post();  ?>
            <h3 class="grid-title">
            <?php echo get_the_title() ?>
            </h3>
            <?php if(get_the_excerpt()) : ?>
                <p class="highlight"><?php echo get_the_excerpt() ?></p>
            <?php endif; ?>
            <?php echo do_shortcode('[contact-form-7 id="155" html_class="contact-form" title="Contact form"]'); ?>
            <?php endwhile; endif; ?>
        </div>
        </div>
    </div>
    </section>          
</div>
<?php get_footer(); ?>