#!/bin/bash

# Base URL's
URLsoklista="http://api.arbetsformedlingen.se/af/v0/platsannonser/soklista/"
URLmatching="http://api.arbetsformedlingen.se/af/v0/platsannonser/matchning?"

########## Variables for curl requests
# for yrkesgrupper
itfield="yrkesgrupper?yrkesomradeid=3" # Listar IT yrkesområdet och dess grupper med antal lediaga jobb och platsannonser
ID_2516="yrken?yrkesgruppid=2516" # IT-säkerhetsspecialister
ID_3511="yrken?yrkesgruppid=3511" # Drifttekniker
ID_2512="yrken?yrkesgruppid=2512" # Mjukvaru- och systemutvecklare m.fl.
ID_3514="yrken?yrkesgruppid=3514" # Närverks- och systemtekniker m.fl.
ID_3512="yrken?yrkesgruppid=3512" # Supporrtekniker, IT
ID_3513="yrken?yrkesgruppid=3513" # Systemadministratörer
ID_2511="yrken?yrkesgruppid=2511" # Systemanalytiker och IT-arkitekter m.fl.
ID_2515="yrken?yrkesgruppid=2515" # Systemförvaltare m.fl
ID_2514="yrken?yrkesgruppid=2514" # Systemtestare och testledare
ID_2513="yrken?yrkesgruppid=2513" # Utvecklare inom spel och digitala media
ID_3515="yrken?yrkesgruppid=3515" # Webbmaster och webbadministratörer
ID_2519="yrken?yrkesgruppid=2519" # Övriga IT-specialister
# for Län
LanID_24="yrkesomradeid=3&lanid=24&antalrader=10000" # Västerbotten
LanID_1="yrkesomradeid=3&lanid=1&antalrader=10000" # Stockholm
LanID_10="yrkesomradeid=3&lanid=10&antalrader=10000" # Blekinge
LanID_20="yrkesomradeid=3&lanid=20&antalrader=10000" # Dalarnas län
LanID_9="yrkesomradeid=3&lanid=9&antalrader=10000" # GOtlands län
LanID_21="yrkesomradeid=3&lanid=21&antalrader=10000" # Gävleborgs län
LanID_13="yrkesomradeid=3&lanid=13&antalrader=10000" # Hallands län
LanID_23="yrkesomradeid=3&lanid=23&antalrader=10000" # Jämtlands län
LanID_6="yrkesomradeid=3&lanid=6&antalrader=10000" # Jönköpings län
LanID_8="yrkesomradeid=3&lanid=8&antalrader=10000" # Kalmars län
LanID_7="yrkesomradeid=3&lanid=7&antalrader=10000" # Kronobergs län
LanID_25="yrkesomradeid=3&lanid=25&antalrader=10000" # Norrbottens län
LanID_12="yrkesomradeid=3&lanid=12&antalrader=10000" # SKåne län
LanID_4="yrkesomradeid=3&lanid=4&antalrader=10000" # Söermans län
LanID_3="yrkesomradeid=3&lanid=3&antalrader=10000" # Uppsala län
LanID_17="yrkesomradeid=3&lanid=17&antalrader=10000" # Värmlands län
LanID_22="yrkesomradeid=3&lanid=22&antalrader=10000" # Västernorrlands län
LanID_19="yrkesomradeid=3&lanid=19&antalrader=10000" # Västmanlands län
LanID_14="yrkesomradeid=3&lanid=14&antalrader=10000" # Västra götalands län
LanID_18="yrkesomradeid=3&lanid=18&antalrader=10000" # Örebro län
LanID_5="yrkesomradeid=3&lanid=5&antalrader=10000" # Östergötlands län



# function to curl the API, format with jq and output to a file of your choosing
# @param string $1 the API-url to use
# @param string $2 the output file
function getAPItoJson {

    # If file doesn't exist, create a new and fresh one
    if [ ! -e $2 ]
    then
      curl -s -H "Accept-Language: sv" $1 | jq '.' > $2
      echo $2 "created."
    else # if the file does exist
      tempFile=$(<$2) # temp variable from file to check against new API req
      newJSON=$(curl -s -H "Accept-Language: sv" $1 | jq '.') # new JSON to test against

      #If not tempFile matches the new JSON req
      if [ ! "$tempFile" == "$newJSON" ]
      then
        echo "Updating file: " $2 "with new content."
        curl -s -H "Accept-Language: sv" $1 | jq '.' > $2
      fi
    fi
}

