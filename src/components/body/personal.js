export default function Personal(props) {
    const onInput = props.onInput;
    return (
        <div className="personal">
            <h3 className="section-title">Personal Information</h3>
            <input
                onChange={onInput}
                type="text"
                placeholder="First name"
                id="first"
            />
            <input
                onChange={onInput}
                type="text"
                placeholder="Last name"
                id="last"
            />
            <input
                onChange={onInput}
                type="text"
                placeholder="Title"
                id="title"
            />
            <input
                onChange={onInput}
                type="text"
                placeholder="Address"
                id="address"
            />
            <input
                onChange={onInput}
                type="tel"
                placeholder="Phone Number"
                id="phone"
            />
            <input
                onChange={onInput}
                type="email"
                placeholder="Email"
                id="email"
            />
            <textarea
                onChange={onInput}
                placeholder="Description"
                id="description"
            />
        </div>
    );
}
