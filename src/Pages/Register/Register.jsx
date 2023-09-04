import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../Providers/AuthProvider";
import {updateProfile} from "firebase/auth";
import register from "../../assets/form/register.png";

const Register = () => {
  const [regError, setRegError] = useState("");

  const {createUser} = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form?.name?.value;
    const email = form?.email?.value;
    const password = form.password.value;
    const photo = form?.photoUrl?.value;
    console.log(name, email, password, photo);
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      setRegError("password need strong character ");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        updateProfile(user, {displayName: name, photoURL: photo});
        console.log("created user", createdUser);
        setRegError("");
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setRegError(error.message);
      });
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register!</h1>
            <img className="w-[600px]" src={register} alt="login" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    placeholder="photo"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="flex items-center h-5">
                  <input
                    onClick={handleAccepted}
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    disabled={!accepted}
                    className="btn btn-primary"
                    type="submit"
                    value="Register"
                  />
                </div>
              </form>
            </div>

            <p className="my-4 text-center">
              Already have an account to Toy worlds
              <Link className="text-orange-600 font-bold mx-2" to="/login">
                LogIn
              </Link>
            </p>
          </div>
          <p className="text-amber-600">{regError}</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
