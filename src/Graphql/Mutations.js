import { gql } from "@apollo/client";

export const ADD_STUDENT= gql`
mutation MyMutation($en:String!,$n:String!,$sub:[String]!,$d:String! ) {
  addstudent(input: {enrollment:$en, name:$n, subjects:$sub, department: $d}) {
    student {
      enrollment
      name
      subjects
      department
    }
}
}
`
// export const ADD_TEACHER= gql`
// mutation MyMutation($tid:String!,$n: String!,$sub:[String]!,$mail:String!) {
//   addteacher(input: {teacherID:$tid, name:$n, subjects:$sub, email: $mail}) {
//     teacher {
//       teacherID
//       name
//       subjects
//       email
//     }
// }
// }
// `
// export const ADD_SUBJECT= gql`
// mutation MyMutation($n:String!,$c:String!,$t:[String]!,$cr:Int!) {
//   addsubjects(input: {name:$n, code:$c, teacher:$t, credit: $cr}) {
//     subjects {
//       name
//       code
//       credit
//       teacher
//     }
//     }
// }
// `
// export const ADD_CLASS= gql`
// mutation MyMutation($d:String!,$s:Int! ,$r:String! ) {
//   addclass(input: {department: $d, strength: $s, roomno: $r}) {
//     class {
//       department
//       roomno
//       strength
//     }
// }
// }
// `
// export const DELETE_STUDENT= gql`
// mutation MyMutation($en:String!) {
//   deletestudent(filter: {enrollment: {eq:$en}}) {
//     student {
//       department
//       enrollment
//       name
//       subjects
//     }
//     1}
// }
// `
// export const DELETE_TEACHER= gql`
// mutation MyMutation ($tid:String!){
//   deleteteacher(filter: {teacherID: {eq: $tid}}) {
//     teacher {
//       name
//       teacherID
//       subjects
//       email
//     }
//     }
// }
// `
// export const DELETE_SUBJECT= gql`
// mutation MyMutation($c:String!) {
//   deletesubjects(filter: {code: {eq: $c}}) {
//     subjects {
//       name
//       code
//       credit
//       teacher
//     }
//     }
// }
// `
// export const DELETE_CLASS= gql`
// mutation MyMutation($r: String!) {
//   deleteclass(filter: {roomno: {eq: $r}}) {
//     class {
//       department
//       roomno
//       strength
//     }
//     }
// }
// `
// export const EDIT_STUDENT= gql`
// mutation MyMutation(($en:String!,$n:String!,$sub:[String]!,$d:String! )) {
//   updatestudent(input: {filter: {enrollment: {eq: $en}}, set: {department: $d, name: $n, subjects: $sub}}) {
//     student {
//       department
//       enrollment
//       name
//       subjects
//     }
//     }
// }
// `
// export const EDIT_TEACHER= gql`
// mutation MyMutation($tid:String!,$n: String!,$sub:[String]!,$mail:String!)  {
//   updateteacher(input: {filter: {teacherID: {eq:$tid}}, set: {email: $mail, name: $n, subjects:$sub}}) {
//     teacher {
//       email
//       name
//       subjects
//       teacherID
//     }
//     }
// }
// `
// export const EDIT_SUBJECT= gql`
// mutation MyMutation($n:String!,$c:String!,$t:[String]!,$cr:Int!) {
//   updatesubjects(input: {filter: {code: {eq: $c}}, set: {credit:$cr, name: $n, teacher: $t}})
//   {subjects {
//       code
//       name
//       credit
//       teacher
//     }}
// }
// `
// export const EDIT_CLASS= gql`
// mutation MyMutation($d:String!,$s:Int! ,$r:String! )  {
//   updateclass(input: {set: {department: $d, strength: $s}, filter: {roomno: {eq: $r}}}) {
//     class {
//       department
//       roomno
//       strength
//     }
//     }
// }
// `
