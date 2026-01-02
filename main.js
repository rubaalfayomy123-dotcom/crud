  var button = document.querySelector(".Addcontact")
var layer = document.querySelector(".layer")

button.addEventListener("click" , function() {
    
layer.classList.remove("d-none");

});
function hidelayer(){
    layer.classList.add("d-none");
}

var closebtn = document.querySelector(".xmark")
closebtn.addEventListener("click" ,hidelayer);


var FullName= document.getElementById('FullName')
var PhoneNumber= document.getElementById('PhoneNumber')
var EmailAddress= document.getElementById('EmailAddress')
var Address= document.getElementById('Address')
var category = document.getElementById('category')
var Note= document.getElementById('Note')
var favorite= document.getElementById('favorite')
var emergency= document.getElementById('emergency')
var inputGroupFile04= document.getElementById('inputGroupFile04')
var addbtn = document.getElementById('addbtn')
var updatebtn = document.getElementById('updatebtn')


    var productlist=[];
    if(localStorage.getItem ("all")!= null){
    productlist=JSON.parse (localStorage.getItem ("all"))
    displayAllproduct();
}
var box = document.querySelector("#hide")
var btn = document.querySelector("#addbtn")



addbtn.addEventListener("click" , function() {
    
box.classList.toggle("layer");

});

function addnewproduct(){
    var newproduct ={
    name : FullName.value,
    Phone: PhoneNumber.value,
    email: EmailAddress.value,
    addr: Address.value,
    cate : category.value,
    note :  Note.value,
    fav : favorite.value,
    emer : emergency.value,
    img : inputGroupFile04.files[0]?.name,
}
    if (newproduct.img==undefined){
        newproduct.img = "O9FG5V0.jpg"
    }
    
productlist.push(newproduct)
localStorage.setItem("all" , JSON.stringify(productlist))
    displayAllproduct()
     clearAllData();
     
    console.log ( productlist)
}
function clearAllData(){
    FullName.value='';
    PhoneNumber.value='';
    EmailAddress.value='';
    Address.value='';
    category.value='',
    Note.value='',
    favorite.value='',
    emergency.value='',
   inputGroupFile04.value='';
}
function displayAllproduct(){
    var box ='';
   for( var i=0 ; i < productlist.length ; i++){
    box += `<div class="card col-md-3 ms-5 contact-card  p-4 shadow-sm rounded-5 bg-white">
  <div class="d-flex align-items-start ">
<div class="avatar-container position-relative me-3">
<div class="d-flex justify-content-center align-items-center">
 <img src="./imag/${productlist[i].img }" class="card-img-top  " alt="...">
 </div>
 <span class="badge-icon top-icon"><i class="fas fa-star starfav d-none"></i></span>
 <span class="badge-icon bottom-icon"><i class="fas fa-heartbeat">${productlist[i].emer}</i></span>
</div>
<div class="contact-info flex-grow-1">
<h5 class="fw-bold mb-2">${productlist[i].name }</h5>
<div class="detail-item mb-2">
<span class="icon-bg me-2"><i class="fas fa-phone"></i></span>
 <span class="text-muted">${productlist[i].Phone }</span>
</div>
 </div>
  </div>
  <div class="detail-item mb-2">
 <span class="icon-bg me-2"><i class="fas fa-envelope"></i></span>
<span class="text-muted">${productlist[i].email }</span>
 </div>
 <div class="detail-item mb-3">
 <span class="icon-bg me-2"><i class="fas fa-map-marker-alt"></i></span>
        <span class="text-muted">${productlist[i].addr}</span>
      </div>
      <p class="card-text">${productlist[i].note}</p>
      <div class="d-flex me-2 mb-3">
        <span class="badge rounded-4 bg-light text-primary px-3 py-2 border">${productlist[i].cate}</span>
        <span class="badge rounded-4 bg-light text-danger px-3 py-2 border">
          <i class="fas fa-heartbeat me-1"></i> ${productlist[i].emer}
        </span>
        <span class="badge rounded-4 bg-light text-danger px-3 py-2 border">
          <i class="fas fa-heartbeat me-1"></i> ${productlist[i].fav}
        </span>
      </div>

  <div class="d-flex justify-content-between align-items-center mt-2 pt-3 border-top">
    <div class="d-flex gap-3">
      <a href="tel:${productlist[i].Phone }"><i class="fas fa-phone text-success cursor-pointer " ></i></a>
      <a href="mailto:${productlist[i].email }"><i class="fas fa-envelope text-primary cursor-pointer"></i></a>
      
    </div>
    <div class="d-flex  align-items-center">
      <i class="fas fa-star text-warning cursor-pointer icfafooter" >${productlist[i].fav}</i>
      <i class="fas fa-heartbeat text-danger me-1">${productlist[i].emer}</i>
      <i class="fas fa-pen text-muted cursor-pointer" onclick="PreUpdate(${i})"></i>
      <i class="fas fa-trash text-muted cursor-pointer" onclick= "Deleteproduct(${i})"></i>
    </div>
  </div>
</div>


    `;}
                document.getElementById('demo').innerHTML= box
}



