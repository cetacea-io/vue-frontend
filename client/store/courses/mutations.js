export default {
  add_courses (store, { area, courses_list }) {
    store.courses.push({title: area, items: courses_list})
  }
}