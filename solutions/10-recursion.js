const calculateSequenceSum = (begin, end) => {
    // BEGIN
    if (begin > end) return NaN;
    return (begin + end) * (end - begin + 1) / 2;
    // END
};

export default calculateSequenceSum;