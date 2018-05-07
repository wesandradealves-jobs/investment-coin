<?php /* Template Name: Home */ ?>
<?php get_header(); ?>
<main class="main">
<section id="banner" class="banner">
  <div class="container">
    <?php echo get_field('webdoor_title','option', false, false); ?>
    <div class="coin-section">
      <img class="coin" src="<?php echo get_field('webdoor_image','option'); ?>" />
      <div class="coin-text">
        <?php echo get_field('webdoor_text','option', false, false); ?>
        <?php if(get_field('whitepaper_file','option')||get_field('whitepaper_url','option')) : ?>
          <a href="<?php echo (get_field('whitepaper_file','option')) ? get_field('whitepaper_file','option') : get_field('whitepaper_url','option') ?>" title="Download Whitepaper" class="btn -btn-2">Download Whitepaper</a>
        <?php endif; ?>
      </div>
      <p class="pin -welcome">
        / 00. welcome _
      </p>     
      <p class="pin -future">
        / 00. future _
      </p>   
      <p class="pin -welcome -bottom">
        / 00. welcome _
      </p>                    
    </div>                      
  </div>
</section>

<?php if(get_field('overview_title','option')||get_field('overview_text','option')||get_field('overview_image','option')) : ?>
<section id="overview" class="overview">
  <div class="container">
    <p class="pin">
      / 01. <?php echo get_field('overview_title','option', false, false) ?> _
    </p>  
    <div class="grid">
      <div>
        <h3 class="grid-title"><span><?php echo get_field('overview_title','option', false, false) ?></span></h3>
        <?php echo get_field('overview_text','option', false, false) ?>
      </div>
      <div>
        <img src="<?php echo get_field('overview_image','option'); ?>" alt="<?php echo get_field('overview_title','option') ?>" />
      </div>
    </div>
  </div>
</section>
<?php endif; ?>

<?php if(get_field('team_title','option')||get_field('team_text','option')||get_field('team_image','option')) : ?>
<section id="team" class="team">
  <div class="container">
    <p class="pin -who-we-are">
      / 00. Who we are _
    </p>  
    <p class="pin -team">
      / 02. <?php echo get_field('team_title','option', false, false) ?> _
    </p>  
    <div class="grid">
      <div>
        <h3 class="grid-title"><span><?php echo get_field('team_title','option', false, false) ?></span></h3>
        <?php echo get_field('team_text','option', false, false) ?>
      </div>
      <div> 
        <img src="<?php echo get_field('team_image','option'); ?>" alt="<?php echo get_field('team_title','option') ?>" />
      </div>
    </div>
  </div>
</section>      
<?php endif; ?>    

<?php if(get_field('conversions_title','option')||get_field('conversions_text','option')||get_field('conversions_subtitle','option')) : ?>
<section id="conversions" class="conversions">
  <div class="container">
    <p class="pin">
      / 03. <?php echo get_field('conversions_title','option', false, false) ?> _
    </p>  
    <div class="grid">
      <div>
        <h3 class="grid-title"><span><?php echo get_field('conversions_title','option', false, false) ?></span></h3>
        <p class="highlight">
          <?php echo get_field('conversions_subtitle','option', false, false) ?>
        </p>
        <div class="conversor">
          <span>
            <label for="eth">
              <input type="number" id="eth" name="conversor" value="1" min="0" /> 
            </label>
          </span>
          <span>
            <label for="tokens">
              <input type="number" id="tokens" name="conversor" value="<?php echo get_field('token_default_value','option') ?>" disabled /> 
            </label>
          </span>
        </div>
        <?php if(get_field('conversions_signupurl','option')) : ?>
        <a href="<?php echo get_field('conversions_signupurl','option') ?>" title="Signup" class="btn -btn-2">Signup</a>
        <?php endif; ?>
        <p>
          <?php echo get_field('conversions_text','option', false, false) ?>
        </p>
      </div>
    </div>
  </div>
</section>
<?php endif; ?>    

