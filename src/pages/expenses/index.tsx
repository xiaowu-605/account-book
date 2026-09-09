import styles from './index.module.less'
import { useState } from 'react'
import { Header } from '../components/Header/index'

export const Expenses = () => {
  return (
    <div className="page">
      {/* 顶部 */}
      <Header type="month" />
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
