import { Component } from 'react'

export const Education = (props) => {
    const { onInput, value, id, onDelete } = props
    return (
        <div className="education" id={id}>
            <input
                value={value.school}
                onChange={onInput}
                type="text"
                placeholder="School"
                className="school"
            />
            <input
                value={value.title}
                onChange={onInput}
                type="text"
                placeholder="Title"
                className="title"
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

export default function EducationList(props) {
    const { onInput, items, onAdd, onDelete } = props
    return (
        <>
            <h3 className="section-title">Education</h3>
            {items.map((item) => {
                return (
                    <Education
                        key={item.id}
                        id={item.id}
                        onInput={onInput}
                        onDelete={onDelete}
                        value={{
                            school: item.school,
                            title: item.title,
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
