import React, { useEffect } from "react";

export function useYandexRobot(location) {
    useEffect(() => {
        window.YandexRotorSettings.isLoaded = true;
        ym(96028442, 'hit', location, {params:{
            title: location,
        }});

        return () => {
            window.YandexRotorSettings.isLoaded = false;
        }
    }, []);
}
