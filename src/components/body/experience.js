export const Experience = (props) => {
    const { onInput, value, id, onDelete } = props
    return (
        <div className="experience" id={id}>
            <input
                value={value.position}
                onChange={onInput}
                type="text"
                placeholder="Position"
                className="position"
            />
            <input
                value={value.company}
                onChange={onInput}
                type="text"
                placeholder="Company"
                className="company"
            />
            <input
                value={value.city}
                onChange={onInput}
                type="text"
                placeholder="City"
                className="city"
            />
            <input
                value={value.from}
                onChange={onInput}
                type="text"
                placeholder="From"
                className="from"
            />
            <input
                value={value.to}
                onChange={onInput}
                type="text"
                placeholder="To"
                className="to"
            />
            <button onClick={onDelete} className="delete">
                Delete
            </button>
        </div>
    )
}

export default function ExperienceList(props) {
    const { onInput, items, onAdd, onDelete } = props
    return (
        <>
            <h3 className="section-title">Experience</h3>
            {items.map((item) => {
                return (
                    <Experience
                        key={item.id}
                        id={item.id}
                        onInput={onInput}
                        onDelete={onDelete}
                        value={{
                            position: item.position,
                            company: item.company,
                            city: item.city,
                            from: item.from,
                            to: item.to,
                        }}
                    />
                )
            })}
            <button onClick={onAdd}>Add</button>
        </>
    )
}
