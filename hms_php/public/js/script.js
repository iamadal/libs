 document.addEventListener('DOMContentLoaded', function() {
            let btnShowAll = document.getElementById('btnRemove');

            btnShowAll.addEventListener('click', function() {
                let tds = document.querySelectorAll('.del.hide');
                tds.forEach(function(td) {
                    td.classList.remove('hide'); 
                });
            });
        });