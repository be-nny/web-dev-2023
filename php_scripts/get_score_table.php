<?php

const SCORES_FILE_PATH = 'scores.json';

function getScoresTable(): void{

    $table = '<tr>
                  <th>Username</th>
                  <th colspan="2">Level 1</th>
                  <th colspan="2">Level 2</th>
                  <th colspan="2">Level 3</th>
                  <th colspan="2">Total</th>
              </tr>
              <tr>
                <th></th>
                <th>Score</th>
                <th>Time</th>
                <th>Score</th>
                <th>Time</th>
                <th>Score</th>
                <th>Time</th>
                <th>Score</th>
                <th>Time</th>
              </tr>
              ';

    $raw_data = json_decode(file_get_contents(SCORES_FILE_PATH), true);
    if(!empty($raw_data)) {
        for($i = 0; $i < sizeof($raw_data); $i ++){
            foreach ($raw_data[$i] as $usr => $score_list){
                $row = '<tr>
                            <td>' .  $usr. '</td>

                            <td>' . $score_list[0]['level_1']['score'] .'</td>
                            <td>' . $score_list[0]['level_1']['time'] .'</td>

                            <td>' . $score_list[1]['level_2']['score'] .'</td>
                            <td>' . $score_list[1]['level_2']['time'] .'</td>

                            <td>' . $score_list[2]['level_3']['score'] .'</td>
                            <td>' . $score_list[2]['level_3']['time'] .'</td>

                            <td>' . intval($score_list[0]['level_1']['score']) + intval($score_list[1]['level_2']['score']) + intval($score_list[2]['level_3']['score']) .'</td>
                            <td>' . floatval($score_list[0]['level_1']['time']) + floatval($score_list[1]['level_2']['time']) + floatval($score_list[2]['level_3']['time']) .'</td>
                    </tr>';
                $table .= $row;

            }
        }
    }
    echo $table;
}
