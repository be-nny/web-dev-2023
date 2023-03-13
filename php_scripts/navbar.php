<?php

function getNavBar(): void {

    //get other variables
    $uname = $_COOKIE['uname'];

    if(!isset($uname)){
        echo '
        <link rel="stylesheet" href="/css/nav_bar_styles.css">
        
        <div class="nav_bar">
            <ul>
                <li id="home"><a href="index.php">Home</a></li>
                <li id="user_login"></li>
                <li id="memory"><a href="pairs.php">Play Pairs</a></li>
                <li id="register"><a href="registration.php">Register</a></li>
            </ul>
        </div>
        <script type="text/javascript" src="scripts/nav_bar_script.js"></script>
    ';

    } else {
        echo '
        <link rel="stylesheet" href="/css/nav_bar_styles.css">

        <div class="nav_bar">
            <ul>
                <li id="home"><a href="index.php">Home</a></li>
                <li id="user_login"></li>
                <li id="memory"><a href="pairs.php">Play Pairs</a></li>
                <li id="leaderboard"><a href="leaderboard.php">Leader Board</a></li>
            </ul>
        </div>
        <script type="text/javascript" src="scripts/nav_bar_script.js"></script>
    ';
    }
}