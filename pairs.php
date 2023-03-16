<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pairs</title>

    <?php
        include 'php_scripts/navbar.php';
        include 'php_scripts/footer.php';

    ?>

    <link rel="stylesheet" href="/css/pairs_styles.css">
    <link rel="stylesheet" href="/css/card_styles.css">

</head>
<body>
    <div class="header">
        <?php @getNavBar()?>
    </div>

    <div id="main_game">
    </div>

    <div class="footer">
        <?php @getFooter()?>
    </div>

    <script type="text/javascript" src="scripts/game.js"></script>

</body>
</html>