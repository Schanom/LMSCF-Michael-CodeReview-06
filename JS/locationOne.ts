class Locationn{ 
  city ="";
  zipcode: number ;
  address="";
  img ="";
constructor(city,zipcode,address,img) { 
       this.city = city;
       this.zipcode= zipcode;
      this.address= address;
      this.img= img;
         }
  getloc(){
	  	return`<div><p>${this.address}, ${this.city}, ${this.zipcode}</p></div>`
  }
  getdes (){
     	
		 return`<div class="card col-12 col-sm-12 col-md-5 col-lg-3 my-2">
			 <img class="card-img-top m-2" width="150px" src="${this.img}">
			 <div class="card-body"><p class="card-text">${this.getloc()}</p>
			 </div>
		 </div>`


  }
   
}
class Restaurant extends Locationn{
	name ="";
    type ="";
    telephoneNumber = "" ;
    webAddress = "";
	constructor(city,zipcode,address,img, name, type, telephoneNumber, webAddress){
    super(city, zipcode, address, img);
    this.name = name;
    this.type = type;
    this.telephoneNumber = telephoneNumber;
    this.webAddress = webAddress;
    
	}
  getdes (){
    
		return `<div class="card col-12 col-sm-12 col-md-5 col-lg-3 my-2">
			 <img class="card-img-top m-2" width="150px" src="${this.img}">
			 <div class="card-body">
				 <h4 class="card-title">${this.name}</h4>
				 <p class="card-text">
                     ${super.getloc()}<br> ${this.type} <br> ${this.telephoneNumber}
                     </p>
			 </div>
		 </div>` 
	}
     
  }



class Eventt extends Restaurant {
	eventDate = "";
	eventTime = "";
	price : number; 
	constructor( city,zipcode,address,img, name, type, telephoneNumber, webAddress, eventDate, eventTime, price){
    super(city,zipcode,address,img, name, type, telephoneNumber, webAddress);
    this.eventDate = eventDate;
    this.eventTime = eventTime;
    this.price = price;
	}
        getdes (){return` <div class="card col-12 col-sm-12 col-md-5 col-lg-3 my-2">
									 <img class="card-img-top m-2" src="${this.img}">
								 		<div class="card-body">
										<h4 class="card-title">${this.name}</h4>
										<p class="card-text">${this.eventDate} ${this.eventTime} <br>${this.price} $
										</p>
									 </div>
							 </div>` 
							}


}
 let items =[new Locationn("Vienna", 1010, "St.Charles Church, Karlsplatz 1", "imgs/img1.jpg")
 ,new Locationn("Vienna", 1130, "Schoenbrunn Park, Maxingstrasse 13b", "imgs/img2.jpg"),
 new Restaurant("vienna", 1050, "Wehrgasse 8", "imgs/img3.jpg", "ON Restaurant", "Chinese", "+43(1)5854900", "http://www.restaurant-on.at/"),
 new Restaurant("vienna", 1150, "Stutterheimstrasse 6", "imgs/img4.jpg", "BioFrische", "Indian", "+43(1)9529215", "biofrische.wien"),
 new Eventt("vienna", 1010, "Seilerstaette 9", "imgs/img5.jpg", "Cats- The Musical",   "Indian", "+43(1)9529215", "http://catsmusical.at", "Fr., 15.12.2020", "20:00" , 120),
new Eventt("vienna", 1020, "Ernst-Happel Stadion, Meiereistrasse 7", "imgs/img6.jpg", "Guns 'n Roses", "Indian", "+43(1)9529215", "www.gunsandroses.com/", "Sat, 09.06.2020", "19:30" , 95)];






for (let i = 0; i < items.length; i++) {
	if (i< 3){
    document.getElementById("gallary1").innerHTML += items[i].getdes();
    } else{
        document.getElementById("gallary2").innerHTML += items[i].getdes();  
    }
   

		
	}



// const whiteHeart = '\u2661';
// const redHeart = '\u2665';
// const button = document.querySelector('button');
// button.addEventListener ('click', toggle);

// function toggle() {
// 	const plus = button.textContent;
// 	if (plus == whiteHeart) {
// 		button.textContent = redHeart;
// 	} else {
// 		button.textContent = whiteHeart;
// 	}
// 	}
