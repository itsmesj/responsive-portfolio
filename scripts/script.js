const vid = document.getElementById("vids-btn");
const obj = document.getElementById("obj-btn");
const gops = document.getElementById("gops-btn");
//project toggle
function projectActive(projectId) {
  if (projectId === "video-streaming") {
    vid.style.borderBottom = "2px solid orange";
    obj.style.border = "none";
    gops.style.border = "none";
  } else if (projectId === "object-detection") {
    obj.style.borderBottom = "2px solid orange";
    vid.style.border = "none";
    gops.style.border = "none";
  } else {
    gops.style.borderBottom = "2px solid orange";
    vid.style.border = "none";
    obj.style.border = "none";
  }
}

// Function to open the modal
function openModal(modalId) {
  document.getElementById(modalId).classList.remove("hidden");
}

// Function to close the modal
function closeModal(modalId) {
  document.getElementById(modalId).classList.add("hidden");
}

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const navLinks = document.getElementById("nav-links");

// Ensure the mobile menu is hidden initially and the hamburger icon is visible
mobileMenu.classList.add("hidden");

hamburger.addEventListener("click", () => {
  // Toggle the mobile menu visibility
  mobileMenu.classList.toggle("hidden");

  // Toggle between hamburger icon (fa-bars) and close icon (fa-times)
  if (hamburgerIcon.classList.contains("fa-bars")) {
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-times"); // Change to 'X'
  } else {
    hamburgerIcon.classList.remove("fa-times");
    hamburgerIcon.classList.add("fa-bars"); // Change back to hamburger
  }
});

// Optional: Close mobile menu if any link is clicked
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden"); // Hide menu
    hamburgerIcon.classList.remove("fa-times");
    hamburgerIcon.classList.add("fa-bars"); // Reset to hamburger icon
  });
});

emailjs.init("tK_x9if5WPjE_WFfQ"); // Replace with your EmailJS public key

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const responseMessage = document.getElementById("response-message");

    emailjs.sendForm("service_zjw03uk", "template_sl2kywg", this).then(
      function (response) {
        // Show success message
        responseMessage.textContent =
          "Your message has been sent successfully!";
        responseMessage.classList.remove("hidden", "text-red-500");
        responseMessage.classList.add("text-green-500");

        // Clear form fields
        document.getElementById("contact-form").reset();
      },
      function (error) {
        // Show error message
        responseMessage.textContent =
          "Oops! Something went wrong. Please try again.";
        responseMessage.classList.remove("hidden", "text-green-500");
        responseMessage.classList.add("text-red-500");
      }
    );
  });

