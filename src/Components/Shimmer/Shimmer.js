import "./Shimmer.css"

const Shimmer = () => {
  const CardShimmer = () => (
   
      <div className="shimmer-cards">
        <div className="shimmer-image">
          {/* <img className="image" src={Image_url+cloudinaryImageId} alt=""></img> */}
        </div>
        <div className="shimmer-name"></div>
        <div className="shimmer-cousines"></div>
        <div className="shimmer-cousines"></div>
        <div className="shimmer-component">
          <div className="shimmer_time"></div>
          <div className="shimmer_rating"></div>
          <div></div>
        </div>
      </div>
    
  );

  const arr = new Array(15).fill(0);

  return (
    <div className="shimmer-container">
      {arr.map((e, i) => (
        <CardShimmer key={i} />
      ))}

      {/* <CardShimmer/> */}
    </div>
  );
};

export default Shimmer;
