import React from "react";
import Birds from "./assets/Images/coding-difference-1.jpg";

function App() {
  return (
    <div>
      <nav>
        <center>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Services</a>
        </center>
      </nav>

      <div>
        <center>
          <h1>Home</h1>
        </center>
        <img
          height={"400"}
          width={"100%"}
          src="https://cdn.pixabay.com/photo/2025/03/09/14/58/blue-tit-9457358_640.jpg"
          alt=""
        />
      </div>

      <div>
        <center>
          <h1>About</h1>
        </center>
        <img
          height={"400"}
          width={"100%"}
          src="https://cdn.pixabay.com/photo/2025/03/07/04/47/butterfly-9452074_640.jpg"
          alt=""
        />
      </div>

      <div>
        <center>
          <h1>Contact</h1>
        </center>
        <center>
          <img height={"400"} width={"100"} src="https://cdn.pixabay.com/photo/2025/03/09/07/58/robin-9456712_640.jpg" alt="" />
          <img height={"400"} width={"100"} src="https://cdn.pixabay.com/photo/2025/03/10/13/28/stieglitz-9459800_640.jpg" alt="" />
          <img height={"400"} width={"100"} src="https://cdn.pixabay.com/photo/2025/03/09/08/05/nuthatch-9456713_640.jpg" alt="" />
          <img height={"400"} width={"100"} src={Birds} alt="" />
          <img height={"400"} width={"100"} src="https://cdn.pixabay.com/photo/2025/03/04/18/23/bird-9446771_640.jpg" alt="" />
        </center>
      </div>

      <div>
        <center>
          <h1>Services</h1>
        </center>
      </div>

      <footer style={{ display: "flex", justifyContent: "space-around", alignItems: "center",  }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.869110474773!2d77.61304407404965!3d12.916133016094014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fb12ef8b81%3A0xf064c4524732d374!2sBesant%20Technologies!5e0!3m2!1sen!2sin!4v1741777610445!5m2!1sen!2sin"
          width="250"
          height="250"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: "0" }}
        ></iframe>

        <table border={1} style={{ borderCollapse: "collapse", textAlign: "center" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aravind</td>
              <td>23</td>
              <td>Developer</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>© Copywrite 2011</td>
            </tr>
          </tfoot>
        </table>
        <h1>Mailid<a href="mailto:vijay29aravind@gmail.com">vijay29aravind@gmail.com</a></h1>
      </footer>
    </div>
  );
}
export default App;