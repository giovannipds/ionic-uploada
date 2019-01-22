<?php
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');


   // Retrieve and decode the posted JSON data
   $posted        = file_get_contents("php://input");
   $obj           =  json_decode($posted);


   // Separate out the supplied keys/values
   $fileName      =  strip_tags($obj->name);
   $fileData      =  strip_tags($obj->file);


   // Format the supplied base64 data URI so that we remove the initial base64 identifier
   $uri           =  substr($fileData,strpos($fileData,",")+1);


   // Replace any spaces in the formatted base64 URI string with pluses to avoid corrupted file data
   $encodedData   = str_replace(' ','+',$uri);


   // Decode the formatted base64 URI string
   $decodedData   = base64_decode($encodedData);


   try {

      // Write the base64 URI data to a file in a sub-directory named uploads
      if(!file_put_contents('uploads/' . $fileName, $decodedData))
      {
         // Uh-oh! Something went wrong - inform the user
         echo json_encode(array('message' => 'Error! The supplied data was NOT written '));
      }

      // Everything went well - inform the user :)
      echo json_encode(array('message' => 'The file was successfully uploaded'));

   }
   catch(Exception $e)
   {
      // Uh-oh! Something went wrong - inform the user
      echo json_encode(array('message' => 'Fail!'));
   }


?>