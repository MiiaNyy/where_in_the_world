function increaseIndex(index, setIndex) {
    if(index < 19 ) {
        setIndex(index + 1);
    } else {
        setIndex(index - 19);
    }
}

function decreaseIndex(index, setIndex) {
    if(index === 0 ) {
        setIndex(index + 19);
    } else {
        setIndex(index - 1);
    }
}

export {
    increaseIndex,
    decreaseIndex
}