import { useRef, useState } from "react";
import { useRegister } from "../hooks/useRegister";

const Register = () => {
  const userRef = useRef();
  const courseRef = useRef();
  const defaultUserData = {
    username: "",
    password: "",
    role: "",
    orgName: "",
  };
  const defaultOrgData = {
    orgName: "",
    programs: "",
  };
  const defaultProgramData = {
    progName: "",
    courses: [],
  };
  //state
  const [userData, setUserData] = useState(defaultUserData);
  const [orgData, setOrgData] = useState(defaultOrgData);
  const [programData, setProgramData] = useState(defaultProgramData);
  const [courses, setCourses] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [isUserFilled, setIsUserFilled] = useState(false);

  const { register, error, isLoading } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await register(userData.username, userData.password, userData.orgName);
  };

  const handleNext = (e) => {
    e.preventDefault();
    setIsUserFilled(true);
  };

  const handleUserChange = (event) => {
    const { name, value } = event;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleProgramChange = (event) => {
    const { name, value } = event;
    setProgramData({
      ...userData,
      [name]: value,
    });
  };
  const handleOrgChange = (event) => {
    const { name, value } = event;
    setOrgData({
      ...userData,
      [name]: value,
    });
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleAddCourse = (event) => {};

  return (
    <section className="login-main">
      <div className="row">
        <h2 className="login-heading">
          {isUserFilled ? "Add Department" : "Register"}
        </h2>
      </div>

      {isUserFilled ? (
        <form onSubmit={handleSubmit} className="login-form">
          <label>Department Name</label>
          <input
            type="text"
            name="progName"
            value={programData.progName}
            onChange={handleProgramChange}
          />
          <label>Name of Course</label>
          <input
            type="text"
            name="courseName"
            ref={courseRef}
          />
          <button
            type="button"
            className="sec-button"
            onChange={handleAddCourse}
          >
            Add Course
          </button>
          <label>List of added courses:</label>
          {courses.length !== 0 ? (
            <div className="my-4 flex"></div>
          ) : (
            <p className=" my-4 text-sm italic">No Courses added</p>
          )}
          <button disabled={isLoading}>Submit</button>
          {error && <p className="error">{error}</p>}
        </form>
      ) : (
        <form ref={userRef} onSubmit={handleNext} className="login-form">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleUserChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleUserChange}
          />
          <label>Name of Organisation</label>
          <input
            type="text"
            name="orgName"
            value={userData.orgName}
            onChange={handleOrgChange}
          />
          <button disabled={isLoading}>Next</button>
          {error && <p className="error">{error}</p>}
        </form>
      )}
      <section className="login-background"></section>
    </section>
  );
};

export default Register;
