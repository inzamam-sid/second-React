// const heading = React.createElement("h1",{id: "heading",xyz: "abc"},"Hello world from react");
//     console.log(heading);// object
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading);

//----------------------------------------------------------------------------------

// Nested HTML structure inside React

/**
 * <div id= "Parent">
 * <div id= "child1">
 * <h1>I am h1 tag</h1>
 * <h2>I am h2 tag</h2>
 * </div>
 * <div id= "child1">
 * <h1>I am h1 tag</h1>
 * <h2>I am h2 tag</h2>
 * </div>
 * </div>
 * 
 * ReactElement(object) => HTMl (Browser can Understand)
 * [] we use square breacut for sibling like h1 and h2 and child1 and child2
 */


import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"I am Inzamam siddiqui"),
            React.createElement("h2",{},"I am h2 tag")
        ]
    ),React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"I am h1 tag"),
            React.createElement("h2",{},"I am h2 tag")
        ]
    )

]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);