import React, { useCallback } from "react";
import { Image } from 'antd';

const Card = ({ variant, customTitle, onClick, disabled }) => {
  const path = `${variant}.svg`;

  const handleClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    onClick(variant);
  }, [variant, onClick]);

  return (
    <div className={`card-layout${disabled ? ' disabled' : ''}`} onClick={handleClick}>
      <div className="card-icon-wrapper">
        <Image src={path} fallback={'undetermined.png'} preview={false} />
      </div>
      <div className="card-title">{customTitle || variant}</div>
    </div>
  );
}

export default Card;