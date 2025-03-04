import React, { useState } from 'react';

const FileTree = ({ data, onSelect }) => {
    const [expanded, setExpanded] = useState({});
    const toggleExpanded = (name) => {
        setExpanded({ ...expanded, [name]: !expanded[name] });
    };

    const styles = {
        list: {
            listStyle: "none",
            padding: "0",
            margin: "0",
            fontFamily: "'Roboto', sans-serif",
        },
        listItem: {
            padding: "8px 16px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            borderRadius: "4px",
            transition: "background-color 0.2s ease",
            flexWrap: "wrap",  // Allows for wrapping content when necessary
        },
        listItemHover: {
            backgroundColor: "#f0f0f0",
        },
        folderIcon: {
            marginRight: "10px",
            fontSize: "20px",  // Make icon size consistent
        },
        fileIcon: {
            marginRight: "10px",
            fontSize: "20px",  // Make icon size consistent
        },
        folderName: {
            fontWeight: "500",
            color: "#333",
            fontSize: "16px",
        },
        fileName: {
            fontWeight: "400",
            color: "#555",
            fontSize: "14px",
        },
        nestedList: {
            marginLeft: "20px",
            marginTop: "10px",
            paddingLeft: "20px",
            borderLeft: "2px solid #ddd",
        },
        // Mobile responsiveness
        "@media (max-width: 768px)": {
            listItem: {
                padding: "6px 12px",  // Reduced padding for smaller screens
            },
            folderName: {
                fontSize: "14px",  // Smaller font size for folder names
            },
            fileName: {
                fontSize: "12px",  // Smaller font size for file names
            },
            folderIcon: {
                fontSize: "18px",  // Smaller icons for mobile
            },
            fileIcon: {
                fontSize: "18px",  // Smaller icons for mobile
            },
            nestedList: {
                marginLeft: "15px",  // Reduced margin for nested lists
            },
        },

        // Small mobile view adjustments
        "@media (max-width: 480px)": {
            listItem: {
                padding: "4px 8px",  // Further reduced padding for very small screens
            },
            folderIcon: {
                fontSize: "16px",  // Even smaller icons for very small screens
            },
            fileIcon: {
                fontSize: "16px",  // Even smaller icons for very small screens
            },
        },
    };

    return (
        <ul style={styles.list}>
            {data.map((item) => (
                <li key={item.name} style={styles.listItem}>
                    {item.type === "folder" ? (
                        <>
                            <span
                                onClick={() => toggleExpanded(item.name)}
                                style={{
                                    ...styles.folderIcon,
                                    ...styles.listItem,
                                    ...(expanded[item.name] ? styles.listItemHover : {}),
                                }}
                            >
                                🗂️ {item.name}
                            </span>
                            {expanded[item.name] && (
                                <ul style={styles.nestedList}>
                                    <FileTree data={item.children || []} onSelect={onSelect} />
                                </ul>
                            )}
                        </>
                    ) : (
                        <span
                            onClick={() => onSelect(item)}
                            style={{ ...styles.fileIcon, ...styles.fileName }}
                        >
                            📁 {item.name}
                        </span>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default FileTree;
