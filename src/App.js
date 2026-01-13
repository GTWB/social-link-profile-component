import avatar from "./images/avatar-jessica.jpeg";

/* const buttons = ["GitHub", "Frontend Mentor", "Linkedin", "X", "Instagram"]; */

// Create Map Data

const buttons = [
  { key: "GitHub", value: "https://github.com/GTWB" },
  { key: "Frontend Mentor", value: "https://www.frontendmentor.io/" },
  { key: "Linkedin", value: "https://www.linkedin.com/" },
  { key: "Instagram", value: "https://www.instagram.com/" },
  { key: "X", value: "https://x.com/" },
];

export default function App() {
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

function Profile() {
  return (
    <div className="profile">
      <img src={avatar} alt="avatar" />
      <div>
        <h3>Jessica Randall</h3>
        <p style={{ color: "var( --text-secondary)", fontWeight: "600" }}>
          London,United Kingdom
        </p>
      </div>

      <p>"Front-end developer and avid reader"</p>

      <div className="buttons">
        {buttons.map(({ key, value }, i) => (
          <Button key={i} value={value}>
            {key}
          </Button>
        ))}
      </div>
    </div>
  );
}

function Button({ children, value }) {
  return <button onClick={() => window.open(value)}>{children}</button>;
}
