function highestScore(students) {
    var obj = {};

    //cangkang
    for (i = 0; i < students.length; i++) {
        obj[students[i].class] = {
            name: '',
            score: 0
        };
    }

    //assign
    for (i = 0; i < students.length; i++) { // 0 1 2
        for (var key in obj) { //foxes, foxes -> wolves, foxes
            if (key === students[i].class) { //foxes t,  foxes -> wolves t, foxes t
                if (students[i].score > obj[key].score) { //t t f
                    obj[key].name = students[i].name; //in, not in
                    obj[key].score = students[i].score; //in
                }
            }
        }
    }

    return obj;
}

// TEST CASE
console.log(highestScore([{
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([{
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}