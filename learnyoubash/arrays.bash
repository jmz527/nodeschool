#!/usr/bin/env bash

arr[0]=${@:2:1}
arr[1]=${@:3:1}
arr[2]=${@:4:1}

echo "I am ${arr[0]} ${arr[1]} and ${arr[2]}"




# epithets=(I am "${@:2:2}" and "${@:4:1}")

# echo "${epithets[*]}"
