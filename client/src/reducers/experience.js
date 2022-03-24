export default (experience = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
                return [...experience, action.payload];
        case 'UPDATE':
                return experience.map((exp) => (exp._id === action.payload._id ? action.payload : exp));
        case 'DELETE':
                return experience.filter((exp) => exp._id !== action.payload);
        default:
            return experience;
    }
}