import { useState } from 'react';
import Personal from './personal';
import ExperienceList from './experience';
import EducationList from './education';
import Resume from './resume';
import uniqid from 'uniqid';

export default function Body(props) {
    const [personal, setPersonal] = useState({
        first: '',
        last: '',
        title: '',
        address: '',
        phone: '',
        email: '',
        description: '',
    });
    const [experience, setExperience] = useState([
        {
            id: uniqid(),
            position: '',
            company: '',
            city: '',
            from: '',
            to: '',
        },
    ]);
    const [education, setEducation] = useState([
        {
            id: uniqid(),
            school: '',
            title: '',
            city: '',
            from: '',
            to: '',
        },
    ]);

    const onInput = (e) => {
        console.log({ personal, experience, education });
        if (e.target.parentNode.className === 'personal') {
            setPersonal(
                Object.assign({}, personal, {
                    [e.target.id]: e.target.value,
                })
            );
        } else if (e.target.parentNode.className === 'experience') {
            setExperience((prevExperience) =>
                prevExperience.map((obj) =>
                    obj.id === e.target.parentNode.id
                        ? { ...obj, [e.target.className]: e.target.value }
                        : obj
                )
            );
        } else if (e.target.parentNode.className === 'education') {
            setEducation((prevEducation) =>
                prevEducation.map((obj) =>
                    obj.id === e.target.parentNode.id
                        ? { ...obj, [e.target.className]: e.target.value }
                        : obj
                )
            );
        }
    };

    const addExperience = (e) => {
        let newExperience = [...experience];
        newExperience.push({
            id: uniqid(),
            position: '',
            company: '',
            city: '',
            from: '',
            to: '',
        });
        setExperience(newExperience);
    };

    const addEducation = (e) => {
        let newEducation = [...education];
        newEducation.push({
            id: uniqid(),
            school: '',
            title: '',
            city: '',
            from: '',
            to: '',
        });
        setEducation(newEducation);
    };

    const deleteExperience = (e) => {
        setExperience(
            experience.filter((obj) => obj.id !== e.target.parentNode.id)
        );
    };

    const deleteEducation = (e) => {
        setEducation(
            education.filter((obj) => obj.id !== e.target.parentNode.id)
        );
    };

    return (
        <>
            <div id="filling-section">
                <div id="personal-section">
                    <Personal onInput={onInput} />
                </div>
                <div id="experience-section">
                    <ExperienceList
                        onInput={onInput}
                        onAdd={addExperience}
                        onDelete={deleteExperience}
                        items={experience}
                    />
                </div>
                <div id="education-section">
                    <EducationList
                        onInput={onInput}
                        onAdd={addEducation}
                        onDelete={deleteEducation}
                        items={education}
                    />
                </div>
            </div>
            <div id="resume-section">
                <Resume
                    personal={personal}
                    experience={experience}
                    education={education}
                />
            </div>
        </>
    );
}
