import { combineReducers } from 'redux';
import { algorithm } from './algorithm.js';
import { array } from './array.js';
import { currentMerge } from './mergeSort.js';
import { currentSwap } from './swap.js';
import { currentSorted } from './sorted.js';


export default combineReducers({
    array,
    algorithm,
    currentMerge,
    currentSwap,
    currentSorted
})