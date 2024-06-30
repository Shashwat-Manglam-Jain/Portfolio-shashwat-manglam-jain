var typed = new Typed(".text_change", {
  strings: [
    "Full Stack Developer",
    "Kotlin App Developer",
    "Innovative Code Crafter",
    "Technology Explorer",
    "Neural Networks Enthusiast",
    "Front-end Expert",
    "Back-end Specialist",
    "Kotlin Native Builder",
    "Code Efficiency Passionate",
    "Continuous Tech Learner",
    "Neural Networks Master",
  ],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});


var change = new Typed(".change_item", {
  strings: ["Certificates", "forms", "images", "cards", "buttons", "videos"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

const loader = document.querySelector(".loader");
const item = document.querySelector("#particles-js");

window.addEventListener("load", function () {
  loader.classList.add("loader_visible");
});

whole = document.querySelector(".item_1");
const nav = document.querySelector(".cross");
whole.addEventListener("click", () => {
  whole.classList.add("item_remove");
});

const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  whole.classList.remove("item_remove");
});

const imgsk = [
  "t1.png",
  "t2.svg",
  "t3.png",
  "t4.jpeg",
  "t5.png",
  "t6.png",
  "t7.png",
  "t8.png",
  "t9.png",
  "t10.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCGkzCXNSU5iALPJz-gpsd7MrLq9X52D2GNA&s",
  "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfRklXyWQy1ditXPl8oBPdbcdjxuiVU3Z3VA&s",
  "https://static-00.iconduck.com/assets.00/django-icon-1606x2048-lwmw1z73.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4epMZqIVPHblEpc1C-OrTmfq0zmQYLradw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyya9RHo3mreo1_8Ha8ccZtAUUpaCQrN4WxA&s",
  "t11.png",
  "https://www.gstatic.com/devrel-devsite/prod/vc851b65627ca98cc752c9ae13e5f506cd6dbb7ed1bb4c8df6090c5f9130ed83c/firebase/images/touchicon-180.png",
  "t12.png",
  "https://images.vexels.com/media/users/3/139556/isolated/preview/1718a076e29822051df8bcf8b5ce1124-android-logo.png",
  "https://static.vecteezy.com/system/resources/previews/021/496/368/non_2x/ios-icon-logo-software-phone-apple-symbol-with-name-black-design-mobile-illustration-free-vector.jpg",
  "t13.png",
  "t14.png",
  "t15.png",
  "t16.png",
  "t17.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTroU91FLk1e5CTmveZCstER9A-qLpJGNtZvA&s",
  "t18.png",
  "t19.png",
];

function create_img_Skills() {
  const container = document.querySelector(".img_skill");

  imgsk.forEach((imgPath) => {
    const imgSkill = document.createElement("div");
    imgSkill.classList.add("img_skill");

    const img = document.createElement("img");
    img.src = imgPath;
    img.classList.add("imgsk1");

    imgSkill.appendChild(img);
    container.appendChild(imgSkill);
  });
}

create_img_Skills();

const pdfFiles = [
  "https://firebasestorage.googleapis.com/v0/b/fir-88300.appspot.com/o/pdf%2F1.pdf?alt=media&token=6b7483c3-89f4-4228-9df1-2b38eebf1dca",
  "https://firebasestorage.googleapis.com/v0/b/fir-88300.appspot.com/o/pdf%2F2.pdf?alt=media&token=c3926edf-7303-4445-a53b-7f540688548e",
  "https://firebasestorage.googleapis.com/v0/b/fir-88300.appspot.com/o/pdf%2F3.pdf?alt=media&token=df786988-8df3-4e93-af19-4882be91c80b",
  "https://firebasestorage.googleapis.com/v0/b/fir-88300.appspot.com/o/pdf%2F4.pdf?alt=media&token=22e517f3-dcff-481e-9883-b093f4195e13",
  "https://firebasestorage.googleapis.com/v0/b/fir-88300.appspot.com/o/pdf%2F5.pdf?alt=media&token=64cde54c-25e3-4d23-9668-fe35231ba682",
  "https://firebasestorage.googleapis.com/v0/b/fir-88300.appspot.com/o/pdf%2F6.pdf?alt=media&token=026a6058-720b-46dd-944f-dfdb73dff669",
  "https://firebasestorage.googleapis.com/v0/b/fir-88300.appspot.com/o/pdf%2F7.pdf?alt=media&token=b79570f1-a75d-4e19-bf46-e88e75186f28",
  "https://firebasestorage.googleapis.com/v0/b/fir-88300.appspot.com/o/pdf%2F8.pdf?alt=media&token=8b4ac63f-c48f-402a-9f36-90f70d1e0df3",
  "https://firebasestorage.googleapis.com/v0/b/fir-88300.appspot.com/o/pdf%2F9.pdf?alt=media&token=04dd5c4c-a64b-4d61-828c-213e8a34ecf6",
  "https://firebasestorage.googleapis.com/v0/b/fir-88300.appspot.com/o/pdf%2F10.pdf?alt=media&token=2d4f7a0d-b3f2-44d0-83e3-f811808af47c",
];

// Function to create iframe elements for each PDF
function createEmbedElements() {
  const container = document.querySelector(".pdf_1");

  pdfFiles.forEach((file, index) => {
    const embed = document.createElement("iframe");
    embed.src = file;
    embed.width = "450px";
    embed.height = "400px";
    embed.style.position = "relative";
    container.appendChild(embed);
  });
}

// Call the function to create iframe elements
createEmbedElements();
const skills = [
  "Machine Learning",
  "Deep Learning",
  "Tensorflow",
  "Convolution Neural Network (CNN)",
  "Artificial Neural Network (ANN)",
  "Recurrent Neural Network (RNN)",
  "Long Short-term Memory (LSTM)",
  "Gated Recurrent Unit (GRU)",
  "Transformers",
  "Statistical Data Analysis",
  "Data Analysis",
  "MLOps",
  "Computer Vision",
  "Android app development Kotlin",
  "Scikit-learn",
  "Numpy",
  "Pandas",
  "Flask",
  "Django",
  "Nextjs",
"MS Excel",
  "Matplotlib",
  "Open Cv",
  "Web Scrapping selenium",
  "Seaborn",
  "MERN Stack",
  "Firebase",
  "React Native",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "ExpressJS",
  "SQL",
  "NodeJS",
  "MongoDB",
  "Rest API",
  "Data Structures and Algorithms",
];

const proficiencyLevels = [
  "80%",
  "84%",
  "85%",
  "82%",
  "88%",
  "81%",
  "83%",
  "88%",
  "86%",
  "88%",
  "85%",
  "88%",
  "86%",
  "81%",
  "83%",
  "88%",
  "84%",
  "87%",
  "89%",
  "82%",
  "86%",
  "86%",
  "82%",
  "81%",
  "80%",
  "85%",
  "86%",
  "81%",
  "88%",
  "83%",
  "88%",
  "87%",
  "89%",
  "82%",
  "86%",
  "88%",
  "85%",
  "86%",
];

function createSkillElements() {
  const skillContainer = document.querySelector(".scol");

  skills.forEach((skill, index) => {
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("sdivide");

    const skillName = document.createElement("p");
    skillName.classList.add("skl1");
    skillName.textContent = skill;

    const skillProficiency = document.createElement("p");
    skillProficiency.classList.add("skl2");
    skillProficiency.style.top = "0.8rem";
    skillDiv1 = document.createElement("div");
    skillDiv1.classList.add("skl1");
    skillDiv1.textContent = proficiencyLevels[index];

    skillDiv.appendChild(skillName);
    skillDiv.appendChild(skillProficiency);
    skillDiv.append(skillDiv1);

    skillContainer.appendChild(skillDiv);
  });
}

createSkillElements();

// Assuming the arrays are defined as below:
const img_proj = [
  "https://images.onlymyhealth.com/imported/images/2023/July/19_Jul_2023/Main-breastcancer.jpg",
  "https://miro.medium.com/v2/resize:fit:1400/1*3s9o9OS4nvqapikmBiiJow.jpeg",
  "https://mishra-18.github.io/images/MRI.png",
];

const title = [
  "Breast Cancer Detection using Machine Learning",
  "Netflix Stock Price Predictor using Machine Learning",
  "Deep Learning-Based Semantic Segmentation for Tumor Detection in MRI Brain Scans",
];

const live = ["https://shashwat100k.pythonanywhere.com/", "#", "#"];
const github = [
  "https://github.com/Shashwat-Manglam-Jain/Breast_Cancer_Predictor_ML",
  "https://github.com/Shashwat-Manglam-Jain/Netflix-Stock-Price-Predictor",
  "#",
];
const technology = [
  "Machine Learning, numpy, sklearn, pandas, Kaggle_dataset",
  "Machine Learning, numpy, sklearn, pandas, Kaggle_dataset",
  "Deep Learning, Docker, Streamlit, PyTorch",
];

// Define the p1 element
const p1 = document.querySelector(".p1");

// Function to create a project information element
function project(index) {
  const i1 = document.createElement("div");
  i1.classList.add("p0");

  const i2 = document.createElement("img");
  i2.classList.add("p3");
  i2.src = img_proj[index];
  i1.appendChild(i2);

  const i3 = document.createElement("p");
  i3.classList.add("deep");
  i3.textContent = title[index];
  i1.appendChild(i3);

  const i4 = document.createElement("h5");
  i4.classList.add("p4");
  i4.innerHTML = "Go Check it Out! The Project is ";

  const i5 = document.createElement("a");
  i5.style.color = "blue";
  i5.href = live[index];
  i5.textContent = "Live on";
  i5.target = "_blank";
  i4.appendChild(i5);
  i1.appendChild(i4);

  const i6 = document.createElement("h5");
  i6.classList.add("p4");
  i6.innerHTML = "Source Code of Project is ";

  const i7 = document.createElement("a");
  i7.style.color = "red";
  i7.href = github[index];
  i7.textContent = "Github Link";
  i7.target = "_blank";
  i6.appendChild(i7);
  i1.appendChild(i6);

  const i8 = document.createElement("p");
  i8.classList.add("p5");
  i8.textContent = "Technologies: ";
  i1.appendChild(i8);

  const i9 = document.createElement("p");
  i9.classList.add("p6");
  i9.textContent = technology[index];
  i1.appendChild(i9);

  // Append the project information element to the container
  p1.appendChild(i1);
}

// Function to loop through each project and create a project information element
function createProjects() {
  for (let i = 0; i < img_proj.length; i++) {
    project(i);
  }
}

// Call the createProjects function to generate all project elements
createProjects();

function sendEmail() {
  const firstName = document.querySelector(".n1").value;
  const lastName = document.querySelectorAll(".n1")[1].value;
  const email = document.querySelector(".eml").value;
  const message = document.querySelector(".msg").value;

  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("Email:", email);
  console.log("Message:", message);

  Email.send({
    SecureToken: "3a250cc5-d6bc-4cab-ad20-116b5e7422be",
    To: "shashwat100k@gmail.com",
    From: "shashwat100k@gmail.com",
    Subject: "Contact Form Enquiry",
    Body: `
      Name: ${firstName} ${lastName}
      <br>Email: ${email}
      <br>Message: ${message}
    `,
  })
    .then((response) => alert("Email sent successfully!"))
    .catch((error) => alert("Failed to send email: " + error));
}

document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("vdo1");
  video.addEventListener("canplay", function () {
    video.play();
  });
  video.addEventListener("loadedmetadata", function () {
    this.playbackRate = 2.0; // Double the speed
  });
});

