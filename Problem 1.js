
function createCounter() {
    let count = 0;

    function increament() {
        count++;
        return count;
    }

    function decrement() {
        count--;
        return count;
    }

    function printCount() {
        return count;
    }


    return { increament, decrement, printCount }
}


let counter = createCounter();
console.log(counter.increament())
console.log(counter.increament())
console.log(counter.increament())
console.log(counter.decrement())
console.log(counter.printCount())