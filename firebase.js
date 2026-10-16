// Shared by index.html and admin.html.
import {initializeApp} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {getFirestore,collection,doc,getDoc,getDocs,setDoc,deleteDoc,query,where} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {getAnalytics} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import * as A from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
const firebaseConfig={apiKey:"AIzaSyCpNubU52ppcYbz2Z4d9lbSVyGAle9NmXI",authDomain:"spaceantgalaxy.firebaseapp.com",projectId:"spaceantgalaxy",storageBucket:"spaceantgalaxy.firebasestorage.app",messagingSenderId:"173525382412",appId:"1:173525382412:web:3c47fa3c61abe312dcc529",measurementId:"G-C6L4VP1R6W"};
const app=initializeApp(firebaseConfig),db=getFirestore(app),auth=A.getAuth(app);try{getAnalytics(app)}catch(e){}
export {auth,A};
export const $=s=>document.querySelector(s);
export const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const fmt=n=>'₦'+Number(n||0).toLocaleString();
export async function ld(c,f,v){const r=f?query(collection(db,c),where(f,'==',v)):collection(db,c);return(await getDocs(r)).docs.map(d=>({...d.data(),id:d.id}))}
export async function gd(c,id){const d=await getDoc(doc(db,c,id));return d.exists()?{...d.data(),id}:null}
export async function sv(c,o){o.id=o.id||doc(collection(db,c)).id;await setDoc(doc(db,c,o.id),o);return o}
export const rm=(c,id)=>deleteDoc(doc(db,c,id));
export async function getCfg(){let c=null;try{c=await gd('config','site')}catch(e){}return{subOn:true,price:0,bank:'',...(c||{})}}
export function stars(){}
