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


</head>
<body>
    <div class="header">
        <?php @getNavBar()?>
    </div>

    <div class="main">
        <div id="leader_title">Leaderboard Scores</div>
        <div id="table-container">
            <table id="leaderboard-table">
                <?php getScoresTable();?>
            </table>
        </div>
    </div>

    <div class="footer">
        <?php @getFooter()?>
    </div>
</body>
</html>