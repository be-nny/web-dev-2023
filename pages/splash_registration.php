<?php

function getSplash(): void {
    $uname = $_COOKIE['uname'];

    if(!isset($uname)){
        echo '
    <div>
        <h1>You’re not using a registered session? Register now</h1>   
    </div>
    ';
    } else{
        echo '
    <div>
        <h1>Click here to play!</h1>   
    </div>
    ';
    }
}