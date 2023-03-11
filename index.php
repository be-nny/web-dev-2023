<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home</title>

    <link rel="stylesheet" href="/css/index_styles.css">

    <?php

                unset($_COOKIE['uname']);
                setcookie('uname', '', (time()-3600)*9, '/');

        include 'php_scripts/navbar.php';
        include 'php_scripts/splash_text.php';
        include 'php_scripts/footer.php';
    ?>

</head>
<body>
    <div class="header">
        <?php @getNavBar()?>
    </div>

    <div class="main">
        <img id="splash_img" src="assets/arcade-unsplash.jpg" alt="splash_screen">

        <div class="splash_text">
            <?php @getSplash()?>
        </div>
    </div>

    <div class="footer">
        <?php @getFooter()?>
    </div>
</body>
</html>