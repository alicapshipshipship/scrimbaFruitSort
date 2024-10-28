let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function put() 
{
    for (let i=0; i<fruit.length; i++) 
    {
        let f = fruit[i]
        if (f==="🍎") {
        appleShelf.textContent += f
            } else if (f==="🍊") {
                orangeShelf.textContent += f
                }
    }
}

put()
