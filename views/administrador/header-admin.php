<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>AdminLTE 2 | Dashboard</title>

  <!-- Favicon  -->
  <link rel="icon" href="<?php echo PUBLIC_URL ?>img/favicon.png" />
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" />
  <!-- Bootstrap 3.3.7 -->
  <link rel="stylesheet" href="<?php echo PUBLIC_URL ?>bower_components/bootstrap/dist/css/bootstrap.min.css" />
  <!-- Font Awesome -->
  <link rel="stylesheet" href="<?php echo PUBLIC_URL ?>bower_components/font-awesome/css/font-awesome.min.css" />
  <!-- Ionicons -->
  <link rel="stylesheet" href="<?php echo PUBLIC_URL ?>bower_components/Ionicons/css/ionicons.min.css" />
  <!-- Theme style -->
  <link rel="stylesheet" href="<?php echo PUBLIC_URL ?>css/AdminLTE.min.css" />
  <!-- AdminLTE Skins. Choose a skin from the css/skins folder instead of downloading all of them to reduce the load. -->
  <link rel="stylesheet" href="<?php echo PUBLIC_URL ?>css/skins/_all-skins.min.css" />
  <!-- Morris chart -->
  <link rel="stylesheet" href="<?php echo PUBLIC_URL ?>bower_components/morris.js/morris.css" />
  <!-- jvectormap -->
  <link rel="stylesheet" href="<?php echo PUBLIC_URL ?>bower_components/jvectormap/jquery-jvectormap.css" />
  <!-- Date Picker -->
  <link rel="stylesheet" href="<?php echo PUBLIC_URL ?>bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css" />
  <!-- Daterange picker -->
  <link rel="stylesheet" href="<?php echo PUBLIC_URL ?>bower_components/bootstrap-daterangepicker/daterangepicker.css" />
  <!-- bootstrap wysihtml5 - text editor -->
  <link rel="stylesheet" href="<?php echo PUBLIC_URL ?>plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css" />
  <?php if(isset($this->js)): ?>
    <?php foreach ($this->css as $css): ?>
      <?php echo '<link rel="stylesheet" href="'.URL.'views/administrador/'.$css.'" />'; ?>
    <?php endforeach; ?>
  <?php endif; ?>

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
  
  <!-- Google Font -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic" />
  <style>
    /* General */
    .color-palette {
      height: 35px;
      line-height: 35px;
      text-align: center;
    }

    .color-palette-set {
      margin-bottom: 15px;
    }

    .color-palette span {
      display: none;
      font-size: 12px;
    }

    .color-palette:hover span {
      display: block;
    }

    .color-palette-box h4 {
      position: absolute;
      top: 100%;
      left: 25px;
      margin-top: -40px;
      color: rgba(255, 255, 255, 0.8);
      font-size: 12px;
      display: block;
      z-index: 7;
    }
    .bs-glyphicons {
      padding-left: 0;
      padding-bottom: 1px;
      margin-bottom: 20px;
      list-style: none;
      overflow: hidden;
    }
    /* Icons */
    .bs-glyphicons li {
      float: left;
      width: 25%;
      height: 115px;
      padding: 10px;
      margin: 0 -1px -1px 0;
      font-size: 12px;
      line-height: 1.4;
      text-align: center;
      border: 1px solid #ddd;
    }

    .bs-glyphicons .glyphicon {
      margin-top: 5px;
      margin-bottom: 10px;
      font-size: 24px;
    }

    .bs-glyphicons .glyphicon-class {
      display: block;
      text-align: center;
      word-wrap: break-word; /* Help out IE10+ with class names */
    }

    .bs-glyphicons li:hover {
      background-color: rgba(86, 61, 124, .1);
    }

    @media (min-width: 768px) {
      .bs-glyphicons li {
        width: 12.5%;
      }
    }

    /* Modals */
    .example-modal .modal {
      position: relative;
      top: auto;
      bottom: auto;
      right: auto;
      left: auto;
      display: block;
      z-index: 1;
    }

    .example-modal .modal {
      background:  /**/ 
    }

    /* ... */
    .requiredM {
      border: 1px solid #28d028;
      box-shadow: 1px 1px 1px #e6ffe6;
    }

    .recommendedM {
      border: 1px solid orange;
      box-shadow: 1px 1px 1px #ffecc9;
    }
    
    article > div { display: none }
  </style>
</head>