import React from "react";
import handleViewport from "react-in-viewport";

const sideMapNotVisible = {
  left: "translateX(-20px)",
  right: "translateX(20px)",
  bottom: "translateY(-20px)",
  top: "translateY(20px)",
  topmax: "translateY(100px)",
  opacity: "translateY(0)",
};

const sideMap = {
  left: "translateX(0)",
  right: "translateX(0)",
  bottom: "translateY(0)",
  top: "translateY(0)",
  topmax: "translateY(0)",
  opacity: "translateY(0)",
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
    transition: `transform ${speed}s, opacity ${speed}s, background-size  ${speed}s, background-color ${300}ms`,
    opacity: inViewport || (onInit && enterCount > 0) ? 1 : 0,
    transform: inViewport || (onInit && enterCount > 0) ? sideMap[side] : sideMapNotVisible[side],
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
