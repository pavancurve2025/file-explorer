import React, { useState } from 'react';
import FileSystem from '../data/fileSystem.json';
import FileActions from './FileActions';
import FileTree from './FileTree';
import FileViewer from './FileViewer';

const FileExplorer = () => {
    const [files, setFiles] = useState(FileSystem.children);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleAdd = (name) => {
        if (name.trim() === "") {
            return alert("Name cannot be empty");
        }
        setFiles([...files, { name, type: "file" }]);
    };

    const handleDelete = (name) => {
        setFiles(files.filter((file) => file.name !== name));
    };

    const styles = {
        container: {
            display: "flex",
            padding: "20px",
        },
        sidebar: {
            // padding:"10px"
            // margin:"20px"
        },
        content: {
            // width: "70%",
            // paddingLeft: "20px",
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.sidebar}>
                <FileTree data={files} onSelect={setSelectedFile} />
                <FileActions onAdd={handleAdd} onDelete={handleDelete} />
            </div>
            <div style={styles.content}>
                <FileViewer selectedFile={selectedFile} />
            </div>
        </div>
    );
};

export default FileExplorer;
