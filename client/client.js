const form = document.getElementById("writeReview");

const reviewWrapper = document.getElementById("reviewWrapper");

function handleSubmit(event) {
    event.preventDefault();
    const review = event.target.review.value;

    console.log({review: review});

    fetch("http://localhost8080/review", {
        method: "POST",
        body: { review: review},
        headers: {
            "Content-Type": "application/"
        }
    });

    async function getReview() {
        const response = await fetch("http://localhost8080/review");
        const guestbook = await response.json();
        console.log(guestbook);
    }

    
async function getReview() {
const response = await fetch("http://localhost8080/guestbook");
const guestbook = await response.json();
console.log(review);

  // put the games onto the page
games.forEach(function (review) {
    // DOM manipulation to put the games onto the html
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    h2.textContent = review.title;
    p.textContent = `review: ${review.messageReview}`;


reviewWrapper.appendChild(h2);
reviewWrapper.appendChild(p);
});
}

getReview();
}