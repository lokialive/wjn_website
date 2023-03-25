import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Coded by{" "}
        <a
          className="font-medium"
          href="https://estellaqiao.vercel.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Estella Qiao
        </a>{" "}
        with
        <span className="text-gradient font-medium"> Love</span> &
        <span className="text-gradient font-medium"> More Love</span>
      </p>
    </footer>
  );
}
export default Footer;
