let name=[ 3,4,67,88,54,1,5,09,775,10];
console.log(name[0],name[1],name[2],name[3],name[4],name[5],name[6]);

//task2

// let books={title:'war',pageCount:100,genre:'drama'};
// console.log(books.pageCount);
// console.log(books['genre'])
let books={
    title:'war',
    pageCount:100,
    genre:'drama',
    autors:[
        {
            name: 'ivan',
            username:'telecyk',
            password:'vpechy',
        },
        {
            name: 'taras',
            username:'telecyk',
            password:'gory',
        },
        {name: 'petro',
            username:'telecyk',
            password:'djava',
        }
    ]
};



console.log(books.autors[0].password);


//task3


//let x=1;
 //let x=1;
//let x=0;

// let x=-3;
//
// if(x!==0){
//  console.log('вірно')
// }
// else {
//   console.log('невірно')
// }

//task4
let time=6
if(time >=0 && time <=14) {
    console.log(1)
}
if(time >=15 && time <=29) {
    console.log(2)
}

    if(time >=29 && time <=44) {
        console.log(3)
    }
if(time >=45 && time <=60) {
    console.log(4)
}

//task5

// falsy  null, undefined, false
//
// let x = null || 'default';
// console.log(x)
//
// let x = null;
// let y = x || 'default';

let x = null;
let x1 = false;

let y = x || x1 || 'default';

//last task
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration>5
    ||coursesAndDurationArray[1].monthDuration>5
    ||coursesAndDurationArray[2].monthDuration>5
    ||coursesAndDurationArray[3].monthDuration>5
    ||coursesAndDurationArray[4].monthDuration>5
    ||coursesAndDurationArray[5].monthDuration>5
)
{
    console.log('супер')
}

