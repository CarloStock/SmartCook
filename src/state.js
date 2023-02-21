import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState, useGlobalState} = createGlobalState({
    diet: [],
    intolerance: [],
    ingredients: [],
});

export { useGlobalState, setGlobalState };