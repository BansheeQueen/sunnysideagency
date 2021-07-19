  function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };
  
   const headers = document.querySelectorAll('#header');
  
   function checkSlide(e) {
      headers.forEach(header => {
        const slideInAt = (window.scrollY + window.innerHeight) - header.offsetHeight * 2;
        const isShown = slideInAt > header.offsetTop * 1.2;
        if(isShown) {header.classList.add('active')}
      });
   };
  
   window.addEventListener('scroll', debounce(checkSlide));