export default (skills = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
                return [...skills, action.payload];
        case 'UPDATE':
                return skills.map((skill) => (skill._id === action.payload._id ? action.payload : skill));
        case 'DELETE':
                return skills.filter((skill) => skill._id !== action.payload);
        default:
            return skills;
    }
}