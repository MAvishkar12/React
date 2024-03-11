const parent=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
React.createElement("h1",{},"This is react")))

const heading=React.createElement("h1",{id:"header" ,class:"h1"},"Welcome to React")

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)