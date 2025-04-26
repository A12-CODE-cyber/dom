function hi(event) {
    event.preventDefault();
    
  
    const name = document.getElementById('name').value;
    const fname = document.getElementById('fname').value;
    const course = document.getElementById('courses').value;
    const imageInput = document.getElementById('IMG');
    
    const file = imageInput.files[0];
  
    if (!name || !fname || !course || !file) {
      alert("Please fill all fields and upload an image!");
      return;
    }
  
    const reader = new FileReader();
  
    reader.onload = function(event) {
      const imgURL = event.target.result;
  
      const idCard = document.createElement('div');
      idCard.style.width = '300px';
      idCard.style.padding = '20px';
      idCard.style.backgroundColor = '#ffffff';
      idCard.style.border = '2px solid #003366';
      idCard.style.borderRadius = '10px';
      idCard.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
      idCard.style.textAlign = 'center';
      idCard.style.margin = '20px auto';
  
      idCard.innerHTML = `
        <h2 style="color: #003366;">Student ID Card</h2>
        <img src="${imgURL}" alt="Student Image" style="width:100px; height:100px; object-fit:cover; border-radius:50%; margin-bottom:10px;">
        <h3>${name}</h3>
        <p><strong>Father's Name:</strong> ${fname}</p>
        <p><strong>Course:</strong> ${course}</p>
      `;
  
      const container = document.getElementById('cardContainer');
      container.innerHTML = '';
      container.appendChild(idCard);
    };
  
    reader.readAsDataURL(file);
  }
  