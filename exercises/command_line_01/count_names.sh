#!/bin/bash


#function to echo out each name and how many times it appears in the list from stdin
function unique_counts() {

    # < --- FILL IN HERE

}

#function to echo out the single name with the most appearances in the list from stdin
function largest_number_of_repeats()
{

    # < --- FILL IN HERE
    
}

#create a data file
cat >input_data_file.txt <<EOF
fred
alice
bob
callie
bob
fred
alice
mervyn
callie
charlie
fredrico
ernestine
aderyn
goldwyn
nerva
mervyn
callie
fred
alice
sofia
koji
enkidu
EOF

echo "The count of each name is:"
unique_counts<input_data_file.txt

echo "The name repeated most often is"
largest_number_of_repeats < input_data_file.txt

rm -i input_data_file.txt


#Output should look like
#The count of each name is:
#      1 aderyn
#      3 alice
#      2 bob
#      3 callie
#      1 charlie
#      1 enkidu
#      1 ernestine
#      3 fred
#      1 fredrico
#      1 goldwyn
#      1 koji
#      2 mervyn
#      1 nerva
#      1 sofia
#The name repeated most often is
#  fred
#
#Hint: it's good to use standard utilities

