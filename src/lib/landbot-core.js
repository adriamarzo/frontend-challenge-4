function loadLanbotCore() {
  if (!window.Landbot) {
    return null;
  }
  return new window.Landbot.Core({
    firebase: window.firebase,
    configUrl:
      'https://chats.landbot.io/u/H-441480-B0Q96FP58V53BJ2J/index.json',
  });
}
export const landbotCore = loadLanbotCore();
