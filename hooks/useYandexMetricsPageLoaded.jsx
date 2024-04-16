export function useYandexRobot(location) {
  if (window && window.ym) {
    window.ym(96028442, "hit", location, {
      params: {
        title: location,
      },
    });
  }
}
