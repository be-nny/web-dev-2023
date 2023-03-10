<?php

$pattern = '/';

function isValid($user_name): bool{
    return true;
}

function createSession(): void {
    if(isset($_POST['new_uname'])){
        if(isValid($_POST['new_uname'])){
            setcookie('uname', $_POST['new_uname'], time() + (86400 * 30), '/');
            // set avatar value

            session_start();
            $_SESSION['uname'] = $_COOKIE['uname'];
            echo '';
        }
    } else{
        echo "Invalid Username!";
    }
}

createSession();