import React, { useState } from 'react';

const FileActions = ({ onAdd, onDelete }) => {
    const [fileName, setFileName] = useState("");

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '10px'
        },
        input: {
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '250px',
            fontSize: '16px'
        },
        buttonsContainer: {
            display: 'flex',
            gap: '10px'
        },
        button: {
            padding: '10px',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            border: 'none',
            transition: 'background-color 0.3s'
        },
        addButton: {
            backgroundColor: '#4CAF50',
            color: 'white'
        },
        deleteButton: {
            backgroundColor: '#f44336',
            color: 'white'
        },
        buttonHover: {
            opacity: 0.8
        }
    };

    return (
        <div style={styles.container}>
            <input
                type="text"
                placeholder="Enter file/folder name"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                style={styles.input}
            />
            <div style={styles.buttonsContainer}>
                <button
                    onClick={() => onAdd(fileName)}
                    style={{ ...styles.button, ...styles.addButton }}
                    onMouseOver={(e) => e.target.style.opacity = styles.buttonHover.opacity}
                    onMouseOut={(e) => e.target.style.opacity = 1}
                >
                    Add File
                </button>
                <button
                    onClick={() => onDelete(fileName)}
                    style={{ ...styles.button, ...styles.deleteButton }}
                    onMouseOver={(e) => e.target.style.opacity = styles.buttonHover.opacity}
                    onMouseOut={(e) => e.target.style.opacity = 1}
                >
                    Delete File
                </button>
            </div>
        </div>
    );
};

export default FileActions;
