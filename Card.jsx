import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function Card({ name, bio, interests, socials }) {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        padding: "20px",
        width: "350px",
        fontFamily: "Arial, sans-serif",
        margin: "15px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <h1 style={{ margin: "0 0 10px", fontSize: "1.5rem" }}>{name}</h1>
      <p style={{ color: "#555", marginBottom: "15px" }}>{bio}</p>

      <h3 style={{ marginTop: "15px", fontSize: "1.1rem" }}>Interests</h3>
      <ul style={{ listStyle: "none", paddingLeft: 0, color: "#444" }}>
        {interests.map((interest, index) => (
          <li key={index}>✅ {interest}</li>
        ))}
      </ul>

      {/* Social buttons */}
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        {socials.twitter && (
          <a href={socials.twitter}  rel="noreferrer">
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 14px",
                cursor: "pointer",
                background: "#1DA1F2",
                border: "none",
                color: "white",
                borderRadius: "6px",
                fontWeight: "bold",
                fontSize: "0.9rem",
                transition: "0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <FaTwitter /> Twitter
            </button>
          </a>
        )}

        {socials.github && (
          <a href={socials.github}  rel="noreferrer">
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 14px",
                cursor: "pointer",
                background: "#24292e",
                border: "none",
                color: "white",
                borderRadius: "6px",
                fontWeight: "bold",
                fontSize: "0.9rem",
                transition: "0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <FaGithub /> GitHub
            </button>
          </a>
        )}

        {socials.linkedin && (
          <a href={socials.linkedin} target="_blank" rel="noreferrer">
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 14px",
                cursor: "pointer",
                background: "#0077B5",
                border: "none",
                color: "white",
                borderRadius: "6px",
                fontWeight: "bold",
                fontSize: "0.9rem",
                transition: "0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <FaLinkedin /> LinkedIn
            </button>
          </a>
        )}
      </div>
    </div>
  );
}
export default Card;