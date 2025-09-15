import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import './dropdown.scss'

export default function DropDown({ title, content, isOpen, onToggle, titleSize}) {
  const iconButton = isOpen ? <ChevronUpIcon className='chevron-icon' /> : <ChevronDownIcon className='chevron-icon' />
  return (
    <div className="dropdown" style={{ width: '100%' }}>
      <button
        className="dropdown-toggle"
        onClick={onToggle}
        style={{ fontSize: titleSize }}
        type="button"
      >
        <span className="dropdown-title">{title}</span>
        {iconButton}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {content}
        </div>
      )}
    </div>
  )
}
