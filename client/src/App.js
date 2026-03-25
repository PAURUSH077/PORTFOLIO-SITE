import { useEffect, useState } from "react";
import axios from "axios";
import { FaGithub, FaLinkedin, FaEnvelope, FaJs, FaNodeJs } from "react-icons/fa";
import { SiMysql, SiPostman } from "react-icons/si";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects")
      .then(res => setProjects(res.data));
  }, []);

  const iconStyle = {
    background: "#1e293b",
    padding: "12px",
    borderRadius: "50%",
    color: "white",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  return (
    <div style={{
      background: "linear-gradient(to bottom, #020617, #0f172a)",
      color: "white",
      fontFamily: "system-ui, sans-serif"
    }}>

      {/* NAVBAR */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 60px"
      }}>
        <div>
          <h2 style={{ margin: 0 }}>Paurush Mishra</h2>
          <span style={{ color: "#3b82f6", fontSize: "14px" }}>
            Backend Engineer
          </span>
        </div>

        <div style={{ display: "flex", gap: "30px" }}>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Home</a>
          <a href="#projects" style={{ color: "white", textDecoration: "none" }}>Projects</a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px 60px"
      }}>
        <div style={{ maxWidth: "520px" }}>
          <h1 style={{ fontSize: "52px", lineHeight: "1.2" }}>
            Backend Software Developer
          </h1>

          <p style={{
            color: "#94a3b8",
            margin: "20px 0",
            fontSize: "16px",
            lineHeight: "1.6"
          }}>
            I build scalable backend systems, APIs, and high-performance
            server-side applications focused on efficiency and clean architecture.
          </p>

          <button style={{
            background: "#2563eb",
            padding: "12px 24px",
            borderRadius: "8px",
            border: "none",
            color: "white",
            marginRight: "10px",
            cursor: "pointer"
          }}>
            View My Work
          </button>

          <button style={{
            padding: "12px 24px",
            border: "1px solid #475569",
            background: "transparent",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer"
          }}>
            Contact
          </button>
        </div>

        <img
          src="/Paurush.jpg"
          alt="profile"
          style={{
            width: "320px",
            borderRadius: "20px",
            boxShadow: "0 25px 60px rgba(0,0,0,0.7)"
          }}
        />
      </section>

      {/* ABOUT */}
      <section style={{
        padding: "60px",
        display: "flex",
        alignItems: "center",
        gap: "40px"
      }}>
        <img
          src="/Paurush.jpg"
          alt="about"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
          }}
        />

        <div>
          <h2 style={{ marginBottom: "10px" }}>About Me</h2>

          <p style={{
            color: "#94a3b8",
            maxWidth: "600px",
            lineHeight: "1.6"
          }}>
            I'm a backend developer passionate about building scalable APIs,
            distributed systems, and high-performance applications.
          </p>

          <p style={{
            color: "#3b82f6",
            marginTop: "10px",
            fontWeight: "500"
          }}>
            CGPA: 8.53
          </p>

          {/* SKILLS */}
          <div style={{
            display: "flex",
            gap: "15px",
            marginTop: "15px"
          }}>
            {[
              { name: "JS", icon: <FaJs /> },
              { name: "Node", icon: <FaNodeJs /> },
              { name: "SQL", icon: <SiMysql /> },
              { name: "API", icon: <SiPostman /> }
            ].map((tech, i) => (

              <div key={i} style={{
                background: "#1e293b",
                padding: "10px 16px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
                transition: "0.3s",
                cursor: "pointer"
              }}

              onMouseEnter={e => {
                e.currentTarget.style.background = "#2563eb";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}

              onMouseLeave={e => {
                e.currentTarget.style.background = "#1e293b";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              >
                <span style={{ fontSize: "18px" }}>{tech.icon}</span>
                {tech.name}
              </div>

            ))}
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "60px" }}>
        <h2 style={{ marginBottom: "30px" }}>Featured Projects</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px"
        }}>

          {[
            {
              title: "Smart Resume AI Analyzer",
              desc: "AI-based resume analysis & scoring system",
              link: "https://github.com/PAURUSH077/Smart-resume-AI-Analyzer",
              img: "/project1.png"
            },
            {
              title: "Debatetrix",
              desc: "Debate platform with structured arguments",
              link: "https://github.com/PAURUSH077/debatetrix",
              img: "/project2.png"
            },
            {
              title: "MyShell",
              desc: "Custom command line interpreter",
              link: "https://github.com/PAURUSH077/myshelll",
              img: "/project3.png"
            }
          ].map((p, i) => (

            <div key={i}
              style={{
                background: "linear-gradient(145deg, #1e293b, #0f172a)",
                borderRadius: "16px",
                padding: "20px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
                transition: "0.3s",
                cursor: "pointer"
              }}

              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 25px 60px rgba(37,99,235,0.3)";
                const img = e.currentTarget.querySelector(".img");
                const overlay = e.currentTarget.querySelector(".overlay");
                img.style.transform = "scale(1.1)";
                overlay.style.opacity = 1;
              }}

              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.5)";
                const img = e.currentTarget.querySelector(".img");
                const overlay = e.currentTarget.querySelector(".overlay");
                img.style.transform = "scale(1)";
                overlay.style.opacity = 0;
              }}
            >

              <div style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "10px"
              }}>
                <img
                  src={p.img}
                  className="img"
                  style={{
                    width: "100%",
                    height: "160px",
                    objectFit: "cover",
                    transition: "0.4s"
                  }}
                />

                <div className="overlay" style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(2,6,23,0.6)",
                  opacity: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "0.4s"
                }}>
                  <span style={{
                    background: "#2563eb",
                    padding: "8px 16px",
                    borderRadius: "8px"
                  }}>
                    View Code
                  </span>
                </div>
              </div>

              <h3 style={{ marginTop: "15px" }}>{p.title}</h3>
              <p style={{ color: "#94a3b8" }}>{p.desc}</p>

              <a href={p.link} target="_blank" rel="noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  background: "#2563eb",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  color: "white",
                  textDecoration: "none"
                }}>
                View Project →
              </a>

            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "60px", textAlign: "center" }}>
        <h2>Let's Connect</h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "30px"
        }}>
          <a href="https://github.com/PAURUSH077" target="_blank"
            style={iconStyle}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#2563eb";
              e.currentTarget.style.transform = "scale(1.2)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "#1e293b";
              e.currentTarget.style.transform = "scale(1)";
            }}>
            <FaGithub size={24} />
          </a>

          <a href="https://www.linkedin.com/in/paurush-mishra-m" target="_blank"
            style={iconStyle}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#2563eb";
              e.currentTarget.style.transform = "scale(1.2)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "#1e293b";
              e.currentTarget.style.transform = "scale(1)";
            }}>
            <FaLinkedin size={24} />
          </a>

          <a href="mailto:paurushrmishra@gmail.com"
            style={iconStyle}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#2563eb";
              e.currentTarget.style.transform = "scale(1.2)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "#1e293b";
              e.currentTarget.style.transform = "scale(1)";
            }}>
            <FaEnvelope size={24} />
          </a>
        </div>
      </section>

    </div>
  );
}

export default App;