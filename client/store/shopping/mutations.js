export default {
  add_item (store, { title, image, price }) {
    store.items.push({title: title, image: image, price: price})
    store.subtotal += price
    store.total = store.subtotal + ( store.subtotal * store.tax)
  },
  add_content(store, item) {
    store.content.push(item)
  },
  set_after (store, data) {
    store.after = data
  },
}