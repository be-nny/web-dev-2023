<?php

$pattern = '/';

function isValid($user_name): bool{
    return true;
}

function createSession(): void {
    if(isset($_POST['new_user'])){
        setcookie('uname', $_POST['new_user'], time() + (86400 * 30), '/');
        setcookie('avatar_num', $_POST['avatar_key'], time() + (86400 * 30), '/');
        // set avatar value

        header("Location:/web-dev-2023/index.php");

    } else{
        echo "Invalid Username!";
    }
}

createSession();