import React from "react";
import "./footer.css";
import place from "../../images/footerImages/place.png";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContainerChild">
        <div className="footerCard">
          <div className="footerCardChild">
            <p className="contacts">Կոնտակնտեր</p>
            <div className="address">
              <img src={place} />
              Մ. Մաշտոց պող., Սարմենի 1 փ.
            </div>
            <div className="address">
              <img src={place} />
              Էլ-հասցե: info@webex.am
            </div>
            <div className="address">
              <img src={place} />
              Հեռ: +374 60 37 10 20
            </div>
          </div>
        </div>
        <div className="footerCard">
          <div className="footerCardChild">
            <p className="contacts">Մեր մյուս ռեսուրսները</p>
            <div className="address">Մ. Մաշտոց պող., Սարմենի 1 փ.</div>
            <div className="address">Էլ-հասցե: info@webex.am</div>
            <div className="address">Հեռ: +374 60 37 10 20</div>
          </div>
        </div>
        <div className="footerForm">
          <div className="footerFormChild">
            <p className="connecting">Կապ մեզ հետ</p>
            <form className="addressForm">
              <input
                className="addressInp"
                type="email"
                placeholder="Էլ փոստ"
              />
              <textarea className="message" placeholder="Նամակ"></textarea>
              <button className="send">Ուղարկել</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
