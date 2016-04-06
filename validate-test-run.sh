#!/bin/bash
# validate the presence of failed.json file and fail the build if exists

if [[ ( -f failed.json ) ]]; then
    echo failed.json found - failing the build
    exit 1
fi