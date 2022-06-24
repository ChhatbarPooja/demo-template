import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import cover from "./assets/contact-cover.jpg";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";


const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <img
          src={cover}
          alt=""
          className="contact-bg"
          style={{ height: "90vh" }}
        />
        <div className="centered">
          Click on Sign Up
        </div>
      </div>
      <div className="modal fade" id="mymodal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="text-center text-primary">Sign Up</h3>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>
                    <PersonIcon /> UserName{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>
                    <LockIcon />
                    Password
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>
                    <EmailIcon />
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>
                    <PhoneIcon />
                    Phone no
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="form-control"
                  />
                </div>

                <div className="modal-footer">
                  <button
                    className="btn btn-danger justify-content-centered"
                    data-dismiss="modal"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
