const e=`<form class="new-employee-form" id="employeeForm">
        <label>Name:
            <input name="name" type="text" data-qa="name" required>
        </label>
        <label>Position:
            <input name="position" type="text" data-qa="position">
        </label>
        <label>Office:
            <select name="office" data-qa="office" required>
                <option value="Tokyo">Tokyo</option>
                <option value="Singapore">Singapore</option>
                <option value="London">London</option>
                <option value="New York">New York</option>
                <option value="Edinburgh">Edinburgh</option>
                <option value="San Francisco">San Francisco</option>
            </select>
        </label>
        <label>Age:
            <input name="age" type="number" data-qa="age" required>
        </label>
        <label>Salary:
            <input name="salary" type="number" data-qa="salary" required>
        </label>
        <button type="submit">Save to table</button>
    </form>`,t=`<label>
            <select class='cell-input'>
                <option value="Tokyo">Tokyo</option>
                <option value="Singapore">Singapore</option>
                <option value="London">London</option>
                <option value="New York">New York</option>
                <option value="Edinburgh">Edinburgh</option>
                <option value="San Francisco">San Francisco</option>
            </select>
          </label>`;function n(e){let t=document.querySelector(".active");t&&t.classList.remove("active"),t===e?e.classList.remove("active"):e.classList.add("active")}function r(e,t,n){let r=`<div
  class = 'notification ${n}' data-qa="notification">
    <h2 class='title'>${e}</h2>
    <p>${t}</p>
  </div>`;document.body.insertAdjacentHTML("beforeend",r);let o=document.querySelector(".notification");setTimeout(()=>{o.style.display="none"},5e3)}document.body.insertAdjacentHTML("beforeend",e);const o=document.querySelector("form"),a=document.querySelector("thead"),l=document.querySelector("tbody"),i=[...l.rows];[...a.rows[0].cells].forEach((e,t,n)=>{let r="";e.dataset.direction="ASC",e.addEventListener("click",o=>{o.preventDefault(),r=t;let a="ASC"===e.dataset.direction?1:-1;(function(e,t,n){let r=[...e.rows].sort((e,r)=>{let o=[...e.cells][t].textContent,a=[...r.cells][t].textContent;return o.includes("$")||!isNaN(+o)?((o=+o.replace("$","").replaceAll(",",""))-(a=+a.replace("$","").replaceAll(",","")))*n:o.localeCompare(a)*n});e.append(...r)})(l,t,a),e.dataset.direction=1===a?"DESC":"ASC",r===t&&n.forEach(t=>{t!==e&&(t.dataset.direction="ASC")})})}),i.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),n(e)})}),o.addEventListener("submit",e=>{e.preventDefault();let t=function(e){let{name:t,position:n,office:o,age:a,salary:l}=e.elements;if(t.value.trim().length<4)return r("Error! Incorrect Name","Please enter Name longer than 4 characters","error");if(n.value.trim().length<4)return r("Error! Incorrect Position","Please enter Position longer than 4 characters","error");if(a.value<18||a.value>90)return r("Error! Incorrect Age","Please enter Age value between 18 and 99","error");let i=`$${l.value.replace(/\B(?=(\d{3})+(?!\d))/g,",")}`,c={name:t.value.trim(),position:n.value.trim(),office:o.value,age:a.value,salary:i};return r("Success","New employee was added in to table","success"),c}(o);if(t){let e=l.insertRow();for(let n in t)e.insertCell().textContent=t[n];e.addEventListener("click",t=>{t.preventDefault(),n(e)}),o.reset()}}),i.forEach(e=>{[...e.cells].forEach((e,n)=>{e.addEventListener("dblclick",o=>{switch(o.preventDefault(),n){case 0:case 1:(function(e){let t=e.textContent;e.textContent="";let n=document.createElement("input");n.classList.add("cell-input"),n.type="text",e.append(n),n.focus(),n.addEventListener("blur",()=>{if(n.value.trim().length<4)return e.textContent=t,n.remove(),r("Error!","Enter more than 4 characters","warning");e.textContent=n.value.trim(),n.remove()}),n.addEventListener("keyup",o=>{if(o.preventDefault(),"Enter"===o.key){if(n.value.trim().length<4)return e.textContent=t,n.remove(),r("Error!","Enter more than 4 characters","warning");e.textContent=n.value.trim(),n.remove()}"Escape"===o.key&&(e.textContent=t,n.remove())})})(e);break;case 2:!function(e){let n=e.textContent;e.textContent="",e.insertAdjacentHTML("beforeend",t);let r=e.querySelector(".cell-input");r.focus(),r.addEventListener("change",()=>{e.textContent=r.value}),r.addEventListener("blur",t=>{t.preventDefault(),e.textContent=n}),r.addEventListener("keyup",t=>{"Escape"===t.key&&(e.textContent=n,r.remove())})}(e);break;case 3:!function(e){let t=e.textContent;e.textContent="";let n=document.createElement("input");n.classList.add("cell-input"),n.type="number",e.append(n),n.focus(),n.addEventListener("blur",()=>{if(18>+n.value||+n.value>90)return e.innerText=+t,n.remove(),r("Error! Incorrect Age","Please enter Age value between 18 and 99","error");e.textContent=+n.value,n.remove()}),n.addEventListener("keyup",o=>{if(o.preventDefault(),"Enter"===o.key){if(18>+n.value||+n.value>90)return e.innerText=+t,n.remove(),r("Error! Incorrect Age","Please enter Age value between 18 and 99","error");e.textContent=+n.value,n.remove()}"Escape"===o.key&&(e.textContent=+t,n.remove())})}(e);break;case 4:!function(e){let t=e.textContent;e.textContent="";let n=document.createElement("input");n.classList.add("cell-input"),n.type="number",e.append(n),n.focus();let o=e=>`$${(+e).toLocaleString("en-US")}`;n.addEventListener("blur",()=>{if(n.value<0||!n.value)return e.textContent=t,n.remove(),r("Error!","Salary have to be more than 0","error");e.textContent=o(n.value),n.remove()}),n.addEventListener("keyup",a=>{if(a.preventDefault(),"Enter"===a.key){if(n.value<0||!n.value)return e.innerText=t,n.remove(),r("Error!","Salary have to be more than 0","error");e.textContent=o(n.value),n.remove()}"Escape"===a.key&&(e.textContent=t,n.remove())})}(e)}})})});
//# sourceMappingURL=index.8dd3b55c.js.map
