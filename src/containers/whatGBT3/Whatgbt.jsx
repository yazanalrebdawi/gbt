import React from "react";
import "./whatgtb.css";
import { Feature } from "../../components/exportComponents";
const Whatgtb = () => {
  return (
    <div className="what__gbt3 section__margin" id="wgbt3">
      <div className="what__gbt3__feature">
        <Feature
          title={"What is GPT-3"}
          text={
            "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          }
        />
      </div>
      <div className="what__gbt3_heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="what__gbt3_container">
        <Feature
          title={"Chatbots"}
          text={
            "We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          }
        />
        <Feature
          title={"Knowledgebase"}
          text={
            "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          }
        />
        <Feature
          title={"Education"}
          text={
            "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          }
        />
      </div>
    </div>
  );
};

export default Whatgtb;
