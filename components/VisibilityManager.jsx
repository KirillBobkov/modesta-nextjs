import React from "react";
import handleViewport from "react-in-viewport";

const sideMap = {
  top: "0",
  topmax: "0",
  opacity: "0",
};

const sideMapNotVisible = {
  top: "20px",
  topmax: "100px",
  opacity: "0",
};

const Block = React.memo((props) => {
  const {
    itemScope,
    itemType,
    itemProp,
    onInit = true,
    id,
    as: Tag = "section",
    inViewport,
    style,
    enterCount,
    forwardedRef,
    children,
    className,
    side = "topmax",
    speed = 1.5,
    onClick
  } = props;

  const meta = {};

  if (itemScope !== undefined) {
    meta.itemScope = itemScope;
  }
  if (itemType!== undefined) {
    meta.itemType = itemType;
  }
  if (itemProp!== undefined) {
    meta.itemProp = itemProp;
  }

  const animationStyles = {
    ...style,
    transition: `top ${speed}s, opacity ${speed}s, background-size  ${speed}s, background-color ${300}ms`,
    opacity: inViewport || (onInit && enterCount > 0) ? 1 : 0,
    position: "relative",
    top: inViewport || (onInit && enterCount > 0) ? sideMap[side] : sideMapNotVisible[side],
  }

  return (
    <Tag
      {...meta}
      id={id}
      ref={forwardedRef}
      className={className}
      onClick={onClick}
      style={animationStyles}
    >
      {children}
    </Tag>
  );
});

export const VisibilityManager = handleViewport(Block);
