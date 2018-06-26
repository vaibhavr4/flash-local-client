export class SectionServiceClient {

  SECTION_URL = 'https://student-coursemanager-node.herokuapp.com/api/course/COURSEID/section';

  findSectionsForStudent() {
    const url = 'https://student-coursemanager-node.herokuapp.com/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    console.log("In enroll client");
    const url = 'https://student-coursemanager-node.herokuapp.com/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    }).then(response => response.json());
  }

  unrollStudentInSection(sectionId) {
    const url = 'https://student-coursemanager-node.herokuapp.com/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  findCourseById(courseId)
  {
    return fetch('https://course-manager-webdev.herokuapp.com/api/course/'+courseId)
      .then(response => response.json());
  }

  createSection(courseId, name, seats) {
    const section = {courseId, name, seats};
    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  deleteSection(sectionId) {
    return fetch('https://student-coursemanager-node.herokuapp.com/api/section' + '/' + sectionId, {
      method: 'delete'
    });
  }

  updateSection(sectionId, newName, newMax, newRem) {
    const section = {id : sectionId, newName: newName, newMax: newMax, newRem: newRem};
    return fetch('https://student-coursemanager-node.herokuapp.com/api/section' + '/' + sectionId, {
      method: 'put',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
