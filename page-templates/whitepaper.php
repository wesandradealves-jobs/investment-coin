<?php /* Template Name: Whitepaper */ ?>
<?php get_header(); ?>
<div class="inner-wrap">
    <section class="whitepaper">
    <div class="container">
        <div class="grid">
        <div>
            <?php if ( have_posts () ) : while (have_posts()) : the_post();  ?>
            <?php if(get_field('whitepaper_image')) : ?>
            <img class="coin" height="140" src="<?php echo get_field('whitepaper_image'); ?>" alt="<?php echo get_the_title() ?>" />
            <?php endif; ?>
            <h2 class="title">
                <?php echo (get_the_excerpt()) ? '<span><small>'.get_the_excerpt().'</small></span>' : ''; ?>
                <?php echo get_the_title() ?>
            </h2>
            <?php echo the_content() ?>
            <?php if(get_field('whitepaper_file','option')||get_field('whitepaper_url','option')) : ?>
            <a href="<?php echo (get_field('whitepaper_file','option')) ? get_field('whitepaper_file','option') : get_field('whitepaper_url','option') ?>" title="Download Now" class="btn -btn-2">Download Now</a>
            <?php endif; ?>
            <?php endwhile; endif; ?>
        </div>
        </div>
    </div>
    <div class="rectangle-area">
        <div class="rectangle"><!-- --></div>
    </div>
    </section>
</div>
<?php get_footer(); ?>