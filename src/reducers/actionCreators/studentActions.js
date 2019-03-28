import studentService from '../../services/students'


// tells studentservice to get all students from database
const initializeStudents = () => {
  console.log('INIT_STUDENT_ACTION')
  return async (dispatch) => {
    const content = await studentService.getAll()
    dispatch({
      type: 'INIT_STUDENTS',
      data: content
    })
  }
}

// tells studentservice to get specific student by id from database
const getStudent = (id) => {
  return async (dispatch) => {
    const content = await studentService.getStudent(id)
    dispatch({
      type: 'GET_STUDENT',
      data: content
    })
  }
}


// tells studentservice to get specific student's courses and dispatch them to store
const getStudentCourses = (id) => {
  return async (dispatch) => {
    const content = await studentService.getCourses(id)
    dispatch({
      type: 'INIT_STUDENT_COURSES',
      data: content
    })
  }
}

// tells studentservice to get specific student's courses //init_contact info.empty
const getContactInformation = (id) => {
  console.log(id)
  return async (dispatch) => {
    const student = await studentService.getStudent(id)
    console.log('studentactionin getcontactinformationin student', student)
    dispatch({
      type: 'INIT_CONTACT_INFORMATION',
      data: student
    })
  }
}


// creates student
const createStudent = (content, id) => {
  return async (dispatch) => {
    const response = await studentService.update(content, id)

    // Upcoming fix for updating email without logging in again
    // if (response.error) {
    //   return
    // }
    // let loggedUser = JSON.parse(window.localStorage.getItem('loggedInUser'))
    // loggedUser.user.email = true
    // window.localStorage.setItem('loggedInUser', JSON.stringify(loggedUser))
    // dispatch({
    //   type: 'UPDATE_LOGGED_USER',
    //   data: loggedUser
    // })

    dispatch({
      type: 'CREATE_STUDENT_CONTACTINFO',
      data: response.course

    })
  }
}


//tells studentservice to create application for a course post to database
// const applyForCourse = (content, id) => {
//   return async (dispatch) => {
//     const applications = await studentService.apply(content, id)
//     const courses = await studentService.getCourses(id)
//     console.log('after application query')
//     dispatch({
//       type: 'INIT_STUDENT_COURSES',
//       data: courses

//     })
//   }
// }

// deletes course which student has applied
const deleteAppliedCourse = (course_id, student_id) => {
  return async (dispatch) => {

    const response = await studentService.deleteApplication(student_id, course_id)
    console.log(response)
    dispatch({
      type: 'STUDENT_APPLICATION_DELETE',
      data: { id: course_id }
    })
  }
}


const updatePhone = (phone) => {
  return {
    type: 'UPDATE_PHONE',
    data: phone
  }
}

const updateEmail = (email) => {
  return {
    type: 'UPDATE_EMAIL',
    data: email
  }
}

const updateExperience = (experience) => {
  return {
    type: 'UPDATE_EXPERIENCE',
    data:experience
  }
}
const updateLanguage = (teachesInEnglish) => {
  return {
    type: 'UPDATE_LANGUAGE',
    data:teachesInEnglish
  }
}
export { updatePhone, updateEmail, updateLanguage, updateExperience,
  createStudent, initializeStudents, getStudent, getStudentCourses, getContactInformation, deleteAppliedCourse }