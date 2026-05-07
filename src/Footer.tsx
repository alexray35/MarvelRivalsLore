import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { SiKofi } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footerLinks">
        <p className="socialLinks">
          Made by Twisted
          <a
            href="https://x.com/ttwisted35"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://ko-fi.com/twisted35"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiKofi />
          </a>
        </p>
        <p>
          &copy; All rights reserved. Not affiliated with Marvel Entertainment,
          LLC or NetEase, Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
