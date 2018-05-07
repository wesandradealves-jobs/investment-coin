<!DOCTYPE html>
<html <?php language_attributes(); $lang = explode("lang=",get_language_attributes()); ?>>
  <head>
    <title><?php echo (is_single() ? get_bloginfo('title')." - ".get_the_title() : get_bloginfo('title')); ?></title>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="content-language" content="<?php echo str_replace('"','',$lang[1]); ?>" />
    <meta name="language" content="<?php echo str_replace('"','',$lang[1]); ?>" />
    <meta property="og:locale" content="<?php echo str_replace('"','',$lang[1]); ?>" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="<?php echo (is_single() ? get_bloginfo('title')." - ".get_the_title() : get_bloginfo('title')); ?>" />
    <meta property="og:description" content="<?php echo get_bloginfo('description'); ?>" />
    <meta property="og:url" content="<?php echo site_url(); ?>" />
    <meta property="og:site_name" content="<?php echo get_bloginfo('title'); ?>" />
    <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/screenshot.png" />
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="HandheldFriendly" content="true">
    <?php wp_meta(); ?>
    <link rel="canonical" href="<?php echo site_url(); ?>" />
    <?php wp_head(); ?>
  </head>
  <body   
  <?php
    if (is_front_page()) {
      echo 'class="pg-home"';
    } else if(is_archive()){
      echo 'class="pg-archive pg-interna"';
    } else if(is_category()){
      echo 'class="pg-category pg-interna"';
    } else if(is_search()){
      echo 'class="pg-search pg-interna"';
    } else if(is_single()){
      echo 'class="pg-single pg-interna"';
    } else if(is_404()){
      echo 'class="pg-404 pg-interna"';
    } else {
      echo 'class="pg-interna pg-'.str_replace(' ','-',strToLower(get_the_title())).' page_id_'.$post->ID.'"';
    }
    ?>>  
    <div id="wrap" style="background-image:url(assets/imgs/footer-arch.png), url(<?php echo (is_front_page() && get_the_post_thumbnail_url(get_the_ID(),'full')) ? get_the_post_thumbnail_url(get_the_ID(),'full') : (!is_front_page() && get_the_post_thumbnail_url(get_the_ID(),'full')) ? get_the_post_thumbnail_url(get_the_ID(),'full') : ''  ?>)">
    <?php wp_nav_menu( array( 'menu' => 'navigation', 'container' => 'nav', 'container_class'=>'navigation -mobile' ) ); ?>
      <header class="header">
        <div class="container">
          <h1 class="logo">
            <?php get_template_part('components/logo/_logo') ?>
          </h1>
          <?php wp_nav_menu( array( 'menu' => 'navigation', 'container' => 'nav', 'container_class'=>'navigation -main-navigation' ) ); ?>
          <?php get_template_part('components/newsletter/_newsletter') ?>
        </div>
        <?php get_template_part('components/header-footer/_header-footer') ?>
      </header>
      <main class="main">