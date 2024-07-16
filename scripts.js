document.querySelectorAll('.rating label input').forEach(input => {
    input.addEventListener('change', function() {
        const section = this.name;

        document.querySelectorAll(`input[name="${section}"]`).forEach(radio => {
            const img = radio.parentElement.querySelector('img');
            if (radio.checked) {
                img.src = img.dataset.gif;
                radio.parentElement.classList.add('selected');
            } else {
                img.src = img.dataset.static;
                radio.parentElement.classList.remove('selected');
            }
            img.classList.toggle('blur', !radio.checked);
        });
    });
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('formSection').style.display = 'none';
    document.getElementById('userInfoSection').style.display = 'block';
});

document.getElementById('backToFeedback').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('userInfoSection').style.display = 'none';
    document.getElementById('formSection').style.display = 'block';
});

document.getElementById('userInfoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('userInfoSection').style.display = 'none';
    document.getElementById('thankYouSection').style.display = 'block';

    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const comments = document.getElementById('comments').value;
    const billno = document.getElementById('billno').value;

    const quality = document.querySelector('input[name="food_quality"]:checked').value;
    const service = document.querySelector('input[name="food_service"]:checked').value;
    const ambience = document.querySelector('input[name="ambience"]:checked').value;
    const cleanliness = document.querySelector('input[name="cleanliness"]:checked').value;
    const overall_experience = document.querySelector('input[name="overall_experience"]:checked').value;

    //Replace Your form action url
    const googleFormURL = "https://docs.google.com/forms/d/e/your_form_action_URL/formResponse";
    const formData = new FormData();

    // Replace Your google form field id by using inspect mode (F12 or Q)
    formData.append('entry.Your_Field_ID', name);
    formData.append('entry.Your_Field_ID', mobile);
    formData.append('entry.Your_Field_ID', comments);
    formData.append('entry.Your_Field_ID', billno);
    formData.append('entry.Your_Field_ID', quality);
    formData.append('entry.Your_Field_ID', service);
    formData.append('entry.Your_Field_ID', ambience);
    formData.append('entry.Your_Field_ID', cleanliness);
    formData.append('entry.Your_Field_ID', overall_experience);

    fetch(googleFormURL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    }).then(response => {
        alert("Thank you for your feedback!" + "\n" + "Feedback submitted successfully!");
    }).catch(error => {
        console.error('There was an error submitting your feedback.', error.message);
    });
});
