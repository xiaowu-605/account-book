import styles from './index.module.less'
import { useState } from 'react'
import { DatePicker, Input, Button, Toast } from 'antd-mobile'
import { DownOutline } from 'antd-mobile-icons'
import { expenseCategories, incomeCategories } from './category'

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate()

export const Account = () => {
  const [activeType, setActiveType] = useState('支出')
  const [date, setDate] = useState(new Date())
  const [amount, setAmount] = useState('')
  const [selectedItem, setSelectedItem] = useState(expenseCategories[0].items[0])

  const categories = activeType === '支出' ? expenseCategories : incomeCategories

  const handleTypeChange = (type: string) => {
    const list = type === '支出' ? expenseCategories : incomeCategories
    setActiveType(type)
    setSelectedItem(list[0].items[0])
  }

  const handleAmountChange = (val: string) => {
    // 只保留数字和一个小数点，最多两位小数
    setAmount(val.replace(/[^\d.]/g, '').replace(/^(\d+)(\.\d{0,2})?.*$/, '$1$2'))
  }

  const handleSave = () => {
    if (!amount) {
      Toast.show('请输入金额')
      return
    }
    const record = {
      type: activeType,
      date,
      amount: Number(amount),
      category: selectedItem,
    }
    console.log('保存记录', record)
    Toast.show('保存成功')
    setAmount('')
  }

  return (
    <div className="page">
      {/* 顶部 */}
      <div className={styles.header}>
        <div className={styles.header_title}>记一笔</div>
        {/* 支出/收入选择 */}
        <div className={styles.header_type}>
          <div
            className={`${styles.header_type_item} ${activeType === '支出' ? styles.active : ''}`}
            onClick={() => handleTypeChange('支出')}
          >
            支出
          </div>
          <div
            className={`${styles.header_type_item} ${activeType === '收入' ? styles.active : ''}`}
            onClick={() => handleTypeChange('收入')}
          >
            收入
          </div>
        </div>
        {/* 日期选择、金额填写 */}
        <div className={styles.header_form}>
          <DatePicker
            precision="day"
            value={date}
            title="选择日期"
            onConfirm={(val) => setDate(val)}
          >
            {(_, actions) => {
              const label = isSameDay(date, new Date())
                ? '今天'
                : `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
              return (
                <div
                  className={styles.header_form_date}
                  onClick={() => actions.open()}
                >
                  {label}
                  <DownOutline />
                </div>
              )
            }}
          </DatePicker>
          <div className={styles.header_form_amount}>
            <span className={styles.header_form_symbol}>¥</span>
            <Input
              type="text"
              inputMode="decimal"
              placeholder="0.00"
              value={amount}
              onChange={handleAmountChange}
              className={styles.header_form_input}
              style={{ '--text-align': 'right' }}
            />
          </div>
        </div>
      </div>
      {/* 类型选择 */}
      <div className={styles.category}>
        {categories.map((cat) => (
          <div key={cat.key} className={styles.category_group}>
            <div className={styles.category_group_title}>{cat.label}</div>
            <div className={styles.category_group_grid}>
              {cat.items.map((item) => {
                const isSelected = item === selectedItem
                return (
                  <div
                    key={item.label}
                    className={`${styles.category_item} ${isSelected ? styles.active : ''}`}
                    onClick={() => setSelectedItem(item)}
                  >
                    <span className={styles.category_item_emoji}>{item.emoji}</span>
                    <span className={styles.category_item_label}>{item.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      {/* 保存 */}
      <div className={styles.save}>
        <Button
          block
          color="primary"
          size="large"
          onClick={handleSave}
          style={{ '--background-color': '#ffb300', '--border-color': '#ffb300' }}
        >
          保存
        </Button>
      </div>
    </div>
  )
}