# Call the function for all the needed api requests and output files
getAPItoJson $URLsoklista$itfield IT-field.json
getAPItoJson $URLsoklista$ID_3511 af-api/yrkesgrupp/yrkesgruppID-3511.json
getAPItoJson $URLsoklista$ID_2516 af-api/yrkesgrupp/yrkesgruppID-2516.json
getAPItoJson $URLsoklista$ID_2512 af-api/yrkesgrupp/yrkesgruppID-2512.json
getAPItoJson $URLsoklista$ID_2516 af-api/yrkesgrupp/yrkesgruppID-2516.json
getAPItoJson $URLsoklista$ID_2512 af-api/yrkesgrupp/yrkesgruppID-2512.json
getAPItoJson $URLsoklista$ID_3514 af-api/yrkesgrupp/yrkesgruppID-3514.json
getAPItoJson $URLsoklista$ID_3512 af-api/yrkesgrupp/yrkesgruppID-3512.json
getAPItoJson $URLsoklista$ID_3513 af-api/yrkesgrupp/yrkesgruppID-3513.json
getAPItoJson $URLsoklista$ID_2511 af-api/yrkesgrupp/yrkesgruppID-2511.json
getAPItoJson $URLsoklista$ID_2515 af-api/yrkesgrupp/yrkesgruppID-2515.json
getAPItoJson $URLsoklista$ID_2514 af-api/yrkesgrupp/yrkesgruppID-2514.json
getAPItoJson $URLsoklista$ID_2513 af-api/yrkesgrupp/yrkesgruppID-2513.json
getAPItoJson $URLsoklista$ID_3515 af-api/yrkesgrupp/yrkesgruppID-3515.json
getAPItoJson $URLsoklista$ID_2519 af-api/yrkesgrupp/yrkesgruppID-2519.json

# Matching for län
getAPItoJson $URLmatching$LanID_24 af-api/lan/lanID-24.json
getAPItoJson $URLmatching$LanID_1 af-api/lan/lanID-1.json
getAPItoJson $URLmatching$LanID_10 af-api/lan/lanID-10.json
getAPItoJson $URLmatching$LanID_20 af-api/lan/lanID-20.json
getAPItoJson $URLmatching$LanID_9 af-api/lan/lanID-9.json
getAPItoJson $URLmatching$LanID_21 af-api/lan/lanID-21.json
getAPItoJson $URLmatching$LanID_13 af-api/lan/lanID-13.json
getAPItoJson $URLmatching$LanID_23 af-api/lan/lanID-23.json
getAPItoJson $URLmatching$LanID_6 af-api/lan/lanID-6.json
getAPItoJson $URLmatching$LanID_8 af-api/lan/lanID-8.json
getAPItoJson $URLmatching$LanID_7 af-api/lan/lanID-7.json
getAPItoJson $URLmatching$LanID_25 af-api/lan/lanID-25.json
getAPItoJson $URLmatching$LanID_12 af-api/lan/lanID-12.json
getAPItoJson $URLmatching$LanID_4 af-api/lan/lanID-4.json
getAPItoJson $URLmatching$LanID_3 af-api/lan/lanID-3.json
getAPItoJson $URLmatching$LanID_17 af-api/lan/lanID-17.json
getAPItoJson $URLmatching$LanID_22 af-api/lan/lanID-22.json
getAPItoJson $URLmatching$LanID_19 af-api/lan/lanID-19.json
getAPItoJson $URLmatching$LanID_14 af-api/lan/lanID-14.json
getAPItoJson $URLmatching$LanID_18 af-api/lan/lanID-18.json
getAPItoJson $URLmatching$LanID_5 af-api/lan/lanID-5.json
