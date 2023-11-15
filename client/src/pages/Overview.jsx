import './Overview.scss'

function Overview({data}) {
  return (
    <div>
      {data.map((i) => {
        return <>
          <img src={i.img} alt="img" />
          <h1>Name: {i.name}</h1>
          <h3>Days: {i.days}</h3>
          <h2>{i.description}</h2>
        </>;
      })}
    </div>
  );
}

export default Overview;
