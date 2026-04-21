// BEGIN
const getFemaleFriends = (users) => {
    return users.flatMap(user => user.friends).filter(friend => friend.gender === 'female');
}

export default getFemaleFriends;
// END