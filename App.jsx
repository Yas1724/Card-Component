import Card from "./Card.jsx"

function App() {
  const users = [
    {
      name: "Spongbob",
      bio: "I make good donuts.",
      interests: ["Eat", "Code", "Sleep"],
      socials: {
        twitter: "https://twitter.com/spongbob",
        github: "https://github.com/Yas1724",
        linkedin: "https://linkedin.com/in/spongbob",
      },
    },
    {
      name: "Patrick",
      bio: "Living under a rock.",
      interests: ["Sleep", "Eat", "Do nothing"],
      socials: {
        twitter: "https://twitter.com/patrick",
        github: "",
        linkedin: "https://linkedin.com/in/patrick",
      },
    },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {users.map((user, index) => (
        <Card
          key={index}
          name={user.name}
          bio={user.bio}
          interests={user.interests}
          socials={user.socials}
        />
      ))}
    </div>
  );
}

export default App
