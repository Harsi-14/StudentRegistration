import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Course(){


    const navigate = useNavigate();
    return(
        <div>

            <h2>Course page</h2>
            <br/>
            <h2>AI&DS-(Artificial Intelligence & Data Science)</h2>
            <br/>
            <h4>Focuses on AI, Machine Learning, and Data Analytics.
                <br/>
              Career opportunities in AI Engineer, Data Scientist, and Data Analyst roles.
            </h4>
            <br/>
            <h2>AI&ML-(Artificial Intelligence & Machine Learning)</h2>
            <br/>

            <h4>
                Focuses on intelligent systems and predictive models.
                
                <br/>

                Used in robotics, automation, and recommendation systems.
                </h4>
                <br/>

                <h2>CSE-COMPUTER SCIENCE ENGINEERING</h2>
                <br/>
                <h4>
                    Covers programming, software development, and databases.
                    <br/>
                    Careers in software engineering, web development, and cloud computing.
                </h4>
                <br/>

                <h2>EEE-(Electrical & Electronics Engineering)</h2>
                <br/>
                <h4>
                    Studies electrical systems, circuits, and power generation.
                    <br/>
                    Careers in power plants, automation, and electrical design.
                </h4>
                <br/>


                <h2>ECE-(Electronics & Communication Engineering)</h2>
                <br/>
                <h4>
                    Focuses on communication systems and embedded electronics.
                    <br/>
                    Careers in telecommunications, VLSI, and IoT.
                </h4>
                <br/>
                

                <h2>CSBS</h2>
                <br/>
                <h4>
                    Combines computer science with business and management concepts.
                    <br/>
                    Prepares students for IT, business analytics, and product management roles.
                </h4>
                <br/>


                <h2>CYBER SECURITY</h2>
                <br/>
                <h4>
                    Protects computer systems and networks from cyber threats.
                    <br/>
                    Careers as Security Analyst, Ethical Hacker, and SOC Analyst.
                </h4>
                <br/>

                <h2>MECH-(Mechanical Engineering)</h2>
                <br/>
                <h4>
                    Covers machine design, manufacturing, and thermal engineering.
                    <br/>
                    Careers in automobile, aerospace, and manufacturing industries.
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