import '../App.css';
import './QuestDetails.css'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header.js';
import { GoogleGenerativeAI } from "@google/generative-ai";

function QuestComplete() {
  const { name } = useParams();
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [status, setStatus] = React.useState("Upload Image");
  const [base64Image, setBase64Image] = React.useState(null);
  const [quests, setQuests] = useState([]);
  const [quest, setQuest] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetch("/quests.json");
        const data = await result.json();
        const allQuests = Object.values(data).flat(); // Flatten all quests into a single array
        const foundQuest = allQuests.find(q => q.title === name);
        setQuest(foundQuest);
      } catch (error) {
        console.error("Error fetching quests:", error);
      }
    }

    fetchData();
  }, [name]);

  const handleImageSubmit = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStatus("Judging...");

        console.log(quest.title);

        const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GOOGLE_API_KEY);

        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const generatedContent = model.generateContent(["Does this image contain proof of success for this task (include a yes or no in your answer): " + quest.title, {inlineData: {data: reader.result.split(',')[1], mimeType: file.type}} ]);

        generatedContent.then((result) => {
          const completed = result.response.candidates[0].content.parts[0].text.toLowerCase().includes("yes");
          console.log(completed);

          if (completed) {
            setStatus("Quest Complete!");
            const newQuests = localStorage.getItem("completedQuests") ?? [];
            newQuests.push(quest.title);
            console.log(JSON.stringify(newQuests));
            localStorage.setItem("completedQuests", JSON.stringify(newQuests));
          } else {
            setStatus("Quest Failed!");
          }
        })

      
      };
      reader.readAsDataURL(file); // Read the file as a data URL
      setSelectedImage(file); // Update the state with the selected file

    }
  };

  return (
    <div>
      <Header title="Complete" className="aa"/>
      <h1>{status}</h1>

      {/* Conditionally render the selected image if it exists */}
      {base64Image && (
        <div>
          {/* Display the selected image */}
          <img alt="not found" width={"250px"} src={base64Image} />
          <br /> <br />
          {/* Button to remove the selected image */}
          <button onClick={() => { setSelectedImage(null); setBase64Image(null); }}>Remove</button>
        </div>
      )}

      <br />

      {/* Input element to select an image file */}
      <label class="custom-file-upload">
        Upload
        <input
          type="file"
          name="myImage"
          // Event handler to capture file selection and update the state
          onChange={handleImageSubmit}
        />
      </label>
    </div>
  );
}

export default QuestComplete;