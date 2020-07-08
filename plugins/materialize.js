/* eslint-disable */
const materialize = {
  collapsible(option = {}) {
    const elems = document.querySelectorAll('.collapsible')
    M.Modal.init(elems, option)
  },
  dropdown(options = {}) {
    const elems = document.querySelectorAll('.dropdown-trigger')
    elems.forEach(elem => {
      M.Dropdown.init(elem, options)
      var instance = M.Dropdown.getInstance(elem)

      for (let opt in options) {
        if (opt.destroy && opt.destroy === true) {
          elem.destroy()
        }
      }
    })
  },
  select(options = {}) {
    const elems = document.querySelectorAll('.select')
    M.FormSelect.init(elems, options)
  },
  modal(options = {}) {
    const elems = document.querySelectorAll('.modal')
    M.Modal.init(elems, options)
  },
  updateTextField() {
    M.updateTextFields()
  }
}

export default (context, inject) => {
  inject('materialize', materialize)
}
