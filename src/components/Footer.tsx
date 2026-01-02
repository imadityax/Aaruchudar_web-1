"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.containerMax + " " + styles.sectionPadding}>
        {/* Stats Section */}
        <div
          className={
            "grid grid-cols-2 md:grid-cols-4 text-center mb-20 pb-20 border-b border-border " +
            styles.statsGrid
          }
        >
          <div>
            <h3 className={styles.statTitle}>500+</h3>
            <p className={styles.statDesc}>Minds Transformed</p>
          </div>
          <div>
            <h3 className={styles.statTitle}>50+</h3>
            <p className={styles.statDesc}>Programs Delivered</p>
          </div>
          <div>
            <h3 className={styles.statTitle}>10+</h3>
            <p className={styles.statDesc}>Countries Reached</p>
          </div>
          <div>
            <h3 className={styles.statTitle}>98%</h3>
            <p className={styles.statDesc}>Success Rate</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand and Contact */}
          <div className="md:col-span-1">
            <h3 className={styles.brand}>Aaruchudar</h3>
            <p className="text-muted-foreground mb-4">
              Unlock your cognitive potential.
            </p>
            <a
              href="mailto:hi@aaruchudar.com"
              className="text-purple-400 hover:underline"
            >
              hi@aaruchudar.com
            </a>
          </div>
          {/* Column 2: Programs */}
          <div>
            <h4 className="font-semibold text-white mb-4">Our Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/hi-labs" className={styles.link}>
                  Human intelligence Labs
                </Link>
              </li>
              <li>
                <Link href="/hi-courses" className={styles.link}>
                  Human intelligence Courses
                </Link>
              </li>
              <li>
                <Link href="/hi-workshops" className={styles.link}>
                  Human intelligence Workshop
                </Link>
              </li>
              <li>
                <Link href="/hi-events" className={styles.link}>
                  Human intelligence Events
                </Link>
              </li>
              <li>
                <Link href="/neuro-tech-suite" className={styles.link}>
                  Neuro Tech Suite
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 3: Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className={styles.link}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className={styles.link}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className={styles.link}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/franchise1" className={styles.link}>
                  Franchise
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4">Stay Connected</h4>
            <p className="text-muted-foreground mb-4">
              Get the latest updates and insights.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className={styles.newsletterInput}
              />
              <button type="submit" className={styles.newsletterButton}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>
            &copy; {new Date().getFullYear()} Aaruchudar. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className={styles.link}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={styles.link}>
              Terms of Service
            </Link>
          </div>
          {/* Social Media */}
          <div className={styles.socialIcons}>
            <a
              href="https://twitter.com/aaruchudar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on X (Twitter)"
              className={styles.socialLink}
            >
              <svg
                className={styles.socialIcon}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-7.03l-5.5-6.57L3.756 22H.5l8.27-9.45L1.5 2h7.03l4.89 5.85L18.244 2zm-2.46 18h2.02L8.22 4h-2.02l9.586 16z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/aaruchudar/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with us on LinkedIn"
              className={styles.socialLink}
            >
              <svg
                className={styles.socialIcon}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.036-1.852-3.036-1.853 0-2.136 1.447-2.136 2.943v5.662H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.603 0 4.268 2.371 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zM3.56 20.452h3.554V9H3.56v11.452z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/aaruchudar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className={styles.socialLink}
            >
              <svg
                className={styles.socialIcon}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm6.25-2.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@aaruchudar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Subscribe to our YouTube"
              className={styles.socialLink}
            >
              <svg
                className={styles.socialIcon}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23.5 6.2a3.1 3.1 0 00-2.2-2.2C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.3.5A3.1 3.1 0 00.5 6.2C0 7.8 0 12 0 12s0 4.2.5 5.8a3.1 3.1 0 002.2 2.2c1.6.5 9.3.5 9.3.5s7.7 0 9.3-.5a3.1 3.1 0 002.2-2.2c.5-1.6.5-5.8.5-5.8s0-4.2-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
