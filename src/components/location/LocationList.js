import { Fragment, useContext } from "react";
import { LocationContext } from "./LocationProvider";
import { useEffect } from "react";
import { Location } from "./Location";
import { Link, useNavigate } from "react-router-dom";

export const LocationList = () => {
  const navigate = useNavigate();
  const { locations, getLocations } = useContext(LocationContext);

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <>
      <article className="locations">
        <h2 className="text-2xl font-bold m-6">List of Locations</h2>
        <div className="locations flex flex-row">
          {locations.map((location) => (
            <div
              key={`locationList--${location.id}`}
              className="text-blue-600 p-2 m-2 font-semibold border-dotted border-2 border-sky-500 hover:bg-slate-600 hover:text-white"
            >
              <Link to={`/locations/detail/${location.id}`}>
                {location.name}
              </Link>
            </div>
          ))}
        </div>
      </article>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 ml-2 rounded-full"
        onClick={() => navigate("/locations/create")}
      >
        Add Location
      </button>
    </>
  );
};
