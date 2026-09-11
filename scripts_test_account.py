import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 375, 'height': 667})
    errors = []
    page.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)
    page.on('pageerror', lambda e: errors.append(str(e)))

    page.goto('http://localhost:5173/account')
    page.wait_for_load_state('networkidle')

    tab_sel = 'div[class*="_category_tab_"]'          # 不含容器 category_tabs
    item_sel = 'div[class*="_category_item_"]'        # 不含 span 子元素

    def tabs_text():
        return page.locator(tab_sel).all_inner_texts()

    def items_text():
        return page.locator(item_sel + ' span[class*="_label_"]').all_inner_texts()

    def selected_labels():
        out = []
        for el in page.locator(item_sel).all():
            cls = el.get_attribute('class') or ''
            if '_active_' in cls:
                out.append(el.locator('span[class*="_label_"]').inner_text())
        return out

    # 1. 初始状态
    print('1. tabs:', tabs_text())
    print('2. items:', items_text())
    print('3. default selected:', selected_labels())

    # 2. 切换 tab 到 出行交通
    page.locator(tab_sel, has=page.get_by_text('出行交通', exact=True)).click()
    page.wait_for_timeout(300)
    print('4. items after tab switch:', items_text())

    # 3. 点击子项 打车
    page.get_by_text('打车', exact=True).click()
    page.wait_for_timeout(300)
    print('5. selected after click:', selected_labels())

    # 4. 切到 收入
    page.locator('div[class*="_header_type_item_"]', has=page.get_by_text('收入', exact=True)).click()
    page.wait_for_timeout(300)
    print('6. tabs(收入):', tabs_text())
    print('7. items(收入):', items_text())
    print('8. default selected(收入):', selected_labels())

    # 5. 切回 支出，选中重置为 餐费
    page.locator('div[class*="_header_type_item_"]', has=page.get_by_text('支出', exact=True)).click()
    page.wait_for_timeout(300)
    print('9. default selected(切回支出):', selected_labels())

    # 6. 上下结构：emoji 在文字上方
    first_item = page.locator(item_sel).first
    emoji_box = first_item.locator('span[class*="_emoji_"]').bounding_box()
    label_box = first_item.locator('span[class*="_label_"]').bounding_box()
    print('10. emoji above label:', emoji_box['y'] + emoji_box['height'] <= label_box['y'] + 1)

    print('11. console errors:', errors if errors else 'none')
    browser.close()
