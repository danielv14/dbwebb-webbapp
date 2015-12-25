#!/bin/bash


# Variables for curl requests
itfield=http://api.arbetsformedlingen.se/af/v0/platsannonser/soklista/yrkesgrupper?yrkesomradeid=3 # Listar IT yrkesområdet och dess grupper med antal lediaga jobb och platsannonser
ID_2516=http://api.arbetsformedlingen.se/af/v0/platsannonser/soklista/yrken?yrkesgruppid=2516 # IT-säkerhetsspecialister
ID_3511=http://api.arbetsformedlingen.se/af/v0/platsannonser/soklista/yrken?yrkesgruppid=3511 # Drifttekniker
ID_2512=http://api.arbetsformedlingen.se/af/v0/platsannonser/soklista/yrken?yrkesgruppid=2512 # Mjukvaru- och systemutvecklare m.fl.
ID_3514=http://api.arbetsformedlingen.se/af/v0/platsannonser/soklista/yrken?yrkesgruppid=3514 # Närverks- och systemtekniker m.fl.
ID_3512=http://api.arbetsformedlingen.se/af/v0/platsannonser/soklista/yrken?yrkesgruppid=3512 # Supporrtekniker, IT
ID_3513=http://api.arbetsformedlingen.se/af/v0/platsannonser/soklista/yrken?yrkesgruppid=3513 # Systemadministratörer
ID_2511=http://api.arbetsformedlingen.se/af/v0/platsannonser/soklista/yrken?yrkesgruppid=2511 # Systemanalytiker och IT-arkitekter m.fl.
ID_2515=http://api.arbetsformedlingen.se/af/v0/platsannonser/soklista/yrken?yrkesgruppid=2515 # Systemförvaltare m.fl
ID_2514=http://api.arbetsformedlingen.se/af/v0/platsannonser/soklista/yrken?yrkesgruppid=2514 # Systemtestare och testledare
ID_2513=http://api.arbetsformedlingen.se/af/v0/platsannonser/soklista/yrken?yrkesgruppid=2513 # Utvecklare inom spel och digitala media
ID_3515=http://api.arbetsformedlingen.se/af/v0/platsannonser/soklista/yrken?yrkesgruppid=3515 # Webbmaster och webbadministratörer
ID_2519=http://api.arbetsformedlingen.se/af/v0/platsannonser/soklista/yrken?yrkesgruppid=2519 # Övriga IT-specialister


# function to curl the API, format with jq and output to a file
# @param string $1 the API-url to use
# @param string $2 the output file
function getAPItoJson {

    # If file doesnt exist, create a new and fresh one
    if [ ! -e $2 ]
    then
      curl -s -H "Accept-Language: sv" $1 | jq '.' > $2
      echo $2 "skapades."
    else # if the file does exist
      tempFile=$(<$2) # temp variable from file to check against new API req
      newJSON=$(curl -s -H "Accept-Language: sv" $1 | jq '.') # new JSON to test against

      #If the tempFile matches the new JSON req
      if [ ! "$tempFile" == "$newJSON" ]
      then
        echo "Uppdaterar filen" $2 "med nytt innehåll då förändring har skett"
        curl -s -H "Accept-Language: sv" $1 | jq '.' > $2
      # then
      #   echo 'Uppdaterar inte filen' $2 'då inget har förändrats'
      # else # IF updates have happened since file was created

      fi
    fi
}

# Call the function for all the needed api requests and output files

#getAPItoJson $itfield IT-field.json
getAPItoJson $ID_2516 ID-2516.json
