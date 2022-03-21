let text = document.getElementById('text');
let butão = document.getElementById('btn');
let autor = document.getElementById('autor');

var autoria = ["Joyce Carol Oates", "Amy Poehler", "Eckhart Tolle", "Elizabeth Gilbert", "Friedrich Nietzsche", "Ice-T", "Jodi Picoult", "Joe Manganiello",];
    
    const array = [
        "In love there are two things: bodies and words.", "Continue to share your heart with people even if it has been broken.",
        "To love is to recognize yourself in another.", "To be fully seen by somebody, then, and be loved anyhow - this is a human offering that can border on miraculous.",
        "There is always some madness in love. But there is also always some reason in madness.", "Passion makes the world go 'round. Love just makes it a safer place.", 
        "I believe in love. I think it just hits you and pulls the rug out from underneath you and, like a baby, demands your attention every minute of the day.",
        "When you find that one that's right for you, you feel like they were put there for you, you never want to be apart." 
    ]

    let number = 0;



function main() {
    

    butão.addEventListener('click', function getPhrase() {
        text.innerHTML = array[number];
        autor.innerHTML = autoria[number]
        console.log(number);
        number = Math.floor(Math.random() * array.length);
    })

}

main();