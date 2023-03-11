<?php
function getFooter(): void {
    echo '
        <link rel="stylesheet" href="/css/footer_styles.css">
        <div class="footer">
            <ul>
                <li id="copyright"> © 2023 Ben Abbott</li>
                <li id="github"> Check this project out on <a href="https://github.com/be-nny/web-dev-2023">github</a></li> 
            </ul>
        </div>
    ';
}