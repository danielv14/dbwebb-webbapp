#!/bin/bash

# Base URL's
URLsoklista=http://api.arbetsformedlingen.se/af/v0/platsannonser/soklista/
URLmatching=http://api.arbetsformedlingen.se/af/v0/platsannonser/matchning?

# Variables for curl requests
itfield=yrkesgrupper?yrkesomradeid=3 # Listar IT yrkesområdet och dess grupper med antal lediaga jobb och platsannonser
ID_2516=yrken?yrkesgruppid=2516 # IT-säkerhetsspecialister
ID_3511=yrken?yrkesgruppid=3511 # Drifttekniker
ID_2512=yrken?yrkesgruppid=2512 # Mjukvaru- och systemutvecklare m.fl.
ID_3514=yrken?yrkesgruppid=3514 # Närverks- och systemtekniker m.fl.
ID_3512=yrken?yrkesgruppid=3512 # Supporrtekniker, IT
ID_3513=yrken?yrkesgruppid=3513 # Systemadministratörer
ID_2511=yrken?yrkesgruppid=2511 # Systemanalytiker och IT-arkitekter m.fl.
ID_2515=yrken?yrkesgruppid=2515 # Systemförvaltare m.fl
ID_2514=yrken?yrkesgruppid=2514 # Systemtestare och testledare
ID_2513=yrken?yrkesgruppid=2513 # Utvecklare inom spel och digitala media
ID_3515=yrken?yrkesgruppid=3515 # Webbmaster och webbadministratörer
ID_2519=yrken?yrkesgruppid=2519 # Övriga IT-specialister


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

      #If not tempFile matches the new JSON req
      if [ ! "$tempFile" == "$newJSON" ]
      then
        echo "Uppdaterar filen" $2 "med nytt innehåll då förändring har skett"
        curl -s -H "Accept-Language: sv" $1 | jq '.' > $2
      fi
    fi
}

# Call the function for all the needed api requests and output files
getAPItoJson $URLsoklista$itfield IT-field.json
getAPItoJson $URLsoklista$ID_3511 yrkesgruppID-3511.json
getAPItoJson $URLsoklista$ID_2516 yrkesgruppID-2516.json
getAPItoJson $URLsoklista$ID_2512 yrkesgruppID-2512.json
getAPItoJson $URLsoklista$ID_2516 yrkesgruppID-2516.json
getAPItoJson $URLsoklista$ID_2512 yrkesgruppID-2512.json
getAPItoJson $URLsoklista$ID_3514 yrkesgruppID-3514.json
getAPItoJson $URLsoklista$ID_3512 yrkesgruppID-3512.json
getAPItoJson $URLsoklista$ID_3513 yrkesgruppID-3513.json
getAPItoJson $URLsoklista$ID_2511 yrkesgruppID-2511.json
getAPItoJson $URLsoklista$ID_2515 yrkesgruppID-2515.json
getAPItoJson $URLsoklista$ID_2514 yrkesgruppID-2514.json
getAPItoJson $URLsoklista$ID_2513 yrkesgruppID-2513.json
getAPItoJson $URLsoklista$ID_3515 yrkesgruppID-3515.json
getAPItoJson $URLsoklista$ID_2519 yrkesgruppID-2519.json
