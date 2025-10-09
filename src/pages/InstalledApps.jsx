import React, { useEffect, useState } from "react";
import { getInstalledApps, removeAppFromDB } from "../Utility/addToDB";
import { Download, MoveDown, Star } from "lucide-react";

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortBy, setSortBy] = useState(""); // "" | "size" | "rating"

  useEffect(() => {
    setInstalledApps(getInstalledApps());
  }, []);

  const handleUninstall = (id) => {
    removeAppFromDB(id);
    setInstalledApps((prev) => prev.filter((app) => app.id !== id));
  };

  // Sort apps based on sortBy
  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortBy === "size") {
      return (b.size || 0) - (a.size || 0); // descending by size
    } else if (sortBy === "rating") {
      return (b.ratingAvg || 0) - (a.ratingAvg || 0); // descending by rating
    } else {
      return 0;
    }
  });

  return (
    <div className="p-8 pt-20 bg-gray-100">
      <div className="w-10/12 mx-auto">
        <h1 className="text-4xl text-center font-bold text-[#001931]">
          My Installed Apps
        </h1>
        <p className="text-center text-gray-400 mt-5 mb-8">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="flex justify-between mb-6 items-center">
          <p className="mb-6 font-bold text-2xl">
            {installedApps.length} app{installedApps.length !== 1 ? "s" : ""}{" "}
            Found
          </p>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 text-gray-400 font-normal flex items-center gap-2"
            >
              Sort By <MoveDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <button onClick={() => setSortBy("size")}>Size</button>
              </li>
              <li>
                <button onClick={() => setSortBy("rating")}>Rating</button>
              </li>
            </ul>
          </div>
        </div>

        {installedApps.length === 0 ? (
          <p className="text-gray-500">No apps installed yet.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {sortedApps.map((app) => (
              <div
                key={app.id}
                className="bg-white rounded-2xl shadow-md flex flex-col md:flex-row items-center md:items-start p-6 w-full"
              >
                {/* Left: Image + Info */}
                <div className="flex flex-col md:flex-row items-center md:items-start flex-1 gap-6">
                  <img
                    src={app.image}
                    alt={app.name}
                    className="w-24 h-24 rounded-lg"
                  />
                  <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-semibold">
                      {app.title}: {app.description}
                    </h2>
                    <div className="flex flex-wrap gap-3 mt-1">
                      <span className="flex items-center gap-1 text-[#00D390] text-sm">
                        <Download className="w-4 h-4" /> {app.downloads}
                      </span>
                      <span className="flex items-center gap-1 text-[#FF8811] text-sm">
                        <Star className="w-4 h-4" /> {app.ratingAvg}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400 text-sm">
                        Size: {app.size || "N/A"} MB
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Uninstall Button */}
                <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                  <button
                    onClick={() => handleUninstall(app.id)}
                    className="btn w-full bg-[#00D390] hover:bg-[#05855cc7] text-white py-2 px-8 rounded-lg"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyInstallation;
