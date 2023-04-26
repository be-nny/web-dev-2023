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
    <link rel="stylesheet" href="/css/play_button_styles.css">

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
        <img id="splash_img" src="assets/arcade-unsplash.jpg" alt="splash_screen">

        <div id="timer">0.00</div>
        <button id="submitBtn" type="button" class="btn btn-secondary btn-lg" data-toggle="modal" data-target="#myModal">Submit</button>

        <div class="modal fade" id="howToPlayModal" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">How to Play</h4>
                    </div>
                    <div class="modal-body">
                        <h1>Welcome to Pairs!</h1>
                        <br>
                        <p>Win the game by matching cards by flipping them over. Each level will require you to match 2
                        then 3 then 4 cards. Then at the end, your score will be calculated by the number of attempts it
                        took you, and the time it took you to complete the level!</p>
                        <br>
                        <p>Good Luck!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Okay!</button>
                    </div>
                </div>
            </div>
        </div>

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
            <button class="button-82-pushable" id="start-btn" role="button" onclick="start();">
                <span class="button-82-shadow"></span>
                <span class="button-82-edge"></span>
                <span class="button-82-front text">Start the Game!</span>
            </button>
        </div>
        <div id="game-container">
            <div class="game-grid"></div>
        </div>
    </div>
    <br>
    <br>

    <script>
        $(document).ready(function(){
            $("#howToPlayModal").modal('show');
        });
    </script>

    <div class="footer">
        <?php @getFooter()?>
    </div>

</body>
</html>