import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
  {
    title: "Stripe",
    image: "https://via.placeholder.com/150/0000FF/808080?text=Stripe", // Replace with actual image URL
  },
  {
    title: "Netflix",
    image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Netflix", // Replace with actual image URL
  },
  {
    title: "Google",
    image: "https://via.placeholder.com/150/00FF00/000000?text=Google", // Replace with actual image URL
  },
  {
    title: "Meta",
    image: "https://via.placeholder.com/150/000000/FFFFFF?text=Meta", // Replace with actual image URL
  },
  {
    title: "Amazon",
    image: "https://via.placeholder.com/150/FFA500/FFFFFF?text=Amazon", // Replace with actual image URL
  },
  {
    title: "Microsoft",
    image: "https://via.placeholder.com/150/800080/FFFFFF?text=Microsoft", // Replace with actual image URL
  },
];

const skillsgroup = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
};

export default skillsgroup;
