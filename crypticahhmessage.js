window.onload = async function()=>{
  await new Promise(resolve => setTimeout(resolve,1000))
  const et = document.getElementById("test")
  et.innerHTML = "Halo mr"
  await new Promise(resolve => setTimeout(resolve,4000))
  et.innerHTML ="Mengapa kau menekan tombol tersebut?"
  await new Promise(resolve => setTimeout(resolve,4000))
  et.innerHTML = "Fokus koreksi bro"
  await new Promise(resolve => setTimeout(resolve,3000))
  et.innerHTML = "Tidak ada apapun disini"
  await new Promise(resolve => setTimeout(resolve,7850))
  et.innerHTML = "ayo koreksi saya menunggu nilaiku"
  await new Promise(resolve => setTimeout(resolve,6000))
  et.innerHTML = "yowes"
}