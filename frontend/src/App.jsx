import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [options, setOptions] = useState({ transcript: false, mom: false });
  const [response, setResponse] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('options', JSON.stringify(options));

    const res = await axios.post('http://localhost:5000/upload', formData);
    setResponse(res.data);
  };

  const toggleOption = (key) => {
    setOptions({ ...options, [key]: !options[key] });
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>AI Meeting Parser</h1>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <div>
        <label>
          <input type="checkbox" checked={options.transcript} onChange={() => toggleOption('transcript')} />
          Generate Transcript
        </label>
        <br />
        <label>
          <input type="checkbox" checked={options.mom} onChange={() => toggleOption('mom')} />
          Generate Minutes of Meeting
        </label>
      </div>

      <button onClick={handleUpload} disabled={!file}>Parse...</button>

      {response && (
        <div style={{ marginTop: '2rem' }}>
          {response.transcript && (
            <div>
              <h2>Transcript</h2>
              <pre>{response.transcript}</pre>
            </div>
          )}
          {response.mom && (
            <div>
              <h2>Minutes of Meeting</h2>
              <ul>
                {response.mom.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
