<?php
function getSplash(): void {
    $uname = $_COOKIE['uname'];

    if(!isset($uname)){
        echo '
            <div>
                <h2>You’re not using a registered session.</h2>   
                <h1><a href="registration.php">Register Now!</a></h1>
            </div>
        ';
    } else{
        echo '
            <div>
                <h2>Welcome back, '. $_COOKIE['uname'] . '</h2>
                <h1><a href="pairs.php">Click here to play!</a></h1>   
            </div>
        ';
    }
}