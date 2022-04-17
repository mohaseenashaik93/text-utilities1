import React,{useState} from 'react'

export const TextForm = (props) => {
    
    const handleUpclick = () => {
        console.log("Upclicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleLowclick = () => {
        console.log("Upclicked" + text);
        let newtext = text.toLocaleLowerCase();
        setText(newtext);
    }

    const handlerepeated = (e) =>{

        let ar1 = text.split(" ");

        let ar2 = ar1.filter( (ele, ind) => 
        
        ind === ar1.findIndex( elem => elem === ele)
        
        )

        console.log(ar2);

        var filteredArray = ar1.filter(value => ar2.includes(value));

        console.log(filteredArray);

    }

    const handleOnChange = (event) => {
        console.log("onchange");
        setText(event.target.value);
    }

    const [text, setText] = useState(''); 

  return (
      <>
        <div className="container my-3">
            <br></br>
            <h1 style={{color: props.mode === 'dark'? 'white' : 'black'}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey' : 'white', color: props.mode === 'dark'? 'white' : 'grey'}}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleUpclick}>Convert to uppercase</button>
            <button type="submit" className="btn btn-primary mx-2" onClick={handleLowclick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
            <p>{text.split(" ").length -1} words and {text.length} char</p>
            <p>You can read in {0.08 * text.split(" ").length} Mintues</p>
            <h2>Preview</h2>
            <p>{text.length >0 ? text : 'Enter Text to preview' }</p>
        </div>
      </>
   
  )
}
