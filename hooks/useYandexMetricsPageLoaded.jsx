import React, { useEffect } from "react";

export function useYandexRobot(location) {
    useEffect(() => {
        ym(96028442, 'hit', location, {params:{
            title: location,
        }});
    }, []);
}
