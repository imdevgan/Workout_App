import "./Workout.scss";
import { useState,useEffect } from "react";
const static_data=require('../data/Data')

function Workout() {
  const pathname = window.location.pathname
  const [data, setData] = useState(static_data);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/workouts/${pathname}`);
      const data = await result.json();
      setData(data.workout);
      console.log(data.workout)
    };
    fetchData();
  }, []);
  return (
    <div className="workout">
      <h1>Monday</h1>
      <div className="table-container">
        <span className="grid-container">
          <h2>Name</h2>
          <h2>Sets</h2>
          <h2>Reps</h2>
          <h2>Rest</h2>
        </span>
        {/*Checks if the array is empty and if empty prints Rest */}
        {data.monday.length===0 && <h1>Rest</h1>}
        {data.monday.map((i, index) => {
          return (
            <div className="grid-container">
              {i.map((i) => {
                return (
                  <>
                    <h2>{i}</h2>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
      <h1>Tuesday</h1>
      <div className="table-container">
        <span className="grid-container">
          <h2>Name</h2>
          <h2>Sets</h2>
          <h2>Reps</h2>
          <h2>Rest</h2>
        </span>
        {data.tuesday.length===0 && <h1>Rest</h1>}
        {data.tuesday.map((i, index) => {
          return (
            <div className="grid-container">
              {i.map((i) => {
                return (
                  <>
                    <h2>{i}</h2>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
      <h1>Wednesday</h1>
      <div className="table-container">
        <span className="grid-container">
          <h2>Name</h2>
          <h2>Sets</h2>
          <h2>Reps</h2>
          <h2>Rest</h2>
        </span>
        {data.wednesday.length===0 && <h1>Rest</h1>}
        {data.wednesday.map((i, index) => {
          return (
            <div className="grid-container">
              {i.map((i) => {
                return (
                  <>
                    <h2>{i}</h2>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
      <h1>Thursday</h1>
      <div className="table-container">
        <span className="grid-container">
          <h2>Name</h2>
          <h2>Sets</h2>
          <h2>Reps</h2>
          <h2>Rest</h2>
        </span>
        {data.thursday.length===0 && <h1>Rest</h1>}
        {data.thursday.map((i, index) => {
          return (
            <div className="grid-container">
              {i.map((i) => {
                return (
                  <>
                    <h2>{i}</h2>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
      <h1>Friday</h1>
      <div className="table-container">
        <span className="grid-container">
          <h2>Name</h2>
          <h2>Sets</h2>
          <h2>Reps</h2>
          <h2>Rest</h2>
        </span>
        {data.friday.length===0 && <h1>Rest</h1>}
        {data.friday.map((i, index) => {
          return (
            <div className="grid-container">
              {i.map((i) => {
                return (
                  <>
                    <h2>{i}</h2>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
      <h1>Saturday</h1>
      <div className="table-container">
        <span className="grid-container">
          <h2>Name</h2>
          <h2>Sets</h2>
          <h2>Reps</h2>
          <h2>Rest</h2>
        </span>
        {data.saturday.length===0 && <h1>Rest</h1>}
        {data.saturday.map((i, index) => {
          return (
            <div className="grid-container">
              {i.map((i) => {
                return (
                  <>
                    <h2>{i}</h2>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
      <h1>Sunday</h1>
      <div className="table-container">
        <span className="grid-container">
          <h2>Name</h2>
          <h2>Sets</h2>
          <h2>Reps</h2>
          <h2>Rest</h2>
        </span>
        {data.sunday.length===0 && <h1>Rest</h1>}
        {data.sunday.map((i, index) => {
          return (
            <div className="grid-container">
              {i.map((i) => {
                return (
                  <>
                    <h2>{i}</h2>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
      
    </div>
  );
}

export default Workout;
