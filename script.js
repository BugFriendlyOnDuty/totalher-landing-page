const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active classes
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    // Add to clicked tab
    tab.classList.add("active");
    const tabId = tab.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

function scrollCarousel(direction) {
  const carousel = document.querySelector(".carousel");
  const cardWidth = document.querySelector(".carousel-card").offsetWidth + 65; // card + gap

  carousel.scrollBy({
    left: direction * cardWidth,
    behavior: "smooth",
  });
}

function scrollCarouselTypeTwo(direction) {
  const carousel = document.querySelector(".carousel-container-2");
  const cardWidth = document.querySelector(".carousel-card-1").offsetWidth + 30;

  carousel.scrollBy({
    left: direction * cardWidth,
    behavior: "smooth",
  });
}

function scrollCarouselTypeThree(direction) {
  const carousel = document.querySelector(".waitlist-carousel-card-section");
  const cardWidth =
    document.querySelector(".waitlist-carousel-card").offsetWidth + 22;

  carousel.scrollBy({
    left: direction * cardWidth,
    behavior: "smooth",
  });
}

document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const isOpen = item.classList.contains("expanded");

    // Collapse all
    document.querySelectorAll(".faq-item").forEach((el) => {
      el.classList.remove("expanded");
      el.querySelector(".faq-icon").textContent = "+";
    });

    // Expand clicked if not already open
    if (!isOpen) {
      item.classList.add("expanded");
      item.querySelector(".faq-icon").textContent = "−";
    }
  });
});

const faqTabs = document.querySelectorAll(".faq-tab");
const faqContents = document.querySelectorAll(".faq-content-section");

faqTabs.forEach((tabs) => {
  tabs.addEventListener("click", () => {
    // Remove active classes
    faqTabs.forEach((t) => t.classList.remove("active"));
    faqContents.forEach((c) => c.classList.remove("active"));

    // Add to clicked tab
    tabs.classList.add("active");
    const tabId = tabs.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});
