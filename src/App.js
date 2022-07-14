import React,{ useState } from "react";
import "./style.css";

export default function App() {
  const [LoginDetails, setLoginDetails] = useState({email:'',password:''});
  const [details, setDetails] = useState([]);

  let onValueChange = (e) => {
    setLoginDetails({ ...LoginDetails, [e.target.name]: e.target.value});
    console.log(LoginDetails);
  }

  let onSubmit = () => {
    // setDetails(details.push(LoginDetails));
    details.push(LoginDetails);
    console.log(details);
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p><input type="email" name="email" onChange={(e) => onValueChange(e)} placeholder="Email"/></p>
      <p><input type="password" name="password" onChange={(e) => onValueChange(e)} placeholder="Password"/></p>
      <p><button type="submit" onClick={() => setDetails([...details,LoginDetails])}>Submit</button></p>
      {details.map(data => (
        <div>
        <p>{data.email}</p>
        <p>{data.password}</p>
      </div>
      ))}
    </div>
  );
}
