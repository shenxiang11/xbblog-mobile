import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('category', value => {
  const dict = {
    'code': '代码',
    'think': '思考',
    'fitness': '健身'
  }

  return dict[value] || value
})

Vue.filter('time', value => {
  return dayjs(value).format('YYYY-MM-DD')
})

Vue.filter('datetime', value => {
  return dayjs(value).format('YYYY-MM-DD HH:mm')
})
