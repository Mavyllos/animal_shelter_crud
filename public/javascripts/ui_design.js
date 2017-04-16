$( "#adoptableAnimals" ).click(function() {
  $(".adoptedPet").addClass("hidden");
  $(".availablePet").removeClass("hidden");
});

$( "#adoptedAnimals" ).click(function() {
  $(".availablePet").addClass("hidden");
  $(".adoptedPet").removeClass("hidden");
});

function checkvalue(val) {
    if(val==="Other") {
       document.getElementById('pet-kind').style.display='block';
       if (val==="Other") {
         element.innerHTML = "#pet-kind.val";
          }
    } else {
      document.getElementById('pet-kind').style.display='none';
  }
}
