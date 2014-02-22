<?php

    // Switch this to http://php.net/manual/en/function.fputcsv.php
    function outputCSV($data) { // sourced from http://stackoverflow.com/questions/217424/create-a-csv-file-for-a-user-in-php#answer-6493794
        function __outputCSV(&$vals, $key, $filehandler) {
            fputcsv($filehandler, $vals); // add parameters if you want
        }
        $outstream = fopen("php://output", "w");
        array_walk($data, "__outputCSV", $outstream);
        fclose($outstream);
    }

    header("Content-type: text/csv");
    header("Content-Disposition: attachment; filename=file.csv");
    header("Pragma: no-cache");
    header("Expires: 0");

    $array = json_decode( rawurldecode( parse_url( $_SERVER["REQUEST_URI"], PHP_URL_QUERY ) ), true );
    outputCSV($array);

?>
