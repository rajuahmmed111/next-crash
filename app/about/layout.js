import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div>
      <nav className="mt-6 mb-6">
            <ul className="flex gap-5">
              <li>
                <Link href="/about/mission">Mission</Link>
              </li>
              <li>
                <Link href="/about/vision">Vision</Link>
              </li>
            </ul>
          </nav>
      </div>
      {children}
    </div>
  );
};

export default layout;
