import { useState } from "react";
import Inputs from "../components/Inputs";

function Create() {
  const [general, setGeneral] = useState({
    name: "",
    days: 1,
    description: "",
    img:"",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneral((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(general);
  };
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input name="name" type="text" required onChange={handleChange} placeholder="Enter your name" />
        <label>Days: </label>
        <input name="days" type="number" required onChange={handleChange} min={1} max={7} />
        <label>Description: </label>
        <textarea name="description" required onChange={handleChange} cols="20" rows="5" placeholder="Enter the description for the workout"></textarea>
        <label>Image: </label>
        <input name="img" type="text" onChange={handleChange} placeholder="Enter your name" />
        <img src={general.img} alt="" />
        <label>Monday</label>
        <Inputs day="monday" val={general} setVal={setGeneral} />
        <label>Tuesday</label>
        <Inputs day="tuesday" val={general} setVal={setGeneral} />
        <label>Wednesday</label>
        <Inputs day="wednesday" val={general} setVal={setGeneral} />
        <label>Thursday</label>
        <Inputs day="thursday" val={general} setVal={setGeneral} />
        <label>Friday</label>
        <Inputs day="friday" val={general} setVal={setGeneral} />
        <label>Saturday</label>
        <Inputs day="saturday" val={general} setVal={setGeneral} />
        <label>Sunday</label>
        <Inputs day="sunday" val={general} setVal={setGeneral} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Create;
