const writeReview = document.getElementById("writeReview");

const reviewWrapper = document.getElementById("reviewWrapper");


writeReview.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
  event.preventDefault();
  const reviewInput = event.target.review.value;
  const destinationInput = event.target.destination.value;
  console.log({ review: reviewInput });
const reviewData = { destination: destinationInput, review: reviewInput }
console.log(reviewData)
  fetch("http://localhost:8080/review", {
    method: "POST",
    body: JSON.stringify(reviewData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
async function getReview() {
    const response = await fetch("http://localhost:8080/review");
    const review = await response.json();
    console.log(review);
reviewWrapper.innerHTML = ""
    // put the games onto the page
    review.forEach(function (review) {
      // DOM manipulation to put the games onto the html
      const h2 = document.createElement("h2");
      const p = document.createElement("p");

      h2.textContent = review.destination;
      p.textContent = review.messageReview;

      reviewWrapper.appendChild(h2);
      reviewWrapper.appendChild(p);
    });
  }

  getReview();