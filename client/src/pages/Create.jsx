import { useState } from "react";
import Inputs from "../components/Inputs";
import "./Create.scss";

function Create() {
  const [general, setGeneral] = useState({
    name: "",
    username: "a",
    days: 1,
    description: "",
    img: "",
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/workouts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(general),
    });
    console.log(general);
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <div>
          <label>Name: </label>
          <input
            name="name"
            type="text"
            required
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Days: </label>
          <input
            name="days"
            type="number"
            required
            onChange={handleChange}
            min={1}
            max={7}
          />
        </div>
        <div>
          <label className="description">Description: </label>
          <textarea
            name="description"
            required
            onChange={handleChange}
            cols="100"
            rows="5"
            placeholder="Enter the description for the workout"
          ></textarea>
        </div>
        <div>
          <label>Image: </label>
          <input
            name="img"
            type="text"
            onChange={handleChange}
            placeholder="Enter URL of the image"
          />
          <img src={general.img} alt="" />
        </div>
        <Inputs day="monday" val={general} setVal={setGeneral} />
        <Inputs day="tuesday" val={general} setVal={setGeneral} />
        <Inputs day="wednesday" val={general} setVal={setGeneral} />
        <Inputs day="thursday" val={general} setVal={setGeneral} />
        <Inputs day="friday" val={general} setVal={setGeneral} />
        <Inputs day="saturday" val={general} setVal={setGeneral} />
        <Inputs day="sunday" val={general} setVal={setGeneral} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Create;
