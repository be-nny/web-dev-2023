<?php
const SCORES_FILE_PATH = '../scores.json';
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
                    $current_score = $value['score'];
                    $current_time = $value['time'];
                    $isFound = true;
                }
            }
            if ($isFound) {
                break;
            }
        }
    }

    if ($isFound) {
        echo '
            <label>Current Score: ' . $current_score . ' </label>
            <label>Current Score: ' . $current_time . ' </label>
    
        ';
    } else {
        echo '
            <label>You have no previous score!</label>
        ';
    }
}