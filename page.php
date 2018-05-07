<?php get_header(); ?>
<div class="inner-wrap">
    <section class="contact">
    <div class="container">
        <div class="grid">
        <div>
            <h3 class="grid-title">
              <?php echo get_the_title(); ?>
            </h3>
            <?php the_content(); ?>
        </div>
        </div>
    </div>
    </section>          
</div>
<?php get_footer(); ?>