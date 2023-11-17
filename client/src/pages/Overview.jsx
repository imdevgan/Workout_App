import './Overview.scss'
import { Link } from 'react-router-dom';

function Overview({data}) {
  console.log(data)
  const str="/abc"
  return (
    <div>
      {data.map((i) => {
        return <>
          <img src={i.img} alt="img" />
          <Link className='heading' to={`/${i._id}`}>Name: {i.name}</Link>
          <h3>Days: {i.days}</h3>
          <h2>{i.description}</h2>
        </>;
      })}
    </div>
  );
}

export default Overview;
