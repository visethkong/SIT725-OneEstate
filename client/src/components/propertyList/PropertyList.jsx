import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/houses/countByType");

  const images = [
    "https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/288176551.jpg?k=0370b6af8e3bf736431170faa21014695ba5c901127248c1a3ccfdcddbde4cc2&o=&hp=1",
    "https://www.planetware.com/wpimages/2019/11/best-cheap-all-inclusive-resorts-breezes-resort-spa-bahamas.jpg",
    "https://www.engelvoelkers.com/images/31a13d90-6384-4e1a-ac1d-14f64ec787e3/modern-villa-in-an-exclusive-development-in-mijas",
    "http://cuddleupcabinrentals.com/Cabins/112_Sundance_Ridge__41_.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
