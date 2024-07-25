



window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            var contentLink = `a[href="#${id}"]`
            if (entry.intersectionRatio > 0) {
                document.querySelector(contentLink).parentElement.classList.add('active');
                // alert(document.querySelector(contentLink).parentElement)

            }
            else {
                document.querySelector(contentLink).parentElement.classList.remove('active');
                // alert("else")
            }
        });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('div[id]').forEach((div) => {
        observer.observe(div);
    });

});


// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("myImg1");
var modalImg1 = document.getElementById("img01");
var captionText = document.getElementById("caption1");
img1.onclick = function () {
    modal1.style.display = "block";
    modalImg1.src = this.src;
    captionText.innerHTML = this.alt;
}

var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");
var captionText = document.getElementById("caption1");
img2.onclick = function () {
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span1 = document.getElementById("close1");
var span2 = document.getElementById("close2");
// var span2 = document.getElementsByClassName("close");
// alert(span1)

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
    modal1.style.display = "none";
}
span2.onclick = function () {
    modal2.style.display = "none";
}
        // span2.onclick = function () {
        //     modal2.style.display = "none";
        // }