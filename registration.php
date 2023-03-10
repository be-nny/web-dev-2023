<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Register</title>

    <?php
        include 'php_scripts/navbar.php';
    ?>

</head>
<body>
    <div class="header">
        <?php @getNavBar()?>
    </div>

    <div class="login">
        <form action="php_scripts/register_user.php" method="post">
            <label for="uname">User Name</label>
            <br>
            <input type="text" id="uname_input" name="new_uname">
            <br>
            <input type="submit" value="submit">
        </form>
    </div>

    <div class="avatar_create">

    </div>
</body>
</html>