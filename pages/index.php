<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

    <link rel="stylesheet" href="/css/index_styles.css">

</head>
<body>
    <div class="header">
        <?php include 'navbar.php'; @getNavBar()?>
    </div>

    <div class="main">
        <img id="splash_img" src="/assets/arcade-unsplash.jpg" alt="splash_screen">

        <div class="splash_text">
            <?php include "splash_registration.php"; @getSplash()?>
        </div>
    </div>

    <div class="footer">

    </div>
</body>
</html>