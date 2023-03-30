<?php
const SCORES_FILE_PATH = '../store/scores.json';

if(isset($_POST['data']) && isset($_POST['user'])){
    $raw_data = json_decode(file_get_contents(SCORES_FILE_PATH), true);
    $new_score_json = json_decode(json_decode($_POST['data']), true);
    $isUserExist = false;

    // checking if the scores.json file isn't empty
    // checking if the new score data sent via post request isn't empty
    if($new_score_json != null && !empty($raw_data)){

        // for each json object in raw data
        for($i = 0; $i < sizeof($raw_data); $i ++){

            // get the json object
            $json_file_data = $raw_data[$i];

            // for each key value pair in the object
            foreach($json_file_data as $key => $value){

                // if the key is the same as the username
                if($key == $_POST['user']){
                    $isUserExist = true;

                    //swap the values to the new score data
                    $new_score = $new_score_json[$key]['score'];
                    $new_time = $new_score_json[$key]['time'];
                    $new_attempts = $new_score_json[$key]['attempts'];

                    $json_file_data[$key]['score'] = $new_score;
                    $json_file_data[$key]['time'] = $new_time;
                    $json_file_data[$key]['attempts'] = $new_attempts;

                    // replacing the data in the array with the new data
                    $replace_data = [$i => $json_file_data];
                    $raw_data = array_replace($raw_data, $replace_data);

                    // rewrite
                    file_put_contents(SCORES_FILE_PATH, json_encode($raw_data));
                    break;
                }
            }
        }
    }

    // if its a user's first time, it is appended to the list.
    if(!$isUserExist){
        $tmp = json_decode(file_get_contents(SCORES_FILE_PATH), true);
        array_push($tmp, $new_score_json);
        file_put_contents(SCORES_FILE_PATH, json_encode($tmp),  LOCK_EX);
    }
} else{
    echo 'error when trying to update scores page';
}
