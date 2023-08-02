// TODO herf's are not filled out

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./css/Footer.css";

function Footer() {
  return (
    <div className="">
      <h3 className="company-name">ENTERPRISE AMERICA</h3>
      <div className="space">
        <a href="" className="youtube social">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="" className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="" className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
