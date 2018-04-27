#!/bin/bash

oldname=$1
newname=${1%.*}.css

echo "Converting $oldname to $newname"
sass $oldname $newname
# chromium newname
