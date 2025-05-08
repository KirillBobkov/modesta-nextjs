import React, { CSSProperties, ReactNode, ElementType, HTMLAttributes } from "react";
import handleViewport from "react-in-viewport";

type AnimationSide = 'left' | 'right' | 'bottom' | 'top' | 'topmax' | 'opacity';

interface SideMapType {
  [key: string]: string;
}

const sideMapNotVisible: SideMapType = {
  left: "translateX(-20px)",
  right: "translateX(20px)",
  bottom: "translateY(-20px)",
  top: "translateY(20px)",
  topmax: "translateY(100px)",
  opacity: "translateY(0)",
};

const sideMap: SideMapType = {
  left: "translateX(0)",
  right: "translateX(0)",
  bottom: "translateY(0)",
  top: "translateY(0)",
  topmax: "translateY(0)",
  opacity: "translateY(0)",
};

interface BlockProps extends HTMLAttributes<HTMLElement> {
  itemScope?: boolean;
  itemType?: string;
  itemProp?: string;
  onInit?: boolean;
  id?: string;
  as?: ElementType;
  inViewport: boolean;
  enterCount: number;
  forwardedRef: React.RefObject<HTMLElement>;
  children: ReactNode;
  className?: string;
  side?: AnimationSide;
  speed?: number;
}

const Block = React.memo((props: BlockProps) => {
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
    side = "top",
    speed = 1.5,
    onClick,
    ...rest
  } = props;

  const meta: Record<string, any> = {};

  if (itemScope !== undefined) {
    meta.itemScope = itemScope;
  }
  if (itemType !== undefined) {
    meta.itemType = itemType;
  }
  if (itemProp !== undefined) {
    meta.itemProp = itemProp;
  }

  const animationStyles: CSSProperties = {
    ...style,
    transition: `transform ${speed}s, opacity ${speed}s, background-size ${speed}s, background-color 300ms`,
    opacity: inViewport || (onInit && enterCount > 0) ? 1 : 0,
    transform: inViewport || (onInit && enterCount > 0) ? sideMap[side] : sideMapNotVisible[side],
  };

  return (
    <Tag
      {...meta}
      {...rest}
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