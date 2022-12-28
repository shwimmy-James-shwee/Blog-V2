import './componentStyles/DropDown.css'

export default function DropDown({
  handleSelection,
  selection,
  handleOpen,
  open,
  options,
  defaultTitle,
}) {
  return (
    <div className="dropdown">
      <button onClick={() => handleOpen(defaultTitle)}>
        {selection === '' ? defaultTitle : selection}
      </button>
      {open ? (
        <ul className="menu">
          {options.map((option) => (
            <li className="menu-item" key={option}>
              <button onClick={() => handleSelection(option, defaultTitle)}>
                {option}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
