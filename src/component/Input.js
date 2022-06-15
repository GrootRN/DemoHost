import React, { useState } from "react";
import '../css/FormLogin.css'


const Input = () => {
  const [data, setData] = useState({
    fname: '',
    email: '',
    password: ''
  });


  const updateData = (e) => {

    const { name, value } = e.target;

    setData((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  const Submit = async (e) => {
    e.preventDefault();

    const { fname, email, password } = data;

    if (fname && email && password) {
      const res = await fetch('https://realtimedatabase-f66a9-default-rtdb.firebaseio.com/Form.json', {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({
          fname,
          email,
          password
        })
      })


      if (res) {
        setData(() => {
          return {
            fname: '',
            email: '',
            password: ''
          }
        })
        alert('Form is Submited')
      }
    } else {
      alert('Plese fill all the field')
    }


  };

  return (
    <>
      <div className="mainDiv" >
        <form method="POST" >
          <label>
            Enter Your Name <br />
            <input autoFocus={true} placeholder="Enter Your Name" type="text" name="fname" onChange={updateData} value={data.fname} />
          </label><br />
          <label>
            Enter Your Email <br />
            <input placeholder="Enter Your Email " type="email" name="email" onChange={updateData} value={data.email} />
          </label><br />
          <label>
            Enter Your Password <br />
            <input placeholder="Enter Your Password " type="Password" name="password" onChange={updateData} value={data.password} />
          </label><br />
          <button className="btnm" type="submit" onClick={Submit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Input;
