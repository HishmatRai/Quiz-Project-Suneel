import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBModalFooter } from 'mdbreact';
import './signup.css';
import Logo from './../../img/quiz-logo-png-transparent.png'
import { Login } from "..";
const FormPage = () => {
  return (
      <div className="login_main" style={{marginTop:"50px",marginBottom:60}}>
    <MDBContainer>
      <MDBRow center>
        <MDBCol md="5">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">

                    {/* -----------------------------> LOGO <------------------------- */}
                  <img src={Logo}  alt="logo" className="_quiz_logo" width="100px"/>
                  <br />
                  <br />

                  {/* -----------------------------> HEADING <------------------------- */}
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>

              {/* -----------------------------> USER NAME INPUT <------------------------- */}
              <MDBInput
                label="Your full name"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />

              {/* -----------------------------> EMAI INPUT <------------------------- */}
                 <MDBInput
                label="Your email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />

              {/* -----------------------------> PASSWORD INPUT <------------------------- */}
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />

              {/* -----------------------------> FORGOT PASSWROD <------------------------- */}
              <p className="font-small blue-text d-flex justify-content-end pb-3">
                Forgot
                <a href="#!" className="blue-text ml-1">

                  Password?
                </a>
              </p>

              {/* -----------------------------> SIGN UP BUTTON <------------------------- */}
              <div className="text-center mb-3">
                <a href="/Home" className="blue-text ml-1">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Sign Up
                </MDBBtn>
                  </a>
              </div>
            </MDBCardBody>

            {/* -----------------------------> SIGN IN BUTTON  <------------------------- */}
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href="/" className="blue-text ml-1">

                  Sign in
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
};

export default FormPage;