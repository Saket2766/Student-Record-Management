import {useState, useRef, useEffect} from 'react';

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

        setSubjects([...subjects,subject]);
    }

    const handleSubmit = (e) =>{
        e.preventdefault();
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <h1>Create New User</h1>
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
                <select required value={curSubject} onChange={(e) => setCurSubject(e.target.value)}>
                    <option value="">Select...</option>
                    <option value="Classical Physics">Classical Physics</option>
                    <option value="Mathematics-I">Mathematics-I</option>
                    <option value="Computer Programing">Computer Programing</option>
                    <option value="Technical Communication in English">Technical Communication in English</option>
                    <option value="Basic Electronics">Basic Electronics</option>
                </select>

                <label>Select Sections</label>
                <select required value={curSection} onChange={(e) => setCurSection(e.target.value)}>
                    <option value="">Select...</option>
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                    <option value="B1">B1</option>
                    <option value="B2">B2</option>
                </select>

                <button type='button' onClick={handleAddSubject}>Add Subject</button>
            </div>
        </form>
     );
}
 
export default CreateUser;