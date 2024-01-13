import React from "react";
import handleViewport from 'react-in-viewport';

const sideMap = {
    left: 'translateX(-20px)',
    right: 'translateX(20px)',
    bottom: 'translateY(-20px)',
    top: 'translateY(20px)',
    topmax: 'translateY(100px)',
    opacity: 'translateY(0)',
}

const sideMapNotVisible = {
    left: 'translateX(0)',
    right: 'translateX(0)',
    bottom: 'translateY(0)',
    top: 'translateY(0)',
    topmax: 'translateY(0)',
    opacity: 'translateY(0)',
}

const Block = React.memo((props) => {
    const { onInit = true, id, as: Tag = 'section', inViewport, styles, enterCount, forwardedRef, children, classes, side = 'topmax', speed = 1.5} = props;

    return (
        <Tag {...props} id={id} ref={forwardedRef} className={classes} style={{
            ...styles,
            transition: `opacity ${speed}s, transform  ${speed}s, background-size  ${speed}s`,
            opacity: inViewport || (onInit && enterCount > 0) ? 1 : 0,
            transform: inViewport || (onInit && enterCount > 0) ? sideMapNotVisible[side] : sideMap[side]
        }} >{children}</Tag>
    );
});
  
export const VisibilityManager = handleViewport(Block);