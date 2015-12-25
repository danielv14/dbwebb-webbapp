#!/bin/bash

# Variables for curl requests
itfield=http://api.arbetsformedlingen.se/af/v0/platsannonser/soklista/yrkesgrupper?yrkesomradeid=3 # Listar IT yrkesområdet och dess grupper med antal lediaga jobb och platsannonser

# function to curl the API, format with jq and output to a file
# @param string $1 the API-url to use
# @param string $ the output file
function getAPItoJson {
  curl -s -H "Accept-Language: sv" $1 | jq '.' > $2
}

# Call the function for all the needed api requests and output files

getAPItoJson $itfield yrkesområde.json
