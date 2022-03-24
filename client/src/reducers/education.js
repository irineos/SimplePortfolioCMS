export default (education = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
                return [...education, action.payload];
        case 'UPDATE':
                return education.map((edu) => (edu._id === action.payload._id ? action.payload : edu));
        case 'DELETE':
                return education.filter((edu) => edu._id !== action.payload);
        default:
            return education;
    }
}