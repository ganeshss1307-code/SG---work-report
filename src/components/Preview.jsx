import PDFGenerator from "./PDFGenerator";

export default function Preview({ data }) {
  return (
    <div style={{ fontFamily: "Arial", padding: "30px", background: "#f5f5f5" }}>
      
      <div
        id="report"
        style={{
          background: "white",
          padding: "30px",
          maxWidth: "750px",
          margin: "auto",
          borderRadius: "10px",
          boxShadow: "0 0 12px rgba(0,0,0,0.08)"
        }}
      >
        {/* Header */}
        <h1 style={{ textAlign: "center", marginBottom: "5px" }}>
          {data.title}
        </h1>

        <p style={{ textAlign: "center", color: "gray", marginBottom: "5px" }}>
          {data.clientName}
        </p>

        <p style={{ textAlign: "center", color: "gray", marginBottom: "5px" }}>
          {data.location}
        </p>

        <p style={{ textAlign: "center", color: "#999" }}>
          {data.date}
        </p>

        <hr style={{ margin: "20px 0" }} />

        {/* Images Section */}
        {data.images.map((img, index) => (
          <div
            key={index}
            style={{
              marginBottom: "30px",
              paddingBottom: "20px",
              borderBottom: "1px solid #eee"
            }}
          >
            <img
              src={URL.createObjectURL(img)}
              alt=""
              style={{
                width: "100%",
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "10px"
              }}
            />

            <p style={{ fontSize: "14px", color: "#333", lineHeight: "1.5", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
              {data.notes[index]}
            </p>
          </div>
        ))}
      </div>

      {/* Download Button */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <PDFGenerator data={data} />
      </div>
    </div>
  );
}