'use strict';

/** @type {import('sequelize-cli').Migration} */
const productRowData = [
  {
    'name': '炭培烏龍',
    'price': 30
  },
  {
    'name': '蜜桃美式',
    'price': 100
  },
  {
    'name': '漂浮紅茶',
    'price': 55
  },
  {
    'name': '洋甘菊大麥茶',
    'price': 40
  },
  {
    'name': '奇異果冰茶',
    'price': 75
  },
  {
    'name': '可可鮮奶凍飲',
    'price': 80
  },
  {
    'name': '奇異果蜜茶',
    'price': 100
  },
  {
    'name': '黑糖熔岩鮮奶',
    'price': 70
  },
  {
    'name': '百香果果昔',
    'price': 125
  },
  {
    'name': '加料奶茶',
    'price': 40
  },
  {
    'name': '蘋果綠',
    'price': 95
  },
  {
    'name': '烏龍鮮奶茶',
    'price': 55
  },
  {
    'name': '漂浮咖啡冰沙',
    'price': 70
  },
  {
    'name': '茉香綠茶',
    'price': 30
  },
  {
    'name': '芒果果昔',
    'price': 125
  },
  {
    'name': '漂浮可可冰沙',
    'price': 70
  },
  {
    'name': '手選紅茶',
    'price': 30
  },
  {
    'name': '高山青茶',
    'price': 40
  },
  {
    'name': '薰衣草蜜茶',
    'price': 95
  },
  {
    'name': '黑醋栗玫瑰茶',
    'price': 40
  },
  {
    'name': 'OREO可可冰沙',
    'price': 70
  },
  {
    'name': '奇異果汁(罐裝)',
    'price': 69
  },
  {
    'name': '百香果綠茶',
    'price': 65
  },
  {
    'name': '甘蔗青',
    'price': 60
  },
  {
    'name': '芒果綠茶',
    'price': 75
  },
  {
    'name': '西瓜鮮奶',
    'price': 59
  },
  {
    'name': '手選鮮奶茶',
    'price': 55
  },
  {
    'name': '蜜柚紅茶',
    'price': 90
  },
  {
    'name': '蜂蜜檸檬蘆薈',
    'price': 85
  },
  {
    'name': '芝士奶蓋綠茶',
    'price': 55
  },
  {
    'name': '奇異蘋果(罐裝)',
    'price': 69
  },
  {
    'name': '漂浮可可鮮奶',
    'price': 70
  },
  {
    'name': '芒果冰沙',
    'price': 130
  },
  {
    'name': '木瓜鮮奶',
    'price': 69
  },
  {
    'name': '洋甘菊香柚茶',
    'price': 40
  },
  {
    'name': '檸檬柳橙汁(罐裝)',
    'price': 69
  },
  {
    'name': '百香果冰沙',
    'price': 130
  },
  {
    'name': '招牌芋泥撞鮮奶',
    'price': 90
  },
  {
    'name': '薰衣草美式',
    'price': 100
  },
  {
    'name': '經典果昔',
    'price': 110
  },
  {
    'name': '荔玫果昔',
    'price': 125
  },
  {
    'name': '綠果昔(青蘋果奇異果)',
    'price': 110
  },
  {
    'name': '芒果冰茶',
    'price': 95
  },
  {
    'name': '檸檬草薄荷茶',
    'price': 40
  },
  {
    'name': '萊姆國寶茶',
    'price': 40
  },
  {
    'name': '藍莓優酪乳(罐裝)',
    'price': 69
  },
  {
    'name': '藍莓果昔',
    'price': 90
  },
  {
    'name': '藍莓冰茶',
    'price': 80
  },
  {
    'name': '荔枝玫瑰冰沙',
    'price': 130
  },
  {
    'name': '芝士奶蓋紅茶',
    'price': 55
  },
  {
    'name': '秘藏鐵觀音',
    'price': 30
  },
  {
    'name': '手工熬煮冬瓜茶',
    'price': 30
  },
  {
    'name': '關西仙草茶',
    'price': 55
  },
  {
    'name': '冬瓜鮮奶',
    'price': 55
  },
  {
    'name': '冬瓜仙草茶',
    'price': 60
  },
  {
    'name': '冬瓜仙草鮮奶',
    'price': 85
  },
  {
    'name': '蘋果醋冰茶',
    'price': 60
  },
  {
    'name': '梅子醋冰茶',
    'price': 60
  },
  {
    'name': '(冬)草莓牛奶',
    'price': 130
  },
  {
    'name': '(冬)草莓冰茶',
    'price': 100
  },
  {
    'name': '(冬)草莓果昔',
    'price': 115
  },
  {
    'name': '桑椹果昔',
    'price': 125
  },
  {
    'name': '桑椹冰茶',
    'price': 95
  },
  {
    'name': '桑椹醋冰茶',
    'price': 110
  },
  {
    'name': '桑椹冰沙',
    'price': 130
  },
  {
    'name': '火龍果果昔',
    'price': 125
  },
  {
    'name': '火龍果冰沙',
    'price': 130
  },
  {
    'name': '奇異果果昔',
    'price': 125
  },
  {
    'name': '鐵觀音鮮奶茶',
    'price': 55
  },
  {
    'name': '茉香綠鮮奶茶',
    'price': 55
  },
  {
    'name': '鐵觀音鮮奶茶',
    'price': 55
  },
  {
    'name': '火龍果蜜桃果昔',
    'price': 110
  },
  {
    'name': '蔓莓果昔',
    'price': 120
  },
  {
    'name': '熱帶水果綜合果昔',
    'price': 110
  },
  {
    'name': '芒果柳橙果昔',
    'price': 120
  },
  {
    'name': '芒果酪梨牛奶昔',
    'price': 150
  },
  {
    'name': '蘋果石榴果昔',
    'price': 100
  },
  {
    'name': '蘋果香蕉果昔',
    'price': 90
  },
  {
    'name': '石榴香蕉果昔',
    'price': 90
  },
  {
    'name': '蝶豆香蕉果昔',
    'price': 100
  },
  {
    'name': '奇異芒果果昔',
    'price': 120
  },
  {
    'name': '香蕉牛奶果昔',
    'price': 110
  },
  {
    'name': '漂浮鐵觀音',
    'price': 55
  },
  {
    'name': '葡萄柚綠茶',
    'price': 65
  },
  {
    'name': '氣泡洋甘菊香柚',
    'price': 60
  },
  {
    'name': '氣泡萊姆國寶',
    'price': 60
  },
  {
    'name': '氣泡黑醋栗玫瑰',
    'price': 60
  },
  {
    'name': '氣泡檸檬草薄荷',
    'price': 60
  },
  {
    'name': '氣泡洋甘菊大麥',
    'price': 60
  }
]

