import React, { useRef, useState } from "react";
import "./UploadDocs.scss";
import Header from "../../comp/header/Header";
import uploadImg from "../../assets/cloud-computing.png";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

const UploadDocs = () => {
  const data = [
    {
      no: "1.",
      title: "Experience Letter",
    },
    {
      no: "2.",
      title: "Pay Slips (last 3 months)",
    },
    {
      no: "3.",
      title: "Relieving Letter",
    },
    {
      no: "4.",
      title: "PAN Card",
    },
    {
      no: "5.",
      title: "Aadhaar Card",
    },
    {
      no: "6.",
      title: "Bank Statement",
    },
    {
      no: "7.",
      title: "Increment Letter",
    },
    {
      no: "8.",
      title: "Passport Size Photograph",
    }, 
  ];

  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFileUpload(droppedFiles);
  };

  const handleFileUpload = (selectedFiles) => {
    const validFiles = selectedFiles.filter(
      (file) => file.size <= 2 * 1024 * 1024
    );
    const invalidFiles = selectedFiles.filter(
      (file) => file.size > 2 * 1024 * 1024
    );

    if (invalidFiles.length > 0) {
      toast.error("Each file should be less than 2MB or 2MB", {
        position: "top-right",
      });
    }

    if (validFiles.length > 0) {
      setFiles((prev) => [...prev, ...validFiles]);
    }
  };

  const handleFileInputChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    handleFileUpload(selectedFiles);
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveFile = (indexToRemove) => {
    toast(
      ({ closeToast }) => (
        <div>
          <p>Are you sure you want to remove this file?</p>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <button
              style={{
                padding: "4px 10px",
                backgroundColor: "red",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
              }}
              onClick={() => {
                setFiles((prevFiles) =>
                  prevFiles.filter((_, index) => index !== indexToRemove)
                );
                closeToast();
              }}
            >
              Yes
            </button>
            <button
              style={{
                padding: "4px 10px",
                backgroundColor: "#ccc",
                border: "none",
                borderRadius: "4px",
              }}
              onClick={closeToast}
            >
              No
            </button>
          </div>
        </div>
      ),
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        closeButton: false,
      }
    );
  };

  return (
    <>
      <Header title="Uploads Documents" />

      <div className="parent uploads">
        <div className="cont upload-doc">
          <div className="upload-wrapper">
            <h3>UPLOAD FILES</h3>
            <div>
              <p>Please upload the documents to be shared.</p>
              <p> Note: The file size should not exceed 2MB.</p>
            </div>

            <div
              className="drag-drop"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
              <img src={uploadImg} alt="" />
              <p>Drag & Drop your files here </p>
              <h4>OR</h4>
              <div
                className="btn"
                onClick={handleBrowseClick}
                style={{ width: "fit-content", padding: "10px 20px" }}
              >
                Browse Files
              </div>
              <input
                type="file"
                multiple
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileInputChange}
              />
            </div>

            <div className="upload-files">
              <h4>Upload Files List</h4>
              <div className="upload-scroll">
                {files.map((file, index) => (
                  <div className="uploded-files" key={index}>
                    <span
                      className="icon"
                      onClick={() => handleRemoveFile(index)}
                    >
                      <RxCross2 />
                    </span>
                    {file.name}
                  </div>
                ))}
              </div>
            </div>
            {files.length > 0 && <div class="btn">Submit</div>}
          </div>

          <div className="doc-list">
            <h3>List of Required Documents :</h3>
            {data.map((item, index) => (
              <div className="listing" key={index}>
                {item.no}
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadDocs;
