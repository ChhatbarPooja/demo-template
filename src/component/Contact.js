import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import cover from './assets/contact-cover.jpg';
// import { FaLock } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Navbar />

      <img src={cover} alt="" className='contact-bg' style={{ height: '90vh' }} />


      {/* <button className="btn btn-info pr-3" data-target="#mymodal" data-toggle="modal">Sign Up</button> */}
      <div className="modal fade" id="mymodal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="text-center text-primary">Sign Up</h3>
              <button type="button" className="close" data-dismiss="modal"></button>

            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>
                  {/* <i><FaLock /></i> */}


                    UserName</label>


                  <input type="text" name="name" required className="form-control" />

                </div>
                <div className="form-group">
                  <label><i className="fa-solid fa-lock"></i>


                    Password</label>


                  <input type="text" name="name" required className="form-control" />

                </div>

                <div className="form-group">
                  <label><i className="fa-solid fa-envelope"></i>


                    Email</label>


                  <input type="text" name="name" required className="form-control" />

                </div>

                <div className="form-group">
                  <label><i className="fa-solid fa-phone" style={{ fontSize: '30px' }}></i>


                    Phone no</label>


                  <input type="text" name="name" required className="form-control" />

                </div>
                <div className="modal-footer">
                  <button className="btn btn-danger justify-content-centered" data-dismiss="modal">Submit</button>
                </div>


              </form>
            </div>
          </div>

        </div>
      </div>


      <Footer />



    </>

  )
}

export default Contact