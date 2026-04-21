import _ from 'lodash';

// BEGIN
const getOldestPeople = (users, count = 1) => {
    return [...users]
        .sort((a, b) => new Date(a.birthday) - new Date(b.birthday))
        .slice(0, count);
}

export default getOldestPeople;
// END