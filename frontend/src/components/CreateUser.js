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

            <div className="student">
                <label>Name</label>
                <input type="text"/>

                <label>Roll No</label>
                <input type="text"/>

                <label>Class</label>
                <input type="text"/>
            </div>
        </form>
     );
}
 
export default CreateUser;