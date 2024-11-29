

async function editDisplay(myid)
{
  let api=`http://localhost:3000/books/${myid}`

  let Obj= await fetch(api);
  let Data=await Obj.json();
  
  myForm=`
          Edit Book Name: <input type="text" value="${Data.bookname}">
          <br>
           Edit Author Name: <input type="text" value="${Data.authorname}">
          <br>
           Edit Publish year: <input type="text" value="${Data.publishyear}">
          <br>
           Edit Book Price: <input type="text" value="${Data.price}">
          <br>
          <button> Edit Save! </button>
  `
  document.getElementById("demo1").innerHTML=myForm;
}




async function dataDisplay()
{
 let Table=`<table width="90%" border="1" bgcolor="pink">
              <tr bgcolor="orange">
                <th> Book name </th>
                <th> Author Name </th>
                <th> Publish Year </th>
                <th> Price </th>
                <th></th>
               </tr> 
           `

  let api="http://localhost:3000/books";

  let myObj= await fetch(api);
  let myData= await myObj.json();

   myData.map((key)=>{
       Table+=` <tr>
                  <td> ${key.bookname} </td>
                  <td> ${key.authorname} </td>
                  <td> ${key.publishyear} </td>
                  <td> ${key.price} </td>
                   <td> 
                   
                   <a href="#" onclick="editDisplay(${key.id})">
                     <img src="images/edit.png" width="30" height="30" >
                   </a>
                   </td>
                </tr>  
            `

   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;

}

dataDisplay();