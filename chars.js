str = `Peter Piper picked a peck of pickled peppers
A peck of pickled peppers Peter Piper picked
If Peter Piper picked a peck of pickled peppers
Where’s the peck of pickled peppers Peter Piper picked?`;
count = 0
for (i in str) {
    if (str[i] == 'o') {
        count++;
    }
}
console.log(count);