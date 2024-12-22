// src/store/index.js
import { createStore } from 'vuex';

// 存储功能组件导入
export default createStore({
  state: {
    solarTerms: [
      {
        id: 1,
        name: "立春",
        description: "立春是二十四节气中的第一个节气，标志着春天的开始。",
        date: "2月3日",
        climate: "春天开始，气温逐渐回暖。",
        agriculture: "开始耕种，准备春播。",
        customs: "吃春卷、踏青。",
        activities: {
          welcomingSpring: {
            title: "迎春",
            description: "迎春是立春的重要活动，须事先做好准备，进行预演，俗称“演春”，目的是把春天和句芒神接回来。句芒为古代民间神话中的春神，即草木神，也是主宰生命生长之神。"
          },
          whipSpringOx: {
            title: "鞭春牛",
            description: "又称打土牛、打春、鞭春，是汉族和白族立春的主要习俗。古代立春时举行鞭春之礼，既是鼓励农耕，也承载着人们对五谷丰登的美好期盼。"
          }
        },
        health: {
          tips: "立春时节，气温回暖，适合多吃一些绿色蔬菜，增强身体的免疫力。",
          traditionalMedicine: "春季养生应以“肝”为主，适合多吃一些清淡的食物，保持心情愉快。"
        },
        poetry: [
          {
            title: "春晓",
            author: "孟浩然",
            content: "春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。"
          }
        ]
      },
      {
        id: 2,
        name: "雨水",
        description: "雨水标志着降雨开始增多，气温回升，冬季的寒冷逐渐退去。",
        date: "2月18日",
        climate: "降雨开始增多，气温回升。",
        agriculture: "田间管理，施肥。",
        customs: "拜祭龙王，祈求风调雨顺。",
        activities: {},
        health: {
          tips: "雨水时节，注意保暖，适合多喝水，保持身体水分。",
          traditionalMedicine: "适合多吃一些清淡的食物，增强身体抵抗力。"
        },
        poetry: []
      },
      {
        id: 3,
        name: "惊蛰",
        description: "惊蛰表示春雷开始，万物复苏。",
        date: "3月5日",
        climate: "春雷开始，万物复苏。",
        agriculture: "春耕春播，除草。",
        customs: "打小人，驱邪避凶。",
        activities: {},
        health: {
          tips: "惊蛰时节，适合多吃一些温补的食物，增强体质。",
          traditionalMedicine: "春季养生应以“肝”为主，保持心情愉快。"
        },
        poetry: []
      },
      {
        id: 4,
        name: "春分",
        description: "春分是昼夜平分，温暖的春天进入正轨。",
        date: "3月20日",
        climate: "昼夜平分，温暖的春天进入正轨。",
        agriculture: "春灌，防治病虫害。",
        customs: "放风筝，祭日。",
        activities: {},
        health: {
          tips: "春分时节，适合多吃一些新鲜的蔬菜和水果，保持营养均衡。",
          traditionalMedicine: "适合多做户外运动，增强身体素质。"
        },
        poetry: []
      },
      {
        id: 5,
        name: "清明",
        description: "清明是踏青的好时节，也是祭祖扫墓的传统节日。",
        date: "4月4日",
        climate: "温暖适中，适合户外活动。",
        agriculture: "移栽作物，灌溉。",
        customs: "踏青，祭祖扫墓。",
        activities: {},
        health: {
          tips: "清明时节，适合多吃一些清淡的食物，保持身体健康。",
          traditionalMedicine: "适合多喝茶，清热解毒。"
        },
        poetry: []
      },
      {
        id: 6,
        name: "谷雨",
        description: "谷雨是春季的最后一个节气，意味着雨水充沛，适宜播种。",
        date: "4月19日",
        climate: "春季最后一个节气，雨水充沛。",
        agriculture: "播种，插秧。",
        customs: "赏花，喝谷雨茶。",
        activities: {},
        health: {
          tips: "谷雨时节，适合多吃一些富含维生素的食物，增强免疫力。",
          traditionalMedicine: "适合多做户外活动，保持身体活力。"
        },
        poetry: []
      },
      {
        id: 7,
        name: "立夏",
        description: "立夏是夏季的开始，天气逐渐变热。",
        date: "5月5日",
        climate: "夏季开始，气温逐渐升高。",
        agriculture: "田间管理，防治病虫害。",
        customs: "吃蛋，尝新。",
        activities: {},
        health: {
          tips: "立夏时节，适合多吃一些清凉的食物，保持身体舒适。",
          traditionalMedicine: "适合多喝水，防止中暑。"
        },
        poetry: []
      },
      {
        id: 8,
        name: "小满",
        description: "小满是夏季的第二个节气，气温持续升高，农田作物开始生长。",
        date: "5月20日",
        climate: "气温持续升高，农田作物开始生长。",
        agriculture: "除草，施肥。",
        customs: "采茶，吃苦菜。",
        activities: {},
        health: {
          tips: "小满时节，适合多吃一些清淡的食物，保持身体健康。",
          traditionalMedicine: "适合多做户外活动，增强体质。"
        },
        poetry: []
      },
      {
        id: 9,
        name: "芒种",
        description: "芒种是播种的季节，意味着夏季的到来。",
        date: "6月5日",
        climate: "播种季节，夏季到来。",
        agriculture: "夏收夏种，抢收抢种。",
        customs: "送花神，祭拜祖先。",
        activities: {},
        health: {
          tips: "芒种时节，适合多吃一些富含蛋白质的食物，增强体力。",
          traditionalMedicine: "适合多喝水，保持身体水分。"
        },
        poetry: []
      },
      {
        id: 10,
        name: "夏至",
        description: "夏至是夏季最热的时候，白昼最长。",
        date: "6月21日",
        climate: "夏季最热的时候，白昼最长。",
        agriculture: "田间管理，防治病虫害。",
        customs: "吃凉面，祭神。",
        activities: {},
        health: {
          tips: "夏至时节，适合多吃一些清凉的食物，防止中暑。",
          traditionalMedicine: "适合多喝绿豆汤，清热解毒。"
        },
        poetry: []
      },
      {
        id: 11,
        name: "小暑",
        description: "小暑表示炎热的夏季已经开始，天气渐热。",
        date: "7月7日",
        climate: "炎热的夏季已经开始，天气渐热。",
        agriculture: "田间管理，灌溉。",
        customs: "吃藕，避暑。",
        activities: {},
        health: {
          tips: "小暑时节，适合多吃一些清凉的食物，保持身体舒适。",
          traditionalMedicine: "适合多喝水，防止中暑。"
        },
        poetry: []
      },
      {
        id: 12,
        name: "大暑",
        description: "大暑是一年中最热的时候，气温极高。",
        date: "7月22日",
        climate: "一年中最热的时候，气温极高。",
        agriculture: "田间管理，防治病虫害。",
        customs: "吃绿豆汤，避暑。",
        activities: {},
        health: {
          tips: "大暑时节，适合多吃一些清凉的食物，保持身体健康。",
          traditionalMedicine: "适合多喝水，防止中暑。"
        },
        poetry: []
      },
      {
        id: 13,
        name: "立秋",
        description: "立秋标志着秋季的开始，虽然天气依然炎热，但已进入秋季。",
        date: "8月7日",
        climate: "秋季开始，虽然天气依然炎热，但已进入秋季。",
        agriculture: "收割，晾晒。",
        customs: "吃瓜，祭月。",
        activities: {},
        health: {
          tips: "立秋时节，适合多吃一些清淡的食物，保持身体健康。",
          traditionalMedicine: "适合多喝水，防止中暑。"
        },
        poetry: []
      },
      {
        id: 14,
        name: "处暑",
        description: "处暑意味着暑热逐渐消退，天气逐渐变凉。",
        date: "8月22日",
        climate: "暑热逐渐消退，天气逐渐变凉。",
        agriculture: "田间管理，防治病虫害。",
        customs: "吃鸭子，祭祖。",
        activities: {},
        health: {
          tips: "处暑时节，适合多吃一些清淡的食物，保持身体健康。",
          traditionalMedicine: "适合多做户外活动，增强体质。"
        },
        poetry: []
      },
      {
        id: 15,
        name: "白露",
        description: "白露是秋季的第三个节气，天气逐渐变凉，早晚气温差异较大。",
        date: "9月7日",
        climate: "天气逐渐变凉，早晚气温差异较大。",
        agriculture: "收割，晾晒。",
        customs: "吃龙眼，祭月。",
        activities: {},
        health: {
          tips: "白露时节，适合多吃一些温补的食物，增强体质。",
          traditionalMedicine: "适合多喝水，保持身体水分。"
        },
        poetry: []
      },
      {
        id: 16,
        name: "秋分",
        description: "秋分是昼夜平分的时刻，秋天的气候宜人。",
        date: "9月22日",
        climate: "昼夜平分，秋天的气候宜人。",
        agriculture: "收割，晾晒。",
        customs: "放风筝，祭月。",
        activities: {},
        health: {
          tips: "秋分时节，适合多吃一些新鲜的水果和蔬菜，保持营养均衡。",
          traditionalMedicine: "适合多做户外活动，增强身体素质。"
        },
        poetry: []
      },
      {
        id: 17,
        name: "寒露",
        description: "寒露意味着气温下降，白天气温依然较高，但早晚逐渐变凉。",
        date: "10月8日",
        climate: "气温下降，白天气温依然较高，但早晚逐渐变凉。",
        agriculture: "收割，晾晒。",
        customs: "吃菊花糕，赏月。",
        activities: {},
        health: {
          tips: "寒露时节，适合多吃一些温补的食物，增强体质。",
          traditionalMedicine: "适合多喝水，保持身体水分。"
        },
        poetry: []
      },
      {
        id: 18,
        name: "霜降",
        description: "霜降表示气温逐渐下降，秋季进入尾声，天气变冷。",
        date: "10月23日",
        climate: "气温逐渐下降，秋季进入尾声，天气变冷。",
        agriculture: "收割，晾晒。",
        customs: "吃柿子，赏月。",
        activities: {},
        health: {
          tips: "霜降时节，适合多吃一些温补的食物，增强体质。",
          traditionalMedicine: "适合多喝水，保持身体水分。"
        },
        poetry: []
      },
      {
        id: 19,
        name: "立冬",
        description: "立冬标志着冬季的开始，天气逐渐变冷。",
        date: "11月7日",
        climate: "冬季开始，天气逐渐变冷。",
        agriculture: "收割，晾晒。",
        customs: "吃饺子，祭祖。",
        activities: {},
        health: {
          tips: "立冬时节，适合多吃一些温补的食物，增强体质。",
          traditionalMedicine: "适合多喝水，保持身体水分。"
        },
        poetry: []
      },
      {
        id: 20,
        name: "小雪",
        description: "小雪表示气温下降，部分地区开始出现雪花。",
        date: "11月22日",
        climate: "气温下降，部分地区开始出现雪花。",
        agriculture: "收割，晾晒。",
        customs: "吃糍粑，祭祖。",
        activities: {},
        health: {
          tips: "小雪时节，适合多吃一些温补的食物，增强体质。",
          traditionalMedicine: "适合多喝水，保持身体水分。"
        },
        poetry: []
      },
      {
        id: 21,
        name: "大雪",
        description: "大雪是冬季的第二个节气，雪量增多，气温进一步降低。",
        date: "12月7日",
        climate: "冬季第二个节气，雪量增多，气温进一步降低。",
        agriculture: "收割，晾晒。",
        customs: "吃火锅，祭祖。",
        activities: {},
        health: {
          tips: "大雪时节，适合多吃一些温补的食物，增强体质。",
          traditionalMedicine: "适合多喝水，保持身体水分。"
        },
        poetry: []
      },
      {
        id: 22,
        name: "冬至",
        description: "冬至是冬季最冷的时刻，白昼最短，夜晚最长。",
        date: "12月21日",
        climate: "冬季最冷的时刻，白昼最短，夜晚最长。",
        agriculture: "收割，晾晒。",
        customs: "吃饺子，祭祖。",
        activities: {},
        health: {
          tips: "冬至时节，适合多吃一些温补的食物，增强体质。",
          traditionalMedicine: "适合多喝水，保持身体水分。"
        },
        poetry: [
          {
            title: "小寒",
            author: "",
            content: ""
          }
      ]
      },
      {
        id: 23,
        name: "小寒",
        description: "小寒表示气候变得寒冷，寒冷的冬季即将到来。",
        date: "1月5日",
        climate: "气候变得寒冷，寒冷的冬季即将到来。",
        agriculture: "收割，晾晒。",
        customs: "吃年糕，祭祖。",
        activities: {},
        health: {
          tips: "数九寒天，健康人群适当锻炼能增强身体对寒冷的适应能力。人们此时的锻炼或户外活动需要根据个人的身体情况量力而为，切忌盲目强身健体，注意方式方法。特别是冰雪运动，需要在有安全保障的场地内进行。中医认为，人体内的血液，得温则易于流动，得寒就容易停滞，所谓“血遇寒则凝”。因此，小寒节气里，患心脑血管疾病和高血压的人会有病情加重的风险，患中风者可能增多。因而，在日常生活和锻炼中，要特别注意保暖，尤其是老年人。在寒流袭击的天气里，更要防止呼吸道疾病的发生。小寒时节，适合多吃一些温补的食物，增强体质。",
          traditionalMedicine: "俗话说“小寒大寒，冻作一团”。人们的寒冬食俗偏重于暖性食物，从饮食养生的角度讲，可以多食用一些温热食物以补益身体。适合多喝水，保持身体水分。"
        },
        poetry: [
          {
            title:"冬夜寄温飞卿",
            author:"鱼玄机",
            content:"苦思搜诗灯下吟，不眠长夜怕寒衾。满庭木叶愁风起，透幌纱窗惜月沉。"
          }
        ]
      },
      {
        id: 24,
        name: "大寒",
        description: "大寒是冬季最冷的时候，气温降到最低。",
        date: "1月20日",
        climate: "冬季最冷的时候，气温降到最低。",
        agriculture: "收割，晾晒。",
        customs: "吃年糕，祭祖。",
        activities: {

        },
        health: {
          tips: "大寒节气正值冬与春交替，饮食也需顺应季节的变化。与冬至以来的温补不同，大寒进补的食物量宜逐渐减少，具有升散性质的食物可适当添加，以适应春天万物的升发。例如，广东佛山民间有大寒时节用瓦锅蒸煮糯米饭的习俗，安徽安庆有大寒炸春卷的做法，南京则有大寒炖鸡喝鸡汤的食俗。",
          traditionalMedicine: "古人讲究“春发、夏长、秋收、冬藏”的养生原则，认为这样可以保持“春安、夏泰、秋吉、冬祥”。冬三月是生机潜伏、万物蛰藏的时令，大寒的养生，更应着眼于“藏”。此时，人体的阴阳消长、新陈代谢也处于相对缓慢的时期，因此，起居上宜早睡晚起，室外活动不宜过早，避免急躁发怒、过度操劳，这样才有利于安度寒冬。适合多喝水，保持身体水分。"
        },
        poetry: [
          {
            title: "寒夜",
            author: "杜耒",
            content: "寒夜客来茶当酒，竹炉汤沸火初红。寻常一样窗前月，才有梅花便不同。"
          }
        ]
      }
    ]
    
  },
  mutations: {},
  actions: {},
  modules: {}
});
