const mainPhoto = document.querySelector(".hero");
const heading = document.querySelector(".hero-heading");
const paragraph = document.querySelector(".hero-desc")

const slides = [
    {
      image: "/images/desktop-image-hero-1.jpg",
      heading: "Discover innovative ways to decorate",
      text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andr vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    }, 
    {
      image: "/images/desktop-image-hero-2.jpg",
      heading: "We are available all across the globe",
      text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
      image: "/images/desktop-image-hero-3.jpg",
      heading: "Manufactured with the best materials",
      text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
   ];

   const mobileImages = [
     {
       image: "/images/mobile-image-hero-1.jpg"
     },
     {
      image: "/images/mobile-image-hero-2.jpg"
    },
    {
      image: "/images/mobile-image-hero-3.jpg"
    }
   ];

   let i = 0;

function show() {
  let width = screen.width;
  heading.textContent = slides[i].heading;
  paragraph.textContent = slides[i].text;
  if(width < 500) {
    mainPhoto.style.background = "url('" + mobileImages[i].image + "')";  
    mainPhoto.style.backgroundPosition = "0% 0%";
    mainPhoto.style.backgroundSize = "cover";
  }
  else {
    mainPhoto.style.background = "url('" + slides[i].image + "')";
    mainPhoto.style.backgroundPosition = "50% 80%";
    mainPhoto.style.backgroundSize = "cover";
  }
  
  //mainPhoto.style.backgroundSize = "cover";
  mainPhoto.style.backgroundRepeat = "no-repeat";
  mainPhoto.style.minHeight = "400px";
  mainPhoto.style.width = "100%";
}
show();


function slideNextImg() {
    //console.log("hello");
   i++;
  if (i > slides.length - 1) {
    i = 0;
  } 
  show();
}

function slidePrevImg() {
  i--;
 if (i < slides.length - slides.length) {
   i = slides.length - 1;
 } 
 show();
}

/*




<script>
        document.querySelector("#hamburger").addEventListener("click", () => {
            let links = document.getElementById("links");
            let icon = document.getElementById("icon");
            if(links.style.display === "flex") {
                links.style.display = "none";
            }
            else {
                links.style.display = "flex";
            }
        })
    </script>
*/