function btnclk() {
  window.open(
    "https://github.com/Shashwat-Manglam-Jain/Netflix-Clone-Reactnative",
    "_blank"
  );
}

function btn1clk() {
  window.open(
    "https://github.com/Shashwat-Manglam-Jain/ecomerse-reactnative-app",
    "_blank"
  );
}



const img_projs = [
  "https://i.pcmag.com/imagery/articles/07x3Qi118xyGJz8uN8v6tHm-1..v1616686921.jpg",
  "https://miro.medium.com/v2/resize:fit:1358/1*AslhBVYq8xrUxxsrjC4V9Q.jpeg",
  "https://i2.wp.com/1.bp.blogspot.com/-RP5m-XGk7aU/Xd-ailWVZnI/AAAAAAAAKgo/gC24DrIKNEY1DutP3bR7TqfcqNY-SCp4gCLcBGAsYHQ/s1600/youtube-home-page-c.jpg",
  "https://w3layouts.com/wp-content/uploads/2021/06/Electronics-Mart-eCommerce-website-template-1-scaled.jpg",
  "https://static.wixstatic.com/media/dea07e_253bf1a812964149844d0058bce73b6a~mv2.jpg/v1/fit/w_2500,h_1330,al_c/dea07e_253bf1a812964149844d0058bce73b6a~mv2.jpg",
  "https://camo.githubusercontent.com/eb7cad2c645317df45c5823005187c55de709699e60daca24ee243805bb5aa48/68747470733a2f2f636c69636b75702e636f6d2f626c6f672f77702d636f6e74656e742f75706c6f6164732f323031392f30312f746f2d646f2d6c6973742d617070732d3134303078313035302e706e67",
  "https://meon.co.in/static/meon/img/New-website-images/solution/online-calculator/calculator-2.png",
  "https://image.cdn2.seaart.ai/2023-08-16/14530547034359813/f60b32f769a51817a19a734fb92bf6d1659f4167_high.webp"
];

