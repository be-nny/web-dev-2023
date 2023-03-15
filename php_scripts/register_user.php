<?php

$pattern = '/';

function isValid($user_name): bool{
    return true;
}

function createSession(): void {
    if($_POST['new_user'] && isset($_POST['avatar_code']) != null){
        setcookie('uname', $_POST['new_user'], time() + (86400 * 30), '/');
        setcookie('avatar_num', $_POST['avatar_code'], time() + (86400 * 30), '/');

        // change 'Location:/web-dev-2023/index.php' to Location:/html/index.php' on vm
        header("Location:/web-dev-2023/index.php");

    } else{
        echo "Invalid Username!";
    }
}

createSession();