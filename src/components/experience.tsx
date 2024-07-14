import React from 'react';

const Experience = () => {
  return (
    <div>
      <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        My Work<span className="text-orange-500 dark:text-orange-500"> Experience</span>
      </h1>
      <br />
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">August 2024-Present</time>
            <div className="text-lg font-black">Trainee at Utragenic Research and Technologies</div>
            iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998 and has evolved through seven distinct forms.
          </div>
          <hr />
        </li>
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">May 2024-July 2024</time>
            <div className="text-lg font-black">Associate Software Engineer Intern at Appfoster</div>
            Developed and maintained a CRUD API using Laravel, enhancing backend functionality for the company's web applications. Collaborated closely with the development team to integrate API endpoints with front-end applications, ensuring seamless and efficient data communication across the system.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">August 2023 - September 2023</time>
            <div className="text-lg font-black">Web Developer Intern at Code Clause</div>
            Developed and integrated real-time code preview functionality, providing developers with immediate code output in HTML, CSS, and JavaScript. Contributed to a valuable resource for developers, resulting in a 20% increase in team productivity and skill development.
          </div>
          <hr />
        </li>
      </ul>
      <br />
      <br />
    </div>
  );
}

export default Experience;
