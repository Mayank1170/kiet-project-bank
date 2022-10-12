import React, { Component } from "react";
import "./LinkButton.css";
import scrollDown from "./scroll-down.svg";

class LinkButton extends Component {
  render() {
    return (
      <div className="LinkButton-Wrapper">
                  <img src="https://yt3.ggpht.com/ytc/AKedOLT0VVKk9ygwBeGsZy6BOtuKupISZrJjVjdLj4JPkA=s900-c-k-c0x00ffffff-no-rj" alt="" srcset="" width={360} height={350}/>

        <a
          className="LinkButton"
          href="https://github.com/Mr-Sunglasses/kiet-project-bank/blob/master/README.md"
        >
          <span> Get started </span>
        </a>
        <a
          className="LinkButton"
          href="https://kietprojectbank-opensource.netlify.app/"
        >
          <span> Open-Source Projects </span>
        </a>
        <div className="Scroll-Down-Wrapper">
          <img className="Scroll-Down" onClick={() => { window.scrollBy({ top: window.innerHeight - 80, left: 0, behavior: "smooth" }); }} src={scrollDown} alt="Scroll Down!" width="64" height="64" />
        </div>
      </div>
    );
  }
}

export default LinkButton;
