export function useYandexRobot(location) {
  ym(96028442, "hit", location, {
    params: {
      title: location,
    },
  });
}
