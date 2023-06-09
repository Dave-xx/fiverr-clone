import React, { useState } from "react";
import "./Gigs.scss";
import { gigInfo } from "../../components/Data";
import GigCard from "../../components/gigCard/GigCard";

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const resort = (type) => {
    setSort(type);
    setOpen(false);
  };
  return (
    <div className="gigs">
      <div className="container">
        <div>
          <span className="breadcrumbs">Fiverr &gt; Graphics</span>
          <h1>AI Artists</h1>
          <p>
            Explore the boundaries of art and technoglogy with Fiverr&apos; s AI
            artists
          </p>
        </div>
        <div className="menu">
          <div className="left">
            Budget <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src="./img/down.png"
              alt=""
              onClick={() => {
                setOpen(!open);
              }}
            />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => resort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => resort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigInfo.map((item) => (
            <GigCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
