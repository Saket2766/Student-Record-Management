const CreateUser = () => {

    const handleSubmit = (e) =>{
        e.preventdefault();
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <h1>Create New User</h1>
            <div className="flex-form">
                <label>User Type</label>
                <select required>
                    <option value="select">Select User Type</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                </select>
            </div>

            <label>Username</label>
            <input type="text"/>

            <label>Password</label>
            <input type="password"/>

            <label>Name</label>
            <input type="text"/>
            
            <div className="student">
                <label>Roll No</label>
                <input type="text"/>

                <label>Class</label>
                <input type="text"/>
            </div>

            <div className="teacher">
                <label>Subjects</label>
                <select required>
                    <option value="Classical Physics">Classical Physics</option>
                    <option value="Mathematics-I">Mathematics-I</option>
                    <option value="Computer Programing">Computer Programing</option>
                    <option value="Technical Communication in English">Technical Communication in English</option>
                    <option value="Basic Electronics">Basic Electronics</option>
                </select>

                <label>Select Sections</label>
                <select required>
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                    <option value="B1">B1</option>
                    <option value="B2">B2</option>
                </select>
            </div>
        </form>
     );
}
 
export default CreateUser;