const projects = {
  "video-streaming": {
    title: "Video Streaming App",
    description:
      "<b>Full Stack Development: </b>Created a fully responsive MERN stack web application with RESTful APIs resulting in a streamless UX leading 20% user retention.<br><b>Key features: </b>Implemented functionality such as video upload, CRUD operations, user subscriptions, video cards list, video player, and secure user authentication.<br><b>Technologies used: </b><i>MERN Stack (MongoDB, Express.js, React.js, Node.js), Bootstrap, Vite, JSX, JSON, JWT, Javascript, CSS, HTML, NPM, Microsoft Visual Studio Code IDE</i>",
    duration: "Duration: 4 months [March 2024 - July 2024]",
    images: [
      "/assets/vid-stream/vid1.png",
      "/assets/vid-stream/vid2.png",
      "/assets/vid-stream/vid3.png",
      "/assets/vid-stream/vid4.png",
      "/assets/vid-stream/vid5.png",
      "/assets/vid-stream/vid6.png",
      "/assets/vid-stream/vid7.png",
      "/assets/vid-stream/vid8.png",
      "/assets/vid-stream/vid9.png",
      "/assets/vid-stream/vid10.png",
      "/assets/vid-stream/vid11.png",
      "/assets/vid-stream/vid12.png",
      "/assets/vid-stream/vid13.png",
      "/assets/vid-stream/vid14.png",
      "/assets/vid-stream/vid15.png",
      "/assets/vid-stream/vid16.png",
      "/assets/vid-stream/vid17.png",
      "/assets/vid-stream/vid18.png",
      "/assets/vid-stream/vid19.png",
      "/assets/vid-stream/vid20.png",
      "/assets/vid-stream/vid21.png",
      "/assets/vid-stream/vid22.png",
      "/assets/vid-stream/vid23.png",
    ],
    github: "https://github.com/itsmesj/VideoStreamingApp",
  },
  "object-detection": {
    title: "Object Detection",
    description:
      "<b>Model Analysis:</b> Conducted an in-depth analysis of various object detection pretrained models, evaluating their efficiency, limitations, and performance, leading to a 15% improvement in model selection for specific tasks.<br><b>GUI Application Development:</b> Designed and developed a GUI application that utilizing a Mask RCNN pre-trained model on a tested dataset, achieving a 90% accuracy rate.<br><b>Tech Stack:</b> <i>Python, Tkinter (GUI), Pytorch, OpenCV, Torchvision, Pandas, Numpy, DeepFace model, MaskRCNN Resnet 50 FPN pre-trained model, Spyder (Anaconda) IDE</i>",
    duration: "Duration: 4 months [September 2023 - December 2024]",
    images: [
      "/assets/obj-detect/obj1.png",
      "/assets/obj-detect/obj2.png",
      "/assets/obj-detect/obj3.png",
      "/assets/obj-detect/obj4.png",
      "/assets/obj-detect/obj5.png",
      "/assets/obj-detect/obj6.png",
      "/assets/obj-detect/obj7.png",
    ],
    github: "https://github.com/itsmesj/Object_Detection_Application",
  },
  groceryops: {
    title: "GroceryOps",
    description:
      "<b>GUI application development:</b> Built an intuitive GUI application to streamline inventory, bills, and staff resulting in 35% reduction of data entry errors and achieved more accuracy through automation.<br><b>Tech Stack:</b> <i>Java, Swing controls, AWT controls, JDBC, MySQL, Apache Netbeans 18 IDE, Jasper Reports</i>",
    duration: "Duration: 4 months [April 2023 - July 2023]",
    images: [
      "/assets/gops/gops1.png",
      "assets/gops/gops2.png",
      "/assets/gops/gops3.png",
      "/assets/gops/gops4.png",
      "/assets/gops/gops5.png",
      "/assets/gops/gops6.png",
      "/assets/gops/gops7.png",
      "/assets/gops/gops8.png",
      "/assets/gops/gops9.png",
      "/assets/gops/gops10.png",
      "/assets/gops/gops11.png",
    ],
    github: "https://github.com/itsmesj/Grocery_Management_System",
  },
};

let currentIndex = 0;

function selectProject(projectId) {
  const project = projects[projectId];
  if (!project) return;

  const carouselImages = document.getElementById("carousel-images");
  carouselImages.innerHTML = project.images
    .map(
      (img) =>
        `<img src="${img}" class="w-full flex-none rounded-lg h-full object-contain bg-transparent" style="flex: 0 0 100%;">`
    )
    .join("");
  currentIndex = 0;

  // Show/Hide Buttons
  toggleButtons(project.images.length > 1);

  // Update Info
  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-description").innerHTML =
    project.description;
  document.getElementById("project-duration").textContent = project.duration;
  document.getElementById("project-link").href = project.github;
  document.getElementById("project-link").style.visibility = "visible";
  document.getElementById("project-link").style.display = "inline-block"; // Or 'inline-block' based on your layout
}

function toggleButtons(show) {
  document.getElementById("prev-btn").classList.toggle("hidden", !show);
  document.getElementById("next-btn").classList.toggle("hidden", !show);
}

function scrollCarousel(direction) {
  const carouselImages = document.getElementById("carousel-images");
  const totalItems = carouselImages.children.length;
  if (direction === "next" && currentIndex < totalItems - 1) {
    currentIndex++;
  } else if (direction === "prev" && currentIndex > 0) {
    currentIndex--;
  }
  carouselImages.scrollLeft = carouselImages.clientWidth * currentIndex;
}

document
  .getElementById("prev-btn")
  .addEventListener("click", () => scrollCarousel("prev"));
document
  .getElementById("next-btn")
  .addEventListener("click", () => scrollCarousel("next"));
