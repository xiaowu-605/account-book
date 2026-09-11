export interface CategoryItem {
  emoji: string
  label: string
}

export interface Category {
  key: string
  label: string
  items: CategoryItem[]
}

export const expenseCategories: Category[] = [
  {
    key: 'food',
    label: '餐饮',
    items: [
      { emoji: '🍚', label: '餐费' },
      { emoji: '🍺', label: '酒水饮料' },
      { emoji: '🍿', label: '零食' },
      { emoji: '🍎', label: '水果' },
      { emoji: '☕', label: '咖啡' },
      { emoji: '🧋', label: '奶茶' },
    ],
  },
  {
    key: 'traffic',
    label: '出行交通',
    items: [
      { emoji: '🚌', label: '公交' },
      { emoji: '🚇', label: '地铁' },
      { emoji: '🚕', label: '打车' },
      { emoji: '🚗', label: '加油' },
      { emoji: '🚄', label: '火车' },
      { emoji: '✈️', label: '飞机' },
    ],
  },
  {
    key: 'entertainment',
    label: '休闲娱乐',
    items: [
      { emoji: '🎬', label: '电影' },
      { emoji: '🎮', label: '游戏' },
      { emoji: '🎤', label: 'KTV' },
      { emoji: '🏸', label: '运动' },
      { emoji: '🧘', label: '健身' },
      { emoji: '📚', label: '书籍' },
    ],
  },
  {
    key: 'daily',
    label: '日常支出',
    items: [
      { emoji: '🛒', label: '购物' },
      { emoji: '👕', label: '服饰' },
      { emoji: '💄', label: '化妆品' },
      { emoji: '🏠', label: '住房' },
      { emoji: '💧', label: '水电燃气' },
      { emoji: '📱', label: '话费' },
    ],
  },
  {
    key: 'other',
    label: '其他支出',
    items: [
      { emoji: '🎁', label: '礼物' },
      { emoji: '💊', label: '医疗' },
      { emoji: '📖', label: '学习' },
      { emoji: '🐱', label: '宠物' },
      { emoji: '💬', label: '其他' },
    ],
  },
]

export const incomeCategories: Category[] = [
  {
    key: 'salary',
    label: '工资',
    items: [
      { emoji: '💰', label: '工资' },
      { emoji: '🏆', label: '奖金' },
      { emoji: '🧑‍💻', label: '兼职' },
      { emoji: '📈', label: '分红' },
    ],
  },
  {
    key: 'finance',
    label: '理财',
    items: [
      { emoji: '🏦', label: '利息' },
      { emoji: '📊', label: '基金' },
      { emoji: '📈', label: '股票' },
      { emoji: '🛡️', label: '保险理赔' },
    ],
  },
  {
    key: 'redpacket',
    label: '红包',
    items: [
      { emoji: '🧧', label: '红包' },
      { emoji: '🎁', label: '礼金' },
      { emoji: '💸', label: '退款' },
    ],
  },
  {
    key: 'otherIncome',
    label: '其他收入',
    items: [
      { emoji: '🎯', label: '彩票' },
      { emoji: '🤝', label: '借入' },
      { emoji: '💬', label: '其他' },
    ],
  },
]