const titles = [
  "Spotify app clone ",
  "Webecommerce Website",
  "Youtube Clone",
  "Shopping Website",
  "Bussiness Website",
  "Todo List",
  "Calculator",
  "Parallax Website"
];

const lives = [
  "https://spotify-clone-shashwat-manglam-jain.netlify.app/",
  "https://webecomerse-website.netlify.app/",
  "https://youtube-clone-shashwat.netlify.app/",
  "#",
  "https://ecomerse-react-website-shashwat.netlify.app/",
  "https://todolist-reactjs-shashwat.netlify.app/",
  "https://simple-calculator-shashwat.netlify.app/",
  "https://shashwat-manglam-jain.github.io/parallax-website-1/"
];
const githubs = [
  "https://github.com/Shashwat-Manglam-Jain/spotify-clone-full-stack",
  "https://github.com/Shashwat-Manglam-Jain/Webcomerse",
  "https://github.com/Shashwat-Manglam-Jain/Youtube-Clone",
  "#",
  'https://github.com/Shashwat-Manglam-Jain/Ecomerse-React',
  "https://github.com/Shashwat-Manglam-Jain/Todo-List",
  "https://github.com/Shashwat-Manglam-Jain/Calculator",
  "https://github.com/Shashwat-Manglam-Jain/parallax-website-1"
];
const technologys = [
  "Javascript , Spotify api , React js , Spotify Backend , Queue data structure",
  "Javascript , React js , Redux-cli , Context api , Tailwind , Node js , Google map api",
  "Javascript , React js , Rapid api, Node js , Context api",
  "Javascript , Next js , Firebase , CURD , Payment- Stripe",
  "Javascript , React js , Google map api , Frontend",
  "Javascript , React js , Localstorage , Frontend",
  "Javascript , React js , Localstorage , Frontend",
  "Javascript , HTML , CSS , Frontend",
];

