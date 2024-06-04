// импорт компонентов глобально через файл index.js (умный способ)

// import UInput from './UInput.vue'
// import UFile from './UInput.vue'
// import UCheckBox from './UInput.vue'
// import URadio from './UInput.vue'
// import UBtn from './UBtn.vue'


// const components = [
//   { name: 'UInput', component: UInput },
//   { name: 'UFile', component: UFile },
//   { name: 'UCheckBox', component: UCheckBox },
//   { name: 'URadio', component: URadio },
//   { name: 'UBtn', component: UBtn },

// ]

// // export default {
// //   install(app) {
// //     components.forEach((component) => {
// //       app.component(component.name, component.component)
// //     })
// //   },
// // }
// // Тоже самое, только с диструтуризацией

// export default {
//   install(app) {
//     components.forEach(({ name, component }) => {
//       app.component(name, component)
//     })
//   },
// }
