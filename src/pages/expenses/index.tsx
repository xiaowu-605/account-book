import styles from './index.module.less'
import { DownOutline } from 'antd-mobile-icons'
import { DatePicker } from 'antd-mobile'
import { useState } from 'react'

export const Expenses = () => {
  const [year, setYear] = useState(new Date().getFullYear())
  const [month, setMonth] = useState(new Date())
  const handleConfirm = (val: Date) => {
    setMonth(val)
    setYear(val.getFullYear())
  }
  return (
    <div className="page">
      {/* 顶部 */}
      <div className={styles.top}>
        {/* 年月选择 */}
        <div className={styles.top_time}>
          <span>{year}</span>
          <span className={styles.top_time_divider}>|</span>
          <div>
            <DatePicker
              precision="month"
              value={month}
              onConfirm={(val) => handleConfirm(val)}
            >
              {(value, actions) => (
                <div
                  className={styles.billTitle}
                  onClick={() => actions.open()}
                >
                  {value ? value.getMonth() + 1 : '--'}月账单 <DownOutline />
                </div>
              )}
            </DatePicker>
          </div>
        </div>
        {/* 总额显示 */}
        <div className={styles.top_total}>
          <div className={styles.top_total_item}>
            <div className={styles.top_total_item_money}>1300</div>
            <div className={styles.top_total_item_txt}>支出</div>
          </div>
          <div className={`${styles.top_total_item} ${styles.item2}`}>
            <div className={styles.top_total_item_money}>23300</div>
            <div className={styles.top_total_item_txt}>收入</div>
          </div>
          <div className={styles.top_total_item}>
            <div className={styles.top_total_item_money}>10</div>
            <div className={styles.top_total_item_txt}>结余</div>
          </div>
        </div>
      </div>
      {/* 详细列表 */}
      <div className={styles.list}>
        <div className={styles.content}>
          <div className={styles.list_item}>
            <div className={styles.list_item_top}>
              <div>3月29日</div>
              <div className={styles.list_item_top_money}>
                <div>
                  <span className={styles.txt1}>支出: </span>
                  <span>12.5</span>
                </div>
                <div>
                  <span className={styles.txt2}>收入: </span>
                  <span>23.0</span>
                </div>
                <div>
                  <span>结余: </span>
                  <span className={styles.txt3}>23.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 类型列表 */}
        <div className={styles.typeList}>
          <div className={styles.typeList_item}>
            <div className={styles.typeList_item_left}>
              <div className={styles.typeList_item_left_icon}>
                <span>🍔</span>
              </div>
              <div className={styles.typeList_item_left_name}>餐饮</div>
            </div>
            <div className={styles.typeList_item_right}>
              <div className={styles.typeList_item_right_amount}>-12.5</div>
            </div>
          </div>
          <div className={styles.typeList_item}>
            <div className={styles.typeList_item_left}>
              <div className={styles.typeList_item_left_icon}>
                <span>🍔</span>
              </div>
              <div className={styles.typeList_item_left_name}>餐饮</div>
            </div>
            <div className={styles.typeList_item_right}>
              <div className={styles.typeList_item_right_amount}>-12.5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
