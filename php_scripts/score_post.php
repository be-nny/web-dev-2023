<?php
const SCORES_FILE_PATH = '../store/scores.json';

if(isset($_POST['data']) && isset($_POST['user'])){
    $raw_data = json_decode(file_get_contents(SCORES_FILE_PATH), true);
    $new_score_json = json_decode(json_decode($_POST['data']), true);
    $isNewUser = true;
    // checking if the scores.json file isn't empty
    // checking if the new score data sent via post request isn't empty
    if($new_score_json != null && !empty($raw_data)){

        // for each json object in raw data
        for($i = 0; $i < sizeof($raw_data); $i ++){

            // get the json object
            $current_obj = $raw_data[$i];

            // for each key value pair in the object
            foreach($current_obj as $key => $value){

                // if the key is the same as the username
                if($key == $_POST['user']){
                    $isNewUser = false;

                    // swap the values to the new score data
                    $new_score_val = $new_score_json[$key]['score'];
                    $new_time_val = $new_score_json[$key]['time'];
                    $new_attempts_val = $new_score_json[$key]['attempts'];

                    // checking if the new score is greater than the old one
                    if(intval($value['score']) < intval($new_score_val)){

                        // remove the object from the array
                        array_splice($raw_data, $i, 1);

                        // setting the variables of the new score object
                        $current_obj[$key]['score'] = $new_score_val;
                        $current_obj[$key]['time'] = $new_time_val;
                        $current_obj[$key]['attempts'] = $new_attempts_val;
                        // rewrite
                        file_put_contents(SCORES_FILE_PATH, json_encode(insertScore($current_obj, $raw_data, $new_score_val)), LOCK_EX);
                    }
                }
            }
        }
    }

    // if it's a new user
    if($isNewUser){
        $new_score_val = $new_score_json[$_POST['user']]['score'];
        file_put_contents(SCORES_FILE_PATH, json_encode(insertScore($new_score_json, $raw_data, $new_score_val)), LOCK_EX);
    }

} else{
    echo 'error when trying to update scores page';
}


function insertScore($new_score_obj, $scores, $new_score) : array {
    $temp = $scores;

    // if the score is the first one to be written to the json file
    if(sizeof($scores) == 0){
        $temp[] = $new_score_obj;
    } else{
        // insertion sort
        for($i = 0; $i < sizeof($scores); $i ++){
            
            foreach ($scores[$i] as $key => $value){
                if(intval($value['score']) < intval($new_score)){
                    array_splice($temp, $i, 0, array($new_score_obj));
                }
            }
        }
    }

    return $temp;
}
