const students = [
  {
    student_nro: 1,
    first_name: 'Xerkko',
    last_name: 'Opiskelija',
    nickname: 'Xerkkis',
    phone: '+35844556677',
    email: 'arttis@ottis.fi'
  },
  {
    student_nro: 2,
    first_name: 'Oiva',
    last_name: 'Opiskelija',
    nickname: 'Oivis',
    phone: '+3584477777',
    email: 'oiva@ottis.fi'
  }
]

const getAll = () => {
  return Promise.resolve(students)
}

export default { getAll, students }