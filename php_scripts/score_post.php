<?php
const SCORES_FILE_PATH = '../scores.json';

if (isset($_POST['data']) && isset($_POST['user'])) {
    $raw_data = json_decode(file_get_contents(SCORES_FILE_PATH), true);
    $temp = $raw_data;
    $new_score_json = json_decode(json_decode($_POST['data']), true);
    $isNewUser = true;

    // checking if the scores.json file isn't empty
    // checking if the new score data sent via post request isn't empty
    if ($new_score_json != null && !empty($raw_data)) {
        for($i = 0; $i < sizeof($raw_data); $i ++){
            foreach ($raw_data[$i] as $key => $value){
                if($key == $_POST['user']){
                    $isNewUser = false;

                    // prev scores
                    $prev_level_1 = $value[0]['level_1'];
                    $prev_level_2 = $value[1]['level_2'];
                    $prev_level_3 = $value[2]['level_3'];

                    // new scores
                    $new_level_1 = $new_score_json[$_POST['user']][0]['level_1'];
                    $new_level_2 = $new_score_json[$_POST['user']][1]['level_2'];
                    $new_level_3 = $new_score_json[$_POST['user']][2]['level_3'];

                    // if the new level score is higher than the previous one
                    if(intval($new_level_1['score']) >= intval($prev_level_1['score'])){
                        $temp[$i][$_POST['user']][0]['level_1'] = $new_level_1;
                    }
                    if(intval($new_level_2['score']) >= intval($prev_level_2['score'])){
                        $temp[$i][$_POST['user']][1]['level_2'] = $new_level_2;
                    }
                    if(intval($new_level_3['score']) >= intval($prev_level_3['score'])){
                        $temp[$i][$_POST['user']][2]['level_3'] = $new_level_3;
                    }

                    // writing
                    file_put_contents(SCORES_FILE_PATH, json_encode($temp), LOCK_EX);
                }
            }
        }
    }

    if($isNewUser){
        array_push($temp, $new_score_json);
        file_put_contents(SCORES_FILE_PATH, json_encode($temp), LOCK_EX);
    }
}
