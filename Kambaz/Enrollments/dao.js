import Database from "../Database/index.js";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  const enrollment = {
    _id: Date.now().toString(),
    user: userId,
    course: courseId,
  };
  enrollments.push(enrollment);
  return enrollment;
}

export function getEnrollmentsForUser(userId) {
  const { enrollments } = Database;
  return enrollments.filter((enrollment) => enrollment.user === userId);
}

export function deleteEnrollment(enrollmentId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (enrollment) => enrollment._id !== enrollmentId
  );
}

// import Database from "../Database/index.js";
// import { v4 as uuidv4 } from "uuid";

// export function findEnrollmentsForCourse(courseId) {
//   const { enrollments } = Database;
//   return enrollments.filter((enrollment) => enrollment.course === courseId);
// }

// export function createEnrollment(enrollment) {
//   const newEnrollment = { ...enrollment, _id: uuidv4() };
//   Database.enrollments = [...Database.enrollments, newEnrollment];
//   return newEnrollment;
// }

// export function enrollUserInCourse(id, userId, courseId) {
//   const { enrollments } = Database;
//   enrollments.push({ _id: id, user: userId, course: courseId });
// }

// export function findCoursesForUser(userId) {
//   const { enrollments } = Database;
//   return enrollments.filter((enrollment) => enrollment.user === userId);
// }
