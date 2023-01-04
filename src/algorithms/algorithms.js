export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();

    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);

    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
    let k = startIdx,
        i = startIdx,
        j = middleIdx + 1;

    while (i <= middleIdx && j <= endIdx) {
        // values that we are comparing
        // push them to change their color
        animations.push([i, j]);
        // push the same value again to revert their color
        animations.push([i, j]);

        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            // overwrite the value at idx k in the original array
            // with the value at idx i in the auxiliary array
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            // overwrite the value at idx k in the original array
            // with the value at idx j in the auxiliary array
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        // values that we are comparing
        // push them to change their color
        animations.push([i, i]);
        // push the same value again to revert their color
        animations.push([i, i]);

        // overwrite the value at idx k in the original array
        // with the value at idx j in the auxiliary array
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while ( j <= endIdx) {
        // values that we are comparing
        // push them to change their color
        animations.push([j, j]);
        // push the same value again to revert their color
        animations.push([j, j]);

        // overwrite the value at idx k in the original array
        // with the value at idx j in the auxiliary array
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}