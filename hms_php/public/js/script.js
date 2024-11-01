document.addEventListener('DOMContentLoaded', function() {
    let btnShowAll = document.getElementById('btnRemove');
    let btn = document.getElementById('speaker_name');

    btnShowAll.addEventListener('click', function() {
        let tds = document.querySelectorAll('.del.hide');
        tds.forEach(function(td) {
            td.classList.remove('hide'); 
        });
    });

    btn.addEventListener('click', function() {
        console.log('Sent');
        fetch('/read')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log('Received data:', data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    });
});




 document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('speaker_name').addEventListener('input', function() {
            const query = this.value;
            if (query.length > 0) {
                fetch(`/read?q=${query}`) 
                    .then(response => response.json())
                    .then(responseData => {
                        console.log(responseData); 
                        if (responseData.status === 'success' && Array.isArray(responseData.data)) {
                            const suggestionsContainer = document.getElementById('suggestions');
                            suggestionsContainer.innerHTML = ''; 
                            responseData.data.forEach(item => {
                                const div = document.createElement('div');
                                div.classList.add('suggestion-item');
                                div.textContent = "ID:" + item.sid + " - " + item.name + " - " + item.designation + " ,"+item.office+" - BDT:"+item.hpr; 
                                div.onclick = function() {
                                    document.getElementById('speaker').value = item.name;
                                    document.getElementById('sid').value = item.sid;
                                    document.getElementById('sid').setAttribute('readonly','true');
                                    document.getElementById('designation').value = item.designation;
                                    document.getElementById('office').value = item.office;
                                    document.getElementById('honorarium').value = item.hpr; 
                                    document.getElementById('speaker_name').value = '';
                                 
                                    suggestionsContainer.innerHTML = ''; 
                                };
                                suggestionsContainer.appendChild(div);
                            });
                        } else {
                            console.error('Expected data to be an array:', responseData);
                        }
                    })
                    .catch(error => {
                        console.error('Error fetching suggestions:', error);
                    });
            } else {
                document.getElementById('suggestions').innerHTML = ''; // Clear suggestions if input is empty
            }
        });
    });