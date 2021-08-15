import './divs.css'

function Divs(props) {
    
    console.log(props)
    var arr = props.text.split("");
    console.log(arr);
    
    return(
        <div className="div">
            {arr.map((el) => {
                let color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
                let bgcolor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
                if(color == bgcolor){
                    color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
                }
                return(
                    <div style={{
                        color : color,
                        backgroundColor : bgcolor
                    }}>{el}</div>
                )
            })}
        </div>
    )
}

export default Divs
