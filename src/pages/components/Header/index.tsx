import styles from './index.module.less'
import { DatePicker } from 'antd-mobile'
import { DownOutline } from 'antd-mobile-icons'
import { useState } from 'react'

export const Header = ({ type }: { type: 'year' | 'month' }) => {
  const [year, setYear] = useState(new Date().getFullYear())
  const [value, setValue] = useState(new Date())
  const handleConfirm = (val: Date) => {
    setValue(val)
    type === 'month' && setYear(val.getFullYear())
  }

  return (
    <>
      {/* 顶部 */}
      <div className={styles.top}>
        {/* 年月选择 */}
        <div className={styles.top_time}>
          {type === 'month' ? (
            <div>
              <span>{year}</span>
              <span className={styles.top_time_divider}>|</span>
            </div>
          ) : (
            ''
          )}
          <div>
            <DatePicker
              precision={type}
              value={value}
              onConfirm={(val) => handleConfirm(val)}
            >
              {(val, actions) => (
                <div
                  className={styles.billTitle}
                  onClick={() => actions.open()}
                >
                  {val
                    ? type === 'year'
                      ? val.getFullYear() + '年账单'
                      : val.getMonth() + 1 + '月账单'
                    : '--'}
                  <DownOutline />
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
    </>
  )
}
