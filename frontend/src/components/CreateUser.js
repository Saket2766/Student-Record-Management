const CreateUser = () => {

    const handleSubmit = (e) =>{
        e.preventdefault();
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <h1>Create New User</h1>
            <div className="flex-form">
                <label>User Type :</label>
                <select required>
                    <option value="select">Select User Type</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                </select>
            </div>
            <div className="flex-form">
                <label>Password:</label>
                <input type="password"/>
            </div>
        </form>
     );
}
 
export default CreateUser;