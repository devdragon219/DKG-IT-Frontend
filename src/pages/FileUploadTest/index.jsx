import API from "../../API";
import {useState} from "react";


export const FileUploadTest = () => {
  const [files, setFiles] = useState();

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    [...files].forEach((file) => {
      formData.append("files", file);
    });
    /*
    response example
    [
        {
            "url": "https://dkvtools.blob.core.windows.net/it-tools/files/data.json",
            "id": "e498e6a0-6848-479f-87ba-e7ae3c634b66",
            "name": "data.json"
        },
        {
            "url": "https://dkvtools.blob.core.windows.net/it-tools/files/dealsStructure.json",
            "id": "b668402b-60ff-4410-a89d-5b3b068ba318",
            "name": "dealsStructure.json"
        }
    ]
     */
    // must be authorized to send auth cookie (http only)
    await API.uploadFile({data: formData}).then(console.log).catch(console.log)
  }
  return <div className="container">
    <h1>Multipart File Upload</h1>
    <div>
      <label htmlFor="file" className="sr-only">
        Choose a file
      </label>
      <input id="file" type="file" multiple onChange={handleFileChange} />
    </div>

    {files && <button onClick={handleUpload}>Upload a file</button>}
  </div>
}
