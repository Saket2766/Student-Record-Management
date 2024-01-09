import {useState, useRef} from 'react';

const CreateUser = () => {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [role,setRole] = useState('');
    const [roll,setRoll] = useState('');
    const [stuSection,setStuSection] = useState('');
    const [subjects,setSubjects] = useState([]);
    const [curSubject,setCurSubject] = useState('');
    const [tchSections,setTchSections] = useState([]);
    const [curSection,setCurSection] = useState([]);

    const [warning,setWarning] = useState('');

    const teacherPanel = useRef();
    const studentPanel = useRef();

    const handleUserSelect = (e) => {
        setRole(e.target.value);
        displayUserDetailsForm(e.target.value);
    }

    const displayUserDetailsForm = (role) => {
        if(role === "teacher"){
            studentPanel.current.classList.add("hidden");
            teacherPanel.current.classList.remove("hidden");
        }
        else if (role === "student"){
            teacherPanel.current.classList.add("hidden");
            studentPanel.current.classList.remove("hidden");
        }
        else if (!role){
            studentPanel.current.classList.add("hidden");
            teacherPanel.current.classList.add("hidden");
        }
    }

    const handleAddSubject = () => {
        const subject = {
            subName : curSubject,
            sections : curSection,
        };

        for ( let sub in subjects){
            if (subject.subName === sub.subName){
                return;
            }
        }

        setSubjects([...subjects,subject]);
    }

    const handleSectionSelect = (e) => {
        setCurSection(e.target.value);
        if(e.target.value){
            setTchSections([...tchSections,e.target.value]);
        }
    }

    const removeSection = (sct) => {
        let filteredArray = tchSections.filter( (item) => item !== sct);
        setTchSections(filteredArray);
    }

    const displaySelectedSections = () => {

        const Tsection = ({name}) => {
            return (
                <div className='section-card' onClick={(e) => removeSection(name)}>
                    {name}
                </div>
            );
        }

        return tchSections.map( (sct,idx) => 
            <Tsection key = {idx} name = {sct}/>
        );
    }

    const handleSubmit = (e) =>{
        e.preventdefault();

        if( !username || !password || !role){
            setWarning("Fill all the details");
        }
        else if( role === 'student'){

        }
        else if( role === 'teacher'){

        }
    }

    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <h1>Create New User <span className='circle'></span></h1>
                <div className="flex-form">
                    <label>User Type</label>
                    <select required value={role} onChange={handleUserSelect}>
                        <option value="">Select User Type</option>
                        <option value="teacher">Teacher</option>
                        <option value="student">Student</option>
                    </select>
                </div>

                <label>Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>

                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <label>Name</label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
                
                <div ref={studentPanel} className='hidden'>
                    <label>Roll No</label>
                    <input type="text" value={roll} onChange={(e) => setRoll(e.target.value)}/>

                    <label>Section</label>
                    <select required value={stuSection} onChange={(e) => setStuSection(e.target.value)}>
                        <option value="">Select...</option>
                        <option value="A1">A1</option>
                        <option value="A2">A2</option>
                        <option value="B1">B1</option>
                        <option value="B2">B2</option>
                    </select>

                </div>

                <div ref={teacherPanel} className='hidden'>
                    <label>Subjects</label>
                    <select required value={curSubject} onChange={(e) => {setCurSubject(e.target.value);setTchSections([]);}}>
                        <option value="">Select...</option>
                        <option value="Classical Physics">Classical Physics</option>
                        <option value="Mathematics-I">Mathematics-I</option>
                        <option value="Computer Programing">Computer Programing</option>
                        <option value="Technical Communication in English">Technical Communication in English</option>
                        <option value="Basic Electronics">Basic Electronics</option>
                    </select>

                    <label>Select Sections</label>
                    <select required value={curSection} onChange={handleSectionSelect}>
                        <option value="">Select...</option>
                        <option value="A1">A1</option>
                        <option value="A2">A2</option>
                        <option value="B1">B1</option>
                        <option value="B2">B2</option>
                    </select>
                    <label>Sections Selected </label>
                    <div className="selected-sections">
                        {displaySelectedSections()}
                    </div>
                    <button type='button' onClick={handleAddSubject}>Add Subject</button>

                    { (subjects.length > 0) &&
                    <div>
                        <label>Subjects Added :</label>
                        <div>
                            {subjects.map( (subject,idx) => (<p key={idx}>{subject.subName}</p>))}
                        </div>
                    </div>
                    }
                </div>

                {
                    warning && 
                    <p className='error'>{warning}</p>
                }
                <button>Submit</button>
            </form>
        </> 
     );
}
 
export default CreateUser;