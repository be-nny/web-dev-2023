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
    <script type="text/javascript" src="scripts/GameLogic.js"></script>

</head>
<body>
    <div class="header">
        <?php @getNavBar()?>
    </div>

    <div id="main">
        <!-- visible when the user has won -->
        <div id="win-container">
            <h1>You've Won!</h1>
            <label id="score_label"></label>
            <label id="time_label"></label>
            <br>
            <button id='play_btn' type="button" onclick="onTryAgainClick();">Play Again</button>
            <button id='quit_btn' type='button' onclick="onQuitClick();">Save and Quit</button>
        </div>

        <div class="start-container">
            <button id='start-btn' type="button" onclick="start();">Start Game!</button>

            <img src="assets/splash-image.png" id="splash_img">
        </div>



        <div class="game-container">
        </div>
    </div>

    <div class="footer">
        <?php @getFooter()?>
    </div>

</body>
</html>