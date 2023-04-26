<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pairs</title>

    <?php
        include 'php_scripts/navbar.php';
        include 'php_scripts/footer.php';
        include 'php_scripts/get_user_score.php';
    ?>

    <link rel="stylesheet" href="/css/game_styles.css">
    <link rel="icon" type="image/x-icon" href="/assets/icon.png">

    <script type="text/javascript" src="scripts/GameLogic.js"></script>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

</head>
<body>
    <div class="header">
        <?php @getNavBar();?>
    </div>

    <div id="main">
        <div id="timer">0.00</div>
        <button id="submitBtn" type="button" class="btn btn-secondary btn-lg" data-toggle="modal" data-target="#myModal">Submit</button>

        <!-- Win Modal -->
        <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Game Complete!</h4>
                    </div>
                    <div class="modal-body">
                        <label id="score_label"></label>
                        <br>
                        <label id="time_label"></label>
                        <br>
                        <?php getUserScore();?>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal" onclick="onTryAgainClick();">Play Again</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal" onclick="onQuitClick();">Quit</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- start info before the game has started -->
        <div class="start-container">
            <button id='start-btn' type="button" class="btn btn-primary btn-lg" onclick="start();">Start the Game!</button>
        </div>
        <div id="game-container">
            <div class="game-grid"></div>
        </div>
    </div>
    <br>
    <br>

    <div class="footer">
        <?php @getFooter()?>
    </div>

</body>
</html>