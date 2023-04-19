<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home</title>

    <link rel="stylesheet" href="/css/index_styles.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

    <?php
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
        <img id="play_img" src="assets/splash-image.png" alt="how_to_play">
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