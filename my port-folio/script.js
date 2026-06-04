// Array of items to cycle through in the gallery
const galleryItems = [
    { text: "I enjoy Web Development.", img: "https://picsum.photos/id/1018/400/250" },
    { text: "I enjoy Traveling.", img: "https://picsum.photos/id/1036/400/250" },
    { text: "I enjoy Photography.", img: "https://picsum.photos/id/1043/400/250" }
];

let currentIndex = 0;

const textElement = document.getElementById("hobby-text");
const imgElement = document.getElementById("gallery-img");
const nextButton = document.getElementById("next-btn");

nextButton.addEventListener("click", () => {
    // Move to the next item, loop back to 0 if at the end
    currentIndex = (currentIndex + 1) % galleryItems.length;
    
    // Update content
    textElement.innerHTML = `<p>${galleryItems[currentIndex].text}</p>`;
    imgElement.src = galleryItems[currentIndex].img;
});