// Define the p1 element
const p1s = document.querySelector(".web");

// Function to create a project information element
function webapp(index) {
  const i1 = document.createElement("div");
  i1.classList.add("p0");

  const i2 = document.createElement("img");
  i2.classList.add("p3");
  i2.src = img_projs[index];
  i1.appendChild(i2);

  const i3 = document.createElement("p");
  i3.classList.add("deep");
  i3.textContent = titles[index];
  i1.appendChild(i3);

  const i4 = document.createElement("h5");
  i4.classList.add("p4");
  i4.innerHTML = "Go Check it Out! The Project is ";

  const i5 = document.createElement("a");
  i5.style.color = "blue";
  i5.href = lives[index];
  i5.textContent = "Live on";
  i5.target = "_blank";
  i4.appendChild(i5);
  i1.appendChild(i4);

  const i6 = document.createElement("h5");
  i6.classList.add("p4");
  i6.innerHTML = "Source Code of Project is ";

  const i7 = document.createElement("a");
  i7.style.color = "red";
  i7.href = githubs[index];
  i7.textContent = "Github Link";
  i7.target = "_blank";
  i6.appendChild(i7);
  i1.appendChild(i6);

  const i8 = document.createElement("p");
  i8.classList.add("p5");
  i8.textContent = "Technologies: ";
  i1.appendChild(i8);

  const i9 = document.createElement("p");
  i9.classList.add("p6");
  i9.textContent = technologys[index];
  i1.appendChild(i9);

  // Append the project information element to the container
  p1s.appendChild(i1);
}

function createsProjects() {
  for (let i = 0; i < img_projs.length; i++) {
    webapp(i);
  }
}

// Call the createProjects function to generate all project elements
createsProjects();
