<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Register</title>

    <?php
        include 'php_scripts/navbar.php';
        include 'php_scripts/footer.php';
    ?>

    <link rel="stylesheet" href="/css/register_styles.css">

</head>
<body>
    <div class="header">
        <?php @getNavBar()?>
    </div>

    <div class="login">
        <form action="php_scripts/register_user.php" method="post">
            <label for="uname">User Name</label>
            <br>
            <input type="text" id="uname_input" name="new_user">
            <br>
            <label id="valid_label"></label>
            <br>
            <input id="register_submit" type="submit" value="Register" disabled>
        </form>
    </div>
    <script type="text/javascript" src="scripts/user_validation.js"></script>

    <div class="avatar_create">

    </div>

    <div class="footer">
        <?php @getFooter()?>
    </div>
</body>
</html>