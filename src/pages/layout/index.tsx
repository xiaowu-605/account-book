import { Outlet } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  AddCircleOutline,
  BillOutline,
  ReceivePaymentOutline,
} from 'antd-mobile-icons'
import styles from './index.module.less'

export const Layout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value: string) => {
    navigate(value)
  }

  const tabs = [
    {
      key: '/expenses',
      title: '月度收支',
      icon: <ReceivePaymentOutline />,
    },
    {
      key: '/account',
      title: '记账',
      icon: <AddCircleOutline />,
    },
    {
      key: '/bills',
      title: '年度账单',
      icon: <BillOutline />,
    },
  ]
  return (
    <>
      <div className={styles.content}>
        <Outlet />
      </div>
      <div className={styles.tabBar}>
        <TabBar
          activeKey={pathname}
          onChange={(value) => setRouteActive(value)}
        >
          {tabs.map((item) => (
            <TabBar.Item
              key={item.key}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </TabBar>
      </div>
    </>
  )
}
