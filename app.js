var boxs = document.getElementsByClassName("child")
var toggle = false
var win = document.getElementById("win")
var temp = document.getElementById("temp")
var Matrix = [[1,2,3],[4,5,6],[7,8,9]]
var button = document.getElementById("again")

function Update(a){
    toggle=!toggle
    if (toggle){
        a.innerHTML="<p>X</p>"
        return "X"
    }else{
        a.innerHTML="<p>O</p>"
        return "O"
    }
}

function appender(n,item){
    if (n<3){
        Matrix[0][n]=item
    }else{
        let remain = n%3
        let row = Math.floor(n/3)
        Matrix[row][remain]=item
    }
    return Matrix
}

function checker(matrix){
    for (let j=0;j<3;j++){
        if (matrix[j][0]==matrix[j][1] && matrix[j][1]==matrix[j][2]){
            win.innerText="Player '"+matrix[j][0]+"' wins"
            temp.style.visibility="visible"
        }else if(matrix[0][j]==matrix[1][j] && matrix[1][j]==matrix[2][j]){
            win.innerText="Player '"+matrix[0][j]+"' wins"
            temp.style.visibility="visible"

        }else if (matrix[0][0]==matrix[1][1] && matrix[1][j]==matrix[2][2]){
            win.innerText="Player '"+matrix[0][0]+"' wins"
            temp.style.visibility="visible"

        }else if(matrix[0][2]==matrix[1][1] && matrix[1][j]==matrix[2][0]){
            win.innerText="Player '"+matrix[2][0]+"' wins" 
            temp.style.visibility="visible"

        }
    }
    
}

for (let i =0 ; i<boxs.length;i++){
    boxs[i].onclick=()=>{
        if (boxs[i].innerText=="X" || boxs[i].innerText=="O" ){
            undefined
        }else{
            let temp=Update(boxs[i])
            let list=appender(i,temp)
            checker(list)
        }     
    }
}

button.onclick = () =>{
    window.location.reload()
}


