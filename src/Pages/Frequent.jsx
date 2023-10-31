import React, { useState } from "react";
import { motion } from "framer-motion";
import demoData from "../../demoData.json";

const Frequent = () => {
  const data = demoData.FAQ;
  const [qOpen, setQOpen] = useState(false);
  const [quesT, setQuesT] = useState("");
  const [ans, setAns] = useState("");

  const handleClick = (q, a) => {
    setQOpen(!qOpen);
    setQuesT(q);
    setAns(a);
  };
  return (
    <>
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        exit={{ x: "-100vw" }}
        className="Page frequent"
      >
        <div className="flex-center">
          <h1>Frequently asked question</h1>
        </div>
        <div className="faq-content">
          {data.map((d) => (
            <div
              onClick={() => handleClick(d.title, d.content)}
              className="card-faq"
            >
              <div>
                <h3>{d.title}</h3>
              </div>

              {qOpen && quesT === d.title && <p>{ans}</p>}
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Frequent;
