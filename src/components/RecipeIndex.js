function RecipeIndex({alphaIndex}) {
    const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I",
      "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
      "U", "V", "W", "X", "Y", "Z"
    ];
  var num=0
    return (
      <div className="index-container">
        {
          alpha.map((item) => (
            <div key={num++} className="numBox" onClick={()=>alphaIndex(item)}>
              <h3>{item}</h3>
            </div>
          ))
        }
      </div>
    );
  }
  export default RecipeIndex