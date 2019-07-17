export default {
  add_courses (store, { category, courses_list }) {
    store.courses.push({title: category, items: courses_list})
  },
  add_content(store, item) {
    store.content.push(item)
  },
  set_after (store, data) {
    store.after = data
  },
}