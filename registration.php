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
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="icon" type="image/x-icon" href="/assets/icon.png">

</head>
<body>
    <div class="header">
        <?php @getNavBar()?>
    </div>

    <img id="splash_img" src="assets/arcade-unsplash.jpg" alt="splash_screen">

    <div id="main">
        <form id="create_form" action="php_scripts/register_user.php" method="post">
            <label for="uname">User Name</label>
            <br>
            <input type="text" class="form-control" id="uname_input" name="new_user" required autofocus>
            <br>

            <label id="valid_label"></label>
            <br>

            <hr>
            <label id="header">Customise Avatar</label>
            <br>

            <script type="text/javascript" src="scripts/AvatarSelection.js"></script>
            <div class="avatar_create">
                <div id="face_select"><script>displayAllFaces();</script></div>

                <div id="eye_select"><script>displayAllEyes();</script></div>

                <div id="mouth_select"><script>displayAllMouths();</script></div>
            </div>

            <input type="hidden" id="avatar_key" name="avatar_code">
            <br>
            <hr>
            <div id="display_avatar"><script>displayAvatar();</script></div>
            <br>

<!--            <input id="register_submit" type="submit" value="Register" disabled>-->
            <button id="register_submit" type="submit" class="btn btn-secondary btn-lg" disabled>Submit</button>

        </form>
    </div>

    <div class="footer">
        <?php @getFooter()?>
    </div>

    <script type="text/javascript" src="scripts/UserValidation.js"></script>
    <script type="text/javascript" src="scripts/AvatarSelection.js"></script>

</body>

</html>