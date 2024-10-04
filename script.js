let cropper; // Khai báo biến cropper

        document.querySelector('#btn-crop').addEventListener('click', function() {
            if (cropper) { // Kiểm tra nếu cropper đã được khởi tạo
                var croppedImage = cropper.getCroppedCanvas().toDataURL("image/png");
                document.getElementById('output').src = croppedImage;
                document.querySelector(".cropped-container").style.display = 'flex';
            }
        });

        function loadImage(event) {
            const image = document.getElementById('image');
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();

                reader.onload = function(e) {
                    image.src = e.target.result; 
                    image.style.display = 'block'; 

                    // Khởi tạo Cropper sau khi ảnh đã được tải
                    if (cropper) {
                        cropper.destroy(); // Hủy cropper cũ nếu đã có
                    }
                    cropper = new Cropper(image, {
                        aspectRatio: 1.7777777777777777,
                        viewMode: 1, // Cho phép cắt ảnh trong khung
                    });
                }

                reader.readAsDataURL(file);
            }
        }