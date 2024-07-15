import { links } from "@/config";
export const projects = [
    {
      id: 1,
      title: "FigPro - Collaborative Design Tool",
      des: "A collaborative design tool with real-time collaboration, vector editing, and a responsive UI.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://clone-figmaa.netlify.app",
      sourceCode: "https://github.com/sanidhyy/figma-clone",
    },
    {
      id: 2,
      title: "Yoom - Video Conferencing App",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://clone-yoom.netlify.app",
      sourceCode: "https://github.com/sanidhyy/zoom-clone",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://ai-imaginify.netlify.app",
      sourceCode: "https://github.com/sanidhyy/imaginify",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://app-iphone.netlify.app",
      sourceCode: "https://github.com/sanidhyy/apple-clone",
    },
  ] as const;