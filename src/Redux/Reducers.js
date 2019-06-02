const initData = {
  monsterArr: [],
  requestUrl: [
    'https://pokeapi.co/api/v2/pokemon/7/',
    'https://pokeapi.co/api/v2/pokemon/4/',
    'https://pokeapi.co/api/v2/pokemon/1/',
  ],
  fourthCard: null,
};
/* eslint no-param-reassign: ["error", { "props": false }] */
export function solveRandom(state = initData, action) {
  switch (action.type) {
    case 'getData':
      state.monsterArr = action.value;
      return JSON.parse(JSON.stringify(state));
    case 'randomOnce':
      const { setKey } = action;
      const { mainArrKey } = action;
      const randomIndex = action.func();
      state[setKey] = state[mainArrKey][randomIndex];
      return JSON.parse(JSON.stringify(state));
    default:
      return state;
  }
}
