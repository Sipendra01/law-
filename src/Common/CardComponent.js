import React from "react";
import { Link } from "react-router-dom";

const CardComponent = ({ imgSrc, cardLink, title, content, link }) => {
  return (
    <div className="card bg-light">
      <div className="card-body text-center">
        <div className="icon-bg mx-auto">
          <i className={imgSrc}></i>
        </div>
        <h6>
          <Link href={cardLink} className="linkStyle" passhref>
            {title}
          </Link>
        </h6>
        <p>{content}</p>
        <Link
          href={link}
          classNam="link-btn btn btn-outline-secondary btn-sm"
          passhref
        >
          Read More
          <i className="bi bi-arrow-right-circle"></i>
        </Link>
      </div>
    </div>
  );
};

export default CardComponent;
