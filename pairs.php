<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pairs</title>
    <script type="text/javascript" src="scripts/game.js"></script>
    <link rel="stylesheet" href="/css/pairs_styles.css">

    <?php
        include 'php_scripts/navbar.php';
        include 'php_scripts/footer.php';

    ?>

</head>
<body>
    <div class="header">
        <?php @getNavBar()?>
    </div>

    <div class="game">
        <div class="game_splash">
            <button id="start_btn" onclick="onClickStart()">Start the Game</button>
            <br>
            <label id="subtext">Press the button to start to game</label>
        </div>
    </div>

    <div class="footer">
        <?php @getFooter()?>
    </div>
</body>
</html>