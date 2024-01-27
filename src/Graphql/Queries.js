import {gql} from '@apollo/client'

export const GET_STUDENT_LIST =gql`
query MyQuery {
    querystudent {
        enrollment
        name
        department
        subjects
    }
  }
`
// export const GET_TEACHER_LIST =gql`
// query MyQuery {
//   queryteacher {
//     teacherID
//     name
//     email
//     subjects
//   }
// }
// `
// export const GET_SUBJECT_LIST =gql`
// query MyQuery {
//   querysubjects {
//     name
//     code
//     credit
//     teacher
//   }
// }
// `

// export const GET_CLASS_LIST =gql`
// query MyQuery {
//   queryclass {
//     roomno
//     department
//     strength
//   }
// }
// `

