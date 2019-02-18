
const studentReducer = (store = [], action) => {
  switch (action.type) {
  case 'INIT_STUDENTS':
    return action.data

  case 'CREATE_STUDENT_CONTACTINFO':
    if (store.find(student => student.student_id === action.data.student_id)) {
      return store
    }
    return [...store, action.data]

  default:
    return store
  }
}

export default studentReducer