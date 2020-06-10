/* eslint-disable */
const materialize = {
  collapsible(option = {}) {
    const elems = document.querySelectorAll('.collapsible')
    M.Modal.init(elems, option)
  },
  dropdown(options = {}) {
    const elems = document.querySelectorAll('.dropdown-trigger')
    M.Dropdown.init(elems, options)
  },
  select(options = {}) {
    const elems = document.querySelectorAll('.select')
    M.FormSelect.init(elems, options)
  }
}

export default (context, inject) => {
  inject('materialize', materialize)
}
