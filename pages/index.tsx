import { useEffect, useMemo, useState } from "react";

const IndexPage = () => {
  const [name, setName] = useState("");

  const [emailAddress, setEmailAddress] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const user = useMemo(
    () => ({
      name,

      emailAddress,
    }),

    [name, emailAddress]
  );

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />

      <input
        type="text"
        value={emailAddress}
        onChange={(e) => setEmailAddress(e.currentTarget.value)}
      />

      <button
        onClick={() => setDarkMode((currentValue) => !currentValue)}
        style={{
          color: darkMode ? "#ffffff" : "#000000",
          backgroundColor: darkMode ? "#000000" : "#ffffff",
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default IndexPage;
