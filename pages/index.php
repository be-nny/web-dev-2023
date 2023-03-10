<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

    <link rel="stylesheet" href="/css/index_styles.css">
    <?php

//        unset($_COOKIE['uname']);
        include dirname(__DIR__) . '/php/navbar.php';
        include dirname(__DIR__) . '/php/splash_registration.php';
    ?>

</head>
<body>
    <div class="header">
        <?php @getNavBar()?>
    </div>

    <div class="main">
        <img id="splash_img" src="/assets/arcade-unsplash.jpg" alt="splash_screen">

        <div class="splash_text">
            <?php @getSplash()?>
        </div>
    </div>

    <div class="footer">

    </div>
</body>
</html>