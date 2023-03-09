<?php
function getNavBar(): void {
    $uname = $_COOKIE['uname'];

    if(!isset($uname)){
        echo '
        <link rel="stylesheet" href="/css/nav_bar_styles.css">
        
        <div class="nav_bar">
            <ul>
                <li id="home">Home</li>
                <li id="memory">Play Pairs</li>
                <li id="register">Register</li>
            </ul>
        </div>
    ';

    } else {
        echo '
        <link rel="stylesheet" href="/css/nav_bar_styles.css">
        
        <div class="nav_bar">
            <ul>
                <li id="home">Home</li>
                <li id="memory">Play Pairs</li>
                <li id="leaderboard">Leader Board</li>
            </ul>
        </div>
    ';
    }
}