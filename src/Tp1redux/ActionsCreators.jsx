import { SET_CLASS, SET_NAME, SET_STATS } from "./ActionsTypes";

export const setName=(name)=>(
    {
        type:SET_NAME,
        payload:name
    }
);

export const setClass=(classCharacter)=>(
    {
        type:SET_CLASS,
        payload:classCharacter
    }
);

export const updateState=(stats)=>(
    {
        type:SET_STATS,
        payload:stats
    }
);