"use client";
import React from "react";
import CopyrightData from "@/data/Menudata";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
const OpenSans = Open_Sans({
  subsets: ["latin"],
});

const Copyright = () => {
  return (
    <div className="copy-right">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <ul className="d-flex justify-content-center gap-4 ">
              {CopyrightData.map((item) => (
                <li key={item.title}>
                  <Link className={OpenSans.className} href={item.url}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
