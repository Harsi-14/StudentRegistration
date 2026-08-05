import { useNavigate } from "react-router-dom";

function Course(){
    const navigate = useNavigate();
    return(
        <div>

            <h2>Course page</h2>
            <br/>
            <h2>MBA-(Master of Business Administration)</h2>
            <br/>
            <h4>Develops leadership and management skills.
                <br/>
              Opens career opportunities in marketing, finance, HR, and operations.
              <br/>
              Helps in starting and managing businesses.
            </h4>
            <br/>
            <h2>MCA-(Master of Computer Applications)</h2>
            <br/>
            <h4>
                Develops software development and programming skills.
                <br/>
                Prepares students for careers in web, mobile, and software development.
                <br/>
Offers opportunities in top IT companies</h4>
<br/>
<h2>M.Tech-(Master of Technology)</h2>
<br/>
<h4>
Builds advanced technical knowledge and research skills.
<br/>
Opens opportunities in engineering, IT, and R&D.
<br/>
Improves chances of getting high-paying technical jobs.
</h4>
<br/>

<h2>M.A.-(Master of Arts)</h2>
<br/>
<h4>
Enhances communication, research, and analytical skills.
<br/>
Opens careers in education, journalism, and public administration.
<br/>
Provides a strong foundation for competitive exams.
</h4>
<br/>


<button
  onClick={() => navigate("/contact")}
  className="bg-green-500 text-white px-6 py-2 rounded hover:bg-blue-600 mt-6"
>
  Next
</button>


        </div>
    );
}
export default Course;