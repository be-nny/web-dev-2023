<?php

session_start();
if(isset($_COOKIE['uname']) && isset($_COOKIE['avatar_num'])){
    $_SESSION['usr_session_name'] = $_COOKIE['uname'];
    $_SESSION['usr_avatar_num'] = $_COOKIE['avatar_num'];
}

function getNavBar(): void {

    //get other variables
    $uname = $_SESSION['usr_session_name'];
    $avatar_key = $_SESSION['usr_avatar_num'];

    if(!isset($uname)){
        echo '
        <link rel="stylesheet" href="/css/nav_bar_styles.css">

        <div class="nav_bar">
            <ul>
                <li id="home"><a href="index.php">Home</a></li>
                <li id="user_login">Not Signed In</li>
                <li id="memory"><a href="pairs.php">Play Pairs</a></li>
                <li id="register"><a href="registration.php">Register</a></li>
            </ul>
        </div>
    ';

    } else {
        echo '
        <link rel="stylesheet" href="/css/nav_bar_styles.css">

        <script type="text/javascript" src="/scripts/NavBarAvatar.js"></script>

        <div class="nav_bar">
            <ul>
                <li id="home"><a href="index.php">Home</a></li>
                <li id="user_login">'. $uname .'</li>
                <li><div id="nav-bar-icon"><script>getNavbarIcon();</script></div></li>
                <li id="memory"><a href="pairs.php">Play Pairs</a></li>
                <li id="leaderboard"><a href="leaderboard.php">Leader Board</a></li>
            </ul>
        </div>
    ';
    }
}