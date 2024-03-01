import "./Inputs.scss";

function Inputs({ day, val, setVal }) {
  const handleAdd = () => {
    const newVal = [...val[day], []];
    setVal((prev) => {
      return { ...prev, [day]: newVal };
    });
  };
  const handleChange = (onChangeValue, i, pos) => {
    const inputdata = [...val[day]];
    inputdata[i][pos] = onChangeValue.target.value;
    setVal((prev) => {
      return { ...prev, [day]: inputdata };
    });
  };
  const handleDelete = (i) => {
    const deleteVal = [...val[day]];
    deleteVal.splice(i);
    setVal((prev) => {
      return { ...prev, [day]: deleteVal };
    });
  };
  const firstUpperCase = (day) => {
    return day[0].toUpperCase() + day.slice(1);
  };
  return (
    <span className="inputs">
      <div className="input-container">
        <label>{firstUpperCase(day)}</label>
        <button type="button" className="button" onClick={() => handleAdd()}>
          Add
        </button>
      </div>
      {val[day].map((data, i) => {
        return (
          <div>
            <label>Exercise {i + 1} :</label>
            <input
              type="text"
              required
              onChange={(e) => handleChange(e, i, 0)}
            />
            <label>Sets: </label>
            <input
              type="number"
              onChange={(e) => handleChange(e, i, 1)}
              min={1}
              max={20}
            />
            <label>Reps: </label>
            <input
              type="number"
              onChange={(e) => handleChange(e, i, 2)}
              min={1}
              max={100}
            />
            <label>Rest: </label>
            <input
              type="number"
              onChange={(e) => handleChange(e, i, 3)}
              min={0}
              max={300}
            />
            <button onClick={() => handleDelete(i)}>x</button>
          </div>
        );
      })}
    </span>
  );
}

export default Inputs;
