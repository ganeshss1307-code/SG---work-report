import { useState } from "react";
import UploadForm from "./components/UploadForm";
import Preview from "./components/Preview";

export default function App() {
  const [data, setData] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      {!data && <UploadForm setData={setData} />}

      {data && <Preview data={data} />}
    </div>
  );
}