function Deleteproduct( index){
productlist.splice(index , 1)
localStorage.setItem("all" , JSON.stringify(productlist))
displayAllproduct();
}
function searchByname(term){
    var box ='';
    for (i = 0 ; i< productlist.length ; i++ )
    {
        if( productlist[i].name.toLowerCase().includes(term.toLowerCase())){
            box += `<div class="card col-md-3 ms-5 contact-card  p-4 shadow-sm rounded-5 bg-white">
  <div class="d-flex align-items-start ">
    <div class="avatar-container position-relative me-3">
      <div class="d-flex justify-content-center align-items-center">
     <img src="./imag/${productlist[i].img }" class="card-img-top  " alt="...">
  
      </div>
      <span class="badge-icon top-icon"><i class="fas fa-star d-none">${productlist[i].fav}</i></span>
      <span class="badge-icon bottom-icon"><i class="fas fa-heartbeat">${productlist[i].emer}</i></span>
    </div>

    <div class="contact-info flex-grow-1">
      <h5 class="fw-bold mb-2">${productlist[i].name }</h5>
      
      <div class="detail-item mb-2">
        <span class="icon-bg me-2"><i class="fas fa-phone"></i></span>
        <span class="text-muted">${productlist[i].Phone }</span>
      </div>

      

      
    </div>
  </div>
  <div class="detail-item mb-2">
        <span class="icon-bg me-2"><i class="fas fa-envelope"></i></span>
        <span class="text-muted">${productlist[i].email }</span>
      </div>

      <div class="detail-item mb-3">
        <span class="icon-bg me-2"><i class="fas fa-map-marker-alt"></i></span>
        <span class="text-muted">${productlist[i].addr}</span>
      </div>
      <p class="card-text">${productlist[i].note}</p>
      <div class="d-flex me-2 mb-3">
        <span class="badge rounded-4 bg-light text-primary px-3 py-2 border">${productlist[i].cate}</span>
        <span class="badge rounded-4 bg-light text-danger px-3 py-2 border">
          <i class="fas fa-heartbeat me-1"></i> ${productlist[i].emer}
        </span>
        <span class="badge rounded-4 bg-light text-danger px-3 py-2 border">
          <i class="fas fa-heartbeat me-1"></i> ${productlist[i].fav}
        </span>
      </div>

  <div class="d-flex justify-content-between align-items-center mt-2 pt-3 border-top">
    <div class="d-flex gap-3">
      <a href="tel:${productlist[i].Phone }"><i class="fas fa-phone text-success cursor-pointer " ></i></a>
      <a href="mailto:${productlist[i].email }"><i class="fas fa-envelope text-primary cursor-pointer"></i></a>
      
    </div>
    <div class="d-flex  align-items-center">
      <i class="fas fa-star text-warning cursor-pointer" >${productlist[i].fav}</i>
      <i class="fas fa-heartbeat text-danger me-1" >${productlist[i].emer}</i>
      <i class="fas fa-pen text-muted cursor-pointer" onclick="PreUpdate(${i})"></i>
      <i class="fas fa-trash text-muted cursor-pointer" onclick= "Deleteproduct(${i})"></i>
    </div>
  </div>
</div>

    `;

        }
    }
    document.getElementById('demo').innerHTML= box
}

 var mainindex;
function PreUpdate(index){
FullName.value=productlist[index].name;
PhoneNumber.value=productlist[index].Phone;
Address.value=productlist[index].addr;
EmailAddress.value=productlist[index].email;
category.value=productlist[index].cate;
Note.value=productlist[index].note;
favorite.value=productlist[index].fav;
emergency.value=productlist[index].emer;
layer.classList.remove("d-none");
addbtn.classList.replace("d-block" , "d-none")
updatebtn.classList.replace("d-none" , "d-block")
mainindex=index;

}
function updateproduct(){
    var newproduct ={
    name : FullName.value,
    Phone :PhoneNumber.value,
    email:EmailAddress.value,
    addr:Address.value,
    cate:category.value,
    note:Note.value,
    fav:favorite.value,
    emer:emergency.value,
    img : inputGroupFile04.files[0]?.name,
}
productlist.splice(mainindex , 1 ,newproduct);
displayAllproduct
}



