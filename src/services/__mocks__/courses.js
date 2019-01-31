const courses = [
  {
    course_id: 1,
    learningopportunity_id: 'TKT30008',
    course_name: 'Ohjelmistotuotanto 15',
    period: 2,
    year: 2019,
    createdAt: '2019-01-28T09:14:48.359Z',
    updatedAt: '2019-01-28T09:14:48.359Z'
  },
  {
    course_id: 2,
    learningopportunity_id: 'TKT30008',
    course_name: 'Ohjelmistotuotanto 15',
    period: 3,
    year: 2019,
    createdAt: '2019-01-28T09:22:14.919Z',
    updatedAt: '2019-01-28T09:22:14.919Z'
  },
  {
    course_id: 3,
    learningopportunity_id: 'TKT30003',
    course_name: 'Kohmelmistotuotanto',
    period: 1,
    year: 2019,
    createdAt: '2019-01-28T09:23:33.858Z',
    updatedAt: '2019-01-28T09:23:33.858Z'
  }
]

const getAll = () => {
  return Promise.resolve(courses)
}

export default { getAll, courses }