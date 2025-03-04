import React, { useState } from 'react'

const FileViewer = ({ selectedFile }) => {
    if (!selectedFile) return
    <p>Select a file to view</p>;
    return (
        <div>
            <h3>Viewing : {selectedFile.name}</h3>
            <p>File.type : {selectedFile.type}</p>
        </div>
    )
}

export default FileViewer;
const styles = {
    container: {
        display: "flex",
        padding: "20px",
    },
    sidebar: {
        width: "30%",
    },
    content: {
        width: "70%",
        paddingLeft: "20px",
    },
};
