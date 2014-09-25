#!/bin/bash
#Skript pro generování miniatur fotek kandidátů na titulní stránku

mogrify -format jpg -path thumbnails -thumbnail 56x63 *.jpg
