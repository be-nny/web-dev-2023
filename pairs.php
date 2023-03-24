<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pairs</title>

    <?php
        include 'php_scripts/navbar.php';
        include 'php_scripts/footer.php';

    ?>

    <link rel="stylesheet" href="/css/game-styles.css">

</head>
<body>
    <div class="header">
        <?php @getNavBar()?>
    </div>

    <div id="main">
        <div class="game-container"></div>
    </div>

    <div class="footer">
        <?php @getFooter()?>
    </div>

    <script type="text/javascript" src="scripts/GameLogic.js"></script>

</body>
</html>