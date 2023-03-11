<?php

$pattern = '/';

function isValid($user_name): bool{
    return true;
}

function createSession(): void {
    if(isset($_POST['new_user'])){
        if(isValid($_POST['new_user'])){
            setcookie('uname', $_POST['new_user'], time() + (86400 * 30), '/');
            // set avatar value

            session_start();
            $_SESSION['uname'] = $_POST['new_user'];
            header("Location:/web-dev-2023/index.php");
        }
    } else{
        echo "Invalid Username!";
    }
}

createSession();