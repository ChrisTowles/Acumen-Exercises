#!/bin/bash


testfiles="test1.text test2.text test3.text"

#create test files
touch $testfiles
echo
echo
echo "Here are files before rename"
echo test*xt
#rename all the test files from .text to .txt

# < --- FILL IN HERE


echo
echo
echo "Here are files after rename"
echo test*xt
echo
echo removing test files
#remove the test files

rm -if test1.text test2.text test3.text test1.txt test2.txt test3.txt