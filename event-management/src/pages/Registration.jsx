import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export const Registration = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    department: "",
    className: "",
    rollno: "",
    mobile: "",
    eventCategory: "",
    subEvent: "",
  });
  const [errors, setErrors] = useState({});

  const eventOptions = {
    Sports: ["Cricket", "Football", "Volleyball", "Badminton", "Chess", "Carrom"],
    Tech_Event: ["Debugging", "Coding Challenge", "Treasure Hunt", "Web Development Task"],
    Annual_Cultural_Fest: ["Debate", "Group Discussion", "Quiz Competition", "Speech"],
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (e.target.name === "eventCategory") {
      setForm({
        ...form,
        eventCategory: e.target.value,
        subEvent: "",
      });
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!form.firstname.trim()) {
      newErrors.firstname = "First name is required";
    } else if (!/^[A-Za-z ]+$/.test(form.firstname)) {
      newErrors.firstname = "First name must contain only letters";
    }

    if (!form.lastname.trim()) {
      newErrors.lastname = "Last name is required";
    } else if (!/^[A-Za-z ]+$/.test(form.lastname)) {
      newErrors.lastname = "Last name must contain only letters";
    }

    if (!form.department) {
      newErrors.department = "Department is required";
    }

    if (!form.className) {
      newErrors.className = "Class is required";
    }

    if (!form.rollno.trim()) {
      newErrors.rollno = "Roll number is required";
    } else if (!/^[0-9]+$/.test(form.rollno)) {
      newErrors.rollno = "Roll number must be numeric";
    }

    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(form.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    if (!form.eventCategory) {
      newErrors.eventCategory = "Select an event category";
    }

    if (!form.subEvent) {
      newErrors.subEvent = "Select a sub event";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validate()) return;

    try {
      await addDoc(collection(db, "eventRegistrations"), {
        ...form,
        timestamp: new Date(),
      });

      // Navigate to confirmation page with registration data
      navigate("/registration-confirmation", {
        state: { registrationData: form }
      });

    } catch (error) {
      alert("Error saving data: " + error.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box card">
        <h2>Event Registration</h2>
        <p className="muted">Create your account and register for amazing events</p>

        <label>First Name</label>
        <input type="text" name="firstname" placeholder="John"
          value={form.firstname} onChange={handleChange} />
        {errors.firstname && <p className="error">🔴 {errors.firstname}</p>}

        <label>Last Name</label>
        <input type="text" name="lastname" placeholder="Doe"
          value={form.lastname} onChange={handleChange} />
        {errors.lastname && <p className="error">🔴 {errors.lastname}</p>}

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
          <div>
            <label>Department</label>
            <select name="department" value={form.department} onChange={handleChange}>
              <option value="">Choose Department</option>
              <option value="CS">Computer Science</option>
              <option value="IT">Information Technology</option>
            </select>
            {errors.department && <p className="error">🔴 {errors.department}</p>}
          </div>

          <div>
            <label>Class</label>
            <select name="className" value={form.className} onChange={handleChange}>
              <option value="">Choose Class</option>
              <option value="MCA 1st Sem">MCA 1st Sem</option>
              <option value="MCA 2nd Sem">MCA 2nd Sem</option>
              <option value="MCA 3rd Sem">MCA 3rd Sem</option>
              <option value="MCA 4th Sem">MCA 4th Sem</option>
              <option value="Msc 1st Sem">Msc 1st Sem</option>
              <option value="Msc 2nd Sem">Msc 2nd Sem</option>
              <option value="Msc 3rd Sem">Msc 3rd Sem</option>
              <option value="Msc 4th Sem">Msc 4th Sem</option>
            </select>
            {errors.className && <p className="error">🔴 {errors.className}</p>}
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
          <div>
            <label>Roll Number</label>
            <input type="text" name="rollno" placeholder="Your roll no"
              value={form.rollno} onChange={handleChange} />
            {errors.rollno && <p className="error">🔴 {errors.rollno}</p>}
          </div>

          <div>
            <label>Mobile Number</label>
            <input type="text" name="mobile" placeholder="+91 9XXX XXXXX"
              value={form.mobile} onChange={handleChange} />
            {errors.mobile && <p className="error">🔴 {errors.mobile}</p>}
          </div>
        </div>

        <label>Event Category</label>
        <select name="eventCategory" value={form.eventCategory} onChange={handleChange}>
          <option value="">Select an Event Category</option>
          <option value="Sports">🏆 Sports</option>
          <option value="Tech_Event">💻 Tech Event</option>
          <option value="Annual_Cultural_Fest">🎭 Cultural Fest</option>
        </select>
        {errors.eventCategory && <p className="error">🔴 {errors.eventCategory}</p>}

        {form.eventCategory && (
          <>
            <label>Choose Your Event</label>
            <select name="subEvent" value={form.subEvent} onChange={handleChange}>
              <option value="">Select {form.eventCategory}</option>
              {eventOptions[form.eventCategory].map((ev, i) => (
                <option key={i} value={ev}>✨ {ev}</option>
              ))}
            </select>
          </>
        )}
        {errors.subEvent && <p className="error">🔴 {errors.subEvent}</p>}

        <div style={{display:'flex',justifyContent:'center',marginTop:6}}>
          <button className="btn" onClick={handleRegister} style={{width:'100%'}}>Register Now</button>
        </div>
      </div>
    </div>
  );
};
