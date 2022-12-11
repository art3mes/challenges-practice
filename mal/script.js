window.addEventListener('load', function() {
    document.addEventListener('click', function(event) {
      document.querySelectorAll('.dropdown,.bluet1_drop,.bluet2_drop').forEach(function(class_holder) {
        if (class_holder !== event.target) 
            class_holder.classList.remove('show');
      });
      if (event.target.matches('.cate')) {
        event.target.closest('.cate').querySelector('.dropdown').classList.toggle('show');
      }
      if (event.target.matches('.bluet1')) {
        event.target.closest('.bluet1').querySelector('.bluet1_drop').classList.toggle('show');
      }
      if (event.target.matches('.bluet2')) {
        event.target.closest('.bluet2').querySelector('.bluet2_drop').classList.toggle('show');
      }
    })
}) 

//do coloring