<?php if(get_field('token_sale_title','option')||get_field('token_sale_subtitle','option')) : ?>
<section id="token-sale" class="token-sale">
  <div class="container">
    <p class="pin">
      / 04 <?php echo get_field('token_sale_title','option', false, false); ?> _
    </p>                 
    <div class="grid">
      <div>
        <img src="<?php echo get_field('token_sale_image', 'option'); ?>" alt="<?php echo get_field('token_sale_title','option', false, false); ?>">
      </div>
      <div>
          <h3 class="grid-title"><span><?php echo get_field('token_sale_title','option', false, false); ?></span></h3>
          <p class="highlight">
              <?php echo get_field('token_sale_subtitle','option', false, false); ?>
          </p>
      </div>
    </div>
    <?php if( have_rows('token_sale_steps', 'option') ): ?>
    <div class="grid">
      <div>
        <ul class="token-sale-steps">
          <?php while ( have_rows('token_sale_steps', 'option') ) : the_row(); ?>
          <li class="<?php echo (get_sub_field('step_status')) ? '-active' : '' ?>  ">
            <span>
              <span>
                <?php the_sub_field('step_title') ?>
                <?php echo (get_sub_field('step_status')) ? '<small class="status">currently active</small>' : '' ?>                
              </span>
            </span>
            <span>
              <?php the_sub_field('step_text') ?>
              <small>at <b>$<?php the_sub_field('current_step_token_value') ?></b> per token</small>
            </span>
          </li>
          <?php endwhile; ?>
        </ul>
      </div>
    </div>
    <?php endif; ?>
  </div>
</section>
<?php endif; ?>

<?php if(get_field('our_story_title','option')||get_field('our_story_subtitle','option')||get_field('our_story_text','option')) : ?>
<section id="our-story" class="our-story">
  <div class="container">
    <p class="pin">
      / 00. welcome to your future _
    </p> 
    <div class="grid">
      <div>
          <h3 class="grid-title"><span><?php echo get_field('our_story_title','option', false, false); ?></span></h3>
          <p class="highlight">
          <?php echo get_field('our_story_subtitle','option', false, false); ?>
          </p>
      </div>
      <div>
        <blockquote class="blockquote">
          <p><?php echo get_field('our_story_text','option', false, false); ?></p>
        </blockquote>
      </div>
    </div>
  </div>
</section>   
<?php endif; ?>

<?php if(get_field('benefits_title','option')||get_field('benefits_subtitle','option')||get_field('benefits_list','option')||get_field('payouts_title','option')||get_field('payouts_subtitle','option')||get_field('payouts_text','option')) : ?>
<section id="benefits" class="benefits">
  <div class="container">
    <div class="grid">
      <div>
        <h3 class="grid-title"><span><?php echo get_field('payouts_title','option', false, false); ?></span></h3>
        <p class="highlight">Every 03 months, one payout.  </p>
        <p class="payouts-txt">
            <span>
              <img src="<?php echo get_field('payouts_image','option'); ?>" alt="<?php echo get_field('payouts_title','option', false, false); ?>"/>
            </span>
            <span>
              <?php echo get_field('payouts_text','option'); ?>
            </span>
        </p>
      </div>
      <div>
        <h3 class="grid-title"><span><?php echo get_field('benefits_title','option', false, false); ?></span></h3>
        <p class="highlight">
        <?php echo get_field('benefits_subtitle','option'); ?>
        </p>
        <?php if( have_rows('benefits_list', 'option') ): ?>
        <ul class="benefits-list">
            <?php while ( have_rows('benefits_list', 'option') ) : the_row(); ?>
            <li>
              <span>
                <img src="<?php the_sub_field('benefit_ico') ?>" title="<?php the_sub_field('benefit') ?>"/>
              </span> 
              <p>
              <?php the_sub_field('benefit') ?>
              </p>
            </li>
            <?php endwhile; ?>
        </ul>
        <?php endif; ?>
      </div>
    </div>
  </div>
</section>  
<?php endif; ?>

<?php if(get_field('faq_title','option')||get_field('faq_subtitle','option')||get_field('faq','option')) : ?>
<section id="faq" class="faq">
  <div class="container">
    <div class="grid">
      <div>
        <h3 class="grid-title"><?php echo get_field('faq_title','option', false, false); ?></h3>
        <p class="highlight"><?php echo get_field('faq_subtitle','option', false, false); ?></p>
        <?php if( have_rows('faq', 'option') ): ?>
        <ul class="faq-list">
          <?php while ( have_rows('faq', 'option') ) : the_row(); ?>
          <li>
            <h4>
              <span>
                <span><?php the_sub_field('question') ?></span>
                <a href="javascript:void(0)" title="Open Faq" class="open-faq">
                  <i>+</i>
                </a>
              </span>
            </h4>
            <p>
            <?php the_sub_field('answer') ?>
            </p>
          </li>
          <?php endwhile; ?>
        </ul>
        <?php endif; ?>
      </div>
    </div>
  </div>
</section>  
<?php endif; ?>

</main>
<?php get_footer(); ?>