<?php

const SCORES_FILE_PATH = 'store/scores.json';

function getScoresTable(): void{

    $table = '<tr>
                  <th>Username</th>
                  <th>Score</th>
                  <th>Time</th>
              </tr>';

    $raw_data = json_decode(file_get_contents(SCORES_FILE_PATH), true);
    if(!empty($raw_data)) {
        for($i = 0; $i < sizeof($raw_data); $i ++){
            $user_data = $raw_data[$i];
            foreach ($user_data as $usr => $value){
                $row = '<tr>
                            <td>' . $usr . '</td>
                            <td>' . $user_data[$usr]['score'] .'</td>
                            <td>' . $user_data[$usr]['time'] .'</td>
                        </tr>';
            }
            $table .= $row;
        }
    }
    echo $table;
}
