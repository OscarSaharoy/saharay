#!/usr/bin/env bash

x=$(yes | head -n 3600)

for y in $x; do
    ./substitute.js
    sleep 1
done

