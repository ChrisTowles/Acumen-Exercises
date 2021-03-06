#!/bin/bash




# Ask user for confirmation before beginning
read -p "are you sure? " ans
if [ $ans != y ] 
then
    exit 0 
fi

### countdown ten seconds
echo "Countdown.."
count=3
while [ $count -gt 0 ]
do
    echo $count
    count=count-1
    sleep 1
done

# create list of band members in file beatles
echo "John Lennon"           > beatles
echo "Paul McCartney"        > beatles
echo "George Harrison"       > beatles
echo "Ringo Starr"           > beatles


# create list of singer & songs in file playlist
echo "John Lennon: Revolution"                              >  playlist
echo "Paul McCartney: Ob-la-di, Ob-la-da"                   >> playlist
echo "George Harrison: While My Guitar Gently Weeps"        >> playlist
echo "Ringo Starr: Good Night"                              >> playlist
echo "Paul McCartney: Back in the USSR"                     >> playlist
echo "George Harrison: Everybodys Trying to Be My Baby"     >> playlist
echo "Ringo Starr: With a Little Help From My Friends"      >> playlist
echo "John Lennon: Yesterday"                               >> playlist
echo "George Harrison: Piggies"                             >> playlist
echo "Paul McCartney: I Saw her Standing there"             >> playlist
echo "Paul McCartney: I'm Happy Just to Dance With You"     >> playlist


# use the wc utility to 
# count up the number of members of the band
number_of_beatles=`wc -l beatles`

# display information to the user
echo "The $number_of_beatles members of the beatles and (some of) their songs were:"
# print the list nicely, sum up number of songs by singer
cat beatles| 
while read name 
do
    echo "Singer: $name"
    grep $name: playlist | while read artist_fn artist_ln song
        do
            echo "      $song"
        done
    songcount=`grep "$name:" playlist | wc -l `     
    echo "    Total $songcount songs"
    echo
done

# print out the longest song name
max_song_length=0
longest_song_name=""
while read song_name
do
    song_length=${#song_name}
    if [ $song_length -gt $max_song_length ] 
    then
        max_song_length=$song_length
        longest_song_name=$song_name
    fi
done < playlist
echo "Longest song name is $longest_song_name at $max_song_length characters."
