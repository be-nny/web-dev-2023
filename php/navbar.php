<?php

function getNavBar(): void {
    //get other variables
    $uname = $_COOKIE['uname'];

    if(!isset($uname)){
        echo '
        <link rel="stylesheet" href="/css/nav_bar_styles.css">
        
        <div class="nav_bar">
            <ul>
                <li id="home"><a href="/pages/index.php">Home</a></li>
                <li id="memory"><a href="/pages/pairs.php">Pairs</a></li>
                <li id="register"><a href="/pages/registration.php">Register</a></li>
            </ul>
        </div>
    ';

    } else {
        echo '
        <link rel="stylesheet" href="/css/nav_bar_styles.css">
        
        <div class="nav_bar">
            <ul>
                <li id="home"><a href="/pages/index.php">Home</a></li>
                <li id="memory"><a href="/pages/pairs.php">Play Pairs</a></li>
                <li id="leaderboard"><a href="/pages/leaderboard.php">Leader Board</a></li>
            </ul>
        </div>
    ';
    }
}