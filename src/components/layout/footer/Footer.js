"use client";
import Logo from "@/svg/Logo";
import React from "react";
import { Open_Sans } from "next/font/google";
import { ResourcesData, ServicesData } from "./footerData";
import Link from "next/link";
import { PiTelegramLogoThin } from "react-icons/pi";
import Facebook from "@/svg/Facebook";
import Instagram from "@/svg/Instagram";
import Twiter from "@/svg/Twiter";
import Pre from "@/svg/pre";
import { motion } from "framer-motion";

const OpenSans = Open_Sans({
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer-logo">
              <Logo />
            </div>
            <div className={OpenSans.className + " " + "footer-pragrap"}>
              <p>
                There are many variations of passages of available, but the
                majority have suffered.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={OpenSans.className + " " + "footer-content-list"}>
              <h4>Services</h4>
              {ServicesData.map((item, i) => (
                <Link href={item.link} key={i}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-content-list">
              <h4 className={OpenSans.className}>Resources</h4>
              {ResourcesData.map((item, i) => (
                <Link className={OpenSans.className} href={item.link} key={i}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-content-subscribe">
              <h4 className={OpenSans.className}>Newsletter</h4>
              <p className={OpenSans.className}>
                Subscribe for our upcoming latest address and resources
              </p>
              <div className="newsletter-form d-flex align-items-center justify-content-between ">
                <input placeholder="Email" type="email" />
                <button>
                  <PiTelegramLogoThin />
                </button>
              </div>
              <div className="social-icon d-flex">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                  className="social-border"
                >
                  <Facebook />
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                  className="social-border"
                >
                  <Instagram />
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                  className="social-border"
                >
                  <Twiter />
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                  className="social-border"
                >
                  <Pre />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
