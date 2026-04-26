import { useState } from "react";

export default function UploadForm({ setData }) {
  const [title, setTitle] = useState("");
  const [clientName, setClientName] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState([]);
  const [notes, setNotes] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setNotes(files.map(() => ""));
  };

  const handleNoteChange = (index, value) => {
    const updated = [...notes];
    updated[index] = value;
    setNotes(updated);
  };

  const handlePreview = () => {
    setData({
      title,
      clientName,
      location,
      date: new Date().toLocaleDateString(),
      images,
      notes,
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Report</h2>

      <input
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Client Name"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Site / Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <br /><br />

      <input type="file" multiple onChange={handleImageUpload} />

      <br /><br />

      {images.map((img, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <img
            src={URL.createObjectURL(img)}
            alt=""
            style={{ width: "200px" }}
          />

          <input
            placeholder="Add note"
            value={notes[index]}
            onChange={(e) => handleNoteChange(index, e.target.value)}
            rows={3}
            style={{
              width: "100%",
              padding: "8px",
              fontFamily: "Arial",
              fontSize: "14px",
              resize: "vertical"
        }}
          />
        </div>
      ))}

      <br />

      <button onClick={handlePreview}>Preview</button>
    </div>
  );
}