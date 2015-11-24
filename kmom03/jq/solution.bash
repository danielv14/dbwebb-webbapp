#!/bin/bash

# 1. Hitta de 'keys' som finns i filen. Lägg svaret i filen 'a.txt'.
jq 'keys' tag-dbwebb.json | tee a.txt

# 2.
jq 'meta' tag-dbwebb.json | tee b.txt

# 3.
jq '.pagination.next_url' tag-dbwebb.json | tee c.txt

# 4.
jq '.data[9].likes.count' tag-dbwebb.json | tee d.txt

#5
jq '.data[0].tags' tag-dbwebb.json | tee e.txt

#6
jq '.data[0].user' tag-dbwebb.json | tee f.txt

#7
jq '.data[0].location.name' tag-dbwebb.json | tee g.txt

#8
jq '.data[0].comments.data[0].text' tag-dbwebb.json | tee h.txt

#9
jq '.data[0].likes.data[1].full_name' tag-dbwebb.json | tee i.txt

#10
jq '.data[0].images.standard_resolution.url' tag-dbwebb.json | tee j.txt

#11
jq '.data[].comments.data[] | select(.from.username == "alkifaey") | .text' tag-dbwebb.json | tee k.txt

#13
jq '.data[] | select(.likes.count > 3) | .link' tag-dbwebb.json | tee m.txt
