<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Leaderboard</title>

    <?php
        include 'php_scripts/navbar.php';
        include 'php_scripts/footer.php';
        include 'php_scripts/get_score_table.php';
    ?>

    <link rel="stylesheet" href="/css/leader_board_styles.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="icon" type="image/x-icon" href="/assets/leaderboard_icon.png">


</head>
<body>
    <div id="header">
        <?php @getNavBar()?>
    </div>

    <div id="main">
        <img id="splash_img" src="assets/arcade-unsplash.jpg" alt="splash_screen">

        <div id="leader_title">Leaderboard Scores</div>

        <div id="table-container" >
            <table id="leaderboard-table">
                <?php getScoresTable();?>
            </table>
        </div>

    </div>

    <div id="footer">
        <?php @getFooter()?>
    </div>
</body>
</html>