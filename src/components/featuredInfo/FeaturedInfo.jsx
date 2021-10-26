import React from "react";
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredtitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$33456</span>
          <span className="featuredMoneyRate">
            -11.4% <ArrowDownward className="featuredIcon negative" />{" "}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredtitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$10345</span>
          <span className="featuredMoneyRate">
            +15% <ArrowUpward className="featuredIcon positive" />{" "}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredtitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$9083645</span>
          <span className="featuredMoneyRate">
            +20% <ArrowUpward className="featuredIcon positive" />{" "}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
