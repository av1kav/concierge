const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());

app.post('/upload', upload.single('file'), (req, res) => {
  const options = JSON.parse(req.body.options || '{}');

  // Mocked response logic
  const mockResponse = {};
  if (options.transcript) {
    mockResponse.transcript = "This is the full transcript of the meeting...";
  }
  if (options.mom) {
    mockResponse.mom = [
      "Key decision: Launch feature X by Q3.",
      "Action item: Alice to follow up with Bob on budget approval."
    ];
  }

  res.json(mockResponse);
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
