export default (resume = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
                return [...resume, action.payload];
        case 'UPDATE':
                return resume.map((res) => (res._id === action.payload._id ? action.payload : res));
        case 'DELETE':
                return resume.filter((res) => res._id !== action.payload);
        default:
            return resume;
    }
}