//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = "Steve";
  const age = 29;
  const hobbies = ["Gaming", "Coding", "Anime", "Reading", "Boxing"];

  return (
    <div>
      {/* add JSX here */}
      <p>Hi there! My name is {name} and I'm {age} years old. I currently work as a Solution Specialist at an eDiscovery company called Lineal. In my spare time, I enjoy spending time with family. Some of my hobbies include:</p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