const customerRowData = [
  {
    "name": "陳小姐"
  },
  {
    "name": "林先生"
  },
  {
    "name": "黃小姐"
  },
  {
    "name": "張先生"
  },
  {
    "name": "李先生"
  },
  {
    "name": "王先生"
  },
  {
    "name": "吳小姐"
  },
  {
    "name": "劉小姐"
  },
  {
    "name": "蔡小姐"
  },
  {
    "name": "楊先生"
  },
  {
    "name": "許小姐"
  },
  {
    "name": "鄭小姐"
  },
  {
    "name": "謝先生"
  },
  {
    "name": "郭小姐"
  },
  {
    "name": "洪小姐"
  },
  {
    "name": "曾先生"
  },
  {
    "name": "邱先生"
  },
  {
    "name": "廖小姐"
  },
  {
    "name": "賴小姐"
  },
  {
    "name": "周小姐"
  }
]


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products',
      productRowData.map(pd => ({
        name: pd.name,
        price: pd.price,
        createdAt: new Date(),
        updatedAt: new Date()
      }))
    )
    let products = await queryInterface.sequelize.query('Select * From Products')
    products = products[0]
    await queryInterface.bulkInsert('Customers',
      customerRowData.map(ct => {
        let index = Math.floor(Math.random() * products.length)
        return {
          name: ct.name,
          favoriteId: products[index].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
