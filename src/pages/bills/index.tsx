import styles from './index.module.less'
import { Header } from '../components/Header/index'
import { useState } from 'react'

export const Bills = () => {
  return (
    <div className="page">
      {/* 顶部 */}
      <Header type="year" />
      {/* 详细列表 */}
      <div className={styles.list}>
        <div className={styles.list_item}>
          <div>1月</div>
          <div className={styles.list_item_money}>
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
  )
}
