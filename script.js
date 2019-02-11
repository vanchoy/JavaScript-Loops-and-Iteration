var names = ['Ivan', 'Lily', 'Desy', 'Peter', 'Gosho'];
// for loops
for (var i = 0; i < 10; i++) {
    console.log(i);
}

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//reverse loop
for (var i = names.length - 1; i >= 0 ; i--) {
    console.log(names[i]);
}

// while loop
var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

//reverse while loop
var b = names.length - 1;
while (b >= 0) {
    console.log(names[b]);
    b--;
}

// break and continue statements for all kinds of loops

for (var i = 1; i <= 5; i++) {
    console.log(i);

    if (i === 3 ) {             // it stops the loop at 3
        break;
    }
}

for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;               // it skips the 3 and continues the loop
    }

    console.log(i);
}
