import "./Overview.scss";
import { Link } from "react-router-dom";

function Overview({ data }) {
  console.log(data);
  return (
    <div className="overview">
      {data.map((i) => {
        return (
          <div className="overview-workout">
            <div>
              <img src={i.img} alt="" />
            </div>
            <div className="overview-body">
              <Link className="heading" to={`/${i._id}`}>
                {i.name}
              </Link>
              <h3>Days: {i.days}</h3>
              <h3>{i.description}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Overview;
