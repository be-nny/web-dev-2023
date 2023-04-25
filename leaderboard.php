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
    <link rel="icon" type="image/x-icon" href="/assets/leaderboard_icon.png">


</head>
<body >
    <div id="header">
        <?php @getNavBar()?>
    </div>

    <div id="main">
        <div id="leader_title">Leaderboard Scores</div>

        <div id="table-container">
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