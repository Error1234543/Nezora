const $=id=>document.getElementById(id);
const STORE="mehndiByEktaDemoBookings";
const packages={1200:"Basic Mehndi",1500:"Classic Mehndi",2000:"Premium Mehndi"};
const travelFees={"2":100,"4":200,"7.5":350};
const money=n=>"₹"+Number(n||0).toLocaleString("en-IN");
const service=$("service"),pack=$("package"),areaFields=$("areaFields"),area=$("area"),address=$("address"),distance=$("distance"),dateInput=$("date");
dateInput.min=new Date().toISOString().slice(0,10);
$("year").textContent=new Date().getFullYear();
$("menuToggle").addEventListener("click",()=>$("mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>$("mainNav").classList.remove("open")));
function travelFee(){return service.value==="home"?(travelFees[distance.value]||0):0}
function updatePrice(){const base=Number(pack.value);$("basePrice").textContent=money(base);$("travelPrice").textContent=money(travelFee());$("totalPrice").textContent=money(base+travelFee())}
function updateService(){const home=service.value==="home";areaFields.hidden=!home;area.required=home;address.required=home;distance.required=home;updatePrice()}
service.addEventListener("change",updateService);pack.addEventListener("change",updatePrice);distance.addEventListener("change",updatePrice);updateService();
function readBookings(){try{return JSON.parse(localStorage.getItem(STORE)||"[]")}catch{return[]}}
function saveBookings(items){localStorage.setItem(STORE,JSON.stringify(items))}
$("bookingForm").addEventListener("submit",e=>{
 e.preventDefault();
 const home=service.value==="home",km=Number(distance.value);
 if(home&&(!area.value||!address.value.trim()||!distance.value)){ $("formMessage").textContent="Please select your area, enter the address and choose approximate distance.";return}
 if(home&&km>10){$("formMessage").textContent="Sorry, home visits are currently limited to 10 km. Please choose an appointment at Ekta’s location.";return}
 const phone=$("phone").value.trim();if(!/^[0-9]{10}$/.test(phone)){$("formMessage").textContent="Please enter a valid 10-digit mobile number.";return}
 const base=Number(pack.value),fee=travelFee();
 const booking={id:"MEK"+Date.now().toString().slice(-7),service:home?"Ekta visits customer home":"Customer visits Ekta’s location",serviceType:home?"home":"studio",package:packages[base],price:base,travelFee:fee,total:base+fee,date:dateInput.value,window:$("window").value,name:$("name").value.trim(),phone,area:home?area.value:"Mehsana — artist location (shared after confirmation)",address:home?address.value.trim():"",distance:home?km:null,notes:$("notes").value.trim(),status:"Pending review",payment:"Not paid",createdAt:new Date().toISOString(),confirmedTime:""};
 const all=readBookings();all.unshift(booking);saveBookings(all);
 const msg="Hello Mehndi by Ekta! I submitted a booking request.\nBooking ID: "+booking.id+"\nName: "+booking.name+"\nPhone: "+phone+"\nService: "+booking.service+"\nArea: "+booking.area+"\nAddress: "+(booking.address||"Please share studio location after confirmation")+"\nDistance: "+(home?km+" km":"Studio appointment")+"\nPackage: "+booking.package+" — "+money(base)+"\nEstimated travel fee: "+money(fee)+"\nEstimated total: "+money(base+fee)+"\nDate: "+booking.date+"\nPreferred time: "+booking.window+"\nPlease confirm availability, exact distance and final charges.";
 $("formMessage").textContent="Request saved in this browser demo. Booking ID: "+booking.id+". Use the button below to share the details with Ekta.";
 const wa=document.createElement("a");wa.className="btn btn-dark full";wa.style.marginTop="12px";wa.target="_blank";wa.rel="noopener";wa.href="https://wa.me/?text="+encodeURIComponent(msg);wa.textContent="Share booking details ↗";$("formMessage").appendChild(document.createElement("br"));$("formMessage").appendChild(wa);
});
document.querySelectorAll(".gallery-grid img").forEach(img=>img.addEventListener("error",()=>img.closest("figure").classList.add("image-unavailable")));
