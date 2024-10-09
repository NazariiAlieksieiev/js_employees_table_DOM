!function(){function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,void 0);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e){var t=document.querySelector(".active");t&&t.classList.remove("active"),t===e?e.classList.remove("active"):e.classList.add("active")}function r(e,t,n){var r="<div\n  class = 'notification ".concat(n,"' data-qa=\"notification\">\n    <h2 class='title'>").concat(e,"</h2>\n    <p>").concat(t,"</p>\n  </div>");document.body.insertAdjacentHTML("beforeend",r);var o=document.querySelector(".notification");setTimeout(function(){o.style.display="none"},5e3)}document.body.insertAdjacentHTML("beforeend",'<form class="new-employee-form" id="employeeForm">\n        <label>Name:\n            <input name="name" type="text" data-qa="name" required>\n        </label>\n        <label>Position:\n            <input name="position" type="text" data-qa="position">\n        </label>\n        <label>Office:\n            <select name="office" data-qa="office" required>\n                <option value="Tokyo">Tokyo</option>\n                <option value="Singapore">Singapore</option>\n                <option value="London">London</option>\n                <option value="New York">New York</option>\n                <option value="Edinburgh">Edinburgh</option>\n                <option value="San Francisco">San Francisco</option>\n            </select>\n        </label>\n        <label>Age:\n            <input name="age" type="number" data-qa="age" required>\n        </label>\n        <label>Salary:\n            <input name="salary" type="number" data-qa="salary" required>\n        </label>\n        <button type="submit">Save to table</button>\n    </form>');var o=document.querySelector("form"),a=document.querySelector("thead"),i=document.querySelector("tbody"),l=t(i.rows);t(a.rows[0].cells).forEach(function(e,n,r){var o="";e.dataset.direction="ASC",e.addEventListener("click",function(a){a.preventDefault(),o=n;var l="ASC"===e.dataset.direction?1:-1;(function(e,n,r){var o=t(e.rows).sort(function(e,o){var a=t(e.cells)[n].textContent,i=t(o.cells)[n].textContent;return a.includes("$")||!isNaN(+a)?((a=+a.replace("$","").replaceAll(",",""))-(i=+i.replace("$","").replaceAll(",","")))*r:a.localeCompare(i)*r});e.append.apply(e,t(o))})(i,n,l),e.dataset.direction=1===l?"DESC":"ASC",o===n&&r.forEach(function(t){t!==e&&(t.dataset.direction="ASC")})})}),l.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault(),n(e)})}),o.addEventListener("submit",function(e){e.preventDefault();var t=function(e){var t=e.elements,n=t.name,o=t.position,a=t.office,i=t.age,l=t.salary;if(n.value.trim().length<4)return r("Error! Incorrect Name","Please enter Name longer than 4 characters","error");if(o.value.trim().length<4)return r("Error! Incorrect Position","Please enter Position longer than 4 characters","error");if(i.value<18||i.value>90)return r("Error! Incorrect Age","Please enter Age value between 18 and 99","error");var c="$".concat(l.value.replace(/\B(?=(\d{3})+(?!\d))/g,",")),u={name:n.value.trim(),position:o.value.trim(),office:a.value,age:i.value,salary:c};return r("Success","New employee was added in to table","success"),u}(o);if(t){var a=i.insertRow();for(var l in t)a.insertCell().textContent=t[l];a.addEventListener("click",function(e){e.preventDefault(),n(a)}),o.reset()}}),l.forEach(function(e){t(e.cells).forEach(function(e,t){e.addEventListener("dblclick",function(n){var o,a,i,l,c,u,s,v,d;switch(n.preventDefault(),t){case 0:case 1:v=e.textContent,e.textContent="",(d=document.createElement("input")).classList.add("cell-input"),d.type="text",e.append(d),d.focus(),d.addEventListener("blur",function(){if(d.value.trim().length<4)return e.textContent=v,d.remove(),r("Error!","Enter more than 4 characters","warning");e.textContent=d.value.trim(),d.remove()}),d.addEventListener("keyup",function(t){if(t.preventDefault(),"Enter"===t.key){if(d.value.trim().length<4)return e.textContent=v,d.remove(),r("Error!","Enter more than 4 characters","warning");e.textContent=d.value.trim(),d.remove()}"Escape"===t.key&&(e.textContent=v,d.remove())});break;case 2:o=e.textContent,e.textContent="",e.insertAdjacentHTML("beforeend",'<label>\n            <select class=\'cell-input\'>\n                <option value="Tokyo">Tokyo</option>\n                <option value="Singapore">Singapore</option>\n                <option value="London">London</option>\n                <option value="New York">New York</option>\n                <option value="Edinburgh">Edinburgh</option>\n                <option value="San Francisco">San Francisco</option>\n            </select>\n          </label>'),(a=e.querySelector(".cell-input")).focus(),a.addEventListener("change",function(){e.textContent=a.value}),a.addEventListener("blur",function(t){t.preventDefault(),e.textContent=o}),a.addEventListener("keyup",function(t){"Escape"===t.key&&(e.textContent=o,a.remove())});break;case 3:i=e.textContent,e.textContent="",(l=document.createElement("input")).classList.add("cell-input"),l.type="number",e.append(l),l.focus(),l.addEventListener("blur",function(){if(18>+l.value||+l.value>90)return e.innerText=+i,l.remove(),r("Error! Incorrect Age","Please enter Age value between 18 and 99","error");e.textContent=+l.value,l.remove()}),l.addEventListener("keyup",function(t){if(t.preventDefault(),"Enter"===t.key){if(18>+l.value||+l.value>90)return e.innerText=+i,l.remove(),r("Error! Incorrect Age","Please enter Age value between 18 and 99","error");e.textContent=+l.value,l.remove()}"Escape"===t.key&&(e.textContent=+i,l.remove())});break;case 4:c=e.textContent,e.textContent="",(u=document.createElement("input")).classList.add("cell-input"),u.type="number",e.append(u),u.focus(),s=function(e){return"$".concat((+e).toLocaleString("en-US"))},u.addEventListener("blur",function(){if(u.value<0||!u.value)return e.textContent=c,u.remove(),r("Error!","Salary have to be more than 0","error");e.textContent=s(u.value),u.remove()}),u.addEventListener("keyup",function(t){if(t.preventDefault(),"Enter"===t.key){if(u.value<0||!u.value)return e.innerText=c,u.remove(),r("Error!","Salary have to be more than 0","error");e.textContent=s(u.value),u.remove()}"Escape"===t.key&&(e.textContent=c,u.remove())})}})})})}();
//# sourceMappingURL=index.36251ab0.js.map
