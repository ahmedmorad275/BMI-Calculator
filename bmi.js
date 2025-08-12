var button = document.getElementById('btn');

button.onclick = function () {
   var weight = Number(document.getElementById('weight').value);
   var height = Number(document.getElementById('height').value);
   var bmi = document.getElementById('bmi');
   var rank = document.getElementById('rank');
   var bmir = weight / (height * height);
   bmi.innerHTML = bmir.toFixed(2) + ' kg/m&sup2;';
   rank.className = 'rank-ar';
   if (!weight || !height || weight <= 0 || height <= 0) {
      alert('يرجي إدخال وزن وطول صحيحين');
      return;
   }
   if (bmir < 18) {
      rank.innerHTML = 'نحافة';
   } else if (bmir >= 18 && bmir < 25) {
      rank.innerHTML = 'وزن مثالي';
   } else if (bmir >= 25 && bmir < 30) {
      rank.innerHTML = 'وزن زائد';
   } else if (bmir >= 30 && bmir < 35) {
      rank.innerHTML = 'سمنة درجة أولي';
   } else if (bmir >= 35 && bmir < 40) {
      rank.innerHTML = 'سمنة درجة ثانية';
   } else {
      rank.innerHTML = 'سمنة خطيرة';
   }
};
