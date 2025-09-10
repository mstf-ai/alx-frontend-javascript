// Define the Teacher interface
// interface Teacher {
//   readonly firstName: string;   // only set at initialization
//     readonly lastName: string;    // only set at initialization
//       fullTimeEmployee: boolean;    // must always be defined
//         yearsOfExperience?: number;   // optional
//           location: string;             // must always be defined
//             [key: string]: any;           // allow extra attributes like contract
//             }
//
//             // Example usage
//             const teacher3: Teacher = {
//               firstName: 'John',
//                 lastName: 'Doe',
//                   fullTimeEmployee: false,
//                     location: 'London',
//                       contract: false,
//                       };
//
//                       console.log(teacher3);
//
//                       // Define the Directors interface extending Teacher
//                       interface Directors extends Teacher {
//                         numberOfReports: number;
//                         }
//
//                         // Example usage of Directors
//                         const director1: Directors = {
//                           firstName: 'John',
//                             lastName: 'Doe',
//                               location: 'London',
//                                 fullTimeEmployee: true,
//                                   numberOfReports: 17,
//                                   };
//
//                                   console.log(director1);
//
