<?php
function getNavBar(): void {

    //get other variables
    $uname = $_COOKIE['uname'];

    if(!isset($uname)){
        echo '
        <link rel="stylesheet" href="/css/nav_bar_styles.css">
        <script type="text/javascript" src="scripts/UserInfo.js"></script>
        
        <div class="nav_bar">
            <ul>
                <li id="home"><a href="index.php">Home</a></li>
                <li id="user_login"><script>setUserName();</script></li>
                <li id="memory"><a href="pairs.php">Play Pairs</a></li>
                <li id="register"><a href="registration.php">Register</a></li>
            </ul>
        </div>
    ';

    } else {
        echo '
        <link rel="stylesheet" href="/css/nav_bar_styles.css">
        <script type="text/javascript" src="/scripts/UserInfo.js"></script>

        <div class="nav_bar">
            <ul>
                <li id="home"><a href="index.php">Home</a></li>
                <li id="user_login"><script>setUserName();</script></li>
                <li><div class="display_avatar"><script>displayAvatar();</script></div> </li>
                <li id="memory"><a href="pairs.php">Play Pairs</a></li>
                <li id="leaderboard"><a href="leaderboard.php">Leader Board</a></li>
            </ul>
        </div>
    ';
    }
}