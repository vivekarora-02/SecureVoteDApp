import React from "react";
import { useState } from "react";
import "../css/user_register.css";
import Sidebar from "./Sidebar";
import SidebarUser from "./SidebarUser";
// import { auth } from './firebase';
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { firebase, auth } from "./firebase";
import fireDb from "./firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  name: "",
  aadhar: "",
  email: "",
  phone: "",
  region: "",
  district: "",
  dob: "",
  voterid: "",
  gender: "",
};

function UserRegisterForm() {
  const [mynumber, setnumber] = useState("");
  const [otp, setotp] = useState("");
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");

  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const { name, aadhar, email, phone, region, district, dob, voterid, gender } =
    state;
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name ||
      !aadhar ||
      !email ||
      !region ||
      !district ||
      !phone ||
      !dob ||
      !voterid ||
      !gender
    ) {
      // alert("Please provide value in each input field")
      toast.error("Provide each field", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      fireDb.child("registered_user").push(state, (err) => {
        if (err) {
          alert(err);
        } else {
          // alert("Data Added Successfully");
          toast.success("Data Added Successfully!!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
      // setTimeout(() => history.push("/"), 500);
      setTimeout(() => navigate("/admin/candidate-details"), 500);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  // Sent OTP
  const signin = () => {
    if (mynumber === "" || mynumber.length < 10) return;

    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    auth
      .signInWithPhoneNumber(mynumber, verify)
      .then((result) => {
        setfinal(result);
        toast("OTP Sent to your Mobile Number");
        setshow(true);
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  };

  // Validate OTP
  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        // success
        toast.success("Correct code");
      })
      .catch((err) => {
        toast.error("Wrong code");
      });
  };

  const successMessage = async (e) => {
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "Once registered, you can't change the data further !!!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Registered Successfully for Voting!!!", {
          icon: "success",
        });
      } else {
        swal("Your data is saved!");
      }
    });
  };

  const otpverified = async (e) => {
    e.preventDefault();
    swal("Good job!", "OTP Verified Successfully", "success");
  };

  return (
    <>
      <SidebarUser />
      <div className="user-register-form">
        <div className="container-registration">
          <div className="title">Voter Registration Form</div>
          <br />
          <div className="content">
            <form onSubmit={successMessage}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required=""
                    id="name"
                    name="name"
                    onChange={handleInputChange}
                    value={name}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Aadhar Number</span>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    required=""
                    id="aadhar"
                    name="aadhar"
                    onChange={handleInputChange}
                    value={aadhar}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    required=""
                    id="email"
                    name="email"
                    onChange={handleInputChange}
                    value={email}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input
                    type="text"
                    placeholder="Enter your number"
                    required=""
                    value={mynumber}
                    onChange={(e) => {
                      setnumber(e.target.value);
                    }}
                    id="phone"
                    name="phone"
                  />

                  {/* <div className="button1" onClick={signin}>
          <input type="submit" defaultValue="OTP" value="OTP"  />
        </div> */}

                  {/* <div id="recaptcha-container"></div>
					<button onClick={signin}>Send OTP</button> */}
                </div>

                {/* <div className="input-box">
            <span className="details">OTP</span>
            <input type="text" placeholder="Enter OTP" required="" onChange={(e)=>{
              setotp(e.target.value)
            }} />
            <button onClick={ValidateOtp}>Verify</button>
        </div> */}

                <div className="input-box">
                  <span className="details">State</span>
                  <input
                    type="text"
                    placeholder="Enter your state e.g. (Uttar Pradesh)"
                    required=""
                    id="region"
                    name="region"
                    onChange={handleInputChange}
                    value={region}
                  />
                </div>
                <div className="input-box">
                  <span className="details">District</span>
                  <input
                    type="text"
                    placeholder="Enter your district e.g. (Ghaziabad)"
                    required=""
                    id="district"
                    name="district"
                    onChange={handleInputChange}
                    value={district}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Date of Birth</span>
                  <input
                    type="date"
                    placeholder="Enter your password"
                    required=""
                    id="dob"
                    name="dob"
                    onChange={handleInputChange}
                    value={dob}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Voter Id</span>
                  <input
                    type="text"
                    placeholder="Enter your Voter-Id"
                    required=""
                    id="voterid"
                    name="voterid"
                    onChange={handleInputChange}
                    value={voterid}
                  />
                </div>
              </div>
              <div className="gender-details">
                <input type="radio" name="gender" id="dot-1" />
                <input type="radio" name="gender" id="dot-2" />
                <input type="radio" name="gender" id="dot-3" />
                <span className="gender-title">Gender</span>
                <div className="category">
                  <label htmlFor="dot-1">
                    <span className="dot one" />
                    <span className="gender">Male</span>
                  </label>
                  <label htmlFor="dot-2">
                    <span className="dot two" />
                    <span className="gender">Female</span>
                  </label>
                  <label htmlFor="dot-3">
                    <span className="dot three" />
                    <span className="gender">Prefer not to say</span>
                  </label>
                </div>
              </div>
              <div className="button">
                <input
                  type="submit"
                  defaultValue="Register"
                  value="Send OTP"
                  onClick={signin}
                />
              </div>
              <div id="recaptcha-container"></div>
              {/* <button >Send OTP</button> */}

              {/* /*
        <div id="recaptcha-container"></div>
					<button onClick={signin}>Send OTP</button>

          </div>
        */}
            </form>

            <form>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">OTP</span>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    required=""
                    onChange={(e) => {
                      setotp(e.target.value);
                    }}
                  />
                  <div className="button" style={{ width: "310px" }}>
                    {/* <button >Verify OTP</button> */}
                    <input
                      type="submit"
                      defaultValue="Register"
                      onClick={otpverified}
                      value="Verify OTP"
                    />
                  </div>
                  <Link to="/user/elections">
                    <div
                      className="button"
                      style={{
                        width: "310px",
                        marginTop: "-80px",
                        marginLeft: "330px",
                      }}
                    >
                      <input
                        type="submit"
                        defaultValue="Register"
                        value="Go to Elections"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default UserRegisterForm;
