import TableColumn from './src/main.vue'

TableColumn.install = (Vue) => {
  Vue.component(TableColumn.name, TableColumn)
}

export default TableColumn
