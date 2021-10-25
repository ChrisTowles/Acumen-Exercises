#!/bin/bash


function add_column_2()
{
    # < --- FILL IN HERE
}



ans=$(add_column_2 <<EOF
1 2 3
4 5 6
7 8 9
10 11 12
100 200 300
EOF
)

if [ $ans -eq 226 ]
then
    echo That looks right
else
    echo Nope
fi
