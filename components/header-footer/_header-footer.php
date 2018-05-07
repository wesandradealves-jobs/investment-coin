<div class="header-footer">
  <?php if( have_rows('cotation', 'option') ): ?>
  <ul class="cotation">
  <?php while ( have_rows('cotation', 'option') ) : the_row(); ?>
  <li>
    <?php 
      the_sub_field('cotation_currency').the_sub_field('cotation_currrent_value');
    ?>
  </li>
  <?php endwhile; ?>
  </ul>
  <?php endif; ?>
  <?php get_template_part('components/social-networks/_social-networks') ?>
</div>