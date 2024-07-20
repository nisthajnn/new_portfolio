"use client";
import Image from 'next/image';
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

const iconData = [
  { url: '/images/gmail.png', link: 'https://gmail.com' },
  { url: '/images/github.png', link: 'https://github.com/nisthajnn' },
  { url: '/images/gfg.png', link: 'https://www.geeksforgeeks.org/user/nisthajnn1234/' },
  { url: '/images/lc.png', link: 'https://leetcode.com/u/Nistha_Jain/' },
  { url: '/images/twitter.png', link: 'https://x.com/nisthajnn1234' },
  { url: '/images/linkedin.png', link: 'https://www.linkedin.com/in/nistha-jain-701582202/' },
];

const Icons = () => {
  return (
    <div>
      <br />
      <br />
      <div className="flex items-center justify-center bg-base-100 dark:bg-base-900 bg-grid-dark dark:bg-grid-light">
        <div className="flex space-x-8">
          {iconData.map((icon, index) => (
            <LinkPreview key={index} url={icon.link}>
              <Image src={icon.url} alt={`icon-${index}`} width={24} height={24} />
            </LinkPreview>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Icons;
