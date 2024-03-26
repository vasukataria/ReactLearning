// const heading = React.createElement(
//   "h1",
//   {id: "heading"},
//   "I am writing first react code using CDN links"
// );
// console.log(heading)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

{/* <div id = "parent">
<div id = 'child'> 
<h1>  hello  </h1>
<h2>  my name is Vasu  </h2>
</div>
</div> */}

const heading = React.createElement(
'div',
{id: "parent"},
React.createElement('div', {id: 'child'}, [React.createElement('h1', {}, 'hello'), React.createElement('h2', {}, 'My name is Vasu')])
);
console.log(heading)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
