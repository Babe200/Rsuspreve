const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("resultsList");

let data = [];

// تحميل البيانات من ملف JSON
fetch("results.json")
  .then(response => response.json())
  .then(json => {
    data = json;
    displayResults(data);
  })
  .catch(err => {
    resultsList.innerHTML = "<li class='text-red-500'>فشل تحميل النتائج</li>";
  });

// عرض النتائج في القائمة
function displayResults(results) {
  resultsList.innerHTML = "";
  if (results.length === 0) {
    resultsList.innerHTML = "<li>لا توجد نتائج مطابقة</li>";
    return;
  }

  results.forEach(d => {
    const item = document.createElement("li");
    item.className = "bg-gray-100 p-4 rounded shadow-sm";
    item.innerHTML = `
      <strong>الاسم:</strong> ${d.name}<br>
      <strong>رقم الجلوس:</strong> ${d.number}<br>
      <strong>المعدل:</strong> ${d.average}<br>
      <strong>النتيجة:</strong> ${d.result}<br>
      <strong>المدرسة:</strong> ${d.school}
    `;
    resultsList.appendChild(item);
  });
}

// البحث
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = data.filter(d =>
    d.name.toLowerCase().includes(query) ||
    d.number.toString().includes(query)
  );
  displayResults(filtered);
});
