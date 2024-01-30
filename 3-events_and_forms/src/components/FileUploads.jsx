import { useState } from "react"

const FileUploads = () => {
  const [file, setFile] = useState(null)
  
  return (
    <form>
      <input
        type="file"
        name="file"
        id="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      {file?.type.includes("image") && (
        <img
          src={URL.createObjectURL(file)}
          alt={file.name}
        />
      )}
    </form>
  )
}

export default FileUploads