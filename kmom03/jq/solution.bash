#!/bin/bash

# 1. Hitta de 'keys' som finns i filen. Lägg svaret i filen 'a.txt'.
jq 'keys' tag-dbwebb.json | tee a.txt

# 2.
jq 'meta' tag-dbwebb.json | tee b.txt
