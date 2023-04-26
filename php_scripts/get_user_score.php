<?php
const SCORES_FILE_PATH = 'scores.json';
function getUserScore(): void{

    $usr = $_SESSION['usr_session_name'];
    $raw_data = json_decode(file_get_contents(SCORES_FILE_PATH), true);
    $isFound = false;

    if (!empty($raw_data)) {
        for ($i = 0; $i < sizeof($raw_data); $i++) {
            // get the json object
            $current_obj = $raw_data[$i];

            // going through the user data
            foreach ($current_obj as $key => $value) {
                if ($key == $usr) {
                    $isFound = true;

                    echo '
                        <hr>
                        <label>Your previous LEVEL 1 Score and Time: ' . $value[0]['level_1']['score'] . ', ' . $value[0]['level_1']['time'] . 's</label>
                
                    ';
                    echo '
                        <hr>
                        <label>Your previous LEVEL 2 Score and Time: ' . $value[1]['level_2']['score'] . ', ' . $value[1]['level_2']['time'] . 's</label>
                
                    ';
                    echo '
                        <hr>
                        <label>Your previous LEVEL 3 Score and Time: ' . $value[2]['level_3']['score'] . ', ' . $value[2]['level_3']['time'] . 's</label>
                
                    ';

                }
            }
            if ($isFound) {
                break;
            }
        }
    }

    if (!$isFound) {
        echo '
            <hr>
            <label>You have no previous score!</label>
        ';
    }
}