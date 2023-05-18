import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabItem, isActive} = props
  const {displayText, tabId} = tabDetails
  const activeTabItemStyle = isActive ? 'active-tab-btn' : ''
  const onClickTabItem = () => {
    updateTabItem(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabItemStyle}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
