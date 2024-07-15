import "./shimmer.css"

const Shimmer = ({count,height ,width}) => {
  const CardShimmer = () => (
   
      <div className="shimmer-cards" style={{ height: height, width: width }}>
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

  const arr = new Array(count).fill(0);

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
