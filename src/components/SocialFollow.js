import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faTwitter,
    faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
    return (
        <div class="social-container">
            <h3>Social Follow</h3>
            <a href="https://www.github.com/NeedaMehmud2017/"
                className="github social">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.twitter.com/needa_mehmud/"
                className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/needamehmud/"
                className="linkedin social">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
        </div>
    );
}

