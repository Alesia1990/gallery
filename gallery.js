
const gallery = function() {
    let galleryPreviewBlock = document.querySelector(".gallery__preview");
    galleryPreviewBlock.hidden= true;

    let btnDel = galleryPreviewBlock.querySelector(".gallery__preview_close");

    let galleryThumb = document.querySelectorAll(".gallery__thumbs li");

    galleryThumb.forEach(function(li){

        function showGgalleryPreview(event){
            
            event.preventDefault();
            galleryPreviewBlock.hidden= false;
            let getSRC = li.querySelector("a").getAttribute("href");
            let fullImg = document.createElement("img");
            fullImg.setAttribute("src", getSRC);
            galleryPreviewBlock.appendChild(fullImg);

            if(galleryPreviewBlock.children.length == 3){
                galleryPreviewBlock.removeChild(galleryPreviewBlock.children[1]);
            }

            btnDel.addEventListener("click", function(){
                galleryPreviewBlock.removeChild(galleryPreviewBlock.children[1]);
                galleryPreviewBlock.hidden= true;
            });
            
        };
        li.addEventListener("click", showGgalleryPreview)

    })


}
gallery();