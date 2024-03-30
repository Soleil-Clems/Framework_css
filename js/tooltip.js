document.addEventListener("DOMContentLoaded", function() {
  const tooltips = document.querySelectorAll('.tooltip');
  
  tooltips.forEach(tooltip => {
    const tooltipText = tooltip.getAttribute('title');
    const placement = tooltip.getAttribute('data-placement');
    
    if (tooltipText) {
      tooltip.removeAttribute('title'); // Pour éviter l'affichage double
      
      const tooltipElement = document.createElement('span');
      tooltipElement.classList.add('tooltip-text');
      tooltipElement.innerText = tooltipText;
      tooltip.appendChild(tooltipElement);
      
      const arrowElement = document.createElement('span');
      arrowElement.classList.add('arrow');
      tooltip.appendChild(arrowElement);
      
      tooltipElement.style.visibility = 'hidden';
      tooltipElement.style.width = '200%';
      tooltipElement.style.backgroundColor = 'black';
      tooltipElement.style.color = '#fff';
      tooltipElement.style.textAlign = 'center';
      tooltipElement.style.padding = '5px';
      tooltipElement.style.borderRadius = '6px';
      tooltipElement.style.position = 'absolute';
      tooltipElement.style.zIndex = '888888888';
      
      arrowElement.style.position = 'absolute';
      arrowElement.style.width = '0';
      arrowElement.style.height = '0';
      
      arrowElement.style.zIndex = '888888888';
      
      tooltip.addEventListener('mouseover', function() {
        tooltipElement.style.visibility = 'visible';
        tooltipElement.style.display = 'flex';
        
       
        switch (placement) {
          case 'top':
            tooltipElement.style.bottom = 'calc(100% + 10px)';
            tooltipElement.style.left = '50%';
            tooltipElement.style.transform = 'translateX(-50%)';
            
            arrowElement.style.borderWidth = '5px';
            arrowElement.style.borderColor = 'black transparent  transparent  transparent';
            arrowElement.style.bottom = 'calc(100%)';
            arrowElement.style.left = '50%';
            arrowElement.style.transform = 'translateX(-50%)';
            arrowElement.style.borderStyle = 'solid';
            break;
          case 'bottom':
            tooltipElement.style.top = 'calc(100% + 10px)';
            tooltipElement.style.left = '50%';
            tooltipElement.style.transform = 'translateX(-50%)';
            
            arrowElement.style.borderWidth = '5px';
            arrowElement.style.borderColor = 'transparent transparent black transparent';
            arrowElement.style.top = 'calc(100%)';
            arrowElement.style.left = '50%';
            arrowElement.style.transform = 'translateX(-50%)';
            arrowElement.style.borderStyle = 'solid';
            break;
          case 'left':
            tooltipElement.style.top = '50%';
            tooltipElement.style.right = 'calc(100% + 5px)';
            tooltipElement.style.transform = 'translateY(-50%)';
            
            arrowElement.style.borderWidth = '5px';
            arrowElement.style.borderColor = 'transparent transparent  transparent black ';
            arrowElement.style.top = '50%';
            arrowElement.style.left = '-5px';
            arrowElement.style.transform = 'translateY(-50%)';
            arrowElement.style.borderStyle = 'solid';
            break;
          case 'right':
            tooltipElement.style.top = '50%';
            tooltipElement.style.left = 'calc(100% + 5px)';
            tooltipElement.style.transform = 'translateY(-50%)';
            
            arrowElement.style.borderWidth = '5px';
            arrowElement.style.borderColor = 'transparent black  transparent transparent';
            arrowElement.style.top = '50%';
            arrowElement.style.right = '-5px';
            arrowElement.style.transform = 'translateY(-50%)';
            arrowElement.style.borderStyle = 'solid';
            break;
        }
      });
      
      tooltip.addEventListener('mouseleave', function() {
        tooltipElement.style.visibility = 'hidden';
        tooltipElement.style.display = 'none';
      });
    }
  });
});
