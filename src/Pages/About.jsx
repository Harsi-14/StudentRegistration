import { useNavigate } from "react-router-dom";

function About(){
    const navigate = useNavigate();
    return(
        <div>
            <h2>About Page</h2>
            <br/>
            <h3>About Us</h3>
            <br/>
            <p>Welcome to the Student Registration Portal, a modern and user-friendly platform designed to simplify the student registration process. Our system allows students to register online by entering their personal, academic, and contact information in a secure and organized manner. The main objective of this portal is to reduce paperwork, save time, and provide a faster and more efficient registration experience for both students and administrators.

This portal is developed with a simple and responsive interface, making it easy for students to access from desktops, laptops, tablets, or mobile devices. Students can fill out their registration forms, review their details, and submit their information without any difficulty. The system helps maintain accurate student records while minimizing manual errors during the registration process.

Our Student Registration Portal focuses on providing a secure environment where student information is protected and stored safely. It ensures that all submitted details are organized properly and can be managed efficiently. The platform also improves communication between students and educational institutions by making the registration process transparent and convenient.</p>
<br/>


<h3>Our Features</h3>
<br/>


<p>
- Easy online student registration
<br/>
- Simple and user-friendly interface
<br/>
- Secure storage of student information
<br/>

- Fast and accurate data submission
<br/>

- Responsive design for all devices
<br/>
- Reduced paperwork and manual effort
<br/>
- Organized student record management</p>
<br/>

<h3>Our Mission</h3>
<br/>
<p>Our mission is to provide a reliable, secure, and efficient digital registration system that makes the admission and registration process simple for every student while improving the overall management of student records.</p>
<br/>
<h3>Our Vision</h3>
<br/>
<p>Our vision is to create a smart, paperless, and technology-driven registration system that enhances the educational experience and supports institutions in managing student information effectively.</p>

<br/>

<button
  onClick={() => navigate("/course")}
  className="bg-green-500 text-white px-6 py-2 rounded hover:bg-blue-600 mt-6"
>
  Next
</button>
        </div>

        
    );
}
export default About;