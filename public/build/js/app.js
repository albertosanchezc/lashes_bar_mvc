let paso=1;const pasoInicial=1,pasoFinal=3,cita={id:"",nombre:"",fecha:"",hora:"",servicios:[]};function iniciarApp(){mostrarSeccion(),tabs(),botonesPaginador(),paginaSiguiente(),paginaAnterior(),consultarAPI(),idCliente(),nombreCliente(),seleccionarFecha(),seleccionarHora(),mostrarResumen()}function mostrarSeccion(){const e=document.querySelector(".mostrar");e&&e.classList.remove("mostrar");const t="#paso-"+paso;document.querySelector(t).classList.add("mostrar");const o=document.querySelector(".actual");o&&o.classList.remove("actual");document.querySelector(`[data-paso="${paso}"]`).classList.add("actual")}function tabs(){document.querySelectorAll(".tabs button").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault(),paso=parseInt(e.target.dataset.paso),mostrarSeccion(),botonesPaginador()}))})}function botonesPaginador(){const e=document.querySelector("#anterior"),t=document.querySelector("#siguiente");1===paso?(e.classList.add("ocultar"),t.classList.remove("ocultar")):3===paso?(e.classList.remove("ocultar"),t.classList.add("ocultar"),mostrarResumen()):(t.classList.remove("ocultar"),e.classList.remove("ocultar")),mostrarSeccion()}function paginaAnterior(){document.querySelector("#anterior").addEventListener("click",(function(){paso<=1||(paso--,botonesPaginador())}))}function paginaSiguiente(){document.querySelector("#siguiente").addEventListener("click",(function(){paso>=3||(paso++,botonesPaginador())}))}async function consultarAPI(){const e=window.location.origin;try{const t=e+"/api/servicios",o=await fetch(t);mostrarServicios(await o.json())}catch(e){console.log(e)}}function mostrarServicios(e){e.forEach(e=>{const{id:t,nombre:o,precio:n}=e,a=document.createElement("P");a.classList.add("nombre-servicio"),a.textContent=o;const r=document.createElement("P");r.classList.add("precio-servicio"),r.textContent="$"+n;const c=document.createElement("DIV");c.classList.add("servicio"),c.dataset.idServicio=t,c.onclick=function(){seleccionarServicio(e)},c.appendChild(a),c.appendChild(r),document.querySelector("#servicios").appendChild(c)})}function seleccionarServicio(e){const{id:t}=e,{servicios:o}=cita,n=document.querySelector(`[data-id-servicio="${t}"]`);o.some(e=>e.id===t)?(cita.servicios=o.filter(e=>e.id!==t),n.classList.remove("seleccionado")):0===cita.servicios.length?(cita.servicios=[...o,e],n.classList.add("seleccionado")):mostrarAlerta("Solo se puede agendar un servicio por cita","error",".servicios")}function idCliente(){cita.id=document.querySelector("#id").value}function nombreCliente(){cita.nombre=document.querySelector("#nombre").value}function seleccionarFecha(){document.querySelector("#fecha").addEventListener("input",(function(e){const t=new Date(e.target.value).getUTCDay();[6,0].includes(t)?(e.target.value="",mostrarAlerta("Fines de semana no permitidos","error",".formulario")):cita.fecha=e.target.value}))}function seleccionarHora(){document.querySelector("#hora").addEventListener("input",(function(e){const t=e.target.value.split(":")[0];t<10||t>18?(e.target.value="",mostrarAlerta("Hora No Válida","error",".formulario")):cita.hora=e.target.value}))}function mostrarAlerta(e,t,o,n=!0){const a=document.querySelector(".alerta");a&&a.remove();const r=document.createElement("DIV");r.textContent=e,r.classList.add("alerta"),r.classList.add(t);document.querySelector(o).appendChild(r),n&&setTimeout(()=>{r.remove()},3e3)}function mostrarResumen(){const e=document.querySelector(".contenido-resumen");for(;e.firstChild;)e.removeChild(e.firstChild);if(Object.values(cita).includes("")||0===cita.servicios.length)return void mostrarAlerta("Faltan datos de Servicio, Fecha u Hora","error",".contenido-resumen",!1);const{nombre:t,fecha:o,hora:n,servicios:a}=cita,r=document.createElement("P");r.innerHTML="<span>Nombre:</span> "+t;const c=new Date(o),i=c.getMonth(),s=c.getDate()+2,d=c.getFullYear(),l=new Date(Date.UTC(d,i,s)).toLocaleDateString("es-MX",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),u=document.createElement("H3");u.textContent="Resumen de Servicios",e.appendChild(u),a.forEach(t=>{const{id:o,precio:n,nombre:a}=t,r=document.createElement("DIV");r.classList.add("contenedor-servicio");const c=document.createElement("P");c.textContent=a;const i=document.createElement("P");i.innerHTML="<span>Precio:</span> $"+n,r.appendChild(c),r.appendChild(i),e.appendChild(r)});const m=document.createElement("H3");m.textContent="Resumen de Cita",e.appendChild(m);const p=document.createElement("P");p.innerHTML="<span>Fecha:</span> "+l;const v=document.createElement("P");v.innerHTML=`<span>Hora:</span> ${n} Horas`;const h=document.createElement("BUTTON");h.classList.add("boton"),h.textContent="Reservar Cita",h.onclick=reservarCita,e.appendChild(r),e.appendChild(p),e.appendChild(v),e.appendChild(h)}async function reservarCita(){const{nombre:e,fecha:t,hora:o,servicios:n,id:a}=cita,r=n.map(e=>e.id),c=new FormData;c.append("fecha",t),c.append("hora",o),c.append("usuarioId",a),c.append("servicios",r);const i=window.location.origin;try{const e=i+"/api/citas",t=await fetch(e,{method:"POST",body:c}),o=await t.json();console.log(o.resultado),o.resultado&&Swal.fire({icon:"success",title:"Éxito",text:"Tu Cita Fue Creada Correctamente",button:"OK"}).then(()=>{setTimeout(()=>{window.location.reload()},3e3)})}catch(e){Swal.fire({icon:"error",title:"error",text:"Hubo un Error"}),console.log(e)}}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));