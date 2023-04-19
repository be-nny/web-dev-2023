<?php

if(isset($_POST['new_user']) && isset($_POST['avatar_code'])){

    // setting the cookie data for the new user
    setcookie('uname', $_POST['new_user'], time() + (86400 * 30), '/');
    setcookie('avatar_num', $_POST['avatar_code'], time() + (86400 * 30), '/');

    // change 'Location:/web-dev-2023/index.php' to Location:/index.php' on vm
    header("Location:/web-dev-2023/index.php");

} else{
    echo "Invalid Username!";
}
