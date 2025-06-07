import React, { useEffect } from "react";

import "./Loader.css";

export function Loader() {
    useEffect(() => {
        document.documentElement.classList.add("overflow-hidden")
        
    return () => document.documentElement.classList.remove("overflow-hidden");
    }, []);

    return (
        <div className="loader-overlay">
            <div className="loader">
                <div className="loader-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 462 800" width={31} xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g><path d="M -0.5,-0.5 C 27.1667,-0.5 54.8333,-0.5 82.5,-0.5C 82.369,0.238911 82.5357,0.905578 83,1.5C 137.233,55.7331 191.4,109.9 245.5,164C 226.694,183.973 207.36,203.473 187.5,222.5C 152.819,187.986 117.986,153.652 83,119.5C 82.5,189.499 82.3333,259.499 82.5,329.5C 54.8333,329.5 27.1667,329.5 -0.5,329.5C -0.5,219.5 -0.5,109.5 -0.5,-0.5 Z" /></g>
                        <g><path d="M 461.5,1.5 C 461.5,111.5 461.5,221.5 461.5,331.5C 433.833,331.5 406.167,331.5 378.5,331.5C 378.5,221.5 378.5,111.5 378.5,1.5C 406.167,1.5 433.833,1.5 461.5,1.5 Z" /></g>
                        <g><path d="M -0.5,397.5 C 153.167,397.5 306.833,397.5 460.5,397.5C 460.5,425.167 460.5,452.833 460.5,480.5C 306.833,480.5 153.167,480.5 -0.5,480.5C -0.5,452.833 -0.5,425.167 -0.5,397.5 Z" /></g>
                        <g><path d="M -0.5,555.5 C 153.5,555.5 307.5,555.5 461.5,555.5C 461.5,583.167 461.5,610.833 461.5,638.5C 307.5,638.5 153.5,638.5 -0.5,638.5C -0.5,610.833 -0.5,583.167 -0.5,555.5 Z" /></g>
                        <g><path d="M -0.5,702.5 C 153.167,702.5 306.833,702.5 460.5,702.5C 460.5,730.167 460.5,757.833 460.5,785.5C 306.833,785.5 153.167,785.5 -0.5,785.5C -0.5,757.833 -0.5,730.167 -0.5,702.5 Z" /></g>
                    </svg>
                    <div className="middle">
                        <div className="bar bar1"></div>
                        <div className="bar bar2"></div>
                        <div className="bar bar3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}