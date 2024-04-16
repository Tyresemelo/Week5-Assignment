const form = document.getElementById("writeReview");

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

    async function getReviews() {
        const response = await fetch("http://localhost8080/review");
        const guestbook = await response.json();
        console.log(guestbook);
    }
}