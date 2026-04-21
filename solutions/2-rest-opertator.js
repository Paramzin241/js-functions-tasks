import _ from 'lodash';

// BEGIN
const getAverage = (...nums) => {
    return nums.length === 0 ? null : nums.reduce((sum, num) => sum + num, 0) / nums.length;
}

export default getAverage;
// END