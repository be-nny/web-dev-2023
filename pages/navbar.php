<?php
function getNavBar(): void {
    $uname = $_COOKIE['uname'];

    if(!isset($uname)){
        echo '
        <link rel="stylesheet" href="/css/nav_bar_styles.css">
        
        <div class="nav_bar">
            <ul>
                <li id="home"><a href="">Home</a></li>
                <li id="memory"><a href="">Pairs</a></li>
                <li id="register"><a href="">Register</a></li>
            </ul>
        </div>
    ';

    } else {
        echo '
        <link rel="stylesheet" href="/css/nav_bar_styles.css">
        
        <div class="nav_bar">
            <ul>
                <li id="home"><a href="">Home</a></li>
                <li id="memory"><a href="">Play Pairs</a></li>
                <li id="leaderboard"><a href="">Leader Board</a></li>
            </ul>
        </div>
    ';
    }
}