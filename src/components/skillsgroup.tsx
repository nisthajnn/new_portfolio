import { HoverEffect } from "./ui/card-hover-effect";
export const projects = [
  {
    title: "Javascript",
    image: "https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept-bright-vibrant-violet-isolated-illustration_335657-986.jpg?t=st=1720928131~exp=1720931731~hmac=e4170b64b7f018b0f7987bd9d36ac91cd1cf4b587d998e9b7547a0fa248c8c86&w=740", // Replace with actual image URL
  },
  {
    title: "CSS",
    image: "https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?t=st=1720928513~exp=1720932113~hmac=3a33825cf5f18907d188ff25ee4a89556fe776675dd0b67d59067334e2e9dcea&w=740", // Replace with actual image URL
  },
  {
    title: "HTML5",
    image: "https://img.freepik.com/free-vector/html5-programming-internet-website-development-web-application-engineering-script-writing-html-code-optimization-programmer-fixing-bugs_335657-2678.jpg?t=st=1720928410~exp=1720932010~hmac=42803e081a572cf40cc2cf6ff930de77660df9eae2f06777c365037eabdb4153&w=740", // Replace with actual image URL
  },
  {
    title: "React JS",
    image: "https://img.freepik.com/free-vector/creative-abstract-quantum-illustration_23-2149236239.jpg?t=st=1720928584~exp=1720932184~hmac=4d3f4e4c98cfc6ea578714d2c08c8d12f75b6505a771db8609922f816c9adc4d&w=740", // Replace with actual image URL
  },
  {
    title: "Python",
    image: "https://img.freepik.com/free-photo/ai-site-helping-with-software-production_1268-21620.jpg?t=st=1720928743~exp=1720932343~hmac=ae041292e2bec8a3106c0a816f29009dee6e21fa017d2b746f39f19d9da238ef&w=826", // Replace with actual image URL
  },
  {
    title: "Next JS",
    image: "https://img.freepik.com/free-vector/media-player-software-computer-application-geolocation-app-location-determination-function-male-implementor-programmer-cartoon-character_335657-1180.jpg?t=st=1720928806~exp=1720932406~hmac=a37440e49b95f3b454ea6db9925142bb13fd9e8ac2b99a6de33b7f94eb4807b4&w=740", // Replace with actual image URL
  },
  {
    title: "Tailwind CSS",
    image: "https://img.freepik.com/free-vector/java-developer-smartphone-software-javascript-coding-writing-application-css-programming-html-source-code-tampering-mobile-program-vector-isolated-concept-metaphor-illustration_335657-1994.jpg?t=st=1720928956~exp=1720932556~hmac=d17a5db69542b1fd449ab806753110ae3b26ce5d7239179274ecd0c85a2c5545&w=740", // Replace with actual image URL
  },
  {
    title: "GitHub",
    image: "https://img.freepik.com/free-vector/version-control-concept-illustration_114360-1566.jpg?t=st=1720929077~exp=1720932677~hmac=896e23534b29a6896d20cc998e117f004272e3b16c530cc690ec4249cfa20cdf&w=740", // Replace with actual image URL
  },
  {
    title: "MYSQL",
    image: "https://img.freepik.com/free-vector/abstract-technology-sql-illustration_23-2149237139.jpg?ga=GA1.2.1039585645.1720586620&semt=sph", // Replace with actual image URL
  },
  {
    title: "C++",
    image: "https://img.freepik.com/free-vector/coding-concept-illustration_114360-22486.jpg?t=st=1720932392~exp=1720935992~hmac=44d2e70bcc1850c82b6215c09407c8b2f4d3f7398cbe66468cb2239e68ee8231&w=740", // Replace with actual image URL
  },
  {
    title: "Laravel",
    image: "https://img.freepik.com/free-vector/single-page-application-abstract-concept-illustration-spa-web-page-web-development-trend-app-inside-browser-dynamically-rewriting-page-responsive-website-creation_335657-899.jpg?t=st=1720932539~exp=1720936139~hmac=69a1ecf11a428ee5229a781e680e8387a4f3ffe4a8e437951cfc04a4327b138d&w=740", // Replace with actual image URL
  },
  {
    title: "Operating System",
    image: "https://img.freepik.com/free-vector/new-app-development-desktop_23-2148684987.jpg?t=st=1720932531~exp=1720936131~hmac=fa0ceb64c847a695265cf46109bc82ceb4c94fcae8c587c7f472a7a5d8297633&w=740", // Replace with actual image URL
  },
];

const skillsgroup = () => {
  return (
    <div id="skills" className="max-w-6xl mx-auto px-8 text-center">
      <HoverEffect items={projects} />
    </div>
  );
};

export default skillsgroup;
