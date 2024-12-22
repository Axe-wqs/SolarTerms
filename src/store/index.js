// src/store/index.js
import { createStore } from 'vuex';
//存储功能组件导入
export default createStore({
  state: {
    solarTerms: [
      { id: 1, name: '立春', description: '立春是二十四节气中的第一个节气，标志着春天的开始。', date: '2月3日或4日', climate: '春天开始，气温逐渐回暖。', agriculture: '开始耕种，准备春播。', customs: '吃春卷、踏青。', temperatureData: [5, 7, 10, 15, 20, 25, 30, 28, 20, 15, 10, 5] },
      { id: 2, name: '雨水', description: '雨水标志着降雨开始增多，气温回升，冬季的寒冷逐渐退去。', date: '2月18日或19日', climate: '降雨开始增多，气温回升。', agriculture: '田间管理，施肥。', customs: '拜祭龙王，祈求风调雨顺。', temperatureData: [4, 6, 9, 14, 18, 22, 27, 26, 19, 14, 8, 4] },
      { id: 3, name: '惊蛰', description: '惊蛰表示春雷开始，万物复苏。', date: '3月5日或6日', climate: '春雷开始，万物复苏。', agriculture: '春耕春播，除草。', customs: '打小人，驱邪避凶。', temperatureData: [6, 8, 12, 16, 21, 25, 29, 27, 22, 16, 10, 6] },
      { id: 4, name: '春分', description: '春分是昼夜平分，温暖的春天进入正轨。', date: '3月20日或21日', climate: '昼夜平分，温暖的春天进入正轨。', agriculture: '春灌，防治病虫害。', customs: '放风筝，祭日。', temperatureData: [8, 10, 14, 18, 23, 27, 31, 29, 24, 18, 12, 8] },
      { id: 5, name: '清明', description: '清明是踏青的好时节，也是祭祖扫墓的传统节日。', date: '4月4日或5日', climate: '温暖适中，适合户外活动。', agriculture: '移栽作物，灌溉。', customs: '踏青，祭祖扫墓。', temperatureData: [10, 12, 16, 20, 25, 29, 33, 31, 26, 20, 14, 10] },
      { id: 6, name: '谷雨', description: '谷雨是春季的最后一个节气，意味着雨水充沛，适宜播种。', date: '4月19日或20日', climate: '春季最后一个节气，雨水充沛。', agriculture: '播种，插秧。', customs: '赏花，喝谷雨茶。', temperatureData: [12, 14, 18, 22, 27, 31, 35, 33, 28, 22, 16, 12] },
      { id: 7, name: '立夏', description: '立夏是夏季的开始，天气逐渐变热。', date: '5月5日或6日', climate: '夏季开始，气温逐渐升高。', agriculture: '田间管理，防治病虫害。', customs: '吃蛋，尝新。', temperatureData: [15, 18, 22, 26, 30, 34, 36, 35, 30, 25, 20, 15] },
      { id: 8, name: '小满', description: '小满是夏季的第二个节气，气温持续升高，农田作物开始生长。', date: '5月20日或21日', climate: '气温持续升高，农田作物开始生长。', agriculture: '除草，施肥。', customs: '采茶，吃苦菜。', temperatureData: [18, 20, 24, 28, 32, 35, 37, 36, 32, 28, 22, 18] },
      { id: 9, name: '芒种', description: '芒种是播种的季节，意味着夏季的到来。', date: '6月5日或6日', climate: '播种季节，夏季到来。', agriculture: '夏收夏种，抢收抢种。', customs: '送花神，祭拜祖先。', temperatureData: [20, 22, 26, 30, 34, 37, 39, 38, 34, 30, 24, 20] },
      { id: 10, name: '夏至', description: '夏至是夏季最热的时候，白昼最长。', date: '6月21日或22日', climate: '夏季最热的时候，白昼最长。', agriculture: '田间管理，防治病虫害。', customs: '吃凉面，祭神。', temperatureData: [22, 25, 29, 33, 36, 39, 40, 39, 35, 30, 25, 22] },
      { id: 11, name: '小暑', description: '小暑表示炎热的夏季已经开始，天气渐热。', date: '7月7日或8日', climate: '炎热的夏季已经开始，天气渐热。', agriculture: '田间管理，灌溉。', customs: '吃藕，避暑。', temperatureData: [24, 27, 30, 34, 37, 40, 41, 40, 36, 32, 28, 24] },
      { id: 12, name: '大暑', description: '大暑是一年中最热的时候，气温极高。', date: '7月22日或23日', climate: '一年中最热的时候，气温极高。', agriculture: '田间管理，防治病虫害。', customs: '吃绿豆汤，避暑。', temperatureData: [26, 29, 32, 36, 39, 42, 43, 42, 38, 34, 30, 26] },
      { id: 13, name: '立秋', description: '立秋标志着秋季的开始，虽然天气依然炎热，但已进入秋季。', date: '8月7日或8日', climate: '秋季开始，虽然天气依然炎热，但已进入秋季。', agriculture: '收割，晾晒。', customs: '吃瓜，祭月。', temperatureData: [24, 26, 29, 32, 35, 36, 35, 34, 30, 26, 22, 20] },
      { id: 14, name: '处暑', description: '处暑意味着暑热逐渐消退，天气逐渐变凉。', date: '8月22日或23日', climate: '暑热逐渐消退，天气逐渐变凉。', agriculture: '田间管理，防治病虫害。', customs: '吃鸭子，祭祖。', temperatureData: [22, 24, 27, 30, 32, 34, 33, 31, 28, 24, 20, 18] },
      { id: 15, name: '白露', description: '白露是秋季的第三个节气，天气逐渐变凉，早晚气温差异较大。', date: '9月7日或8日', climate: '天气逐渐变凉，早晚气温差异较大。', agriculture: '收割，晾晒。', customs: '吃龙眼，祭月。', temperatureData: [20, 22, 25, 28, 30, 32, 30, 28, 25, 22, 18, 16] },
      { id: 16, name: '秋分', description: '秋分是昼夜平分的时刻，秋天的气候宜人。', date: '9月22日或23日', climate: '昼夜平分，秋天的气候宜人。', agriculture: '收割，晾晒。', customs: '放风筝，祭月。', temperatureData: [18, 20, 23, 26, 28, 30, 29, 27, 24, 20, 16, 14] },
      { id: 17, name: '寒露', description: '寒露意味着气温下降，白天气温依然较高，但早晚逐渐变凉。', date: '10月8日或9日', climate: '气温下降，白天气温依然较高，但早晚逐渐变凉。', agriculture: '收割，晾晒。', customs: '吃菊花糕，赏月。', temperatureData: [16, 18, 21, 24, 26, 28, 27, 25, 22, 18, 14, 12] },
      { id: 18, name: '霜降', description: '霜降表示气温逐渐下降，秋季进入尾声，天气变冷。', date: '10月23日或24日', climate: '气温逐渐下降，秋季进入尾声，天气变冷。', agriculture: '收割，晾晒。', customs: '吃柿子，赏月。', temperatureData: [14, 16, 19, 22, 24, 26, 25, 23, 20, 16, 12, 10] },
      { id: 19, name: '立冬', description: '立冬标志着冬季的开始，天气逐渐变冷。', date: '11月7日或8日', climate: '冬季开始，天气逐渐变冷。', agriculture: '收割，晾晒。', customs: '吃饺子，祭祖。', temperatureData: [10, 12, 15, 18, 20, 22, 21, 19, 16, 12, 8, 6] },
      { id: 20, name: '小雪', description: '小雪表示气温下降，部分地区开始出现雪花。', date: '11月22日或23日', climate: '气温下降，部分地区开始出现雪花。', agriculture: '收割，晾晒。', customs: '吃糍粑，祭祖。', temperatureData: [8, 10, 12, 15, 18, 20, 19, 17, 14, 10, 6, 4] },
      { id: 21, name: '大雪', description: '大雪是冬季的第二个节气，雪量增多，气温进一步降低。', date: '12月7日或8日', climate: '冬季第二个节气，雪量增多，气温进一步降低。', agriculture: '收割，晾晒。', customs: '吃火锅，祭祖。', temperatureData: [6, 8, 10, 12, 15, 18, 17, 15, 12, 8, 4, 2] },
      { id: 22, name: '冬至', description: '冬至是冬季最冷的时刻，白昼最短，夜晚最长。', date: '12月21日或22日', climate: '冬季最冷的时刻，白昼最短，夜晚最长。', agriculture: '收割，晾晒。', customs: '吃饺子，祭祖。', temperatureData: [4, 6, 8, 10, 12, 14, 13, 11, 8, 6, 4, 2] },
      { id: 23, name: '小寒', description: '小寒表示气候变得寒冷，寒冷的冬季即将到来。', date: '1月5日或6日', climate: '气候变得寒冷，寒冷的冬季即将到来。', agriculture: '收割，晾晒。', customs: '吃年糕，祭祖。', temperatureData: [2, 4, 6, 8, 10, 12, 11, 9, 6, 4, 2, 0] },
      { id: 24, name: '大寒', description: '大寒是冬季最冷的时候，气温降到最低。', date: '1月20日或21日', climate: '冬季最冷的时候，气温降到最低。', agriculture: '收割，晾晒。', customs: '吃年糕，祭祖。', temperatureData: [0, 2, 4, 6, 8, 10, 9, 7, 4, 2, 0, -2] }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});