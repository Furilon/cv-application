import uniqid from 'uniqid'

export default function Resume(props) {
    const { personal, experience, education } = props
    return (
        <div className="resume">
            <PersonalInfo personal={personal} />
            <ExperienceItems experience={experience} />
            <EducationItems education={education} />
        </div>
    )
}

const PersonalInfo = (props) => {
    const { first, last, title, address, phone, email, description } =
        props.personal
    return (
        <div className="cv-personal">
            <h3>Personal Info: </h3>
            <p>First name: {first}</p>
            <p>Last name: {last}</p>
            <p>Title: {title}</p>
            <p>Address: {address}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Description: {description}</p>
        </div>
    )
}

const ExperienceItems = (props) => {
    return props.experience.map((obj) => (
        <Experience key={uniqid()} obj={obj} />
    ))
}

const Experience = (props) => {
    const obj = props.obj
    return (
        <div className="cv-experience">
            <h3>Experience</h3>
            <p>Position: {obj.position}</p>
            <p>Company: {obj.company}</p>
            <p>City: {obj.city}</p>
            <p>From: {obj.from}</p>
            <p>To: {obj.to}</p>
        </div>
    )
}

const EducationItems = (props) => {
    return props.education.map((obj) => <Education obj={obj} key={uniqid()} />)
}

const Education = (props) => {
    const obj = props.obj
    return (
        <div className="cv-education">
            <h3>Education</h3>
            <p>School: {obj.school}</p>
            <p>Title: {obj.title}</p>
            <p>City: {obj.city}</p>
            <p>From: {obj.from}</p>
            <p>To: {obj.to}</p>
        </div>
    )
}
