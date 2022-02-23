export function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
    //TODO return random number in range min-max
}
export function getRandomElement(array){
    return array[Math.floor(Math.random() * array.length)]
//TODO return a random element of array
}
export function getRandomDate(minYear, maxYear){
    const start = new Date(minYear)
    const end = new Date(maxYear)
    const res = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
        return res.toDateString()
    }
//TODO return random date object(see constructor of the standart class Date)
//const date = new Date(year, month, day)

