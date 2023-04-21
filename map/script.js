const numbers = [21, 37, 64, 99, 142];
const negatives = numbers.map(function(num) {
    return num * -1
})

const doubles = numbers.map(function(num) {
    console.log(num *2);
});


const todos = [
    {
        id: 1,
        text: 'fold the clothes',
        priority: 'low'
    },
    {
        id: 2,
        text: 'go to sleep',
        priority: 'high'
    },
    {
        id: 3,
        text: 'run 2 miles',
        priority: 'medium'
    },
    {
        id: 4,
        text: 'eat xiaolongbao',
        priority: 'high'
    },
];

const todoText = todos.map(function(todo){
    return todo.text
});

const links = Array.from(document.querySelectorAll('a'));
//Note that links is NOT an array, it's a node list, so it doesn't come w/ array methods
//workaround: Array.from(links)
const urls = links.map(function(a){
    return a.href
})

//my map array to convert temps in Farenheit to Celcius
tempsInFarenheit = [89, 75, 45, 32, 20, -10];
const tempsInCelcius = tempsInFarenheit.map(function(tempInF){
    return Math.floor((tempInF - 32) * (5/9));
})


//Skeleton of the 'map' method

function myMap(arr, callback) {
    const mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(callback(arr[i]));
    }
    return mappedArray
}

const priorityMap = myMap(todos, function(todo){
    return todo.priority;
});
